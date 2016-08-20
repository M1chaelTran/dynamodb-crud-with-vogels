import koa from 'koa';
let app = koa();

import koaBody from 'koa-body';
app.use(koaBody());

import cors from 'koa-cors';
app.use(cors());

import model from './model';

import routes from './route';

app.use(routes.routes());

app.listen(3000);