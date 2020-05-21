'use strict'

const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourceNotExsitException = use('App/Exceptions/ResourceNotExsitException');


class AuthorizationService {
    verifyPermission(resource, user){
        if(!resource){
            throw new ResourceNotExsitException();
        }
        if(resource.user_id !== user.id){
            throw new InvalidAccessException(); //invalid access exception
        }
    }
}

module.exports = new AuthorizationService()