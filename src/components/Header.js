import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-200">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Task</Link></li>
                            <li><Link to='/complete'>Completed Task</Link></li>
                            <li><Link to='/cal'>Calender</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button class="btn btn-ghost normal-case text-xl">Daily Task</button>
                </div>

            </div>
        </div>
    );
};

export default Header;