import {  Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})

export class ResetComponent implements OnInit {
  hide = true;
  confirmPassword = true;
  newPassword = ''; // Define the newPassword property here
  confirmNewPassword = '';
  passwordsDoNotMatch = false;

  reset!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
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
      // send email to the user to confirm password reset
    } else {
      // display error message
      this.passwordsDoNotMatch = true;
    }
  }
}
