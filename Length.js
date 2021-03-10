import { useState } from "react";

function Length({ value }) {
    const [text, setText] = useState(value ?? "");
    return (
        <div className="Length">
            <input
                type="text"
                value={text}
                onInput={(event) => setText(event.target.value)} /> {text.length}
        </div>
    );
}
export default Length;