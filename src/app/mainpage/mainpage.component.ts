import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { GetAllUsersService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    public fname;
    public lname;
    public users;
    constructor(private http: HttpClient,
                private getAllUsersService: GetAllUsersService) {
    }

  ngOnInit() {
      this.dtOptions = {
          pagingType: 'full_numbers',
          searching: true,
          autoWidth: false
      };
      this.fname = localStorage.getItem('firstname');
      this.lname = localStorage.getItem('lastname');
      this.getAll();
  }
  getAll() {
      this.getAllUsersService.getAllUsers().subscribe(
          data => {
              this.users = data['users'];
              this.dtTrigger.next();
          }
      );
  }


}
