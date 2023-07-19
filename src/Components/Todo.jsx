import React from 'react'
import axios from 'axios';

export const Todo = ({todo , done, id}) => {

    const updateTodo = async () => { 
        done = !done
        await axios.patch(`http://localhost:8000/todos/${id}`, JSON.stringify({done: done}) ,{
            headers: {
                "Content-Type": "application/json"
            },
        })
    }
    return (
        <div className='flex flex-wrap justify-between w-64'>
            <li className={`${done ? 'line-through' : 'none'}`}>{todo} </li> <input type="checkbox" defaultChecked={done} onClick={updateTodo} className="checkbox" />
        </div>
    )
}
