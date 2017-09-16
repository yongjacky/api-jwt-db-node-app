import bookshelf from '../utils/dbConnection';
import User from './User';

export default class Customer extends bookshelf.Model {
    get tableName(){
        return 'customers';
    }

    get user(){
        return this.belongsTo(User,'user_id');
    }

    static findAll(filter, options) {
        return this.forge().where(filter).fetchAll(options);
    }

    static delete(id){
        return this.forge().where({id}).fetch().then((item)=> item.destroy());
    }
}