(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Api/ApiComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Api/ApiComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _examples_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples.json */ "./resources/js/components/Api/examples.json");
var _examples_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./examples.json */ "./resources/js/components/Api/examples.json", 1);
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


var ExampleComponent = function ExampleComponent() {
  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./ExampleComponent */ "./resources/js/components/Api/ExampleComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      Examples: _examples_json__WEBPACK_IMPORTED_MODULE_0__
    };
  },
  mounted: function mounted() {
    // Add prettyprint cdn to page //
    var pretty = document.createElement('script');
    pretty.setAttribute('src', 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=desert');
    document.head.appendChild(pretty);
  },
  components: {
    ExampleComponent: ExampleComponent
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Api/ApiComponent.vue?vue&type=template&id=3e4c1c63&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Api/ApiComponent.vue?vue&type=template&id=3e4c1c63& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "api" } }, [
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c(
        "div",
        { staticClass: "col" },
        [
          _c("ExampleComponent", {
            attrs: { requests: _vm.Examples.requests.notes }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c(
        "div",
        { staticClass: "col" },
        [
          _c("ExampleComponent", {
            attrs: { requests: _vm.Examples.requests.user }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-10 mb-2" }, [
        _c("div", { staticClass: "card shadow" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "card mb-2" }, [
              _c("h1", { staticClass: "card-header text-center" }, [
                _vm._v("Interacting")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("dl", [
                  _c("dt", [
                    _vm._v(
                      "\n                                    Preparing to interact with the API\n                                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dd", [
                    _vm._v(
                      "\n                                    In order to interact with the API, you must have a pre-qualified access token.\n                                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dd", [
                    _vm._v(
                      '\n                                    Register an account, verify your email address, then click on the context menu under your name\n                                    in the right hand of the navigation bar. Select the "Access Tokens" option.\n                                '
                    )
                  ]),
                  _vm._v(" "),
                  _c("dd", [
                    _vm._v(
                      "\n                                    In the Access Tokens page, you will see your previous access keys if available, and the ability to\n                                    create a new token. Use the form to generate a token, which will only be visible until the page\n                                    refreshes. At that time, you will need to generate another token.\n                                    "
                    ),
                    _c("strong", [
                      _vm._v(
                        "Copy this token, you will need to use it for API requests."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("dt", [
                    _vm._v(
                      "\n                                    Using your 'key' and 'token'\n                                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dd", [
                    _vm._v(
                      "\n                                    Every request needs to include a token. This token is generated by following the instructions above.\n                                    Attach this token as a "
                    ),
                    _c("code", [_vm._v("`Authorization Bearer`")]),
                    _vm._v(" header.\n                                ")
                  ]),
                  _vm._v(" "),
                  _c("dt", [
                    _vm._v(
                      "\n                                    Requests: All requests should have the following headers\n                                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dd", [_c("code", [_vm._v("Accept: application/json")])]),
                  _vm._v(" "),
                  _c("dd", [
                    _c("code", [_vm._v("Authorization: bearer {token}")])
                  ]),
                  _vm._v(" "),
                  _c("dt", [
                    _vm._v(
                      "\n                                    Variables: Variables are surrounded by brackets `{variable_name}`\n                                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dd", [
                    _c("code", [_vm._v("host")]),
                    _vm._v(
                      ": https://springnotes.loc/api/v1\n                                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("dd", [
                    _c("code", [_vm._v("note")]),
                    _vm._v(": Note ID\n                                ")
                  ]),
                  _vm._v(" "),
                  _c("dd", [
                    _c("code", [_vm._v("user")]),
                    _vm._v(": User ID\n                                ")
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mt-3" }, [
      _c("div", { staticClass: "col" }, [
        _c("h1", { staticClass: "text-center" }, [_vm._v("Usage")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row my-3" }, [
      _c("div", { staticClass: "col" }, [
        _c("h2", { staticClass: "text-center" }, [_vm._v("Notes")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row my-3" }, [
      _c("div", { staticClass: "col" }, [
        _c("h2", { staticClass: "text-center" }, [_vm._v("User")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Api/ApiComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Api/ApiComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiComponent_vue_vue_type_template_id_3e4c1c63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiComponent.vue?vue&type=template&id=3e4c1c63& */ "./resources/js/components/Api/ApiComponent.vue?vue&type=template&id=3e4c1c63&");
/* harmony import */ var _ApiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Api/ApiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApiComponent_vue_vue_type_template_id_3e4c1c63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApiComponent_vue_vue_type_template_id_3e4c1c63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Api/ApiComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Api/ApiComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Api/ApiComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApiComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Api/ApiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Api/ApiComponent.vue?vue&type=template&id=3e4c1c63&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Api/ApiComponent.vue?vue&type=template&id=3e4c1c63& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiComponent_vue_vue_type_template_id_3e4c1c63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ApiComponent.vue?vue&type=template&id=3e4c1c63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Api/ApiComponent.vue?vue&type=template&id=3e4c1c63&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiComponent_vue_vue_type_template_id_3e4c1c63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiComponent_vue_vue_type_template_id_3e4c1c63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Api/examples.json":
/*!***************************************************!*\
  !*** ./resources/js/components/Api/examples.json ***!
  \***************************************************/
/*! exports provided: error_body, requests, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"error_body\":{\"message\":\"The given data was invalid.\",\"errors\":{\"example_field_1\":[\"error\",\"messages\"],\"example_field_2\":[\"pertaining\",\"to field\"]}},\"requests\":{\"notes\":{\"get_all\":{\"header\":\"Get all notes\",\"type\":\"GET\",\"code\":200,\"url\":\"{host}/notes\",\"params\":{\"page\":{\"type\":\"int|optional\",\"description\":\"Page to fetch\"},\"filter\":{\"type\":\"string|optional\",\"description\":\"Sort order (<code>'newest'</code>, <code>'oldest'</code>)\"}},\"description\":\"Gets all notes in the system\",\"response_text\":\"Returns an array of all notes\",\"response\":{\"current_page\":1,\"data\":[{\"id\":1,\"user_id\":17,\"title\":\"Odio distinctio doloribus omnis qui voluptates molestiae sed porro.\",\"body\":\"Reprehenderit nisi ut quia laboriosam. Ut non eius et quasi. Voluptatem error quia aperiam aut facilis consequatur ex. Eos vitae placeat ipsa ipsa expedita quibusdam. Ut facere iusto non reiciendis blanditiis expedita rerum.\\n\\nQui repellat amet laboru...\",\"created_at\":\"2019-10-01T13:50:55.000000Z\",\"updated_at\":\"2019-10-01T13:50:55.000000Z\",\"comment_count\":39,\"author\":{\"id\":17,\"name\":\"Brooks Lehner Sr.\",\"email\":\"pouros.liza@example.net\",\"created_at\":\"2019-12-12T07:22:35.000000Z\",\"updated_at\":\"2019-12-12T07:22:35.000000Z\"}},\"...additional paginated results\"],\"first_page_url\":\"https://springnotes.loc/api/v1/notes?page=1\",\"from\":1,\"last_page\":6,\"last_page_url\":\"https://springnotes.loc/api/v1/notes?page=6\",\"next_page_url\":\"https://springnotes.loc/api/v1/notes?page=2\",\"path\":\"https://springnotes.loc/api/v1/notes\",\"per_page\":10,\"prev_page_url\":null,\"to\":10,\"total\":51}},\"by_id\":{\"header\":\"Get a single note\",\"type\":\"GET\",\"code\":200,\"url\":\"{host}/notes/{note}\",\"params\":{},\"response_text\":\"Returns a single note\",\"response\":{\"id\":3,\"user_id\":16,\"title\":\"Voluptas neque cum excepturi et.\",\"body\":\"Et nihil accusantium et. Qui quidem dolor expedita delectus suscipit ipsum. Vero culpa quisquam quia corrupti. Rerum quas dolore est qui ad vel ea.\",\"created_at\":\"2020-08-03T18:36:29.000000Z\",\"updated_at\":\"2020-08-03T18:36:29.000000Z\",\"author\":{\"id\":16,\"name\":\"Michale Littel II\",\"email\":\"ali96@example.com\",\"created_at\":\"2019-12-24T04:00:46.000000Z\",\"updated_at\":\"2019-12-24T04:00:46.000000Z\"}}},\"new_note\":{\"header\":\"Create a new note\",\"type\":\"POST\",\"code\":201,\"url\":\"{host}/notes\",\"params\":{\"title\":{\"type\":\"string|required\",\"description\":\"Title of the note\"},\"body\":{\"type\":\"string|required\",\"description\":\"Text body of the note\"}},\"response_text\":\"Returns the model of the note created\",\"response\":{\"title\":\"This is a test title\",\"body\":\"This is a test body\",\"user_id\":2,\"updated_at\":\"2020-08-09T17:55:18.000000Z\",\"created_at\":\"2020-08-09T17:55:18.000000Z\",\"id\":52}},\"update_note\":{\"header\":\"Update a note\",\"type\":\"PUT\",\"code\":202,\"url\":\"{host}/notes/{note}\",\"params\":{\"title\":{\"type\":\"string|required\",\"description\":\"Title of the note\"},\"body\":{\"type\":\"string|required\",\"description\":\"Text body of the note\"}},\"response_text\":\"Returns the model of the newly updated note\",\"response\":{\"id\":41,\"user_id\":2,\"title\":\"Quasi\",\"body\":\"Placeat quidem asperiores magni quasi est aut quis. Tenetur quia sunt atque dolorem tenetur et quidem. Consequuntur quod minima quas iste similique qui perferendis. Nobis qui et voluptates ut.\\n\\nAd alias alias iure modi provident minima rem. Accusamus ad eius saepe culpa molestiae illum.\\n\\nQuia vitae consequatur architecto et velit magni itaque. Odit magnam tempore repudiandae error aut incidunt et. Ad est assumenda aliquid officiis.\\n\\nVoluptatem nesciunt numquam in veniam. Sed aut aspernatur\",\"created_at\":\"2020-04-24T09:17:42.000000Z\",\"updated_at\":\"2020-08-09T18:14:41.000000Z\",\"author\":{\"id\":2,\"name\":\"Test\",\"email\":\"test@springnotes.com\",\"created_at\":\"2020-08-03T18:36:29.000000Z\",\"updated_at\":\"2020-08-03T18:36:29.000000Z\"}}},\"delete_note\":{\"header\":\"Delete a note\",\"type\":\"DELETE\",\"code\":204,\"url\":\"{host}/notes/{note}\",\"params\":{},\"description\":\"\",\"response_text\":\"Returns an empty response\",\"response\":null}},\"user\":{\"get_all_notes\":{\"header\":\"Get all notes for user\",\"type\":\"GET\",\"code\":200,\"url\":\"{host}/users/{user}/notes\",\"params\":{\"page\":{\"type\":\"int|optional\",\"description\":\"Page to fetch\"}},\"description\":\"Gets all notes for the user\",\"response_text\":\"Returns an array of all notes\",\"response\":{\"current_page\":1,\"data\":[{\"id\":6,\"user_id\":2,\"title\":\"Libero est sed totam repudiandae.\",\"body\":\"Voluptas ut voluptates architecto et minima. Perspiciatis debitis sequi architecto est. Laboriosam provident sint labore adipisci animi est. Distinctio et quis quaerat quas voluptatem a enim.\\n\\nDeserunt et dolor et voluptatem. Et quibusdam error optio repudiandae nam. Consequatur aliquid consequatur libero autem non sapiente earum.\\n\\nFugiat hic est assumenda in necessitatibus. Sapiente sit quaerat dolore quia voluptatem velit quia quidem. Eum libero rerum omnis laborum.\\n\\nUnde inventore aspernatur dolorem optio est beatae. Ut id et natus quibusdam. Aliquam non aliquam dignissimos consequatur.\",\"created_at\":\"2019-12-03T21:32:47.000000Z\",\"updated_at\":\"2020-02-24T04:18:22.000000Z\",\"author\":{\"id\":2,\"name\":\"Test\",\"email\":\"test@springnotes.com\",\"created_at\":\"2020-08-03T18:36:29.000000Z\",\"updated_at\":\"2020-08-03T18:36:29.000000Z\"}},\"...additional entries\"],\"first_page_url\":\"https://springnotes.loc/api/v1/users/2/notes?page=1\",\"from\":1,\"last_page\":1,\"last_page_url\":\"https://springnotes.loc/api/v1/users/2/notes?page=1\",\"next_page_url\":null,\"path\":\"https://springnotes.loc/api/v1/users/2/notes\",\"per_page\":10,\"prev_page_url\":null,\"to\":7,\"total\":7}},\"get_current_user\":{\"header\":\"Get current user\",\"type\":\"GET\",\"code\":200,\"url\":\"{host}/user\",\"params\":{},\"description\":\"Gets the currently authenticated user\",\"response_text\":\"Returns the current user model\",\"response\":{\"id\":2,\"name\":\"Test\",\"email\":\"test@springnotes.com\",\"created_at\":\"2020-08-03T18:36:29.000000Z\",\"updated_at\":\"2020-08-03T18:36:29.000000Z\",\"verified\":true}}}}}");

/***/ })

}]);