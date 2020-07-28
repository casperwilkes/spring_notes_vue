(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comments/CommentBodyComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comments/CommentBodyComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-fragment */ "./node_modules/vue-fragment/dist/vue-fragment.esm.js");
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


var CommentComponent = function CommentComponent() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./CommentComponent */ "./resources/js/components/Comments/CommentComponent.vue"));
};

var EditModalComponent = function EditModalComponent() {
  return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./Elements/EditModalComponent */ "./resources/js/components/Comments/Elements/EditModalComponent.vue"));
};

var ReplyModalComponent = function ReplyModalComponent() {
  return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./Elements/ReplyModalComponent */ "./resources/js/components/Comments/Elements/ReplyModalComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    comment: Object
  },
  methods: {
    deleteComment: function deleteComment() {}
  },
  components: {
    ReplyModalComponent: ReplyModalComponent,
    CommentComponent: CommentComponent,
    EditModalComponent: EditModalComponent,
    Fragment: vue_fragment__WEBPACK_IMPORTED_MODULE_0__["Fragment"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comments/CommentBodyComponent.vue?vue&type=template&id=42f324dc&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comments/CommentBodyComponent.vue?vue&type=template&id=42f324dc& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "Fragment",
    [
      _c("img", {
        staticClass: "mr-3",
        attrs: { alt: "profile", src: "/img/profile.svg" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "media-body" },
        [
          _c("h5", { staticClass: "mt-0 mb-1" }, [
            _vm._v(_vm._s(_vm.comment.commenter.name) + " "),
            _c("small", { staticClass: "text-muted" }, [
              _vm._v(
                "- " +
                  _vm._s(
                    _vm._f("moment")(_vm.comment.created_at, _vm.date_format)
                  )
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticStyle: { "white-space": "pre-wrap" } }, [
            _vm._v(_vm._s(_vm.comment.comment))
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-link text-uppercase",
                attrs: {
                  "data-target": "#reply-modal-" + _vm.comment.id,
                  "data-toggle": "modal"
                }
              },
              [_vm._v("Reply")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-link text-uppercase",
                attrs: {
                  "data-target": "#comment-modal-" + _vm.comment.id,
                  "data-toggle": "modal"
                }
              },
              [_vm._v("Edit")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-link text-danger text-uppercase",
                on: { click: _vm.deleteComment }
              },
              [_vm._v("Delete")]
            )
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("CommentComponent", {
            attrs: { comments: _vm.comment.children, reply: true }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("EditModalComponent", {
        attrs: { comment: _vm.comment },
        on: {
          "update:comment": function($event) {
            _vm.comment = $event
          }
        }
      }),
      _vm._v(" "),
      _c("ReplyModalComponent", { attrs: { comment: _vm.comment } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Comments/CommentBodyComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Comments/CommentBodyComponent.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentBodyComponent_vue_vue_type_template_id_42f324dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentBodyComponent.vue?vue&type=template&id=42f324dc& */ "./resources/js/components/Comments/CommentBodyComponent.vue?vue&type=template&id=42f324dc&");
/* harmony import */ var _CommentBodyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentBodyComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Comments/CommentBodyComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CommentBodyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommentBodyComponent_vue_vue_type_template_id_42f324dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CommentBodyComponent_vue_vue_type_template_id_42f324dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Comments/CommentBodyComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Comments/CommentBodyComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Comments/CommentBodyComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBodyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CommentBodyComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comments/CommentBodyComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBodyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Comments/CommentBodyComponent.vue?vue&type=template&id=42f324dc&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Comments/CommentBodyComponent.vue?vue&type=template&id=42f324dc& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBodyComponent_vue_vue_type_template_id_42f324dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CommentBodyComponent.vue?vue&type=template&id=42f324dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comments/CommentBodyComponent.vue?vue&type=template&id=42f324dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBodyComponent_vue_vue_type_template_id_42f324dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentBodyComponent_vue_vue_type_template_id_42f324dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);