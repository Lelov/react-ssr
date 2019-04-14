import React from 'react';
import { renderToNodeStream } from 'react-dom/server'; // 实现ssr的关键模块
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';

// 服务器端渲染路由
export const serverRender = req => {
    // 内容
    const content = renderToNodeStream((
      // 服务器端静态路由
      // location={req.path} 获取请求路由
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    ));
    
    // 待返回的html字符串
    const pendingBackHtmlString =  `
      <html>
        <head>
          <title>title</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script src="/index.js"></script>
        </body>
      </html>
    `;

    return pendingBackHtmlString;
}