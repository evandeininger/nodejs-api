import Router from 'koa-router'
import User from '../../models/User.js'
import json2html from 'json2html'

var router = new Router({
	prefix: '/tables'
})

router.get('/users', async ctx => {
	const users = await User.query()
	
	ctx.set('Content-Type', 'text/html')
	ctx.body = json2html.render(users)
	// ctx.body = json2html.render({users}) // the "right" way
})

export default router
