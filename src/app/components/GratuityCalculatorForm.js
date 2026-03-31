import React from 'react';
import { motion } from 'framer-motion';

const GratuityCalculatorForm = () => {
  return (
    <motion.form 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="gratuity-calculator-form"
    >
      <motion.div 
        className="input-group" 
        whileHover={{ scale: 1.05 }} 
      >
        <label htmlFor="housingAllowance">Housing Allowance</label>
        <input type="number" id="housingAllowance" name="housingAllowance" />
      </motion.div>

      <motion.div 
        className="input-group" 
        whileHover={{ scale: 1.05 }} 
      >
        <label htmlFor="transportAllowance">Transport Allowance</label>
        <input type="number" id="transportAllowance" name="transportAllowance" />
      </motion.div>

      <motion.div 
        className="input-group" 
        whileHover={{ scale: 1.05 }} 
      >
        <label htmlFor="deductions">Deductions</label>
        <input type="number" id="deductions" name="deductions" />
      </motion.div>

      <motion.div 
        className="input-group" 
        whileHover={{ scale: 1.05 }} 
      >
        <label htmlFor="contractType">Contract Type</label>
        <select id="contractType" name="contractType">
          <option value="fullTime">Full Time</option>
          <option value="partTime">Part Time</option>
          <option value="temporary">Temporary</option>
        </select>
      </motion.div>

      <motion.div 
        className="input-group" 
        whileHover={{ scale: 1.05 }} 
      >
        <label htmlFor="endOfServiceReason">End of Service Reason</label>
        <select id="endOfServiceReason" name="endOfServiceReason">
          <option value="voluntary">Voluntary</option>
          <option value="involuntary">Involuntary</option>
        </select>
      </motion.div>

      <motion.div 
        className="input-group" 
        whileHover={{ scale: 1.05 }} 
      >
        <label>
          <input type="checkbox" id="domesticWorker" name="domesticWorker" />
          Domestic Worker
        </label>
      </motion.div>

      <motion.button 
        type="submit" 
        whileTap={{ scale: 0.95 }} 
        transition={{ type: "spring", stiffness: 300 }}
        className="submit-button"
      >
        Calculate
      </motion.button>
    </motion.form>
  );
};

export default GratuityCalculatorForm;
