(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,function(e,t,a){e.exports={nav:"nav_nav__UBP6s",nav__link:"nav_nav__link__2T_mw",active:"nav_active__1XTFv",menu__toggle:"nav_menu__toggle__2GqFn",menu__btn:"nav_menu__btn__26xe4",nav__burgerBtn_block:"nav_nav__burgerBtn_block__ZxvxO"}},function(e,t,a){e.exports={projects:"projects_projects__1qet-",container:"projects_container__1VeDD",projects__title:"projects_projects__title__UZvfM",container__title_subBlock:"projects_container__title_subBlock__P6OCK",container__title_subBlock_wraper:"projects_container__title_subBlock_wraper__SI1EQ",container__title_subBlock_wraper_divider:"projects_container__title_subBlock_wraper_divider__2dml5",projects__content:"projects_projects__content__3eAqb"}},function(e,t,a){e.exports={contacts:"contacts_contacts__pgi0x",container:"contacts_container__39far",contacts__form:"contacts_contacts__form__3h7sk",description:"contacts_description__3jkRx",contacts__btn:"contacts_contacts__btn__1gDdq"}},function(e,t,a){e.exports={skillsBlock:"skillsBlock_skillsBlock__1wVx4",container:"skillsBlock_container__e0U58",container__title_subBlock:"skillsBlock_container__title_subBlock__34Rb_",container__title_subBlock_wraper:"skillsBlock_container__title_subBlock_wraper__2SXQ2",container__title_subBlock_wraper_divider:"skillsBlock_container__title_subBlock_wraper_divider__xo4eW",skillsBlock__content:"skillsBlock_skillsBlock__content__2MdMU"}},,function(e,t,a){e.exports={main:"main_main__2D73R",container:"main_container__3ztwN",main__text:"main_main__text__3lCHW",main__text_prof:"main_main__text_prof__2X-ur",card:"main_card__3wH1e"}},,function(e,t,a){e.exports={skill:"skill_skill__2bYwb",skill__icon:"skill_skill__icon__1JA3d",skill__title:"skill_skill__title__-chvU",skill__content:"skill_skill__content__1d34b"}},function(e,t,a){e.exports={footer:"footer_footer__NTzsd",container:"footer_container__5ZK4c",footer__content:"footer_footer__content__TgLFE",footer__content_item:"footer_footer__content_item__1tKUM"}},,function(e,t,a){e.exports={project:"project_project__T-XqJ",project__icon:"project_project__icon__1PRv3",project__icon_link:"project_project__icon_link__3d2ei"}},function(e,t,a){e.exports={remoteJobBlock:"remoteJobBlock_remoteJobBlock__2AnD9",container:"remoteJobBlock_container__OaMNf",remoteJobBlock__btn:"remoteJobBlock_remoteJobBlock__btn__11EWG"}},function(e,t,a){e.exports={header:"header_header__2Gppl",header_wrapper:"header_header_wrapper__1OFA3"}},,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(16),i=a.n(o),r=(a(22),a(23),a(13)),l=a.n(r),_=a(10),s=a(1),m=a.n(s);function p(){var e=Object(n.useState)(null),t=Object(_.a)(e,2),a=t[0],o=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{id:m.a.menu__toggle,type:"checkbox"}),c.a.createElement("label",{className:m.a.menu__btn,htmlFor:m.a.menu__toggle},c.a.createElement("span",null)),c.a.createElement("div",{className:m.a.nav},[{id:1,name:"Homepage",to:"https://github.com/",target:"_blank"},{id:2,name:"Projects",to:"#projects"},{id:3,name:"Skills",to:"#skills"},{id:4,name:"Contacts",to:"#contacts"}].map((function(e){return c.a.createElement("a",{target:e.target,key:e.id,href:e.to,className:e.id===a?"".concat(m.a.nav__link," ").concat(m.a.active):"".concat(m.a.nav__link),onClick:function(){o(e.id)}},e.name)}))),c.a.createElement("div",{className:m.a.nav__burgerBtn_block}))}function u(){return c.a.createElement("div",{className:l.a.header},c.a.createElement("div",{className:l.a.header_wrapper},c.a.createElement(p,null)))}var d=a(6),k=a.n(d),v=a(14),E=function(e,t){return[-(t-window.innerHeight/2)/25,(e-window.innerWidth/2)/25,1.1]},b=function(e,t,a){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(a,")")};function f(){var e=Object(v.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),t=Object(_.a)(e,2),a=t[0],n=t[1];return c.a.createElement("div",{className:k.a.main},c.a.createElement("div",{className:k.a.container},c.a.createElement("div",{className:k.a.main__text},c.a.createElement("h1",null,c.a.createElement("div",null,c.a.createElement("span",null,"I'm")),c.a.createElement("div",null,c.a.createElement("span",null,"Aharodnikov")),c.a.createElement("div",null,c.a.createElement("span",null,"Vlad"))),c.a.createElement("div",{className:k.a.main__text_prof},c.a.createElement("span",null,"Frontend Developer"))),c.a.createElement(v.a.div,{className:k.a.card,onMouseMove:function(e){var t=e.clientX,a=e.clientY;return window.innerWidth>=1020?n({xys:E(t-225,a)}):n({xys:E(t,a)})},onMouseLeave:function(){return n({xys:[0,0,1]})},style:{transform:a.xys.interpolate(b)}})))}var g=a(4),h=a.n(g),w=a(8),N=a.n(w);function j(e){return c.a.createElement("div",{className:N.a.skill},c.a.createElement("div",{className:N.a.skill__icon},c.a.createElement("img",{src:e.icon,alt:e.title})),c.a.createElement("h3",{className:N.a.skill__title},c.a.createElement("a",{href:"#"},e.title)),c.a.createElement("div",{className:N.a.skill__content},c.a.createElement("p",null,e.description)))}function B(e){return c.a.createElement("div",{className:h.a.skillsBlock,id:"skills"},c.a.createElement("div",{className:h.a.container},c.a.createElement("h2",null,"My Skills"),c.a.createElement("div",{className:h.a.container__title_subBlock},c.a.createElement("div",{className:h.a.container__title_subBlock_wraper},c.a.createElement("div",{className:h.a.container__title_subBlock_wraper_divider},c.a.createElement("span",null),c.a.createElement("span",null)))),c.a.createElement("div",{className:h.a.skillsBlock__content},e.skills.map((function(e){return c.a.createElement(j,{key:e.id,title:e.title,description:e.description,icon:e.icon})})))))}function x(){return c.a.createElement(B,{skills:[{id:1,title:"JavaScript",description:"Having good knowledge in Javascript i can create dynamic-changed application with help React library and also features using native functional",icon:"https://i.ibb.co/LQg2yB7/output-onlinepngtools-1.png"},{id:2,title:"TypeScript",description:"We can't imagine creating of a big application without TypeScript now so, using TS I can make static type for each block of program forming an app where you'll be able to understand that's happening",icon:"https://i.ibb.co/0yL6kpw/output-onlinepngtools-2.png"},{id:3,title:"ReactJS",description:"Using the most popular library, ReactJS, I can create a single page application with a good architecture and using the actual libraries which are popular right now",icon:"https://i.ibb.co/Hh474tD/output-onlinepngtools-4.png"},{id:4,title:"HTML",description:"Having good knowledge in the HTML5 I can create the semantic layout for correct validation in a browser",icon:"https://i.ibb.co/rMXszzP/output-onlinepngtools-5.png"},{id:5,title:"CSS",description:"Having good knowledge in CSS and also knowing preprocessor like SCSS and library UI libraries for ReactJS like Material-UI I can create style which will be please to see on the desktop and mobile version of app",icon:"https://i.ibb.co/PQZR30x/output-onlinepngtools-6.png"}]})}var y=a(2),S=a.n(y),J=a(11),M=a.n(J);function L(e){return c.a.createElement("div",{className:M.a.project},c.a.createElement("div",{className:M.a.project__icon},c.a.createElement("div",{className:M.a.project__icon_link},c.a.createElement("a",{href:e.projectLink,target:"_blank"},e.projectName))))}function I(e){return c.a.createElement("div",{className:S.a.projects,id:"projects"},c.a.createElement("div",{className:S.a.container},c.a.createElement("div",{className:S.a.projects__title},c.a.createElement("h3",null,"My Projects"),c.a.createElement("div",{className:S.a.container__title_subBlock},c.a.createElement("div",{className:S.a.container__title_subBlock_wraper},c.a.createElement("div",{className:S.a.container__title_subBlock_wraper_divider},c.a.createElement("span",null),c.a.createElement("span",null))))),c.a.createElement("div",{className:S.a.projects__content},e.projects.map((function(e){return c.a.createElement(L,{key:e.id,projectName:e.projectName,projectLink:e.projectLink})})))))}function T(){return c.a.createElement(I,{projects:[{id:1,icon:"",projectName:"Social Network",projectLink:"https://rauzon.github.io/Social_network_react_typescript"},{id:2,icon:"",projectName:"TodoList",projectLink:"/#"}]})}var H=a(12),C=a.n(H);function R(){return c.a.createElement("div",{className:C.a.remoteJobBlock},c.a.createElement("div",{className:C.a.container},c.a.createElement("h2",null,"Interested in remote hiring or other collaborating?"),c.a.createElement("span",null,"I\u2019m always open to discussing about it"),c.a.createElement("div",{className:C.a.remoteJobBlock__btn},c.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/vlad-aga/"},"Start a conversation"))))}var U=a(3),A=a.n(U);function O(){return c.a.createElement("div",{className:A.a.contacts,id:"contacts"},c.a.createElement("div",{className:A.a.container},c.a.createElement("h2",null,"Contacts"),c.a.createElement("form",{className:A.a.contacts__form},c.a.createElement("input",{id:A.a.name,type:"text",placeholder:"Name..."}),c.a.createElement("input",{id:A.a.mail,type:"text",placeholder:"email..."}),c.a.createElement("textarea",{id:A.a.description,placeholder:"Enter description..."})),c.a.createElement("div",{className:A.a.contacts__btn},c.a.createElement("button",{type:"submit"},"Submit"))))}var W=a(9),D=a.n(W),F="https://icons-for-free.com/iconfiles/png/512/linkedin+logo+logo+website+icon-1320190502911715717.png";function P(){var e=[{id:1,icon:F},{id:2,icon:F},{id:3,icon:F},{id:4,icon:F}];return c.a.createElement("footer",{className:D.a.footer,id:"footer"},c.a.createElement("div",{className:D.a.container},c.a.createElement("h2",null,"Vlad Aharodnikov"),c.a.createElement("div",{className:D.a.footer__content},e.map((function(e){return c.a.createElement("div",{key:e.id,className:D.a.footer__content_item},c.a.createElement("img",{src:e.icon,alt:""}))}))),c.a.createElement("span",null,"\xa9 Copyright Vlad Aharodnikov")))}var X=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement(f,null),c.a.createElement(x,null),c.a.createElement(T,null),c.a.createElement(R,null),c.a.createElement(O,null),c.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.503f40e2.chunk.js.map