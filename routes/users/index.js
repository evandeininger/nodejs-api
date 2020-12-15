import Router from 'koa-router'
import Users from '../../lib/users/index.js'

var router = new Router({
	prefix: '/users'
})

router.get('/:name', async ctx => {
	Users.createUser({
		age: 21,
		name: ctx.params.name || 'name not provided'
	})
  ctx.body = 'HELLO!'
  ctx.status = 200
})

export default router
