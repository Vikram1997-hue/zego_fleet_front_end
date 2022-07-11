import { Injectable } from '@angular/core';
// import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { environment as env } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

// import { access } from 'fs';

@Injectable({
  providedIn: 'root'
})

export class UploadFileService {

  bucket: S3;


  constructor() {
    let access = this.decryptObj(env.image)
    let secret = this.decryptObj(env.imageSecret)
    this.bucket = new S3(
      {
        accessKeyId: access,
        secretAccessKey: secret,
        region: env.region
      }
    );
  }



  async uploadfile(fileToUpload: File, fileName?) {

    try {
      const params = {
        Bucket: env.bucket,
        Key: fileName ? fileName.replace(/ /g, '-') : fileToUpload.name.replace(/ /g, '-'),
        Body: fileToUpload,
        ACL: 'public-read'
      };
      return new Promise((resolve, reject) => {
        // tslint:disable-next-line:only-arrow-functions
        this.bucket.upload(params, function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    } catch (err) {
      // console.log('An error occured during image uploading');
      console.error(err.message);
    } finally {

    }

  }

  encryptObj(message: any): string {
    const cipherText: any = CryptoJS.AES.encrypt(JSON.stringify(message), "!helloMobility@@");
    return cipherText.toString();
  }

  decryptObj(cipherMessage: any): any {
    const bytes = CryptoJS.AES.decrypt(cipherMessage, "!helloMobility@@");
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }


  deleteFile(fileName) {
    // console.log(fileName);
    try {
      const params = {
        Bucket: 'asapps3bucket',
        Key: fileName
      };
      return new Promise((resolve, reject) => {
        // tslint:disable-next-line:only-arrow-functions
        this.bucket.deleteObject(params, function (err, data) {
          if (data) {
            // console.log('File deleted successfully');
            resolve(data);
          } else {
            // console.log('Check if you have sufficient permissions : ' + err);
            reject(err);
          }
        });
      });
    } catch (err) {
      // console.log('An error occured during image uploading');
      console.error(err.message);
    } finally {

    }
  }
}
