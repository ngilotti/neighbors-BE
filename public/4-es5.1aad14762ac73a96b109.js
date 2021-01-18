(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
    /***/
    "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js ***!
      \*********************************************************************************/

    /*! exports provided: ClickType, ColumnChangesService, ColumnMode, ContextmenuType, DataTableBodyCellComponent, DataTableBodyComponent, DataTableBodyRowComponent, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableFooterComponent, DataTableFooterTemplateDirective, DataTableHeaderCellComponent, DataTableHeaderComponent, DataTablePagerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, DatatableComponent, DatatableFooterDirective, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DimensionsHelper, DraggableDirective, Keys, LongPressDirective, NgxDatatableModule, OrderableDirective, ProgressBarComponent, ResizeableDirective, RowHeightCache, ScrollbarHelper, ScrollerComponent, SelectionType, SortDirection, SortType, VisibilityDirective, adjustColumnWidths, camelCase, columnGroupWidths, columnTotalWidth, columnsByPin, columnsByPinArr, columnsTotalWidth, deCamelCase, deepValueGetter, elementsFromPoint, emptyStringGetter, forceFillColumnWidths, getTotalFlexGrow, getVendorPrefixedName, getterForProp, groupRowsByParents, id, isNullOrUndefined, nextSortDir, numericIndexGetter, optionalGetterForProp, orderByComparator, selectRows, selectRowsBetween, setColumnDefaults, shallowValueGetter, sortRows, throttle, throttleable, translateTemplates, translateXY, ɵ0 */

    /***/
    function node_modulesSwimlaneNgxDatatableFesm2015SwimlaneNgxDatatableJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClickType", function () {
        return ClickType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColumnChangesService", function () {
        return ColumnChangesService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColumnMode", function () {
        return ColumnMode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContextmenuType", function () {
        return ContextmenuType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableBodyCellComponent", function () {
        return DataTableBodyCellComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableBodyComponent", function () {
        return DataTableBodyComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableBodyRowComponent", function () {
        return DataTableBodyRowComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableColumnCellDirective", function () {
        return DataTableColumnCellDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableColumnCellTreeToggle", function () {
        return DataTableColumnCellTreeToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableColumnDirective", function () {
        return DataTableColumnDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableColumnHeaderDirective", function () {
        return DataTableColumnHeaderDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableFooterComponent", function () {
        return DataTableFooterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableFooterTemplateDirective", function () {
        return DataTableFooterTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableHeaderCellComponent", function () {
        return DataTableHeaderCellComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableHeaderComponent", function () {
        return DataTableHeaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTablePagerComponent", function () {
        return DataTablePagerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableRowWrapperComponent", function () {
        return DataTableRowWrapperComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableSelectionComponent", function () {
        return DataTableSelectionComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableSummaryRowComponent", function () {
        return DataTableSummaryRowComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableComponent", function () {
        return DatatableComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableFooterDirective", function () {
        return DatatableFooterDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderDirective", function () {
        return DatatableGroupHeaderDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderTemplateDirective", function () {
        return DatatableGroupHeaderTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableRowDetailDirective", function () {
        return DatatableRowDetailDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableRowDetailTemplateDirective", function () {
        return DatatableRowDetailTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DimensionsHelper", function () {
        return DimensionsHelper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DraggableDirective", function () {
        return DraggableDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Keys", function () {
        return Keys;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LongPressDirective", function () {
        return LongPressDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDatatableModule", function () {
        return NgxDatatableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderableDirective", function () {
        return OrderableDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
        return ProgressBarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResizeableDirective", function () {
        return ResizeableDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RowHeightCache", function () {
        return RowHeightCache;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollbarHelper", function () {
        return ScrollbarHelper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function () {
        return ScrollerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectionType", function () {
        return SelectionType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SortDirection", function () {
        return SortDirection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SortType", function () {
        return SortType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function () {
        return VisibilityDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "adjustColumnWidths", function () {
        return adjustColumnWidths;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "camelCase", function () {
        return camelCase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "columnGroupWidths", function () {
        return columnGroupWidths;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "columnTotalWidth", function () {
        return columnTotalWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "columnsByPin", function () {
        return columnsByPin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "columnsByPinArr", function () {
        return columnsByPinArr;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "columnsTotalWidth", function () {
        return columnsTotalWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deCamelCase", function () {
        return deCamelCase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deepValueGetter", function () {
        return deepValueGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function () {
        return elementsFromPoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "emptyStringGetter", function () {
        return emptyStringGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "forceFillColumnWidths", function () {
        return forceFillColumnWidths;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTotalFlexGrow", function () {
        return getTotalFlexGrow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVendorPrefixedName", function () {
        return getVendorPrefixedName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getterForProp", function () {
        return getterForProp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "groupRowsByParents", function () {
        return groupRowsByParents;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "id", function () {
        return id;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function () {
        return isNullOrUndefined;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "nextSortDir", function () {
        return nextSortDir;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "numericIndexGetter", function () {
        return numericIndexGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "optionalGetterForProp", function () {
        return optionalGetterForProp;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "orderByComparator", function () {
        return orderByComparator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectRows", function () {
        return selectRows;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectRowsBetween", function () {
        return selectRowsBetween;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setColumnDefaults", function () {
        return setColumnDefaults;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "shallowValueGetter", function () {
        return shallowValueGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sortRows", function () {
        return sortRows;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throttle", function () {
        return throttle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "throttleable", function () {
        return throttleable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "translateTemplates", function () {
        return translateTemplates;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "translateXY", function () {
        return translateXY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /**
       * Gets the width of the scrollbar.  Nesc for windows
       * http://stackoverflow.com/a/13382873/888165
       */


      var _c0 = ["*"];

      function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-progress");
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-summary-row", 9);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-body-row", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r12.onTreeAction(group_r7);
          })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return _r1.onActivate($event, ctx_r15.indexes.first + i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-body-row", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var i_r20 = ctx.index;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return _r1.onActivate($event, i_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r19 = ctx.$implicit;

          var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
        }

        if (rf & 2) {
          var group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r25.rowContextmenu.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-summary-row", 16);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
        }
      }

      function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-scroller", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.onBodyScroll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
        }
      }

      function DataTableBodyComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 17);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-header-cell", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var column_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r4.onColumnResized($event, column_r3);
          })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r6.onLongPressStart($event);
          })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r7.onLongPressEnd($event);
          })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.onSort($event);
          })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r9.select.emit($event);
          })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r10.columnContextmenu.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("sortUnsetIcon", ctx_r2.sortUnsetIcon)("allRowsSelected", ctx_r2.allRowsSelected);
        }
      }

      function DataTableHeaderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 19, "datatable-header-cell", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var colGroup_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
        }
      }

      function DatatableComponent_datatable_header_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-header", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.onColumnSort($event);
          })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.onColumnResize($event);
          })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.onColumnReorder($event);
          })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.onHeaderSelect($event);
          })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.onColumnContextmenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 15, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("sortUnsetIcon", ctx_r0.cssClasses.sortUnset)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
        }
      }

      function DatatableComponent_datatable_footer_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-footer", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.onFooterPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
        }
      }

      function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) {}

      function DataTableHeaderCellComponent_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
        }
      }

      function DataTableHeaderCellComponent_label_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.select.emit(!ctx_r5.allRowsSelected);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
        }
      }

      function DataTableHeaderCellComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.onSort();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) {}

      function DataTableHeaderCellComponent_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
        }
      }

      function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) {}

      var _c1 = function _c1(a0, a1, a2, a3, a4) {
        return {
          rowCount: a0,
          pageSize: a1,
          selectedCount: a2,
          curPage: a3,
          offset: a4
        };
      };

      function DataTableFooterComponent_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c1, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
        }
      }

      function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
        }
      }

      function DataTableFooterComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
        }
      }

      function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-pager", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.page.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "selected-count": a0
        };
      };

      function DataTablePagerComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var pg_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.selectPage(pg_r1.number);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pg_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
        }
      }

      function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "datatable-body-cell", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ii_r5 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r6.onActivate($event, ii_r5);
          })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r8.onTreeAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r4 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
        }
      }

      function DataTableBodyRowComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var colGroup_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
        }
      }

      function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) {}

      function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
        }
      }

      function DataTableRowWrapperComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
        }
      }

      function DataTableRowWrapperComponent_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
        }
      }

      function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) {}

      function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
        }
      }

      function DataTableRowWrapperComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
        }
      }

      var _c3 = ["cellTemplate"];

      function DataTableBodyCellComponent_label_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.onCheckboxChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.isSelected);
        }
      }

      function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 11);
        }
      }

      function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 12);
        }
      }

      function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 13);
        }
      }

      function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r11.onTreeAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
        }
      }

      function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}

      var _c4 = function _c4(a0) {
        return {
          cellContext: a0
        };
      };

      function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, ctx_r7.cellContext));
        }
      }

      function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, undefined, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
        }
      }

      function DataTableBodyCellComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 15);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) {}

      function DataTableBodyCellComponent_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
        }
      }

      function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "datatable-body-row", 1);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", 0 - 1);
        }
      }

      var ScrollbarHelper = /*@__PURE__*/function () {
        var ScrollbarHelper = /*#__PURE__*/function () {
          function ScrollbarHelper(document) {
            _classCallCheck(this, ScrollbarHelper);

            this.document = document;
            this.width = this.getWidth();
          }

          _createClass(ScrollbarHelper, [{
            key: "getWidth",
            value: function getWidth() {
              var outer = this.document.createElement('div');
              outer.style.visibility = 'hidden';
              outer.style.width = '100px';
              outer.style.msOverflowStyle = 'scrollbar';
              this.document.body.appendChild(outer);
              var widthNoScroll = outer.offsetWidth;
              outer.style.overflow = 'scroll';
              var inner = this.document.createElement('div');
              inner.style.width = '100%';
              outer.appendChild(inner);
              var widthWithScroll = inner.offsetWidth;
              outer.parentNode.removeChild(outer);
              return widthNoScroll - widthWithScroll;
            }
          }]);

          return ScrollbarHelper;
        }();

        ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) {
          return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
        };

        ScrollbarHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: ScrollbarHelper,
          factory: function factory(t) {
            return ScrollbarHelper.ɵfac(t);
          }
        });
        return ScrollbarHelper;
      }();

      var DimensionsHelper = /*@__PURE__*/function () {
        /**
         * Gets the width of the scrollbar.  Nesc for windows
         * http://stackoverflow.com/a/13382873/888165
         */
        var DimensionsHelper = /*#__PURE__*/function () {
          function DimensionsHelper() {
            _classCallCheck(this, DimensionsHelper);
          }

          _createClass(DimensionsHelper, [{
            key: "getDimensions",
            value: function getDimensions(element) {
              return element.getBoundingClientRect();
            }
          }]);

          return DimensionsHelper;
        }();

        DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) {
          return new (t || DimensionsHelper)();
        };

        DimensionsHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: DimensionsHelper,
          factory: function factory(t) {
            return DimensionsHelper.ɵfac(t);
          }
        });
        return DimensionsHelper;
      }();

      var ColumnChangesService = /*@__PURE__*/function () {
        /**
         * service to make DatatableComponent aware of changes to
         * input bindings of DataTableColumnDirective
         */
        var ColumnChangesService = /*#__PURE__*/function () {
          function ColumnChangesService() {
            _classCallCheck(this, ColumnChangesService);

            this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          }

          _createClass(ColumnChangesService, [{
            key: "onInputChange",
            value: function onInputChange() {
              this.columnInputChanges.next();
            }
          }, {
            key: "columnInputChanges$",
            get: function get() {
              return this.columnInputChanges.asObservable();
            }
          }]);

          return ColumnChangesService;
        }();

        ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) {
          return new (t || ColumnChangesService)();
        };

        ColumnChangesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: ColumnChangesService,
          factory: function factory(t) {
            return ColumnChangesService.ɵfac(t);
          }
        });
        return ColumnChangesService;
      }();

      var DataTableFooterTemplateDirective = /*@__PURE__*/function () {
        var DataTableFooterTemplateDirective = function DataTableFooterTemplateDirective(template) {
          _classCallCheck(this, DataTableFooterTemplateDirective);

          this.template = template;
        };

        DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) {
          return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
        };

        DataTableFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: DataTableFooterTemplateDirective,
          selectors: [["", "ngx-datatable-footer-template", ""]]
        });
        return DataTableFooterTemplateDirective;
      }();

      var VisibilityDirective = /*@__PURE__*/function () {
        /**
         * Visibility Observer Directive
         *
         * Usage:
         *
         * 		<div
         * 			visibilityObserver
         * 			(visible)="onVisible($event)">
         * 		</div>
         *
         */
        var VisibilityDirective = /*#__PURE__*/function () {
          function VisibilityDirective(element, zone) {
            _classCallCheck(this, VisibilityDirective);

            this.element = element;
            this.zone = zone;
            this.isVisible = false;
            this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          }

          _createClass(VisibilityDirective, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.runCheck();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              clearTimeout(this.timeout);
            }
          }, {
            key: "onVisibilityChange",
            value: function onVisibilityChange() {
              var _this = this;

              // trigger zone recalc for columns
              this.zone.run(function () {
                _this.isVisible = true;

                _this.visible.emit(true);
              });
            }
          }, {
            key: "runCheck",
            value: function runCheck() {
              var _this2 = this;

              var check = function check() {
                // https://davidwalsh.name/offsetheight-visibility
                var _this2$element$native = _this2.element.nativeElement,
                    offsetHeight = _this2$element$native.offsetHeight,
                    offsetWidth = _this2$element$native.offsetWidth;

                if (offsetHeight && offsetWidth) {
                  clearTimeout(_this2.timeout);

                  _this2.onVisibilityChange();
                } else {
                  clearTimeout(_this2.timeout);

                  _this2.zone.runOutsideAngular(function () {
                    _this2.timeout = setTimeout(function () {
                      return check();
                    }, 50);
                  });
                }
              };

              this.timeout = setTimeout(function () {
                return check();
              });
            }
          }]);

          return VisibilityDirective;
        }();

        VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) {
          return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
        };

        VisibilityDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: VisibilityDirective,
          selectors: [["", "visibilityObserver", ""]],
          hostVars: 2,
          hostBindings: function VisibilityDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("visible", ctx.isVisible);
            }
          },
          outputs: {
            visible: "visible"
          }
        });
        return VisibilityDirective;
      }();

      var DraggableDirective = /*@__PURE__*/function () {
        /**
         * Draggable Directive for Angular2
         *
         * Inspiration:
         *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
         *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
         *
         */
        var DraggableDirective = /*#__PURE__*/function () {
          function DraggableDirective(element) {
            _classCallCheck(this, DraggableDirective);

            this.dragX = true;
            this.dragY = true;
            this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.isDragging = false;
            this.element = element.nativeElement;
          }

          _createClass(DraggableDirective, [{
            key: "ngOnChanges",
            value: function ngOnChanges(changes) {
              if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
                this.onMousedown(changes['dragEventTarget'].currentValue);
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._destroySubscription();
            }
          }, {
            key: "onMouseup",
            value: function onMouseup(event) {
              if (!this.isDragging) return;
              this.isDragging = false;
              this.element.classList.remove('dragging');

              if (this.subscription) {
                this._destroySubscription();

                this.dragEnd.emit({
                  event: event,
                  element: this.element,
                  model: this.dragModel
                });
              }
            }
          }, {
            key: "onMousedown",
            value: function onMousedown(event) {
              var _this3 = this;

              // we only want to drag the inner header text
              var isDragElm = event.target.classList.contains('draggable');

              if (isDragElm && (this.dragX || this.dragY)) {
                event.preventDefault();
                this.isDragging = true;
                var mouseDownPos = {
                  x: event.clientX,
                  y: event.clientY
                };
                var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup');
                this.subscription = mouseup.subscribe(function (ev) {
                  return _this3.onMouseup(ev);
                });
                var mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseup)).subscribe(function (ev) {
                  return _this3.move(ev, mouseDownPos);
                });
                this.subscription.add(mouseMoveSub);
                this.dragStart.emit({
                  event: event,
                  element: this.element,
                  model: this.dragModel
                });
              }
            }
          }, {
            key: "move",
            value: function move(event, mouseDownPos) {
              if (!this.isDragging) return;
              var x = event.clientX - mouseDownPos.x;
              var y = event.clientY - mouseDownPos.y;
              if (this.dragX) this.element.style.left = "".concat(x, "px");
              if (this.dragY) this.element.style.top = "".concat(y, "px");
              this.element.classList.add('dragging');
              this.dragging.emit({
                event: event,
                element: this.element,
                model: this.dragModel
              });
            }
          }, {
            key: "_destroySubscription",
            value: function _destroySubscription() {
              if (this.subscription) {
                this.subscription.unsubscribe();
                this.subscription = undefined;
              }
            }
          }]);

          return DraggableDirective;
        }();

        DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
          return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
        };

        DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: DraggableDirective,
          selectors: [["", "draggable", ""]],
          inputs: {
            dragX: "dragX",
            dragY: "dragY",
            dragEventTarget: "dragEventTarget",
            dragModel: "dragModel"
          },
          outputs: {
            dragStart: "dragStart",
            dragging: "dragging",
            dragEnd: "dragEnd"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
        });
        return DraggableDirective;
      }();

      var ResizeableDirective = /*@__PURE__*/function () {
        var ResizeableDirective = /*#__PURE__*/function () {
          function ResizeableDirective(element, renderer) {
            _classCallCheck(this, ResizeableDirective);

            this.renderer = renderer;
            this.resizeEnabled = true;
            this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.resizing = false;
            this.element = element.nativeElement;
          }

          _createClass(ResizeableDirective, [{
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              var renderer2 = this.renderer;
              this.resizeHandle = renderer2.createElement('span');

              if (this.resizeEnabled) {
                renderer2.addClass(this.resizeHandle, 'resize-handle');
              } else {
                renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
              }

              renderer2.appendChild(this.element, this.resizeHandle);
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._destroySubscription();

              if (this.renderer.destroyNode) {
                this.renderer.destroyNode(this.resizeHandle);
              } else if (this.resizeHandle) {
                this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
              }
            }
          }, {
            key: "onMouseup",
            value: function onMouseup() {
              this.resizing = false;

              if (this.subscription && !this.subscription.closed) {
                this._destroySubscription();

                this.resize.emit(this.element.clientWidth);
              }
            }
          }, {
            key: "onMousedown",
            value: function onMousedown(event) {
              var _this4 = this;

              var isHandle = event.target.classList.contains('resize-handle');
              var initialWidth = this.element.clientWidth;
              var mouseDownScreenX = event.screenX;

              if (isHandle) {
                event.stopPropagation();
                this.resizing = true;
                var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup');
                this.subscription = mouseup.subscribe(function (ev) {
                  return _this4.onMouseup();
                });
                var mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseup)).subscribe(function (e) {
                  return _this4.move(e, initialWidth, mouseDownScreenX);
                });
                this.subscription.add(mouseMoveSub);
              }
            }
          }, {
            key: "move",
            value: function move(event, initialWidth, mouseDownScreenX) {
              var movementX = event.screenX - mouseDownScreenX;
              var newWidth = initialWidth + movementX;
              var overMinWidth = !this.minWidth || newWidth >= this.minWidth;
              var underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;

              if (overMinWidth && underMaxWidth) {
                this.element.style.width = "".concat(newWidth, "px");
              }
            }
          }, {
            key: "_destroySubscription",
            value: function _destroySubscription() {
              if (this.subscription) {
                this.subscription.unsubscribe();
                this.subscription = undefined;
              }
            }
          }]);

          return ResizeableDirective;
        }();

        ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) {
          return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
        };

        ResizeableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: ResizeableDirective,
          selectors: [["", "resizeable", ""]],
          hostVars: 2,
          hostBindings: function ResizeableDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) {
                return ctx.onMousedown($event);
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
            }
          },
          inputs: {
            resizeEnabled: "resizeEnabled",
            minWidth: "minWidth",
            maxWidth: "maxWidth"
          },
          outputs: {
            resize: "resize"
          }
        });
        return ResizeableDirective;
      }();

      var OrderableDirective = /*@__PURE__*/function () {
        var OrderableDirective = /*#__PURE__*/function () {
          function OrderableDirective(differs, document) {
            _classCallCheck(this, OrderableDirective);

            this.document = document;
            this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.differ = differs.find({}).create();
          }

          _createClass(OrderableDirective, [{
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              // HACK: Investigate Better Way
              this.updateSubscriptions();
              this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.draggables.forEach(function (d) {
                d.dragStart.unsubscribe();
                d.dragging.unsubscribe();
                d.dragEnd.unsubscribe();
              });
            }
          }, {
            key: "updateSubscriptions",
            value: function updateSubscriptions() {
              var _this5 = this;

              var diffs = this.differ.diff(this.createMapDiffs());

              if (diffs) {
                var subscribe = function subscribe(_ref) {
                  var currentValue = _ref.currentValue,
                      previousValue = _ref.previousValue;
                  unsubscribe({
                    previousValue: previousValue
                  });

                  if (currentValue) {
                    currentValue.dragStart.subscribe(_this5.onDragStart.bind(_this5));
                    currentValue.dragging.subscribe(_this5.onDragging.bind(_this5));
                    currentValue.dragEnd.subscribe(_this5.onDragEnd.bind(_this5));
                  }
                };

                var unsubscribe = function unsubscribe(_ref2) {
                  var previousValue = _ref2.previousValue;

                  if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                  }
                };

                diffs.forEachAddedItem(subscribe); // diffs.forEachChangedItem(subscribe.bind(this));

                diffs.forEachRemovedItem(unsubscribe);
              }
            }
          }, {
            key: "onDragStart",
            value: function onDragStart() {
              this.positions = {};
              var i = 0;

              var _iterator = _createForOfIteratorHelper(this.draggables.toArray()),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var dragger = _step.value;
                  var elm = dragger.element;
                  var left = parseInt(elm.offsetLeft.toString(), 0);
                  this.positions[dragger.dragModel.prop] = {
                    left: left,
                    right: left + parseInt(elm.offsetWidth.toString(), 0),
                    index: i++,
                    element: elm
                  };
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }, {
            key: "onDragging",
            value: function onDragging(_ref3) {
              var element = _ref3.element,
                  model = _ref3.model,
                  event = _ref3.event;
              var prevPos = this.positions[model.prop];
              var target = this.isTarget(model, event);

              if (target) {
                if (this.lastDraggingIndex !== target.i) {
                  this.targetChanged.emit({
                    prevIndex: this.lastDraggingIndex,
                    newIndex: target.i,
                    initialIndex: prevPos.index
                  });
                  this.lastDraggingIndex = target.i;
                }
              } else if (this.lastDraggingIndex !== prevPos.index) {
                this.targetChanged.emit({
                  prevIndex: this.lastDraggingIndex,
                  initialIndex: prevPos.index
                });
                this.lastDraggingIndex = prevPos.index;
              }
            }
          }, {
            key: "onDragEnd",
            value: function onDragEnd(_ref4) {
              var element = _ref4.element,
                  model = _ref4.model,
                  event = _ref4.event;
              var prevPos = this.positions[model.prop];
              var target = this.isTarget(model, event);

              if (target) {
                this.reorder.emit({
                  prevIndex: prevPos.index,
                  newIndex: target.i,
                  model: model
                });
              }

              this.lastDraggingIndex = undefined;
              element.style.left = 'auto';
            }
          }, {
            key: "isTarget",
            value: function isTarget(model, event) {
              var _this6 = this;

              var i = 0;
              var x = event.x || event.clientX;
              var y = event.y || event.clientY;
              var targets = this.document.elementsFromPoint(x, y);

              var _loop = function _loop(prop) {
                // current column position which throws event.
                var pos = _this6.positions[prop]; // since we drag the inner span, we need to find it in the elements at the cursor

                if (model.prop !== prop && targets.find(function (el) {
                  return el === pos.element;
                })) {
                  return {
                    v: {
                      pos: pos,
                      i: i
                    }
                  };
                }

                i++;
              };

              for (var prop in this.positions) {
                var _ret = _loop(prop);

                if (typeof _ret === "object") return _ret.v;
              }
            }
          }, {
            key: "createMapDiffs",
            value: function createMapDiffs() {
              return this.draggables.toArray().reduce(function (acc, curr) {
                acc[curr.dragModel.$$id] = curr;
                return acc;
              }, {});
            }
          }]);

          return OrderableDirective;
        }();

        OrderableDirective.ɵfac = function OrderableDirective_Factory(t) {
          return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]));
        };

        OrderableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: OrderableDirective,
          selectors: [["", "orderable", ""]],
          contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DraggableDirective, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
            }
          },
          outputs: {
            reorder: "reorder",
            targetChanged: "targetChanged"
          }
        });
        return OrderableDirective;
      }();

      var LongPressDirective = /*@__PURE__*/function () {
        var LongPressDirective = /*#__PURE__*/function () {
          function LongPressDirective() {
            _classCallCheck(this, LongPressDirective);

            this.pressEnabled = true;
            this.duration = 500;
            this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.mouseX = 0;
            this.mouseY = 0;
          }

          _createClass(LongPressDirective, [{
            key: "onMouseDown",
            value: function onMouseDown(event) {
              var _this7 = this;

              // don't do right/middle clicks
              if (event.which !== 1 || !this.pressEnabled) return; // don't start drag if its on resize handle

              var target = event.target;
              if (target.classList.contains('resize-handle')) return;
              this.mouseX = event.clientX;
              this.mouseY = event.clientY;
              this.pressing = true;
              this.isLongPressing = false;
              var mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup');
              this.subscription = mouseup.subscribe(function (ev) {
                return _this7.onMouseup();
              });
              this.timeout = setTimeout(function () {
                _this7.isLongPressing = true;

                _this7.longPressStart.emit({
                  event: event,
                  model: _this7.pressModel
                });

                _this7.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseup)).subscribe(function (mouseEvent) {
                  return _this7.onMouseMove(mouseEvent);
                }));

                _this7.loop(event);
              }, this.duration);
              this.loop(event);
            }
          }, {
            key: "onMouseMove",
            value: function onMouseMove(event) {
              if (this.pressing && !this.isLongPressing) {
                var xThres = Math.abs(event.clientX - this.mouseX) > 10;
                var yThres = Math.abs(event.clientY - this.mouseY) > 10;

                if (xThres || yThres) {
                  this.endPress();
                }
              }
            }
          }, {
            key: "loop",
            value: function loop(event) {
              var _this8 = this;

              if (this.isLongPressing) {
                this.timeout = setTimeout(function () {
                  _this8.longPressing.emit({
                    event: event,
                    model: _this8.pressModel
                  });

                  _this8.loop(event);
                }, 50);
              }
            }
          }, {
            key: "endPress",
            value: function endPress() {
              clearTimeout(this.timeout);
              this.isLongPressing = false;
              this.pressing = false;

              this._destroySubscription();

              this.longPressEnd.emit({
                model: this.pressModel
              });
            }
          }, {
            key: "onMouseup",
            value: function onMouseup() {
              this.endPress();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._destroySubscription();
            }
          }, {
            key: "_destroySubscription",
            value: function _destroySubscription() {
              if (this.subscription) {
                this.subscription.unsubscribe();
                this.subscription = undefined;
              }
            }
          }, {
            key: "press",
            get: function get() {
              return this.pressing;
            }
          }, {
            key: "isLongPress",
            get: function get() {
              return this.isLongPressing;
            }
          }]);

          return LongPressDirective;
        }();

        LongPressDirective.ɵfac = function LongPressDirective_Factory(t) {
          return new (t || LongPressDirective)();
        };

        LongPressDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: LongPressDirective,
          selectors: [["", "long-press", ""]],
          hostVars: 4,
          hostBindings: function LongPressDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) {
                return ctx.onMouseDown($event);
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
            }
          },
          inputs: {
            pressEnabled: "pressEnabled",
            duration: "duration",
            pressModel: "pressModel"
          },
          outputs: {
            longPressStart: "longPressStart",
            longPressing: "longPressing",
            longPressEnd: "longPressEnd"
          }
        });
        return LongPressDirective;
      }();

      var ScrollerComponent = /*@__PURE__*/function () {
        var ScrollerComponent = /*#__PURE__*/function () {
          function ScrollerComponent(ngZone, element, renderer) {
            _classCallCheck(this, ScrollerComponent);

            this.ngZone = ngZone;
            this.renderer = renderer;
            this.scrollbarV = false;
            this.scrollbarH = false;
            this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.scrollYPos = 0;
            this.scrollXPos = 0;
            this.prevScrollYPos = 0;
            this.prevScrollXPos = 0;
            this._scrollEventListener = null;
            this.element = element.nativeElement;
          }

          _createClass(ScrollerComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              // manual bind so we don't always listen
              if (this.scrollbarV || this.scrollbarH) {
                var renderer = this.renderer;
                this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
                this._scrollEventListener = this.onScrolled.bind(this);
                this.parentElement.addEventListener('scroll', this._scrollEventListener);
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this._scrollEventListener) {
                this.parentElement.removeEventListener('scroll', this._scrollEventListener);
                this._scrollEventListener = null;
              }
            }
          }, {
            key: "setOffset",
            value: function setOffset(offsetY) {
              if (this.parentElement) {
                this.parentElement.scrollTop = offsetY;
              }
            }
          }, {
            key: "onScrolled",
            value: function onScrolled(event) {
              var _this9 = this;

              var dom = event.currentTarget;
              requestAnimationFrame(function () {
                _this9.scrollYPos = dom.scrollTop;
                _this9.scrollXPos = dom.scrollLeft;

                _this9.updateOffset();
              });
            }
          }, {
            key: "updateOffset",
            value: function updateOffset() {
              var direction;

              if (this.scrollYPos < this.prevScrollYPos) {
                direction = 'down';
              } else if (this.scrollYPos > this.prevScrollYPos) {
                direction = 'up';
              }

              this.scroll.emit({
                direction: direction,
                scrollYPos: this.scrollYPos,
                scrollXPos: this.scrollXPos
              });
              this.prevScrollYPos = this.scrollYPos;
              this.prevScrollXPos = this.scrollXPos;
            }
          }]);

          return ScrollerComponent;
        }();

        ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) {
          return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
        };

        ScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: ScrollerComponent,
          selectors: [["datatable-scroller"]],
          hostAttrs: [1, "datatable-scroll"],
          hostVars: 4,
          hostBindings: function ScrollerComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
            }
          },
          inputs: {
            scrollbarV: "scrollbarV",
            scrollbarH: "scrollbarH",
            scrollHeight: "scrollHeight",
            scrollWidth: "scrollWidth"
          },
          outputs: {
            scroll: "scroll"
          },
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function ScrollerComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
            }
          },
          encapsulation: 2,
          changeDetection: 0
        });
        return ScrollerComponent;
      }();

      var DatatableGroupHeaderTemplateDirective = /*@__PURE__*/function () {
        var DatatableGroupHeaderTemplateDirective = function DatatableGroupHeaderTemplateDirective(template) {
          _classCallCheck(this, DatatableGroupHeaderTemplateDirective);

          this.template = template;
        };

        DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) {
          return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
        };

        DatatableGroupHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: DatatableGroupHeaderTemplateDirective,
          selectors: [["", "ngx-datatable-group-header-template", ""]]
        });
        return DatatableGroupHeaderTemplateDirective;
      }();

      var DatatableGroupHeaderDirective = /*@__PURE__*/function () {
        var DatatableGroupHeaderDirective = /*#__PURE__*/function () {
          function DatatableGroupHeaderDirective() {
            _classCallCheck(this, DatatableGroupHeaderDirective);

            /**
             * Row height is required when virtual scroll is enabled.
             */
            this.rowHeight = 0;
            /**
             * Track toggling of group visibility
             */

            this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          }

          _createClass(DatatableGroupHeaderDirective, [{
            key: "toggleExpandGroup",

            /**
             * Toggle the expansion of a group
             */
            value: function toggleExpandGroup(group) {
              this.toggle.emit({
                type: 'group',
                value: group
              });
            }
            /**
             * Expand all groups
             */

          }, {
            key: "expandAllGroups",
            value: function expandAllGroups() {
              this.toggle.emit({
                type: 'all',
                value: true
              });
            }
            /**
             * Collapse all groups
             */

          }, {
            key: "collapseAllGroups",
            value: function collapseAllGroups() {
              this.toggle.emit({
                type: 'all',
                value: false
              });
            }
          }, {
            key: "template",
            get: function get() {
              return this._templateInput || this._templateQuery;
            }
          }]);

          return DatatableGroupHeaderDirective;
        }();

        DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) {
          return new (t || DatatableGroupHeaderDirective)();
        };

        DatatableGroupHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: DatatableGroupHeaderDirective,
          selectors: [["ngx-datatable-group-header"]],
          contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DatatableGroupHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
            }
          },
          inputs: {
            rowHeight: "rowHeight",
            _templateInput: ["template", "_templateInput"]
          },
          outputs: {
            toggle: "toggle"
          }
        });
        return DatatableGroupHeaderDirective;
      }();
      /**
       * Always returns the empty string ''
       */


      function emptyStringGetter() {
        return '';
      }
      /**
       * Returns the appropriate getter function for this kind of prop.
       * If prop == null, returns the emptyStringGetter.
       */


      function getterForProp(prop) {
        if (prop == null) {
          return emptyStringGetter;
        }

        if (typeof prop === 'number') {
          return numericIndexGetter;
        } else {
          // deep or simple
          if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
          } else {
            return shallowValueGetter;
          }
        }
      }
      /**
       * Returns the value at this numeric index.
       * @param row array of values
       * @param index numeric index
       * @returns any or '' if invalid index
       */


      function numericIndexGetter(row, index) {
        if (row == null) {
          return '';
        } // mimic behavior of deepValueGetter


        if (!row || index == null) {
          return row;
        }

        var value = row[index];

        if (value == null) {
          return '';
        }

        return value;
      }
      /**
       * Returns the value of a field.
       * (more efficient than deepValueGetter)
       * @param obj object containing the field
       * @param fieldName field name string
       */


      function shallowValueGetter(obj, fieldName) {
        if (obj == null) {
          return '';
        }

        if (!obj || !fieldName) {
          return obj;
        }

        var value = obj[fieldName];

        if (value == null) {
          return '';
        }

        return value;
      }
      /**
       * Returns a deep object given a string. zoo['animal.type']
       */


      function deepValueGetter(obj, path) {
        if (obj == null) {
          return '';
        }

        if (!obj || !path) {
          return obj;
        } // check if path matches a root-level field
        // { "a.b.c": 123 }


        var current = obj[path];

        if (current !== undefined) {
          return current;
        }

        current = obj;
        var split = path.split('.');

        if (split.length) {
          for (var i = 0; i < split.length; i++) {
            current = current[split[i]]; // if found undefined, return empty string

            if (current === undefined || current === null) {
              return '';
            }
          }
        }

        return current;
      }

      function optionalGetterForProp(prop) {
        return prop && function (row) {
          return getterForProp(prop)(row, prop);
        };
      }
      /**
       * This functions rearrange items by their parents
       * Also sets the level value to each of the items
       *
       * Note: Expecting each item has a property called parentId
       * Note: This algorithm will fail if a list has two or more items with same ID
       * NOTE: This algorithm will fail if there is a deadlock of relationship
       *
       * For example,
       *
       * Input
       *
       * id -> parent
       * 1  -> 0
       * 2  -> 0
       * 3  -> 1
       * 4  -> 1
       * 5  -> 2
       * 7  -> 8
       * 6  -> 3
       *
       *
       * Output
       * id -> level
       * 1      -> 0
       * --3    -> 1
       * ----6  -> 2
       * --4    -> 1
       * 2      -> 0
       * --5    -> 1
       * 7     -> 8
       *
       *
       * @param rows
       *
       */


      function groupRowsByParents(rows, from, to) {
        if (from && to) {
          var nodeById = {};
          var l = rows.length;
          var node = null;
          nodeById[0] = new TreeNode(); // that's the root node

          var uniqIDs = rows.reduce(function (arr, item) {
            var toValue = to(item);

            if (arr.indexOf(toValue) === -1) {
              arr.push(toValue);
            }

            return arr;
          }, []);

          for (var i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
          }

          for (var _i = 0; _i < l; _i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[_i])];
            var parent = 0;
            var fromValue = from(node.row);

            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
              parent = fromValue;
            }

            node.parent = nodeById[parent];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
          }

          var resolvedRows = [];
          nodeById[0].flatten(function () {
            resolvedRows = [].concat(_toConsumableArray(resolvedRows), [this.row]);
          }, true);
          return resolvedRows;
        } else {
          return rows;
        }
      }

      var TreeNode = /*#__PURE__*/function () {
        function TreeNode() {
          var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          _classCallCheck(this, TreeNode);

          if (!row) {
            row = {
              level: -1,
              treeStatus: 'expanded'
            };
          }

          this.row = row;
          this.parent = null;
          this.children = [];
        }

        _createClass(TreeNode, [{
          key: "flatten",
          value: function flatten(f, recursive) {
            if (this.row['treeStatus'] === 'expanded') {
              for (var i = 0, l = this.children.length; i < l; i++) {
                var child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive) child.flatten.apply(child, arguments);
              }
            }
          }
        }]);

        return TreeNode;
      }();
      /**
       * Converts strings from something to camel case
       * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
       */


      function camelCase(str) {
        // Replace special characters with a space
        str = str.replace(/[^a-zA-Z0-9 ]/g, ' '); // put a space before an uppercase letter

        str = str.replace(/([a-z](?=[A-Z]))/g, '$1 '); // Lower case first character and some other stuff

        str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase(); // uppercase characters preceded by a space or number

        str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
          return b.trim() + c.toUpperCase();
        });
        return str;
      }
      /**
       * Converts strings from camel case to words
       * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
       */


      function deCamelCase(str) {
        return str.replace(/([A-Z])/g, function (match) {
          return " ".concat(match);
        }).replace(/^./, function (match) {
          return match.toUpperCase();
        });
      }
      /**
       * Creates a unique object id.
       * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
       */


      function id() {
        return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
      }
      /**
       * Sets the column defaults
       */


      function setColumnDefaults(columns) {
        if (!columns) return; // Only one column should hold the tree view
        // Thus if multiple columns are provided with
        // isTreeColumn as true we take only the first one

        var treeColumnFound = false;

        var _iterator2 = _createForOfIteratorHelper(columns),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var column = _step2.value;

            if (!column.$$id) {
              column.$$id = id();
            } // prop can be numeric; zero is valid not a missing prop
            // translate name => prop


            if (isNullOrUndefined(column.prop) && column.name) {
              column.prop = camelCase(column.name);
            }

            if (!column.$$valueGetter) {
              column.$$valueGetter = getterForProp(column.prop);
            } // format props if no name passed


            if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
              column.name = deCamelCase(String(column.prop));
            }

            if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
              column.name = ''; // Fixes IE and Edge displaying `null`
            }

            if (!column.hasOwnProperty('resizeable')) {
              column.resizeable = true;
            }

            if (!column.hasOwnProperty('sortable')) {
              column.sortable = true;
            }

            if (!column.hasOwnProperty('draggable')) {
              column.draggable = true;
            }

            if (!column.hasOwnProperty('canAutoResize')) {
              column.canAutoResize = true;
            }

            if (!column.hasOwnProperty('width')) {
              column.width = 150;
            }

            if (!column.hasOwnProperty('isTreeColumn')) {
              column.isTreeColumn = false;
            } else {
              if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
              } else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      function isNullOrUndefined(value) {
        return value === null || value === undefined;
      }
      /**
       * Translates templates definitions to objects
       */


      function translateTemplates(templates) {
        var result = [];

        var _iterator3 = _createForOfIteratorHelper(templates),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var temp = _step3.value;
            var col = {};
            var props = Object.getOwnPropertyNames(temp);

            var _iterator4 = _createForOfIteratorHelper(props),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var prop = _step4.value;
                col[prop] = temp[prop];
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            if (temp.headerTemplate) {
              col.headerTemplate = temp.headerTemplate;
            }

            if (temp.cellTemplate) {
              col.cellTemplate = temp.cellTemplate;
            }

            if (temp.summaryFunc) {
              col.summaryFunc = temp.summaryFunc;
            }

            if (temp.summaryTemplate) {
              col.summaryTemplate = temp.summaryTemplate;
            }

            result.push(col);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return result;
      }

      var ColumnMode = /*@__PURE__*/function (ColumnMode) {
        ColumnMode["standard"] = "standard";
        ColumnMode["flex"] = "flex";
        ColumnMode["force"] = "force";
        return ColumnMode;
      }({});

      var SelectionType = /*@__PURE__*/function (SelectionType) {
        SelectionType["single"] = "single";
        SelectionType["multi"] = "multi";
        SelectionType["multiClick"] = "multiClick";
        SelectionType["cell"] = "cell";
        SelectionType["checkbox"] = "checkbox";
        return SelectionType;
      }({});

      var SortType = /*@__PURE__*/function (SortType) {
        SortType["single"] = "single";
        SortType["multi"] = "multi";
        return SortType;
      }({});

      var ContextmenuType = /*@__PURE__*/function (ContextmenuType) {
        ContextmenuType["header"] = "header";
        ContextmenuType["body"] = "body";
        return ContextmenuType;
      }({});

      var DataTableColumnHeaderDirective = /*@__PURE__*/function () {
        var DataTableColumnHeaderDirective = function DataTableColumnHeaderDirective(template) {
          _classCallCheck(this, DataTableColumnHeaderDirective);

          this.template = template;
        };

        DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) {
          return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
        };

        DataTableColumnHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: DataTableColumnHeaderDirective,
          selectors: [["", "ngx-datatable-header-template", ""]]
        });
        return DataTableColumnHeaderDirective;
      }();

      var DataTableColumnCellDirective = /*@__PURE__*/function () {
        var DataTableColumnCellDirective = function DataTableColumnCellDirective(template) {
          _classCallCheck(this, DataTableColumnCellDirective);

          this.template = template;
        };

        DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) {
          return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
        };

        DataTableColumnCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: DataTableColumnCellDirective,
          selectors: [["", "ngx-datatable-cell-template", ""]]
        });
        return DataTableColumnCellDirective;
      }();

      var DataTableColumnCellTreeToggle = /*@__PURE__*/function () {
        var DataTableColumnCellTreeToggle = function DataTableColumnCellTreeToggle(template) {
          _classCallCheck(this, DataTableColumnCellTreeToggle);

          this.template = template;
        };

        DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) {
          return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
        };

        DataTableColumnCellTreeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: DataTableColumnCellTreeToggle,
          selectors: [["", "ngx-datatable-tree-toggle", ""]]
        });
        return DataTableColumnCellTreeToggle;
      }();

      var DataTableColumnDirective = /*@__PURE__*/function () {
        var DataTableColumnDirective = /*#__PURE__*/function () {
          function DataTableColumnDirective(columnChangesService) {
            _classCallCheck(this, DataTableColumnDirective);

            this.columnChangesService = columnChangesService;
            this.isFirstChange = true;
          }

          _createClass(DataTableColumnDirective, [{
            key: "ngOnChanges",
            value: function ngOnChanges() {
              if (this.isFirstChange) {
                this.isFirstChange = false;
              } else {
                this.columnChangesService.onInputChange();
              }
            }
          }, {
            key: "cellTemplate",
            get: function get() {
              return this._cellTemplateInput || this._cellTemplateQuery;
            }
          }, {
            key: "headerTemplate",
            get: function get() {
              return this._headerTemplateInput || this._headerTemplateQuery;
            }
          }, {
            key: "treeToggleTemplate",
            get: function get() {
              return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
            }
          }]);

          return DataTableColumnDirective;
        }();

        DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) {
          return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ColumnChangesService));
        };

        DataTableColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: DataTableColumnDirective,
          selectors: [["ngx-datatable-column"]],
          contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnHeaderDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellTreeToggle, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
            }
          },
          inputs: {
            name: "name",
            prop: "prop",
            frozenLeft: "frozenLeft",
            frozenRight: "frozenRight",
            flexGrow: "flexGrow",
            resizeable: "resizeable",
            comparator: "comparator",
            pipe: "pipe",
            sortable: "sortable",
            draggable: "draggable",
            canAutoResize: "canAutoResize",
            minWidth: "minWidth",
            width: "width",
            maxWidth: "maxWidth",
            checkboxable: "checkboxable",
            headerCheckboxable: "headerCheckboxable",
            headerClass: "headerClass",
            cellClass: "cellClass",
            isTreeColumn: "isTreeColumn",
            treeLevelIndent: "treeLevelIndent",
            summaryFunc: "summaryFunc",
            summaryTemplate: "summaryTemplate",
            _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"],
            _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"],
            _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"]
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
        });
        return DataTableColumnDirective;
      }();

      var DatatableRowDetailTemplateDirective = /*@__PURE__*/function () {
        var DatatableRowDetailTemplateDirective = function DatatableRowDetailTemplateDirective(template) {
          _classCallCheck(this, DatatableRowDetailTemplateDirective);

          this.template = template;
        };

        DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) {
          return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]));
        };

        DatatableRowDetailTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: DatatableRowDetailTemplateDirective,
          selectors: [["", "ngx-datatable-row-detail-template", ""]]
        });
        return DatatableRowDetailTemplateDirective;
      }();

      var DatatableRowDetailDirective = /*@__PURE__*/function () {
        var DatatableRowDetailDirective = /*#__PURE__*/function () {
          function DatatableRowDetailDirective() {
            _classCallCheck(this, DatatableRowDetailDirective);

            /**
             * The detail row height is required especially
             * when virtual scroll is enabled.
             */
            this.rowHeight = 0;
            /**
             * Row detail row visbility was toggled.
             */

            this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          }

          _createClass(DatatableRowDetailDirective, [{
            key: "toggleExpandRow",

            /**
             * Toggle the expansion of the row
             */
            value: function toggleExpandRow(row) {
              this.toggle.emit({
                type: 'row',
                value: row
              });
            }
            /**
             * API method to expand all the rows.
             */

          }, {
            key: "expandAllRows",
            value: function expandAllRows() {
              this.toggle.emit({
                type: 'all',
                value: true
              });
            }
            /**
             * API method to collapse all the rows.
             */

          }, {
            key: "collapseAllRows",
            value: function collapseAllRows() {
              this.toggle.emit({
                type: 'all',
                value: false
              });
            }
          }, {
            key: "template",
            get: function get() {
              return this._templateInput || this._templateQuery;
            }
          }]);

          return DatatableRowDetailDirective;
        }();

        DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) {
          return new (t || DatatableRowDetailDirective)();
        };

        DatatableRowDetailDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: DatatableRowDetailDirective,
          selectors: [["ngx-datatable-row-detail"]],
          contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, DatatableRowDetailTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
            }
          },
          inputs: {
            rowHeight: "rowHeight",
            _templateInput: ["template", "_templateInput"]
          },
          outputs: {
            toggle: "toggle"
          }
        });
        return DatatableRowDetailDirective;
      }();

      var DatatableFooterDirective = /*@__PURE__*/function () {
        var DatatableFooterDirective = /*#__PURE__*/function () {
          function DatatableFooterDirective() {
            _classCallCheck(this, DatatableFooterDirective);
          }

          _createClass(DatatableFooterDirective, [{
            key: "template",
            get: function get() {
              return this._templateInput || this._templateQuery;
            }
          }]);

          return DatatableFooterDirective;
        }();

        DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) {
          return new (t || DatatableFooterDirective)();
        };

        DatatableFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: DatatableFooterDirective,
          selectors: [["ngx-datatable-footer"]],
          contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DataTableFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
            }
          },
          inputs: {
            footerHeight: "footerHeight",
            totalMessage: "totalMessage",
            selectedMessage: "selectedMessage",
            pagerLeftArrowIcon: "pagerLeftArrowIcon",
            pagerRightArrowIcon: "pagerRightArrowIcon",
            pagerPreviousIcon: "pagerPreviousIcon",
            pagerNextIcon: "pagerNextIcon",
            _templateInput: ["template", "_templateInput"]
          }
        });
        return DatatableFooterDirective;
      }();
      /**
       * Returns the columns by pin.
       */


      function columnsByPin(cols) {
        var ret = {
          left: [],
          center: [],
          right: []
        };

        if (cols) {
          var _iterator5 = _createForOfIteratorHelper(cols),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var col = _step5.value;

              if (col.frozenLeft) {
                ret.left.push(col);
              } else if (col.frozenRight) {
                ret.right.push(col);
              } else {
                ret.center.push(col);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }

        return ret;
      }
      /**
       * Returns the widths of all group sets of a column
       */


      function columnGroupWidths(groups, all) {
        return {
          left: columnTotalWidth(groups.left),
          center: columnTotalWidth(groups.center),
          right: columnTotalWidth(groups.right),
          total: Math.floor(columnTotalWidth(all))
        };
      }
      /**
       * Calculates the total width of all columns and their groups
       */


      function columnTotalWidth(columns, prop) {
        var totalWidth = 0;

        if (columns) {
          var _iterator6 = _createForOfIteratorHelper(columns),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var c = _step6.value;
              var has = prop && c[prop];
              var width = has ? c[prop] : c.width;
              totalWidth = totalWidth + parseFloat(width);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }

        return totalWidth;
      }
      /**
       * Calculates the total width of all columns and their groups
       */


      function columnsTotalWidth(columns, prop) {
        var totalWidth = 0;

        var _iterator7 = _createForOfIteratorHelper(columns),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var column = _step7.value;
            var has = prop && column[prop];
            totalWidth = totalWidth + (has ? column[prop] : column.width);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        return totalWidth;
      }

      function columnsByPinArr(val) {
        var colsByPinArr = [];
        var colsByPin = columnsByPin(val);
        colsByPinArr.push({
          type: 'left',
          columns: colsByPin['left']
        });
        colsByPinArr.push({
          type: 'center',
          columns: colsByPin['center']
        });
        colsByPinArr.push({
          type: 'right',
          columns: colsByPin['right']
        });
        return colsByPinArr;
      }
      /**
       * This object contains the cache of the various row heights that are present inside
       * the data table.   Its based on Fenwick tree data structure that helps with
       * querying sums that have time complexity of log n.
       *
       * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
       * https://github.com/mikolalysenko/fenwick-tree
       *
       */


      var RowHeightCache = /*#__PURE__*/function () {
        function RowHeightCache() {
          _classCallCheck(this, RowHeightCache);

          /**
           * Tree Array stores the cumulative information of the row heights to perform efficient
           * range queries and updates.  Currently the tree is initialized to the base row
           * height instead of the detail row height.
           */
          this.treeArray = [];
        }
        /**
         * Clear the Tree array.
         */


        _createClass(RowHeightCache, [{
          key: "clearCache",
          value: function clearCache() {
            this.treeArray = [];
          }
          /**
           * Initialize the Fenwick tree with row Heights.
           *
           * @param rows The array of rows which contain the expanded status.
           * @param rowHeight The row height.
           * @param detailRowHeight The detail row height.
           */

        }, {
          key: "initCache",
          value: function initCache(details) {
            var rows = details.rows,
                rowHeight = details.rowHeight,
                detailRowHeight = details.detailRowHeight,
                externalVirtual = details.externalVirtual,
                rowCount = details.rowCount,
                rowIndexes = details.rowIndexes,
                rowExpansions = details.rowExpansions;
            var isFn = typeof rowHeight === 'function';
            var isDetailFn = typeof detailRowHeight === 'function';

            if (!isFn && isNaN(rowHeight)) {
              throw new Error("Row Height cache initialization failed. Please ensure that 'rowHeight' is a\n        valid number or function value: (".concat(rowHeight, ") when 'scrollbarV' is enabled."));
            } // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.


            if (!isDetailFn && isNaN(detailRowHeight)) {
              throw new Error("Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a\n        valid number or function value: (".concat(detailRowHeight, ") when 'scrollbarV' is enabled."));
            }

            var n = externalVirtual ? rowCount : rows.length;
            this.treeArray = new Array(n);

            for (var i = 0; i < n; ++i) {
              this.treeArray[i] = 0;
            }

            for (var _i2 = 0; _i2 < n; ++_i2) {
              var row = rows[_i2];
              var currentRowHeight = rowHeight;

              if (isFn) {
                currentRowHeight = rowHeight(row);
              } // Add the detail row height to the already expanded rows.
              // This is useful for the table that goes through a filter or sort.


              var expanded = rowExpansions.has(row);

              if (row && expanded) {
                if (isDetailFn) {
                  var index = rowIndexes.get(row);
                  currentRowHeight += detailRowHeight(row, index);
                } else {
                  currentRowHeight += detailRowHeight;
                }
              }

              this.update(_i2, currentRowHeight);
            }
          }
          /**
           * Given the ScrollY position i.e. sum, provide the rowIndex
           * that is present in the current view port.  Below handles edge cases.
           */

        }, {
          key: "getRowIndex",
          value: function getRowIndex(scrollY) {
            if (scrollY === 0) return 0;
            return this.calcRowIndex(scrollY);
          }
          /**
           * When a row is expanded or rowHeight is changed, update the height.  This can
           * be utilized in future when Angular Data table supports dynamic row heights.
           */

        }, {
          key: "update",
          value: function update(atRowIndex, byRowHeight) {
            if (!this.treeArray.length) {
              throw new Error("Update at index ".concat(atRowIndex, " with value ").concat(byRowHeight, " failed:\n        Row Height cache not initialized."));
            }

            var n = this.treeArray.length;
            atRowIndex |= 0;

            while (atRowIndex < n) {
              this.treeArray[atRowIndex] += byRowHeight;
              atRowIndex |= atRowIndex + 1;
            }
          }
          /**
           * Range Sum query from 1 to the rowIndex
           */

        }, {
          key: "query",
          value: function query(atIndex) {
            if (!this.treeArray.length) {
              throw new Error("query at index ".concat(atIndex, " failed: Fenwick tree array not initialized."));
            }

            var sum = 0;
            atIndex |= 0;

            while (atIndex >= 0) {
              sum += this.treeArray[atIndex];
              atIndex = (atIndex & atIndex + 1) - 1;
            }

            return sum;
          }
          /**
           * Find the total height between 2 row indexes
           */

        }, {
          key: "queryBetween",
          value: function queryBetween(atIndexA, atIndexB) {
            return this.query(atIndexB) - this.query(atIndexA - 1);
          }
          /**
           * Given the ScrollY position i.e. sum, provide the rowIndex
           * that is present in the current view port.
           */

        }, {
          key: "calcRowIndex",
          value: function calcRowIndex(sum) {
            if (!this.treeArray.length) return 0;
            var pos = -1;
            var dataLength = this.treeArray.length; // Get the highest bit for the block size.

            var highestBit = Math.pow(2, dataLength.toString(2).length - 1);

            for (var blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
              var nextPos = pos + blockSize;

              if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
              }
            }

            return pos + 1;
          }
        }]);

        return RowHeightCache;
      }();

      var cache = {};
      var testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;

      var ɵ0 = function ɵ0() {
        var styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
        var match = typeof styles !== 'undefined' ? Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) : null;
        var pre = match !== null ? match[1] : undefined; // tslint:disable-next-line: tsr-detect-non-literal-regexp

        var dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
        return dom ? {
          dom: dom,
          lowercase: pre,
          css: "-".concat(pre, "-"),
          js: pre[0].toUpperCase() + pre.substr(1)
        } : undefined;
      }; // Get Prefix
      // http://davidwalsh.name/vendor-prefix


      var prefix = ɵ0();

      function getVendorPrefixedName(property) {
        var name = camelCase(property);

        if (!cache[name]) {
          if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
          } else if (testStyle[property] !== undefined) {
            cache[name] = property;
          }
        }

        return cache[name];
      } // browser detection and prefixing tools


      var transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
      var backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
      var hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
      var hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
      var ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
      var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);

      function translateXY(styles, x, y) {
        if (typeof transform !== 'undefined' && hasCSSTransforms) {
          if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = "translate3d(".concat(x, "px, ").concat(y, "px, 0)");
            styles[backfaceVisibility] = 'hidden';
          } else {
            styles[camelCase(transform)] = "translate(".concat(x, "px, ").concat(y, "px)");
          }
        } else {
          styles.top = "".concat(y, "px");
          styles.left = "".concat(x, "px");
        }
      }

      var DataTableBodyComponent = /*@__PURE__*/function () {
        var DataTableBodyComponent = /*#__PURE__*/function () {
          /**
           * Creates an instance of DataTableBodyComponent.
           */
          function DataTableBodyComponent(cd) {
            var _this10 = this;

            _classCallCheck(this, DataTableBodyComponent);

            this.cd = cd;
            this.selected = [];
            this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
            this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.rowHeightsCache = new RowHeightCache();
            this.temp = [];
            this.offsetY = 0;
            this.indexes = {};
            this.rowIndexes = new WeakMap();
            this.rowExpansions = [];
            /**
             * Get the height of the detail row.
             */

            this.getDetailRowHeight = function (row, index) {
              if (!_this10.rowDetail) {
                return 0;
              }

              var rowHeight = _this10.rowDetail.rowHeight;
              return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
            }; // declare fn here so we can get access to the `this` property


            this.rowTrackingFn = function (index, row) {
              var idx = _this10.getRowIndex(row);

              if (_this10.trackByProp) {
                return row[_this10.trackByProp];
              } else {
                return idx;
              }
            };
          }

          _createClass(DataTableBodyComponent, [{
            key: "ngOnInit",

            /**
             * Called after the constructor, initializing input properties
             */
            value: function ngOnInit() {
              var _this11 = this;

              if (this.rowDetail) {
                this.listener = this.rowDetail.toggle.subscribe(function (_ref5) {
                  var type = _ref5.type,
                      value = _ref5.value;

                  if (type === 'row') {
                    _this11.toggleRowExpansion(value);
                  }

                  if (type === 'all') {
                    _this11.toggleAllRows(value);
                  } // Refresh rows after toggle
                  // Fixes #883


                  _this11.updateIndexes();

                  _this11.updateRows();

                  _this11.cd.markForCheck();
                });
              }

              if (this.groupHeader) {
                this.listener = this.groupHeader.toggle.subscribe(function (_ref6) {
                  var type = _ref6.type,
                      value = _ref6.value;

                  if (type === 'group') {
                    _this11.toggleRowExpansion(value);
                  }

                  if (type === 'all') {
                    _this11.toggleAllRows(value);
                  } // Refresh rows after toggle
                  // Fixes #883


                  _this11.updateIndexes();

                  _this11.updateRows();

                  _this11.cd.markForCheck();
                });
              }
            }
            /**
             * Called once, before the instance is destroyed.
             */

          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this.rowDetail || this.groupHeader) {
                this.listener.unsubscribe();
              }
            }
            /**
             * Updates the Y offset given a new offset.
             */

          }, {
            key: "updateOffsetY",
            value: function updateOffsetY(offset) {
              // scroller is missing on empty table
              if (!this.scroller) {
                return;
              }

              if (this.scrollbarV && this.virtualization && offset) {
                // First get the row Index that we need to move to.
                var rowIndex = this.pageSize * offset;
                offset = this.rowHeightsCache.query(rowIndex - 1);
              } else if (this.scrollbarV && !this.virtualization) {
                offset = 0;
              }

              this.scroller.setOffset(offset || 0);
            }
            /**
             * Body was scrolled, this is mainly useful for
             * when a user is server-side pagination via virtual scroll.
             */

          }, {
            key: "onBodyScroll",
            value: function onBodyScroll(event) {
              var scrollYPos = event.scrollYPos;
              var scrollXPos = event.scrollXPos; // if scroll change, trigger update
              // this is mainly used for header cell positions

              if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
                this.scroll.emit({
                  offsetY: scrollYPos,
                  offsetX: scrollXPos
                });
              }

              this.offsetY = scrollYPos;
              this.offsetX = scrollXPos;
              this.updateIndexes();
              this.updatePage(event.direction);
              this.updateRows();
            }
            /**
             * Updates the page given a direction.
             */

          }, {
            key: "updatePage",
            value: function updatePage(direction) {
              var offset = this.indexes.first / this.pageSize;

              if (direction === 'up') {
                offset = Math.ceil(offset);
              } else if (direction === 'down') {
                offset = Math.floor(offset);
              }

              if (direction !== undefined && !isNaN(offset)) {
                this.page.emit({
                  offset: offset
                });
              }
            }
            /**
             * Updates the rows in the view port
             */

          }, {
            key: "updateRows",
            value: function updateRows() {
              var _this12 = this;

              var _this$indexes = this.indexes,
                  first = _this$indexes.first,
                  last = _this$indexes.last;
              var rowIndex = first;
              var idx = 0;
              var temp = []; // if grouprowsby has been specified treat row paging
              // parameters as group paging parameters ie if limit 10 has been
              // specified treat it as 10 groups rather than 10 rows

              if (this.groupedRows) {
                var maxRowsPerGroup = 3; // if there is only one group set the maximum number of
                // rows per group the same as the total number of rows

                if (this.groupedRows.length === 1) {
                  maxRowsPerGroup = this.groupedRows[0].value.length;
                }

                while (rowIndex < last && rowIndex < this.groupedRows.length) {
                  // Add the groups into this page
                  var group = this.groupedRows[rowIndex];
                  this.rowIndexes.set(group, rowIndex);

                  if (group.value) {
                    // add indexes for each group item
                    group.value.forEach(function (g, i) {
                      var _idx = "".concat(rowIndex, "-").concat(i);

                      _this12.rowIndexes.set(g, _idx);
                    });
                  }

                  temp[idx] = group;
                  idx++; // Group index in this context

                  rowIndex++;
                }
              } else {
                while (rowIndex < last && rowIndex < this.rowCount) {
                  var row = this.rows[rowIndex];

                  if (row) {
                    // add indexes for each row
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                  }

                  idx++;
                  rowIndex++;
                }
              }

              this.temp = temp;
            }
            /**
             * Get the row height
             */

          }, {
            key: "getRowHeight",
            value: function getRowHeight(row) {
              // if its a function return it
              if (typeof this.rowHeight === 'function') {
                return this.rowHeight(row);
              }

              return this.rowHeight;
            }
            /**
             * @param group the group with all rows
             */

          }, {
            key: "getGroupHeight",
            value: function getGroupHeight(group) {
              var rowHeight = 0;

              if (group.value) {
                for (var index = 0; index < group.value.length; index++) {
                  rowHeight += this.getRowAndDetailHeight(group.value[index]);
                }
              }

              return rowHeight;
            }
            /**
             * Calculate row height based on the expanded state of the row.
             */

          }, {
            key: "getRowAndDetailHeight",
            value: function getRowAndDetailHeight(row) {
              var rowHeight = this.getRowHeight(row);
              var expanded = this.getRowExpanded(row); // Adding detail row height if its expanded.

              if (expanded) {
                rowHeight += this.getDetailRowHeight(row);
              }

              return rowHeight;
            }
            /**
             * Calculates the styles for the row so that the rows can be moved in 2D space
             * during virtual scroll inside the DOM.   In the below case the Y position is
             * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
             * 100 px then following styles are generated:
             *
             * transform: translate3d(0px, 0px, 0px);    ->  row0
             * transform: translate3d(0px, 30px, 0px);   ->  row1
             * transform: translate3d(0px, 130px, 0px);  ->  row2
             *
             * Row heights have to be calculated based on the row heights cache as we wont
             * be able to determine which row is of what height before hand.  In the above
             * case the positionY of the translate3d for row2 would be the sum of all the
             * heights of the rows before it (i.e. row0 and row1).
             *
             * @param rows the row that needs to be placed in the 2D space.
             * @returns the CSS3 style to be applied
             *
             * @memberOf DataTableBodyComponent
             */

          }, {
            key: "getRowsStyles",
            value: function getRowsStyles(rows) {
              var styles = {}; // only add styles for the group if there is a group

              if (this.groupedRows) {
                styles.width = this.columnGroupWidths.total;
              }

              if (this.scrollbarV && this.virtualization) {
                var idx = 0;

                if (this.groupedRows) {
                  // Get the latest row rowindex in a group
                  var row = rows[rows.length - 1];
                  idx = row ? this.getRowIndex(row) : 0;
                } else {
                  idx = this.getRowIndex(rows);
                } // const pos = idx * rowHeight;
                // The position of this row would be the sum of all row heights
                // until the previous row position.


                var pos = this.rowHeightsCache.query(idx - 1);
                translateXY(styles, 0, pos);
              }

              return styles;
            }
            /**
             * Calculate bottom summary row offset for scrollbar mode.
             * For more information about cache and offset calculation
             * see description for `getRowsStyles` method
             *
             * @returns the CSS3 style to be applied
             *
             * @memberOf DataTableBodyComponent
             */

          }, {
            key: "getBottomSummaryRowStyles",
            value: function getBottomSummaryRowStyles() {
              if (!this.scrollbarV || !this.rows || !this.rows.length) {
                return null;
              }

              var styles = {
                position: 'absolute'
              };
              var pos = this.rowHeightsCache.query(this.rows.length - 1);
              translateXY(styles, 0, pos);
              return styles;
            }
            /**
             * Hides the loading indicator
             */

          }, {
            key: "hideIndicator",
            value: function hideIndicator() {
              var _this13 = this;

              setTimeout(function () {
                return _this13.loadingIndicator = false;
              }, 500);
            }
            /**
             * Updates the index of the rows in the viewport
             */

          }, {
            key: "updateIndexes",
            value: function updateIndexes() {
              var first = 0;
              var last = 0;

              if (this.scrollbarV) {
                if (this.virtualization) {
                  // Calculation of the first and last indexes will be based on where the
                  // scrollY position would be at.  The last index would be the one
                  // that shows up inside the view port the last.
                  var height = parseInt(this.bodyHeight, 0);
                  first = this.rowHeightsCache.getRowIndex(this.offsetY);
                  last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
                } else {
                  // If virtual rows are not needed
                  // We render all in one go
                  first = 0;
                  last = this.rowCount;
                }
              } else {
                // The server is handling paging and will pass an array that begins with the
                // element at a specified offset.  first should always be 0 with external paging.
                if (!this.externalPaging) {
                  first = Math.max(this.offset * this.pageSize, 0);
                }

                last = Math.min(first + this.pageSize, this.rowCount);
              }

              this.indexes = {
                first: first,
                last: last
              };
            }
            /**
             * Refreshes the full Row Height cache.  Should be used
             * when the entire row array state has changed.
             */

          }, {
            key: "refreshRowHeightCache",
            value: function refreshRowHeightCache() {
              if (!this.scrollbarV || this.scrollbarV && !this.virtualization) {
                return;
              } // clear the previous row height cache if already present.
              // this is useful during sorts, filters where the state of the
              // rows array is changed.


              this.rowHeightsCache.clearCache(); // Initialize the tree only if there are rows inside the tree.

              if (this.rows && this.rows.length) {
                var rowExpansions = new Set();

                var _iterator8 = _createForOfIteratorHelper(this.rows),
                    _step8;

                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var row = _step8.value;

                    if (this.getRowExpanded(row)) {
                      rowExpansions.add(row);
                    }
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }

                this.rowHeightsCache.initCache({
                  rows: this.rows,
                  rowHeight: this.rowHeight,
                  detailRowHeight: this.getDetailRowHeight,
                  externalVirtual: this.scrollbarV && this.externalPaging,
                  rowCount: this.rowCount,
                  rowIndexes: this.rowIndexes,
                  rowExpansions: rowExpansions
                });
              }
            }
            /**
             * Gets the index for the view port
             */

          }, {
            key: "getAdjustedViewPortIndex",
            value: function getAdjustedViewPortIndex() {
              // Capture the row index of the first row that is visible on the viewport.
              // If the scroll bar is just below the row which is highlighted then make that as the
              // first index.
              var viewPortFirstRowIndex = this.indexes.first;

              if (this.scrollbarV && this.virtualization) {
                var offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
                return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
              }

              return viewPortFirstRowIndex;
            }
            /**
             * Toggle the Expansion of the row i.e. if the row is expanded then it will
             * collapse and vice versa.   Note that the expanded status is stored as
             * a part of the row object itself as we have to preserve the expanded row
             * status in case of sorting and filtering of the row set.
             */

          }, {
            key: "toggleRowExpansion",
            value: function toggleRowExpansion(row) {
              // Capture the row index of the first row that is visible on the viewport.
              var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
              var rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
              var expanded = rowExpandedIdx > -1; // If the detailRowHeight is auto --> only in case of non-virtualized scroll

              if (this.scrollbarV && this.virtualization) {
                var detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1); // const idx = this.rowIndexes.get(row) || 0;

                var idx = this.getRowIndex(row);
                this.rowHeightsCache.update(idx, detailRowHeight);
              } // Update the toggled row and update thive nevere heights in the cache.


              if (expanded) {
                this.rowExpansions.splice(rowExpandedIdx, 1);
              } else {
                this.rowExpansions.push(row);
              }

              this.detailToggle.emit({
                rows: [row],
                currentIndex: viewPortFirstRowIndex
              });
            }
            /**
             * Expand/Collapse all the rows no matter what their state is.
             */

          }, {
            key: "toggleAllRows",
            value: function toggleAllRows(expanded) {
              // clear prev expansions
              this.rowExpansions = []; // Capture the row index of the first row that is visible on the viewport.

              var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();

              if (expanded) {
                var _iterator9 = _createForOfIteratorHelper(this.rows),
                    _step9;

                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var row = _step9.value;
                    this.rowExpansions.push(row);
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
              }

              if (this.scrollbarV) {
                // Refresh the full row heights cache since every row was affected.
                this.recalcLayout();
              } // Emit all rows that have been expanded.


              this.detailToggle.emit({
                rows: this.rows,
                currentIndex: viewPortFirstRowIndex
              });
            }
            /**
             * Recalculates the table
             */

          }, {
            key: "recalcLayout",
            value: function recalcLayout() {
              this.refreshRowHeightCache();
              this.updateIndexes();
              this.updateRows();
            }
            /**
             * Tracks the column
             */

          }, {
            key: "columnTrackingFn",
            value: function columnTrackingFn(index, column) {
              return column.$$id;
            }
            /**
             * Gets the row pinning group styles
             */

          }, {
            key: "stylesByGroup",
            value: function stylesByGroup(group) {
              var widths = this.columnGroupWidths;
              var offsetX = this.offsetX;
              var styles = {
                width: "".concat(widths[group], "px")
              };

              if (group === 'left') {
                translateXY(styles, offsetX, 0);
              } else if (group === 'right') {
                var bodyWidth = parseInt(this.innerWidth + '', 0);
                var totalDiff = widths.total - bodyWidth;
                var offsetDiff = totalDiff - offsetX;
                var offset = offsetDiff * -1;
                translateXY(styles, offset, 0);
              }

              return styles;
            }
            /**
             * Returns if the row was expanded and set default row expansion when row expansion is empty
             */

          }, {
            key: "getRowExpanded",
            value: function getRowExpanded(row) {
              if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
                var _iterator10 = _createForOfIteratorHelper(this.groupedRows),
                    _step10;

                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var group = _step10.value;
                    this.rowExpansions.push(group);
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
              }

              return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
            }
          }, {
            key: "getRowExpandedIdx",
            value: function getRowExpandedIdx(row, expanded) {
              var _this14 = this;

              if (!expanded || !expanded.length) return -1;
              var rowId = this.rowIdentity(row);
              return expanded.findIndex(function (r) {
                var id = _this14.rowIdentity(r);

                return id === rowId;
              });
            }
            /**
             * Gets the row index given a row
             */

          }, {
            key: "getRowIndex",
            value: function getRowIndex(row) {
              return this.rowIndexes.get(row) || 0;
            }
          }, {
            key: "onTreeAction",
            value: function onTreeAction(row) {
              this.treeAction.emit({
                row: row
              });
            }
          }, {
            key: "pageSize",
            set: function set(val) {
              this._pageSize = val;
              this.recalcLayout();
            },
            get: function get() {
              return this._pageSize;
            }
          }, {
            key: "rows",
            set: function set(val) {
              this._rows = val;
              this.recalcLayout();
            },
            get: function get() {
              return this._rows;
            }
          }, {
            key: "columns",
            set: function set(val) {
              this._columns = val;
              var colsByPin = columnsByPin(val);
              this.columnGroupWidths = columnGroupWidths(colsByPin, val);
            },
            get: function get() {
              return this._columns;
            }
          }, {
            key: "offset",
            set: function set(val) {
              this._offset = val;
              if (!this.scrollbarV || this.scrollbarV && !this.virtualization) this.recalcLayout();
            },
            get: function get() {
              return this._offset;
            }
          }, {
            key: "rowCount",
            set: function set(val) {
              this._rowCount = val;
              this.recalcLayout();
            },
            get: function get() {
              return this._rowCount;
            }
          }, {
            key: "bodyWidth",
            get: function get() {
              if (this.scrollbarH) {
                return this.innerWidth + 'px';
              } else {
                return '100%';
              }
            }
          }, {
            key: "bodyHeight",
            set: function set(val) {
              if (this.scrollbarV) {
                this._bodyHeight = val + 'px';
              } else {
                this._bodyHeight = 'auto';
              }

              this.recalcLayout();
            },
            get: function get() {
              return this._bodyHeight;
            }
            /**
             * Returns if selection is enabled.
             */

          }, {
            key: "selectEnabled",
            get: function get() {
              return !!this.selectionType;
            }
            /**
             * Property that would calculate the height of scroll bar
             * based on the row heights cache for virtual scroll and virtualization. Other scenarios
             * calculate scroll height automatically (as height will be undefined).
             */

          }, {
            key: "scrollHeight",
            get: function get() {
              if (this.scrollbarV && this.virtualization && this.rowCount) {
                return this.rowHeightsCache.query(this.rowCount - 1);
              } // avoid TS7030: Not all code paths return a value.


              return undefined;
            }
          }]);

          return DataTableBodyComponent;
        }();

        DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) {
          return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
        };

        DataTableBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: DataTableBodyComponent,
          selectors: [["datatable-body"]],
          viewQuery: function DataTableBodyComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ScrollerComponent, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
            }
          },
          hostAttrs: [1, "datatable-body"],
          hostVars: 4,
          hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
            }
          },
          inputs: {
            selected: "selected",
            pageSize: "pageSize",
            rows: "rows",
            columns: "columns",
            offset: "offset",
            rowCount: "rowCount",
            bodyHeight: "bodyHeight",
            offsetX: "offsetX",
            loadingIndicator: "loadingIndicator",
            scrollbarV: "scrollbarV",
            scrollbarH: "scrollbarH",
            externalPaging: "externalPaging",
            rowHeight: "rowHeight",
            emptyMessage: "emptyMessage",
            selectionType: "selectionType",
            rowIdentity: "rowIdentity",
            rowDetail: "rowDetail",
            groupHeader: "groupHeader",
            selectCheck: "selectCheck",
            displayCheck: "displayCheck",
            trackByProp: "trackByProp",
            rowClass: "rowClass",
            groupedRows: "groupedRows",
            groupExpansionDefault: "groupExpansionDefault",
            innerWidth: "innerWidth",
            groupRowsBy: "groupRowsBy",
            virtualization: "virtualization",
            summaryRow: "summaryRow",
            summaryPosition: "summaryPosition",
            summaryHeight: "summaryHeight"
          },
          outputs: {
            scroll: "scroll",
            page: "page",
            activate: "activate",
            select: "select",
            detailToggle: "detailToggle",
            rowContextmenu: "rowContextmenu",
            treeAction: "treeAction"
          },
          decls: 5,
          vars: 9,
          consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]],
          template: function DataTableBodyComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "datatable-selection", 1, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) {
                return ctx.select.emit($event);
              })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) {
                return ctx.activate.emit($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
            }
          },
          directives: function directives() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DataTableSelectionComponent, ProgressBarComponent, ScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], DataTableSummaryRowComponent, DataTableRowWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], DataTableBodyRowComponent];
          },
          encapsulation: 2,
          changeDetection: 0
        });
        return DataTableBodyComponent;
      }();

      var DataTableHeaderComponent = /*@__PURE__*/function () {
        var DataTableHeaderComponent = /*#__PURE__*/function () {
          function DataTableHeaderComponent(cd) {
            _classCallCheck(this, DataTableHeaderComponent);

            this.cd = cd;
            this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
            this._columnGroupWidths = {
              total: 100
            };
            this._styleByGroup = {
              left: {},
              center: {},
              right: {}
            };
            this.destroyed = false;
          }

          _createClass(DataTableHeaderComponent, [{
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this.destroyed = true;
            }
          }, {
            key: "onLongPressStart",
            value: function onLongPressStart(_ref7) {
              var event = _ref7.event,
                  model = _ref7.model;
              model.dragging = true;
              this.dragEventTarget = event;
            }
          }, {
            key: "onLongPressEnd",
            value: function onLongPressEnd(_ref8) {
              var _this15 = this;

              var event = _ref8.event,
                  model = _ref8.model;
              this.dragEventTarget = event; // delay resetting so sort can be
              // prevented if we were dragging

              setTimeout(function () {
                // datatable component creates copies from columns on reorder
                // set dragging to false on new objects
                var column = _this15._columns.find(function (c) {
                  return c.$$id === model.$$id;
                });

                if (column) {
                  column.dragging = false;
                }
              }, 5);
            }
          }, {
            key: "trackByGroups",
            value: function trackByGroups(index, colGroup) {
              return colGroup.type;
            }
          }, {
            key: "columnTrackingFn",
            value: function columnTrackingFn(index, column) {
              return column.$$id;
            }
          }, {
            key: "onColumnResized",
            value: function onColumnResized(width, column) {
              if (width <= column.minWidth) {
                width = column.minWidth;
              } else if (width >= column.maxWidth) {
                width = column.maxWidth;
              }

              this.resize.emit({
                column: column,
                prevValue: column.width,
                newValue: width
              });
            }
          }, {
            key: "onColumnReordered",
            value: function onColumnReordered(_ref9) {
              var prevIndex = _ref9.prevIndex,
                  newIndex = _ref9.newIndex,
                  model = _ref9.model;
              var column = this.getColumn(newIndex);
              column.isTarget = false;
              column.targetMarkerContext = undefined;
              this.reorder.emit({
                column: model,
                prevValue: prevIndex,
                newValue: newIndex
              });
            }
          }, {
            key: "onTargetChanged",
            value: function onTargetChanged(_ref10) {
              var prevIndex = _ref10.prevIndex,
                  newIndex = _ref10.newIndex,
                  initialIndex = _ref10.initialIndex;

              if (prevIndex || prevIndex === 0) {
                var oldColumn = this.getColumn(prevIndex);
                oldColumn.isTarget = false;
                oldColumn.targetMarkerContext = undefined;
              }

              if (newIndex || newIndex === 0) {
                var newColumn = this.getColumn(newIndex);
                newColumn.isTarget = true;

                if (initialIndex !== newIndex) {
                  newColumn.targetMarkerContext = {
                    "class": 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                  };
                }
              }
            }
          }, {
            key: "getColumn",
            value: function getColumn(index) {
              var leftColumnCount = this._columnsByPin[0].columns.length;

              if (index < leftColumnCount) {
                return this._columnsByPin[0].columns[index];
              }

              var centerColumnCount = this._columnsByPin[1].columns.length;

              if (index < leftColumnCount + centerColumnCount) {
                return this._columnsByPin[1].columns[index - leftColumnCount];
              }

              return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
            }
          }, {
            key: "onSort",
            value: function onSort(_ref11) {
              var column = _ref11.column,
                  prevValue = _ref11.prevValue,
                  newValue = _ref11.newValue;

              // if we are dragging don't sort!
              if (column.dragging) {
                return;
              }

              var sorts = this.calcNewSorts(column, prevValue, newValue);
              this.sort.emit({
                sorts: sorts,
                column: column,
                prevValue: prevValue,
                newValue: newValue
              });
            }
          }, {
            key: "calcNewSorts",
            value: function calcNewSorts(column, prevValue, newValue) {
              var idx = 0;

              if (!this.sorts) {
                this.sorts = [];
              }

              var sorts = this.sorts.map(function (s, i) {
                s = Object.assign({}, s);

                if (s.prop === column.prop) {
                  idx = i;
                }

                return s;
              });

              if (newValue === undefined) {
                sorts.splice(idx, 1);
              } else if (prevValue) {
                sorts[idx].dir = newValue;
              } else {
                if (this.sortType === SortType.single) {
                  sorts.splice(0, this.sorts.length);
                }

                sorts.push({
                  dir: newValue,
                  prop: column.prop
                });
              }

              return sorts;
            }
          }, {
            key: "setStylesByGroup",
            value: function setStylesByGroup() {
              this._styleByGroup.left = this.calcStylesByGroup('left');
              this._styleByGroup.center = this.calcStylesByGroup('center');
              this._styleByGroup.right = this.calcStylesByGroup('right');

              if (!this.destroyed) {
                this.cd.detectChanges();
              }
            }
          }, {
            key: "calcStylesByGroup",
            value: function calcStylesByGroup(group) {
              var widths = this._columnGroupWidths;
              var offsetX = this.offsetX;
              var styles = {
                width: "".concat(widths[group], "px")
              };

              if (group === 'center') {
                translateXY(styles, offsetX * -1, 0);
              } else if (group === 'right') {
                var totalDiff = widths.total - this.innerWidth;
                var offset = totalDiff * -1;
                translateXY(styles, offset, 0);
              }

              return styles;
            }
          }, {
            key: "innerWidth",
            set: function set(val) {
              var _this16 = this;

              this._innerWidth = val;
              setTimeout(function () {
                if (_this16._columns) {
                  var colByPin = columnsByPin(_this16._columns);
                  _this16._columnGroupWidths = columnGroupWidths(colByPin, _this16._columns);

                  _this16.setStylesByGroup();
                }
              });
            },
            get: function get() {
              return this._innerWidth;
            }
          }, {
            key: "headerHeight",
            set: function set(val) {
              if (val !== 'auto') {
                this._headerHeight = "".concat(val, "px");
              } else {
                this._headerHeight = val;
              }
            },
            get: function get() {
              return this._headerHeight;
            }
          }, {
            key: "columns",
            set: function set(val) {
              var _this17 = this;

              this._columns = val;
              var colsByPin = columnsByPin(val);
              this._columnsByPin = columnsByPinArr(val);
              setTimeout(function () {
                _this17._columnGroupWidths = columnGroupWidths(colsByPin, val);

                _this17.setStylesByGroup();
              });
            },
            get: function get() {
              return this._columns;
            }
          }, {
            key: "offsetX",
            set: function set(val) {
              this._offsetX = val;
              this.setStylesByGroup();
            },
            get: function get() {
              return this._offsetX;
            }
          }, {
            key: "headerWidth",
            get: function get() {
              if (this.scrollbarH) {
                return this.innerWidth + 'px';
              }

              return '100%';
            }
          }]);

          return DataTableHeaderComponent;
        }();

        DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) {
          return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
        };

        DataTableHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: DataTableHeaderComponent,
          selectors: [["datatable-header"]],
          hostAttrs: [1, "datatable-header"],
          hostVars: 4,
          hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
            }
          },
          inputs: {
            innerWidth: "innerWidth",
            headerHeight: "headerHeight",
            columns: "columns",
            offsetX: "offsetX",
            sorts: "sorts",
            sortAscendingIcon: "sortAscendingIcon",
            sortDescendingIcon: "sortDescendingIcon",
            sortUnsetIcon: "sortUnsetIcon",
            scrollbarH: "scrollbarH",
            dealsWithGroup: "dealsWithGroup",
            targetMarkerTemplate: "targetMarkerTemplate",
            sortType: "sortType",
            allRowsSelected: "allRowsSelected",
            selectionType: "selectionType",
            reorderable: "reorderable"
          },
          outputs: {
            sort: "sort",
            reorder: "reorder",
            resize: "resize",
            select: "select",
            columnContextmenu: "columnContextmenu"
          },
          decls: 2,
          vars: 4,
          consts: [["orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]],
          template: function DataTableHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) {
                return ctx.onColumnReordered($event);
              })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) {
                return ctx.onTargetChanged($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
            }
          },
          directives: function directives() {
            return [OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], DataTableHeaderCellComponent, ResizeableDirective, LongPressDirective, DraggableDirective];
          },
          encapsulation: 2,
          changeDetection: 0
        });
        return DataTableHeaderComponent;
      }();
      /**
       * Throttle a function
       */


      function throttle(func, wait, options) {
        options = options || {};
        var context;
        var args;
        var result;
        var timeout = null;
        var previous = 0;

        function later() {
          previous = options.leading === false ? 0 : +new Date();
          timeout = null;
          result = func.apply(context, args);
        }

        return function () {
          var now = +new Date();

          if (!previous && options.leading === false) {
            previous = now;
          }

          var remaining = wait - (now - previous);
          context = this;
          args = arguments;

          if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }

          return result;
        };
      }
      /**
       * Throttle decorator
       *
       *  class MyClass {
       *    throttleable(10)
       *    myFn() { ... }
       *  }
       */


      function throttleable(duration, options) {
        return function innerDecorator(target, key, descriptor) {
          return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
              Object.defineProperty(this, key, {
                configurable: true,
                enumerable: descriptor.enumerable,
                value: throttle(descriptor.value, duration, options)
              });
              return this[key];
            }
          };
        };
      }
      /**
       * Calculates the Total Flex Grow
       */


      function getTotalFlexGrow(columns) {
        var totalFlexGrow = 0;

        var _iterator11 = _createForOfIteratorHelper(columns),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var c = _step11.value;
            totalFlexGrow += c.flexGrow || 0;
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        return totalFlexGrow;
      }
      /**
       * Adjusts the column widths.
       * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
       */


      function adjustColumnWidths(allColumns, expectedWidth) {
        var columnsWidth = columnsTotalWidth(allColumns);
        var totalFlexGrow = getTotalFlexGrow(allColumns);
        var colsByGroup = columnsByPin(allColumns);

        if (columnsWidth !== expectedWidth) {
          scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
        }
      }
      /**
       * Resizes columns based on the flexGrow property, while respecting manually set widths
       */


      function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
        // calculate total width and flexgrow points for coulumns that can be resized
        for (var attr in colsByGroup) {
          var _iterator12 = _createForOfIteratorHelper(colsByGroup[attr]),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var column = _step12.value;

              if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
              } else {
                column.width = 0;
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }

        var hasMinWidth = {};
        var remainingWidth = maxWidth; // resize columns until no width is left to be distributed

        do {
          var widthPerFlexPoint = remainingWidth / totalFlexGrow;
          remainingWidth = 0;

          for (var _attr in colsByGroup) {
            var _iterator13 = _createForOfIteratorHelper(colsByGroup[_attr]),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _column = _step13.value;

                // if the column can be resize and it hasn't reached its minimum width yet
                if (_column.canAutoResize && !hasMinWidth[_column.prop]) {
                  var newWidth = _column.width + _column.flexGrow * widthPerFlexPoint;

                  if (_column.minWidth !== undefined && newWidth < _column.minWidth) {
                    remainingWidth += newWidth - _column.minWidth;
                    _column.width = _column.minWidth;
                    hasMinWidth[_column.prop] = true;
                  } else {
                    _column.width = newWidth;
                  }
                }
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
        } while (remainingWidth !== 0);
      }
      /**
       * Forces the width of the columns to
       * distribute equally but overflowing when necessary
       *
       * Rules:
       *
       *  - If combined withs are less than the total width of the grid,
       *    proportion the widths given the min / max / normal widths to fill the width.
       *
       *  - If the combined widths, exceed the total width of the grid,
       *    use the standard widths.
       *
       *  - If a column is resized, it should always use that width
       *
       *  - The proportional widths should never fall below min size if specified.
       *
       *  - If the grid starts off small but then becomes greater than the size ( + / - )
       *    the width should use the original width; not the newly proportioned widths.
       */


      function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed) {
        var defaultColWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 300;
        var columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(function (c) {
          return c.canAutoResize !== false;
        });

        var _iterator14 = _createForOfIteratorHelper(columnsToResize),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _column2 = _step14.value;

            if (!_column2.$$oldWidth) {
              _column2.$$oldWidth = _column2.width;
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }

        var additionWidthPerColumn = 0;
        var exceedsWindow = false;
        var contentWidth = getContentWidth(allColumns, defaultColWidth);
        var remainingWidth = expectedWidth - contentWidth;
        var columnsProcessed = [];
        var remainingWidthLimit = 1; // when to stop
        // This loop takes care of the

        do {
          additionWidthPerColumn = remainingWidth / columnsToResize.length;
          exceedsWindow = contentWidth >= expectedWidth;

          var _iterator15 = _createForOfIteratorHelper(columnsToResize),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var column = _step15.value;

              if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
              } else {
                var newSize = (column.width || defaultColWidth) + additionWidthPerColumn;

                if (column.minWidth && newSize < column.minWidth) {
                  column.width = column.minWidth;
                  columnsProcessed.push(column);
                } else if (column.maxWidth && newSize > column.maxWidth) {
                  column.width = column.maxWidth;
                  columnsProcessed.push(column);
                } else {
                  column.width = newSize;
                }
              }

              column.width = Math.max(0, column.width);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }

          contentWidth = getContentWidth(allColumns);
          remainingWidth = expectedWidth - contentWidth;
          removeProcessedColumns(columnsToResize, columnsProcessed);
        } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
      }
      /**
       * Remove the processed columns from the current active columns.
       */


      function removeProcessedColumns(columnsToResize, columnsProcessed) {
        var _iterator16 = _createForOfIteratorHelper(columnsProcessed),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var column = _step16.value;
            var index = columnsToResize.indexOf(column);
            columnsToResize.splice(index, 1);
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      }
      /**
       * Gets the width of the columns
       */


      function getContentWidth(allColumns) {
        var defaultColWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
        var contentWidth = 0;

        var _iterator17 = _createForOfIteratorHelper(allColumns),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var column = _step17.value;
            contentWidth += column.width || defaultColWidth;
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }

        return contentWidth;
      }

      var SortDirection = /*@__PURE__*/function (SortDirection) {
        SortDirection["asc"] = "asc";
        SortDirection["desc"] = "desc";
        return SortDirection;
      }({});
      /**
       * Gets the next sort direction
       */


      function nextSortDir(sortType, current) {
        if (sortType === SortType.single) {
          if (current === SortDirection.asc) {
            return SortDirection.desc;
          } else {
            return SortDirection.asc;
          }
        } else {
          if (!current) {
            return SortDirection.asc;
          } else if (current === SortDirection.asc) {
            return SortDirection.desc;
          } else if (current === SortDirection.desc) {
            return undefined;
          } // avoid TS7030: Not all code paths return a value.


          return undefined;
        }
      }
      /**
       * Adapted from fueld-ui on 6/216
       * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
       */


      function orderByComparator(a, b) {
        if (a === null || typeof a === 'undefined') a = 0;
        if (b === null || typeof b === 'undefined') b = 0;

        if (a instanceof Date && b instanceof Date) {
          if (a < b) return -1;
          if (a > b) return 1;
        } else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
          // Convert to string in case of a=0 or b=0
          a = String(a);
          b = String(b); // Isn't a number so lowercase the string to properly compare

          if (a.toLowerCase() < b.toLowerCase()) return -1;
          if (a.toLowerCase() > b.toLowerCase()) return 1;
        } else {
          // Parse strings as numbers to compare properly
          if (parseFloat(a) < parseFloat(b)) return -1;
          if (parseFloat(a) > parseFloat(b)) return 1;
        } // equal each other


        return 0;
      }
      /**
       * creates a shallow copy of the `rows` input and returns the sorted copy. this function
       * does not sort the `rows` argument in place
       */


      function sortRows(rows, columns, dirs) {
        if (!rows) return [];
        if (!dirs || !dirs.length || !columns) return _toConsumableArray(rows);
        /**
         * record the row ordering of results from prior sort operations (if applicable)
         * this is necessary to guarantee stable sorting behavior
         */

        var rowToIndexMap = new Map();
        rows.forEach(function (row, index) {
          return rowToIndexMap.set(row, index);
        });

        var temp = _toConsumableArray(rows);

        var cols = columns.reduce(function (obj, col) {
          if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
          }

          return obj;
        }, {}); // cache valueGetter and compareFn so that they
        // do not need to be looked-up in the sort function body

        var cachedDirs = dirs.map(function (dir) {
          var prop = dir.prop;
          return {
            prop: prop,
            dir: dir.dir,
            valueGetter: getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
          };
        });
        return temp.sort(function (rowA, rowB) {
          var _iterator18 = _createForOfIteratorHelper(cachedDirs),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var cachedDir = _step18.value;
              // Get property and valuegetters for column to be sorted
              var prop = cachedDir.prop,
                  valueGetter = cachedDir.valueGetter; // Get A and B cell values from rows based on properties of the columns

              var propA = valueGetter(rowA, prop);
              var propB = valueGetter(rowB, prop); // Compare function gets five parameters:
              // Two cell values to be compared as propA and propB
              // Two rows corresponding to the cells as rowA and rowB
              // Direction of the sort for this column as SortDirection
              // Compare can be a standard JS comparison function (a,b) => -1|0|1
              // as additional parameters are silently ignored. The whole row and sort
              // direction enable more complex sort logic.

              var comparison = cachedDir.dir !== SortDirection.desc ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir) : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir); // Don't return 0 yet in case of needing to sort by next property

              if (comparison !== 0) return comparison;
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB))) return 0;
          /**
           * all else being equal, preserve original order of the rows (stable sort)
           */

          return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
        });
      }

      var DatatableComponent = /*@__PURE__*/function () {
        var DatatableComponent = /*#__PURE__*/function () {
          function DatatableComponent(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
            var _this18 = this;

            _classCallCheck(this, DatatableComponent);

            this.scrollbarHelper = scrollbarHelper;
            this.dimensionsHelper = dimensionsHelper;
            this.cd = cd;
            this.columnChangesService = columnChangesService;
            this.configuration = configuration;
            /**
             * List of row objects that should be
             * represented as selected in the grid.
             * Default value: `[]`
             */

            this.selected = [];
            /**
             * Enable vertical scrollbars
             */

            this.scrollbarV = false;
            /**
             * Enable horz scrollbars
             */

            this.scrollbarH = false;
            /**
             * The row height; which is necessary
             * to calculate the height for the lazy rendering.
             */

            this.rowHeight = 30;
            /**
             * Type of column width distribution formula.
             * Example: flex, force, standard
             */

            this.columnMode = ColumnMode.standard;
            /**
             * The minimum header height in pixels.
             * Pass a falsey for no header
             */

            this.headerHeight = 30;
            /**
             * The minimum footer height in pixels.
             * Pass falsey for no footer
             */

            this.footerHeight = 0;
            /**
             * If the table should use external paging
             * otherwise its assumed that all data is preloaded.
             */

            this.externalPaging = false;
            /**
             * If the table should use external sorting or
             * the built-in basic sorting.
             */

            this.externalSorting = false;
            /**
             * Show the linear loading bar.
             * Default value: `false`
             */

            this.loadingIndicator = false;
            /**
             * Enable/Disable ability to re-order columns
             * by dragging them.
             */

            this.reorderable = true;
            /**
             * Swap columns on re-order columns or
             * move them.
             */

            this.swapColumns = true;
            /**
             * The type of sorting
             */

            this.sortType = SortType.single;
            /**
             * Array of sorted columns by property and type.
             * Default value: `[]`
             */

            this.sorts = [];
            /**
             * Css class overrides
             */

            this.cssClasses = {
              sortAscending: 'datatable-icon-up',
              sortDescending: 'datatable-icon-down',
              sortUnset: 'datatable-icon-sort-unset',
              pagerLeftArrow: 'datatable-icon-left',
              pagerRightArrow: 'datatable-icon-right',
              pagerPrevious: 'datatable-icon-prev',
              pagerNext: 'datatable-icon-skip'
            };
            /**
             * Message overrides for localization
             *
             * emptyMessage     [default] = 'No data to display'
             * totalMessage     [default] = 'total'
             * selectedMessage  [default] = 'selected'
             */

            this.messages = {
              // Message to show when array is presented
              // but contains no values
              emptyMessage: 'No data to display',
              // Footer total message
              totalMessage: 'total',
              // Footer selected message
              selectedMessage: 'selected'
            };
            /**
             * A boolean you can use to set the detault behaviour of rows and groups
             * whether they will start expanded or not. If ommited the default is NOT expanded.
             *
             */

            this.groupExpansionDefault = false;
            /**
             * Property to which you can use for determining select all
             * rows on current page or not.
             *
             * @memberOf DatatableComponent
             */

            this.selectAllRowsOnPage = false;
            /**
             * A flag for row virtualization on / off
             */

            this.virtualization = true;
            /**
             * A flag for switching summary row on / off
             */

            this.summaryRow = false;
            /**
             * A height of summary row
             */

            this.summaryHeight = 30;
            /**
             * A property holds a summary row position: top/bottom
             */

            this.summaryPosition = 'top';
            /**
             * Body was scrolled typically in a `scrollbarV:true` scenario.
             */

            this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * A cell or row was focused via keyboard or mouse click.
             */

            this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * A cell or row was selected.
             */

            this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * Column sort was invoked.
             */

            this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * The table was paged either triggered by the pager or the body scroll.
             */

            this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * Columns were re-ordered.
             */

            this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * Column was resized.
             */

            this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /**
             * The context menu was invoked on the table.
             * type indicates whether the header or the body was clicked.
             * content contains either the column or the row that was clicked.
             */

            this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
            /**
             * A row was expanded ot collapsed for tree
             */

            this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.rowCount = 0;
            this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
            this._count = 0;
            this._offset = 0;
            this._subscriptions = [];
            /**
             * This will be used when displaying or selecting rows.
             * when tracking/comparing them, we'll use the value of this fn,
             *
             * (`fn(x) === fn(y)` instead of `x === y`)
             */

            this.rowIdentity = function (x) {
              if (_this18._groupRowsBy) {
                // each group in groupedRows are stored as {key, value: [rows]},
                // where key is the groupRowsBy index
                return x.key;
              } else {
                return x;
              }
            }; // get ref to elm for measuring


            this.element = element.nativeElement;
            this.rowDiffer = differs.find({}).create(); // apply global settings from Module.forRoot

            if (this.configuration && this.configuration.messages) {
              this.messages = Object.assign({}, this.configuration.messages);
            }
          }
          /**
           * Rows that are displayed in the table.
           */


          _createClass(DatatableComponent, [{
            key: "ngOnInit",

            /**
             * Lifecycle hook that is called after data-bound
             * properties of a directive are initialized.
             */
            value: function ngOnInit() {
              // need to call this immediatly to size
              // if the table is hidden the visibility
              // listener will invoke this itself upon show
              this.recalculate();
            }
            /**
             * Lifecycle hook that is called after a component's
             * view has been fully initialized.
             */

          }, {
            key: "ngAfterViewInit",
            value: function ngAfterViewInit() {
              var _this19 = this;

              if (!this.externalSorting) {
                this.sortInternalRows();
              } // this has to be done to prevent the change detection
              // tree from freaking out because we are readjusting


              if (typeof requestAnimationFrame === 'undefined') {
                return;
              }

              requestAnimationFrame(function () {
                _this19.recalculate(); // emit page for virtual server-side kickoff


                if (_this19.externalPaging && _this19.scrollbarV) {
                  _this19.page.emit({
                    count: _this19.count,
                    pageSize: _this19.pageSize,
                    limit: _this19.limit,
                    offset: 0
                  });
                }
              });
            }
            /**
             * Lifecycle hook that is called after a component's
             * content has been fully initialized.
             */

          }, {
            key: "ngAfterContentInit",
            value: function ngAfterContentInit() {
              var _this20 = this;

              this.columnTemplates.changes.subscribe(function (v) {
                return _this20.translateColumns(v);
              });
              this.listenForColumnInputChanges();
            }
            /**
             * Translates the templates to the column objects
             */

          }, {
            key: "translateColumns",
            value: function translateColumns(val) {
              if (val) {
                var arr = val.toArray();

                if (arr.length) {
                  this._internalColumns = translateTemplates(arr);
                  setColumnDefaults(this._internalColumns);
                  this.recalculateColumns();
                  this.sortInternalRows();
                  this.cd.markForCheck();
                }
              }
            }
            /**
             * Creates a map with the data grouped by the user choice of grouping index
             *
             * @param originalArray the original array passed via parameter
             * @param groupByIndex  the index of the column to group the data by
             */

          }, {
            key: "groupArrayBy",
            value: function groupArrayBy(originalArray, groupBy) {
              // create a map to hold groups with their corresponding results
              var map = new Map();
              var i = 0;
              originalArray.forEach(function (item) {
                var key = item[groupBy];

                if (!map.has(key)) {
                  map.set(key, [item]);
                } else {
                  map.get(key).push(item);
                }

                i++;
              });

              var addGroup = function addGroup(key, value) {
                return {
                  key: key,
                  value: value
                };
              }; // convert map back to a simple array of objects


              return Array.from(map, function (x) {
                return addGroup(x[0], x[1]);
              });
            }
            /*
             * Lifecycle hook that is called when Angular dirty checks a directive.
             */

          }, {
            key: "ngDoCheck",
            value: function ngDoCheck() {
              if (this.rowDiffer.diff(this.rows)) {
                if (!this.externalSorting) {
                  this.sortInternalRows();
                } else {
                  this._internalRows = _toConsumableArray(this.rows);
                } // auto group by parent on new update


                this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
                this.recalculatePages();
                this.cd.markForCheck();
              }
            }
            /**
             * Recalc's the sizes of the grid.
             *
             * Updated automatically on changes to:
             *
             *  - Columns
             *  - Rows
             *  - Paging related
             *
             * Also can be manually invoked or upon window resize.
             */

          }, {
            key: "recalculate",
            value: function recalculate() {
              this.recalculateDims();
              this.recalculateColumns();
              this.cd.markForCheck();
            }
            /**
             * Window resize handler to update sizes.
             */

          }, {
            key: "onWindowResize",
            value: function onWindowResize() {
              this.recalculate();
            }
            /**
             * Recalulcates the column widths based on column width
             * distribution mode and scrollbar offsets.
             */

          }, {
            key: "recalculateColumns",
            value: function recalculateColumns() {
              var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._internalColumns;
              var forceIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
              var allowBleed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.scrollbarH;
              if (!columns) return undefined;
              var width = this._innerWidth;

              if (this.scrollbarV) {
                width = width - this.scrollbarHelper.width;
              }

              if (this.columnMode === ColumnMode.force) {
                forceFillColumnWidths(columns, width, forceIdx, allowBleed);
              } else if (this.columnMode === ColumnMode.flex) {
                adjustColumnWidths(columns, width);
              }

              return columns;
            }
            /**
             * Recalculates the dimensions of the table size.
             * Internally calls the page size and row count calcs too.
             *
             */

          }, {
            key: "recalculateDims",
            value: function recalculateDims() {
              var dims = this.dimensionsHelper.getDimensions(this.element);
              this._innerWidth = Math.floor(dims.width);

              if (this.scrollbarV) {
                var height = dims.height;
                if (this.headerHeight) height = height - this.headerHeight;
                if (this.footerHeight) height = height - this.footerHeight;
                this.bodyHeight = height;
              }

              this.recalculatePages();
            }
            /**
             * Recalculates the pages after a update.
             */

          }, {
            key: "recalculatePages",
            value: function recalculatePages() {
              this.pageSize = this.calcPageSize();
              this.rowCount = this.calcRowCount();
            }
            /**
             * Body triggered a page event.
             */

          }, {
            key: "onBodyPage",
            value: function onBodyPage(_ref12) {
              var offset = _ref12.offset;

              // Avoid pagination caming from body events like scroll when the table
              // has no virtualization and the external paging is enable.
              // This means, let's the developer handle pagination by my him(her) self
              if (this.externalPaging && !this.virtualization) {
                return;
              }

              this.offset = offset;
              this.page.emit({
                count: this.count,
                pageSize: this.pageSize,
                limit: this.limit,
                offset: this.offset
              });
            }
            /**
             * The body triggered a scroll event.
             */

          }, {
            key: "onBodyScroll",
            value: function onBodyScroll(event) {
              this._offsetX.next(event.offsetX);

              this.scroll.emit(event);
              this.cd.detectChanges();
            }
            /**
             * The footer triggered a page event.
             */

          }, {
            key: "onFooterPage",
            value: function onFooterPage(event) {
              this.offset = event.page - 1;
              this.bodyComponent.updateOffsetY(this.offset);
              this.page.emit({
                count: this.count,
                pageSize: this.pageSize,
                limit: this.limit,
                offset: this.offset
              });

              if (this.selectAllRowsOnPage) {
                this.selected = [];
                this.select.emit({
                  selected: this.selected
                });
              }
            }
            /**
             * Recalculates the sizes of the page
             */

          }, {
            key: "calcPageSize",
            value: function calcPageSize() {
              var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rows;

              // Keep the page size constant even if the row has been expanded.
              // This is because an expanded row is still considered to be a child of
              // the original row.  Hence calculation would use rowHeight only.
              if (this.scrollbarV && this.virtualization) {
                var size = Math.ceil(this.bodyHeight / this.rowHeight);
                return Math.max(size, 0);
              } // if limit is passed, we are paging


              if (this.limit !== undefined) {
                return this.limit;
              } // otherwise use row length


              if (val) {
                return val.length;
              } // other empty :(


              return 0;
            }
            /**
             * Calculates the row count.
             */

          }, {
            key: "calcRowCount",
            value: function calcRowCount() {
              var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.rows;

              if (!this.externalPaging) {
                if (!val) return 0;

                if (this.groupedRows) {
                  return this.groupedRows.length;
                } else if (this.treeFromRelation != null && this.treeToRelation != null) {
                  return this._internalRows.length;
                } else {
                  return val.length;
                }
              }

              return this.count;
            }
            /**
             * The header triggered a contextmenu event.
             */

          }, {
            key: "onColumnContextmenu",
            value: function onColumnContextmenu(_ref13) {
              var event = _ref13.event,
                  column = _ref13.column;
              this.tableContextmenu.emit({
                event: event,
                type: ContextmenuType.header,
                content: column
              });
            }
            /**
             * The body triggered a contextmenu event.
             */

          }, {
            key: "onRowContextmenu",
            value: function onRowContextmenu(_ref14) {
              var event = _ref14.event,
                  row = _ref14.row;
              this.tableContextmenu.emit({
                event: event,
                type: ContextmenuType.body,
                content: row
              });
            }
            /**
             * The header triggered a column resize event.
             */

          }, {
            key: "onColumnResize",
            value: function onColumnResize(_ref15) {
              var column = _ref15.column,
                  newValue = _ref15.newValue;

              /* Safari/iOS 10.2 workaround */
              if (column === undefined) {
                return;
              }

              var idx;

              var cols = this._internalColumns.map(function (c, i) {
                c = Object.assign({}, c);

                if (c.$$id === column.$$id) {
                  idx = i;
                  c.width = newValue; // set this so we can force the column
                  // width distribution to be to this value

                  c.$$oldWidth = newValue;
                }

                return c;
              });

              this.recalculateColumns(cols, idx);
              this._internalColumns = cols;
              this.resize.emit({
                column: column,
                newValue: newValue
              });
            }
            /**
             * The header triggered a column re-order event.
             */

          }, {
            key: "onColumnReorder",
            value: function onColumnReorder(_ref16) {
              var column = _ref16.column,
                  newValue = _ref16.newValue,
                  prevValue = _ref16.prevValue;

              var cols = this._internalColumns.map(function (c) {
                return Object.assign({}, c);
              });

              if (this.swapColumns) {
                var prevCol = cols[newValue];
                cols[newValue] = column;
                cols[prevValue] = prevCol;
              } else {
                if (newValue > prevValue) {
                  var movedCol = cols[prevValue];

                  for (var i = prevValue; i < newValue; i++) {
                    cols[i] = cols[i + 1];
                  }

                  cols[newValue] = movedCol;
                } else {
                  var _movedCol = cols[prevValue];

                  for (var _i3 = prevValue; _i3 > newValue; _i3--) {
                    cols[_i3] = cols[_i3 - 1];
                  }

                  cols[newValue] = _movedCol;
                }
              }

              this._internalColumns = cols;
              this.reorder.emit({
                column: column,
                newValue: newValue,
                prevValue: prevValue
              });
            }
            /**
             * The header triggered a column sort event.
             */

          }, {
            key: "onColumnSort",
            value: function onColumnSort(event) {
              // clean selected rows
              if (this.selectAllRowsOnPage) {
                this.selected = [];
                this.select.emit({
                  selected: this.selected
                });
              }

              this.sorts = event.sorts; // this could be optimized better since it will resort
              // the rows again on the 'push' detection...

              if (this.externalSorting === false) {
                // don't use normal setter so we don't resort
                this.sortInternalRows();
              } // auto group by parent on new update


              this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation)); // Always go to first page when sorting to see the newly sorted data

              this.offset = 0;
              this.bodyComponent.updateOffsetY(this.offset);
              this.sort.emit(event);
            }
            /**
             * Toggle all row selection
             */

          }, {
            key: "onHeaderSelect",
            value: function onHeaderSelect(event) {
              if (this.bodyComponent && this.selectAllRowsOnPage) {
                // before we splice, chk if we currently have all selected
                var first = this.bodyComponent.indexes.first;
                var last = this.bodyComponent.indexes.last;
                var allSelected = this.selected.length === last - first; // remove all existing either way

                this.selected = []; // do the opposite here

                if (!allSelected) {
                  var _this$selected;

                  (_this$selected = this.selected).push.apply(_this$selected, _toConsumableArray(this._internalRows.slice(first, last)));
                }
              } else {
                // before we splice, chk if we currently have all selected
                var _allSelected = this.selected.length === this.rows.length; // remove all existing either way


                this.selected = []; // do the opposite here

                if (!_allSelected) {
                  var _this$selected2;

                  (_this$selected2 = this.selected).push.apply(_this$selected2, _toConsumableArray(this.rows));
                }
              }

              this.select.emit({
                selected: this.selected
              });
            }
            /**
             * A row was selected from body
             */

          }, {
            key: "onBodySelect",
            value: function onBodySelect(event) {
              this.select.emit(event);
            }
            /**
             * A row was expanded or collapsed for tree
             */

          }, {
            key: "onTreeAction",
            value: function onTreeAction(event) {
              var _this21 = this;

              var row = event.row; // TODO: For duplicated items this will not work

              var rowIndex = this._rows.findIndex(function (r) {
                return r[_this21.treeToRelation] === event.row[_this21.treeToRelation];
              });

              this.treeAction.emit({
                row: row,
                rowIndex: rowIndex
              });
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              this._subscriptions.forEach(function (subscription) {
                return subscription.unsubscribe();
              });
            }
            /**
             * listen for changes to input bindings of all DataTableColumnDirective and
             * trigger the columnTemplates.changes observable to emit
             */

          }, {
            key: "listenForColumnInputChanges",
            value: function listenForColumnInputChanges() {
              var _this22 = this;

              this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(function () {
                if (_this22.columnTemplates) {
                  _this22.columnTemplates.notifyOnChanges();
                }
              }));
            }
          }, {
            key: "sortInternalRows",
            value: function sortInternalRows() {
              this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
            }
          }, {
            key: "rows",
            set: function set(val) {
              this._rows = val;

              if (val) {
                this._internalRows = _toConsumableArray(val);
              } // auto sort on new updates


              if (!this.externalSorting) {
                this.sortInternalRows();
              } // auto group by parent on new update


              this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation)); // recalculate sizes/etc

              this.recalculate();

              if (this._rows && this._groupRowsBy) {
                // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
              }

              this.cd.markForCheck();
            }
            /**
             * Gets the rows.
             */
            ,
            get: function get() {
              return this._rows;
            }
            /**
             * This attribute allows the user to set the name of the column to group the data with
             */

          }, {
            key: "groupRowsBy",
            set: function set(val) {
              if (val) {
                this._groupRowsBy = val;

                if (this._rows && this._groupRowsBy) {
                  // cretes a new array with the data grouped
                  this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
                }
              }
            },
            get: function get() {
              return this._groupRowsBy;
            }
            /**
             * Columns to be displayed.
             */

          }, {
            key: "columns",
            set: function set(val) {
              if (val) {
                this._internalColumns = _toConsumableArray(val);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
              }

              this._columns = val;
            }
            /**
             * Get the columns.
             */
            ,
            get: function get() {
              return this._columns;
            }
            /**
             * The page size to be shown.
             * Default value: `undefined`
             */

          }, {
            key: "limit",
            set: function set(val) {
              this._limit = val; // recalculate sizes/etc

              this.recalculate();
            }
            /**
             * Gets the limit.
             */
            ,
            get: function get() {
              return this._limit;
            }
            /**
             * The total count of all rows.
             * Default value: `0`
             */

          }, {
            key: "count",
            set: function set(val) {
              this._count = val; // recalculate sizes/etc

              this.recalculate();
            }
            /**
             * Gets the count.
             */
            ,
            get: function get() {
              return this._count;
            }
            /**
             * The current offset ( page - 1 ) shown.
             * Default value: `0`
             */

          }, {
            key: "offset",
            set: function set(val) {
              this._offset = val;
            },
            get: function get() {
              return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
            }
            /**
             * CSS class applied if the header height if fixed height.
             */

          }, {
            key: "isFixedHeader",
            get: function get() {
              var headerHeight = this.headerHeight;
              return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
            }
            /**
             * CSS class applied to the root element if
             * the row heights are fixed heights.
             */

          }, {
            key: "isFixedRow",
            get: function get() {
              return this.rowHeight !== 'auto';
            }
            /**
             * CSS class applied to root element if
             * vertical scrolling is enabled.
             */

          }, {
            key: "isVertScroll",
            get: function get() {
              return this.scrollbarV;
            }
            /**
             * CSS class applied to root element if
             * virtualization is enabled.
             */

          }, {
            key: "isVirtualized",
            get: function get() {
              return this.virtualization;
            }
            /**
             * CSS class applied to the root element
             * if the horziontal scrolling is enabled.
             */

          }, {
            key: "isHorScroll",
            get: function get() {
              return this.scrollbarH;
            }
            /**
             * CSS class applied to root element is selectable.
             */

          }, {
            key: "isSelectable",
            get: function get() {
              return this.selectionType !== undefined;
            }
            /**
             * CSS class applied to root is checkbox selection.
             */

          }, {
            key: "isCheckboxSelection",
            get: function get() {
              return this.selectionType === SelectionType.checkbox;
            }
            /**
             * CSS class applied to root if cell selection.
             */

          }, {
            key: "isCellSelection",
            get: function get() {
              return this.selectionType === SelectionType.cell;
            }
            /**
             * CSS class applied to root if single select.
             */

          }, {
            key: "isSingleSelection",
            get: function get() {
              return this.selectionType === SelectionType.single;
            }
            /**
             * CSS class added to root element if mulit select
             */

          }, {
            key: "isMultiSelection",
            get: function get() {
              return this.selectionType === SelectionType.multi;
            }
            /**
             * CSS class added to root element if mulit click select
             */

          }, {
            key: "isMultiClickSelection",
            get: function get() {
              return this.selectionType === SelectionType.multiClick;
            }
            /**
             * Column templates gathered from `ContentChildren`
             * if described in your markup.
             */

          }, {
            key: "columnTemplates",
            set: function set(val) {
              this._columnTemplates = val;
              this.translateColumns(val);
            }
            /**
             * Returns the column templates.
             */
            ,
            get: function get() {
              return this._columnTemplates;
            }
            /**
             * Returns if all rows are selected.
             */

          }, {
            key: "allRowsSelected",
            get: function get() {
              var allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;

              if (this.bodyComponent && this.selectAllRowsOnPage) {
                var indexes = this.bodyComponent.indexes;
                var rowsOnPage = indexes.last - indexes.first;
                allRowsSelected = this.selected.length === rowsOnPage;
              }

              return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
            }
          }]);

          return DatatableComponent;
        }();

        DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
          return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"]('configuration', 8));
        };

        DatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: DatatableComponent,
          selectors: [["ngx-datatable"]],
          contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailDirective, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderDirective, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DatatableFooterDirective, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, false);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
            }
          },
          viewQuery: function DatatableComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](DataTableBodyComponent, true);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](DataTableHeaderComponent, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
            }
          },
          hostAttrs: [1, "ngx-datatable"],
          hostVars: 22,
          hostBindings: function DatatableComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() {
                return ctx.onWindowResize();
              }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
            }
          },
          inputs: {
            selected: "selected",
            scrollbarV: "scrollbarV",
            scrollbarH: "scrollbarH",
            rowHeight: "rowHeight",
            columnMode: "columnMode",
            headerHeight: "headerHeight",
            footerHeight: "footerHeight",
            externalPaging: "externalPaging",
            externalSorting: "externalSorting",
            loadingIndicator: "loadingIndicator",
            reorderable: "reorderable",
            swapColumns: "swapColumns",
            sortType: "sortType",
            sorts: "sorts",
            cssClasses: "cssClasses",
            messages: "messages",
            groupExpansionDefault: "groupExpansionDefault",
            selectAllRowsOnPage: "selectAllRowsOnPage",
            virtualization: "virtualization",
            summaryRow: "summaryRow",
            summaryHeight: "summaryHeight",
            summaryPosition: "summaryPosition",
            rowIdentity: "rowIdentity",
            rows: "rows",
            groupedRows: "groupedRows",
            groupRowsBy: "groupRowsBy",
            columns: "columns",
            limit: "limit",
            count: "count",
            offset: "offset",
            targetMarkerTemplate: "targetMarkerTemplate",
            selectionType: "selectionType",
            rowClass: "rowClass",
            selectCheck: "selectCheck",
            displayCheck: "displayCheck",
            trackByProp: "trackByProp",
            treeFromRelation: "treeFromRelation",
            treeToRelation: "treeToRelation"
          },
          outputs: {
            scroll: "scroll",
            activate: "activate",
            select: "select",
            sort: "sort",
            page: "page",
            reorder: "reorder",
            resize: "resize",
            tableContextmenu: "tableContextmenu",
            treeAction: "treeAction"
          },
          decls: 5,
          vars: 34,
          consts: [["visibilityObserver", "", 3, "visible"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], [3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]],
          template: function DatatableComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() {
                return ctx.recalculate();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 17, "datatable-header", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "datatable-body", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) {
                return ctx.onBodyPage($event);
              })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) {
                return ctx.activate.emit($event);
              })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) {
                return ctx.onRowContextmenu($event);
              })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) {
                return ctx.onBodySelect($event);
              })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) {
                return ctx.onBodyScroll($event);
              })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) {
                return ctx.onTreeAction($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.headerHeight);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerHeight);
            }
          },
          directives: function directives() {
            return [VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DataTableBodyComponent, DataTableHeaderComponent, DataTableFooterComponent];
          },
          pipes: function pipes() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]];
          },
          styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate3d(0,0,0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:0}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:0}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:0}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"],
          encapsulation: 2,
          changeDetection: 0
        });
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([throttleable(5)], DatatableComponent.prototype, "onWindowResize", null);
        return DatatableComponent;
      }();

      var DataTableHeaderCellComponent = /*@__PURE__*/function () {
        var DataTableHeaderCellComponent = /*#__PURE__*/function () {
          function DataTableHeaderCellComponent(cd) {
            _classCallCheck(this, DataTableHeaderCellComponent);

            this.cd = cd;
            this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
            this.sortFn = this.onSort.bind(this);
            this.selectFn = this.select.emit.bind(this.select);
            this.cellContext = {
              column: this.column,
              sortDir: this.sortDir,
              sortFn: this.sortFn,
              allRowsSelected: this.allRowsSelected,
              selectFn: this.selectFn
            };
          }

          _createClass(DataTableHeaderCellComponent, [{
            key: "onContextmenu",
            value: function onContextmenu($event) {
              this.columnContextmenu.emit({
                event: $event,
                column: this.column
              });
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.sortClass = this.calcSortClass(this.sortDir);
            }
          }, {
            key: "calcSortDir",
            value: function calcSortDir(sorts) {
              var _this23 = this;

              if (sorts && this.column) {
                var sort = sorts.find(function (s) {
                  return s.prop === _this23.column.prop;
                });
                if (sort) return sort.dir;
              }
            }
          }, {
            key: "onSort",
            value: function onSort() {
              if (!this.column.sortable) return;
              var newValue = nextSortDir(this.sortType, this.sortDir);
              this.sort.emit({
                column: this.column,
                prevValue: this.sortDir,
                newValue: newValue
              });
            }
          }, {
            key: "calcSortClass",
            value: function calcSortClass(sortDir) {
              if (!this.cellContext.column.sortable) return;

              if (sortDir === SortDirection.asc) {
                return "sort-btn sort-asc ".concat(this.sortAscendingIcon);
              } else if (sortDir === SortDirection.desc) {
                return "sort-btn sort-desc ".concat(this.sortDescendingIcon);
              } else {
                return "sort-btn ".concat(this.sortUnsetIcon);
              }
            }
          }, {
            key: "allRowsSelected",
            set: function set(value) {
              this._allRowsSelected = value;
              this.cellContext.allRowsSelected = value;
            },
            get: function get() {
              return this._allRowsSelected;
            }
          }, {
            key: "column",
            set: function set(column) {
              this._column = column;
              this.cellContext.column = column;
              this.cd.markForCheck();
            },
            get: function get() {
              return this._column;
            }
          }, {
            key: "sorts",
            set: function set(val) {
              this._sorts = val;
              this.sortDir = this.calcSortDir(val);
              this.cellContext.sortDir = this.sortDir;
              this.sortClass = this.calcSortClass(this.sortDir);
              this.cd.markForCheck();
            },
            get: function get() {
              return this._sorts;
            }
          }, {
            key: "columnCssClasses",
            get: function get() {
              var cls = 'datatable-header-cell';
              if (this.column.sortable) cls += ' sortable';
              if (this.column.resizeable) cls += ' resizeable';

              if (this.column.headerClass) {
                if (typeof this.column.headerClass === 'string') {
                  cls += ' ' + this.column.headerClass;
                } else if (typeof this.column.headerClass === 'function') {
                  var res = this.column.headerClass({
                    column: this.column
                  });

                  if (typeof res === 'string') {
                    cls += res;
                  } else if (typeof res === 'object') {
                    var keys = Object.keys(res);

                    for (var _i4 = 0, _keys = keys; _i4 < _keys.length; _i4++) {
                      var k = _keys[_i4];
                      if (res[k] === true) cls += " ".concat(k);
                    }
                  }
                }
              }

              var sortDir = this.sortDir;

              if (sortDir) {
                cls += " sort-active sort-".concat(sortDir);
              }

              return cls;
            }
          }, {
            key: "name",
            get: function get() {
              // guaranteed to have a value by setColumnDefaults() in column-helper.ts
              return this.column.headerTemplate === undefined ? this.column.name : undefined;
            }
          }, {
            key: "minWidth",
            get: function get() {
              return this.column.minWidth;
            }
          }, {
            key: "maxWidth",
            get: function get() {
              return this.column.maxWidth;
            }
          }, {
            key: "width",
            get: function get() {
              return this.column.width;
            }
          }, {
            key: "isCheckboxable",
            get: function get() {
              return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
            }
          }]);

          return DataTableHeaderCellComponent;
        }();

        DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) {
          return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
        };

        DataTableHeaderCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: DataTableHeaderCellComponent,
          selectors: [["datatable-header-cell"]],
          hostAttrs: [1, "datatable-header-cell"],
          hostVars: 11,
          hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) {
                return ctx.onContextmenu($event);
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("title", ctx.name);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.columnCssClasses);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px")("height", ctx.headerHeight, "px");
            }
          },
          inputs: {
            allRowsSelected: "allRowsSelected",
            column: "column",
            sorts: "sorts",
            sortType: "sortType",
            sortAscendingIcon: "sortAscendingIcon",
            sortDescendingIcon: "sortDescendingIcon",
            sortUnsetIcon: "sortUnsetIcon",
            isTarget: "isTarget",
            targetMarkerTemplate: "targetMarkerTemplate",
            targetMarkerContext: "targetMarkerContext",
            selectionType: "selectionType",
            headerHeight: "headerHeight"
          },
          outputs: {
            sort: "sort",
            select: "select",
            columnContextmenu: "columnContextmenu"
          },
          decls: 6,
          vars: 6,
          consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]],
          template: function DataTableHeaderCellComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, undefined, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, undefined, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() {
                return ctx.onSort();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTarget);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.sortClass);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
          encapsulation: 2,
          changeDetection: 0
        });
        return DataTableHeaderCellComponent;
      }();

      var DataTableFooterComponent = /*@__PURE__*/function () {
        var DataTableFooterComponent = /*#__PURE__*/function () {
          function DataTableFooterComponent() {
            _classCallCheck(this, DataTableFooterComponent);

            this.selectedCount = 0;
            this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          }

          _createClass(DataTableFooterComponent, [{
            key: "isVisible",
            get: function get() {
              return this.rowCount / this.pageSize > 1;
            }
          }, {
            key: "curPage",
            get: function get() {
              return this.offset + 1;
            }
          }]);

          return DataTableFooterComponent;
        }();

        DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) {
          return new (t || DataTableFooterComponent)();
        };

        DataTableFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: DataTableFooterComponent,
          selectors: [["datatable-footer"]],
          hostAttrs: [1, "datatable-footer"],
          inputs: {
            selectedCount: "selectedCount",
            footerHeight: "footerHeight",
            rowCount: "rowCount",
            pageSize: "pageSize",
            offset: "offset",
            pagerLeftArrowIcon: "pagerLeftArrowIcon",
            pagerRightArrowIcon: "pagerRightArrowIcon",
            pagerPreviousIcon: "pagerPreviousIcon",
            pagerNextIcon: "pagerNextIcon",
            totalMessage: "totalMessage",
            footerTemplate: "footerTemplate",
            selectedMessage: "selectedMessage"
          },
          outputs: {
            page: "page"
          },
          decls: 4,
          vars: 8,
          consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]],
          template: function DataTableFooterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, undefined, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, ctx.selectedMessage));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerTemplate);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
            }
          },
          directives: function directives() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], DataTablePagerComponent];
          },
          encapsulation: 2,
          changeDetection: 0
        });
        return DataTableFooterComponent;
      }();

      var DataTablePagerComponent = /*@__PURE__*/function () {
        var DataTablePagerComponent = /*#__PURE__*/function () {
          function DataTablePagerComponent() {
            _classCallCheck(this, DataTablePagerComponent);

            this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this._count = 0;
            this._page = 1;
            this._size = 0;
          }

          _createClass(DataTablePagerComponent, [{
            key: "canPrevious",
            value: function canPrevious() {
              return this.page > 1;
            }
          }, {
            key: "canNext",
            value: function canNext() {
              return this.page < this.totalPages;
            }
          }, {
            key: "prevPage",
            value: function prevPage() {
              this.selectPage(this.page - 1);
            }
          }, {
            key: "nextPage",
            value: function nextPage() {
              this.selectPage(this.page + 1);
            }
          }, {
            key: "selectPage",
            value: function selectPage(page) {
              if (page > 0 && page <= this.totalPages && page !== this.page) {
                this.page = page;
                this.change.emit({
                  page: page
                });
              }
            }
          }, {
            key: "calcPages",
            value: function calcPages(page) {
              var pages = [];
              var startPage = 1;
              var endPage = this.totalPages;
              var maxSize = 5;
              var isMaxSized = maxSize < this.totalPages;
              page = page || this.page;

              if (isMaxSized) {
                startPage = page - Math.floor(maxSize / 2);
                endPage = page + Math.floor(maxSize / 2);

                if (startPage < 1) {
                  startPage = 1;
                  endPage = Math.min(startPage + maxSize - 1, this.totalPages);
                } else if (endPage > this.totalPages) {
                  startPage = Math.max(this.totalPages - maxSize + 1, 1);
                  endPage = this.totalPages;
                }
              }

              for (var num = startPage; num <= endPage; num++) {
                pages.push({
                  number: num,
                  text: num
                });
              }

              return pages;
            }
          }, {
            key: "size",
            set: function set(val) {
              this._size = val;
              this.pages = this.calcPages();
            },
            get: function get() {
              return this._size;
            }
          }, {
            key: "count",
            set: function set(val) {
              this._count = val;
              this.pages = this.calcPages();
            },
            get: function get() {
              return this._count;
            }
          }, {
            key: "page",
            set: function set(val) {
              this._page = val;
              this.pages = this.calcPages();
            },
            get: function get() {
              return this._page;
            }
          }, {
            key: "totalPages",
            get: function get() {
              var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
              return Math.max(count || 0, 1);
            }
          }]);

          return DataTablePagerComponent;
        }();

        DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) {
          return new (t || DataTablePagerComponent)();
        };

        DataTablePagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: DataTablePagerComponent,
          selectors: [["datatable-pager"]],
          hostAttrs: [1, "datatable-pager"],
          inputs: {
            size: "size",
            count: "count",
            page: "page",
            pagerLeftArrowIcon: "pagerLeftArrowIcon",
            pagerRightArrowIcon: "pagerRightArrowIcon",
            pagerPreviousIcon: "pagerPreviousIcon",
            pagerNextIcon: "pagerNextIcon"
          },
          outputs: {
            change: "change"
          },
          decls: 14,
          vars: 21,
          consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]],
          template: function DataTablePagerComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() {
                return ctx.selectPage(1);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() {
                return ctx.prevPage();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() {
                return ctx.nextPage();
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() {
                return ctx.selectPage(ctx.totalPages);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canPrevious());

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerPreviousIcon);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canPrevious());

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canNext());

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerRightArrowIcon);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", !ctx.canNext());

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.pagerNextIcon);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
          encapsulation: 2,
          changeDetection: 0
        });
        return DataTablePagerComponent;
      }();

      var ProgressBarComponent = /*@__PURE__*/function () {
        var ProgressBarComponent = function ProgressBarComponent() {
          _classCallCheck(this, ProgressBarComponent);
        };

        ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
          return new (t || ProgressBarComponent)();
        };

        ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: ProgressBarComponent,
          selectors: [["datatable-progress"]],
          decls: 3,
          vars: 0,
          consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]],
          template: function ProgressBarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
          },
          encapsulation: 2,
          changeDetection: 0
        });
        return ProgressBarComponent;
      }();

      var Keys = /*@__PURE__*/function (Keys) {
        Keys[Keys["up"] = 38] = "up";
        Keys[Keys["down"] = 40] = "down";
        Keys[Keys["return"] = 13] = "return";
        Keys[Keys["escape"] = 27] = "escape";
        Keys[Keys["left"] = 37] = "left";
        Keys[Keys["right"] = 39] = "right";
        return Keys;
      }({});

      var DataTableBodyRowComponent = /*@__PURE__*/function () {
        var DataTableBodyRowComponent = /*#__PURE__*/function () {
          function DataTableBodyRowComponent(differs, scrollbarHelper, cd, element) {
            _classCallCheck(this, DataTableBodyRowComponent);

            this.differs = differs;
            this.scrollbarHelper = scrollbarHelper;
            this.cd = cd;
            this.treeStatus = 'collapsed';
            this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this._groupStyles = {
              left: {},
              center: {},
              right: {}
            };
            this._element = element.nativeElement;
            this._rowDiffer = differs.find({}).create();
          }

          _createClass(DataTableBodyRowComponent, [{
            key: "ngDoCheck",
            value: function ngDoCheck() {
              if (this._rowDiffer.diff(this.row)) {
                this.cd.markForCheck();
              }
            }
          }, {
            key: "trackByGroups",
            value: function trackByGroups(index, colGroup) {
              return colGroup.type;
            }
          }, {
            key: "columnTrackingFn",
            value: function columnTrackingFn(index, column) {
              return column.$$id;
            }
          }, {
            key: "buildStylesByGroup",
            value: function buildStylesByGroup() {
              this._groupStyles.left = this.calcStylesByGroup('left');
              this._groupStyles.center = this.calcStylesByGroup('center');
              this._groupStyles.right = this.calcStylesByGroup('right');
              this.cd.markForCheck();
            }
          }, {
            key: "calcStylesByGroup",
            value: function calcStylesByGroup(group) {
              var widths = this._columnGroupWidths;
              var offsetX = this.offsetX;
              var styles = {
                width: "".concat(widths[group], "px")
              };

              if (group === 'left') {
                translateXY(styles, offsetX, 0);
              } else if (group === 'right') {
                var bodyWidth = parseInt(this.innerWidth + '', 0);
                var totalDiff = widths.total - bodyWidth;
                var offsetDiff = totalDiff - offsetX;
                var offset = (offsetDiff + this.scrollbarHelper.width) * -1;
                translateXY(styles, offset, 0);
              }

              return styles;
            }
          }, {
            key: "onActivate",
            value: function onActivate(event, index) {
              event.cellIndex = index;
              event.rowElement = this._element;
              this.activate.emit(event);
            }
          }, {
            key: "onKeyDown",
            value: function onKeyDown(event) {
              var keyCode = event.keyCode;
              var isTargetRow = event.target === this._element;
              var isAction = keyCode === Keys["return"] || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;

              if (isAction && isTargetRow) {
                event.preventDefault();
                event.stopPropagation();
                this.activate.emit({
                  type: 'keydown',
                  event: event,
                  row: this.row,
                  rowElement: this._element
                });
              }
            }
          }, {
            key: "onMouseenter",
            value: function onMouseenter(event) {
              this.activate.emit({
                type: 'mouseenter',
                event: event,
                row: this.row,
                rowElement: this._element
              });
            }
          }, {
            key: "recalculateColumns",
            value: function recalculateColumns() {
              var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.columns;
              this._columns = val;
              var colsByPin = columnsByPin(this._columns);
              this._columnsByPin = columnsByPinArr(this._columns);
              this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
            }
          }, {
            key: "onTreeAction",
            value: function onTreeAction() {
              this.treeAction.emit();
            }
          }, {
            key: "columns",
            set: function set(val) {
              this._columns = val;
              this.recalculateColumns(val);
              this.buildStylesByGroup();
            },
            get: function get() {
              return this._columns;
            }
          }, {
            key: "innerWidth",
            set: function set(val) {
              if (this._columns) {
                var colByPin = columnsByPin(this._columns);
                this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
              }

              this._innerWidth = val;
              this.recalculateColumns();
              this.buildStylesByGroup();
            },
            get: function get() {
              return this._innerWidth;
            }
          }, {
            key: "offsetX",
            set: function set(val) {
              this._offsetX = val;
              this.buildStylesByGroup();
            },
            get: function get() {
              return this._offsetX;
            }
          }, {
            key: "cssClass",
            get: function get() {
              var cls = 'datatable-body-row';

              if (this.isSelected) {
                cls += ' active';
              }

              if (this.rowIndex % 2 !== 0) {
                cls += ' datatable-row-odd';
              }

              if (this.rowIndex % 2 === 0) {
                cls += ' datatable-row-even';
              }

              if (this.rowClass) {
                var res = this.rowClass(this.row);

                if (typeof res === 'string') {
                  cls += " ".concat(res);
                } else if (typeof res === 'object') {
                  var keys = Object.keys(res);

                  for (var _i5 = 0, _keys2 = keys; _i5 < _keys2.length; _i5++) {
                    var k = _keys2[_i5];

                    if (res[k] === true) {
                      cls += " ".concat(k);
                    }
                  }
                }
              }

              return cls;
            }
          }, {
            key: "columnsTotalWidths",
            get: function get() {
              return this._columnGroupWidths.total;
            }
          }]);

          return DataTableBodyRowComponent;
        }();

        DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) {
          return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
        };

        DataTableBodyRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: DataTableBodyRowComponent,
          selectors: [["datatable-body-row"]],
          hostVars: 6,
          hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) {
                return ctx.onKeyDown($event);
              })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) {
                return ctx.onMouseenter($event);
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.cssClass);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.columnsTotalWidths, "px")("height", ctx.rowHeight, "px");
            }
          },
          inputs: {
            treeStatus: "treeStatus",
            columns: "columns",
            innerWidth: "innerWidth",
            offsetX: "offsetX",
            expanded: "expanded",
            rowClass: "rowClass",
            row: "row",
            group: "group",
            isSelected: "isSelected",
            rowIndex: "rowIndex",
            displayCheck: "displayCheck",
            rowHeight: "rowHeight"
          },
          outputs: {
            activate: "activate",
            treeAction: "treeAction"
          },
          decls: 1,
          vars: 2,
          consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]],
          template: function DataTableBodyRowComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
            }
          },
          directives: function directives() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], DataTableBodyCellComponent];
          },
          encapsulation: 2,
          changeDetection: 0
        });
        return DataTableBodyRowComponent;
      }();

      var DataTableRowWrapperComponent = /*@__PURE__*/function () {
        var DataTableRowWrapperComponent = /*#__PURE__*/function () {
          function DataTableRowWrapperComponent(cd, differs) {
            _classCallCheck(this, DataTableRowWrapperComponent);

            this.cd = cd;
            this.differs = differs;
            this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
            this.groupContext = {
              group: this.row,
              expanded: this.expanded,
              rowIndex: this.rowIndex
            };
            this.rowContext = {
              row: this.row,
              expanded: this.expanded,
              rowIndex: this.rowIndex
            };
            this._expanded = false;
            this.rowDiffer = differs.find({}).create();
          }

          _createClass(DataTableRowWrapperComponent, [{
            key: "ngDoCheck",
            value: function ngDoCheck() {
              if (this.rowDiffer.diff(this.row)) {
                this.rowContext.row = this.row;
                this.groupContext.group = this.row;
                this.cd.markForCheck();
              }
            }
          }, {
            key: "onContextmenu",
            value: function onContextmenu($event) {
              this.rowContextmenu.emit({
                event: $event,
                row: this.row
              });
            }
          }, {
            key: "getGroupHeaderStyle",
            value: function getGroupHeaderStyle() {
              var styles = {};
              styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
              styles['backface-visibility'] = 'hidden';
              styles['width'] = this.innerWidth;
              return styles;
            }
          }, {
            key: "rowIndex",
            set: function set(val) {
              this._rowIndex = val;
              this.rowContext.rowIndex = val;
              this.groupContext.rowIndex = val;
              this.cd.markForCheck();
            },
            get: function get() {
              return this._rowIndex;
            }
          }, {
            key: "expanded",
            set: function set(val) {
              this._expanded = val;
              this.groupContext.expanded = val;
              this.rowContext.expanded = val;
              this.cd.markForCheck();
            },
            get: function get() {
              return this._expanded;
            }
          }]);

          return DataTableRowWrapperComponent;
        }();

        DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) {
          return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"]));
        };

        DataTableRowWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: DataTableRowWrapperComponent,
          selectors: [["datatable-row-wrapper"]],
          hostAttrs: [1, "datatable-row-wrapper"],
          hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) {
                return ctx.onContextmenu($event);
              });
            }
          },
          inputs: {
            rowIndex: "rowIndex",
            expanded: "expanded",
            innerWidth: "innerWidth",
            rowDetail: "rowDetail",
            groupHeader: "groupHeader",
            offsetX: "offsetX",
            detailRowHeight: "detailRowHeight",
            row: "row",
            groupedRows: "groupedRows"
          },
          outputs: {
            rowContextmenu: "rowContextmenu"
          },
          ngContentSelectors: _c0,
          decls: 3,
          vars: 3,
          consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]],
          template: function DataTableRowWrapperComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableRowWrapperComponent_1_Template, 1, 0, undefined, 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
          encapsulation: 2,
          changeDetection: 0
        });
        return DataTableRowWrapperComponent;
      }();

      var DataTableBodyCellComponent = /*@__PURE__*/function () {
        var DataTableBodyCellComponent = /*#__PURE__*/function () {
          function DataTableBodyCellComponent(element, cd) {
            _classCallCheck(this, DataTableBodyCellComponent);

            this.cd = cd;
            this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.isFocused = false;
            this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
            this.activateFn = this.activate.emit.bind(this.activate);
            this.cellContext = {
              onCheckboxChangeFn: this.onCheckboxChangeFn,
              activateFn: this.activateFn,
              row: this.row,
              group: this.group,
              value: this.value,
              column: this.column,
              rowHeight: this.rowHeight,
              isSelected: this.isSelected,
              rowIndex: this.rowIndex,
              treeStatus: this.treeStatus,
              onTreeAction: this.onTreeAction.bind(this)
            };
            this._element = element.nativeElement;
          }

          _createClass(DataTableBodyCellComponent, [{
            key: "ngDoCheck",
            value: function ngDoCheck() {
              this.checkValueUpdates();
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this.cellTemplate) {
                this.cellTemplate.clear();
              }
            }
          }, {
            key: "checkValueUpdates",
            value: function checkValueUpdates() {
              var value = '';

              if (!this.row || !this.column) {
                value = '';
              } else {
                var val = this.column.$$valueGetter(this.row, this.column.prop);
                var userPipe = this.column.pipe;

                if (userPipe) {
                  value = userPipe.transform(val);
                } else if (value !== undefined) {
                  value = val;
                }
              }

              if (this.value !== value) {
                this.value = value;
                this.cellContext.value = value;
                this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
                this.cd.markForCheck();
              }
            }
          }, {
            key: "onFocus",
            value: function onFocus() {
              this.isFocused = true;
            }
          }, {
            key: "onBlur",
            value: function onBlur() {
              this.isFocused = false;
            }
          }, {
            key: "onClick",
            value: function onClick(event) {
              this.activate.emit({
                type: 'click',
                event: event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
              });
            }
          }, {
            key: "onDblClick",
            value: function onDblClick(event) {
              this.activate.emit({
                type: 'dblclick',
                event: event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
              });
            }
          }, {
            key: "onKeyDown",
            value: function onKeyDown(event) {
              var keyCode = event.keyCode;
              var isTargetCell = event.target === this._element;
              var isAction = keyCode === Keys["return"] || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;

              if (isAction && isTargetCell) {
                event.preventDefault();
                event.stopPropagation();
                this.activate.emit({
                  type: 'keydown',
                  event: event,
                  row: this.row,
                  group: this.group,
                  rowHeight: this.rowHeight,
                  column: this.column,
                  value: this.value,
                  cellElement: this._element
                });
              }
            }
          }, {
            key: "onCheckboxChange",
            value: function onCheckboxChange(event) {
              this.activate.emit({
                type: 'checkbox',
                event: event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element,
                treeStatus: 'collapsed'
              });
            }
          }, {
            key: "calcSortDir",
            value: function calcSortDir(sorts) {
              var _this24 = this;

              if (!sorts) {
                return;
              }

              var sort = sorts.find(function (s) {
                return s.prop === _this24.column.prop;
              });

              if (sort) {
                return sort.dir;
              }
            }
          }, {
            key: "stripHtml",
            value: function stripHtml(html) {
              if (!html.replace) {
                return html;
              }

              return html.replace(/<\/?[^>]+(>|$)/g, '');
            }
          }, {
            key: "onTreeAction",
            value: function onTreeAction() {
              this.treeAction.emit(this.row);
            }
          }, {
            key: "calcLeftMargin",
            value: function calcLeftMargin(column, row) {
              var levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
              return column.isTreeColumn ? row.level * levelIndent : 0;
            }
          }, {
            key: "group",
            set: function set(group) {
              this._group = group;
              this.cellContext.group = group;
              this.checkValueUpdates();
              this.cd.markForCheck();
            },
            get: function get() {
              return this._group;
            }
          }, {
            key: "rowHeight",
            set: function set(val) {
              this._rowHeight = val;
              this.cellContext.rowHeight = val;
              this.checkValueUpdates();
              this.cd.markForCheck();
            },
            get: function get() {
              return this._rowHeight;
            }
          }, {
            key: "isSelected",
            set: function set(val) {
              this._isSelected = val;
              this.cellContext.isSelected = val;
              this.cd.markForCheck();
            },
            get: function get() {
              return this._isSelected;
            }
          }, {
            key: "expanded",
            set: function set(val) {
              this._expanded = val;
              this.cellContext.expanded = val;
              this.cd.markForCheck();
            },
            get: function get() {
              return this._expanded;
            }
          }, {
            key: "rowIndex",
            set: function set(val) {
              this._rowIndex = val;
              this.cellContext.rowIndex = val;
              this.checkValueUpdates();
              this.cd.markForCheck();
            },
            get: function get() {
              return this._rowIndex;
            }
          }, {
            key: "column",
            set: function set(column) {
              this._column = column;
              this.cellContext.column = column;
              this.checkValueUpdates();
              this.cd.markForCheck();
            },
            get: function get() {
              return this._column;
            }
          }, {
            key: "row",
            set: function set(row) {
              this._row = row;
              this.cellContext.row = row;
              this.checkValueUpdates();
              this.cd.markForCheck();
            },
            get: function get() {
              return this._row;
            }
          }, {
            key: "sorts",
            set: function set(val) {
              this._sorts = val;
              this.calcSortDir = this.calcSortDir(val);
            },
            get: function get() {
              return this._sorts;
            }
          }, {
            key: "treeStatus",
            set: function set(status) {
              if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
                this._treeStatus = 'collapsed';
              } else {
                this._treeStatus = status;
              }

              this.cellContext.treeStatus = this._treeStatus;
              this.checkValueUpdates();
              this.cd.markForCheck();
            },
            get: function get() {
              return this._treeStatus;
            }
          }, {
            key: "columnCssClasses",
            get: function get() {
              var cls = 'datatable-body-cell';

              if (this.column.cellClass) {
                if (typeof this.column.cellClass === 'string') {
                  cls += ' ' + this.column.cellClass;
                } else if (typeof this.column.cellClass === 'function') {
                  var res = this.column.cellClass({
                    row: this.row,
                    group: this.group,
                    column: this.column,
                    value: this.value,
                    rowHeight: this.rowHeight
                  });

                  if (typeof res === 'string') {
                    cls += ' ' + res;
                  } else if (typeof res === 'object') {
                    var keys = Object.keys(res);

                    for (var _i6 = 0, _keys3 = keys; _i6 < _keys3.length; _i6++) {
                      var k = _keys3[_i6];

                      if (res[k] === true) {
                        cls += " ".concat(k);
                      }
                    }
                  }
                }
              }

              if (!this.sortDir) {
                cls += ' sort-active';
              }

              if (this.isFocused) {
                cls += ' active';
              }

              if (this.sortDir === SortDirection.asc) {
                cls += ' sort-asc';
              }

              if (this.sortDir === SortDirection.desc) {
                cls += ' sort-desc';
              }

              return cls;
            }
          }, {
            key: "width",
            get: function get() {
              return this.column.width;
            }
          }, {
            key: "minWidth",
            get: function get() {
              return this.column.minWidth;
            }
          }, {
            key: "maxWidth",
            get: function get() {
              return this.column.maxWidth;
            }
          }, {
            key: "height",
            get: function get() {
              var height = this.rowHeight;

              if (isNaN(height)) {
                return height;
              }

              return height + 'px';
            }
          }]);

          return DataTableBodyCellComponent;
        }();

        DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) {
          return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
        };

        DataTableBodyCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: DataTableBodyCellComponent,
          selectors: [["datatable-body-cell"]],
          viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
            }
          },
          hostVars: 10,
          hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() {
                return ctx.onFocus();
              })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() {
                return ctx.onBlur();
              })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) {
                return ctx.onClick($event);
              })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) {
                return ctx.onDblClick($event);
              })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) {
                return ctx.onKeyDown($event);
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.columnCssClasses);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
            }
          },
          inputs: {
            group: "group",
            rowHeight: "rowHeight",
            isSelected: "isSelected",
            expanded: "expanded",
            rowIndex: "rowIndex",
            column: "column",
            row: "row",
            sorts: "sorts",
            treeStatus: "treeStatus",
            displayCheck: "displayCheck"
          },
          outputs: {
            activate: "activate",
            treeAction: "treeAction"
          },
          decls: 5,
          vars: 6,
          consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]],
          template: function DataTableBodyCellComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, undefined, 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
          encapsulation: 2,
          changeDetection: 0
        });
        return DataTableBodyCellComponent;
      }();

      function selectRows(selected, row, comparefn) {
        var selectedIndex = comparefn(row, selected);

        if (selectedIndex > -1) {
          selected.splice(selectedIndex, 1);
        } else {
          selected.push(row);
        }

        return selected;
      }

      function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
        var reverse = index < prevIndex;

        for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          var greater = i >= prevIndex && i <= index;
          var lesser = i <= prevIndex && i >= index;
          var range = {
            start: 0,
            end: 0
          };

          if (reverse) {
            range = {
              start: index,
              end: prevIndex
            };
          } else {
            range = {
              start: prevIndex,
              end: index + 1
            };
          }

          if (reverse && lesser || !reverse && greater) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
              selected.push(row);
            }
          }
        }

        return selected;
      }

      var DataTableSelectionComponent = /*@__PURE__*/function () {
        var DataTableSelectionComponent = /*#__PURE__*/function () {
          function DataTableSelectionComponent() {
            _classCallCheck(this, DataTableSelectionComponent);

            this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          }

          _createClass(DataTableSelectionComponent, [{
            key: "selectRow",
            value: function selectRow(event, index, row) {
              var _this$selected3;

              if (!this.selectEnabled) return;
              var chkbox = this.selectionType === SelectionType.checkbox;
              var multi = this.selectionType === SelectionType.multi;
              var multiClick = this.selectionType === SelectionType.multiClick;
              var selected = [];

              if (multi || chkbox || multiClick) {
                if (event.shiftKey) {
                  selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
                } else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                  selected = selectRows(_toConsumableArray(this.selected), row, this.getRowSelectedIdx.bind(this));
                } else {
                  selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
                }
              } else {
                selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
              }

              if (typeof this.selectCheck === 'function') {
                selected = selected.filter(this.selectCheck.bind(this));
              }

              this.selected.splice(0, this.selected.length);

              (_this$selected3 = this.selected).push.apply(_this$selected3, _toConsumableArray(selected));

              this.prevIndex = index;
              this.select.emit({
                selected: selected
              });
            }
          }, {
            key: "onActivate",
            value: function onActivate(model, index) {
              var type = model.type,
                  event = model.event,
                  row = model.row;
              var chkbox = this.selectionType === SelectionType.checkbox;
              var select = !chkbox && (type === 'click' || type === 'dblclick') || chkbox && type === 'checkbox';

              if (select) {
                this.selectRow(event, index, row);
              } else if (type === 'keydown') {
                if (event.keyCode === Keys["return"]) {
                  this.selectRow(event, index, row);
                } else {
                  this.onKeyboardFocus(model);
                }
              }

              this.activate.emit(model);
            }
          }, {
            key: "onKeyboardFocus",
            value: function onKeyboardFocus(model) {
              var keyCode = model.event.keyCode;
              var shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;

              if (shouldFocus) {
                var isCellSelection = this.selectionType === SelectionType.cell;

                if (!model.cellElement || !isCellSelection) {
                  this.focusRow(model.rowElement, keyCode);
                } else if (isCellSelection) {
                  this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
                }
              }
            }
          }, {
            key: "focusRow",
            value: function focusRow(rowElement, keyCode) {
              var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
              if (nextRowElement) nextRowElement.focus();
            }
          }, {
            key: "getPrevNextRow",
            value: function getPrevNextRow(rowElement, keyCode) {
              var parentElement = rowElement.parentElement;

              if (parentElement) {
                var focusElement;

                if (keyCode === Keys.up) {
                  focusElement = parentElement.previousElementSibling;
                } else if (keyCode === Keys.down) {
                  focusElement = parentElement.nextElementSibling;
                }

                if (focusElement && focusElement.children.length) {
                  return focusElement.children[0];
                }
              }
            }
          }, {
            key: "focusCell",
            value: function focusCell(cellElement, rowElement, keyCode, cellIndex) {
              var nextCellElement;

              if (keyCode === Keys.left) {
                nextCellElement = cellElement.previousElementSibling;
              } else if (keyCode === Keys.right) {
                nextCellElement = cellElement.nextElementSibling;
              } else if (keyCode === Keys.up || keyCode === Keys.down) {
                var nextRowElement = this.getPrevNextRow(rowElement, keyCode);

                if (nextRowElement) {
                  var children = nextRowElement.getElementsByClassName('datatable-body-cell');
                  if (children.length) nextCellElement = children[cellIndex];
                }
              }

              if (nextCellElement) nextCellElement.focus();
            }
          }, {
            key: "getRowSelected",
            value: function getRowSelected(row) {
              return this.getRowSelectedIdx(row, this.selected) > -1;
            }
          }, {
            key: "getRowSelectedIdx",
            value: function getRowSelectedIdx(row, selected) {
              var _this25 = this;

              if (!selected || !selected.length) return -1;
              var rowId = this.rowIdentity(row);
              return selected.findIndex(function (r) {
                var id = _this25.rowIdentity(r);

                return id === rowId;
              });
            }
          }]);

          return DataTableSelectionComponent;
        }();

        DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) {
          return new (t || DataTableSelectionComponent)();
        };

        DataTableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: DataTableSelectionComponent,
          selectors: [["datatable-selection"]],
          inputs: {
            rows: "rows",
            selected: "selected",
            selectEnabled: "selectEnabled",
            selectionType: "selectionType",
            rowIdentity: "rowIdentity",
            selectCheck: "selectCheck"
          },
          outputs: {
            activate: "activate",
            select: "select"
          },
          ngContentSelectors: _c0,
          decls: 1,
          vars: 0,
          template: function DataTableSelectionComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
            }
          },
          encapsulation: 2,
          changeDetection: 0
        });
        return DataTableSelectionComponent;
      }();

      function defaultSumFunc(cells) {
        var cellsWithValues = cells.filter(function (cell) {
          return !!cell;
        });

        if (!cellsWithValues.length) {
          return null;
        }

        if (cellsWithValues.some(function (cell) {
          return typeof cell !== 'number';
        })) {
          return null;
        }

        return cellsWithValues.reduce(function (res, cell) {
          return res + cell;
        });
      }

      function noopSumFunc(cells) {
        return null;
      }

      var DataTableSummaryRowComponent = /*@__PURE__*/function () {
        var DataTableSummaryRowComponent = /*#__PURE__*/function () {
          function DataTableSummaryRowComponent() {
            _classCallCheck(this, DataTableSummaryRowComponent);

            this.summaryRow = {};
          }

          _createClass(DataTableSummaryRowComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges() {
              if (!this.columns || !this.rows) {
                return;
              }

              this.updateInternalColumns();
              this.updateValues();
            }
          }, {
            key: "updateInternalColumns",
            value: function updateInternalColumns() {
              this._internalColumns = this.columns.map(function (col) {
                return Object.assign(Object.assign({}, col), {
                  cellTemplate: col.summaryTemplate
                });
              });
            }
          }, {
            key: "updateValues",
            value: function updateValues() {
              var _this26 = this;

              this.summaryRow = {};
              this.columns.filter(function (col) {
                return !col.summaryTemplate;
              }).forEach(function (col) {
                var cellsFromSingleColumn = _this26.rows.map(function (row) {
                  return row[col.prop];
                });

                var sumFunc = _this26.getSummaryFunction(col);

                _this26.summaryRow[col.prop] = col.pipe ? col.pipe.transform(sumFunc(cellsFromSingleColumn)) : sumFunc(cellsFromSingleColumn);
              });
            }
          }, {
            key: "getSummaryFunction",
            value: function getSummaryFunction(column) {
              if (column.summaryFunc === undefined) {
                return defaultSumFunc;
              } else if (column.summaryFunc === null) {
                return noopSumFunc;
              } else {
                return column.summaryFunc;
              }
            }
          }]);

          return DataTableSummaryRowComponent;
        }();

        DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) {
          return new (t || DataTableSummaryRowComponent)();
        };

        DataTableSummaryRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
          type: DataTableSummaryRowComponent,
          selectors: [["datatable-summary-row"]],
          hostAttrs: [1, "datatable-summary-row"],
          inputs: {
            rows: "rows",
            columns: "columns",
            rowHeight: "rowHeight",
            offsetX: "offsetX",
            innerWidth: "innerWidth"
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
          decls: 1,
          vars: 1,
          consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]],
          template: function DataTableSummaryRowComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
            }
          },
          directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], DataTableBodyRowComponent],
          encapsulation: 2
        });
        return DataTableSummaryRowComponent;
      }();

      var NgxDatatableModule_1;

      var NgxDatatableModule = /*@__PURE__*/function () {
        var NgxDatatableModule = NgxDatatableModule_1 = /*#__PURE__*/function () {
          function NgxDatatableModule() {
            _classCallCheck(this, NgxDatatableModule);
          }

          _createClass(NgxDatatableModule, null, [{
            key: "forRoot",

            /**
             * Configure global configuration via INgxDatatableConfig
             * @param configuration
             */
            value: function forRoot(configuration) {
              return {
                ngModule: NgxDatatableModule_1,
                providers: [{
                  provide: 'configuration',
                  useValue: configuration
                }]
              };
            }
          }]);

          return NgxDatatableModule;
        }();

        NgxDatatableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: NgxDatatableModule
        });
        NgxDatatableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function NgxDatatableModule_Factory(t) {
            return new (t || NgxDatatableModule)();
          },
          providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
        });
        return NgxDatatableModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxDatatableModule, {
          declarations: function declarations() {
            return [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective];
          }
        });
      })();

      var ClickType = /*@__PURE__*/function (ClickType) {
        ClickType["single"] = "single";
        ClickType["double"] = "double";
        return ClickType;
      }({});

      if (typeof document !== 'undefined' && !document.elementsFromPoint) {
        document.elementsFromPoint = elementsFromPoint;
      }
      /*tslint:disable*/

      /**
       * Polyfill for `elementsFromPoint`
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
       * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
       * https://gist.github.com/oslego/7265412
       */


      function elementsFromPoint(x, y) {
        var elements = [];
        var previousPointerEvents = [];
        var current; // TODO: window.getComputedStyle should be used with inferred type (Element)

        var i;
        var d; //if (document === undefined) return elements;
        // get all elements via elementFromPoint, and remove them from hit-testing in order

        while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
          // push the element and its current style
          elements.push(current);
          previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
          }); // add "pointer-events: none", to get to the underlying element

          current.style.setProperty('pointer-events', 'none', 'important');
        } // restore the previous pointer-events values


        for (i = previousPointerEvents.length; d = previousPointerEvents[--i];) {
          elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
        } // return our results


        return elements;
      }
      /*tslint:enable*/

      /*
       * Public API Surface of ngx-datatable
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=swimlane-ngx-datatable.js.map

      /***/

    },

    /***/
    "./src/app/table/basic/basic.component.ts":
    /*!************************************************!*\
      !*** ./src/app/table/basic/basic.component.ts ***!
      \************************************************/

    /*! exports provided: BasictableComponent */

    /***/
    function srcAppTableBasicBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasictableComponent", function () {
        return BasictableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var BasictableComponent = /*@__PURE__*/function () {
        var BasictableComponent = function BasictableComponent() {
          _classCallCheck(this, BasictableComponent);
        };

        BasictableComponent.ɵfac = function BasictableComponent_Factory(t) {
          return new (t || BasictableComponent)();
        };

        BasictableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: BasictableComponent,
          selectors: [["ng-component"]],
          decls: 880,
          vars: 0,
          consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "card-title", "m-t-40"], [1, "m-r-5", "font-18", "mdi", "mdi-numeric-1-box-multiple-outline"], [1, "table-responsive"], [1, "table"], ["scope", "col"], ["scope", "row"], [1, "m-r-5", "font-18", "mdi", "mdi-numeric-2-box-multiple-outline"], [1, "thead-light"], [1, "table", "table-striped"], [1, "table", "table-bordered"], ["colspan", "2"], [1, "table", "table-hover"], [1, "table-active"], [1, "table-primary"], [1, "table-success"], [1, "table-danger"], [1, "table-info"], [1, "table-responsive", "m-t-20"], [1, "table", "table-bordered", "table-responsive-lg"], [1, "table-responsive-sm"], [1, "table-responsive-md"], [1, "table-responsive-lg"], [1, "table-responsive-xl"]],
          template: function BasictableComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Default Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Using the most basic table markup, here\u2019s how ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "-based tables look in Bootstrap. All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the parent.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Table With Outside Padding");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Larry");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h6", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Table Without Outside Padding");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Larry");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Table Header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Similar to tables, use the modifier classes .thead-light to make ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "s appear light.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "thead", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Larry");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Striped rows");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Use ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, ".table-striped");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " to add zebra-striping to any table row within the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "<tbody>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "table", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Larry");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Boredered Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Add ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, ".table-bordered");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " for borders on all sides of the table and cells.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "table", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Larry the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Hoverable Rows");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Add ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, ".table-hover");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " to enable a hover state on table rows within a ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "<tbody>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "table", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "Larry the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Contextual Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Use contextual classes to color table rows or individual cells.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Class");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "tr", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Active");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Default");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "tr", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Primary");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Secondary");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "tr", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Success");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Danger");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "tr", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Warning");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Info");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "tr", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Light");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Dark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Table With Caption");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "A ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "<caption>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, " functions like a heading for a table. It helps users with screen readers to find a table and understand what it\u2019s about and decide if they want to read it.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "caption");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "List of users");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Larry");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "Responsive tables");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, ".table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, " with ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, ".table-responsive");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, ". Or, pick a maximum breakpoint with which to have a responsive table up to by using ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](452, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "div", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "table", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "Table header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "Table header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "Table header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "Table header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "Table header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, "Table header");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "Table cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "Breakpoint Specific");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "Use ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, ".table-responsive(-sm|-md|-lg|-xl)");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, " as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "div", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](671, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](685, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](701, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "div", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](717, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](723, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](725, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](737, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](744, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "div", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](789, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](804, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](810, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](819, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](820, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](821, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](823, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "div", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](837, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "th", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](845, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](860, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](862, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](864, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](866, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "th", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](871, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](873, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](875, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](879, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          encapsulation: 2
        });
        return BasictableComponent;
      }();
      /***/

    },

    /***/
    "./src/app/table/color-table/color.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/table/color-table/color.component.ts ***!
      \******************************************************/

    /*! exports provided: ColortableComponent */

    /***/
    function srcAppTableColorTableColorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColortableComponent", function () {
        return ColortableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var ColortableComponent = /*@__PURE__*/function () {
        var ColortableComponent = function ColortableComponent() {
          _classCallCheck(this, ColortableComponent);
        };

        ColortableComponent.ɵfac = function ColortableComponent_Factory(t) {
          return new (t || ColortableComponent)();
        };

        ColortableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: ColortableComponent,
          selectors: [["ng-component"]],
          decls: 999,
          vars: 0,
          consts: [[1, "row"], [1, "col-lg-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "table-responsive"], [1, "table"], [1, "bg-primary", "text-white"], [1, "bg-success", "text-white"], [1, "bg-info", "text-white"], [1, "bg-warning", "text-white"], [1, "bg-danger", "text-white"], [1, "bg-inverse", "text-white"], [1, "border", "border-primary"], [1, "border", "border-success"], [1, "border", "border-info"], [1, "border", "border-warning"], [1, "border", "border-danger"], [1, "border", "border-dark"], [1, "table", "table-hover", "table-primary"], ["scope", "col"], ["scope", "row"], ["colspan", "2"], [1, "table", "table-hover", "table-success"], [1, "table", "table-hover", "table-info"], [1, "table", "table-hover", "table-warning"], [1, "table", "table-hover", "table-danger"], [1, "table", "table-hover", "table-dark"], [1, "bg-dark", "text-white"]],
          template: function ColortableComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Primary Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "To use add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".bg-primary .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "First Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Last Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Username");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Nigam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Eichmann");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "@Sonu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Deshmukh");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Prohaska");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "@Genelia");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Roshan");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Rogahn");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "@Hritik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Success Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "To use add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ".bg-success .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "thead", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "First Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Last Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Username");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Nigam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Eichmann");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "@Sonu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Deshmukh");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Prohaska");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "@Genelia");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Roshan");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Rogahn");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "@Hritik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Info Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "To use add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, ".bg-info .text-whit");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "thead", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "First Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Last Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Username");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Nigam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Eichmann");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "@Sonu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Deshmukh");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Prohaska");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "@Genelia");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Roshan");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Rogahn");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "@Hritik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Warning Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "To use add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, ".bg-warning .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "thead", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "First Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Last Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Username");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Nigam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Eichmann");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "@Sonu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Deshmukh");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Prohaska");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "@Genelia");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Roshan");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Rogahn");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "@Hritik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Danger Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "To use add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, ".bg-danger .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "thead", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "First Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Last Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Username");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Nigam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Eichmann");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "@Sonu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Deshmukh");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Prohaska");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "@Genelia");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Roshan");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Rogahn");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "@Hritik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Inverse Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "To use add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, ".bg-inverse .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "thead", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "First Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Last Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Username");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Nigam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Eichmann");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "@Sonu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Deshmukh");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Prohaska");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "@Genelia");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Roshan");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Rogahn");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "@Hritik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Primary Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "To use add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, ".bg-primary .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " and add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, ".border .border-primary");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " in ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "<tbody>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "thead", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "First Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Last Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Username");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "tbody", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Nigam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Eichmann");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "@Sonu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Deshmukh");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Prohaska");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "@Genelia");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Roshan");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Rogahn");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "@Hritik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Success Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "To use add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, ".bg-success .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, " and add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, ".border .border-success");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, " in ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "<tbody>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "thead", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "First Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Last Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Username");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "tbody", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Nigam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Eichmann");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "@Sonu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Deshmukh");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Prohaska");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "@Genelia");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Roshan");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "Rogahn");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "@Hritik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "Info Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "To use add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, ".bg-info .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, " and add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, ".border .border-info");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, " in ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "<tbody>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "thead", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "First Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "Last Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "Username");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "tbody", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "Nigam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "Eichmann");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "@Sonu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "Deshmukh");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Prohaska");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "@Genelia");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "Roshan");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "Rogahn");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "@Hritik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "Warning Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "To use add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, ".bg-warning .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, " and add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, ".border .border-warning");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, " in ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "<tbody>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "thead", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "First Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "Last Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "Username");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "tbody", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "Nigam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "Eichmann");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "@Sonu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "Deshmukh");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "Prohaska");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "@Genelia");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "Roshan");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "Rogahn");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "@Hritik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "Danger Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "To use add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, ".bg-danger .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, " and add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, ".border .border-danger");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, " in ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "<tbody>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "thead", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "First Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, "Last Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "Username");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "tbody", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "Nigam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "Eichmann");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "@Sonu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "Deshmukh");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "Prohaska");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](604, "@Genelia");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, "Roshan");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "Rogahn");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, "@Hritik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, "Inverse Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, "To use add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, ".bg-dark .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, " and add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, ".border .border-dark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, " in ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, "<tbody>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "thead", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, "First Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "Last Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "Username");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "tbody", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, "Nigam");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "Eichmann");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "@Sonu");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, "Deshmukh");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, "Prohaska");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](662, "@Genelia");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667, "Roshan");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, "Rogahn");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](671, "@Hritik");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "Primary Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, "To use add class in the table ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, ".table-hover .table-primary");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, " and add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](684, ".bg-primary .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](685, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "table", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "thead", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](710, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](717, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "td", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "Larry the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, "Success Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, "To use add class in the table ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, ".table-hover .table-success");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, " and add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, ".bg-success .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "table", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "thead", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](776, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "td", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "Larry the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "Info Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, "To use add class in the table ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, ".table-hover .table-info");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, " and add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, ".bg-info .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](794, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](795, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](796, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "table", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "thead", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](807, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](819, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](820, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](826, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "td", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "Larry the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](840, "Warning Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](842, "To use add class in the table ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](844, ".table-hover .table-warning");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](845, " and add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, ".bg-warning .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](848, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](850, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "table", 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "thead", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](857, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](859, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](861, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](867, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](869, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](871, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](873, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](876, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](878, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](880, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](881, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](882, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](885, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "td", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](887, "Larry the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](889, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](894, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](895, "Danger Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](897, "To use add class in the table ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, ".table-hover .table-danger");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](900, " and add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](902, ".bg-danger .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](903, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](904, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](905, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](906, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](908, "table", 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](909, "thead", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](912, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](914, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](917, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](918, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](920, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](922, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](924, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](925, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](926, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](927, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](928, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](931, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](933, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](934, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](935, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](936, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](940, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](941, "td", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](942, "Larry the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](944, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](945, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](948, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, "Inverse Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](951, "To use add class in the table ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](952, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](953, ".table-hover .table-dark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](954, " and add class ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](955, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](956, ".bg-dark .text-white");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](957, " in the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](959, "<thead>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](960, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](962, "table", 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "thead", 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](964, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](966, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](968, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](970, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "th", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](972, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](973, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](974, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](976, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](978, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](980, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](981, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](982, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](983, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](985, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](986, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](987, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](988, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](989, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](992, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "th", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](994, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](995, "td", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](996, "Larry the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](997, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](998, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          encapsulation: 2
        });
        return ColortableComponent;
      }();
      /***/

    },

    /***/
    "./src/app/table/dark-basic/dark.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/table/dark-basic/dark.component.ts ***!
      \****************************************************/

    /*! exports provided: DarktableComponent */

    /***/
    function srcAppTableDarkBasicDarkComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarktableComponent", function () {
        return DarktableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var DarktableComponent = /*@__PURE__*/function () {
        var DarktableComponent = function DarktableComponent() {
          _classCallCheck(this, DarktableComponent);
        };

        DarktableComponent.ɵfac = function DarktableComponent_Factory(t) {
          return new (t || DarktableComponent)();
        };

        DarktableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: DarktableComponent,
          selectors: [["ng-component"]],
          decls: 230,
          vars: 0,
          consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "table-responsive"], [1, "table", "table-dark", "m-b-0"], ["scope", "col"], ["scope", "row"], [1, "table", "table-striped", "table-dark", "m-b-0"], [1, "table", "table-bordered", "table-dark", "m-b-0"], ["colspan", "2"], [1, "bg-primary"], [1, "bg-success"], [1, "bg-info"], [1, "bg-warning"], [1, "bg-danger"]],
          template: function DarktableComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Inverse Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You can also invert the colors\u2014with light text on dark backgrounds\u2014with ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " .table-inverse");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Larry");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Striped with Inverse Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Use .table-striped to add zebra-striping to any table row within the ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "<tbody>");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ".");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "table", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Larry");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Bordered with Inverse Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Add ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "code");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, ".table-bordered");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " for borders on all sides of the table and cells.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "table", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Larry the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Contextual classes inverse");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h6", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Regular table background variants are not available with the dark table, however, you may use text or background utilities to achieve similar styles.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "table", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "th", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Heading");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "tr", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "tr", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "4");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "tr", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "5");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "6");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "tr", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "7");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "8");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "tr", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "th", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "9");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Cell");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          encapsulation: 2
        });
        return DarktableComponent;
      }();
      /***/

    },

    /***/
    "./src/app/table/data-table/company.json":
    /*!***********************************************!*\
      !*** ./src/app/table/data-table/company.json ***!
      \***********************************************/

    /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */

    /***/
    function srcAppTableDataTableCompanyJson(module) {
      module.exports = JSON.parse("[{\"name\":\"Ethel Price\",\"gender\":\"female\",\"company\":\"Johnson, Johnson and Partners, LLC CMP DDC\",\"age\":22},{\"name\":\"Claudine Neal\",\"gender\":\"female\",\"company\":\"Sealoud\",\"age\":55},{\"name\":\"Beryl Rice\",\"gender\":\"female\",\"company\":\"Velity\",\"age\":67},{\"name\":\"Wilder Gonzales\",\"gender\":\"male\",\"company\":\"Geekko\"},{\"name\":\"Georgina Schultz\",\"gender\":\"female\",\"company\":\"Suretech\"},{\"name\":\"Carroll Buchanan\",\"gender\":\"male\",\"company\":\"Ecosys\"},{\"name\":\"Valarie Atkinson\",\"gender\":\"female\",\"company\":\"Hopeli\"},{\"name\":\"Schroeder Mathews\",\"gender\":\"male\",\"company\":\"Polarium\"},{\"name\":\"Lynda Mendoza\",\"gender\":\"female\",\"company\":\"Dogspa\"},{\"name\":\"Sarah Massey\",\"gender\":\"female\",\"company\":\"Bisba\"},{\"name\":\"Robles Boyle\",\"gender\":\"male\",\"company\":\"Comtract\"},{\"name\":\"Evans Hickman\",\"gender\":\"male\",\"company\":\"Parleynet\"},{\"name\":\"Dawson Barber\",\"gender\":\"male\",\"company\":\"Dymi\"},{\"name\":\"Bruce Strong\",\"gender\":\"male\",\"company\":\"Xyqag\"},{\"name\":\"Nellie Whitfield\",\"gender\":\"female\",\"company\":\"Exospace\"},{\"name\":\"Jackson Macias\",\"gender\":\"male\",\"company\":\"Aquamate\"},{\"name\":\"Pena Pena\",\"gender\":\"male\",\"company\":\"Quarx\"},{\"name\":\"Lelia Gates\",\"gender\":\"female\",\"company\":\"Proxsoft\"},{\"name\":\"Letitia Vasquez\",\"gender\":\"female\",\"company\":\"Slumberia\"},{\"name\":\"Trevino Moreno\",\"gender\":\"male\",\"company\":\"Conjurica\"},{\"name\":\"Barr Page\",\"gender\":\"male\",\"company\":\"Apex\"},{\"name\":\"Kirkland Merrill\",\"gender\":\"male\",\"company\":\"Utara\"},{\"name\":\"Blanche Conley\",\"gender\":\"female\",\"company\":\"Imkan\"},{\"name\":\"Atkins Dunlap\",\"gender\":\"male\",\"company\":\"Comveyor\"},{\"name\":\"Everett Foreman\",\"gender\":\"male\",\"company\":\"Maineland\"},{\"name\":\"Gould Randolph\",\"gender\":\"male\",\"company\":\"Intergeek\"},{\"name\":\"Kelli Leon\",\"gender\":\"female\",\"company\":\"Verbus\"},{\"name\":\"Freda Mason\",\"gender\":\"female\",\"company\":\"Accidency\"},{\"name\":\"Tucker Maxwell\",\"gender\":\"male\",\"company\":\"Lumbrex\"},{\"name\":\"Yvonne Parsons\",\"gender\":\"female\",\"company\":\"Zolar\"},{\"name\":\"Woods Key\",\"gender\":\"male\",\"company\":\"Bedder\"},{\"name\":\"Stephens Reilly\",\"gender\":\"male\",\"company\":\"Acusage\"},{\"name\":\"Mcfarland Sparks\",\"gender\":\"male\",\"company\":\"Comvey\"},{\"name\":\"Jocelyn Sawyer\",\"gender\":\"female\",\"company\":\"Fortean\"},{\"name\":\"Renee Barr\",\"gender\":\"female\",\"company\":\"Kiggle\"},{\"name\":\"Gaines Beck\",\"gender\":\"male\",\"company\":\"Sequitur\"},{\"name\":\"Luisa Farrell\",\"gender\":\"female\",\"company\":\"Cinesanct\"},{\"name\":\"Robyn Strickland\",\"gender\":\"female\",\"company\":\"Obones\"},{\"name\":\"Roseann Jarvis\",\"gender\":\"female\",\"company\":\"Aquazure\"},{\"name\":\"Johnston Park\",\"gender\":\"male\",\"company\":\"Netur\"},{\"name\":\"Wong Craft\",\"gender\":\"male\",\"company\":\"Opticall\"},{\"name\":\"Merritt Cole\",\"gender\":\"male\",\"company\":\"Techtrix\"},{\"name\":\"Dale Byrd\",\"gender\":\"female\",\"company\":\"Kneedles\"},{\"name\":\"Sara Delgado\",\"gender\":\"female\",\"company\":\"Netagy\"},{\"name\":\"Alisha Myers\",\"gender\":\"female\",\"company\":\"Intradisk\"},{\"name\":\"Felecia Smith\",\"gender\":\"female\",\"company\":\"Futurity\"},{\"name\":\"Neal Harvey\",\"gender\":\"male\",\"company\":\"Pyramax\"},{\"name\":\"Nola Miles\",\"gender\":\"female\",\"company\":\"Sonique\"},{\"name\":\"Herring Pierce\",\"gender\":\"male\",\"company\":\"Geeketron\"},{\"name\":\"Shelley Rodriquez\",\"gender\":\"female\",\"company\":\"Bostonic\"},{\"name\":\"Cora Chase\",\"gender\":\"female\",\"company\":\"Isonus\"},{\"name\":\"Mckay Santos\",\"gender\":\"male\",\"company\":\"Amtas\"},{\"name\":\"Hilda Crane\",\"gender\":\"female\",\"company\":\"Jumpstack\"},{\"name\":\"Jeanne Lindsay\",\"gender\":\"female\",\"company\":\"Genesynk\"},{\"name\":\"Frye Sharpe\",\"gender\":\"male\",\"company\":\"Eplode\"},{\"name\":\"Velma Fry\",\"gender\":\"female\",\"company\":\"Ronelon\"},{\"name\":\"Reyna Espinoza\",\"gender\":\"female\",\"company\":\"Prismatic\"},{\"name\":\"Spencer Sloan\",\"gender\":\"male\",\"company\":\"Comverges\"},{\"name\":\"Graham Marsh\",\"gender\":\"male\",\"company\":\"Medifax\"},{\"name\":\"Hale Boone\",\"gender\":\"male\",\"company\":\"Digial\"},{\"name\":\"Wiley Hubbard\",\"gender\":\"male\",\"company\":\"Zensus\"},{\"name\":\"Blackburn Drake\",\"gender\":\"male\",\"company\":\"Frenex\"},{\"name\":\"Franco Hunter\",\"gender\":\"male\",\"company\":\"Rockabye\"},{\"name\":\"Barnett Case\",\"gender\":\"male\",\"company\":\"Norali\"},{\"name\":\"Alexander Foley\",\"gender\":\"male\",\"company\":\"Geekosis\"},{\"name\":\"Lynette Stein\",\"gender\":\"female\",\"company\":\"Macronaut\"},{\"name\":\"Anthony Joyner\",\"gender\":\"male\",\"company\":\"Senmei\"},{\"name\":\"Garrett Brennan\",\"gender\":\"male\",\"company\":\"Bluegrain\"},{\"name\":\"Betsy Horton\",\"gender\":\"female\",\"company\":\"Zilla\"},{\"name\":\"Patton Small\",\"gender\":\"male\",\"company\":\"Genmex\"},{\"name\":\"Lakisha Huber\",\"gender\":\"female\",\"company\":\"Insource\"},{\"name\":\"Lindsay Avery\",\"gender\":\"female\",\"company\":\"Unq\"},{\"name\":\"Ayers Hood\",\"gender\":\"male\",\"company\":\"Accuprint\"},{\"name\":\"Torres Durham\",\"gender\":\"male\",\"company\":\"Uplinx\"},{\"name\":\"Vincent Hernandez\",\"gender\":\"male\",\"company\":\"Talendula\"},{\"name\":\"Baird Ryan\",\"gender\":\"male\",\"company\":\"Aquasseur\"},{\"name\":\"Georgia Mercer\",\"gender\":\"female\",\"company\":\"Skyplex\"},{\"name\":\"Francesca Elliott\",\"gender\":\"female\",\"company\":\"Nspire\"},{\"name\":\"Lyons Peters\",\"gender\":\"male\",\"company\":\"Quinex\"},{\"name\":\"Kristi Brewer\",\"gender\":\"female\",\"company\":\"Oronoko\"},{\"name\":\"Tonya Bray\",\"gender\":\"female\",\"company\":\"Insuron\"},{\"name\":\"Valenzuela Huff\",\"gender\":\"male\",\"company\":\"Applideck\"},{\"name\":\"Tiffany Anderson\",\"gender\":\"female\",\"company\":\"Zanymax\"},{\"name\":\"Jerri King\",\"gender\":\"female\",\"company\":\"Eventex\"},{\"name\":\"Rocha Meadows\",\"gender\":\"male\",\"company\":\"Goko\"},{\"name\":\"Marcy Green\",\"gender\":\"female\",\"company\":\"Pharmex\"},{\"name\":\"Kirk Cross\",\"gender\":\"male\",\"company\":\"Portico\"},{\"name\":\"Hattie Mullen\",\"gender\":\"female\",\"company\":\"Zilencio\"},{\"name\":\"Deann Bridges\",\"gender\":\"female\",\"company\":\"Equitox\"},{\"name\":\"Chaney Roach\",\"gender\":\"male\",\"company\":\"Qualitern\"},{\"name\":\"Consuelo Dickson\",\"gender\":\"female\",\"company\":\"Poshome\"},{\"name\":\"Billie Rowe\",\"gender\":\"female\",\"company\":\"Cemention\"},{\"name\":\"Bean Donovan\",\"gender\":\"male\",\"company\":\"Mantro\"},{\"name\":\"Lancaster Patel\",\"gender\":\"male\",\"company\":\"Krog\"},{\"name\":\"Rosa Dyer\",\"gender\":\"female\",\"company\":\"Netility\"},{\"name\":\"Christine Compton\",\"gender\":\"female\",\"company\":\"Bleeko\"},{\"name\":\"Milagros Finch\",\"gender\":\"female\",\"company\":\"Handshake\"},{\"name\":\"Ericka Alvarado\",\"gender\":\"female\",\"company\":\"Lyrichord\"},{\"name\":\"Sylvia Sosa\",\"gender\":\"female\",\"company\":\"Circum\"},{\"name\":\"Humphrey Curtis\",\"gender\":\"male\",\"company\":\"Corepan\"}]");
      /***/
    },

    /***/
    "./src/app/table/data-table/data-table.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/table/data-table/data-table.component.ts ***!
      \**********************************************************/

    /*! exports provided: DatatableComponent */

    /***/
    function srcAppTableDataTableDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatatableComponent", function () {
        return DatatableComponent;
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


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function DatatableComponent_ng_template_29_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function DatatableComponent_ng_template_29_span_0_Template_span_dblclick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var rowIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.editing[rowIndex_r5 + "-name"] = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r6, " ");
        }
      }

      function DatatableComponent_ng_template_29_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function DatatableComponent_ng_template_29_input_1_Template_input_blur_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var rowIndex_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.updateValue($event, "name", rowIndex_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r6);
        }
      }

      function DatatableComponent_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatatableComponent_ng_template_29_span_0_Template, 2, 1, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatatableComponent_ng_template_29_input_1_Template, 1, 1, "input", 20);
        }

        if (rf & 2) {
          var rowIndex_r5 = ctx.rowIndex;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.editing[rowIndex_r5 + "-name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.editing[rowIndex_r5 + "-name"]);
        }
      }

      function DatatableComponent_ng_template_31_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function DatatableComponent_ng_template_31_span_0_Template_span_dblclick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.editing[rowIndex_r18 + "-gender"] = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r20, " ");
        }
      }

      function DatatableComponent_ng_template_31_select_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatatableComponent_ng_template_31_select_1_Template_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var rowIndex_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().rowIndex;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.updateValue($event, "gender", rowIndex_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var value_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r20);
        }
      }

      function DatatableComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatatableComponent_ng_template_31_span_0_Template, 2, 1, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatatableComponent_ng_template_31_select_1_Template, 5, 1, "select", 23);
        }

        if (rf & 2) {
          var rowIndex_r18 = ctx.rowIndex;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.editing[rowIndex_r18 + "-gender"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.editing[rowIndex_r18 + "-gender"]);
        }
      }

      function DatatableComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var value_r31 = ctx.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r31, " ");
        }
      }

      var data = __webpack_require__(
      /*! ./company.json */
      "./src/app/table/data-table/company.json");

      var DatatableComponent = /*@__PURE__*/function () {
        var DatatableComponent = /*#__PURE__*/function () {
          function DatatableComponent() {
            var _this27 = this;

            _classCallCheck(this, DatatableComponent);

            this.editing = {};
            this.rows = new Array();
            this.temp = _toConsumableArray(data);
            this.loadingIndicator = true;
            this.reorderable = true;
            this.columns = [{
              prop: 'name'
            }, {
              name: 'Gender'
            }, {
              name: 'Company'
            }];
            this.rows = data;
            this.temp = _toConsumableArray(data);
            setTimeout(function () {
              _this27.loadingIndicator = false;
            }, 1500);
          }

          _createClass(DatatableComponent, [{
            key: "updateFilter",
            value: function updateFilter(event) {
              var val = event.target.value.toLowerCase(); // filter our data

              var temp = this.temp.filter(function (d) {
                return d.name.toLowerCase().indexOf(val) !== -1 || !val;
              }); // update the rows

              this.rows = temp; // Whenever the filter changes, always go back to the first page

              this.table = data;
            }
          }, {
            key: "updateValue",
            value: function updateValue(event, cell, rowIndex) {
              this.editing[rowIndex + '-' + cell] = false;
              this.rows[rowIndex][cell] = event.target.value;
              this.rows = _toConsumableArray(this.rows);
            }
          }]);

          return DatatableComponent;
        }();

        DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
          return new (t || DatatableComponent)();
        };

        DatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: DatatableComponent,
          selectors: [["app-data-table"]],
          viewQuery: function DatatableComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DatatableComponent, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            }
          },
          decls: 34,
          vars: 21,
          consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle"], [1, "w-50", "m-b-30"], ["type", "text", "placeholder", "Type to filter the name column...", 1, "form-control", 3, "keyup"], [1, "material", 3, "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows"], ["table", ""], ["columnMode", "force", 1, "material", 3, "rows", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH"], ["name", "Name", 3, "width"], ["name", "Gender"], ["name", "Company", 3, "width"], [1, "material", 3, "headerHeight", "limit", "columnMode", "footerHeight", "rowHeight", "rows"], ["mydatatable", ""], ["name", "Name"], ["ngx-datatable-cell-template", ""], ["name", "Age"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], ["autofocus", "", "type", "text", 3, "value", "blur"], [3, "value", "change", 4, "ngIf"], [3, "value", "change"], ["value", "male"], ["value", "female"]],
          template: function DatatableComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filter Option");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This is the filerable Data table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DatatableComponent_Template_input_keyup_9_listener($event) {
                return ctx.updateFilter($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngx-datatable", 8, 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Horizontal/Vertical Scrolling");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngx-datatable", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ngx-datatable-column", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ngx-datatable-column", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ngx-datatable-column", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Editing Option");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "This is the editing Data table option you can double click on text");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngx-datatable", 14, 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ngx-datatable-column", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DatatableComponent_ng_template_29_Template, 2, 2, "ng-template", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ngx-datatable-column", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DatatableComponent_ng_template_31_Template, 2, 2, "ng-template", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ngx-datatable-column", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DatatableComponent_ng_template_33_Template, 1, 1, "ng-template", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10)("rows", ctx.rows);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", false);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 300);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 300);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerHeight", 50)("limit", 5)("columnMode", "force")("footerHeight", 50)("rowHeight", "auto")("rows", ctx.rows);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
          styles: [".ngx-datatable.scroll-vertical[_ngcontent-%COMP%] {\r\n  height: 70vh;\r\n}"]
        });
        return DatatableComponent;
      }();
      /***/

    },

    /***/
    "./src/app/table/ngtable/ngtable-data.ts":
    /*!***********************************************!*\
      !*** ./src/app/table/ngtable/ngtable-data.ts ***!
      \***********************************************/

    /*! exports provided: tableList */

    /***/
    function srcAppTableNgtableNgtableDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tableList", function () {
        return tableList;
      });

      var tableList = [{
        Id: 1,
        Name: 'Sam',
        UserName: 'sam',
        Email: 's@gmail.com',
        imagePath: 'assets/images/users/1.jpg'
      }, {
        Id: 2,
        Name: 'John',
        UserName: 'john',
        Email: 'j@gmail.com',
        imagePath: 'assets/images/users/2.jpg'
      }, {
        Id: 3,
        Name: 'Will Smith',
        UserName: 'will',
        Email: 'ws@gmail.com',
        imagePath: 'assets/images/users/3.jpg'
      }, {
        Id: 4,
        Name: 'Tom Hardy',
        UserName: 'tom',
        Email: 'tom@gmail.com',
        imagePath: 'assets/images/users/4.jpg'
      }, {
        Id: 5,
        Name: 'Martha Curse',
        UserName: 'curse',
        Email: 'martha@gmail.com',
        imagePath: 'assets/images/users/5.jpg'
      }, {
        Id: 6,
        Name: 'Kristen',
        UserName: 'stewart',
        Email: 'sweet@gmail.com',
        imagePath: 'assets/images/users/6.jpg'
      }, {
        Id: 7,
        Name: 'Mam',
        UserName: 'Ram',
        Email: 's@gmail.com',
        imagePath: 'assets/images/users/1.jpg'
      }, {
        Id: 8,
        Name: 'Johnathan',
        UserName: 'john',
        Email: 'jnathan@gmail.com',
        imagePath: 'assets/images/users/2.jpg'
      }, {
        Id: 9,
        Name: 'Will mark',
        UserName: 'will mark',
        Email: 'wsmark@gmail.com',
        imagePath: 'assets/images/users/3.jpg'
      }];
      /***/
    },

    /***/
    "./src/app/table/ngtable/ngtable.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/table/ngtable/ngtable.component.ts ***!
      \****************************************************/

    /*! exports provided: compare, NgbdSortableHeader, TableComponent */

    /***/
    function srcAppTableNgtableNgtableComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "compare", function () {
        return compare;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgbdSortableHeader", function () {
        return NgbdSortableHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
        return TableComponent;
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


      var _ngtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ngtable */
      "./src/app/table/ngtable/ngtable.ts");
      /* harmony import */


      var _ngtable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ngtable.service */
      "./src/app/table/ngtable/ngtable.service.ts");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");

      function TableComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngb-highlight", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngb-highlight", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngb-highlight", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_tr_29_Template_i_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var client_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](136);

            return ctx_r8.openModal(_r5, client_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_tr_29_Template_i_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var client_r7 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10["delete"](client_r7.Id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var client_r7 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r7.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", client_r7.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r7.Name)("term", ctx_r0.csearchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r7.UserName)("term", ctx_r0.csearchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r7.Email)("term", ctx_r0.csearchTerm);
        }
      }

      function TableComponent_tr_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var client_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r11.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", client_r11.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", client_r11.Name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", client_r11.UserName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", client_r11.Email, " ");
        }
      }

      function TableComponent_tr_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var client_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r12.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", client_r12.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", client_r12.Name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", client_r12.UserName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", client_r12.Email, " ");
        }
      }

      function TableComponent_tr_104_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngb-highlight", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngb-highlight", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngb-highlight", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var client_r13 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r13.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", client_r13.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r13.Name)("term", ctx_r3.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r13.UserName)("term", ctx_r3.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", client_r13.Email)("term", ctx_r3.searchTerm);
        }
      }

      function TableComponent_tr_131_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var client_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](client_r14.Id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", client_r14.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", client_r14.Name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", client_r14.UserName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", client_r14.Email, " ");
        }
      }

      function TableComponent_ng_template_135_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.formsErrors.fullName, " ");
        }
      }

      function TableComponent_ng_template_135_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.formsErrors.UserName, " ");
        }
      }

      function TableComponent_ng_template_135_span_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.formsErrors.email, " ");
        }
      }

      function TableComponent_ng_template_135_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_ng_template_135_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.closeBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TableComponent_ng_template_135_Template_form_ngSubmit_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Full Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TableComponent_ng_template_135_Template_input_blur_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.logValidationErrors(ctx_r22.editClient);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableComponent_ng_template_135_span_13_Template, 2, 1, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TableComponent_ng_template_135_Template_input_blur_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.logValidationErrors(ctx_r23.editClient);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TableComponent_ng_template_135_span_19_Template, 2, 1, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TableComponent_ng_template_135_Template_input_blur_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.logValidationErrors(ctx_r24.editClient);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TableComponent_ng_template_135_span_25_Template, 2, 1, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_ng_template_135_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.closeBtnClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.editAddLabel, " Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.editClient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.formsErrors.fullName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.formsErrors.UserName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.formsErrors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.editClient.invalid);
        }
      }

      var _rotate = {
        'asc': 'desc',
        'desc': '',
        '': 'asc'
      };

      var compare = function compare(v1, v2) {
        return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
      };

      var NgbdSortableHeader = /*@__PURE__*/function () {
        var NgbdSortableHeader = /*#__PURE__*/function () {
          function NgbdSortableHeader() {
            _classCallCheck(this, NgbdSortableHeader);

            this.sortable = null;
            this.direction = '';
            this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          }

          _createClass(NgbdSortableHeader, [{
            key: "rotate",
            value: function rotate() {
              this.direction = _rotate[this.direction];
              this.sort.emit({
                column: this.sortable,
                direction: this.direction
              });
            }
          }]);

          return NgbdSortableHeader;
        }();

        NgbdSortableHeader.ɵfac = function NgbdSortableHeader_Factory(t) {
          return new (t || NgbdSortableHeader)();
        };

        NgbdSortableHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
          type: NgbdSortableHeader,
          selectors: [["th", "sortable", ""]],
          hostVars: 4,
          hostBindings: function NgbdSortableHeader_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdSortableHeader_click_HostBindingHandler() {
                return ctx.rotate();
              });
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
            }
          },
          inputs: {
            sortable: "sortable",
            direction: "direction"
          },
          outputs: {
            sort: "sort"
          }
        });
        return NgbdSortableHeader;
      }();

      var TableComponent = /*@__PURE__*/function () {
        var TableComponent = /*#__PURE__*/function () {
          function TableComponent(tableService, fb, modalService) {
            _classCallCheck(this, TableComponent);

            this.tableService = tableService;
            this.fb = fb;
            this.modalService = modalService;
            this.clientList = this.tableService.getTable();
            this.sortClientList = null;
            this.filterClient = null;
            this.cfilterClient = null;
            this.page = 1;
            this.pageSize = 5;
            this.editClient = Object.create(null);
            this.editAddLabel = 'Edit';
            this.clientDetail = null;
            this.totalLengthOfCollection = 0; //Sorting purpose...

            this.headers = Object.create(null); //Searching..........

            this._searchTerm = ''; //complete example................

            this.cpage = 1;
            this.cpageSize = 4;
            this._csearchTerm = '';
            this.ValidationMessage = {
              fullName: {
                required: 'full Name is required.'
              },
              UserName: {
                required: 'User Name is required.'
              },
              email: {
                required: 'Email is required.',
                Email: 'Not a email'
              }
            };
            this.formsErrors = {};
            this.filterClient = this.clientList;
            this.cfilterClient = this.clientList;
            this.sortClientList = this.clientList;
            this.totalLengthOfCollection = this.cfilterClient.length;
          }

          _createClass(TableComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.editClient = this.fb.group({
                fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              });
            }
          }, {
            key: "onSort",
            value: function onSort(_ref17) {
              var column = _ref17.column,
                  direction = _ref17.direction;
              this.headers.forEach(function (header) {
                if (header.sortable !== column) {
                  header.direction = '';
                }
              }); // sorting client

              if (direction === '') {
                this.sortClientList = this.tableService.getTable();
                this.cfilterClient = this.tableService.getTable();
              } else {// // //this.sortClientList = [...this.tableService.getTable()].sort((a, b) => {
                // // //  const res = compare(a[column] ,b?[column]);
                // // //  return direction === 'asc' ? res : -res;
                // // //});
                // // //this.cfilterClient = [...this.tableService.getTable()].sort((a, b) => {
                // // //  const res = compare(a[column], b[column]);
                // // //  return direction === 'asc' ? res : -res;
              } // // //);

            }
          }, {
            key: "filter",
            value: function filter(v) {
              return this.tableService.getTable().filter(function (x) {
                var _a, _b, _c;

                return ((_a = x.Name) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(v.toLowerCase())) !== -1 || ((_b = x.UserName) === null || _b === void 0 ? void 0 : _b.toLowerCase().indexOf(v.toLowerCase())) !== -1 || ((_c = x.Email) === null || _c === void 0 ? void 0 : _c.toLowerCase().indexOf(v.toLowerCase())) !== -1;
              });
            }
          }, {
            key: "cfilter",
            value: function cfilter(v) {
              return this.tableService.getTable().filter(function (x) {
                var _a, _b, _c;

                return ((_a = x.Name) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(v.toLowerCase())) !== -1 || ((_b = x.UserName) === null || _b === void 0 ? void 0 : _b.toLowerCase().indexOf(v.toLowerCase())) !== -1 || ((_c = x.Email) === null || _c === void 0 ? void 0 : _c.toLowerCase().indexOf(v.toLowerCase())) !== -1;
              });
            } //Model........................

          }, {
            key: "logValidationErrors",
            value: function logValidationErrors(group) {// Object.keys(group.controls).forEach((key: string) => {
              //   const ac = group.get(key);
              //   this.formsErrors[key] = '';
              //   if (ac && !ac.valid && (ac.touched || ac.dirty)) {
              //     const message = this.ValidationMessage[key];
              //     for (const errorKey in ac.errors) {
              //       if (errorKey) {
              //         this.formsErrors[key] += message[errorKey] + '    ';
              //       }
              //     }
              //   }
              //   if (ac instanceof FormGroup) {
              //     this.logValidationErrors(ac)
              //   }
              // })
            }
          }, {
            key: "openModal",
            value: function openModal(targetModal, client) {
              this.modalService.open(targetModal, {
                centered: true,
                backdrop: 'static'
              });

              if (client == null) {
                this.editAddLabel = 'Add';
              }

              if (client != null) {
                this.clientDetail = client;
                this.editAddLabel = 'Edit';
                this.editClient.patchValue({
                  fullName: client.Name,
                  UserName: client.UserName,
                  email: client.Email
                });
              }
            }
          }, {
            key: "closeBtnClick",
            value: function closeBtnClick() {
              this.modalService.dismissAll();
              this.ngOnInit();
            }
          }, {
            key: "delete",
            value: function _delete(id) {
              this.cfilterClient = this.cfilterClient.filter(function (client) {
                return client.Id !== id;
              });
            }
          }, {
            key: "onSubmit",
            value: function onSubmit() {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

              if (this.clientDetail != null) {
                var index = this.tableService.getTable().indexOf(this.clientDetail);
                this.clientDetail.Name = (_b = (_a = this.editClient) === null || _a === void 0 ? void 0 : _a.get('fullName')) === null || _b === void 0 ? void 0 : _b.value;
                this.clientDetail.UserName = (_d = (_c = this.editClient) === null || _c === void 0 ? void 0 : _c.get('UserName')) === null || _d === void 0 ? void 0 : _d.value;
                this.clientDetail.Email = (_f = (_e = this.editClient) === null || _e === void 0 ? void 0 : _e.get('email')) === null || _f === void 0 ? void 0 : _f.value;
                this.tableService.getTable()[index] = this.clientDetail;
              } else {
                this.clientDetail = new _ngtable__WEBPACK_IMPORTED_MODULE_2__["Table"]();
                this.clientDetail.Id = Math.max.apply(Math, this.tableService.getTable().map(function (o) {
                  return o.Id;
                })) + 1;
                this.clientDetail.Name = (_h = (_g = this.editClient) === null || _g === void 0 ? void 0 : _g.get('fullName')) === null || _h === void 0 ? void 0 : _h.value;
                this.clientDetail.UserName = (_k = (_j = this.editClient) === null || _j === void 0 ? void 0 : _j.get('UserName')) === null || _k === void 0 ? void 0 : _k.value;
                this.clientDetail.Email = (_m = (_l = this.editClient) === null || _l === void 0 ? void 0 : _l.get('email')) === null || _m === void 0 ? void 0 : _m.value;
                this.clientDetail.imagePath = 'assets/image/3.jpg';
                this.tableService.getTable().push(this.clientDetail);
              }

              this.modalService.dismissAll();
              this.clientDetail = null;
              this.ngOnInit();
            }
          }, {
            key: "searchTerm",
            get: function get() {
              return this._searchTerm;
            },
            set: function set(val) {
              this._searchTerm = val;
              this.filterClient = this.filter(val);
            }
          }, {
            key: "csearchTerm",
            get: function get() {
              return this._csearchTerm;
            },
            set: function set(val) {
              this._csearchTerm = val;
              this.cfilterClient = this.cfilter(val);
              this.totalLengthOfCollection = this.cfilterClient.length;
            }
          }]);

          return TableComponent;
        }();

        TableComponent.ɵfac = function TableComponent_Factory(t) {
          return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngtable_service__WEBPACK_IMPORTED_MODULE_3__["TableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]));
        };

        TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: TableComponent,
          selectors: [["app-ngtable"]],
          viewQuery: function TableComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgbdSortableHeader, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headers = _t);
            }
          },
          decls: 137,
          vars: 29,
          consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-0"], [1, "lstick"], [1, "card-subtitle"], [1, "text-danger"], [1, "d-flex", "mt-3"], ["type", "text", "placeholder", "Search", 1, "form-control", "w-auto", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "ml-auto", 3, "click"], [1, "table", "table-striped", "border", "mt-4"], ["sortable", "Name", 3, "sort"], ["sortable", "UserName", 3, "sort"], ["sortable", "Email", 3, "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "page", "pageSize", "collectionSize", "pageChange"], [1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "form-group", "form-inline", "mt-3"], ["placeholder", "Search", "type", "text", 1, "form-control", "ml-2", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped", "border"], [1, "custom-select", 2, "float", "right", "width", "auto", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "page", "pageSize", "pageChange"], ["editModal", ""], [1, "mr-2", "rounded-circle", 2, "width", "30px", 3, "src"], [3, "result", "term"], [1, "ti-pencil", "text-info", "m-r-10", "pointer", 3, "click"], [1, "ti-trash", "text-danger", "pointer", 3, "click"], [1, "modal-header"], ["id", "editLabel", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "fullName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "formControlName", "fullName", "id", "fullName", 1, "form-control", 3, "blur"], ["class", "help-block", 4, "ngIf"], ["for", "userName", 1, "col-sm-4", "col-form-label"], ["type", "text", "formControlName", "UserName", "id", "userName", 1, "form-control", 3, "blur"], ["for", "email", 1, "col-sm-4", "col-form-label"], ["type", "email", "formControlName", "email", "id", "email", 1, "form-control", 3, "blur"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "help-block"]],
          template: function TableComponent_Template(rf, ctx) {
            if (rf & 1) {
              var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Complete Table ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "This is a more complete example with ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Add, Edit, Delete, sorting, filtering, paging");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TableComponent_Template_input_ngModelChange_12_listener($event) {
                return ctx.csearchTerm = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_Template_button_click_13_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

                var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](136);

                return ctx.openModal(_r5, null);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "+ Add Client");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function TableComponent_Template_th_sort_20_listener($event) {
                return ctx.onSort($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function TableComponent_Template_th_sort_22_listener($event) {
                return ctx.onSort($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "User Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function TableComponent_Template_th_sort_24_listener($event) {
                return ctx.onSort($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Action");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TableComponent_tr_29_Template, 13, 8, "tr", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "slice");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ngb-pagination", 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TableComponent_Template_ngb_pagination_pageChange_32_listener($event) {
                return ctx.cpage = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TableComponent_Template_select_ngModelChange_33_listener($event) {
                return ctx.cpageSize = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2 items per page");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "4 items per page");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "6 items per page");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Basic Table ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Table is just a mapping of objects to table rows with ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ngFor");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "ID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "User Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Email");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, TableComponent_tr_61_Template, 10, 5, "tr", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Sortable Table ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "You can introduce custom directives for table headers to sort columns");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "ID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function TableComponent_Template_th_sort_74_listener($event) {
                return ctx.onSort($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th", 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function TableComponent_Template_th_sort_76_listener($event) {
                return ctx.onSort($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "User Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function TableComponent_Template_th_sort_78_listener($event) {
                return ctx.onSort($event);
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Email");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, TableComponent_tr_81_Template, 10, 5, "tr", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Search and filtering ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "You can do filter table data, in this case with observables and our NgbHighlight component used in Typeahead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Full text search: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "input", 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TableComponent_Template_input_ngModelChange_91_listener($event) {
                return ctx.searchTerm = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "table", 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "ID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Full Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "User Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Email");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, TableComponent_tr_104_Template, 10, 8, "tr", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "span", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Pagination Table ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "You can bind our NgbPagination component with slicing the data list");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "select", 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TableComponent_Template_select_ngModelChange_112_listener($event) {
                return ctx.pageSize = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "2 items per page");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "4 items per page");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "option", 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "6 items per page");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "table", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "ID");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Full Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "User Name");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "th");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Email");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, TableComponent_tr_131_Template, 10, 5, "tr", 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](132, "slice");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "ngb-pagination", 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TableComponent_Template_ngb_pagination_pageChange_134_listener($event) {
                return ctx.page = $event;
              });

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, TableComponent_ng_template_135_Template, 31, 6, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.csearchTerm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](30, 21, ctx.cfilterClient, (ctx.cpage - 1) * ctx.cpageSize, (ctx.cpage - 1) * ctx.cpageSize + ctx.cpageSize));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.cpage)("pageSize", ctx.cpageSize)("collectionSize", ctx.totalLengthOfCollection);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cpageSize);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clientList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortClientList);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterClient);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pageSize);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](132, 25, ctx.clientList, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.clientList.length)("page", ctx.page)("pageSize", ctx.pageSize);
            }
          },
          directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], NgbdSortableHeader, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPagination"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]],
          styles: [".pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nth[sortable].asc[_ngcontent-%COMP%], th[sortable].desc[_ngcontent-%COMP%] {\n  display: flex;\n  border: 0px;\n}\n\nth[sortable].asc[_ngcontent-%COMP%]:after, th[sortable].desc[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  background: url('custom-select.b7cff2017c9016de0a3f.png') no-repeat left center;\n  background-size: 12px;\n  width: 25px;\n  height: 25px;\n  position: relative;\n  right: -12px;\n  margin-right: -22px;\n}\n\nth[sortable].desc[_ngcontent-%COMP%]:after {\n  transform: rotate(180deg);\n  background-position: right center;\n}"]
        });
        return TableComponent;
      }();
      /***/

    },

    /***/
    "./src/app/table/ngtable/ngtable.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/table/ngtable/ngtable.service.ts ***!
      \**************************************************/

    /*! exports provided: TableService */

    /***/
    function srcAppTableNgtableNgtableServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableService", function () {
        return TableService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ngtable_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ngtable-data */
      "./src/app/table/ngtable/ngtable-data.ts");

      var TableService = /*@__PURE__*/function () {
        var TableService = /*#__PURE__*/function () {
          function TableService() {
            _classCallCheck(this, TableService);

            this.tableList = _ngtable_data__WEBPACK_IMPORTED_MODULE_1__["tableList"];
          }

          _createClass(TableService, [{
            key: "getTable",
            value: function getTable() {
              return this.tableList;
            }
          }]);

          return TableService;
        }();

        TableService.ɵfac = function TableService_Factory(t) {
          return new (t || TableService)();
        };

        TableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
          token: TableService,
          factory: TableService.ɵfac
        });
        return TableService;
      }();
      /***/

    },

    /***/
    "./src/app/table/ngtable/ngtable.ts":
    /*!******************************************!*\
      !*** ./src/app/table/ngtable/ngtable.ts ***!
      \******************************************/

    /*! exports provided: Table */

    /***/
    function srcAppTableNgtableNgtableTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Table", function () {
        return Table;
      });

      var Table = function Table() {
        _classCallCheck(this, Table);

        this.Id = 0;
        this.Name = null;
        this.UserName = null;
        this.Email = null;
        this.imagePath = null;
      };
      /***/

    },

    /***/
    "./src/app/table/sizing/size.component.ts":
    /*!************************************************!*\
      !*** ./src/app/table/sizing/size.component.ts ***!
      \************************************************/

    /*! exports provided: TablesizeComponent */

    /***/
    function srcAppTableSizingSizeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesizeComponent", function () {
        return TablesizeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var TablesizeComponent = /*@__PURE__*/function () {
        var TablesizeComponent = function TablesizeComponent() {
          _classCallCheck(this, TablesizeComponent);
        };

        TablesizeComponent.ɵfac = function TablesizeComponent_Factory(t) {
          return new (t || TablesizeComponent)();
        };

        TablesizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: TablesizeComponent,
          selectors: [["ng-component"]],
          decls: 173,
          vars: 0,
          consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "table", "m-b-0"], ["scope", "col"], ["scope", "row"], [1, "table", "table-dark", "m-b-0"], [1, "table", "table-sm", "m-b-0"], ["colspan", "2"], [1, "table", "table-sm", "table-dark", "m-b-0"]],
          template: function TablesizeComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Default Size Light Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Larry");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Default Size Dark Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "table", 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Larry");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Small Size Light Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "table", 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Larry the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h4", 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Small Size Dark Table");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "table", 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "thead");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "#");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "First");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Last");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th", 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Handle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tbody");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Mark");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Otto");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "@mdo");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "2");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Jacob");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Thornton");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "@fat");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "th", 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "3");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td", 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Larry the Bird");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "@twitter");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          encapsulation: 2
        });
        return TablesizeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/table/tables.module.ts":
    /*!****************************************!*\
      !*** ./src/app/table/tables.module.ts ***!
      \****************************************/

    /*! exports provided: TablesModule */

    /***/
    function srcAppTableTablesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesModule", function () {
        return TablesModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _tables_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tables.routing */
      "./src/app/table/tables.routing.ts");
      /* harmony import */


      var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./data-table/data-table.component */
      "./src/app/table/data-table/data-table.component.ts");
      /* harmony import */


      var _basic_basic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./basic/basic.component */
      "./src/app/table/basic/basic.component.ts");
      /* harmony import */


      var _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./dark-basic/dark.component */
      "./src/app/table/dark-basic/dark.component.ts");
      /* harmony import */


      var _color_table_color_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./color-table/color.component */
      "./src/app/table/color-table/color.component.ts");
      /* harmony import */


      var _sizing_size_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./sizing/size.component */
      "./src/app/table/sizing/size.component.ts");
      /* harmony import */


      var _ngtable_ngtable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./ngtable/ngtable.component */
      "./src/app/table/ngtable/ngtable.component.ts");
      /* harmony import */


      var _ngtable_ngtable_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./ngtable/ngtable.service */
      "./src/app/table/ngtable/ngtable.service.ts");

      var TablesModule = /*@__PURE__*/function () {
        var TablesModule = function TablesModule() {
          _classCallCheck(this, TablesModule);
        };

        TablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: TablesModule
        });
        TablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function TablesModule_Factory(t) {
            return new (t || TablesModule)();
          },
          providers: [_ngtable_ngtable_service__WEBPACK_IMPORTED_MODULE_13__["TableService"]],
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_6__["TablesRoutes"]), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]]]
        });
        return TablesModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TablesModule, {
          declarations: [_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_7__["DatatableComponent"], _basic_basic_component__WEBPACK_IMPORTED_MODULE_8__["BasictableComponent"], _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_9__["DarktableComponent"], _ngtable_ngtable_component__WEBPACK_IMPORTED_MODULE_12__["NgbdSortableHeader"], _color_table_color_component__WEBPACK_IMPORTED_MODULE_10__["ColortableComponent"], _sizing_size_component__WEBPACK_IMPORTED_MODULE_11__["TablesizeComponent"], _ngtable_ngtable_component__WEBPACK_IMPORTED_MODULE_12__["TableComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/table/tables.routing.ts":
    /*!*****************************************!*\
      !*** ./src/app/table/tables.routing.ts ***!
      \*****************************************/

    /*! exports provided: TablesRoutes */

    /***/
    function srcAppTableTablesRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TablesRoutes", function () {
        return TablesRoutes;
      });
      /* harmony import */


      var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data-table/data-table.component */
      "./src/app/table/data-table/data-table.component.ts");
      /* harmony import */


      var _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic/basic.component */
      "./src/app/table/basic/basic.component.ts");
      /* harmony import */


      var _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dark-basic/dark.component */
      "./src/app/table/dark-basic/dark.component.ts");
      /* harmony import */


      var _color_table_color_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./color-table/color.component */
      "./src/app/table/color-table/color.component.ts");
      /* harmony import */


      var _sizing_size_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sizing/size.component */
      "./src/app/table/sizing/size.component.ts");
      /* harmony import */


      var _ngtable_ngtable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ngtable/ngtable.component */
      "./src/app/table/ngtable/ngtable.component.ts");

      var TablesRoutes = [{
        path: '',
        children: [{
          path: 'datatable',
          component: _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__["DatatableComponent"],
          data: {
            title: 'Data Table',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Data Table'
            }]
          }
        }, {
          path: 'basictables',
          component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_1__["BasictableComponent"],
          data: {
            title: 'Basic Tables',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Basic Tables'
            }]
          }
        }, {
          path: 'darktables',
          component: _dark_basic_dark_component__WEBPACK_IMPORTED_MODULE_2__["DarktableComponent"],
          data: {
            title: 'Dark Tables',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Dark Tables'
            }]
          }
        }, {
          path: 'colortables',
          component: _color_table_color_component__WEBPACK_IMPORTED_MODULE_3__["ColortableComponent"],
          data: {
            title: 'Color Tables',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Color Tables'
            }]
          }
        }, {
          path: 'tablesizing',
          component: _sizing_size_component__WEBPACK_IMPORTED_MODULE_4__["TablesizeComponent"],
          data: {
            title: 'Table Sizing',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Table Sizing'
            }]
          }
        }, {
          path: 'ngtable',
          component: _ngtable_ngtable_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"],
          data: {
            title: 'Ng Table',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Ng Table'
            }]
          }
        }]
      }];
      /***/
    }
  }]);
})();