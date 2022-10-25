import React, { useState } from 'react';
import './Items.css'
const Items = ({ item }) => {
    const { _id, name } = item;
    const [updateId,setUpdateId]=useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    const handleDelete = (id) => {
        fetch(`https://todo-server-production.up.railway.app/delete/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }


    //update item
    const updateItem = (e) => {
        e.preventDefault()
        const updateItem = e.target.update.value;
        console.log(updateItem);
        fetch(`https://todo-server-production.up.railway.app/update/${updateId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({updateItem})
        }).then(res=>res.json())
        .then(data=>{
            if(data){
                hideInput()
            }
        })
    }

    //hide input 
    const hideInput = () => {
        setIsUpdate(false)
    }
const updateState=(id)=>{
    setIsUpdate(true)
    setUpdateId(id);
}


    return (
        <div className='list-item'>
            <div className='nameDiv' >
                {
                    isUpdate ?<form onSubmit={updateItem} className='form'>
                         <input className='update' name="update" placeholder='Update Your Item' type="text" id="" />
                         <input type="submit"  id='update-now' value="Update Now" />
                    
                    </form>
                    :
                        <p className='todo-name'>{name}</p>
                }
            </div>
            <div className='update-delte'>


                {
                    !isUpdate ? <div>
                        <button onClick={() => updateState(_id)} className='update' >Update</button>
                        <button onClick={() => handleDelete(_id)} className='delete'>Delete</button></div> : 
                        
                        <button className='hideInput' onClick={hideInput}>X</button>
                }
            </div>
        </div>
    );
};

export default Items;