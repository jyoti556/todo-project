import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoLists from "./TodoList";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton"


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
    
    const {user,isAuthenticated, isLoading } = useAuth0();
    const [specifiedUser,setSpecifiedUser]=useState(null);
    const [listItems, setListItems] = useState(getItemsFromLocalStorage())
    const addListItems = (items) => {
        setListItems([...listItems, items])
    }
    useEffect(() => {
        if (isAuthenticated && user) {
            const userTodoKey = `user_${user.sub}_todolist`;
            const storedTodos = localStorage.getItem(userTodoKey);
            setListItems(storedTodos ? JSON.parse(storedTodos) : []);
        }
    }, [user, isAuthenticated]);

    useEffect(() => {
        if (isAuthenticated && user) {
            const userTodoKey = `user_${user.sub}_todolist`;
            localStorage.setItem(userTodoKey, JSON.stringify(listItems));
        }
    }, [listItems, user, isAuthenticated]);

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(listItems))
    }, [listItems])

    if (isLoading) {
        return <div>Loading ...</div>;
      }

    return (
        <>
            {isAuthenticated ? <div className="main-div">
                <TodoInput addListItems={addListItems} />
                <TodoLists listItems={listItems} setListItems={setListItems} />
                <LogoutButton />
            </div> : <LoginButton />}
        </>

    );
}