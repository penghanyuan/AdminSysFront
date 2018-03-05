import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models';
import {Observable} from 'rxjs/Observable';
import { GetAllUsersService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
    model: any = {};
  public fname;
  public lname;
  public users;
  constructor(private http: HttpClient,
              private getAllUsersService: GetAllUsersService) {
  }

  ngOnInit() {
      this.fname = localStorage.getItem('firstname');
      this.lname = localStorage.getItem('lastname');
      this.getAll();
  }
  getAll() {
      this.getAllUsersService.getAllUsers().subscribe(
          data => {
              this.users = data['users'];
          }
      );
  }


}
