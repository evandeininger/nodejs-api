import { exec } from 'child_process'

const cb = run || (() => {})
setTimeout(cb, 6000)

before(done => {
  // clear test DB
  if (process.env.USE_SQL_FILE){
    exec('rm -f ./db.test.sqlite3 && npm run migrate', (err, stdout, stderr) => {
      if (err) {
        console.log(`stderr: ${stderr}`)
        return
      }
      console.log(`stdout: ${stdout}`)
      done()
    })
  } else {
    done()
  }
})
