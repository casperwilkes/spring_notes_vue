(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{66:function(t,e,n){"use strict";n.r(e);var s=n(1);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={data:function(){return{tokens:[],errors:{},token_name:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({tokens_exist:function(){return this.tokens.length>0}},Object(s.b)(["user"])),mounted:function(){this.fetchTokens()},methods:{fetchTokens:function(){var t=this;axios.get("/api/v1/users/".concat(this.user.id,"/tokens")).then((function(e){return t.tokens=e.data})).catch((function(t){return console.log(t)}))},generateToken:function(){var t=this,e=document.getElementById("token_text"),n=document.getElementById("token_output"),s=document.getElementById("form_submit");s.disabled=!0,axios.post("/api/v1/users/".concat(this.user.id,"/tokens"),{token_name:this.token_name}).then((function(o){n.className+=" border border-success",e.innerHTML="<pre>"+o.data.token+"</pre>",e.className+=" mt-2",s.disabled=!1,t.fetchTokens()})).catch((function(e){return t.errors=e.response.data.errors}))},deleteToken:function(t){var e=this,n=document.getElementById("delete_btn_".concat(t));n.disabled=!0,axios.delete("/api/v1/users/".concat(this.user.id,"/tokens/").concat(t)).then((function(){var n=_.findIndex(e.tokens,(function(e){return e.id===t}));e.tokens.splice(n,1)})).catch((function(){e.flashMessage.error({message:"Unable to delete token at this time"}),n.disabled=!1}))},copyToken:function(){var t=this;this.$nextTick((function(){var e=document.getElementById("token_text").innerText;if(0===e.length)t.flashMessage.warning({message:"No token generated to copy"});else{var n=document.getElementById("token_output"),s=document.createElement("span");s.innerText=e,n.append(s);var o=document.createRange(),r=window.getSelection();o.selectNodeContents(document.getElementById("token_text")),o.selectNodeContents(s),r.removeAllRanges(),r.addRange(o),document.execCommand("copy")?t.flashMessage.success({message:"Token copy success"}):t.flashMessage.error({message:"Token copy unsuccessful"}),s.remove()}}))}},components:{FormErrorComponent:function(){return n.e(0).then(n.bind(null,9))}}},c=n(0),i=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row mb-2"},[n("div",{staticClass:"col text-right"},[n("button",{staticClass:"btn btn-primary",attrs:{"aria-controls":"TokenForm","aria-expanded":"false","data-target":"#token_form","data-toggle":"collapse",type:"button"}},[n("font-awesome-icon",{attrs:{icon:["fas","plus-circle"]}}),t._v("\n                Generate Token\n            ")],1)])]),t._v(" "),n("div",{staticClass:"row mb-2 collapse justify-content-center",attrs:{id:"token_form"}},[n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"card card-body rounded shadow"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.generateToken(e)}}},[n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-2 col-form-label text-md-right",attrs:{for:"token_name"}},[t._v("Token Name")]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.token_name,expression:"token_name",modifiers:{trim:!0}}],staticClass:"form-control",class:void 0!==t.errors.token_name?"is-invalid":"",attrs:{autofocus:"",id:"token_name",name:"token_name",required:"",type:"text"},domProps:{value:t.token_name},on:{input:function(e){e.target.composing||(t.token_name=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),n("FormErrorComponent",{attrs:{errors:t.errors.token_name}})],1)]),t._v(" "),t._m(0)]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"card-body",attrs:{id:"token_output"}},[n("button",{staticClass:"btn btn-info mr-2",attrs:{type:"button"},on:{click:t.copyToken}},[n("font-awesome-icon",{attrs:{icon:["far","copy"]}}),t._v("\n                        Copy\n                    ")],1),t._v(" "),n("span",{staticClass:"card-text"},[t._v("Once generated, Your Token will appear below")]),t._v(" "),n("p",{staticClass:"card-text",attrs:{id:"token_text"}}),t._v(" "),t._m(1)])])])]),t._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-8"},[t.tokens_exist?n("table",{staticClass:"table table-hover"},[t._m(3),t._v(" "),n("tbody",t._l(t.tokens,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.created_at))]),t._v(" "),n("td",[t._v(t._s(e.last_used_at))]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-danger",attrs:{id:"delete_btn_"+e.id,type:"button"},on:{click:function(n){return t.deleteToken(e.id)}}},[t._v("\n                                Delete\n                            ")])])])})),0)]):n("div",{staticClass:"card"},[t._m(2)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group row mb-0"},[e("div",{staticClass:"col-md-8 offset-md-2"},[e("button",{staticClass:"btn btn-success",attrs:{id:"form_submit",type:"submit"}},[this._v("\n                                Generate\n                            ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"small"},[e("strong",[this._v("* Note:")]),this._v("\n                        Copy token after creation. Token only visible once.\n                    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-body text-center"},[e("p",{staticClass:"lead card-text"},[this._v("\n                        No Api access tokens assigned. Click generate to create some.\n                    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"text-center"},[n("tr",[n("th",[t._v("ID")]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Created")]),t._v(" "),n("th",[t._v("Last Active")]),t._v(" "),n("th",[t._v("Action")])])])}],!1,null,null,null);e.default=i.exports}}]);