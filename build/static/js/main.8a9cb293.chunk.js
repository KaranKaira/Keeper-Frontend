(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{91:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),s=n(13),r=n.n(s),o=(n(65),n(15)),i=n(4),l=n(19),j=n(14),b=n.n(j);var h=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){b.a.get("/api/notes/").then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{style:{textAlign:"center"},children:["Your Notes",Object(c.jsx)(o.b,{to:"/notes/new",className:"btn btn-primary float-right",children:"Create Note"})]}),s.map((function(e){return e.title&&e.content?Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("h1",{children:Object(c.jsx)(o.b,{to:"/notes/"+e._id,children:e.title})}),Object(c.jsx)("p",{children:e.content})]},e._id):null}))]})},d=n(53),u=n.n(d),O=n(51),x=n.n(O),p=n(52),m=n.n(p);var f=function(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){b.a.get("/api/notes/".concat(e.match.params._id)).then((function(e){return r(e.data)})).catch((function(e){return console.log("Error: ",e)}))}),[e]),Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("h2",{children:s.title}),Object(c.jsx)("p",{children:s.content}),Object(c.jsxs)("div",{className:"btn-group",style:{textAlign:"center"},children:[Object(c.jsx)(o.b,{to:"/notes/"+s._id+"/edit",className:"btn btn-primary",title:"Edit Note",children:Object(c.jsx)(x.a,{})}),Object(c.jsx)(o.b,{to:"/notes/",className:"btn btn-secondary",title:"Go back",children:Object(c.jsx)(m.a,{})}),Object(c.jsxs)("button",{className:"btn btn-danger",onClick:function(){b.a.delete("/api/notes/".concat(e.match.params._id)).then((function(){e.history.push("/notes")})).catch((function(e){console.log("Error: "+e)}))},title:"Delete Note",children:[" ",Object(c.jsx)(u.a,{})," "]})]})]})},v=n(22),g=n(24),N=n(54),k=n.n(N),C=n(107),w=n(108);var y=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(l.a)(t,2),s=n[0],r=n[1],o=Object(a.useState)(!1),i=Object(l.a)(o,2),j=i[0],h=i[1];function d(e){var t=e.target,n=t.name,c=t.value;r(Object(g.a)(Object(g.a)({},s),{},Object(v.a)({},n,c)))}return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"create-note",children:[j&&Object(c.jsx)("input",{name:"title",placeholder:"Title",onChange:d,value:s.title}),Object(c.jsx)("textarea",{name:"content",placeholder:"Take a note...",rows:j?3:1,onChange:d,onClick:function(){h(!0)},value:s.content}),Object(c.jsx)(w.a,{in:!0,children:Object(c.jsx)(C.a,{onClick:function(t){t.preventDefault(),s.title?s.content?b.a.post("/api/notes",s).then((function(t){return e.history.push("/notes/".concat(t.data._id))})).catch((function(e){return console.log("Error: "+e)})):alert("Content can't be blank"):alert("Title is required")},children:Object(c.jsx)(k.a,{})})})]})})},E=n(55),_=n.n(E);var T=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(l.a)(t,2),s=n[0],r=n[1];function o(e){var t=e.target,n=t.name,c=t.value;r(Object(g.a)(Object(g.a)({},s),{},Object(v.a)({},n,c)))}return Object(a.useEffect)((function(){b.a.get("/api/notes/".concat(e.match.params._id)).then((function(e){return r(e.data)})).catch((function(e){return console.log("Error: "+e)}))}),[e]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{style:{textAlign:"center"},children:['Edit "',s.title,'"',Object(c.jsx)("a",{href:"/notes",id:"topRight",children:"return"})]}),Object(c.jsxs)("form",{className:"create-note",children:[Object(c.jsx)("input",{name:"title",placeholder:"Title",onChange:o,value:s.title}),Object(c.jsx)("textarea",{name:"content",placeholder:"Take a note...",rows:"3",onChange:o,value:s.content}),Object(c.jsxs)(C.a,{onClick:function(t){t.preventDefault(),s.title&&s.content?b.a.patch("/api/notes/".concat(e.match.params._id),s).then(e.history.push("/notes/".concat(s._id))).catch((function(e){return console.log("Error: "+e)})):alert("'Title' or 'Content' cannot be blank")},children:[" ",Object(c.jsx)(_.a,{})]})]})]})};var K=function(){return Object(c.jsxs)("div",{className:"about",children:[Object(c.jsx)("h1",{children:'"Keeper" is a simple note-taking app built with React.js, Twitter Bootstrap, Node.js, Express, and MongoDB.'}),Object(c.jsx)("p",{children:" The application allows you to browse through a list of notes, as well as add, update, and delete notes."}),Object(c.jsxs)("p",{children:["The source code is available in ",Object(c.jsx)("a",{href:"https://github.com/KaranKaira/Keeper",children:" this repository "})," on GitHub."]})]})};var S=function(){var e=(new Date).getFullYear();return Object(c.jsx)("div",{children:Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:["Karan Singh Kaira \u24d2 ",e]})})})};function D(){return Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark mb-4",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("a",{className:"navbar-brand",href:"/",children:Object(c.jsx)("span",{class:"navbar-brand mb-0 h1",children:"Keeper"})}),Object(c.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(o.c,{exact:!0,className:"nav-link",activeClassName:"active",to:"/notes",children:"Notes"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(o.c,{exact:!0,className:"nav-link",activeClassName:"active",to:"/about",children:"About"})})]})]})})}function A(){return Object(c.jsxs)(i.c,{children:[Object(c.jsx)(i.a,{exact:!0,path:"/",component:y}),Object(c.jsx)(i.a,{exact:!0,path:"/notes",component:h}),Object(c.jsx)(i.a,{exact:!0,path:"/about",component:K}),Object(c.jsx)(i.a,{exact:!0,path:"/notes/new",component:y}),Object(c.jsx)(i.a,{exact:!0,path:"/notes/:_id",component:f}),Object(c.jsx)(i.a,{exact:!0,path:"/notes/:_id/edit",component:T})]})}var B=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(D,{}),Object(c.jsx)(A,{}),Object(c.jsx)(S,{})]})};r.a.render(Object(c.jsx)(B,{}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.8a9cb293.chunk.js.map