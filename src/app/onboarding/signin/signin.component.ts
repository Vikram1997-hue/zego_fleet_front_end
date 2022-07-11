import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RouteConfig } from '../../config/route-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  rememberMe: boolean = false;
  submitted: boolean = false;
  error: any = { val: false, msg: '' }
  isDataLoading: boolean = false;
  colors = {
      "speed": '#FF9950',
      "breaking": '#FFEA6C',
      "acceleration": '#4DBFFF',
      "cornering": '#FF7070',
      "idling": '#00CBA0'
  }
 
  constructor(private fb: FormBuilder,
    private router: Router,
    private cookieService: CookieService,
    private service: MainService,
    private localService: LocalService
  ) { }
    innerWidth:any;
    innerHeight:any;
    imageUrl='/assets/images/Generate_password.png'
  ngOnInit(): void {
    // console.log(window.innerHeight);
    this.innerHeight=window.innerHeight;
    this.innerWidth=window.innerWidth;
    if(this.innerHeight>1024){
      this.imageUrl='/assets/images/signin11.png';
    }
    else{
      this.imageUrl='/assets/images/Generate_password.png'
    }
    this.createSigninForm()
    if (this.cookieService.get('rememberMe')) {
      this.rememberMe = true;
      this.signinForm.get('email').setValue(this.userEmail);
      this.signinForm.get('password').setValue(this.userPass);
    }
  }

  createSigninForm() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit() {
    this.submitted = true;
    
    if (this.signinForm.valid) {
      this.isDataLoading = true;
      this.error = { val: false, msg: '' };
      this.service.post('login', this.signinForm.value).pipe().subscribe(response => {
        if (response.data) {
          this.isDataLoading = false;
          this.setColors(response.data.color_code)
          this.localService.setItem('name', JSON.stringify({
            firstName: response['data']['firstName'],
            lastName: response['data']['lastName']
          }))
          this.localService.setItem('data', JSON.stringify(response['data']))
          this.localService.setItem('email', response['data']['email'])
          this.localService.setItem('hmAccessToken', response['data']['token']);
          this.localService.setItem('profileImage', response['data']['profile_image']);
          if (this.rememberMe == true) {
            this.cookieService.set("rememberMe", "true", 1);
            this.cookieService.set("email", this.f.email.value, 1);
            this.cookieService.set("password", btoa(this.f.password.value), 1);
          } else {
            this.cookieService.deleteAll();;
          }
          // Dashboard Routing
          this.router.navigate([RouteConfig.dashboard.url])
        } else {
          this.isDataLoading = false;
          this.error.val = true;
          this.error.msg = response.message;
        }
      }, (error) => {
        this.isDataLoading = false;
        this.error.val = true;
        this.error.msg = error.message;
      })
    }
  }

  setColors(data){
    
    
    if(data){
      data = JSON.parse(data)
      // console.log(data);
      for(let i=0;i<data.length;i++){
        if(data[i]['key']=='Speeding'){
          this.colors['speed'] ='#'+ data[i]['value']
        }
        else if(data[i]['key']=="Idling"){
          this.colors['idling'] = '#'+data[i]['value']
        }
        else if(data[i]['key']=="Harsh Acceleration"){
          this.colors['acceleration'] = '#'+data[i]['value']
        }
        else if(data[i]['key']=="Harsh Cornering"){
          this.colors['cornering'] ='#'+ data[i]['value']
        }
        else{
          this.colors['breaking'] ='#'+ data[i]['value']
        }
      }
    }
    // console.log(this.colors);
    
    this.localService.setItem('colors', JSON.stringify(this.colors))
  }

  get f() {
    return this.signinForm.controls;
  }

  get userEmail(): any {
    return this.cookieService.get('email');
  }

  get userPass(): any {
    var decPass = this.cookieService.get('password');
    var decodedPass = atob(decPass);
    return decodedPass;
  }

  routeToForget() {
    this.router.navigate([RouteConfig.forget.path])
  }

  resetForm() {
    this.signinForm.reset();
    this.error = false;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight=window.innerHeight;
    // this.innerWidth=window.innerWidth;
    // console.log(this.innerHeight, this.innerWidth);
    if(this.innerHeight>=1024){
      this.imageUrl='/assets/images/signin11.png';
    }
    else{
      this.imageUrl='/assets/images/Generate_password.png'
    }
  }

}
