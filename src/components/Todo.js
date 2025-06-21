import React, { useState } from 'react'
import './todo.css';

const Todo = () => {
    const [Item, setItem] = useState("");
    const [TodoList, setTodoList] = useState([]);
    const [CompletedList, setCompletedList] = useState([]);
    const setInput = (e) => {
        setItem(e.target.value);
    }

    const setStatus = (e,index) => {
        var new1;
        if(e.target.value === 'false'){
            new1 = TodoList.filter((val,i)=>{
                if(i === index){
                    setCompletedList([...CompletedList,val]);
                    return false;
                }else{
                    return true;
                }
            });
            setTodoList(new1);
        }else{
            new1 = CompletedList.filter((val,i)=>{
                if(i === index){
                    setTodoList([...TodoList, val]);
                    return false;
                }else{
                    return true;
                }
            });
            setCompletedList(new1);
        }
    }

    const setList = (e) => {
        setTodoList([...TodoList, Item]);
        setItem('');
    }
    const deleteTodo = (index) => {
        setTodoList((old)=>{
            return old.filter((arr,ind)=>{
                return ind !== index;
            });
        });
    }
    const deleteCompleted = (index) => {
        setCompletedList((old)=>{
            return old.filter((arr,ind)=>{
                return ind !== index;
            });
        });
    }

    return (
        <>
            <div className="container">
                <h2>TODO LIST</h2>
                <h3>Add Item</h3>
                <p>
                    <input type="text" name="item" value={Item} onChange={setInput} /><button type='button' onClick={setList}>Add</button>
                </p>

                <h3>Todo</h3>
                <ul id="incomplete-tasks">
                    {
                        TodoList.length !== 0 
                        ? 
                        TodoList.map((val, index) => {
                            return <li key={index}>
                                <input type="checkbox" value={false} onChange={(event)=>{ setStatus(event,index) }} /><label>{val}</label>
                                <button className="delete" onClick={(event)=>{ deleteTodo(index)}}>Delete</button>
                            </li>
                        })
                        :
                        <div>No Item</div>
                    }
                </ul>

                <h3>Completed</h3>
                <ul id="completed-tasks">
                    {
                        CompletedList.length !== 0 
                        ? 
                        CompletedList.map((val, index) => {
                            return <li key={index}>
                                <input type="checkbox" checked value={true} onChange={(event)=>{ setStatus(event,index) }} /><label>{val}</label>
                                <button className="delete" onClick={(event)=>{ deleteCompleted(index) }}>Delete</button>
                            </li>
                        })
                        :
                        <div>No Item</div>
                    }
                </ul>
            </div>

        </>
    )
}

export default Todo
