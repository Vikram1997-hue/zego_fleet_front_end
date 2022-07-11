import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { UploadFileService } from 'src/app/services/image-upload.service';
import { LocalService } from 'src/app/services/local.service';
import { MainService } from 'src/app/services/main.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

export interface IFileNameS3 {
  Bucket: string;
  Key: string;
  Location: string;
  key: string;
}

@Component({
  selector: 'app-contact-support',
  templateUrl: './contact-support.component.html',
  styleUrls: ['./contact-support.component.scss']
})
export class ContactSupportComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  conatctForm: FormGroup;
  orgName: string = '';
  isloading = false;

  numberinvalid: boolean;
  public countryCodeIso = 'nl';
  public countryCode: string = '31';

  constructor(
    private fb: FormBuilder,
    private service: MainService,
    private localService: LocalService,
    private _snackBar: MatSnackBar,
    private matDialog: MatDialog,
    private uploadService: UploadFileService
  ) { }



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
    // this.updateform.patchValue({
    //   country_code: this.countryCode
    // })

  }

  fileLink: any = '';
  imageList = [];
  selectedFiles: FileList;
  isuploadFile = false;
  fileImg = '';
  count = 0;

  name: string;
  email: string;
  companyName: string;
  role: string;
  phone: string;
  phoneComplete: string;

  ngOnInit(): void {
    let obj = JSON.parse(this.localService.getItem("name"))
    let objData = JSON.parse(this.localService.getItem("data"))
    this.name = obj.firstName + " " + obj.lastName;
    this.email = this.localService.getItem("email");
    this.role = objData.role || '';
    this.phone = objData.phone || '';
    if (this.phone) {
      this.phoneComplete = "+" + objData.country_code.trim() + this.phone.trim();
      setTimeout(() => {
        this.defObj.setNumber("+" + objData.country_code + ' ' +this.phone);
      }, 500)
    }
    this.createContactForm()
  }

  createContactForm() {
    let browser = this.get_browser();
    this.conatctForm = this.fb.group({
      subject: ["", Validators.required],
      feedback: ["", Validators.required],
      screenshot: [""],
      phone: [this.phoneComplete],
      name: [this.name],
      email: [this.email],
      os: [window.navigator.platform],
      browser: [browser.name],
      browserVersion: [browser.version],
      group: [''],
      urlPortal: [window.location.host],
      designation:[this.role]
    })
  }

  goToLastPage() {
    window.history.back();
  }

  get_browser() {
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
        return {name:'IE',version:(tem[1]||'')};
        }   
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }   
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }

  matDialogRef;
  addModal() {
    this.conatctForm.patchValue({ screenshot: JSON.stringify(this.imageList) })
    if (this.conatctForm.valid) {
      let data = {
        heading: 'Contact support',
        content: 'Are you sure you want to submit your request?',
        body: this.conatctForm.value
      }
      this.matDialogRef = this.matDialog.open(ModalComponent, {
        data: data,
        disableClose: true
      });
    }
    else {
      this.openSnackBarmodal("Enter the required fields", "contact_support")
    }
  }

  openSnackBarmodal(message, panelClass: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { image: true, message: message },
      panelClass: panelClass,
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  uploadImage(event) {
    if (this.imageList.length < 5) {
      if (event.target.files.length && event.target.files[0].size < 1000000) {
        const mimeType = event.target.files[0].type;
        this.selectedFiles = event.target.files;
        if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
          const reader = new FileReader();
          this.isuploadFile = true;
          reader.onload = e => this.fileLink = reader.result;
          reader.readAsDataURL(file);
        }
        this.uploadimg();
      }
      else {
        this.openSnackBarmodal("Image size should be less then 1 mb", "contact_support")
      }
    }
    else {
      this.openSnackBarmodal("Max amount of images reached", "contact_support")
    }


  }
  uploadimg() {
    if (this.isuploadFile === true && this.selectedFiles) {
      this.upload().then(res => {
        this.fileLink = res.Location;
        this.imageList.push(this.fileLink)
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

  deleteImage(index) {
    this.imageList.splice(index, 1)
  }

}
