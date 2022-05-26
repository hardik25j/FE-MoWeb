import React from 'react';
import Select, { createFilter } from 'react-select';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';

const DropDown = props => {
  const {
    isReqasterisk,
    label,
    errorMessage,
    name,
    labelClassName,
    onFocus,
    isDisabled,
    isClearable,
    placeholder,
    value,
    isMulti,
    options,
    isSortedOption,
  } = props;

  return (
    <div>
      { label && <label className={labelClassName} htmlFor={name}>
        {label}{' '}
        {isReqasterisk === true ? (
          <span style={{ color: 'red', fontSize: '17px' }}>
            <sup>*</sup>
          </span>
        ) : null}
      </label>
      }
      <Select
        name="dropdown"
        // onMenuOpen={onClick}
        onFocus={onFocus}
        {...props}
        classNamePrefix="prr"
        isClearable={isClearable}
        filterOption={createFilter({ matchFrom: 'start' })}
        // loadingMessage="Loading..."
        isDisabled={isDisabled}
        // maxMenuHeight={100}
        placeholder={placeholder}
        value={value}
        options={isSortedOption ? orderBy(options, option => option.label.length ? option.label.toLowerCase() : option.label) : options}
        isMulti={isMulti}
      />
      {errorMessage && (
        <span className="text-danger">{errorMessage.replace("enter", "select")}</span>
      )}
    </div>
  );
};

DropDown.defaultProps = {
  className: '',
  label: '',
  isReqasterisk: false,
  name: '',
  isMulti: false,
  isClearable: true,
  isSortedOption: true,
  errorMessage: '',
  labelClassName: '',
  onFocus: () => { },
  isDisabled: false,
};

DropDown.propTypes = {
  errorMessage: PropTypes.string,
  labelClassName: PropTypes.string,
  onFocus: PropTypes.func,
  isDisabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  isClearable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  isMulti: PropTypes.bool,
  options: PropTypes.array.isRequired,
  isReqasterisk: PropTypes.bool,
  isSortedOption: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default React.memo(DropDown, function (prevprops, nextprops) {
  return prevprops === nextprops;
});
