import Koa from 'koa'

import userRoutes from '../routes/users/index.js'

export default async port => {
  const app = new Koa()
  app.use(userRoutes.routes())
		
  return app.listen(port, () => {
    console.info(`> Ready on port ${port}`)
  })
}
