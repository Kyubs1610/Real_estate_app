import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

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

    ) {}
  
    


  ngOnInit(): void {
    this.initForm();
   
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/)]],
    });
  }
  
  get email(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }
  get password(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }

 

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.logIn(email, password ).subscribe({
    next: (response) => {
       console.log(response); 
    },
    error: (error) => {
      console.error(error);
    }
  });


  
}
  getErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'You must enter a valid email';
    }
  
    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword() {
    if(this.password?.hasError('required')){
      return 'Your passsword must contain at least 8 characters, one number, one uppercase letter and one special character' ;
    }
    return this.password?.hasError('pattern') ? 'Not a valid password' : '';
  }

  

}
