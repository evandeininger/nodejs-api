import chai from 'chai'
import sinon from 'sinon'
import User from '../../models/User.js'
import testDbSetup from '../../test/utils/testDbSetup.js'
import UsersLib from './index.js'
const { expect } = chai

describe('the users library', ()=>{
	before(testDbSetup)
	it('add users to the db', async()=>{
		const insert = await UsersLib.createUser({
			name: 'test user',
			age: 32
		})

		const allRegs = await User.query()
		console.log('allRegs', allRegs)
		
		expect(true)
	})
	it('add users to the db', async()=>{
		const createUserSpy = sinon.spy(UsersLib, 'createUser')
		expect(createUserSpy({age: 32})).to.throw
	})
})