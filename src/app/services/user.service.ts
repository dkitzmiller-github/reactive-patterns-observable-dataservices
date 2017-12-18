import {Injectable} from '@angular/core';
import {User} from '../shared/model/user';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


export const USER_UNKNOWN: User = {
    firstName: 'Unknown'
};

@Injectable()
export class UserService {

    // remembers last value emitted
    // if some other object subscribes then will get the last value
    private subject = new BehaviorSubject(USER_UNKNOWN);
    user$: Observable<User> =  this.subject.asObservable();

    constructor(private http: Http) {
    }

    login(email: string, password: string): Observable<User> {
        const headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json')
        return this.http.post('/api/login', {email, password}, {headers: headers})
            .map(res => res.json())
            .do( usr => console.log(usr))
            .do( usr => this.subject.next(usr))
            .publishLast().refCount();
    }

}
