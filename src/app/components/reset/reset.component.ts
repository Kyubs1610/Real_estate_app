import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PasswordResetService } from 'src/app/services/passwordreset.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  hide = true;
  confirmNewPassword = true;
  confirmPassword = '';
  password = '';
  passwordsDoNotMatch = false;
  id!: number;
  token!: string;
  reset!: FormGroup;
  resetEmail!: FormGroup;
  clicked = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private resetService: PasswordResetService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.route.params.subscribe(params => {
      this.id = params['id'] || '';
      this.token = params['token'] || '';
      console.log(this.id);
      console.log(this.token);

    });
    this.resetEmail = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
    });
  }

  initForm() {
    this.reset = this.formBuilder.group({
      password: [
        '',
        [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/)],
      ],
      confirmPassword: [
        '',
        [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/)],
      ],
    });
  }

  passwordsMatch(): boolean {
    return this.password === this.confirmPassword;
  }

  onReset(): void {
    if (this.passwordsMatch()) {
      const body = {
        password: this.reset.value.password,
        confirmPassword: this.reset.value.confirmPassword,
      };
      
      this.resetService.resetPassword(this.id, this.token, body,
        (res: any) => {
          // handle success response from backend
          console.log(res);
        },
        (error: any) => {
          // handle error response from backend
          console.error(error);
        }
      );
    } else {
      // display error message
      this.passwordsDoNotMatch = true;
    }
  }

  get email() {
    return this.resetEmail.controls["email"];
  }


}
