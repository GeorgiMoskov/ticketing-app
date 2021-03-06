import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/User';
import { ResGeneric } from '../../models/resGeneric';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  displayedColumns = ['id', 'email', 'firstName', 'lastName', 'role', 'delete'];
  dataSource;
  users: User[];
  currentLoggedUserEmail;

  constructor( private userService: UserService, private route: ActivatedRoute, private toastr: ToastrService ) { }

  ngOnInit() {
    this.initUsers();
    this.currentLoggedUserEmail = this.userService.getCurrentLoggedUserEmail();
    this.dataSource = new MatTableDataSource(this.users);
  }

  initUsers() {
    const resData: ResGeneric<User[]> = this.route.snapshot.data['users'];
    if(resData.error){
      this.toastr.error(resData.error, '', {closeButton:true});
      console.log(resData.error);
    }else{
      this.users = resData.data;
      console.log(this.users);
    }

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId).subscribe((resData: ResGeneric<string>) => {
      if(resData.error) {
        this.toastr.error(resData.error, '', {closeButton:true});
        console.log(resData.error);
      } else {
        this.toastr.success('User was deleted!', '', {closeButton:true});
        this.users = this.users.filter((userObj)=> userObj.id != userId);
        this.dataSource = new MatTableDataSource(this.users);
      };
    }, 
    (err) => {
      console.log(err);
      this.toastr.error('Server Error, Please, try again or later!','', {closeButton:true});
      console.log('Server Error, Please, try again or later!');
    });
    return false;
  }

}
