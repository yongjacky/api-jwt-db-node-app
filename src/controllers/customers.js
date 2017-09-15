import Customer from '../models/Customer';
import decode from '../utils/jwtDecode';

export default function customersController(api) {
    api.post('/customers',decode, (req, res, next) => {
        return Customer.forge(req.body.customer).save().then(
            customer => res.json( { customer } )
        ).catch(() => res.status(422).end())
    });
}