(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{68:function(e,t,i){"use strict";i.r(t);var n=i(1);function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var a={data:function(){return{resent:!1,loading:!0,spinner_count:1,invalid:!1,verified:!1}},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},Object(n.b)(["user"])),methods:{counters:function(){var e=this;setInterval((function(){e.spinner_count<3&&e.spinner_count++}),1e3)},send:function(){var e=this;axios.post("/email/resend").then((function(){return e.resent=!0})).catch((function(e){return console.log(e)}))},verify:function(){var e=this,t=this.$route.params,i=t.id,n=t.hash;void 0!==i&&void 0!==n?this.user.verified?(this.invalid=!1,this.verified=!0,this.loading=!1):axios.post("/email/verify/".concat(i,"/").concat(n),null,{params:this.$route.query}).then((function(){e.$store.dispatch("fetchUser"),e.invalid=!1,e.verified=!0,e.loading=!1})).catch((function(){e.invalid=!0,e.loading=!1})):this.loading=!1}},mounted:function(){this.counters(),this.verify()}},o=i(0),c=Object(o.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header"},[e._v("Verify Your Email Address")]),e._v(" "),i("div",{staticClass:"card-body"},[e.resent?i("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v("\n                    A fresh verification link has been sent to your email address.\n                ")]):e._e(),e._v(" "),e.loading?i("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[i("span",{staticClass:"lead"},[e._v("Loading ...")]),e._v(" "),e._l(e.spinner_count,(function(t){return i("div",{staticClass:"spinner-grow",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])])}))],2):e._e(),e._v(" "),e.invalid?i("div",{staticClass:"alert alert-danger lead",attrs:{role:"alert"}},[e._v("\n                    Could not verify email. Please try again\n                ")]):e._e(),e._v(" "),e.verified?i("div",{staticClass:"alert alert-success lead",attrs:{role:"alert"}},[e._v("\n                    Your email has been verified\n                ")]):e._e(),e._v(" "),e.verified?e._e():i("div",{staticClass:"p-3"},[e._v("\n                    Before proceeding, please check your email for a verification link.\n                    If you did not receive the email,\n                    "),i("button",{staticClass:"btn btn-link p-0 m-0 align-baseline",attrs:{type:"submit"},on:{click:e.send}},[e._v("click here to request another.")])])])])])])}),[],!1,null,null,null);t.default=c.exports}}]);