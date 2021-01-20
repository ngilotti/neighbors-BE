(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6], {
    /***/
    "./src/app/pages/master-role/administradores/administradores.component.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/master-role/administradores/administradores.component.ts ***!
      \********************************************************************************/

    /*! exports provided: AdministradoresComponent */

    /***/
    function srcAppPagesMasterRoleAdministradoresAdministradoresComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdministradoresComponent", function () {
        return AdministradoresComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/users.service */
      "./src/app/services/users.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../pipes/imagen.pipe */
      "./src/app/pipes/imagen.pipe.ts"); // Modulos de Angular


      function AdministradoresComponent_tr_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngb-highlight", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngb-highlight", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ngb-highlight", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngb-highlight", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministradoresComponent_tr_30_Template_i_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var user_r3 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

            return ctx_r5.openModal(_r1, user_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministradoresComponent_tr_30_Template_i_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var user_r3 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7["delete"](user_r3.uid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 9, user_r3.img, "usuarios"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", user_r3.dni.toString())("term", ctx_r0.csearchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", user_r3.apellido + ", " + user_r3.nombre)("term", ctx_r0.csearchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", user_r3.email)("term", ctx_r0.csearchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", user_r3.telefono);
        }
      }

      function AdministradoresComponent_ng_template_39_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nombre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdministradoresComponent_ng_template_39_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Razon Social ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdministradoresComponent_ng_template_39_span_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CUIT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdministradoresComponent_ng_template_39_span_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unidades ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdministradoresComponent_ng_template_39_span_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Direccion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdministradoresComponent_ng_template_39_span_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Direccion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdministradoresComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministradoresComponent_ng_template_39_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.closeBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdministradoresComponent_ng_template_39_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "NOMBRE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AdministradoresComponent_ng_template_39_Template_input_blur_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.logValidationErrors(ctx_r18.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdministradoresComponent_ng_template_39_span_14_Template, 2, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "APELIIDO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AdministradoresComponent_ng_template_39_Template_input_blur_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.logValidationErrors(ctx_r19.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdministradoresComponent_ng_template_39_span_20_Template, 2, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "DNI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AdministradoresComponent_ng_template_39_Template_input_blur_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.logValidationErrors(ctx_r20.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AdministradoresComponent_ng_template_39_span_26_Template, 2, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "TELEFONO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AdministradoresComponent_ng_template_39_Template_input_blur_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.logValidationErrors(ctx_r21.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AdministradoresComponent_ng_template_39_span_32_Template, 2, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "EMAIL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AdministradoresComponent_ng_template_39_Template_input_blur_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.logValidationErrors(ctx_r22.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AdministradoresComponent_ng_template_39_span_38_Template, 2, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "IMAGEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function AdministradoresComponent_ng_template_39_Template_input_blur_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.logValidationErrors(ctx_r23.editUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AdministradoresComponent_ng_template_39_span_44_Template, 2, 0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministradoresComponent_ng_template_39_Template_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.closeBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.editAddLabel, " Administrador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.editUser);
        }
      }

      var AdministradoresComponent = /*@__PURE__*/function () {
        var AdministradoresComponent = /*#__PURE__*/function () {
          function AdministradoresComponent(fb, modalService, uServ) {
            var _this = this;

            _classCallCheck(this, AdministradoresComponent);

            this.fb = fb;
            this.modalService = modalService;
            this.uServ = uServ;
            this.filterUser = null;
            this.cfilterUser = null;
            this.page = 1;
            this.pageSize = 2;
            this.editUser = Object.create(null);
            this.editAddLabel = 'Editar';
            this.userDetail = null;
            this.totalLengthOfCollection = 0;
            this.arrAdmin = [];
            this._csearchTerm = '';
            this.cpage = 1;
            this.cpageSize = 5;
            this.formsErrors = {};
            this.ValidationMessage = {
              nombre: {
                required: 'El nombre es requerido.'
              },
              tipo: {
                required: 'El tipo es requerido. Seleccione un valor.'
              },
              unidades: {
                required: 'Las unidades son requeridas. Y deben ser valores numericos'
              },
              direccion: {
                required: 'La dirección es requerida.'
              },
              localidad: {
                required: 'La localidad es requerida. Seleccione un valor.'
              },
              admin: {
                required: 'El admin es requerido. Seleccione un valor.'
              }
            };
            this.uServ.dameAdmin().subscribe(function (resp) {
              _this.filterUser = resp.admin;
              _this.cfilterUser = resp.admin;
              _this.totalLengthOfCollection = resp.total;
            });
          } // end constructor


          _createClass(AdministradoresComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.editUser = this.fb.group({
                nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                dni: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                pasword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                img: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                uid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              });
            } // end ngOnInit
            // GETs

          }, {
            key: "cargarAdmin",
            // end set csearchTerm
            // Funciones
            value: function cargarAdmin() {
              var _this2 = this;

              this.uServ.dameAdmin().subscribe(function (resp) {
                _this2.arrAdmin = resp.admin; // console.log(this.arrAdmin);
              });
            } // cargarAdmin

          }, {
            key: "cfilter",
            value: function cfilter(v) {
              return this.filterUser.filter(function (x) {
                return x.nombre.toLowerCase().indexOf(v.toLowerCase()) !== -1 || x.apellido.toLowerCase().indexOf(v.toLowerCase()) !== -1 || x.email.toLowerCase().indexOf(v.toLowerCase()) !== -1 || x.dni.toString().indexOf(v) !== -1;
              });
            } // end cfilter

          }, {
            key: "openModal",
            value: function openModal(targetModal, user) {
              this.modalService.open(targetModal, {
                centered: true,
                backdrop: 'static'
              });

              if (user == null) {
                this.editAddLabel = 'Nuevo';
              }

              if (user != null) {
                this.userDetail = user;
                this.editAddLabel = 'Modificar';
                this.editUser.patchValue({
                  nombre: user.nombre,
                  apellido: user.apellido,
                  dni: user.dni,
                  telefono: user.telefono,
                  email: user.email,
                  img: user.img
                });
              }
            } // end openModal

          }, {
            key: "delete",
            value: function _delete(id) {
              this.cfilterUser = this.cfilterUser.filter(function (user) {
                return user.uid !== id;
              });
            } // end delete

          }, {
            key: "closeBtnClick",
            value: function closeBtnClick() {
              console.log(this.editUser);
              this.modalService.dismissAll();
              this.ngOnInit();
            } // end closeBtnClick

          }, {
            key: "onSubmit",
            value: function onSubmit() {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;

              if (this.userDetail != null) {
                this.uid = this.userDetail.uid; // const index = this.cServ.getTableClientes().indexOf(this.clientDetail);

                this.userDetail.nombre = (_b = (_a = this.editUser) === null || _a === void 0 ? void 0 : _a.get('nombre')) === null || _b === void 0 ? void 0 : _b.value;
                this.userDetail.apellido = (_d = (_c = this.editUser) === null || _c === void 0 ? void 0 : _c.get('apellido')) === null || _d === void 0 ? void 0 : _d.value;
                this.userDetail.dni = (_f = (_e = this.editUser) === null || _e === void 0 ? void 0 : _e.get('dni')) === null || _f === void 0 ? void 0 : _f.value;
                this.userDetail.telefono = (_h = (_g = this.editUser) === null || _g === void 0 ? void 0 : _g.get('telefono')) === null || _h === void 0 ? void 0 : _h.value;
                this.userDetail.role = (_k = (_j = this.editUser) === null || _j === void 0 ? void 0 : _j.get('role')) === null || _k === void 0 ? void 0 : _k.value;
                this.userDetail.email = (_m = (_l = this.editUser) === null || _l === void 0 ? void 0 : _l.get('email')) === null || _m === void 0 ? void 0 : _m.value;
                this.userDetail.pasword = (_p = (_o = this.editUser) === null || _o === void 0 ? void 0 : _o.get('pasword')) === null || _p === void 0 ? void 0 : _p.value;
                this.userDetail.img = (_r = (_q = this.editUser) === null || _q === void 0 ? void 0 : _q.get('img')) === null || _r === void 0 ? void 0 : _r.value;
                console.log(this.userDetail); // this.cServ.getTableClientes()[index] = this.clientDetail;
              } else {
                // this.clientDetail = new Cliente();
                this.userDetail.nombre = (_t = (_s = this.editUser) === null || _s === void 0 ? void 0 : _s.get('nombre')) === null || _t === void 0 ? void 0 : _t.value;
                console.log(this.userDetail); // this.cServ.getTableClientes().push(this.clientDetail);
              } // end if


              this.modalService.dismissAll();
              this.userDetail = null;
              this.ngOnInit();
            } // end onSubmit

          }, {
            key: "logValidationErrors",
            value: function logValidationErrors(group) {
              var _this3 = this;

              Object.keys(group.controls).forEach(function (key) {
                var ac = group.get(key);
                _this3.formsErrors[key] = '';

                if (ac && !ac.valid && (ac.touched || ac.dirty)) {
                  var message = _this3.ValidationMessage[key];

                  for (var errorKey in ac.errors) {
                    if (errorKey) {
                      _this3.formsErrors[key] += message[errorKey] + '    ';
                    }
                  }
                }

                if (ac instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                  _this3.logValidationErrors(ac);
                }
              });
            }
          }, {
            key: "csearchTerm",
            get: function get() {
              return this._csearchTerm;
            } // end get cSerarchTerm
            ,
            set: function set(val) {
              this._csearchTerm = val;
              this.cfilterUser = this.cfilter(val);
              console.log(this.cfilterUser);
              this.totalLengthOfCollection = this.cfilterUser.length;
            }
          }]);

          return AdministradoresComponent;
        }();

        AdministradoresComponent.ɵfac = function AdministradoresComponent_Factory(t) {
          return new (t || AdministradoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]));
        };

        AdministradoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AdministradoresComponent,
          selectors: [["app-administradores"]],
          decls: 41,
          vars: 12,
          consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-0"], [1, "lstick"], [1, "d-flex", "mt-3"], ["type", "text", "placeholder", "Search", 1, "form-control", "w-auto", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "ml-auto", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], [1, "table", "table-striped", "border", "mt-4"], ["sortable", "IMG"], ["sortable", "DNI"], ["sortable", "ADMIN"], ["sortable", "CORREO"], ["sortable", "TEL"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "page", "pageSize", "collectionSize", "pageChange"], [1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["editModal", ""], [1, "mr-2", "rounded-circle", "avatar", 2, "width", "30px", 3, "src"], [3, "result", "term"], [3, "result"], [1, "ti-pencil", "text-info", "m-r-10", "pointer", 3, "click"], [1, "ti-trash", "text-danger", "pointer", 3, "click"], [1, "modal-header", "neigh-color"], ["id", "editLabel", 1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "nom", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "formControlName", "nombre", "id", "nom", 1, "form-control", 3, "blur"], ["class", "help-block", 4, "ngIf"], ["for", "rs", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "apellido", "id", "rs", 1, "form-control", 3, "blur"], ["for", "cuit", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "dni", "id", "cuit", 1, "form-control", 3, "blur"], ["for", "unid", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "telefono", "id", "unid", 1, "form-control", 3, "blur"], ["for", "dir", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "email", "id", "dir", 1, "form-control", 3, "blur"], ["type", "text", "formControlName", "img", "id", "dir", 1, "form-control", 3, "blur"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "help-block"]],
          template: function AdministradoresComponent_Template(rf, ctx) {
            if (rf & 1) {
              var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Listado de Clientes");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdministradoresComponent_Template_input_ngModelChange_8_listener($event) {
                return ctx.csearchTerm = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdministradoresComponent_Template_button_click_9_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

                var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

                return ctx.openModal(_r1, null);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Agregar");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Img");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "DNI");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Administrador");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Correo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Telefono");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Acci\xF3n");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AdministradoresComponent_tr_30_Template, 17, 12, "tr", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "slice");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ngb-pagination", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AdministradoresComponent_Template_ngb_pagination_pageChange_33_listener($event) {
                return ctx.cpage = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdministradoresComponent_Template_select_ngModelChange_34_listener($event) {
                return ctx.cpageSize = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "5 items per page");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "8 items per page");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AdministradoresComponent_ng_template_39_Template, 50, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.csearchTerm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](31, 8, ctx.cfilterUser, (ctx.cpage - 1) * ctx.cpageSize, (ctx.cpage - 1) * ctx.cpageSize + ctx.cpageSize));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.cpage)("pageSize", ctx.cpageSize)("collectionSize", ctx.totalLengthOfCollection);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cpageSize);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 8);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbHighlight"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_5__["ImagenPipe"]],
          encapsulation: 2
        });
        return AdministradoresComponent;
      }();
      /***/

    },

    /***/
    "./src/app/pages/master-role/clientes/clientes.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/master-role/clientes/clientes.component.ts ***!
      \******************************************************************/

    /*! exports provided: ClientesComponent */

    /***/
    function srcAppPagesMasterRoleClientesClientesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientesComponent", function () {
        return ClientesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "./node_modules/sweetalert2/dist/sweetalert2.all.js");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/users.service */
      "./src/app/services/users.service.ts");
      /* harmony import */


      var _services_mantenimiento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/mantenimiento.service */
      "./src/app/services/mantenimiento.service.ts");
      /* harmony import */


      var _services_cliente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/cliente.service */
      "./src/app/services/cliente.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../pipes/imagen.pipe */
      "./src/app/pipes/imagen.pipe.ts"); // Modulos de angular


      function ClientesComponent_tr_31_td_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sin Asignar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientesComponent_tr_31_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngb-highlight", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var client_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r3.tipo.nombre)("term", ctx_r6.csearchTerm);
        }
      }

      function ClientesComponent_tr_31_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sin Asignar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientesComponent_tr_31_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngb-highlight", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var client_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r3.localidad.nombre || "Sin Asignar")("term", ctx_r8.csearchTerm);
        }
      }

      function ClientesComponent_tr_31_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sin Asignar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientesComponent_tr_31_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var client_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", client_r3.admin.apellido + ", " + client_r3.admin.nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", client_r3.admin.telefono, " ");
        }
      }

      function ClientesComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "imagen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngb-highlight", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClientesComponent_tr_31_td_8_Template, 3, 0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientesComponent_tr_31_td_9_Template, 2, 2, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClientesComponent_tr_31_td_10_Template, 3, 0, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClientesComponent_tr_31_td_11_Template, 2, 2, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClientesComponent_tr_31_td_12_Template, 3, 0, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClientesComponent_tr_31_td_13_Template, 12, 2, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngb-highlight", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientesComponent_tr_31_Template_i_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var client_r3 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            return ctx_r14.openModal(_r1, client_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientesComponent_tr_31_Template_i_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var client_r3 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16["delete"](client_r3.cid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var client_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 12, client_r3.img, "clientes"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r3.nombre)("term", ctx_r0.csearchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", client_r3.tipo === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", client_r3.tipo !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", client_r3.localidad === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", client_r3.localidad !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", client_r3.admin === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", client_r3.admin !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r3.unidades)("term", ctx_r0.csearchTerm);
        }
      }

      function ClientesComponent_ng_template_40_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nombre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientesComponent_ng_template_40_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Razon Social ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientesComponent_ng_template_40_span_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CUIT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientesComponent_ng_template_40_option_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tipo_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tipo_r29.tid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tipo_r29.nombre);
        }
      }

      function ClientesComponent_ng_template_40_span_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unidades ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientesComponent_ng_template_40_span_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Direccion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientesComponent_ng_template_40_option_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prov_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", prov_r30.pid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prov_r30.nombre);
        }
      }

      function ClientesComponent_ng_template_40_span_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " localidad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientesComponent_ng_template_40_option_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var loc_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", loc_r31.lid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loc_r31.nombre);
        }
      }

      function ClientesComponent_ng_template_40_span_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " localidad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClientesComponent_ng_template_40_option_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var admin_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", admin_r32.uid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](admin_r32.apellido + ", " + admin_r32.nombre);
        }
      }

      function ClientesComponent_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientesComponent_ng_template_40_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.closeBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ClientesComponent_ng_template_40_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "NOMBRE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ClientesComponent_ng_template_40_Template_input_blur_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.logValidationErrors(ctx_r36.editClient);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClientesComponent_ng_template_40_span_14_Template, 2, 0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "RAZON SOCIAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ClientesComponent_ng_template_40_Template_input_blur_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.logValidationErrors(ctx_r37.editClient);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClientesComponent_ng_template_40_span_20_Template, 2, 0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CUIT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ClientesComponent_ng_template_40_Template_input_blur_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.logValidationErrors(ctx_r38.editClient);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ClientesComponent_ng_template_40_span_26_Template, 2, 0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "TIPO DE CLIENTE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Seleccione una opcion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ClientesComponent_ng_template_40_option_34_Template, 2, 2, "option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "UNIDADES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ClientesComponent_ng_template_40_Template_input_blur_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.logValidationErrors(ctx_r39.editClient);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ClientesComponent_ng_template_40_span_40_Template, 2, 0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "DIRECCION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function ClientesComponent_ng_template_40_Template_input_blur_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.logValidationErrors(ctx_r40.editClient);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ClientesComponent_ng_template_40_span_46_Template, 2, 0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "PROVINCIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientesComponent_ng_template_40_Template_select_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.dameLocalidades($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Seleccione una opcion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ClientesComponent_ng_template_40_option_54_Template, 2, 2, "option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ClientesComponent_ng_template_40_span_55_Template, 2, 0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "LOCALIDAD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Seleccione una opcion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ClientesComponent_ng_template_40_option_63_Template, 2, 2, "option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ClientesComponent_ng_template_40_span_64_Template, 2, 0, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "ADMIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "select", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Seleccione un administrador");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ClientesComponent_ng_template_40_option_72_Template, 2, 2, "option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientesComponent_ng_template_40_Template_button_click_74_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.closeBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.editAddLabel, " Cliente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.editClient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.arrTipos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.arrProvincias);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.arrLocalidades);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.arrAdmin);
        }
      }

      var ClientesComponent = /*@__PURE__*/function () {
        var ClientesComponent = /*#__PURE__*/function () {
          function ClientesComponent(fb, modalService, uServ, mServ, cServ) {
            _classCallCheck(this, ClientesComponent);

            this.fb = fb;
            this.modalService = modalService;
            this.uServ = uServ;
            this.mServ = mServ;
            this.cServ = cServ;
            this.filterClient = null;
            this.cfilterClient = null;
            this.page = 1;
            this.pageSize = 2;
            this.editClient = Object.create(null);
            this.editAddLabel = 'Editar';
            this.clientDetail = null;
            this.clienteActualizar = {
              nombre: '',
              razonSocial: '',
              tipo: '',
              unidades: null,
              direccion: '',
              localidad: '',
              admin: ''
            };
            this.totalLengthOfCollection = 0;
            this.arrAdmin = [];
            this.arrTipos = [];
            this.arrProvincias = [];
            this.arrLocalidades = [];
            this._csearchTerm = '';
            this.cpage = 1;
            this.cpageSize = 5;
            this.formsErrors = {};
            this.ValidationMessage = {
              nombre: {
                required: 'El nombre es requerido.'
              },
              tipo: {
                required: 'El tipo es requerido. Seleccione un valor.'
              },
              unidades: {
                required: 'Las unidades son requeridas. Y deben ser valores numericos'
              },
              direccion: {
                required: 'La dirección es requerida.'
              },
              localidad: {
                required: 'La localidad es requerida. Seleccione un valor.'
              },
              admin: {
                required: 'El admin es requerido. Seleccione un valor.'
              }
            };
            this.dameClientes();
          } // end constructor


          _createClass(ClientesComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.editClient = this.fb.group({
                nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                razonSocial: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                cuit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]],
                tipo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                unidades: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]],
                direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                provincia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                localidad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                latitud: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                longitud: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                admin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                img: ['']
              });
              this.dameClientes();
              this.dameAdmins();
              this.dameProvincia();
              this.dameTipos();
            } // end ngOnInit

          }, {
            key: "dameClientes",
            value: function dameClientes() {
              var _this4 = this;

              this.cServ.cargarClientes().subscribe(function (resp) {
                _this4.filterClient = resp.clientes;
                _this4.cfilterClient = resp.clientes;
                _this4.totalLengthOfCollection = resp.total;
              });
            } // end dameClientes

          }, {
            key: "dameAdmins",
            value: function dameAdmins() {
              var _this5 = this;

              this.uServ.dameAdmin().subscribe(function (_ref) {
                var admin = _ref.admin;
                _this5.arrAdmin = admin;
              });
            } // end dameAdmins

          }, {
            key: "dameLocalidades",
            value: function dameLocalidades(provincia) {
              var _this6 = this;

              // console.log(provincia);
              this.mServ.cargarLocalidadesPorProv(provincia).subscribe(function (resp) {
                _this6.arrLocalidades = resp.localidades;
              }, function (error) {
                return console.log(error);
              });
            } // end dameLocalidades

          }, {
            key: "dameProvincia",
            value: function dameProvincia() {
              var _this7 = this;

              this.mServ.cargarProvincia().subscribe(function (resp) {
                _this7.arrProvincias = resp.provincias;
              }, function (error) {
                return console.log(error);
              });
            } // end dameProvincias

          }, {
            key: "dameTipos",
            value: function dameTipos() {
              var _this8 = this;

              this.mServ.cargarTipoCliente().subscribe(function (resp) {
                _this8.arrTipos = resp.tipos;
              }, function (error) {
                return console.log(error);
              });
            } // end dameTipos

          }, {
            key: "cfilter",
            // end set csearchTerm
            value: function cfilter(v) {
              return this.filterClient.filter(function (x) {
                return x.nombre.toLowerCase().indexOf(v.toLowerCase()) !== -1 || x.admin.apellido.toLowerCase().indexOf(v.toLowerCase()) !== -1 || x.localidad.nombre.toLowerCase().indexOf(v.toLowerCase()) !== -1;
              });
            } // end cfilter

          }, {
            key: "openModal",
            value: function openModal(targetModal, client) {
              this.modalService.open(targetModal, {
                centered: true,
                backdrop: 'static'
              });

              if (client == null) {
                this.editAddLabel = 'Nuevo';
              }

              if (client != null) {
                // console.log(client);
                var _tipo = client.tipo ? client.tipo._id : '';

                this.clientDetail = client;
                this.editAddLabel = 'Modificar';
                this.editClient.patchValue({
                  nombre: client.nombre,
                  razonSocial: client.razonSocial,
                  cuit: client.cuit,
                  tipo: client.tipo._id,
                  unidades: client.unidades,
                  direccion: client.direccion,
                  provincia: client.provincia._id,
                  localidad: client.localidad._id,
                  latitud: client.latitud,
                  longitud: client.longitud,
                  admin: client.admin._id,
                  img: client.img
                });
              }
            } // end openModal

          }, {
            key: "delete",
            value: function _delete(id) {
              this.cfilterClient = this.cfilterClient.filter(function (client) {
                return client.cid !== id;
              });
            } // end delete

          }, {
            key: "closeBtnClick",
            value: function closeBtnClick() {
              console.log(this.editClient);
              this.modalService.dismissAll();
              this.ngOnInit();
            } // end closeBtnClick

          }, {
            key: "onSubmit",
            value: function onSubmit() {
              var _this9 = this;

              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

              if (this.clientDetail != null) {
                this.cid = this.clientDetail.cid;

                var _admin = this.clientDetail.admin ? this.clientDetail.admin._id : '';

                var _tipo = this.clientDetail.tipo ? this.clientDetail.tipo._id : '';

                var _loc = this.clientDetail.localidad ? this.clientDetail.localidad._id : ''; // // const index = this.cServ.getTableClientes().indexOf(this.clientDetail);


                this.clienteActualizar.nombre = (_b = (_a = this.editClient) === null || _a === void 0 ? void 0 : _a.get('nombre')) === null || _b === void 0 ? void 0 : _b.value;
                this.clienteActualizar.razonSocial = (_d = (_c = this.editClient) === null || _c === void 0 ? void 0 : _c.get('razonSocial')) === null || _d === void 0 ? void 0 : _d.value;
                this.clienteActualizar.tipo = _tipo;
                this.clienteActualizar.unidades = (_f = (_e = this.editClient) === null || _e === void 0 ? void 0 : _e.get('unidades')) === null || _f === void 0 ? void 0 : _f.value;
                this.clienteActualizar.direccion = (_h = (_g = this.editClient) === null || _g === void 0 ? void 0 : _g.get('direccion')) === null || _h === void 0 ? void 0 : _h.value;
                this.clienteActualizar.localidad = _loc;
                this.clienteActualizar.latitud = (_k = (_j = this.editClient) === null || _j === void 0 ? void 0 : _j.get('latitud')) === null || _k === void 0 ? void 0 : _k.value;
                this.clienteActualizar.longitud = (_m = (_l = this.editClient) === null || _l === void 0 ? void 0 : _l.get('longitud')) === null || _m === void 0 ? void 0 : _m.value;
                this.clienteActualizar.admin = _admin;
                this.clienteActualizar.img = (_p = (_o = this.editClient) === null || _o === void 0 ? void 0 : _o.get('img')) === null || _p === void 0 ? void 0 : _p.value; // console.log(this.clienteActualizar);

                this.cServ.actualizarCliente(this.cid, this.clienteActualizar).subscribe(function (res) {
                  _this9.ngOnInit();

                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'success',
                    title: 'Usuario actualizado',
                    showConfirmButton: false,
                    timer: 1500
                  }); // alert(JSON.stringify(res));
                });
              } else {
                this.cServ.crearCliente(this.editClient.value).subscribe(function (resp) {
                  // si todo esta bien
                  _this9.editClient.reset();

                  for (var name in _this9.editClient.controls) {
                    _this9.editClient.controls[name].setErrors(null);
                  }

                  _this9.dameClientes();

                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: 'success',
                    title: 'Usuario creado',
                    showConfirmButton: false,
                    timer: 1500
                  });
                }, function (err) {
                  // si ocurre un error
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Error',
                    text: err.error.msg,
                    icon: 'error'
                  });
                }); // this.cServ.getTableClientes().push(this.clientDetail);
              } // end if


              this.modalService.dismissAll();
              this.clientDetail = null;
              this.ngOnInit();
            } // end onSubmit

          }, {
            key: "logValidationErrors",
            value: function logValidationErrors(group) {
              var _this10 = this;

              Object.keys(group.controls).forEach(function (key) {
                var ac = group.get(key);
                _this10.formsErrors[key] = '';

                if (ac && !ac.valid && (ac.touched || ac.dirty)) {
                  var message = _this10.ValidationMessage[key];

                  for (var errorKey in ac.errors) {
                    if (errorKey) {
                      _this10.formsErrors[key] += message[errorKey] + '    ';
                    }
                  }
                }

                if (ac instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                  _this10.logValidationErrors(ac);
                }
              });
            }
          }, {
            key: "csearchTerm",
            get: function get() {
              return this._csearchTerm;
            } // end get cSerarchTerm
            ,
            set: function set(val) {
              this._csearchTerm = val;
              this.cfilterClient = this.cfilter(val);
              this.totalLengthOfCollection = this.cfilterClient.length;
            }
          }]);

          return ClientesComponent;
        }();

        ClientesComponent.ɵfac = function ClientesComponent_Factory(t) {
          return new (t || ClientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mantenimiento_service__WEBPACK_IMPORTED_MODULE_5__["MantenimientoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cliente_service__WEBPACK_IMPORTED_MODULE_6__["ClienteService"]));
        };

        ClientesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ClientesComponent,
          selectors: [["app-clientes"]],
          decls: 42,
          vars: 12,
          consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-0"], [1, "lstick"], [1, "d-flex", "mt-3"], ["type", "text", "placeholder", "Search", 1, "form-control", "w-auto", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "ml-auto", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], [1, "table", "table-striped", "border", "mt-4"], ["sortable", "Name"], ["sortable", "Email"], ["sortable", "UserName"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "page", "pageSize", "collectionSize", "pageChange"], [1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["editModal", ""], [1, "mr-2", "rounded-circle", 2, "width", "30px", 3, "src"], [3, "result", "term"], [4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["class", "w200", 4, "ngIf"], [1, "text-center"], [1, "ti-pencil", "text-info", "m-r-10", "pointer", 3, "click"], [1, "ti-trash", "text-danger", "pointer", 3, "click"], [1, "label", "label-danger"], [1, "w200"], [1, "fa", "fa-user-circle"], [1, "fa", "fa-phone"], [1, "col"], [1, "fa", "fa-times", "text-danger", "cursor"], [1, "modal-header", "neigh-color"], ["id", "editLabel", 1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "nombre", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "formControlName", "nombre", "id", "nombre", 1, "form-control", 3, "blur"], ["class", "help-block", 4, "ngIf"], ["for", "rs", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "razonSocial", "id", "rs", 1, "form-control", 3, "blur"], ["for", "cuit", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "cuit", "id", "cuit", 1, "form-control", 3, "blur"], ["for", "tip", 1, "col-sm-4", "col-form-label"], ["data-placeholder", "Choose a Category", "id", "tip", "tabindex", "0", "formControlName", "tipo", 1, "form-control", "custom-select"], ["disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "unid", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "unidades", "id", "unid", 1, "form-control", 3, "blur"], ["for", "dir", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "direccion", "id", "dir", 1, "form-control", 3, "blur"], ["for", "prov", 1, "col-sm-4", "col-form-label"], ["id", "prov", "tabindex", "0", "formControlName", "provincia", 1, "form-control", "custom-select", 3, "ngModelChange"], ["for", "loc", 1, "col-sm-4", "col-form-label"], ["id", "loc", "tabindex", "0", "formControlName", "localidad", 1, "form-control", "custom-select"], ["for", "adm", 1, "col-sm-4", "col-form-label"], ["data-placeholder", "Choose a Category", "tabindex", "0", "formControlName", "admin", 1, "form-control", "custom-select"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], [1, "help-block"], [3, "value"]],
          template: function ClientesComponent_Template(rf, ctx) {
            if (rf & 1) {
              var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Listado de Clientes");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientesComponent_Template_input_ngModelChange_8_listener($event) {
                return ctx.csearchTerm = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientesComponent_Template_button_click_9_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

                var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

                return ctx.openModal(_r1, null);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Agregar");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nombre");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tipo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Localidad");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Adminsitrador");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Unidades");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Acci\xF3n");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ClientesComponent_tr_31_Template, 19, 15, "tr", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "slice");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ngb-pagination", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ClientesComponent_Template_ngb_pagination_pageChange_34_listener($event) {
                return ctx.cpage = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientesComponent_Template_select_ngModelChange_35_listener($event) {
                return ctx.cpageSize = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "5 items per page");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "8 items per page");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ClientesComponent_ng_template_40_Template, 78, 6, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.csearchTerm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](32, 8, ctx.cfilterClient, (ctx.cpage - 1) * ctx.cpageSize, (ctx.cpage - 1) * ctx.cpageSize + ctx.cpageSize));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.cpage)("pageSize", ctx.cpageSize)("collectionSize", ctx.totalLengthOfCollection);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cpageSize);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 8);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbHighlight"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"], _pipes_imagen_pipe__WEBPACK_IMPORTED_MODULE_8__["ImagenPipe"]],
          encapsulation: 2
        });
        return ClientesComponent;
      }();
      /***/

    },

    /***/
    "./src/app/pages/master-role/mantenimientos/mantenimientos.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/master-role/mantenimientos/mantenimientos.component.ts ***!
      \******************************************************************************/

    /*! exports provided: MantenimientosComponent */

    /***/
    function srcAppPagesMasterRoleMantenimientosMantenimientosComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MantenimientosComponent", function () {
        return MantenimientosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "./node_modules/sweetalert2/dist/sweetalert2.all.js");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _services_mantenimiento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/mantenimiento.service */
      "./src/app/services/mantenimiento.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _tablas_tablas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../tablas/tablas.component */
      "./src/app/pages/master-role/tablas/tablas.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js"); // Modulos de Angular
      //  Modulos de terceros
      // Models


      function MantenimientosComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_10_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.cambiarTipoDato("tipos-clientes");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TIPOS DE CLIENTES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MantenimientosComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_11_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            return ctx_r14.open1(_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Nuevo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-tablas", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("idEliminado", function MantenimientosComponent_ng_template_11_Template_app_tablas_idEliminado_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.eliminarTipo($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arr", ctx_r1.arrTipos);
        }
      }

      function MantenimientosComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_13_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.cambiarTipoDato("eventos");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "EVENTOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MantenimientosComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_14_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            return ctx_r19.open1(_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Nuevo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-tablas", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("idEliminado", function MantenimientosComponent_ng_template_14_Template_app_tablas_idEliminado_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.eliminarEvento($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arr", ctx_r3.arrEventos);
        }
      }

      function MantenimientosComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_16_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.cambiarTipoDato("sedes");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SEDES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MantenimientosComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_17_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            return ctx_r24.open1(_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Nuevo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-tablas", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("idEliminado", function MantenimientosComponent_ng_template_17_Template_app_tablas_idEliminado_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.eliminarSede($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arr", ctx_r5.arrSedes);
        }
      }

      function MantenimientosComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_19_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.cambiarTipoDato("provincias");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PROVINCIAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MantenimientosComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_20_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            return ctx_r29.open1(_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Nuevo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-tablas", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("idEliminado", function MantenimientosComponent_ng_template_20_Template_app_tablas_idEliminado_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.eliminarProvincia($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arr", ctx_r7.arrProvincias);
        }
      }

      function MantenimientosComponent_ng_template_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_22_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.cambiarTipoDato("localidad");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LOCALIDADES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MantenimientosComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_23_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            return ctx_r34.open1(_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Nuevo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-tablas", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("idEliminado", function MantenimientosComponent_ng_template_23_Template_app_tablas_idEliminado_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.eliminarLocalidad($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("arrLoc", ctx_r9.arrLocalidades);
        }
      }

      function MantenimientosComponent_ng_template_24_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_24_div_0_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var modal_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return modal_r37.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MantenimientosComponent_ng_template_24_div_0_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r43.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_24_div_0_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

            var modal_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            modal_r37.close("Save click");
            return ctx_r44.nuevoMantenimiento();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Agregar ", ctx_r38.titulo, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.nombre);
        }
      }

      function MantenimientosComponent_ng_template_24_div_1_option_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prov_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", prov_r47.pid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prov_r47.nombre);
        }
      }

      function MantenimientosComponent_ng_template_24_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_24_div_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

            var modal_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return modal_r37.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MantenimientosComponent_ng_template_24_div_1_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r51.nombre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PROVINCIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MantenimientosComponent_ng_template_24_div_1_Template_select_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r52.provincia = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Seleccione una opcion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MantenimientosComponent_ng_template_24_div_1_option_21_Template, 2, 2, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MantenimientosComponent_ng_template_24_div_1_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

            var modal_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            modal_r37.close("Save click");
            return ctx_r53.nuevaLocalidad();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Agregar ", ctx_r39.titulo, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r39.provincia);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.arrProvincias);
        }
      }

      function MantenimientosComponent_ng_template_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MantenimientosComponent_ng_template_24_div_0_Template, 17, 3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MantenimientosComponent_ng_template_24_div_1_Template, 25, 5, "div", 22);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.tipoDato != "localidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.tipoDato == "localidad");
        }
      }

      var MantenimientosComponent = /*@__PURE__*/function () {
        var MantenimientosComponent = /*#__PURE__*/function () {
          function MantenimientosComponent(mServ, fb, modalService) {
            _classCallCheck(this, MantenimientosComponent);

            this.mServ = mServ;
            this.fb = fb;
            this.modalService = modalService;
            this.arrEventos = [];
            this.arrLocalidades = [];
            this.arrProvincias = [];
            this.arrSedes = [];
            this.arrTipos = [];
            this.closeResult = '';
            this.nombre = '';
            this.provincia = '';
            this.tipoDato = 'tipos-clientes';
            this.titulo = 'Tipo de Cliente';
          }

          _createClass(MantenimientosComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.dameTipos();
              this.dameEventos();
              this.dameSedes();
              this.dameProvincia();
              this.dameLocalidades();
            } // end ngOnInit
            // GETS DE TABLAS

          }, {
            key: "dameEventos",
            value: function dameEventos() {
              var _this11 = this;

              this.mServ.cargarEventos().subscribe(function (resp) {
                _this11.arrEventos = resp.eventos;
              }, function (error) {
                return console.log(error);
              });
            } // end dameEventos

          }, {
            key: "dameLocalidades",
            value: function dameLocalidades() {
              var _this12 = this;

              this.mServ.cargarLocalidades().subscribe(function (resp) {
                _this12.arrLocalidades = resp.localidades;
              }, function (error) {
                return console.log(error);
              });
            } // end dameLocalidades

          }, {
            key: "dameProvincia",
            value: function dameProvincia() {
              var _this13 = this;

              this.mServ.cargarProvincia().subscribe(function (resp) {
                _this13.arrProvincias = resp.provincias;
              }, function (error) {
                return console.log(error);
              });
            } // end dameProvincias

          }, {
            key: "dameSedes",
            value: function dameSedes() {
              var _this14 = this;

              this.mServ.cargarSedes().subscribe(function (resp) {
                _this14.arrSedes = resp.sedes;
              }, function (error) {
                return console.log(error);
              });
            } // dameSedes

          }, {
            key: "dameTipos",
            value: function dameTipos() {
              var _this15 = this;

              this.mServ.cargarTipoCliente().subscribe(function (resp) {
                _this15.arrTipos = resp.tipos;
              }, function (error) {
                return console.log(error);
              });
            } // end dameTipos
            // CREATES DE ELEMENTOS

          }, {
            key: "nuevoMantenimiento",
            value: function nuevoMantenimiento() {
              var _this16 = this;

              this.mServ.nuevoElemento(this.nombre, this.tipoDato).subscribe(function (resp) {
                // si todo esta bien
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  icon: 'success',
                  title: 'Nuevo elemento creado',
                  showConfirmButton: false,
                  timer: 1500
                });
                _this16.nombre = '';

                _this16.dameTipos();

                _this16.dameEventos();

                _this16.dameSedes();

                _this16.dameProvincia();
              }, function (err) {
                // si ocurre un error
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  title: 'Error',
                  text: err.error.msg,
                  icon: 'error'
                });
                _this16.nombre = '';
              });
            } // end nuevoMantenimiento

          }, {
            key: "nuevaLocalidad",
            value: function nuevaLocalidad() {
              var _this17 = this;

              this.mServ.nuevaLocalidad(this.nombre, this.provincia, this.tipoDato).subscribe(function (resp) {
                // si todo esta bien
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  icon: 'success',
                  title: 'Nuevo elemento creado',
                  showConfirmButton: false,
                  timer: 1500
                });
                _this17.nombre = '';
                _this17.provincia = '';

                _this17.dameLocalidades();
              }, function (err) {
                // si ocurre un error
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  title: 'Error',
                  text: err.error.msg,
                  icon: 'error'
                });
                _this17.nombre = '';
                _this17.provincia = '';
              });
            } // end nuevaLocalidad
            // DELETES DE ELEMENTOS

          }, {
            key: "eliminarEvento",
            value: function eliminarEvento(evento) {
              var _this18 = this;

              // console.log(evento);
              this.mServ.elminarElemento(evento.eid, this.tipoDato).subscribe(function (resp) {
                // si todo esta bien
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  icon: 'success',
                  title: resp.msg,
                  showConfirmButton: false,
                  timer: 1500
                });

                _this18.dameEventos();
              }, function (err) {
                // si ocurre un error
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  title: 'Error',
                  text: err.error.msg,
                  icon: 'error'
                });
              });
            } // end eliminarEvento

          }, {
            key: "eliminarLocalidad",
            value: function eliminarLocalidad(evento) {
              var _this19 = this;

              this.mServ.eliminarLocalidad(evento.lid, this.tipoDato).subscribe(function (resp) {
                // si todo esta bien
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  icon: 'success',
                  title: resp.msg,
                  showConfirmButton: false,
                  timer: 1500
                });

                _this19.dameLocalidades();
              }, function (err) {
                // si ocurre un error
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  title: 'Error',
                  text: err.error.msg,
                  icon: 'error'
                });
              });
            } // end eliminarLocalidad

          }, {
            key: "eliminarProvincia",
            value: function eliminarProvincia(provincia) {
              var _this20 = this;

              // console.log(provincia);
              this.mServ.elminarElemento(provincia.pid, this.tipoDato).subscribe(function (resp) {
                // si todo esta bien
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  icon: 'success',
                  title: resp.msg,
                  showConfirmButton: false,
                  timer: 1500
                });

                _this20.dameProvincia();
              }, function (err) {
                // si ocurre un error
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  title: 'Error',
                  text: err.error.msg,
                  icon: 'error'
                });
              });
            } // end eliminarProvincia

          }, {
            key: "eliminarSede",
            value: function eliminarSede(sede) {
              var _this21 = this;

              // console.log(sede);
              this.mServ.elminarElemento(sede.sid, this.tipoDato).subscribe(function (resp) {
                // si todo esta bien
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  icon: 'success',
                  title: resp.msg,
                  showConfirmButton: false,
                  timer: 1500
                });

                _this21.dameSedes();
              }, function (err) {
                // si ocurre un error
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  title: 'Error',
                  text: err.error.msg,
                  icon: 'error'
                });
              });
            } // end eliminarSede

          }, {
            key: "eliminarTipo",
            value: function eliminarTipo(tipo) {
              var _this22 = this;

              // console.log(tipo);
              this.mServ.elminarElemento(tipo.tid, this.tipoDato).subscribe(function (resp) {
                // si todo esta bien
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  icon: 'success',
                  title: resp.msg,
                  showConfirmButton: false,
                  timer: 1500
                });

                _this22.dameTipos();
              }, function (err) {
                // si ocurre un error
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  title: 'Error',
                  text: err.error.msg,
                  icon: 'error'
                });
              });
            } // eliminarTipo
            // OTRAS FUNCIONES

          }, {
            key: "cambiarTipoDato",
            value: function cambiarTipoDato(tipo) {
              this.tipoDato = tipo;

              switch (this.tipoDato) {
                case 'tipos-clientes':
                  this.titulo = 'Tipo de Cliente';
                  break;

                case 'eventos':
                  this.titulo = 'Evento';
                  break;

                case 'sedes':
                  this.titulo = 'Sede';
                  break;

                case 'provincias':
                  this.titulo = 'Provincia';
                  break;

                case 'localidad':
                  this.titulo = 'Localidad';
                  break;

                default:
                  this.titulo = '';
                  break;
              } // end switch

            } // end cambiarTipoDato

          }, {
            key: "open1",
            value: function open1(content1) {
              var _this23 = this;

              this.modalService.open(content1, {
                ariaLabelledBy: 'modal-basic-title'
              }).result.then(function (result) {
                _this23.closeResult = "Closed with: ".concat(result);
              }, function (reason) {
                _this23.closeResult = "Dismissed ".concat(_this23.getDismissReason(reason));
              });
            } // end open1

          }, {
            key: "getDismissReason",
            value: function getDismissReason(reason) {
              if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
                return 'by pressing ESC';
              } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
                return 'by clicking on a backdrop';
              } else {
                return "with: ".concat(reason);
              }
            } // end getDismissReason

          }]);

          return MantenimientosComponent;
        }();

        MantenimientosComponent.ɵfac = function MantenimientosComponent_Factory(t) {
          return new (t || MantenimientosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mantenimiento_service__WEBPACK_IMPORTED_MODULE_3__["MantenimientoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
        };

        MantenimientosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MantenimientosComponent,
          selectors: [["app-mantenimientos"]],
          decls: 26,
          vars: 0,
          consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "col-md-12"], ["ngbTabTitle", ""], ["ngbTabContent", ""], ["content1", ""], [3, "click"], [1, "d-sm-none"], [1, "mdi", "mdi-city"], [1, "d-none", "d-sm-block"], [1, "row", "mt-2", 2, "align-items", "flex-end", "align-content", "flex-end"], [1, "col-lg-2", "col-md-4", "mt-4", "text-end", 2, "align-content", "flex-end"], [1, "btn", "btn-rounded", "btn-block", "btn-outline-info", 3, "click"], [1, "mdi", "mdi-plus"], [3, "arr", "idEliminado"], [1, "mdi", "mdi-cake"], [1, "mdi", "mdi-crosshairs-gps"], [1, "mdi", "mdi-map-marker-radius"], [1, "mdi", "mdi-map-marker-multiple"], [3, "arrLoc", "idEliminado"], ["class", "modal-content", 4, "ngIf"], [1, "modal-content"], [1, "modal-header", "neigh-color"], ["id", "modal-basic-title", 1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], ["for", "nombre", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "name", "nombre", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-outline-dark", 3, "click"], ["for", "localidad", 1, "col-sm-4", "col-form-label"], ["type", "text", "name", "localidad", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "provincia", 1, "col-sm-4", "col-form-label"], ["name", "provincia", "tabindex", "0", 1, "form-control", "custom-select", 3, "ngModel", "ngModelChange"], ["disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
          template: function MantenimientosComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-tabset");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-tab");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MantenimientosComponent_ng_template_10_Template, 5, 0, "ng-template", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MantenimientosComponent_ng_template_11_Template, 6, 1, "ng-template", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngb-tab");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MantenimientosComponent_ng_template_13_Template, 5, 0, "ng-template", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MantenimientosComponent_ng_template_14_Template, 6, 1, "ng-template", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ngb-tab");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MantenimientosComponent_ng_template_16_Template, 5, 0, "ng-template", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MantenimientosComponent_ng_template_17_Template, 6, 1, "ng-template", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngb-tab");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MantenimientosComponent_ng_template_19_Template, 5, 0, "ng-template", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MantenimientosComponent_ng_template_20_Template, 6, 1, "ng-template", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngb-tab");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MantenimientosComponent_ng_template_22_Template, 5, 0, "ng-template", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MantenimientosComponent_ng_template_23_Template, 6, 1, "ng-template", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MantenimientosComponent_ng_template_24_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }
          },
          directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"], _tablas_tablas_component__WEBPACK_IMPORTED_MODULE_5__["TablasComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
          encapsulation: 2
        });
        return MantenimientosComponent;
      }();
      /***/

    },

    /***/
    "./src/app/pages/master-role/master-role.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/master-role/master-role.module.ts ***!
      \*********************************************************/

    /*! exports provided: MasterRoleModule */

    /***/
    function srcAppPagesMasterRoleMasterRoleModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MasterRoleModule", function () {
        return MasterRoleModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _administradores_administradores_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./administradores/administradores.component */
      "./src/app/pages/master-role/administradores/administradores.component.ts");
      /* harmony import */


      var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./clientes/clientes.component */
      "./src/app/pages/master-role/clientes/clientes.component.ts");
      /* harmony import */


      var _mantenimientos_mantenimientos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./mantenimientos/mantenimientos.component */
      "./src/app/pages/master-role/mantenimientos/mantenimientos.component.ts");
      /* harmony import */


      var _master_role_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./master-role.routing */
      "./src/app/pages/master-role/master-role.routing.ts");
      /* harmony import */


      var _tablas_tablas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./tablas/tablas.component */
      "./src/app/pages/master-role/tablas/tablas.component.ts"); // Modulos de angular
      // Modulos de terceros
      // Pipes
      // MASTER-ROLE
      // Services
      // Routing


      var MasterRoleModule = /*@__PURE__*/function () {
        var MasterRoleModule = function MasterRoleModule() {
          _classCallCheck(this, MasterRoleModule);
        };

        MasterRoleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
          type: MasterRoleModule
        });
        MasterRoleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
          factory: function MasterRoleModule_Factory(t) {
            return new (t || MasterRoleModule)();
          },
          providers: [],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_master_role_routing__WEBPACK_IMPORTED_MODULE_9__["MasterRoleRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]]
        });
        return MasterRoleModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MasterRoleModule, {
          declarations: [_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_7__["ClientesComponent"], _administradores_administradores_component__WEBPACK_IMPORTED_MODULE_6__["AdministradoresComponent"], _mantenimientos_mantenimientos_component__WEBPACK_IMPORTED_MODULE_8__["MantenimientosComponent"], _tablas_tablas_component__WEBPACK_IMPORTED_MODULE_10__["TablasComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
          exports: [_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_7__["ClientesComponent"], _administradores_administradores_component__WEBPACK_IMPORTED_MODULE_6__["AdministradoresComponent"], _mantenimientos_mantenimientos_component__WEBPACK_IMPORTED_MODULE_8__["MantenimientosComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/master-role/master-role.routing.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/master-role/master-role.routing.ts ***!
      \**********************************************************/

    /*! exports provided: MasterRoleRoutes */

    /***/
    function srcAppPagesMasterRoleMasterRoleRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MasterRoleRoutes", function () {
        return MasterRoleRoutes;
      });
      /* harmony import */


      var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./clientes/clientes.component */
      "./src/app/pages/master-role/clientes/clientes.component.ts");
      /* harmony import */


      var _administradores_administradores_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./administradores/administradores.component */
      "./src/app/pages/master-role/administradores/administradores.component.ts");
      /* harmony import */


      var _mantenimientos_mantenimientos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mantenimientos/mantenimientos.component */
      "./src/app/pages/master-role/mantenimientos/mantenimientos.component.ts"); // MASTER-ROLE


      var MasterRoleRoutes = [{
        path: '',
        children: [// Master
        {
          path: 'clientes',
          component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_0__["ClientesComponent"],
          data: {
            title: 'Clientes'
          }
        }, {
          path: 'administradores',
          component: _administradores_administradores_component__WEBPACK_IMPORTED_MODULE_1__["AdministradoresComponent"],
          data: {
            title: 'Administradores'
          }
        }, {
          path: 'mantenimientos',
          component: _mantenimientos_mantenimientos_component__WEBPACK_IMPORTED_MODULE_2__["MantenimientosComponent"],
          data: {
            title: 'Mantenimientos'
          }
        }]
      }];
      /***/
    },

    /***/
    "./src/app/pages/master-role/tablas/tablas.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/master-role/tablas/tablas.component.ts ***!
      \**************************************************************/

    /*! exports provided: TablasComponent */

    /***/
    function srcAppPagesMasterRoleTablasTablasComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablasComponent", function () {
        return TablasComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js"); // Modulos de Angular


      function TablasComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cargando...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Por favor espere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TablasComponent_div_1_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TablasComponent_div_1_tr_18_Template_i_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var item_r4 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.eliminarItem(item_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r3.page - 1) * 5 + (i_r5 + 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.nombre);
        }
      }

      function TablasComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Acciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TablasComponent_div_1_tr_18_Template, 7, 2, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ngb-pagination", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TablasComponent_div_1_Template_ngb_pagination_pageChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.page = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](19, 4, ctx_r1.arr, (ctx_r1.page - 1) * ctx_r1.pageSize, (ctx_r1.page - 1) * ctx_r1.pageSize + ctx_r1.pageSize));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx_r1.arr.length)("page", ctx_r1.page)("pageSize", ctx_r1.pageSize);
        }
      }

      function TablasComponent_div_2_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TablasComponent_div_2_tr_21_Template_i_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var item_r11 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.eliminarItem(item_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r11 = ctx.$implicit;
          var i_r12 = ctx.index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r10.page - 1) * 5 + (i_r12 + 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.provincia.nombre);
        }
      }

      function TablasComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Provincia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Acciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TablasComponent_div_2_tr_21_Template, 9, 3, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngb-pagination", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TablasComponent_div_2_Template_ngb_pagination_pageChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.page = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](22, 4, ctx_r2.arrLoc, (ctx_r2.page - 1) * ctx_r2.pageSize, (ctx_r2.page - 1) * ctx_r2.pageSize + ctx_r2.pageSize));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx_r2.arrLoc.length)("page", ctx_r2.page)("pageSize", ctx_r2.pageSize);
        }
      }

      var TablasComponent = /*@__PURE__*/function () {
        var TablasComponent = /*#__PURE__*/function () {
          function TablasComponent() {
            _classCallCheck(this, TablasComponent);

            this.cargando = true;
            this.arr = [];
            this.arrLoc = [];
            this.idEliminado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.page = 1;
            this.pageSize = 5;
            this.totalLengthOfCollection = 0;
          } // end constructor


          _createClass(TablasComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {} // end ngOnInit

          }, {
            key: "eliminarItem",
            value: function eliminarItem(item) {
              this.idEliminado.emit(item);
            } // eliminarItem

          }]);

          return TablasComponent;
        }();

        TablasComponent.ɵfac = function TablasComponent_Factory(t) {
          return new (t || TablasComponent)();
        };

        TablasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: TablasComponent,
          selectors: [["app-tablas"]],
          inputs: {
            arr: "arr",
            arrLoc: "arrLoc"
          },
          outputs: {
            idEliminado: "idEliminado"
          },
          decls: 3,
          vars: 3,
          consts: [["class", "row anumated fadeIn fast", 4, "ngIf"], [1, "row", "anumated", "fadeIn", "fast"], [1, "col-12"], [1, "alert", "alert-info", "text-center"], [1, "alert-heading"], [1, "fa", "fa-spin", "fa-refresh", "fa-2x"], [1, "mb-0"], [1, "card"], [1, "card-body"], [1, "table-responsive", "mt-4"], [1, "table", "table-striped", "table-dark", "m-b-0"], [1, "footable-sortable", "text-center"], [1, "footable-sort-indicator"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "page", "pageSize", "pageChange"], [1, "text-center"], [1, "ti-trash", "text-danger", "cursor", 3, "click"], [1, "footable-sortable"]],
          template: function TablasComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TablasComponent_div_0_Template, 8, 0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TablasComponent_div_1_Template, 22, 8, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TablasComponent_div_2_Template, 25, 8, "div", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arr.length == 0 && ctx.arrLoc.length == 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrLoc.length === 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.arrLoc.length !== 0);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPagination"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]],
          encapsulation: 2
        });
        return TablasComponent;
      }();
      /***/

    },

    /***/
    "./src/app/services/cliente.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/cliente.service.ts ***!
      \*********************************************/

    /*! exports provided: ClienteService */

    /***/
    function srcAppServicesClienteServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClienteService", function () {
        return ClienteService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js"); // Librerias de Angular
      // Servidor de desarrollo


      var base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;

      var ClienteService = /*@__PURE__*/function () {
        var ClienteService = /*#__PURE__*/function () {
          function ClienteService(http) {
            _classCallCheck(this, ClienteService);

            this.http = http;
            this.remember = false;
          }

          _createClass(ClienteService, [{
            key: "crearCliente",
            // get headers
            value: function crearCliente(formData) {
              var url = "".concat(base_url, "/clientes");
              return this.http.post(url, formData, this.headers);
            } // end crearCliente

          }, {
            key: "cargarClientes",
            value: function cargarClientes() {
              var desde = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var url = "".concat(base_url, "/clientes?desde=").concat(desde);
              return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
                return resp;
              }));
            } // end cargarCliente

          }, {
            key: "actualizarCliente",
            value: function actualizarCliente(cid, formdata) {
              var url = "".concat(base_url, "/clientes/").concat(cid);
              return this.http.put(url, formdata, this.headers);
            } // end actualizarCliente

          }, {
            key: "getClientesPorAdmin",
            value: function getClientesPorAdmin(uid) {
              var url = "".concat(base_url, "/clientesPorAdmin/").concat(uid);
              this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
                return console.log(resp);
              }));
            }
          }, {
            key: "token",
            get: function get() {
              if (localStorage.getItem('token')) {
                this.remember = true;
                return localStorage.getItem('token');
              } else if (sessionStorage.getItem('token')) {
                this.remember = false;
                return sessionStorage.getItem('token');
              } else {
                this.remember = false;
                return '';
              } // end if

            } // end get token

          }, {
            key: "headers",
            get: function get() {
              return {
                headers: {
                  'x-token': this.token
                }
              };
            }
          }]);

          return ClienteService;
        }();

        ClienteService.ɵfac = function ClienteService_Factory(t) {
          return new (t || ClienteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
        };

        ClienteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: ClienteService,
          factory: ClienteService.ɵfac,
          providedIn: 'root'
        });
        return ClienteService;
      }();
      /***/

    }
  }]);
})();