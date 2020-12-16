import Router from 'koa-router'

var router = new Router()

router.get('/', async ctx => {
  ctx.body = 'home 🏡'
  ctx.status = 200
})

export default router
