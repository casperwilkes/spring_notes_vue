(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{11:function(e){e.exports=JSON.parse('{"login":{"header":"Login","type":"POST","code":204,"url":"{base_host}/login","params":{"email":{"type":"string|required","description":"valid email address"},"password":{"type":"string|required","description":"password associated with account"}},"description":"Logs a user into the system","response_text":"Returns an empty response body","response":null},"logout":{"header":"Logout","type":"POST","code":204,"url":"{base_host}/logout","params":{},"description":"Logs a user out of the system","response_text":"Returns an empty response body","response":null},"register":{"header":"Register","type":"POST","code":204,"url":"{base_host}/register","params":{"name":{"type":"string|required","description":"A unique name"},"email":{"type":"string|required","description":"A unique valid email address"},"password":{"type":"string|required","description":"password to associate with account"},"password_confirmation":{"type":"string|required","description":"A confirmation field for the password"}},"description":"Registers a new user to the system","response_text":"Returns an empty response body","response":null},"resend_verification":{"header":"Resend verification email","type":"POST","code":204,"url":"{base_host}/email/resend","params":{},"description":"Sends the currently logged in email a new verification email","response_text":"Returns an empty response body","response":null},"password_change":{"header":"Change user password","type":"POST","code":202,"url":"{host}/password_change","params":{"password":{"type":"string|required","description":"password to associate with account"},"password_confirmation":{"type":"string|required","description":"A confirmation field for the new password"},"password_current":{"type":"string|required","description":"A confirmation field for the current password"}},"description":"Changes the current users email address","response_text":"Returns the current user model","response":{"id":2,"name":"Test","email":"test@springnotes.com","created_at":"2020-08-03T18:36:29.000000Z","updated_at":"2020-08-03T18:36:29.000000Z","verified":true}}}')},12:function(e){e.exports=JSON.parse('{"get_all":{"header":"Get all comments for a note","type":"GET","code":200,"url":"{host}/notes/{note}/comments","params":{"page":{"type":"int|optional","description":"Page to fetch"}},"description":"Gets comments on a note","response_text":"Returns paginated result set of comments","response":[{"id":152,"commenter_id":"4","commenter_type":"App\\\\User","guest_name":null,"guest_email":null,"commentable_type":"App\\\\Note","commentable_id":"6","comment":"Ut adipisci voluptatem ut eum. Tenetur eum quia officia ut. Dolor sed pariatur deserunt.","approved":true,"child_id":null,"deleted_at":null,"created_at":"2020-07-24T02:14:02.000000Z","updated_at":"2020-08-01T02:03:24.000000Z","commenter":{"id":4,"name":"Mrs. Daisy Berge III","email":"anabelle.rippin@example.org","created_at":"2019-08-29T21:59:30.000000Z","updated_at":"2019-10-03T06:35:42.000000Z"},"children":[{"id":153,"commenter_id":"6","commenter_type":"App\\\\User","guest_name":null,"guest_email":null,"commentable_type":"App\\\\Note","commentable_id":"6","comment":"Totam eius non consequatur officia quisquam magni qui et. Et et et necessitatibus quibusdam totam. Quis quibusdam consequatur provident ratione velit velit earum. Sunt a voluptatem id et quaerat eum.\\n\\nDolor minus earum eius officiis libero repellat. Voluptate consequatur vitae eum totam. Distinctio fugiat saepe et iusto tenetur.\\n\\nPorro quia minima numquam cupiditate est tempora dolorum. Ut sit minus labore maiores eum sit. Fugit excepturi distinctio quasi doloremque.","approved":true,"child_id":152,"deleted_at":null,"created_at":"2020-08-03T08:25:41.000000Z","updated_at":"2020-08-03T11:34:13.000000Z","commenter":{"id":6,"name":"Dr. Larue Olson","email":"garett01@example.com","created_at":"2020-04-15T08:56:24.000000Z","updated_at":"2020-04-15T08:56:24.000000Z"},"children":[]},"...additional entries"]},"...additional entries"]},"create":{"header":"Create a new comment","type":"POST","code":201,"url":"{host}/comments","params":{"commentable_type":{"type":"string|required","description":"Object to attach comment to (Note: <code>\\\\\\\\App\\\\\\\\Note</code>)"},"commentable_id":{"type":"string|required","description":"ID of note to attach comment to"},"message":{"type":"string|required","description":"Comment message body"}},"description":"Adds a comment to a note object","response_text":"Returns the comment model along with original model commented on","response":{"commenter_id":2,"commenter_type":"App\\\\User","commentable_id":6,"commentable_type":"App\\\\Note","comment":"Adding a message","approved":true,"updated_at":"2020-08-10T05:43:35.000000Z","created_at":"2020-08-10T05:43:35.000000Z","id":3817,"commenter":{"id":2,"name":"Test","email":"test@springnotes.com","created_at":"2020-08-03T18:36:29.000000Z","updated_at":"2020-08-03T18:36:29.000000Z"},"commentable":{"id":6,"user_id":2,"title":"Libero est sed totam repudiandae.","body":"Voluptas ut voluptates architecto et minima. Perspiciatis debitis sequi architecto est. Laboriosam provident sint labore adipisci animi est. Distinctio et quis quaerat quas voluptatem a enim.\\n\\nDeserunt et dolor et voluptatem. Et quibusdam error optio repudiandae nam. Consequatur aliquid consequatur libero autem non sapiente earum.\\n\\nFugiat hic est assumenda in necessitatibus. Sapiente sit quaerat dolore quia voluptatem velit quia quidem. Eum libero rerum omnis laborum.\\n\\nUnde inventore aspernatur dolorem optio est beatae. Ut id et natus quibusdam. Aliquam non aliquam dignissimos consequatur.","created_at":"2019-12-03T21:32:47.000000Z","updated_at":"2020-02-24T04:18:22.000000Z","author":{"id":2,"name":"Test","email":"test@springnotes.com","created_at":"2020-08-03T18:36:29.000000Z","updated_at":"2020-08-03T18:36:29.000000Z"}}}},"reply":{"header":"Reply to a comment","type":"POST","code":202,"url":"{host}/comments/{comment}","params":{"message":{"type":"string|required","description":"Comment message body"}},"description":"Adds a reply to a comment","response_text":"Returns comment model and attached parent model","response":{"commenter_id":2,"commenter_type":"App\\\\User","commentable_id":1,"commentable_type":"App\\\\Note","child_id":8,"comment":"Adding a message","approved":true,"updated_at":"2020-08-10T05:50:08.000000Z","created_at":"2020-08-10T05:50:08.000000Z","id":3818,"commenter":{"id":2,"name":"Test","email":"test@springnotes.com","created_at":"2020-08-03T18:36:29.000000Z","updated_at":"2020-08-03T18:36:29.000000Z"},"commentable":{"id":1,"user_id":17,"title":"Odio distinctio doloribus omnis qui voluptates molestiae sed porro.","body":"Reprehenderit nisi ut quia laboriosam. Ut non eius et quasi. Voluptatem error quia aperiam aut facilis consequatur ex. Eos vitae placeat ipsa ipsa expedita quibusdam. Ut facere iusto non reiciendis blanditiis expedita rerum.\\n\\nQui repellat amet laborum delectus ullam quia magnam suscipit. Dolor excepturi maiores veniam sed qui. Error eligendi eligendi ullam aperiam voluptatem optio.","created_at":"2019-10-01T13:50:55.000000Z","updated_at":"2019-10-01T13:50:55.000000Z","author":{"id":17,"name":"Brooks Lehner Sr.","email":"pouros.liza@example.net","created_at":"2019-12-12T07:22:35.000000Z","updated_at":"2019-12-12T07:22:35.000000Z"}},"parent":{"id":8,"commenter_id":"4","commenter_type":"App\\\\User","guest_name":null,"guest_email":null,"commentable_type":"App\\\\Note","commentable_id":"1","comment":"Corporis quasi non maiores quia aut. Harum cum fugiat et quisquam qui. Asperiores illum quia optio.","approved":true,"child_id":7,"deleted_at":null,"created_at":"2020-06-08T14:13:58.000000Z","updated_at":"2020-07-12T01:48:06.000000Z","commenter":{"id":4,"name":"Mrs. Daisy Berge III","email":"anabelle.rippin@example.org","created_at":"2019-08-29T21:59:30.000000Z","updated_at":"2019-10-03T06:35:42.000000Z"},"commentable":{"id":1,"user_id":17,"title":"Odio distinctio doloribus omnis qui voluptates molestiae sed porro.","body":"Reprehenderit nisi ut quia laboriosam. Ut non eius et quasi. Voluptatem error quia aperiam aut facilis consequatur ex. Eos vitae placeat ipsa ipsa expedita quibusdam. Ut facere iusto non reiciendis blanditiis expedita rerum.\\n\\nQui repellat amet laborum delectus ullam quia magnam suscipit. Dolor excepturi maiores veniam sed qui. Error eligendi eligendi ullam aperiam voluptatem optio.","created_at":"2019-10-01T13:50:55.000000Z","updated_at":"2019-10-01T13:50:55.000000Z","author":{"id":17,"name":"Brooks Lehner Sr.","email":"pouros.liza@example.net","created_at":"2019-12-12T07:22:35.000000Z","updated_at":"2019-12-12T07:22:35.000000Z"}}}}},"delete":{"header":"Delete a comment","type":"delete","code":204,"url":"{host}/comments/{comment}","params":{},"description":"Deletes a comment from a note","response_text":"Returns an empty response","response":null}}')},13:function(e){e.exports=JSON.parse('{"get_all":{"header":"Get all notes","type":"GET","code":200,"url":"{host}/notes","params":{"page":{"type":"int|optional","description":"Page to fetch"},"filter":{"type":"string|optional","description":"Sort order (<code>\'newest\'</code>, <code>\'oldest\'</code>)"}},"description":"Gets all notes in the system","response_text":"Returns an array of all notes","response":{"current_page":1,"data":[{"id":1,"user_id":17,"title":"Odio distinctio doloribus omnis qui voluptates molestiae sed porro.","body":"Reprehenderit nisi ut quia laboriosam. Ut non eius et quasi. Voluptatem error quia aperiam aut facilis consequatur ex. Eos vitae placeat ipsa ipsa expedita quibusdam. Ut facere iusto non reiciendis blanditiis expedita rerum.\\n\\nQui repellat amet laboru...","created_at":"2019-10-01T13:50:55.000000Z","updated_at":"2019-10-01T13:50:55.000000Z","comment_count":39,"author":{"id":17,"name":"Brooks Lehner Sr.","email":"pouros.liza@example.net","created_at":"2019-12-12T07:22:35.000000Z","updated_at":"2019-12-12T07:22:35.000000Z"}},"...additional entries"],"first_page_url":"https://springnotes.loc/api/v1/notes?page=1","from":1,"last_page":6,"last_page_url":"https://springnotes.loc/api/v1/notes?page=6","next_page_url":"https://springnotes.loc/api/v1/notes?page=2","path":"https://springnotes.loc/api/v1/notes","per_page":10,"prev_page_url":null,"to":10,"total":51}},"get_user_notes":{"header":"Get all notes for user","type":"GET","code":200,"url":"{host}/users/{user}/notes","params":{"page":{"type":"int|optional","description":"Page to fetch"},"filter":{"type":"string|optional","description":"Sort order (<code>\'newest\'</code>, <code>\'oldest\'</code>)"}},"description":"Gets all notes for the user","response_text":"Returns an array of all notes","response":{"current_page":1,"data":[{"id":6,"user_id":2,"title":"Libero est sed totam repudiandae.","body":"Voluptas ut voluptates architecto et minima. Perspiciatis debitis sequi architecto est. Laboriosam provident sint labore adipisci animi est. Distinctio et quis quaerat quas voluptatem a enim.\\n\\nDeserunt et dolor et voluptatem. Et quibusdam error optio...","created_at":"2019-12-03T21:32:47.000000Z","updated_at":"2020-02-24T04:18:22.000000Z","comment_count":110,"author":{"id":2,"name":"Test","email":"test@springnotes.com","created_at":"2020-08-03T18:36:29.000000Z","updated_at":"2020-08-03T18:36:29.000000Z"}},"...additional entries"],"first_page_url":"https://springnotes.loc/api/v1/users/2/notes?page=1","from":1,"last_page":1,"last_page_url":"https://springnotes.loc/api/v1/users/2/notes?page=1","next_page_url":null,"path":"https://springnotes.loc/api/v1/users/2/notes","per_page":10,"prev_page_url":null,"to":7,"total":7}},"by_id":{"header":"Get a single note","type":"GET","code":200,"url":"{host}/notes/{note}","params":{},"response_text":"Returns a single note","response":{"id":3,"user_id":16,"title":"Voluptas neque cum excepturi et.","body":"Et nihil accusantium et. Qui quidem dolor expedita delectus suscipit ipsum. Vero culpa quisquam quia corrupti. Rerum quas dolore est qui ad vel ea.","created_at":"2020-08-03T18:36:29.000000Z","updated_at":"2020-08-03T18:36:29.000000Z","author":{"id":16,"name":"Michale Littel II","email":"ali96@example.com","created_at":"2019-12-24T04:00:46.000000Z","updated_at":"2019-12-24T04:00:46.000000Z"}}},"new_note":{"header":"Create a new note","type":"POST","code":201,"url":"{host}/notes","params":{"title":{"type":"string|required","description":"Title of the note"},"body":{"type":"string|required","description":"Text body of the note"}},"response_text":"Returns the model of the note created","response":{"title":"This is a test title","body":"This is a test body","user_id":2,"updated_at":"2020-08-09T17:55:18.000000Z","created_at":"2020-08-09T17:55:18.000000Z","id":52}},"update_note":{"header":"Update a note","type":"PUT","code":202,"url":"{host}/notes/{note}","params":{"title":{"type":"string|required","description":"Title of the note"},"body":{"type":"string|required","description":"Text body of the note"}},"response_text":"Returns the model of the newly updated note","response":{"id":41,"user_id":2,"title":"Quasi","body":"Placeat quidem asperiores magni quasi est aut quis. Tenetur quia sunt atque dolorem tenetur et quidem. Consequuntur quod minima quas iste similique qui perferendis. Nobis qui et voluptates ut.\\n\\nAd alias alias iure modi provident minima rem. Accusamus ad eius saepe culpa molestiae illum.\\n\\nQuia vitae consequatur architecto et velit magni itaque. Odit magnam tempore repudiandae error aut incidunt et. Ad est assumenda aliquid officiis.\\n\\nVoluptatem nesciunt numquam in veniam. Sed aut aspernatur","created_at":"2020-04-24T09:17:42.000000Z","updated_at":"2020-08-09T18:14:41.000000Z","author":{"id":2,"name":"Test","email":"test@springnotes.com","created_at":"2020-08-03T18:36:29.000000Z","updated_at":"2020-08-03T18:36:29.000000Z"}}},"delete_note":{"header":"Delete a note","type":"DELETE","code":204,"url":"{host}/notes/{note}","params":{},"description":"","response_text":"Returns an empty response","response":null}}')},14:function(e){e.exports=JSON.parse('{"results":{"header":"Gets search results","type":"GET","code":200,"url":"{host}/search","params":{"term":{"type":"string|optional","description":"Search term to look for, separated by \'<strong>+</strong>\'"}},"description":"Searches the database and returns search results","response_text":"Returns a paginated result set of notes matching search terms","response":{"current_page":1,"data":[{"id":52,"user_id":2,"title":"This is a test title","body":"This is a test body","created_at":"2020-08-09T17:55:18.000000Z","updated_at":"2020-08-09T17:55:18.000000Z","author":{"id":2,"name":"Test","email":"test@springnotes.com","created_at":"2020-08-03T18:36:29.000000Z","updated_at":"2020-08-03T18:36:29.000000Z"}},"...additional entries"],"first_page_url":"https://springnotes.loc/api/v1/search?query=test%20por&page=1","from":1,"last_page":6,"last_page_url":"https://springnotes.loc/api/v1/search?query=test%20por&page=6","next_page_url":"https://springnotes.loc/api/v1/search?query=test%20por&page=2","path":"https://springnotes.loc/api/v1/search","per_page":5,"prev_page_url":null,"to":3,"total":27}}}')},15:function(e){e.exports=JSON.parse('{"get_all":{"header":"Get all Tokens for user","type":"GET","code":200,"url":"{host}/users/{user}/tokens","params":{},"description":"Gets all tokens associated with user","response_text":"Returns an array of token models","response":[{"id":38,"tokenable_type":"App\\\\User","tokenable_id":2,"name":"test-token","abilities":["*"],"last_used_at":null,"created_at":"2020-08-06T19:55:07.000000Z","updated_at":"2020-08-06T19:55:07.000000Z"}]},"generate":{"header":"Generate a token","type":"post","code":201,"url":"{host}/users/{user}/tokens","params":{"token_name":{"type":"","description":"Easily recognizable name for the token"}},"description":"Generates a new token to associate with the user","response_text":"Returns the created token","response":{"token":"42|84bKyCyiV496WOSKDt2LweUXnqVj25RAfUFvj37U1o5ePrCVSkH9LkKw2sWfO9sizYc1VQhPZGjdSeO4"}},"delete":{"header":"Delete a token","type":"Delete","code":204,"url":"{host}/users/{user}/tokens/{token}","params":{},"description":"Deletes a token associated with the user","response_text":"Returns an empty response","response":null}}')},16:function(e){e.exports=JSON.parse('{"get_current_user":{"header":"Get current user","type":"GET","code":200,"url":"{host}/user","params":{},"description":"Gets the currently authenticated user","response_text":"Returns the current user model","response":{"id":2,"name":"Test","email":"test@springnotes.com","created_at":"2020-08-03T18:36:29.000000Z","updated_at":"2020-08-03T18:36:29.000000Z","verified":true}},"get_user":{"header":"Get a user","type":"GET","code":200,"url":"{host}/users/{user}","params":{},"description":"Gets a user from the system","response_text":"Returns the current user model","response":{"id":2,"name":"Test","email":"test@springnotes.com","created_at":"2020-08-03T18:36:29.000000Z","updated_at":"2020-08-03T18:36:29.000000Z","verified":true}}}')},64:function(e,t,a){"use strict";a.r(t);var s=a(11),r=a(12),o=a(13),i=a(14),n=a(15),d=a(16),u={data:function(){return{examples:{notes:o,auth:s,user:d,tokens:n,comments:r,search:i},error_body:{message:"The given data was invalid.",errors:{example_field_1:["error","messages"],example_field_2:["pertaining","to field"]}}}},mounted:function(){var e=document.createElement("script");e.setAttribute("src","https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=desert"),document.head.appendChild(e)},components:{ExampleComponent:function(){return a.e(9).then(a.bind(null,79))}}},p=a(0),l=Object(p.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"api"}},[e._m(0),e._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-sm-10 mb-2"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card mb-2"},[a("h1",{staticClass:"card-header text-center",attrs:{id:"interacting"}},[e._v("Interacting")]),e._v(" "),a("div",{staticClass:"card-body"},[e._m(1),e._v(" "),e._m(2),e._v(" "),a("pre",{staticClass:"prettyprint lang-json"},[e._v(e._s(JSON.stringify(e.error_body,null,4)))])])])])])])]),e._v(" "),e._m(3),e._v(" "),e._l(e.examples,(function(e,t){return a("ExampleComponent",{key:t,attrs:{header:t,requests:e}})}))],2)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"offset-11"},[a("div",{staticClass:"position-fixed pt-5"},[a("a",{staticClass:"d-block",attrs:{href:"#interacting"}},[e._v("Interacting")]),e._v(" "),a("a",{staticClass:"d-block",attrs:{href:"#notes"}},[e._v("Notes")]),e._v(" "),a("a",{staticClass:"d-block",attrs:{href:"#auth"}},[e._v("Auth")]),e._v(" "),a("a",{staticClass:"d-block",attrs:{href:"#user"}},[e._v("User")]),e._v(" "),a("a",{staticClass:"d-block",attrs:{href:"#tokens"}},[e._v("Tokens")]),e._v(" "),a("a",{staticClass:"d-block",attrs:{href:"#comments"}},[e._v("Comments")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dl",[a("dt",[e._v("\n                                    Preparing to interact with the API\n                                ")]),e._v(" "),a("dd",[e._v("\n                                    In order to interact with the API, you must have a pre-qualified access token.\n                                ")]),e._v(" "),a("dd",[e._v('\n                                    Register an account, verify your email address, then click on the context menu under your name\n                                    in the right hand of the navigation bar. Select the "Access Tokens" option.\n                                ')]),e._v(" "),a("dd",[e._v("\n                                    In the Access Tokens page, you will see your previous access keys if available, and the ability to\n                                    create a new token. Use the form to generate a token, which will only be visible until the page\n                                    refreshes. At that time, you will need to generate another token. "),a("br"),e._v(" "),a("i",[a("strong",[e._v("Note:")]),e._v(" Copy this token, you will need to use it for API requests.")])]),e._v(" "),a("dt",[e._v("\n                                    Using your 'key' and 'token'\n                                ")]),e._v(" "),a("dd",[e._v("\n                                    Every request needs to include a token. This token is generated by following the instructions above.\n                                    Attach this token as a "),a("code",[e._v("`Authorization Bearer`")]),e._v(" header.\n                                ")]),e._v(" "),a("dt",[e._v("\n                                    Requests: All requests should have the following headers\n                                ")]),e._v(" "),a("dd",[a("code",[e._v("Accept: application/json")])]),e._v(" "),a("dd",[a("code",[e._v("Authorization: bearer {token}")])]),e._v(" "),a("dt",[e._v("\n                                    Variables: Variables are surrounded by brackets `{variable_name}`\n                                ")]),e._v(" "),a("dd",[a("code",[e._v("base_host")]),e._v(": https://springnotes.loc "),a("br"),e._v(" "),a("i",[a("strong",[e._v("Note:")]),e._v("To use these endpoints, you will need to pass a\n                                        "),a("code",[e._v("X-XSRF-TOKEN")]),e._v(" as a header\n                                    ")])]),e._v(" "),a("dd",[a("code",[e._v("host")]),e._v(": https://springnotes.loc/api/v1\n                                ")]),e._v(" "),a("dd",[a("code",[e._v("note")]),e._v(": Note ID\n                                ")]),e._v(" "),a("dd",[a("code",[e._v("user")]),e._v(": User ID\n                                ")]),e._v(" "),a("dd",[a("code",[e._v("comment")]),e._v(": Comment ID\n                                ")]),e._v(" "),a("dd",[a("code",[e._v("token")]),e._v(": Token ID\n                                ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("dl",[t("dt",[this._v("Error Response")]),this._v(" "),t("dd",[this._v("Form errors will return the following error response bodies")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col"},[t("h1",{staticClass:"text-center"},[this._v("Usage")])])])}],!1,null,null,null);t.default=l.exports}}]);