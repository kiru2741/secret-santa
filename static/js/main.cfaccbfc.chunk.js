(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(24)},23:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),s=(t(23),t(9)),m=t(1);const i={margin:"5rem",display:"flex",flexDirection:"column",gap:"1rem"};var o=function(){return r.a.createElement("div",{style:i},r.a.createElement("h3",null,"Here's how to play Secret Santa"),r.a.createElement("p",null,"Participants register their names."),r.a.createElement("p",null,"Names are mixed up."),r.a.createElement("p",null,"Each participant draws a name."),r.a.createElement("p",null,"The person who draws a name is the Secret Santa of the person whose name is drawn."),r.a.createElement("p",null,"The Secret Santa gifts the person."),r.a.createElement("p",null,"After opening their present, the giftee guesses who their Secret Santa is."))},u=t(15),d=t(7);const p=Object(u.a)({apiKey:"AIzaSyDYkcfMqte6awVLNbDV-Obg1riHK4JtLaM",authDomain:"secret-santa-f669f.firebaseapp.com",projectId:"secret-santa-f669f",storageBucket:"secret-santa-f669f.appspot.com",messagingSenderId:"112658891852",appId:"1:112658891852:web:0770883182127abed220e9"}),b=Object(d.e)(p);var E=()=>{const[e,a]=Object(n.useState)({name:"",address:"",number:"",isAllowed:!0,isAvailable:!0}),[t,l]=Object(n.useState)(""),c=Object(d.b)(b,"users"),s=e=>{const{name:t,value:n}=e.target;a(e=>({...e,[t]:n}))};return r.a.createElement("div",{className:"register-form"},r.a.createElement("form",{onSubmit:async a=>{a.preventDefault(),console.log("Form submitted with data:",e);try{await Object(d.a)(c,e),l("Registration successful!")}catch(a){l(a.message)}},className:""},r.a.createElement("h3",null,"Register to receive a gift from secret Santa"),r.a.createElement("input",{required:!0,type:"text",name:"name",value:e.name,onChange:s,className:"",placeholder:"Name"}),r.a.createElement("input",{required:!0,type:"text",name:"address",value:e.address,onChange:s,className:"",placeholder:"Address"}),r.a.createElement("input",{required:!0,type:"text",name:"number",value:e.number,onChange:s,className:"",placeholder:"Mobile number"}),r.a.createElement("button",{type:"submit",className:""},"Submit"),t&&r.a.createElement("p",{className:"message"},t)))};var h=()=>{const[e,a]=Object(n.useState)(""),[t,l]=Object(n.useState)(""),[c,s]=Object(n.useState)(!1),[m,i]=Object(n.useState)(""),o=Object(d.b)(b,"users");return r.a.createElement("div",{className:"draw-section"},r.a.createElement("h3",null,"Enter your participant ID to draw a name"),r.a.createElement("form",{onSubmit:async a=>{a.preventDefault(),s(!0);const t=await Object(d.d)(o);let n=t.docs.filter(a=>a.id===e);if(s(!1),n.length>0&&n[0].data().isAllowed){i("Hi "+n[0].data().name+", You should gift this person.");const a=t.docs.filter(a=>!0===a.data().isAvailable&&a.id!==e),r=a[Math.floor(Math.random()*a.length)];l(r);const c=Object(d.c)(b,"users",r.id);await Object(d.f)(c,{isAvailable:!1});const s=Object(d.c)(b,"users",n[0].id);await Object(d.f)(s,{isAllowed:!1})}else n.length>0&&n[0].data().name?i("Hi "+n[0].data().name+", Your turn was over."):i("Invalid ID!")}},r.a.createElement("input",{type:"text",value:e,onChange:e=>{a(e.target.value)},placeholder:"Participant ID",required:!0}),r.a.createElement("button",{type:"submit"},"Submit")),c&&r.a.createElement("p",null,"Loading..."),m&&r.a.createElement("p",null,m),t&&r.a.createElement("div",{className:"drawn-user"},r.a.createElement("p",null,t.data().name),r.a.createElement("p",null,t.data().address),r.a.createElement("p",null,t.data().number)))};const g={color:"rgb(60,60,60)",padding:"0.5rem 2rem",borderRadius:"5rem",backgroundColor:"rgb(255, 230, 230)",fontWeight:"bold"};var f=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-left"},r.a.createElement(s.b,{to:"/"},r.a.createElement("span",null,"Secret Santa"))),r.a.createElement("div",{className:"nav-right"},r.a.createElement(s.b,{to:"/draw",style:g},r.a.createElement("span",null,"Draw")),r.a.createElement(s.b,{to:"/register",style:g},r.a.createElement("span",null,"Register")))),r.a.createElement(m.a,null));var v=()=>r.a.createElement("h1",{style:{margin:"5rem"}},"404");var w=function(){return r.a.createElement(s.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",element:r.a.createElement(f,null)},r.a.createElement(m.b,{index:!0,element:r.a.createElement(o,null)}),r.a.createElement(m.b,{path:"register",element:r.a.createElement(E,null)}),r.a.createElement(m.b,{path:"draw",element:r.a.createElement(h,null)}),r.a.createElement(m.b,{path:"*",element:r.a.createElement(v,null)}))))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(w,null))}},[[16,1,2]]]);
//# sourceMappingURL=main.cfaccbfc.chunk.js.map