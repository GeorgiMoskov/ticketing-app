import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  displayedColumns = ['id', 'email', 'firstName', 'lastName', 'role', 'delete'];
  dataSource;
  users;
  currentLoggedUserEmail;

  constructor( private userService: UserService, private route: ActivatedRoute, private toastr: ToastrService ) { }

  ngOnInit() {
    this.initUsers();
    this.currentLoggedUserEmail = this.userService.getCurrentLoggedUserEmail();
    this.dataSource = new MatTableDataSource(this.users);
  }

  initUsers() {
    const usersData = this.route.snapshot.data['users'];
    if(usersData.error){
      this.toastr.error(usersData.error, '', {closeButton:true});
      console.log(usersData.error);
    }else{
      this.users = usersData.users;
      console.log(this.users);
    }

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId).subscribe((data) => {
      console.log('tva se vurna!!');
      if(data.error) {
        this.toastr.error(data.error, '', {closeButton:true});
        console.log(data.error);
      } else {
        console.log(data.success);
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
