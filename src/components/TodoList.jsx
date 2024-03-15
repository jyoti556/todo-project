import React from "react";

export default function TodoLists(props) {
    const deleteItem = (index) => {
        const newListItems = [...props.listItems];
        newListItems.splice(index, 1);
        props.setListItems(newListItems);
    };

    return (
        props.listItems.map((item, index) => {

            return <div className="List-items">
                <h4 key={index}>{item}</h4>
                <button onClick={deleteItem}>delete</button>
            </div>
        }

        )
    )
}