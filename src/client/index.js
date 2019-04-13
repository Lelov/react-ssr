import React from 'react';
import ReactDom from 'react-dom';
import Home from '../pages/Home';

// 渲染client的组件
ReactDom.hydrate(<Home />, document.getElementById('root'));
