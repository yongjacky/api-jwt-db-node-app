import bookshelf from '../utils/dbConnection';
import Customer from './Customer';

export default bookshelf.Model.extend({
    tableName: 'users',
    customers: function () {
        return this.hasMany(Customer);
    }
});