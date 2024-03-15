import React, { useState } from "react";
export default function TodoInput(props) {
    const [list, setList] = useState("")
    const addItems = (event) => {
        setList(event.target.value)
    }
    return (
        <div className="todoinput">
            <input type="text" placeholder="Add items" onChange={addItems} value={list} />
            <button onClick={() => { { if (list != "") props.addListItems(list) }; setList("") }}>Add</button>
        </div>
    );
}