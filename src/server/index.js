import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'; // 实现ssr的关键模块

import Home from '../pages/Home';

const app = express();

// 引入公共文件
app.use(express.static('static'));

// 内容
const content = renderToString(<Home />);

app.get('/', (req, res) => {
  // res.send(
  //   ` <html>
  //       <head>
  //         <title>title</title>
  //       </head>
  //       <body>
  //         <h1>express page</h1>
  //         <p>hello world</p>
  //       </body>
  //     </html>
  //   `
  // )

  res.send(`
    <html>
      <head>
        <title>title</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `)
})

const server = app.listen(3000);