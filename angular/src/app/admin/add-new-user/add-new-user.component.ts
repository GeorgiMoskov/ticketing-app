import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { RoleService } from '../../core/role.service';
import { ToastrService } from 'ngx-toastr';

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

  public rolesNames; // WILL BE OBSERVABLE !!!!

  constructor(private formBuilder: FormBuilder, private roleService: RoleService, private toastr: ToastrService) { }

  ngOnInit() {
    this.initRoles();
; // WILL SUBSCRIBE SOME HOW
    this.initCreateUserForm();

  }

  initRoles(){
    this.roleService.getAllRoles().subscribe((data) => {
      console.log(data);
      if(data.error) {
        this.toastr.error(data.error, '', {closeButton:true});
        console.log(data.error);
      } else {
        this.rolesNames = data.allRolesNames;
      };
    }, 
    (err) => {
      this.toastr.error('Server Error, Please, try again or later!','', {closeButton:true});
      console.log('Server Error, Please, try again or later!');
    });
  }

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
    console.log(this.email.value);
    console.log(this.password.value);

    if (this.createUserForm.valid) {

    }
  }
}
