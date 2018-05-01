import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  AuthService
} from '../../core/auth.service';
import {
  ReqUserLoginModel
} from '../../models/users/reqUserLoginModel';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}

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

    if (this.loginForm.valid) {
      
      //this.authService.login({ email: this.email.value,password: this.password.value});

      this.authService.login( < ReqUserLoginModel > { email: this.email.value,password: this.password.value})
        .subscribe((data) => {
          if(data.error){
            console.log(data.error);
          }else {
            localStorage.setItem('token', data.token);
          this.router.navigate(['/dashboard']);
          }
        },
        (err) => {
          console.log('there were error while login');
        });
    }
  }

}
