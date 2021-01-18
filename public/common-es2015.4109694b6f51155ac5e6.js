(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/mantenimiento.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/mantenimiento.service.ts ***!
  \***************************************************/
/*! exports provided: MantenimientoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantenimientoService", function() { return MantenimientoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


// Servidor de desarrollo



const base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url;
let MantenimientoService = /*@__PURE__*/ (() => {
    class MantenimientoService {
        constructor(http) {
            this.http = http;
            this.remember = false;
        }
        get token() {
            if (localStorage.getItem('token')) {
                this.remember = true;
                return localStorage.getItem('token');
            }
            else if (sessionStorage.getItem('token')) {
                this.remember = false;
                return sessionStorage.getItem('token');
            }
            else {
                this.remember = false;
                return '';
            } // end if
        } // end get token
        get headers() {
            return {
                headers: {
                    'x-token': this.token
                }
            };
        } // get headers
        // GETS
        cargarEventos() {
            const url = `${base_url}/mantenimientos/dame-eventos`;
            return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => resp));
        } // end cargarEventos
        cargarLocalidades() {
            const url = `${base_url}/mantenimientos/dame-localidad`;
            return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => resp));
        } // end cargarLocalidades
        cargarLocalidadesPorProv(idProv) {
            const url = `${base_url}/mantenimientos/dame-localidad-prov/${idProv}`;
            return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => resp));
        } // end cargarLocalidades
        cargarProvincia() {
            const url = `${base_url}/mantenimientos/dame-provincias`;
            return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => resp));
        } // end cargarEventos
        cargarSedes() {
            const url = `${base_url}/mantenimientos/dame-sedes`;
            return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => resp));
        } // end cargarSedes
        cargarTipoCliente() {
            const url = `${base_url}/mantenimientos/dame-tipos-clientes`;
            return this.http.get(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => resp));
        } // end cargarTipoCliente
        // DELETES
        elminarElemento(dato, tipo) {
            const url = `${base_url}/mantenimientos/borrar-${tipo}/${dato}`;
            return this.http.delete(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => resp));
        } // elminarElemento
        eliminarLocalidad(evento, tipo) {
            const url = `${base_url}/mantenimientos/borrar-${tipo}/${evento}`;
            return this.http.delete(url, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => resp));
        } // eliminarLocalidad
        // POSTS
        nuevoElemento(nombre, tipo) {
            const url = `${base_url}/mantenimientos/cargar-${tipo}`;
            return this.http.post(url, { 'nombre': nombre }, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => resp));
        } // end nuevoElemento
        nuevaLocalidad(nombre, provincia, tipo) {
            const url = `${base_url}/mantenimientos/cargar-${tipo}`;
            return this.http.post(url, { 'nombre': nombre, 'provincia': provincia }, this.headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => resp));
        }
    }
    MantenimientoService.ɵfac = function MantenimientoService_Factory(t) { return new (t || MantenimientoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
    MantenimientoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MantenimientoService, factory: MantenimientoService.ɵfac, providedIn: 'root' });
    return MantenimientoService;
})();


/***/ })

}]);