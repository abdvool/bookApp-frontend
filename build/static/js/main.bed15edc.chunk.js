(this.webpackJsonpsolution=this.webpackJsonpsolution||[]).push([[0],{34:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(17),a=n.n(i),o=n(10),s=n(11),j=n(13),b=n(12),u=(n(22),n(18)),l=n(20),O=(n(34),n(7)),h=n(1);var d=function(){var e=Object(O.b)(),t=e.isAuthenticated,n=e.loginWithRedirect;return!t&&Object(h.jsx)("button",{onClick:n,children:"Log in"})};var p=function(){var e=Object(O.b)(),t=e.isAuthenticated,n=e.logout;return t&&Object(h.jsx)("button",{onClick:function(){n({returnTo:window.location.origin})},children:"Log out"})},x=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(h.jsx)(u.a.Brand,{children:"My Favorite Books"}),Object(h.jsx)(l.b,{to:"/",children:"Home"}),Object(h.jsx)(l.b,{to:"/profile",children:"Profile"}),Object(h.jsx)(d,{}),Object(h.jsx)(p,{})]})}}]),n}(r.a.Component),f=Object(O.c)(x),v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return this.props.auth0.isLoading?Object(h.jsx)("div",{children:" Loading..."}):this.props.auth0.error?Object(h.jsxs)("div",{children:["Oops... ",this.props.auth0.error.message]}):this.props.children}}]),n}(r.a.Component),g=(Object(O.c)(v),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(h.jsx)(u.a.Brand,{children:"\xa9 Best Books"})})}}]),n}(r.a.Component)),k=n(4),m=n(29),y=(n(50),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(m.a,{children:[Object(h.jsx)("h1",{children:"My Favorite Books"}),Object(h.jsx)("p",{children:"This is a collection of my favorite books"})]})}}]),n}(r.a.Component)),w=n(21),B=(n(51),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return!this.props.auth0.isAuthenticated&&Object(h.jsx)(w.a,{style:{width:"18rem"},children:Object(h.jsxs)(w.a.Body,{children:[Object(h.jsx)(w.a.Title,{children:"Log In"}),Object(h.jsx)(w.a.Text,{children:"Click Below to Log In"}),Object(h.jsx)(d,{})]})})}}]),n}(r.a.Component)),C=Object(O.c)(B);var L=function(){var e=Object(O.b)(),t=e.user,n=e.isAuthenticated;return console.log(t),n&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{children:["Hello  ",t.name]}),Object(h.jsx)("img",{src:t.picture,width:"400 px"})]})},A=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.auth0.isAuthenticated;return console.log("app",this.props),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(f,{}),Object(h.jsxs)(k.c,{children:[Object(h.jsx)(k.a,{exact:!0,path:"/",children:e?Object(h.jsx)(y,{}):Object(h.jsx)(C,{})}),Object(h.jsx)(k.a,{exact:!0,path:"/profile",children:Object(h.jsx)(L,{})})]}),Object(h.jsx)(g,{})]})})}}]),n}(r.a.Component),T=Object(O.c)(A);a.a.render(Object(h.jsx)(O.a,{domain:"dev-koln19hl.us.auth0.com",clientId:"wnONYeP6fBsN25sDXgYLMYrQjWd1wTLj",redirectUri:window.location.origin,children:Object(h.jsx)(T,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.bed15edc.chunk.js.map