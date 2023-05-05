import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/http.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  
})


export class LoginPageComponent implements OnInit {

  loginForm !:FormGroup;
  hide = false; 

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router
    ) {}


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)],],
    });
  }
  
get email(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }
 get password(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

 

  onSubmit() {
    const { email, password } = this.loginForm.value;
   

    this.authService.login(email, password).subscribe(
      (response) => {
        console.log(response); 
        this.router.navigate(['/auth']) ;
        },
      (error) => {
        console.error(error);
      }
    );
  }
  getErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'You must enter a value';
    }
  
    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }
}
