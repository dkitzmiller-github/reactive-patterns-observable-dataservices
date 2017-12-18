import {User} from "../app/shared/model/user";

const auth = {
    'dk@gmail.com': 'dk123',
    'john@gmail.com': 'john123',
    'bill@gmail.com': 'bill123'

};

const users: { [key: string]: User } = {
    'dk@gmail.com': {
        firstName: 'Dave'
    },
    'john@gmail.com': {
        firstName: 'John'
    },
    'bill@gmail.com': {
        firstName: 'Bill'
    }
};

export function loginRoute(req, res) {


    const payload = req.body;

    console.log('verifying password ...', payload);

    if (auth[payload.email] && auth[payload.email] === payload.password) {
        console.log('password verified ...', payload);
        res.status(200).json(users[payload.email]);
    } else {
        console.log('password was not verified ...', payload);
        res.sendStatus(500);
    }


}