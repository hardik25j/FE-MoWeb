import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const {
    labelClassName,
    name,
    label,
    className,
    checked,
    onChange,
    onClick,
    placeholder,
    type,
    value,
    errorMessage,
    isDisabled,
    isReqasterisk,
  } = props;

  return (
    <>
      <label
        className={labelClassName}
        htmlFor={name}
        onClick={type === 'checkbox' ? () => props.onChange() : null}
      >
        {label}{' '}
        {isReqasterisk === true ? (
          <span style={{ color: 'red', fontSize: '17px' }}>
            <sup>*</sup>
          </span>
        ) : null}
      </label>
      <input
        checked={checked}
        className={className}
        disabled={isDisabled}
        min={props.min}
        name={name}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {errorMessage !== '' && (
        <span className="text-danger">{errorMessage}</span>
      )}
    </>
  );
};

Input.defaultProps = {
  className: '',
  label: '',
  labelClassName: 'text-black fw-700 fs-14 mb-0',
  name: '',
  onChange: () => {},
  onClick: () => {},
  placeholder: '',
  type: 'text',
  value: '',
  errorMessage: '',
};

Input.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default React.memo(Input, function(prevprops, nextprops) {
  return prevprops === nextprops;
});
