
import { useState } from "react";
import MortgageForm from "../Components/MortgageForm";
import MortgageResult from "../Components/MortgageResult";

function MortgageBox () {
   
    const [total, setTotal] = useState(0);
    const handleFormTotal = function(number){
        setTotal(number);
    }

    return(
    <>
     <h2>Enter your details:</h2>
     <MortgageForm handleTotal={handleFormTotal}/>
     <MortgageResult total={total}/>
    </>
    )
}

export default MortgageBox;