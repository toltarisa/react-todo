import React from 'react';
import ReactDom from 'react-dom'
import TodoList from './TodoList';
import './index.css';

const destination = document.querySelector('#root');

ReactDom.render(
    <div>
        <TodoList />
    </div>,
    destination
);
