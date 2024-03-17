import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoLists from "./TodoList";
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

export default function TodoComponent() {

    const [user, setUser] = useState(null)
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

    const handleResponse = (credentialResponse) => {
        const decodedToken = jwtDecode(credentialResponse.credential)
        setUser(decodedToken)
    }
    const handleError = (error) => {
        alert(error)
    }
    const handleLogout = () => {
        googleLogout();
        setUser(null)
    }

    return (
        <>
            {user ? <div className="main-div">
                <TodoInput addListItems={addListItems} />
                <TodoLists listItems={listItems} setListItems={setListItems} />
                <button className="logoutbtn" onClick={handleLogout}>Log Out</button>
            </div> : <div className="frontpage">
                <GoogleLogin onSuccess={handleResponse} onError={handleError} />
                </div>}

            </>

    );
}