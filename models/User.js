import { Model } from 'objection'

class User extends Model {
  static tableName = 'users'

  static jsonSchema = {
    type: 'object',
    required: ['name', 'age'],
    properties: {
      name: {
        type: 'string',
        maxLength: 430,
        minimum: 1,
      },
      age: {
        type: 'integer',
        minimum: 1,
        maximum: 200,
      }
    },
  }
}

export default User
