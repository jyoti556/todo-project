import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoLists from "./TodoList";



export default function TodoComponent() {

    const getItemsFromLocalStorage = () => {
        let todoitems = localStorage.getItem('todolist')
        if (todoitems) {
            return JSON.parse(localStorage.getItem('todolist'))
        }
        else {
            return []
        }
    }
    

    const [listItems, setListItems] = useState(getItemsFromLocalStorage())
    const addListItems = (items) => {
        setListItems([...listItems, items])
    }
    

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(listItems))
    }, [listItems])

   

    return (
        <>
             <div className="main-div">
                <TodoInput addListItems={addListItems} />
                <TodoLists listItems={listItems} setListItems={setListItems} />
            </div> 
        </>

    );
}