'use strict'

const User = use('App/Models/User');

class UserController {
	async login({ request, auth }) {
		const { email, password } = request.all();
		const token = await auth.attempt(email,password);
		return token;
	}


  async register({ request }) {
    //request.all() grab and merge query 
    const { email, password } = request.all();

    await User.create({
      email,
      password,
      username: email,
    });
    return this.login(...arguments);
  }
}

module.exports = UserController
