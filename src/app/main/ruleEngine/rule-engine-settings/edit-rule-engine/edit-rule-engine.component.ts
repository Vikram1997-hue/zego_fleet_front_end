import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { RouteConfig } from 'src/app/config/route-config';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-edit-rule-engine',
  templateUrl: './edit-rule-engine.component.html',
  styleUrls: ['./edit-rule-engine.component.scss']
})
export class EditRuleEngineComponent implements OnInit {
  addRuleForm: FormGroup;
  details:any;
  isloading=false;
  currentValue="";
  showRange = false;
  constructor(
    private fb: FormBuilder,
    private service: MainService,
    private localService: LocalService,
    public route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      const details:any = params.details;
      this.details = JSON.parse(details);
    }
  );
    this.createaddRuleForm();
    this.getAllOrganization();
    this.vechileCategory();
  }
  organization:any;
  exception:any=[
    {
      name:'Speeding',
      id:'speed'
    },
    {
      name:'Breaking',
      id:'breaking'
    },
    {
      name:'Cornering',
      id:'cornering'
    },
    {
      name:'Acceleration',
      id:'acceleration'
    },
    {
      name:'Idling',
      id:'idling'
    },

  ]
  vechilecategory:any;
  createaddRuleForm(){
    let obj:any= {
      startDate:'',
      endDate:''
    }
    // console.log(this.details)
    if(this.details.effective_from!=null){
      obj= {
        startDate:moment(this.details.effective_from),
        endDate:moment(this.details.effective_from)
      }
    }
    else{
      obj= ''
    }
   
    
    this.addRuleForm = this.fb.group({
      org_id: [this.details.org_id,Validators.required],
      percentage_of_violation: ['',Validators.required],
      duration_of_violation: [this.details.duration_of_violation,Validators.required],
      score: [this.details.score,Validators.required],
      road_type: ['',Validators.required],
      road_factor: [this.details.road_factor,Validators.required],
      vehicle_category_id: [this.details.vehicle_category_id,Validators.required],
      weather: [this.details.weather,Validators.required],
      exception_type: [this.details.exception_type,Validators.required],
      day_night_driving: [this.details.day_night_driving,Validators.required],
      day_night_score: [this.details.day_night_score,Validators.required],
      is_active:[JSON.stringify(this.details.is_active)],
      created_on:[ moment(this.details.createdAt).format('MM/DD/YYYY')],
      effective_from:[obj,Validators.required]
    })
  // console.log(this.addRuleForm.value);
  
    this.checkValue();
    this.updatetype();
  }
  invalidDates = [];
  isInvalidDate = (m) => {
    return this.invalidDates.some(d => d.isSame(m, 'day'));
  }
  updatetype() {
    if (this.addRuleForm.value.exception_type == "speed") {
      this.showRange=false;
      this.currentValue = "<span>(km/hr)</span>";
    } else if (this.addRuleForm.value.exception_type == "breaking") {
      this.showRange=true;
      this.currentValue = "<span>(m/s<sup>2</sup>)</span>";
    } else if (this.addRuleForm.value.exception_type == "cornering") {
      this.showRange=true;
      this.currentValue = "<span>(m/s<sup>2</sup>)</span>";
    } else if (this.addRuleForm.value.exception_type == "acceleration") {
      this.showRange=true;
      this.currentValue = "<span>(m/s<sup>2</sup>)</span>";
    } else if (this.addRuleForm.value.exception_type == "idling") {
      this.showRange=true;
      this.currentValue = "";
    }
    this.checkValue();
  }
  checkValue(){
    if(this.details.percentage_of_violation_min>=0 && this.details.percentage_of_violation_max<=5){
      this.addRuleForm.patchValue({
        percentage_of_violation:'1'
      })
    }
    else if(this.details.percentage_of_violation_min>=5 && this.details.percentage_of_violation_max<=10){
      this.addRuleForm.patchValue({
        percentage_of_violation:'2'
      })
    }
    else if(this.details.percentage_of_violation_min>=10){
      this.addRuleForm.patchValue({
        percentage_of_violation:'3'
      })
    }
    
   if(this.addRuleForm.value.exception_type=='speed'){
    if(this.details.road_type_min>=0 && this.details.road_type_min<=30){
      this.addRuleForm.patchValue({
        road_type: '1'
      })
    }
    else if(this.details.road_type_min>=30 && this.details.road_type_min<50){
      this.addRuleForm.patchValue({
        road_type: '2'
      })
    }
    else if(this.details.road_type_min>=50 && this.details.road_type_min<80){
      this.addRuleForm.patchValue({
        road_type: '3'
      })
    }
    else if(this.details.road_type_min>=80 && this.details.road_type_min<100){
      this.addRuleForm.patchValue({
        road_type: '4'
      })
    }
    else if(this.details.road_type_min>=100 && this.details.road_type_max<1000){
      this.addRuleForm.patchValue({
        road_type: '5'
      })
    }
   }
   else{
     this.addRuleForm.patchValue({
       road_type:this.details.gforce_limit
     })
   }
    // console.log(this.addRuleForm.value)
  }
  update(){
    // console.log("aaaaaa");
    if(this.addRuleForm.value.road_type==1 || this.addRuleForm.value.road_type==2){
      this.addRuleForm.patchValue({
        road_factor:'City'
      })
    }
    if(this.addRuleForm.value.road_type==3 || this.addRuleForm.value.road_type==4){
      this.addRuleForm.patchValue({
        road_factor:'Outside City'
      })
    }
    else if(this.addRuleForm.value.road_type==5){
      this.addRuleForm.patchValue({
        road_factor:'Highway'
      })
    }
    // console.log(this.addRuleForm.value)
  }

  getAllOrganization(){
    this.organization=JSON.parse(this.localService.getItem('orgname'))
    // console.log(this.organization)
  }
  vechileCategory(){
    this.service.get('vehicles/category-by-organisation?organisation=[1,2,3,4,5,6,7]').pipe().subscribe(res=>{
      this.vechilecategory=res.data
    }),err=>{

    }
  }
  get f() {
    return this.addRuleForm.controls;
  }

  goToLastPage() {
    window.history.back();
  }

  submit(){
    if(this.addRuleForm.value.exception_type!= 'speed'){
      this.addRuleForm.patchValue({
        road_factor:'null'
      })
    }
    // console.log(this.addRuleForm.value)
    if(this.addRuleForm.valid){
      this.isloading=true;
      let percentage_of_violation_min=0;
      let percentage_of_violation_max=5;
      let road_type_min=0;
      let road_type_max=30;
      // console.log(this.addRuleForm.value.percentage_of_violation)
      if(this.addRuleForm.value.percentage_of_violation==2){
        percentage_of_violation_min=5;
        percentage_of_violation_max=10;
      }
      else if(this.addRuleForm.value.percentage_of_violation==3){
        percentage_of_violation_min=10;
        percentage_of_violation_max=100;
      }
      if(this.addRuleForm.value.road_type==2){
        road_type_min=30;
        road_type_max=50;
      }
      else if(this.addRuleForm.value.road_type==3){
        road_type_min=50;
        road_type_max=80;
      }
      else if(this.addRuleForm.value.road_type==4){
        road_type_min=80;
        road_type_max=100;
      }
      else if(this.addRuleForm.value.road_type==5){
        road_type_min=100;
        road_type_max=1000;
      }
      if(this.addRuleForm.value.exception_type){
        
      }
      let data:any={
        id:this.details.id,
        org_id: this.addRuleForm.value.org_id,
      percentage_of_violation_min: percentage_of_violation_min,
      percentage_of_violation_max: percentage_of_violation_max,
      duration_of_violation:this.addRuleForm.value.duration_of_violation,
      score: this.addRuleForm.value.score,
      road_type_min: road_type_min,
      road_type_max: road_type_max,
      road_factor: this.addRuleForm.value.road_factor,
      vehicle_category_id:this.addRuleForm.value.vehicle_category_id ,
      weather: this.addRuleForm.value.weather,
      exception_type:this.addRuleForm.value.exception_type ,
      day_night_driving: this.addRuleForm.value.day_night_driving,
      day_night_score:this.addRuleForm.value.day_night_score ,
      effective_from:(moment(this.addRuleForm.value.effective_from.startDate).format('YYYY-MM-DD')),
        created_on:this.addRuleForm.value.created_on,
        is_active:JSON.parse(this.addRuleForm.value.is_active)
      }
      if(data.exception_type!='speed'){
        data.road_factor="Highway";
        data.road_type_min=100;
        data.road_type_max=1000;
          data.gforce_limit=this.addRuleForm.value.road_type;
        }
      // console.log(data)
      this.service.put('rule-engine/edit',data).pipe().subscribe(res=>{
        this.router.navigate([RouteConfig.ruleengine.url])
      }),err=>{
        this.isloading=false;
      }
    }
  }
}
