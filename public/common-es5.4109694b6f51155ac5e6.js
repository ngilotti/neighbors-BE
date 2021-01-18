(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./src/app/services/mantenimiento.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/mantenimiento.service.ts ***!
      \***************************************************/

    /*! exports provided: MantenimientoService */

    /***/
    function srcAppServicesMantenimientoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MantenimientoService", function () {
        return MantenimientoService;
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
      "./node_modules/@angular/common/fesm2015/http.js"); // Servidor de desarrollo


      var base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;

      var MantenimientoService = /*@__PURE__*/function () {
        var MantenimientoService = /*#__PURE__*/function () {
          function MantenimientoService(http) {
            _classCallCheck(this, MantenimientoService);

            this.http = http;
            this.remember = false;
          }

          _createClass(MantenimientoService, [{
            key: "cargarEventos",
            // get headers
            // GETS
            value: function cargarEventos() {
              var url = "".concat(base_url, "/mantenimientos/dame-eventos");
              return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
                return resp;
              }));
            } // end cargarEventos

          }, {
            key: "cargarLocalidades",
            value: function cargarLocalidades() {
              var url = "".concat(base_url, "/mantenimientos/dame-localidad");
              return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
                return resp;
              }));
            } // end cargarLocalidades

          }, {
            key: "cargarLocalidadesPorProv",
            value: function cargarLocalidadesPorProv(idProv) {
              var url = "".concat(base_url, "/mantenimientos/dame-localidad-prov/").concat(idProv);
              return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
                return resp;
              }));
            } // end cargarLocalidades

          }, {
            key: "cargarProvincia",
            value: function cargarProvincia() {
              var url = "".concat(base_url, "/mantenimientos/dame-provincias");
              return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
                return resp;
              }));
            } // end cargarEventos

          }, {
            key: "cargarSedes",
            value: function cargarSedes() {
              var url = "".concat(base_url, "/mantenimientos/dame-sedes");
              return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
                return resp;
              }));
            } // end cargarSedes

          }, {
            key: "cargarTipoCliente",
            value: function cargarTipoCliente() {
              var url = "".concat(base_url, "/mantenimientos/dame-tipos-clientes");
              return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
                return resp;
              }));
            } // end cargarTipoCliente
            // DELETES

          }, {
            key: "elminarElemento",
            value: function elminarElemento(dato, tipo) {
              var url = "".concat(base_url, "/mantenimientos/borrar-").concat(tipo, "/").concat(dato);
              return this.http["delete"](url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
                return resp;
              }));
            } // elminarElemento

          }, {
            key: "eliminarLocalidad",
            value: function eliminarLocalidad(evento, tipo) {
              var url = "".concat(base_url, "/mantenimientos/borrar-").concat(tipo, "/").concat(evento);
              return this.http["delete"](url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
                return resp;
              }));
            } // eliminarLocalidad
            // POSTS

          }, {
            key: "nuevoElemento",
            value: function nuevoElemento(nombre, tipo) {
              var url = "".concat(base_url, "/mantenimientos/cargar-").concat(tipo);
              return this.http.post(url, {
                'nombre': nombre
              }, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
                return resp;
              }));
            } // end nuevoElemento

          }, {
            key: "nuevaLocalidad",
            value: function nuevaLocalidad(nombre, provincia, tipo) {
              var url = "".concat(base_url, "/mantenimientos/cargar-").concat(tipo);
              return this.http.post(url, {
                'nombre': nombre,
                'provincia': provincia
              }, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
                return resp;
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

          return MantenimientoService;
        }();

        MantenimientoService.ɵfac = function MantenimientoService_Factory(t) {
          return new (t || MantenimientoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
        };

        MantenimientoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: MantenimientoService,
          factory: MantenimientoService.ɵfac,
          providedIn: 'root'
        });
        return MantenimientoService;
      }();
      /***/

    }
  }]);
})();