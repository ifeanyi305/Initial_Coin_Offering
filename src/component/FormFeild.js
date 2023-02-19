// eslint-disable-next-line
import PropTypes from 'prop-types';
import React from 'react';

const FormFeild = ({
  inputType, label, handleChange, value,
}) => (
  <div>
    <label htmlFor="userinput" className="dark:text-[#fff]" aria-label="">{label}</label>
    <input
      // id="userinput"
      required
      className="input border-2 p-4 border-[#D50DA8] bg-[#fff] dark:bg-[#D9D9D9] dark:border-[#fff] rounded-2xl block"
      type={inputType}
      value={value}
      onChange={handleChange}
    />
  </div>
);

FormFeild.defaultProps = {
  value: '',
};

FormFeild.propTypes = {
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,

};

export default FormFeild;
