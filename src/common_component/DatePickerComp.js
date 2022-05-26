import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComp = (props) => {

  const {
    selected,
    label,
    labelClassName,
    onChange,
    disableDates,
    className,
    placeholder,
    dateFormat,
  } = props;

  const CustomInput = React.forwardRef((props, ref) => {
    return (
      <div
        className="d-flex flex-row justify-content-between align-items-center form-control"
        onClick={props.onClick} ref={ref}
      >
        <label >
          {props.value || props.placeholder}
        </label>
        <FontAwesomeIcon icon={faCalendarAlt} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <React.Fragment>
      <label className={labelClassName}>
        {label}{' '}
      </label>
      <DatePicker
        className={className}
        selected={selected}
        onChange={onChange}
        excludeDates={disableDates}
        placeholderText={placeholder}
        dateFormat={dateFormat}
        customInput={<CustomInput />}
      />
    </React.Fragment>
  );
}

DatePickerComp.defaultProps = {
  className: '',
  label: '',
  dateFormat: 'dd-MM-yyyy',
  placeholder: 'DD-MM-YYYY',
  labelClassName: '',
  selected: new Date(),
  disableDates: [],
};

DatePickerComp.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dateFormat: PropTypes.string,
  placeholder: PropTypes.string,
  labelClassName: PropTypes.string,
  disableDates: PropTypes.array,
  selected: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  onChange: PropTypes.func.isRequired,
};


export default React.memo(DatePickerComp, function (prevprops, nextprops) {
  return prevprops === nextprops;
});
