import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import items from './Items';
import Story from './Story';
import Stories from './Stories'
import './index.css'



ReactDOM.render(
    <>
    <NavBar />
    <Stories stories={items} />
    </>,
    document.querySelector('#root')
);