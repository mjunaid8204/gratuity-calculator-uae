import React from 'react';
import { motion } from 'framer-motion';

const GratuityCalculatorForm = () => {
  // Define state for each of the inputs
  const [housingAllowance, setHousingAllowance] = React.useState(0);
  const [transportAllowance, setTransportAllowance] = React.useState(0);
  const [deductions, setDeductions] = React.useState(0);
  const [domesticWorkers, setDomesticWorkers] = React.useState(false);
  const [contractType, setContractType] = React.useState('');
  const [endOfServiceReason, setEndOfServiceReason] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <motion.div whileHover={{ scale: 1.05 }}>
        <label>Housing Allowance:</label>
        <input type="number" onChange={(e) => setHousingAllowance(e.target.value)} />
      </motion.div>
      
      <motion.div whileHover={{ scale: 1.05 }}>
        <label>Transport Allowance:</label>
        <input type="number" onChange={(e) => setTransportAllowance(e.target.value)} />
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }}>
        <label>Deductions:</label>
        <input type="number" onChange={(e) => setDeductions(e.target.value)} />
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }}>
        <label>
          <input type="checkbox" onChange={(e) => setDomesticWorkers(e.target.checked)} />
          Domestic Workers Option
        </label>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }}>
        <label>Contract Type:</label>
        <select onChange={(e) => setContractType(e.target.value)}>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
        </select>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }}>
        <label>End of Service Reason:</label>
        <select onChange={(e) => setEndOfServiceReason(e.target.value)}>
          <option value="resignation">Resignation</option>
          <option value="termination">Termination</option>
        </select>
      </motion.div>

      <button type="submit">Calculate Gratuity</button>
    </motion.form>
  );
};

export default GratuityCalculatorForm;