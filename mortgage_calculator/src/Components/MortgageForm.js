import { useState } from "react";

function MortgageForm ({handleTotal}) {
    
    const [salary, setSalary] = useState("");
    const [partnerSalary, setPartnerSalary] = useState("");
    const [maxPropertyValue, setMaxPropertyValue] = useState("");
    

    const handleSalaryChange = (evt) => {
        setSalary(evt.target.value);
    }

    const handlePartnerSalaryChange = (evt) => {
       setPartnerSalary(evt.target.value);
    }

    const handlePropertyValueChange = (evt) => {
        setMaxPropertyValue(evt.target.value);
    }


    const handleFormSubmit = (evt) => {
       evt.preventDefault();
       const salaryToSubmit = salary.trim();
       const propertyValueToSubmit = maxPropertyValue.trim();
       if(!salaryToSubmit || !propertyValueToSubmit){
           return 
       }
       
       if (!partnerSalary){
        handleTotal(salaryToSubmit*3);   
       }
       else{    
        const combinedSalary = salaryToSubmit + partnerSalary;
        handleTotal(combinedSalary * 3)
       }
    }


    return(

   <form onSubmit={handleFormSubmit}>
    <input
    class="input"
    type="text"
    placeholder="Your Salary"
    value={salary}
    onChange={handleSalaryChange}
    />
    <input
    class="input"
    type="text"
    placeholder="Your Partner's Salary (optional)"
    value={partnerSalary}
    onChange={handlePartnerSalaryChange}
    /> 
   <input
   class="input"
    type="text"
    placeholder="Your max property value"
    value={maxPropertyValue}
    onChange={handlePropertyValueChange}
    />
   <input
   id="submitButton"
   type="submit"
   value="Calculate"
   />

   </form>
    
    )
}

export default MortgageForm;