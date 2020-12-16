import Koa from 'koa'

import userRoutes from '../routes/users/index.js'
import tablesRoutes from '../routes/tables'

export default async port => {
  const app = new Koa()
  app.use(userRoutes.routes())
    .use(tablesRoutes.routes())
		
  return app.listen(port, () => {
    console.info(`> Ready on port ${port}`)
  })
}
