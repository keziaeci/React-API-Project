import React from 'react'
import { useEffect, useState } from "react";
import { Todo } from '../../Components/Todo'
import axios from 'axios';

export const Home = () => {
    const [getTodo, setTodo] = useState([])

    useEffect(() => {
        const getTodos = async () => {
            try {
                const response = await fetch('http://localhost:8000/todos')
                const data = await response.json()
                // console.table(data)
                setTodo(data)
            } catch (error) {
                console.log(error);
            }
        }
        getTodos()
    }, [getTodo])

    return (
        <>
            <Input/>
            <div className='m-20 flex justify-center flex-wrapp-10'>
                <ul>
                    {getTodo.map((data) => 
                        <Todo todo={data.title} done={data.done} id={data.id} key={data.id} />
                    )}
                </ul>
            </div>
            {/* <input type="checkbox" checked="checked" className="checkbox" /> */}
        </>
    )
}

export const Input = () => {
    const [getTitle, setTitle] = useState("")

    const addTodo = async () => { 
        const newTodo = {title:getTitle, done:false}

        try {
            await axios.post('http://localhost:8000/todos' , JSON.stringify(newTodo) , {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (error) {
            console.log(error);
        } finally {
            setTitle('')
        }

    }

    return (
            <div className='m-20 justify-center gap-2 flex p-10'>
                {/* {getTitle} */}
                <input type="text" value={getTitle} onChange={(e) => setTitle(e.target.value)} placeholder="Type here" className="input input-ghost w-full max-w-xs focus:bg-transparent focus:outline-none" />
                {getTitle &&
                
                    <button className='btn btn-secondary' type='submit' onClick={addTodo}>Add</button>
                }
            </div>
        )
}

