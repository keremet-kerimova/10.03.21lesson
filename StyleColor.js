import { useState } from "react"

function StyleColor() {
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);
    return (
        <div className="StyleColor"  style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
            <div>
                <input type="range" value={r} min="0" max="255" onInput={({target}) => setR(target.value)} />
            </div>
            <div>
                <input type="range" value={g} min="0" max="255" onInput={({target}) => setG(target.value)} />
            </div>
            <div>
                <input type="range" value={b} min="0" max="255" onInput={({target}) => setB(target.value)} />
            </div>
        </div>
    );
}

    
export default StyleColor;