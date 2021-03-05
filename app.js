const Koa = require('koa')
const KoaRouter = require('koa-router')

const app = new Koa()
const router = new KoaRouter()


router.get('/info', async ctx => {
  ctx.body = {
    username: 'zy',
    gender: 'lady'
  }
})

app.use(router.routes())
app.listen(9999)