import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/services/Auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public signupForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    username: new FormControl(),
  });

  constructor(public authService: AuthService) { }

  ngOnInit() { }

  signUpWithEmailAndPassword() {
    if (this.signupForm.value.email == '') {

      return
    }
    if (this.signupForm.value.password == '') {

      return
    }
    this.authService.signUpWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.username);
    

  }
}
