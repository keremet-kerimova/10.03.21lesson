import { useState } from "react"

function InputRate({value}) {  
        let [usd, set] = useState (value ?? 0);
        return(
            <div>
                  <h1>{usd}</h1>
        <input 
        type="number"  
        onInput={(e) => set(e.target.value * 85)}/>
        </div>
        )
      
    }
export default InputRate;