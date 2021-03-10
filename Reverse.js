import { useState } from "react";

function Reverse({ value }) {
    const [text, setText] = useState(value ?? "");


    let reversedText = text.split("").reverse().join("");
    return (
        <div className="Reverse">
            <input
                type="text"
                value={text}
                onInput={(event) => setText(event.target.value)} />
            <span>{reversedText}</span>
        </div>
    );
}
export default Reverse;