import { useState } from "react";
export default function Counter() {
    const [num, setNum] = useState(5);


    return (
        <div>
            <p>The count is:{num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}