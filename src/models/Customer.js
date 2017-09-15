import bookshelf from '../utils/dbConnection';

export default bookshelf.Model.extend({
    tableName: 'customers'
});