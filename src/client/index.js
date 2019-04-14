import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';

const App = () => {
  return (
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  )
}

// 渲染client的组件
ReactDom.hydrate(<App />, document.getElementById('root'));
