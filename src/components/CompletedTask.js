import React from 'react';
import Header from './Header';
import { TiTick } from 'react-icons/ti'
import { useQuery } from 'react-query';

const CompletedTask = () => {
    const { data: completed, isLoading, refetch } = useQuery('completed', () => fetch('http://localhost:5000/complete', {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <div className='flex justify-center mt-5'><button class="btn btn-square loading"></button></div>
    }
    return (
        <div>
            <Header />
            <h2 className='text-center text-2xl font-bold mt-4'>Complete Task</h2>
            <div>
                <div>

                    {
                        completed.map(complete =>
                            <div>
                                <div className='flex items-center gap-3 pl-10'>
                                    <TiTick />
                                    <del className=''>{complete.title}</del>
                                </div>
                                <div className='pl-16'>
                                    <p className='text-slate-500'>{complete.details}</p>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default CompletedTask;