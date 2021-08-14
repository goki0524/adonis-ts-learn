import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class UsersController {
  
  public async index() {
    
  }

  public async store({ request }: HttpContextContract) {
    const userSchema = schema.create({
      name: schema.string(),
      age: schema.number(),
      email: schema.string(),
    })

    const data = await request.validate({
      schema: userSchema,
    })

    console.log(data)
  }

  
}
