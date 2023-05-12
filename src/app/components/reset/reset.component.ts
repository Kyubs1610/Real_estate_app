import {  Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute } from '@angular/router';
import {  PasswordResetService } from 'src/app/services/passwordreset.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})

export class ResetComponent implements OnInit {
  hide = true;
  confirmPassword = true;
  newPassword = ''; 
  confirmNewPassword = '';
  passwordsDoNotMatch = false;
  token!: string;
  reset!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private resetService: PasswordResetService) {}

  ngOnInit(): void {
    this.initForm();
    this.token = this.route.snapshot.params['token'];
  }

  initForm() {
    this.reset = this.formBuilder.group({
      newPassword: [
        '',
        [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/)],
      ],
      confirmNewPassword: [
        '',
        [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/)],
      ],
    });
  }

  passwordsMatch(): boolean {
    return this.newPassword === this.confirmNewPassword;
  }

  onSubmit(): void {
    if (this.passwordsMatch()) {
      // reset password logic here
      // send new password and token to backend
      this.resetService.resetPassword(this.newPassword, this.confirmNewPassword).subscribe(
        (response) => {
          // handle success response from backend
          console.log(response);
        },(error) => {
          // handle error response from backend
          console.error(error);
        }
      );
    } else {
      // display error message
      this.passwordsDoNotMatch = true;
    }
  }
}
