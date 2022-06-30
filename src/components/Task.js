import React, { useState } from 'react';

const Task = () => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const handleTitleChange = e => {
        setTitle(e.target.value)
    }
    const handleDetailsChange = e => {
        setDetails(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(title, details);
    }
    return (
        <div className='pl-10'>
            <div class="collapse">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    Add a task
                </div>
                <div class="collapse-content">
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleTitleChange} className='p-2 outline-0 focus:border-b-2 focus:border-slate-500 mt-3' type="text" name="title" placeholder='Title' /> <br />
                        <input onChange={handleDetailsChange} className='p-2 outline-0 focus:border-b-2 focus:border-slate-500 mt-3' type="text" name="details" placeholder='Details' />
                        <input type="submit" value="" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Task;