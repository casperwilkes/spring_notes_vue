(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(s,e,t){"use strict";t.r(e);var a={props:{requests:Object,header:String}},d=t(0),r=Object(d.a)(a,(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("div",{staticClass:"row my-3"},[t("div",{staticClass:"col"},[t("h2",{staticClass:"text-center text-capitalize",attrs:{id:s.header}},[s._v(s._s(s.header))])])]),s._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-11"},s._l(s.requests,(function(e,a){return t("div",{key:a,staticClass:"card mb-2 shadow"},[t("p",{staticClass:"h3 card-header text-capitalize"},[s._v(s._s(e.header))]),s._v(" "),t("div",{staticClass:"card-body"},[t("dl",[t("dt",[s._v("Description")]),s._v(" "),t("dd",{domProps:{innerHTML:s._s(e.description)}}),s._v(" "),t("dt",[s._v("Request")]),s._v(" "),t("dd",[t("span",{staticClass:"text-uppercase"},[s._v(s._s(e.type))]),s._v("\n                            - "),t("code",[s._v(s._s(e.url))])]),s._v(" "),t("dt",[s._v("Parameters")]),s._v(" "),0===Object.keys(e.params).length?t("dd",[s._v("No parameters")]):s._l(e.params,(function(e,a){return t("dd",{key:a},[s._v("\n                            "+s._s(a)+": "),t("code",[s._v(s._s(e.type))]),s._v("\n                            - "),t("span",{domProps:{innerHTML:s._s(e.description)}})])})),s._v(" "),t("dt",[s._v("Response Code")]),s._v(" "),t("dd",[t("code",[s._v(s._s(e.code))])]),s._v(" "),t("dt",[s._v("Response Body")]),s._v(" "),t("dd",[s._v(s._s(e.response_text))])],2),s._v(" "),t("pre",{staticClass:"prettyprint lang-json"},[s._v(s._s(JSON.stringify(e.response,null,4)))])])])})),0)])])}),[],!1,null,null,null);e.default=r.exports}}]);