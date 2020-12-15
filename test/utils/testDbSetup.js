import dbSetup, { knex } from "../../lib/dbSetup"

export default async ()=>{
	dbSetup({
		connection: ':memory:'
	})
	await knex.migrate.latest()
}