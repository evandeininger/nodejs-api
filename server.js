import app from "./app/index.js"
import dbSetup from "./lib/dbSetup.js"

(async () => {
	dbSetup
  await dbSetup()
  await app(4000)
})()