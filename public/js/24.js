(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{75:function(t,n,e){"use strict";e.r(n);function o(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var i={data:function(){return{page:1,note:{},comments:[]}},watch:{page_bottom:function(t){t&&(this.page++,this.getComments())}},mounted:function(){this.getNote(),this.getComments(),this.scroll()},methods:{newComment:function(t){void 0===t.children&&(t.children=[]),this.comments.unshift(t)},getNote:function(){var t=this;axios.get("/api/v1/notes/".concat(this.$route.params.id),{params:{page:this.page}}).then((function(n){t.note=n.data})).catch((function(t){return console.log(t)}))},getComments:function(){var t=this;axios.get("/api/v1/notes/".concat(this.$route.params.id,"/comments"),{params:{page:this.page}}).then((function(n){var e;_.remove(n.data,(function(n){return void 0!==_.find(t.comments,{id:n.id})})),(e=t.comments).push.apply(e,o(n.data))})).catch((function(t){return console.log(t)}))}},components:{NoteBodyComponent:function(){return e.e(20).then(e.bind(null,7))},CommentComponent:function(){return e.e(15).then(e.bind(null,81))},CommentNewComponent:function(){return e.e(16).then(e.bind(null,82))}}},a=e(0),s=Object(a.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==t.note.id,expression:"note.id !== undefined"}]},[void 0!==t.note.id?e("NoteBodyComponent",{attrs:{note:t.note}}):t._e(),t._v(" "),e("CommentNewComponent",{attrs:{note:t.note},on:{new_comment:t.newComment}}),t._v(" "),e("CommentComponent",{attrs:{comments:t.comments}})],1)}),[],!1,null,null,null);n.default=s.exports}}]);