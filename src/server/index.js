import express from 'express';
import { serverRender } from './util';

const app = express();

// 引入公共文件
app.use(express.static('static'));

app.get('*', (req, res) => {
  // 返回结果路由字符串
  res.send(serverRender(req));
})

const server = app.listen(3000);

// koa

// import { serverRender } from './util';
// const Koa = require('koa');
// const serve = require('koa-static');
// const app = new Koa();
// const Router = require('koa-router');

// let route = new Router();

// // 引入公共文件
// app.use(serve(__dirname, './static'))
// route.get('*', (ctx, next)=> {
//   console.log(ctx)
//   console.log(next)
//   // 返回结果路由字符串
//   ctx.body = serverRender(ctx);
// })

// app.use(route.routes());

// const server = app.listen(3000);