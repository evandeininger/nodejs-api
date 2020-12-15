import request from 'supertest'
import app from '../../app/index.js'
import dbSetup, { knex } from '../../lib/dbSetup.js'

describe('the users library', ()=>{
	let server
	before(async()=>{
		dbSetup()
		server = await app()
	})
	it('add users to the db', async ()=>{
		const res = await request(server).get('/users')
		console.log('res.body', res.text)
	})
})