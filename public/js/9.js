(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{63:function(t,e,s){"use strict";s.r(e);var r={data:function(){return{email:"",status:"",errors:{}}},methods:{resetRequest:function(){var t=this;this.fetchToken(),axios.post("/password/email",{email:this.email}).then((function(e){return t.status=e.data.message})).catch((function(e){return t.errors=e.response.data.errors}))}},components:{FormErrorComponent:function(){return s.e(0).then(s.bind(null,9))}}},a=s(0),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("Reset Password")]),t._v(" "),s("div",{staticClass:"card-body"},[t.status.length>0?s("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("\n                    "+t._s(t.status)+"\n                ")]):t._e(),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.resetRequest(e)}}},[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("E-Mail Address")]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-control",class:void 0!==t.errors.email?"is-invalid":"",attrs:{autocomplete:"email",autofocus:"",id:"email",name:"email",required:"",type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),s("FormErrorComponent",{attrs:{errors:t.errors.email}})],1)]),t._v(" "),t._m(0)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row mb-0"},[e("div",{staticClass:"col-md-6 offset-md-4"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("\n                                Send Password Reset Link\n                            ")])])])}],!1,null,null,null);e.default=i.exports}}]);