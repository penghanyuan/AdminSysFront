import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  public fname;
  public lname;
  user: Observable<User>;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
      this.fname = localStorage.getItem('firstname');
      this.lname = localStorage.getItem('lastname');
      console.log(this.lname);
  }
  getAllUsers() {

  }


}
