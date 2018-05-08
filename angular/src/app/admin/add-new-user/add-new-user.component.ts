import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { RoleService } from '../../core/role.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/user.service';
import { ResGeneric } from '../../models/resGeneric';
import { Role } from '../../models/Role';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  createUserForm: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public role: AbstractControl;
  public firstName: AbstractControl;
  public lastName: AbstractControl;

  public rolesNames: Role[];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.initRoles();
    this.initCreateUserForm();

  }

  initRoles(){
    const resData: ResGeneric<Role[]> = this.route.snapshot.data['roles'];
    // console.log(resData);
    if(resData.error) {
      this.toastr.error(resData.error, '', {closeButton:true});
      // console.log(resData.error);
    }else {
      this.rolesNames = resData.data;
   };
  };


  initCreateUserForm() {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const nameRegex = /^[a-zA-Z]{2,30}$/;
    this.createUserForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(emailRegex)]],
      'password': ['', [Validators.required]],
      'role': ['', [Validators.required]],
      'firstName': ['', [Validators.required, Validators.pattern(nameRegex)]],
      'lastName': ['', [Validators.required, Validators.pattern(nameRegex)]],
    });

    this.email = this.createUserForm.controls['email'];
    this.password = this.createUserForm.controls['password'];
    this.role = this.createUserForm.controls['role'];
    this.firstName = this.createUserForm.controls['firstName'];
    this.lastName = this.createUserForm.controls['lastName'];
  }

  onSubmit() {
    if (this.createUserForm.valid) {
      const userToCreate = {
        email: this.email.value,
        password: this.password.value,
        roleName: this.role.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
      };

      this.userService.registerNewUser(userToCreate);
    }
  }
}
