import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'; // 实现ssr的关键模块

import Home from './pages/Home';

const app = express();

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

  res.send(renderToString(<Home />))
})

const server = app.listen(3000);