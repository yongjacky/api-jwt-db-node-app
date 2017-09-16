import Customer from '../models/Customer';
import {decode} from '../utils/jwtUtil';

export default function customersController(api) {
    api.post('/customers',decode, (req, res, next) => {
        let newCustomer=req.body;
        newCustomer["user_id"]=req.currentUser.id;

        return Customer.forge(newCustomer).save().then(
            customer => res.json( { customer } )
        ).catch(() => res.status(422).end())
    });

    api.get('/customers', decode, (req, res) => {
        const user = req.currentUser;
        let user_id = user.id;

        return Customer.findAll({user_id}).then(customers => {
            res.json({customers})
        }).catch(() => res.status(422).end());
    });

    api.delete('/customers/:id',decode, (req, res) => {
        let id = req.params.id;
        return Customer.delete(id).then(()=> res.status(200).end()).catch(()=> res.status(422).end());
    });
}