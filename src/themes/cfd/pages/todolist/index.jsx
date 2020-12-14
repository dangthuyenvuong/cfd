import React, { useState } from 'react';
import TodoItem from "./components/TodoItem";
import './style.scss';
import { createStore, combineReducers } from 'redux';


import { Provider } from 'react-redux'


// function todoApp(state = [], action){
//     switch(action.type){
//         case 'ADD'
//         break;

//     }
// }

export default function ToDoList() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItem(event) {
        setItems(prevData => {
            return [...prevData, input];
        });

        setInput("");
    }

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    return (
        <Provider>
            <div id="todolist">
                <div className="todolist">
                    <div className="heading">
                        <h1 className="title">To-Do List</h1>
                    </div>
                    <input
                        type="text"
                        value={input}
                        onChange={(event) => { setInput(event.target.value) }}
                    />
                    <button onClick={addItem}>Add</button>

                    <div className="items">
                        <ul>
                            {items.map((item, index) => (
                                <TodoItem
                                    key={index}
                                    id={index}
                                    item={item}
                                    onCheck={removeItem}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Provider>

    );
}