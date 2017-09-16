import bcrypt from 'bcrypt-nodejs';
import bookshelf from '../utils/dbConnection';
import Customer from './Customer';

export default class User extends bookshelf.Model {
    get tableName(){
        return 'users';
    }

    get customers(){
        return this.hasMany(Customer);
    }

    static byUserName(username){
        return this.forge().query({where:{username}}).fetch();
    }

    static verifyPassword(inputPassword,password){
        return bcrypt.compareSync(inputPassword,password);
    }
}