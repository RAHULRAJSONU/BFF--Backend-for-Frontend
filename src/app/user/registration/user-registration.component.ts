import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../user';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html'
})
export class UserRegistrationComponent implements OnInit {
  userForm = new FormGroup({
    emailAddress: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  matcher = new MyErrorStateMatcher();

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {
  }

  get emailAddress() { return this.userForm.get('emailAddress'); }
  get password() { return this.userForm.get('password'); }

  submit() {
    this.http.post('/api/user', this.userForm.value)
      .subscribe(
        (successResponse: User) => {
          this.openSnackBar('Registration successful', 'Close');
          this.router.navigate(['/']);
        },
        (errorResponse) => {
          this.openSnackBar(errorResponse.error != null ? errorResponse.error.message : errorResponse.message, 'Close');
        }
      );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}