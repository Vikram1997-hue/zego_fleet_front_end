import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetForm: FormGroup;
  initialPage: boolean = true;
  error: any = {val: false, msg: ''}
  token: string;
  innerWidth:any;
  innerHeight:any;
  imageUrl='/assets/images/Generate_password.png'
  constructor(private fb: FormBuilder,
              private router: Router,
              private service: MainService,
              private activeRoute: ActivatedRoute
              ) { }
              
  ngOnInit(): void {
    this.innerHeight=window.innerHeight;
    this.innerWidth=window.innerWidth;
    if(this.innerHeight>1024){
      this.imageUrl='/assets/images/signin11.png';
    }
    else{
      this.imageUrl='/assets/images/Generate_password.png'
    }
    this.token = this.activeRoute.snapshot.queryParams.accessKey;
    if(!this.token){
    //  this.routeToSignin()
    }
    this.createResetForm();
  }

  createResetForm(){
    this.resetForm = this.fb.group({
      password: ['',Validators.required],
      cpassword: ['',Validators.required],
    })
  }

  submit(){
    if(this.resetForm.value.password !== this.resetForm.value.cpassword){
      this.error.val = true;
      this.error.msg = 'Password must match'
      return;
    }
    if(this.resetForm.valid && this.token){
      this.error = { val: false, msg: '' };
      this.service.post(`reset-password?accessKey=${this.token}`, {password: this.resetForm.value.password}).pipe().subscribe(response => {
        if (response.message) {
          this.initialPage = false;
        }
      }, (error) => {
        this.error.val = true;
        this.error.msg = error.message;
      })
    }
  }


  routeToSignin(){
    this.router.navigate([RouteConfig.signin.path])
  }

  clearForm(){
    this.resetForm.reset();
    this.error = {val: false, msg: ''};
  }

  get f(){
    return this.resetForm.controls;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight=window.innerHeight;
    this.innerWidth=window.innerWidth;
    // console.log(this.innerHeight, this.innerWidth);
    if(this.innerHeight>=1024){
      this.imageUrl='/assets/images/signin11.png';
    }
    else{
      this.imageUrl='/assets/images/Generate_password.png'
    }
  }
}
