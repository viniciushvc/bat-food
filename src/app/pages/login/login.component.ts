import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Errors } from 'src/app/core/models/errors.model'
import { ActivatedRoute, Router } from '@angular/router'
import { TokenService } from 'src/app/core/auth/token.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authType: String = ''
  title: String = ''
  errors: Errors = { errors: {} }
  isSubmitting = false

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // // Get the last piece of the URL (it's either 'login' or 'register')
      // this.authType = data[data.length - 1].path;
      // // Set a title for the page accordingly
      // this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // // add form control for username if this is the register page
      // if (this.authType === 'register') {
      //   this.form.addControl('username', new FormControl());
      // }
    })
  }

  submitForm() {
    this.isSubmitting = true
    this.errors = { errors: {} }

    const credentials = this.form.value

    if (this.form.valid) {
      this.tokenService.saveToken(this.form.value.username)

      this.router.navigateByUrl('/home')
    }
  }
}
