import User from '../../models/User.js'
import { knex } from '../dbSetup.js'

class UsersLib{
	async createUser(userObj){
		return await User.query().insert(userObj)
		// return await knex('users').insert(userObj) example of using knex instead of Objection if objection is a hindrance
	}
}

const UsersLibSingleton = new UsersLib()
export default UsersLibSingleton