(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactSupport-support-module"], {
    /***/
    "EyFP":
    /*!*******************************************************!*\
      !*** ./src/app/main/contactSupport/support.module.ts ***!
      \*******************************************************/

    /*! exports provided: SupportModule */

    /***/
    function EyFP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportModule", function () {
        return SupportModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _support_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./support-routing.module */
      "mqgy");
      /* harmony import */


      var _contact_support_contact_support_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contact-support/contact-support.component */
      "byVn");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_config_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/config/material */
      "Uo7g");
      /* harmony import */


      var ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-tel-input */
      "QSfX");

      var SupportModule = /*#__PURE__*/_createClass(function SupportModule() {
        _classCallCheck(this, SupportModule);
      });

      SupportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SupportModule
      });
      SupportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SupportModule_Factory(t) {
          return new (t || SupportModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _support_routing_module__WEBPACK_IMPORTED_MODULE_2__["SupportRoutingModule"], src_app_config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__["Ng2TelInputModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
          extend: true
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SupportModule, {
          declarations: [_contact_support_contact_support_component__WEBPACK_IMPORTED_MODULE_3__["ContactSupportComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _support_routing_module__WEBPACK_IMPORTED_MODULE_2__["SupportRoutingModule"], src_app_config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__["Ng2TelInputModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_contact_support_contact_support_component__WEBPACK_IMPORTED_MODULE_3__["ContactSupportComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _support_routing_module__WEBPACK_IMPORTED_MODULE_2__["SupportRoutingModule"], src_app_config_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__["Ng2TelInputModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
              extend: true
            })]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "byVn":
    /*!**********************************************************************************!*\
      !*** ./src/app/main/contactSupport/contact-support/contact-support.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ContactSupportComponent */

    /***/
    function byVn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactSupportComponent", function () {
        return ContactSupportComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/modal/modal.component */
      "ajRT");
      /* harmony import */


      var src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/components/snackbar/snackbar.component */
      "Ba6F");
      /* harmony import */


      var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/main.service */
      "c/rV");
      /* harmony import */


      var src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/local.service */
      "s3jE");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_image_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/image-upload.service */
      "3atj");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var ng2_tel_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng2-tel-input */
      "QSfX");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ContactSupportComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactSupportComponent_div_62_Template__svg_svg_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var i_r3 = ctx.index;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.deleteImage(i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          initialCountry: a0,
          separateDialCode: "true"
        };
      };

      var ContactSupportComponent = /*#__PURE__*/function () {
        function ContactSupportComponent(fb, service, localService, _snackBar, matDialog, uploadService) {
          _classCallCheck(this, ContactSupportComponent);

          this.fb = fb;
          this.service = service;
          this.localService = localService;
          this._snackBar = _snackBar;
          this.matDialog = matDialog;
          this.uploadService = uploadService;
          this.horizontalPosition = 'center';
          this.verticalPosition = 'bottom';
          this.orgName = '';
          this.isloading = false;
          this.countryCodeIso = 'nl';
          this.countryCode = '31';
          this.fileLink = '';
          this.imageList = [];
          this.isuploadFile = false;
          this.fileImg = '';
          this.count = 0;
        }

        _createClass(ContactSupportComponent, [{
          key: "telInputObject",
          value: function telInputObject(obj, selectedcountry) {
            // console.log(obj, selectedcountry)
            this.defObj = obj;
            this.setCountry(selectedcountry); // console.log(this.defObj)
          }
        }, {
          key: "setCountry",
          value: function setCountry(selectedcountry) {
            this.defObj.setCountry(selectedcountry);
          }
        }, {
          key: "getNumber",
          value: function getNumber(obj) {// console.log(obj);
          }
        }, {
          key: "hasError",
          value: function hasError(noerror) {
            if (noerror == false) {
              this.numberinvalid = true;
            } else {
              this.numberinvalid = false;
            }
          }
        }, {
          key: "onCountryChange",
          value: function onCountryChange(event) {
            this.countryCode = event.dialCode; // this.updateform.patchValue({
            //   country_code: this.countryCode
            // })
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var obj = JSON.parse(this.localService.getItem("name"));
            var objData = JSON.parse(this.localService.getItem("data"));
            this.name = obj.firstName + " " + obj.lastName;
            this.email = this.localService.getItem("email");
            this.role = objData.role || '';
            this.phone = objData.phone || '';

            if (this.phone) {
              this.phoneComplete = "+" + objData.country_code.trim() + this.phone.trim();
              setTimeout(function () {
                _this.defObj.setNumber("+" + objData.country_code + ' ' + _this.phone);
              }, 500);
            }

            this.createContactForm();
          }
        }, {
          key: "createContactForm",
          value: function createContactForm() {
            var browser = this.get_browser();
            this.conatctForm = this.fb.group({
              subject: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              feedback: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              screenshot: [""],
              phone: [this.phoneComplete],
              name: [this.name],
              email: [this.email],
              os: [window.navigator.platform],
              browser: [browser.name],
              browserVersion: [browser.version],
              group: [''],
              urlPortal: [window.location.host],
              designation: [this.role]
            });
          }
        }, {
          key: "goToLastPage",
          value: function goToLastPage() {
            window.history.back();
          }
        }, {
          key: "get_browser",
          value: function get_browser() {
            var ua = navigator.userAgent,
                tem,
                M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

            if (/trident/i.test(M[1])) {
              tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
              return {
                name: 'IE',
                version: tem[1] || ''
              };
            }

            if (M[1] === 'Chrome') {
              tem = ua.match(/\bOPR|Edge\/(\d+)/);

              if (tem != null) {
                return {
                  name: 'Opera',
                  version: tem[1]
                };
              }
            }

            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];

            if ((tem = ua.match(/version\/(\d+)/i)) != null) {
              M.splice(1, 1, tem[1]);
            }

            return {
              name: M[0],
              version: M[1]
            };
          }
        }, {
          key: "addModal",
          value: function addModal() {
            this.conatctForm.patchValue({
              screenshot: JSON.stringify(this.imageList)
            });

            if (this.conatctForm.valid) {
              var data = {
                heading: 'Contact support',
                content: 'Are you sure you want to submit your request?',
                body: this.conatctForm.value
              };
              this.matDialogRef = this.matDialog.open(src_app_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], {
                data: data,
                disableClose: true
              });
            } else {
              this.openSnackBarmodal("Enter the required fields", "contact_support");
            }
          }
        }, {
          key: "openSnackBarmodal",
          value: function openSnackBarmodal(message, panelClass) {
            this._snackBar.openFromComponent(src_app_shared_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], {
              data: {
                image: true,
                message: message
              },
              panelClass: panelClass,
              duration: 3000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition
            });
          }
        }, {
          key: "uploadImage",
          value: function uploadImage(event) {
            var _this2 = this;

            if (this.imageList.length < 5) {
              if (event.target.files.length && event.target.files[0].size < 1000000) {
                var mimeType = event.target.files[0].type;
                this.selectedFiles = event.target.files;

                if (event.target.files && event.target.files[0]) {
                  var file = event.target.files[0];
                  var reader = new FileReader();
                  this.isuploadFile = true;

                  reader.onload = function (e) {
                    return _this2.fileLink = reader.result;
                  };

                  reader.readAsDataURL(file);
                }

                this.uploadimg();
              } else {
                this.openSnackBarmodal("Image size should be less then 1 mb", "contact_support");
              }
            } else {
              this.openSnackBarmodal("Max amount of images reached", "contact_support");
            }
          }
        }, {
          key: "uploadimg",
          value: function uploadimg() {
            var _this3 = this;

            if (this.isuploadFile === true && this.selectedFiles) {
              this.upload().then(function (res) {
                _this3.fileLink = res.Location;

                _this3.imageList.push(_this3.fileLink);
              });
            }
          }
        }, {
          key: "upload",
          value: function upload() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var file, res;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.count += 1;
                      this.fileImg = '';
                      file = this.selectedFiles.item(0);
                      this.fileImg = file.name.replace(/ /g, '-');
                      this.fileImg = this.fileImg.split('.')[0] + '-' + new Date().getTime() + '.' + this.fileImg.split('.')[1];
                      _context.next = 7;
                      return this.uploadService.uploadfile(file, this.fileImg);

                    case 7:
                      res = _context.sent;
                      return _context.abrupt("return", res);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteImage",
          value: function deleteImage(index) {
            this.imageList.splice(index, 1);
          }
        }]);

        return ContactSupportComponent;
      }();

      ContactSupportComponent.ɵfac = function ContactSupportComponent_Factory(t) {
        return new (t || ContactSupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_image_upload_service__WEBPACK_IMPORTED_MODULE_9__["UploadFileService"]));
      };

      ContactSupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ContactSupportComponent,
        selectors: [["app-contact-support"]],
        decls: 81,
        vars: 54,
        consts: [[1, "titleWithBack"], [1, "backBtnImg", "cursor", 3, "click"], ["src", "assets/images/backButton.png"], [1, "BackTitle"], [1, "filterBody"], [1, "editTitle"], [1, "profileBox", 3, "formGroup"], ["appearance", "outline", 1, "fields", "fileld33"], ["matInput", "", "readonly", "", 3, "value"], [1, "d-inline", "country-label"], ["matInput", "", "type", "tel", "ng2TelInput", "", "numbersOnly", "", "formControlName", "phone", "minlength", "10", "readonly", "", 1, "country-flag", 3, "ng2TelInputOptions", "hasError", "ng2TelOutput", "intlTelInputObject", "countryChange"], ["matInput", "", "placeholder", "Company Name", "readonly", ""], ["matInput", "", "placeholder", "Fleet Manager", "readonly", "", 3, "value"], ["formControlName", "subject"], ["value", "Bug Report"], ["value", "Feature Request"], ["value", "Support"], ["value", "Other"], ["appearance", "outline", 1, "w-100", "feedback-section"], ["matInput", "", "maxlength", "256", "placeholder", "Ex. I need help with...", "rows", "5", "formControlName", "feedback"], ["message", ""], ["align", "end", 1, "text-count"], [1, "BtnBlock", "d-flex", "justify-content-between"], [1, "d-flex"], ["class", "image-upload mr-3", 4, "ngFor", "ngForOf"], [1, "uploadFileBox"], ["for", "upload", 1, "inline-block", "upload", "p-3", "cursor"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.6997 7.41699C16.6997 7.67533 17.9247 9.21699 17.9247 12.592V12.7003C17.9247 16.4253 16.4331 17.917 12.7081 17.917H7.28307C3.55807 17.917 2.06641 16.4253 2.06641 12.7003V12.592C2.06641 9.24199 3.27474 7.70033 6.22474 7.42533", "stroke", "#C5CDD4", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10 12.4999V3.0166", "stroke", "#C5CDD4", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12.7904 4.87467L9.9987 2.08301L7.20703 4.87467", "stroke", "#C5CDD4", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "uploadTitle"], [1, "maxSizeMsg"], ["id", "upload", "type", "file", 1, "d-none", 3, "change"], [1, "btnSave-block"], [1, "btn", "btnSave", 3, "click"], [1, "image-upload", "mr-3"], ["alt", "", 3, "src"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "cursor", 3, "click"], ["d", "M14.0451 3.48634C12.9718 3.37967 11.8985 3.29967 10.8185 3.23967V3.23301L10.6718 2.36634C10.5718 1.75301 10.4251 0.833008 8.86514 0.833008H7.11848C5.56514 0.833008 5.41848 1.71301 5.31181 2.35967L5.17181 3.21301C4.55181 3.25301 3.93181 3.29301 3.31181 3.35301L1.95181 3.48634C1.67181 3.51301 1.47181 3.75967 1.49848 4.03301C1.52514 4.30634 1.76514 4.50634 2.04514 4.47967L3.40514 4.34634C6.89848 3.99967 10.4185 4.13301 13.9518 4.48634C13.9718 4.48634 13.9851 4.48634 14.0051 4.48634C14.2585 4.48634 14.4785 4.29301 14.5051 4.03301C14.5251 3.75967 14.3251 3.51301 14.0451 3.48634Z", "fill", "#FF7070"], ["d", "M12.8211 5.42699C12.6611 5.26033 12.4411 5.16699 12.2145 5.16699H3.7878C3.56114 5.16699 3.33447 5.26033 3.18114 5.42699C3.0278 5.59366 2.94114 5.82033 2.95447 6.05366L3.3678 12.8937C3.44114 13.907 3.53447 15.1737 5.86114 15.1737H10.1411C12.4678 15.1737 12.5611 13.9137 12.6345 12.8937L13.0478 6.06033C13.0611 5.82033 12.9745 5.59366 12.8211 5.42699ZM9.1078 11.8337H6.8878C6.61447 11.8337 6.3878 11.607 6.3878 11.3337C6.3878 11.0603 6.61447 10.8337 6.8878 10.8337H9.1078C9.38114 10.8337 9.6078 11.0603 9.6078 11.3337C9.6078 11.607 9.38114 11.8337 9.1078 11.8337ZM9.6678 9.16699H6.33447C6.06114 9.16699 5.83447 8.94033 5.83447 8.66699C5.83447 8.39366 6.06114 8.16699 6.33447 8.16699H9.6678C9.94114 8.16699 10.1678 8.39366 10.1678 8.66699C10.1678 8.94033 9.94114 9.16699 9.6678 9.16699Z", "fill", "#FF7070"]],
        template: function ContactSupportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactSupportComponent_Template_span_click_1_listener() {
              return ctx.goToLastPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hasError", function ContactSupportComponent_Template_input_hasError_24_listener($event) {
              return ctx.hasError($event);
            })("ng2TelOutput", function ContactSupportComponent_Template_input_ng2TelOutput_24_listener($event) {
              return ctx.getNumber($event);
            })("intlTelInputObject", function ContactSupportComponent_Template_input_intlTelInputObject_24_listener($event) {
              return ctx.telInputObject($event, ctx.countryCodeIso);
            })("countryChange", function ContactSupportComponent_Template_input_countryChange_24_listener($event) {
              return ctx.onCountryChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "textarea", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-hint", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, ContactSupportComponent_div_62_Template, 5, 1, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "svg", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "path", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "path", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "path", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](72, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](75, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ContactSupportComponent_Template_input_change_76_listener($event) {
              return ctx.uploadImage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactSupportComponent_Template_button_click_78_listener() {
              return ctx.addModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](80, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 22, "header.support"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 24, "contactSupport"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.conatctForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 26, "name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 28, "email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ng2TelInputOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](52, _c0, ctx.countryCodeIso));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 30, "CompanyName"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 32, "Designation"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.role);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 34, "subject"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 36, "BugReport"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 38, "FeatureRequest"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 40, "Support"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 42, "Other"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 44, "YourFeedback"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r0.value.length, " / 256");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imageList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](72, 46, "UploadFile"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](75, 48, "maxSize"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](80, 50, "rule.add"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ng2_tel_input__WEBPACK_IMPORTED_MODULE_12__["Ng2TelInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]],
        styles: [".filterBody[_ngcontent-%COMP%]   .editTitle[_ngcontent-%COMP%] {\n  font: 600 18px/24px ModernEra_Bold;\n  color: #001e50;\n  margin-bottom: 20px;\n}\n.filterBody[_ngcontent-%COMP%]   .editRule[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: start;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.filterBody[_ngcontent-%COMP%]   .editRule[_ngcontent-%COMP%]   .editRuleTitle[_ngcontent-%COMP%] {\n  color: #001e50;\n  font: 600 16px/16px ModernEra;\n  margin-bottom: 0;\n  width: 228px;\n}\n.filterBody[_ngcontent-%COMP%]   .editRule[_ngcontent-%COMP%]   .editRuleTitleBack[_ngcontent-%COMP%] {\n  font: 600 16px/16px ModernEra;\n  color: #0064ff;\n  margin-bottom: 0;\n  padding: 20px 30px;\n  background: #f9fafb;\n  border-radius: 8px;\n  width: calc(100% - 228px);\n}\n.BtnBlock[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0px;\n}\n.BtnBlock[_ngcontent-%COMP%]   .btnSave-block[_ngcontent-%COMP%] {\n  padding-top: 24px;\n}\n.BtnBlock[_ngcontent-%COMP%]   .btnSave[_ngcontent-%COMP%] {\n  padding: 15px 80px;\n  background: #371987;\n  border-radius: 100px;\n  margin: 0 14px;\n  font: 700 16px/22px ModernEra_Bold;\n  color: #ffffff;\n}\n.BtnBlock[_ngcontent-%COMP%]   .image-upload[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n}\n.BtnBlock[_ngcontent-%COMP%]   .image-upload[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5%;\n  bottom: 7%;\n}\n.BtnBlock[_ngcontent-%COMP%]   .image-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  max-width: 100px;\n  max-height: 100px;\n  border-radius: 12px;\n  height: 100%;\n}\n.profileBox[_ngcontent-%COMP%]   .fields.fileld33[_ngcontent-%COMP%] {\n  margin: 0 15px 0 0;\n}\n.profileBox[_ngcontent-%COMP%]   .fields.fileld33[_ngcontent-%COMP%]:nth-child(3n+3) {\n  margin-right: 0;\n}\n.profileBox[_ngcontent-%COMP%]   .feedback-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n.profileBox[_ngcontent-%COMP%]   .feedback-section[_ngcontent-%COMP%]     input {\n  height: 100px;\n}\n.profileBox[_ngcontent-%COMP%]   .feedback-section[_ngcontent-%COMP%]     .mat-form-field-subscript-wrapper {\n  top: 71%;\n}\n.uploadFileBox[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%] {\n  border: 1px solid #c5cdd4;\n  border-radius: 12px;\n}\n.uploadFileBox[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]   .uploadTitle[_ngcontent-%COMP%] {\n  font: 500 16px/22px ModernEra;\n  color: #c5cdd4;\n}\n.uploadFileBox[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]   .maxSizeMsg[_ngcontent-%COMP%] {\n  font: 600 9px/24px ModernEra;\n  color: #ed502e;\n}\n  .contact_support {\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #F44336 !important;\n  padding: 14px 6px !important;\n}\ninput[_ngcontent-%COMP%]:-moz-read-only {\n  cursor: not-allowed;\n}\ninput[_ngcontent-%COMP%]:read-only {\n  cursor: not-allowed;\n}\n.text-count[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vY29udGFjdC1zdXBwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FDR0U7RUFDRSxrQ0FBQTtFQUNBLGNES2M7RUNKZCxtQkFBQTtBQURKO0FBR0U7RURpSUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQ2pJRSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNFLGNESFk7RUNJWiw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVOO0FBQUk7RUFDRSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRU47QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0E7RUFDSSxpQkFBQTtBQUNKO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLG1CRHFFa0I7RUNwRWxCLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsY0RwQ0k7QUNxQ1I7QUFDRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVOO0FBQUk7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMEJBQUE7S0FBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFFUjtBQUtJO0VBQ0Usa0JBQUE7QUFGTjtBQUdNO0VBQ0UsZUFBQTtBQURSO0FBS0U7RUFDSSxrQkFBQTtBQUhOO0FBS1U7RUFDSSxhQUFBO0FBSGQ7QUFLVTtFQUNFLFFBQUE7QUFIWjtBQVVBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQVBGO0FBUUU7RUFDQSw2QkFBQTtFQUNBLGNEeEVZO0FDa0VkO0FBUUU7RUFDRSw0QkFBQTtFQUNBLGNEekRPO0FDbURYO0FBVUE7RUFDSSx5R0FBQTtFQUNBLDRCQUFBO0FBUEo7QUFVQTtFQUVFLG1CQUFBO0FBUkY7QUFNQTtFQUVFLG1CQUFBO0FBUkY7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFSRiIsImZpbGUiOiJjb250YWN0LXN1cHBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKk5FVyBDT0xPUiBMSVNUKi9cblxuXG4kbGlnaHRibHVlOiAjMDA1N2ZmO1xuJGRyYWtfQmx1ZTogIzI5NjJmZjtcbiRzYmx1ZTogIzFiMTk0YjtcbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodGJsYWNrOiAjMTcxYzIyO1xuJGxpZ2h0Z3JheTogIzkzOWVhYTtcbiRmZ3JheTogIzdkODU5MjtcbiRTZWNvbmRhcnlfYmxhY2s6ICMwMDFlNTA7XG4kUHJpbWFyeV9CbHVlOiAjMDA2NGZmO1xuJFNlY29uZGFyeV9CbHVlOiAjNjA0ZWZmO1xuJGJ0bkV4cG9ydEJsdWU6ICM0YzZmZmY7XG4kZGFuZ2VyOiAjZmY3MDcwO1xuJFNlY29uZGFyeV9BbGVydHM6ICMwMGNiYTA7XG4kbm9JbmZvOiAjMThhMGZiO1xuJFNlY29uZGFyeV9EYXJrOiAjMmExZTkxO1xuJGRhcms6ICMzMjMzMzg7XG4kYm9yZGVyQ29sb3I6ICNjNWNkZDQ7XG4kbGlnaHRXaGl0ZWNvbG9yOiAjZjlmYWZiO1xuJGdyb3VwQm9yZGVyRGF0YTogI2U2ZTdlODtcbiRsaWdodG1peGJsdWVXaGl0ZWNvbG9yOiAjZTBlM2U3O1xuJHdoaXRlU2hhZG93OiAjZTllYmYwO1xuJHNreUJsdWU6ICM0ZGJmZmY7XG4keWVsbG93OiAjZmZlYTZjO1xuJG9yYW5nZTogI2ZmOTk1MDtcbiRib2R5QmFja0dyYXk6ICNmZGZjZmY7XG4kbGlnaHRCbGFjazogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiRleHBvcnRCdG46IHJnYmEoOTYsIDc4LCAyNTUsIDAuMSk7XG4kZGFuZ2VyQm94QmFjazogcmdiYSgyNTUsIDExMiwgMTEyLCAwLjEpO1xuJGdyZWVuQm94QmFjazogcmdiYSgwLCAyMDMsIDE2MCwgMC4xKTtcbiR0YWJsZU9kZEJhY2s6ICNmYmZiZmI7XG4kU2Vjb25kYXJ5X0JsdWVfZGFyazogIzc1NTVjZjtcbiRibGFjazogIzAwMDAwMDtcbiRuaWdodFRleHRDb2xvcjogIzQ3NGY1YTtcbiRuaWdodEJhY2tCbGFjazogIzY2NzI4MDtcbiR3aGl0ZUNvbG9yOiAjZTFlMWUxO1xuJHJlZENvbG9yOiAjZWQ1MDJlO1xuJGRhcmtfZ3JheTogI2JkYmRiZDtcbiRoZWxwQnRuX0JsdWU6ICM2MDJhYWM7XG4kZGF0ZUNvbG9yOiAjNGU1ZDc4O1xuJGRheUNvbG9yOiAjNGU1ZDc4N2E7XG4kcmVkQWN0aXZlQ29sb3I6ICNmYTE0NjQ7XG4kd2hpdGVDb2xvckJhY2s6ICNmN2ZjZmY7XG4kYmxhY2tEYXJrOiAjMjcyNzJlO1xuJHdoaXRlR3JheUJhY2s6ICNmN2ZjZmY7XG4vL2lucHV0IGNzc1xuJGJvcmRlckNvbG9yTGlnaHQ6ICNlOGVjZWU7XG4kYm9yZGVyQ29sb3JHcmF5OiAjZWVlZGYwO1xuJGxpZ2h0V2hpdGU6ICNlNWVlZmY7XG4kYnRuRGVmYXVsdFdoaXRlOiAjZjRmNmY4O1xuJG1hdEJvcmRlcjogI2U2ZTdlODtcblxuJHRvZ2dsZUFjdGl2ZTogIzM3MTk4NjtcblxuLy9yZ2JhIGNzc1xuJGJlaGF2aW91ckJhY2s6IHJnYmEoOTYsIDc4LCAyNTUsIDAuMDgpO1xuJG1vbnRoU2hvd0JhY2s6IHJnYmEoODYsIDY2LCAyNTUsIDAuMSk7XG4kYm94U2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuJGJhY2tEYW5nZXI6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC40KTtcbiRiYWNrR3JlZW46IHJnYigwIDIwMyAxNjAgLyAxNSUpO1xuJHNhZmVTY29yZUJhY2s6IHJnYmEoMjU1LCAxMTIsIDExMiwgMC4xKTtcbiRiYWNrR3JheUNvbW1vbjogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjA1KTtcbiRxdWl0ZVJvYWQ6ICNmZmVhNmM7XG5cbi8vbmV3IGNvbG9yIHZlcnNpb24yXG4kcmVkRXhjZXB0aW9uOiAjZmExNDY0O1xuJGJveHNoYWRvdzogMHB4IDhweCAyNXB4IHJnYmEoOTgsIDk4LCA5OCwgMC4wNSk7XG4kdG9vbHRpcHNUZXh0Q29sb3I6ICMxNjE5MmM7XG5cbi8vYm94IGdyYWRpYW50IEJhY2tncm91bmRcbiR2ZWhpY2FsQm94QmFjazogbGluZWFyLWdyYWRpZW50KDEzNC45MmRlZywgIzgxYmJmZiAtNC4yJSwgIzAwODVmZiA5OS4zNyUpO1xuJGRyaXZlbkJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzVhNmJmZiAwLjY5JSwgIzYwNGVmZiAxMDIuMiUpO1xuJGJlaGF2aW91ckJveEJhY2s6IGxpbmVhci1ncmFkaWVudCg5Mi42OWRlZywgIzhjNDZmZiAwLjY5JSwgI2ZmODA4MCAxMDIuMiUpO1xuJGV2QmxvY2tCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICMzOWQwZmYgLTE4LjU2JSwgI2ZmZTk3NyAxMDIuMTclKTtcbiRpY2VCb3hCYWNrOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcblxuLy9ib3ggdjIgZ3JhZGlhbnQgQmFja2dyb3VuZFxuJGljZUJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNmMDgyNWQgLTE4LjU2JSwgI2ZmOTk1MCAxMDIuMTclKTtcbiRkcml2ZXJCb3hWMjogbGluZWFyLWdyYWRpZW50KDkzLjUyZGVnLCAjMzlkMGZmIC0xOC41NiUsICMzNjU2ZmYgMTAyLjE3JSk7XG4ka2lsb21ldGVyQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzMuMzlkZWcsICM0OTg1ZjggLTQuMjIlLCAjNGRiZmZmIDEwNC4yNCUpO1xuJHNhZmVEcml2aW5nQm94VjI6IGxpbmVhci1ncmFkaWVudCg5My41MmRlZywgIzQ1YzhmMSAtMTguNTYlLCAjZWVlMDk3IDEwMi4xNyUpO1xuJGRyaXZlcjFCb3hWMjogbGluZWFyLWdyYWRpZW50KDkyLjY5ZGVnLCAjNzZkNmVlIDAuNjklLCAjNzY5OGRiIDEwMi4yJSk7XG4kdHJpcEJveFYyOiBsaW5lYXItZ3JhZGllbnQoOTMuNTJkZWcsICNjMmEzYTAgLTE4LjU2JSwgI2U5YzhhNyAxMDIuMTclKTtcbiR2ZWhpY2xlQm94VjI6IGxpbmVhci1ncmFkaWVudCgxMzQuOTJkZWcsICNkZjk4OTUgLTQuMiUsICNjMmEzYTAgMTA4LjE1JSk7XG5cbi8vc2Nyb2xsIGJhciBjb2xvciBjb2RlXG4kc2Nyb2xsQmxhY2s6ICM4ODg7XG4kc2Nyb2xsV2hpdGU6ICNmMWYxZjE7XG4kc2Nyb2xsSG92ZXJCbGFjazogIzU1NTtcblxuLy93aGl0ZSBsYWJlbCBmbGVhZCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I0VGQTk1Mjtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuXG4vL3doaXRlIGxhYmVsIGRobCBjb2xvclxuLy8gJFdoaXRlX2xhYmluZ19CbGFjazojMDAwMDAwO1xuLy8gJFdoaXRlX2xhYmluZ19ZZWxsb3c6I2Q0MDUxMTtcbi8vICRXaGl0ZV9sYWJpbmdfc2t5Qmx1ZTojNERCRkZGO1xuLy8gJFdoaXRlX2xhYmluZ19iYWNrR3JheTojRUVGOUZGO1xuLy8gJHdoaXRlX2xhYmluZ195ZWxsb3dkYXJrOiNGRkNDMDA7XG5cbi8vd2hpdGUgbGFiZWwgWmVnbyBjb2xvclxuJFdoaXRlX2xhYmluZ19CbGFjazogIzAwMDAwMDtcbiRXaGl0ZV9sYWJpbmdfWWVsbG93OiAjMzcxOTg3O1xuJFdoaXRlX2xhYmluZ19za3lCbHVlOiAjNGRiZmZmO1xuJFdoaXRlX2xhYmluZ19iYWNrR3JheTogI2VlZjlmZjtcbiR3aGl0ZV9sYWJpbmdfeWVsbG93ZGFyazogI2ZmY2MwMDtcbiRjb2xvcl92aW9sZXQ6ICM4Nzc1Yjc7XG4kY29sb3JfdmlvbGV0X2Rhcms6ICMzMjE5ODc7XG4kY29sb3JfbGlnaHRfZ3JleTogI2U1ZTVlNTtcbiRjb2xvci12aW9sZXQtbGlnaHQ6ICNhYzk0ZWU7XG4kY29sb3ItYmx1ZS1saWdodDogI2Y1ZjVmNTtcbiRjb2xvci10YWJsZS1oZWFkaW5nOiAjMjcyNTJkO1xuJHRyaXBIaXN0QmFjazogcmdiYSgxNTEsIDE1MSwgMTUxLCAwLjA1KTtcbiRzYWZlQmFja0NvbG9yOiByZ2JhKDAsIDIwMywgMTYwLCAwLjA1KTtcbiRjb2xvcl9saWdodF9ibHVlOiAjNDVjYmZjO1xuJGNvbG9yX2dyYXBoX3ZvaWxldDogIzM3MWE4NztcblxuLy9ncmFkaWFudCBCYWNrZ3JvdW5kXG4kZXJyb3JHcmFkaWFudDogbGluZWFyLWdyYWRpZW50KFxuICAgIDBkZWcsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KVxuICApLFxuICAjZjQ0MzM2O1xuXG5AbWl4aW4gZmxleC1qdXN0aWZ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbkBtaXhpbiBmbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuQG1peGluIGZsZXgtc3BhY2UtYmV0d2VlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1peGluIGVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5AbWl4aW4gIGxpbmUtY2xhbXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICRsaWdodG1peGJsdWVXaGl0ZWNvbG9yO1xufVxuXG5AbWl4aW4gYnRuRmlsdGVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWl4aW4gbXNnIHtcbiAgZm9udDogMTJweC8xOHB4IE1vZGVybkVyYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggMzBweDtcbiAgY29sb3I6ICR3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbn1cblxuQG1peGluIG1haW5Cb3h3aXRoQmFjayB7XG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IC01cHggMTIzcHggcmdiYSg4NywgODQsIDE2MCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi8vIEBtaXhpbiBidXR0b24tZ3JlZW4ge1xuLy8gbWF4LXdpZHRoIDogMjUwcHg7XG4vLyB3aWR0aCA6IDEwMCU7XG4vLyBoZWlnaHQgOiA1MHB4O1xuLy8gYmFja2dyb3VuZCA6ICMxMUQwQTI7XG4vLyBib3JkZXItcmFkaXVzOiAxNDVweDtcbi8vIGZvbnQtd2VpZ2h0IDogNjAwO1xuLy8gZm9udC1zaXplIDogMTVweDtcbi8vIGxpbmUtaGVpZ2h0IDogMThweDtcbi8vIGNvbG9yIDogI2ZmZmZmZjtcbi8vIH1cblxuLy8gQG1peGluIGJ1dHRvbi1ibHVlIHtcbi8vIGZvbnQgOiAxM3B4LzE2cHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYmFja2dyb3VuZCA6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzU1NUNGLCAjNzU1NUNGKSwgIzY0M0ZDMDtcbi8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyBtYXgtd2lkdGggOiAxNDBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDM4cHg7XG4vLyB9XG5cbi8vIEBtaXhpbiBidXR0b24tcmVkIHtcbi8vIGZvbnQgOiAxNnB4LzIwcHggTW9kZXJuRXJhO1xuLy8gY29sb3IgOiAjRkZGRkZGO1xuLy8gYm9yZGVyLXJhZGl1czogMTAwcHg7XG4vLyBtYXgtd2lkdGggOiAyNTBweDtcbi8vIHdpZHRoIDogMTAwJTtcbi8vIGhlaWdodCA6IDUwcHg7XG4vLyBiYWNrZ3JvdW5kIDogI0ZGNjU2NTtcbi8vIH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uZmlsdGVyQm9keSB7XG4gIC5lZGl0VGl0bGUge1xuICAgIGZvbnQ6IDYwMCAxOHB4LzI0cHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgY29sb3I6ICRTZWNvbmRhcnlfYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuZWRpdFJ1bGUge1xuICAgIEBpbmNsdWRlIGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIC5lZGl0UnVsZVRpdGxlIHtcbiAgICAgIGNvbG9yOiAkU2Vjb25kYXJ5X2JsYWNrO1xuICAgICAgZm9udDogNjAwIDE2cHgvMTZweCBNb2Rlcm5FcmE7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDIyOHB4O1xuICAgIH1cbiAgICAuZWRpdFJ1bGVUaXRsZUJhY2sge1xuICAgICAgZm9udDogNjAwIDE2cHgvMTZweCBNb2Rlcm5FcmE7XG4gICAgICBjb2xvcjogIzAwNjRmZjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjlmYWZiO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyOHB4KTtcbiAgICB9XG4gIH1cbn1cbi5CdG5CbG9jayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4O1xuICBcbi5idG5TYXZlLWJsb2Nre1xuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuICAuYnRuU2F2ZSB7XG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xuICAgIGJhY2tncm91bmQ6ICRXaGl0ZV9sYWJpbmdfWWVsbG93O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG1hcmdpbjogMCAxNHB4O1xuICAgIGZvbnQ6IDcwMCAxNnB4LzIycHggTW9kZXJuRXJhX0JvbGQ7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgfVxuICAuaW1hZ2UtdXBsb2FkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHN2ZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogNSU7XG4gICAgICBib3R0b206IDclO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuLnByb2ZpbGVCb3gge1xuICAuZmllbGRzIHtcbiAgICAmLmZpbGVsZDMzIHtcbiAgICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgICAgICY6bnRoLWNoaWxkKDNuICsgMykge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5mZWVkYmFjay1zZWN0aW9ue1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgOjpuZy1kZWVwe1xuICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXJ7XG4gICAgICAgICAgICB0b3A6IDcxJTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgfVxufVxuLnVwbG9hZEZpbGVCb3h7XG4udXBsb2FkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M1Y2RkNDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgLnVwbG9hZFRpdGxle1xuICBmb250OiA1MDAgMTZweC8yMnB4IE1vZGVybkVyYTtcbiAgY29sb3I6ICRib3JkZXJDb2xvcjtcbiAgfVxuICAubWF4U2l6ZU1zZ3tcbiAgICBmb250OiA2MDAgOXB4LzI0cHggTW9kZXJuRXJhO1xuICAgIGNvbG9yOiAkcmVkQ29sb3I7XG4gIH0gICAgXG59XG59XG46Om5nLWRlZXAgLmNvbnRhY3Rfc3VwcG9ydHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkpLCAjRjQ0MzM2ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTRweCA2cHggICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OnJlYWQtb25seXtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0Y0RjZGOCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4udGV4dC1jb3VudCB7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OjA7XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactSupportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-contact-support',
            templateUrl: './contact-support.component.html',
            styleUrls: ['./contact-support.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
          }, {
            type: src_app_services_local_service__WEBPACK_IMPORTED_MODULE_6__["LocalService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
          }, {
            type: src_app_services_image_upload_service__WEBPACK_IMPORTED_MODULE_9__["UploadFileService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mqgy":
    /*!***************************************************************!*\
      !*** ./src/app/main/contactSupport/support-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: SupportRoutingModule */

    /***/
    function mqgy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportRoutingModule", function () {
        return SupportRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _contact_support_contact_support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact-support/contact-support.component */
      "byVn");

      var routes = [{
        path: "",
        component: _contact_support_contact_support_component__WEBPACK_IMPORTED_MODULE_2__["ContactSupportComponent"],
        pathMatch: 'full'
      }];

      var SupportRoutingModule = /*#__PURE__*/_createClass(function SupportRoutingModule() {
        _classCallCheck(this, SupportRoutingModule);
      });

      SupportRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SupportRoutingModule
      });
      SupportRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SupportRoutingModule_Factory(t) {
          return new (t || SupportRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SupportRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=contactSupport-support-module-es5.js.map