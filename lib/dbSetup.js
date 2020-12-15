import Knex from 'knex'
import { Model } from 'objection'
import knexConfig from '../knexfile.js'

export let knex = {}

export default (knexConfigOverride={})=>{
	knex = Knex({
		...knexConfig,
		...knexConfigOverride
	})
	Model.knex(knex)
}
