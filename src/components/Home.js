import React from 'react';
import Header from './Header';
import Task from './Task';
import TaskList from './TaskList';

const Home = () => {
    return (
        <div>
            <Header />
            <Task />
            <TaskList />
        </div>
    );
};

export default Home;