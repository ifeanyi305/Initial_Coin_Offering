// eslint-disable-next-line
import PropTypes from 'prop-types';
import React from 'react';

const FormFeild = ({ inputType, label }) => (
  <div>
    <label htmlFor="userinput" className="dark:text-[#fff]" aria-label="">{label}</label>
    <input
      id="userinput"
      className="input border-2 p-4 border-[#D50DA8] bg-[#fff] dark:bg-[#000] dark:border-[#fff] rounded-2xl block"
      type={inputType}
    />
  </div>
);

FormFeild.propTypes = {
  inputType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormFeild;
