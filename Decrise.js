import { useState } from "react"

function Decrise() {
        const [number, setNumber]=useState(0);
        
    return(
        <div className='Decrise'>
            <h1>{number}</h1>
            <button onClick={()=>setNumber(number--)}>Decrise</button>
            
        </div>
    );
}
    
export default Decrise;