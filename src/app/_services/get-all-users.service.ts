import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GetAllUsersService {

    getUserUrl = '/api/user/getAllUsers';
    data;
    constructor(private http: HttpClient) { }
    getAllUsers() {
        return this.http.get('/api/user/getAllUsers');
    }

}
