import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initSigninForm();
  }

  initSigninForm() {
    this.loginForm = this.formBuilder.group({
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', [Validators.required]]
    });

    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  onSubmit() {
    console.log(this.email.value);
    console.log(this.password.value);

    if(this.loginForm.valid){
      // LOG USER IN
    }

  }

}
