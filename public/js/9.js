(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{65:function(s,r,o){"use strict";o.r(r);var t={data:function(){return{password:"",password_confirmation:"",password_current:"",errors:{}}},methods:{change:function(){var s=this,r={password:this.password,password_confirmation:this.password_confirmation,password_current:this.password_current};axios.post("/api/v1/password/change",r).then((function(){s.flashMessage.success({message:"Password successfully updated"}),s.$router.push({name:"home"})})).catch((function(r){return s.errors=r.response.data.errors}))}},components:{FormErrorComponent:function(){return o.e(0).then(o.bind(null,8))}}},a=o(0),e=Object(a.a)(t,(function(){var s=this,r=s.$createElement,o=s._self._c||r;return o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-md-8"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-header"},[s._v("Change Password")]),s._v(" "),o("div",{staticClass:"card-body"},[o("form",{on:{submit:function(r){return r.preventDefault(),s.change(r)}}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password_current"}},[s._v("Current Password")]),s._v(" "),o("div",{staticClass:"col-md-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:s.password_current,expression:"password_current"}],staticClass:"form-control",class:void 0!==s.errors.password_current?"is-invalid":"",attrs:{autocomplete:"password_current",autofocus:"",id:"password_current",name:"password_current",required:"",type:"password"},domProps:{value:s.password_current},on:{input:function(r){r.target.composing||(s.password_current=r.target.value)}}}),s._v(" "),o("FormErrorComponent",{attrs:{errors:s.errors.password_current}})],1)]),s._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[s._v("Password")]),s._v(" "),o("div",{staticClass:"col-md-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"form-control",class:void 0!==s.errors.password?"is-invalid":"",attrs:{autocomplete:"new-password",id:"password",name:"password",required:"",type:"password"},domProps:{value:s.password},on:{input:function(r){r.target.composing||(s.password=r.target.value)}}}),s._v(" "),o("FormErrorComponent",{attrs:{errors:s.errors.password}})],1)]),s._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password-confirm"}},[s._v("Confirm Password")]),s._v(" "),o("div",{staticClass:"col-md-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:s.password_confirmation,expression:"password_confirmation"}],staticClass:"form-control",class:void 0!==s.errors.password_confirmation?"is-invalid":"",attrs:{autocomplete:"new-password",id:"password-confirm",name:"password_confirmation",required:"",type:"password"},domProps:{value:s.password_confirmation},on:{input:function(r){r.target.composing||(s.password_confirmation=r.target.value)}}}),s._v(" "),o("FormErrorComponent",{attrs:{errors:s.errors.password_confirmation}})],1)]),s._v(" "),s._m(0)])])])])])}),[function(){var s=this.$createElement,r=this._self._c||s;return r("div",{staticClass:"form-group row mb-0"},[r("div",{staticClass:"col-md-6 offset-md-4"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("\n                                Reset Password\n                            ")])])])}],!1,null,null,null);r.default=e.exports}}]);