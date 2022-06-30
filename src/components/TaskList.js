import React from 'react';
import { useQuery } from 'react-query'

const TaskList = () => {
    const { data: taskList, isLoading, refetch } = useQuery('taskList', () => fetch('http://localhost:5000/task', {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <div className='flex justify-center mt-5'><button class="btn btn-square loading"></button></div>
    }
    const handleDelete = id => {
        const task = {
            id: id._id,
            title: id.title,
            details: id.details
        }
        fetch(`http://localhost:5000/complete`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                const url = `http://localhost:5000/task/${id._id}`
                fetch(url, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch()
                    })

            })
    }
    return (
        <div>
            {
                taskList.map(task =>
                    <div key={task._id} className='pl-10 p-2'>
                        <div className='flex items-center gap-4'>
                            <input onClick={() => handleDelete(task)} type="checkbox" class="checkbox-xs" />
                            <h2 className='font-bold'>{task.title}</h2>
                        </div>
                        <p className='ml-8'>{task.details}</p>
                    </div>
                )
            }
        </div>
    );
};

export default TaskList;