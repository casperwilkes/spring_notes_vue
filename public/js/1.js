(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      date_format: "MMMM Do YYYY [at] H:mm a"
    };
  },
  props: {
    note: Object
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['user'])),
  methods: {
    datesEqual: function datesEqual(note) {
      return note.created_at === note.updated_at;
    },
    authUser: function authUser(note) {
      return this.user.id === note.author.id;
    },
    deleteNote: function deleteNote(note) {
      console.log(note);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesIndexComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notes/NotesIndexComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Elements_NoteBodyComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Elements/NoteBodyComponent */ "./resources/js/components/Notes/Elements/NoteBodyComponent.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      page: 1,
      notes: []
    };
  },
  props: {
    filter: String
  },
  watch: {
    page_bottom: function page_bottom(newVal) {
      if (newVal) {
        this.page++;
        this.getNotes();
      }
    },
    filter: function filter() {
      this.initNotes();
    }
  },
  components: {
    NoteBodyComponent: _Elements_NoteBodyComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.scroll();
    this.getNotes();
  },
  methods: {
    /**
     * Gets notes based on scroll
     */
    getNotes: function getNotes() {
      var _this = this;

      axios.get("/api/v1/notes", {
        params: {
          page: this.page,
          filter: this.filter
        }
      }).then(function (res) {
        var _this$notes;

        return (_this$notes = _this.notes).push.apply(_this$notes, _toConsumableArray(res.data.data));
      })["catch"](function (err) {
        return console.log(err);
      });
    },

    /**
     * Initializes page when filter has been changed
     */
    initNotes: function initNotes() {
      var _this2 = this;

      // Set this page to 1 //
      this.page = 1;
      axios.get("/api/v1/notes", {
        params: {
          page: this.page,
          filter: this.filter
        }
      }).then(function (res) {
        return _this2.notes = res.data.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=template&id=ef8046ec&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=template&id=ef8046ec& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row justify-content-center mb-2" }, [
    _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "card shadow" }, [
        _c("p", { staticClass: "card-header h3 text-center text-capitalize" }, [
          _vm._v(
            "\n                " + _vm._s(_vm.note.title) + "\n            "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "p",
            { staticClass: "card-text" },
            [
              _vm._v("\n                    Created by\n                    "),
              _c(
                "router-link",
                {
                  attrs: {
                    to: {
                      name: "notes_user",
                      params: { user: _vm.note.author.id }
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.note.author.name))]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(
                "\n                    on " +
                  _vm._s(
                    _vm._f("moment")(_vm.note.created_at, _vm.date_format)
                  ) +
                  "\n                "
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("p", { staticClass: "card-text" }, [
            _c("span", { staticClass: "note-body" }, [
              _vm._v(_vm._s(_vm.note.body))
            ])
          ])
        ]),
        _vm._v(" "),
        !_vm.datesEqual(_vm.note) || _vm.authUser(_vm.note)
          ? _c("div", { staticClass: "card-footer" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-8 align-self-center" }, [
                  !_vm.datesEqual(_vm.note)
                    ? _c("span", [
                        _vm._v(
                          "Updated at " +
                            _vm._s(
                              _vm._f("moment")(
                                _vm.note.updated_at,
                                _vm.date_format
                              )
                            )
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _vm.authUser(_vm.note)
                  ? _c("div", { staticClass: "col-md-4 text-right" }, [
                      _c(
                        "div",
                        { staticClass: "btn-group" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-primary card-link",
                              attrs: {
                                to: {
                                  name: "notes_edit",
                                  params: { id: _vm.note.id }
                                }
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: ["far", "edit"] }
                              }),
                              _vm._v(
                                "\n                                Edit\n                            "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger card-link",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.$emit("deleteNote", _vm.note.id)
                                }
                              }
                            },
                            [
                              _c("font-awesome-icon", {
                                attrs: { icon: ["fas", "folder-minus"] }
                              }),
                              _vm._v(
                                "\n                                Delete\n                            "
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  : _vm._e()
              ])
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesIndexComponent.vue?vue&type=template&id=36215e23&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notes/NotesIndexComponent.vue?vue&type=template&id=36215e23& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.notes, function(note, nid) {
      return _c("NoteBodyComponent", { key: nid, attrs: { note: note } })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Notes/Elements/NoteBodyComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Notes/Elements/NoteBodyComponent.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoteBodyComponent_vue_vue_type_template_id_ef8046ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoteBodyComponent.vue?vue&type=template&id=ef8046ec& */ "./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=template&id=ef8046ec&");
/* harmony import */ var _NoteBodyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteBodyComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NoteBodyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoteBodyComponent_vue_vue_type_template_id_ef8046ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NoteBodyComponent_vue_vue_type_template_id_ef8046ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Notes/Elements/NoteBodyComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteBodyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NoteBodyComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteBodyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=template&id=ef8046ec&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=template&id=ef8046ec& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteBodyComponent_vue_vue_type_template_id_ef8046ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NoteBodyComponent.vue?vue&type=template&id=ef8046ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=template&id=ef8046ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteBodyComponent_vue_vue_type_template_id_ef8046ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteBodyComponent_vue_vue_type_template_id_ef8046ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Notes/NotesIndexComponent.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Notes/NotesIndexComponent.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotesIndexComponent_vue_vue_type_template_id_36215e23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotesIndexComponent.vue?vue&type=template&id=36215e23& */ "./resources/js/components/Notes/NotesIndexComponent.vue?vue&type=template&id=36215e23&");
/* harmony import */ var _NotesIndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesIndexComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Notes/NotesIndexComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotesIndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotesIndexComponent_vue_vue_type_template_id_36215e23___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotesIndexComponent_vue_vue_type_template_id_36215e23___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Notes/NotesIndexComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Notes/NotesIndexComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Notes/NotesIndexComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesIndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotesIndexComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesIndexComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesIndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Notes/NotesIndexComponent.vue?vue&type=template&id=36215e23&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Notes/NotesIndexComponent.vue?vue&type=template&id=36215e23& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesIndexComponent_vue_vue_type_template_id_36215e23___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotesIndexComponent.vue?vue&type=template&id=36215e23& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesIndexComponent.vue?vue&type=template&id=36215e23&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesIndexComponent_vue_vue_type_template_id_36215e23___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesIndexComponent_vue_vue_type_template_id_36215e23___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);