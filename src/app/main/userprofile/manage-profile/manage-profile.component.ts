import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RouteConfig } from 'src/app/config/route-config';
import { UploadFileService } from 'src/app/services/image-upload.service';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

export interface IFileNameS3 {
  Bucket: string;
  Key: string;
  Location: string;
  key: string;
}
@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})


export class ManageProfileComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  public countryCodeIso = 'nl';
  profiledetails: any;
  updateform: FormGroup;
  show = false;
  numberinvalid: boolean;
  public countryCode: string = '31';
  isTripHistoryLoading = false;
  isProfilePictureLoading = false;
  editProfile=false;
  // image upload
  fileLink: any = '';
  imageList = [];
  selectedFiles: FileList;
  isuploadFile = false;
  fileImg = '';
  count = 0;
  constructor(private route:Router,private uploadService: UploadFileService,private localService: LocalService, private api: MainService, private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getProfile();
    this.createupdateProfileForm();
  }

  createupdateProfileForm() {
    this.updateform = this.fb.group({
      firstName: [''],
      lastName: [''],
      language: [''],
      profile_image: [''],
      country_code: ['', Validators.required],
      phone: ['', Validators.required],
      email: [''],
      role:[''],
      organization_name:[''],
      address:['']
    })
  }
  get f() {
    return this.updateform.controls;
  }

  defObj;
  telInputObject(obj, selectedcountry) {
    // console.log(obj, selectedcountry)
    this.defObj = obj;
    this.setCountry(selectedcountry);

    // console.log(this.defObj)
  }
  setCountry(selectedcountry) {
    this.defObj.setCountry(selectedcountry);

  }

  getNumber(obj) {
    // console.log(obj);
  }
  hasError(noerror) {
    if (noerror == false) {
      this.numberinvalid = true;
    } else {
      this.numberinvalid = false;
    }
  }

  onCountryChange(event) {
    this.countryCode = event.dialCode;
    this.updateform.patchValue({
      country_code: this.countryCode
    })
    // console.log(this.updateform.value)
    // this.editUserForm.patchValue({countryCodeIso:event.iso2})
    // this.editUserForm.patchValue({countryCode: this.countryCode})
  }
  getProfile() {
    this.isTripHistoryLoading = true;
    this.api.get('profile').pipe().subscribe(res => {

      // console.log(res)
      this.profiledetails = res.data;
      if (this.profiledetails.phone) {
        setTimeout(() => {
          this.defObj.setNumber("+" + this.profiledetails.country_code + this.profiledetails.phone);
        }, 500)
      }
      this.fileLink = this.profiledetails.profile_image;
      this.updateform.patchValue({
        firstName: this.profiledetails.firstName,
        lastName: this.profiledetails.lastName,
        language: this.profiledetails?.language?.trim(),
        profile_image: this.profiledetails.profile_image,
        country_code: this.profiledetails.country_code || this.countryCode,
        phone: this.profiledetails?.phone?.trim(),
        email: this.profiledetails.email || '',
        role: this.profiledetails.role || '',
        organization_name:this.profiledetails.organization_name || '',
        address:this.profiledetails.address || ''


      })
      this.countryCodeIso = this.updateform.value
      // console.log(this.updateform.value,this.updateform.value.country_code);
      this.countryCodeIso = 'gb'
      this.isTripHistoryLoading = false;
    }), err => {

    }
  }
  updateProfile() {
    
    // console.log(this.updateform.valid);
    
    if (this.updateform.valid) {
      
      const data = {
        firstName: this.profiledetails.firstName,
        lastName: this.updateform.value.lastName || ' ',
        // language: this.updateform.value.language,
        profile_image: this.updateform.value.profile_image,
        country_code: this.updateform.value.country_code,
        phone: this.updateform.value.phone,
      }
      if(data.profile_image==null){
        delete data.profile_image
      }
      this.api.put(`profile/${this.profiledetails.id}`, data).pipe().subscribe(res => {
        this.editProfile=!this.editProfile;
        this.isTripHistoryLoading = true;
        this.localService.setItem("profileImage",this.updateform.value.profile_image)
        this.localService.setImage();
        this.show = true;
        this.show = false;
        this.openSnackBarmodal('Profile updated successfully.', 'update_profile')
        this.getProfile();

        // setTimeout(() => {

        // }, 2000);
        // console.log(res)
      })
    }
  }
  openSnackBarmodal(message, panelClass: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { image: false, message: message },
      panelClass: panelClass,
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,

    });
  }

  uploadImage(event) {
    // console.log(event)

    if (event.target.files.length) {
      const mimeType = event.target.files[0].type;
      this.selectedFiles = event.target.files;
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const reader = new FileReader();
        this.isuploadFile = true;
        // reader.onload = e => this.fileLink = reader.result;
        reader.readAsDataURL(file);
      }
      this.isProfilePictureLoading=true;
      this.uploadimg();
    }

  }
  uploadimg() {
    if (this.isuploadFile === true && this.selectedFiles) {
      this.upload().then(res => {
        this.fileLink = res.Location;
        this.updateform.patchValue({
          profile_image: res.Location
        })
        this.isProfilePictureLoading=false;
        // this.imageList.push(this.fileLink)
      });
    }
  }

  async upload() {
    this.count += 1;
    this.fileImg = '';
    const file = this.selectedFiles.item(0);
    this.fileImg = file.name.replace(/ /g, '-');
    this.fileImg = this.fileImg.split('.')[0] + '-' + new Date().getTime() + '.' + this.fileImg.split('.')[1];
    const res = await this.uploadService.uploadfile(file, this.fileImg) as IFileNameS3;
    return res;

  }
  goToLastPage() {
    window.history.back();
  }
  routeChangePassword(){
    this.route.navigate([RouteConfig.changepassword.url])
  }
}
