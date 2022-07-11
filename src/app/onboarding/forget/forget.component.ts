import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  forgetForm: FormGroup;
  initialPage: boolean = true;
  error: any = { val: false, msg: '' }
  innerWidth:any;
  innerHeight:any;
  imageUrl='/assets/images/Generate_password.png'

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: MainService,
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
    this.initialPage = true;
    this.createForgetForm();
  }

  createForgetForm() {
    this.forgetForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  submit() {
    if (this.forgetForm.valid) {
      this.error = { val: false, msg: '' };
      this.service.post('forgot-password', this.forgetForm.value).pipe().subscribe(response => {
        if (response.message) {
          this.initialPage = false;
        }
      }, (error) => {
        this.error.val = true;
        this.error.msg = error.message;
      })
    }
  }

  routeToSignin() {
    this.router.navigate([RouteConfig.signin.path])
  }

  resetForm() {
    this.forgetForm.reset();
    this.error = { val: false, msg: '' };
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
