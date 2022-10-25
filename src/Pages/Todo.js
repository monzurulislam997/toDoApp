import React, { useEffect, useState } from 'react';
import Items from './Items';
import './tOdo.css'
const Todo = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allitems")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])

    const formSubmit = (e) => {
        e.preventDefault()

        const name = e.target.todo.value;
        //error handle
        if (name === '') {
            return alert("Can not be empty")
        }

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

            <div className='form'>
                <form className='form' onSubmit={formSubmit} >
                    <input className='text-input' placeholder='Add todo item' type="text" name="todo" />
                    <input type="submit" value="+" />
                </form>

            </div>

            <div className='todo-list'>

                {
                    items.map(item => <Items
                    key={item._id}
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