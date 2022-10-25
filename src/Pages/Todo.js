import React, { useEffect, useState } from 'react';
import Items from './Items';
import './Todo.css'
const Todo = () => {
    const [items, setItems] = useState([])
useEffect(()=>{
    fetch("http://localhost:5000/addItem")
    .then(res=>res.json())
    .then(data=>setItems(data))
})

    const formSubmit = (e) => {
        e.preventDefault()
        const name = e.target.todo.value;

        fetch("http://localhost:5000/addItem", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        })
            .then(res => res.json())
            .then(data => console.log(data))


           
        e.target.reset()
    }

    return (
        <div className='mainDiv'>
           
            <form className='form' onSubmit={formSubmit} >
                <input className='text-input' placeholder='Add todo item' type="text" name="todo" />
                <input type="submit" value="+" />
            </form>


            <div className='todo-list'>

               {
                items.map(item=> <Items
                item={item}
                >

                </Items>
                
                )
               }
               
            </div>
        </div>
    );
};

export default Todo;