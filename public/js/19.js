(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{6:function(t,e,n){"use strict";n.r(e);var a=n(1);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o={props:{note:Object},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(a.b)(["user"])),methods:{datesEqual:function(t){return t.created_at===t.updated_at},authUser:function(t){return this.user.id===t.author.id},deleteNote:function(t){console.log(t)}}},i=n(0),c=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center my-2"},[n("div",{staticClass:"col-11"},[n("div",{staticClass:"card shadow"},[n("p",{staticClass:"card-header h3 text-center text-capitalize"},["notes_view"!==t.$route.name?n("span",[n("router-link",{attrs:{to:{name:"notes_view",params:{id:t.note.id}}}},[t._v(t._s(t.note.title))])],1):n("span",[t._v("\n                    "+t._s(t.note.title)+"\n                ")])]),t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[t._v("\n                    Created by\n                    "),n("router-link",{attrs:{to:{name:"notes_user",params:{user:t.note.author.id}}}},[t._v(t._s(t.note.author.name))]),t._v(" "),n("br"),t._v("\n                    on "+t._s(t._f("moment")(t.note.created_at,t.date_format))+"\n                ")],1),t._v(" "),n("p",{staticClass:"card-text"},[n("span",{staticClass:"note-body"},[t._v(t._s(t.note.body))])])]),t._v(" "),!t.datesEqual(t.note)||t.authUser(t.note)?n("div",{staticClass:"card-footer"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 align-self-center"},[t.datesEqual(t.note)?t._e():n("span",[t._v("Updated at "+t._s(t._f("moment")(t.note.updated_at,t.date_format)))])]),t._v(" "),t.authUser(t.note)?n("div",{staticClass:"col-md-4 text-right"},[n("div",{staticClass:"btn-group"},[n("router-link",{staticClass:"btn btn-primary card-link",attrs:{to:{name:"notes_edit",params:{id:t.note.id}}}},[n("font-awesome-icon",{attrs:{icon:["far","edit"]}}),t._v("\n                                Edit\n                            ")],1),t._v(" "),n("button",{staticClass:"btn btn-danger card-link",attrs:{type:"button"},on:{click:function(e){return t.$emit("deleteNote",t.note.id)}}},[n("font-awesome-icon",{attrs:{icon:["fas","folder-minus"]}}),t._v("\n                                Delete\n                            ")],1)],1)]):t._e()])]):t._e()])])])}),[],!1,null,null,null);e.default=c.exports}}]);