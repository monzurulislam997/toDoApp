import React from 'react';

const Items = ({item}) => {
    return (
        <div className='list-item'>
                    <h4 className='todo-name'>{item?.name}</h4>
                    <div>
                        <button className='update' >Update</button>
                        <button className='delete'>Delete</button>
                    </div>
                </div>
    );
};

export default Items;