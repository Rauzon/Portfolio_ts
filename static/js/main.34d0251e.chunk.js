(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,function(e,t,n){e.exports={nav:"nav_nav__UBP6s",nav__link:"nav_nav__link__2T_mw",active:"nav_active__1XTFv",menu__toggle:"nav_menu__toggle__2GqFn",menu__btn:"nav_menu__btn__26xe4",nav__burgerBtn_block:"nav_nav__burgerBtn_block__ZxvxO"}},function(e,t,n){e.exports={contacts:"contacts_contacts__pgi0x",container:"contacts_container__39far",contacts__form:"contacts_contacts__form__3h7sk",description:"contacts_description__3jkRx",contacts__btn:"contacts_contacts__btn__1gDdq"}},function(e,t,n){e.exports={projects:"projects_projects__1qet-",container:"projects_container__1VeDD",projects__title:"projects_projects__title__UZvfM",container__title_subBlock:"projects_container__title_subBlock__P6OCK",container__title_subBlock_wraper:"projects_container__title_subBlock_wraper__SI1EQ",container__title_subBlock_wraper_divider:"projects_container__title_subBlock_wraper_divider__2dml5",projects__content:"projects_projects__content__3eAqb"}},function(e,t,n){e.exports={skillsBlock:"skillsBlock_skillsBlock__1wVx4",container:"skillsBlock_container__e0U58",container__title_subBlock:"skillsBlock_container__title_subBlock__34Rb_",container__title_subBlock_wraper:"skillsBlock_container__title_subBlock_wraper__2SXQ2",container__title_subBlock_wraper_divider:"skillsBlock_container__title_subBlock_wraper_divider__xo4eW",skillsBlock__content:"skillsBlock_skillsBlock__content__2MdMU"}},function(e,t,n){e.exports={project:"project_project__T-XqJ",one:"project_one__3sb2Y",two:"project_two__T10Li",project__icon:"project_project__icon__1PRv3",project__icon_link:"project_project__icon_link__3d2ei"}},,function(e,t,n){e.exports={main:"main_main__2D73R",container:"main_container__3ztwN",main__text:"main_main__text__3lCHW",main__text_prof:"main_main__text_prof__2X-ur",card:"main_card__3wH1e"}},function(e,t,n){e.exports={footer:"footer_footer__NTzsd",container:"footer_container__5ZK4c",footer__content:"footer_footer__content__TgLFE",footer__content_link:"footer_footer__content_link__2tqtB",footer__content_item:"footer_footer__content_item__1tKUM"}},,function(e,t,n){e.exports={skill:"skill_skill__2bYwb",skill__icon:"skill_skill__icon__1JA3d",skill__title:"skill_skill__title__-chvU",skill__content:"skill_skill__content__1d34b"}},,function(e,t,n){e.exports={remoteJobBlock:"remoteJobBlock_remoteJobBlock__2AnD9",container:"remoteJobBlock_container__OaMNf",remoteJobBlock__btn:"remoteJobBlock_remoteJobBlock__btn__11EWG"}},function(e,t,n){e.exports={header:"header_header__2Gppl",header_wrapper:"header_header_wrapper__1OFA3"}},,,,,function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(16),l=n.n(o),i=(n(23),n(24),n(13)),r=n.n(i),s=n(11),m=n(1),p=n.n(m);function d(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{id:p.a.menu__toggle,type:"checkbox"}),c.a.createElement("label",{className:p.a.menu__btn,htmlFor:p.a.menu__toggle},c.a.createElement("span",null)),c.a.createElement("div",{className:p.a.nav},[{id:1,name:"Homepage",to:"https://github.com/",target:"_blank"},{id:2,name:"Projects",to:"#projects"},{id:3,name:"Skills",to:"#skills"},{id:4,name:"Contacts",to:"#contacts"}].map((function(e){return c.a.createElement("a",{target:e.target,key:e.id,href:e.to,className:e.id===n?"".concat(p.a.nav__link," ").concat(p.a.active):"".concat(p.a.nav__link),onClick:function(){o(e.id)}},e.name)}))),c.a.createElement("div",{className:p.a.nav__burgerBtn_block}))}function u(){return c.a.createElement("div",{className:r.a.header},c.a.createElement("div",{className:r.a.header_wrapper},c.a.createElement(d,null)))}var b=n(7),_=n.n(b),k=n(14),A=function(e,t){return[-(t-window.innerHeight/2)/25,(e-window.innerWidth/2)/25,1.1]},E=function(e,t,n){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(n,")")};function v(){var e=Object(k.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),t=Object(s.a)(e,2),n=t[0],a=t[1];return c.a.createElement("div",{className:_.a.main},c.a.createElement("div",{className:_.a.container},c.a.createElement("div",{className:_.a.main__text},c.a.createElement("h1",null,c.a.createElement("div",null,c.a.createElement("span",null,"I'm")),c.a.createElement("div",null,c.a.createElement("span",null,"Aharodnikov")),c.a.createElement("div",null,c.a.createElement("span",null,"Vlad"))),c.a.createElement("div",{className:_.a.main__text_prof},c.a.createElement("span",null,"Frontend Developer"))),c.a.createElement(k.a.div,{className:_.a.card,onMouseMove:function(e){var t=e.clientX,n=e.clientY;return window.innerWidth>=1020?a({xys:A(t-225,n)}):a({xys:A(t,n)})},onMouseLeave:function(){return a({xys:[0,0,1]})},style:{transform:n.xys.interpolate(E)}})))}var g=n(4),f=n.n(g),N=n(10),w=n.n(N);function h(e){return c.a.createElement("div",{className:w.a.skill},c.a.createElement("div",{className:w.a.skill__icon},c.a.createElement("img",{src:e.icon,alt:e.title})),c.a.createElement("h3",{className:w.a.skill__title},c.a.createElement("a",{href:"#"},e.title)),c.a.createElement("div",{className:w.a.skill__content},c.a.createElement("p",null,e.description)))}function j(e){return c.a.createElement("div",{className:f.a.skillsBlock,id:"skills"},c.a.createElement("div",{className:f.a.container},c.a.createElement("h2",null,"My Skills"),c.a.createElement("div",{className:f.a.container__title_subBlock},c.a.createElement("div",{className:f.a.container__title_subBlock_wraper},c.a.createElement("div",{className:f.a.container__title_subBlock_wraper_divider},c.a.createElement("span",null),c.a.createElement("span",null)))),c.a.createElement("div",{className:f.a.skillsBlock__content},e.skills.map((function(e){return c.a.createElement(h,{key:e.id,title:e.title,description:e.description,icon:e.icon})})))))}function x(){return c.a.createElement(j,{skills:[{id:1,title:"JavaScript",description:"Having good knowledge in Javascript i can create dynamic-changed application with help React library and also features using native functional",icon:"https://i.ibb.co/LQg2yB7/output-onlinepngtools-1.png"},{id:2,title:"TypeScript",description:"We can't imagine creating of a big application without TypeScript now so, using TS I can make static type for each block of program forming an app where you'll be able to understand that's happening",icon:"https://i.ibb.co/0yL6kpw/output-onlinepngtools-2.png"},{id:3,title:"ReactJS",description:"Using the most popular library, ReactJS, I can create a single page application with a good architecture and using the actual libraries which are popular right now",icon:"https://i.ibb.co/Hh474tD/output-onlinepngtools-4.png"},{id:4,title:"HTML",description:"Having good knowledge in the HTML5 I can create the semantic layout for correct validation in a browser",icon:"https://i.ibb.co/rMXszzP/output-onlinepngtools-5.png"},{id:5,title:"CSS",description:"Having good knowledge in CSS and also knowing preprocessor like SCSS and library UI libraries for ReactJS like Material-UI I can create style which will be please to see on the desktop and mobile version of app",icon:"https://i.ibb.co/PQZR30x/output-onlinepngtools-6.png"}]})}var O=n(3),B=n.n(O),S=n(17),J=n(5),T=n.n(J);function y(e){var t=e.id,n=Object(S.a)(e,["id"]);return c.a.createElement("div",{className:"one"===t?"".concat(T.a.project," ").concat(T.a.one):"".concat(T.a.project," ").concat(T.a.two)},c.a.createElement("div",{className:T.a.project__icon},c.a.createElement("div",{className:T.a.project__icon_link},c.a.createElement("a",{href:n.projectLink,target:"_blank"},n.projectName))))}function Q(e){return c.a.createElement("div",{className:B.a.projects,id:"projects"},c.a.createElement("div",{className:B.a.container},c.a.createElement("div",{className:B.a.projects__title},c.a.createElement("h3",null,"My Projects"),c.a.createElement("div",{className:B.a.container__title_subBlock},c.a.createElement("div",{className:B.a.container__title_subBlock_wraper},c.a.createElement("div",{className:B.a.container__title_subBlock_wraper_divider},c.a.createElement("span",null),c.a.createElement("span",null))))),c.a.createElement("div",{className:B.a.projects__content},e.projects.map((function(e){return c.a.createElement(y,{key:e.id,projectName:e.projectName,id:e.id,projectLink:e.projectLink})})))))}function P(){return c.a.createElement(Q,{projects:[{id:"one",icon:"",projectName:"Social Network",projectLink:"https://rauzon.github.io/Social_network_react_typescript"},{id:"two",icon:"",projectName:"TodoList",projectLink:"http://rauzon.github.io/todolist_TS"}]})}var L=n(12),U=n.n(L);function R(){return c.a.createElement("div",{className:U.a.remoteJobBlock},c.a.createElement("div",{className:U.a.container},c.a.createElement("h2",null,"Interested in remote hiring or other collaborating?"),c.a.createElement("span",null,"I\u2019m always open to discussing about it"),c.a.createElement("div",{className:U.a.remoteJobBlock__btn},c.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/vlad-aga/"},"Start a conversation"))))}var V=n(2),X=n.n(V);function D(){return c.a.createElement("div",{className:X.a.contacts,id:"contacts"},c.a.createElement("div",{className:X.a.container},c.a.createElement("h2",null,"Contacts"),c.a.createElement("form",{className:X.a.contacts__form,autoComplete:"off"},c.a.createElement("input",{id:X.a.name,type:"text",autoComplete:"false",style:{display:"none"},placeholder:"Name..."}),c.a.createElement("input",{id:X.a.name,type:"text",autoComplete:"false",placeholder:"Name..."}),c.a.createElement("input",{id:X.a.mail,type:"email",autoComplete:"false",placeholder:"Email..."}),c.a.createElement("textarea",{id:X.a.description,placeholder:"Enter description..."}),c.a.createElement("div",{className:X.a.contacts__btn},c.a.createElement("button",{type:"submit"},"Submit")))))}var K=n(8),F=n.n(K);function C(){var e=[{id:1,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFZElEQVRogc2aa2wUVRTHf2d2Wh7dTsFSnjWggCUpgkReEqPgR0NKAQUMohBjxdIKKnyXaOQDKIIU8RGJotUGY6GgfjAB0YRHRF6CUEElFMqjFOhutxTYmeOH0rIttLuzs134fZsz55z7vzN35p57Z4QEUF/4dF/bSHnKUMYhDFN4EMgE/M0uQK3AvyjHHEN2++zr2/1rfzzntW2JNzCwYGqmGs5sUeYAo+NrXX5XZYOolFol5bVxpXAb0FA8LdtWZzHoywrd42n0DoRE9FPfDWdF93Vbz7gJjLkDWlCQEkg9VyjIO9waGglFoMFBlltybZl8+NO1GGOiE1iYl4NNGchIbxJjQ+GAqDHTKin/O5qvEc0hWJQ/HVv2Jks8gMAj4OwNLJgyNZpvhx0IFOfPVfRbOmnIdIiQjrAxWJQ3vyO3djsQLJ7yCqrrATPh4mLHp8hHdUX5xe053PEZCBblT1e0DPB1mjR32CDPWGs2bWp74rYO1BXmDRFD/gCspEiLnXpwxlhrthyLNLYaQvrWs6li8B33nngAv2KUakFBSqSxVQeCF6+/kcy3jVsERgVTzy9sY2uiYf7kAWHTVwmkJV2ZO+p9pu+htA++PwsRd8A2zSXc++IB/LbtLG4+EGgqzEScU25qG1uV9UdO8mdNwJOaEVkZzM0diE9clWUh1BholZTXmgBqOLNRd4XZ54dP8uaOQ25COuSl4YPcuKcJziygxAC4WRK74vBFb1c+kkM1da5jVHgBwAgtmtYPeNSLgME90piRk02vbl28pHHLmPqFeX3McNieJB4WNj27pvLbjIn4U02OXgoyrnRbIkV2hKgtEw1DGeclSzefQVezqeLwpyS58hAdbyIM85KjOtTI9C27mNA/k/IT1YmSFhOq5JiKDvEwgsjsmsogK43q+kbG9b2Pv2qbHu4J/TPJ6ZkOQOXlIPsvXOHJ7CysLia7z17iVKAhAV2QoSZIDy8p7re6s2rSrepj/ZGTAMzMyWZebtOr8dfTFxncI40B/m4AXA3bzPphD9urarw0DUIPgyQsVp7I7tUiHqCb6ePdx4d7T6ykR11SJoKzoUZyv/iZ13852GLLzbTI6JLSQVRsGDRtOnUqO07XUBVs4Oujp1rZsyPuSlwIQQO47C1LdK6GbQAabaeVPcXncQAoVwyBf7xluZvocQPlWHTHexMRKg3HkN13W0jcOMYu02c42xxblDhns6pAAwu3H7zNXlZ5mgMXmqrMysvBFnukb5W3yUzFdHaY/lUV5wPF+XtRHRNPltrG6y2TVyQ7q2vZWX37hvOdfONkj39VxXkDQJUNbqMfzkrcxsWIrAzXMUKTZhNAVEoRXYaLNfG83EEIEtdiJJKRWRm8mDvQbVhI1SiDiHEfLM5bqSqLPKlJFqrvWSUViyFiV8J3w1kBhO6aqFhRgoaGVzQftnSg+7qtZ1DevjuqXGDI0shva63m8vQbfd5X2J98VbEhyL70a71Xt7a14Z7e3PXpaGtVRWWk8bZqKmNtxQmUuYCdNGnRsUFntxUP7XzgsEo2lwtS2Pm6YkJR5ltrKirudLLdejZ9zaZPEJkHhDtNWnRsEV61SjZ/1p5D1PonUJSfj+qXCOmJ1RaVAOic9q58MzEVcHWvTR6K4ysTGJUYbR0jyD7HcWZmrK04Ec03piVRxuqtx61edWMVXYQSjB4RHwINiiz190p5LBbxN2PcEVo0rZ8dtpcABSTue0IIkY8N+/pytz+AePzZw35OVJ4HxsaRS4E9onzlpKZ+k7Fy46V4dMS/JRdBcP7U3pjOJETHKzIMhwcQsoj83UapweA/QY+hspuwsT19XfkFr23/D78ZzwDN3abBAAAAAElFTkSuQmCC",to:"https://www.linkedin.com/in/vlad-aga/"},{id:2,icon:"data:image/png;base64,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",to:"https://www.instagram.com/vlad_aga97/"},{id:3,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAMIUlEQVR4nO2de3RV1Z3HP79zT27ITXKTkARQwCk4JGEUcKoz2vFBaVEWakwjYu37NUMViI/pQ7umndpFZ6bLtstiEqrMdGmHdqrlmQQXyJJql1SrLqtii4SQgPJMeSW5AZLce89v/siDvO4z93HCvZ+/zjpnP37nfNfe5+x99u+3BZvTsaKyEIdVimoZSAlKKTAFyAbNBinoPQbgLOgZkLO9xxxD2Ae6D5G9+I1Gd+3mU8m6l3CQZBswnM7lt05Rw7xRYSHIzcCMGFdxDGSXwIs+NV4oqN30QYzLHxO2EMSzvHK2GtYXQZaAzkpw9ftQNiDWOndNw94E1z2CpAnSsay8SDONz4ryBeCaZNkxjDcU+ZX0+H/jXttwMhkGJFyQ0w+UX5bhM76B8M8KrkTXHybdoL80Lfmha03doURWnDBB2laWz3Co8aAKy4AJiap3jHgRnsXQ/3Cvrm9MRIVxF+T4N2/JdnVnfQ/lG4AZ7/rihE+UNT1Gz/cKq7d1xLOiuArSUVVRjrIGmBbPehLIMRUecVfXrRPQeFQQF0HaVpbPMNT4BcKCeJSfbFTYaVmOr8XjkznmgnSsKK9AjKeBgliXbTPaBf2X3Jr69bEsNGaC6LJlGZ7M1lUo345luTZHRanOKXZ+Sx5d3xOLAmPy4M4+eOclfp+/HvuMJxLN64ZDK3JW17eOtaAxC9K2snyGgeOFJIyw7cYBNfyL8p7Y2jSWQsYkSOfKijkWbAcuHUs5FxGtftHFBdX1b0dbgBFtRk9V5XwLdpEWYzCTHSovd1RV3BhtAVG1kM777phrOeT3QH60FV/kdFhqLcivbfhTpBkjFqSt6lOXG6q76P0nkSYgegJ13OCu3bwvklwRdVmeeysnGco20mKEgRQj/m2dy2+N6FmFLYhWLc5U03o+/TUVCTLTMjK26KNLneHmCFuQTnX+mNQdZ4yFaz2nvP8VbuKw3iEdKypvR6z6cNOnGYGC3Omu2bIlVMKQD/j0A+WXmX7jbWBiTExLXc5YWFfn1zQcCJYoaJelIKbPeIa0GLGgQDDWhkoUVJCOqjs+e7FOoScDgYWelRWfDpFmdE5VLXZnqPN90iPxWHPc1+Msm7h2fftoFwO2EKc6f0hajHgwxXT2fD/QxVFbSPv9t88Sy/E+4IibWamNzxIpy6/e0jz8wqgtRPzmI6TFiCemofrwaBdGtJBzyyum+wz2A2GPLtNEhdevjlnD/8uPaCFeBw+TFiMRZJj4/3X4ySEtxFO1tFi15wMgK2FmpTbnUWP64BX5Q1qIRc9nSIuRSLIE657BJ4YI0rfwOU0CURn6zAe6rD6XgD2JNykNDi3rXzs80EJ6/TPSJAP187n+40FdlixJhjFpQJC7LhwD5+69farPdBxOnklpTJ9/muvJrUcMAG+G45PJNijV8WYYH4e+Lkus1JpiP9J5ntp3mnnklT+zv60z2eYAINqrgQkgwifi4uxgM147doqn3j1AfctRfFbvHb9x/DS/W3pTki0DkE8ASMey8iKcxolkmxMvuvwWG/Yd5sndLew+MfIXxNScLN7/8i1JsGwkmuEsNHFKabINiQfHz3bx9F8O8t/vHeTk+e6A6UoKchJoVQh8XSUmQml8nLOSwzt/bWPNuy1sbDqC17JCpp9XbJ/VsGJJqdkXqmJc0+W3WN94mKd2t7D75Kh/RpmWm0Vbt5fOHt+Q83OL3IkwMTzEKDVBSpJtR7T0d0trdx/gVFdgB6a7S6dx8nwPv/vwryOu2amFAKUm43CdbrjdUpbp4NGP/R0t7Wf5bePIca8rw8Hl+dmj5EwWOtkEbPRWC0y332JT0xFq3mnmvQDd0mDKJubyzKJraGg5xlO7W0ZNM7coD0NstBhTyDWB3GTbEYxwu6XB3FM6ndUL5lHffJT/fD1wPJm5xXmxMjM2qI0F6e+WNjQdHhjEhSLXabJ6wVXcNWsqOz5o5b6dbwf9gJxXZKv3x0ALsU2XZanybONhasPslgZz9eQCnll0DX/jdvFW6xm+uP3NkELatYXYhq++8Bab9h+JKI8AK//+b3n0Y7PJMAya286ydOvrnPP6g+ZzOgzKJtqvczCBTmyymPrlw5HN4BROcPLkwo+y6COTAWg9101l/WtBR+b9lBXkkumI2uc1PggeA/Ak245+vv0PJTjC/Oq5YWoRf/jMggExOnt83NXwGgc7zoaV33bdFYDiMbGRIMvnXc7Nl03muX2H2Nh0hOa2kQ/XIcK3rinh4X8sHRDPa1l8btsbvDvK5GEg5tlREOkVxB4/BPqYVZDDd6+dzXevnc27J9rZ0HSYTU1HOeQ5R5bpYP3t13HTtKKB9Aos3/k2Lx2KrLuzawsxgOPJtiMQ84rzWPVPV/DnL93MT+fPpdtvMbtw6Iv4+6/u4blRRuHBMESYU2hDQZBWAyEhoevGgtA72DMN4YWDF+K7vHn8DD/7U+ShRWbmZZPjtNUHZi+qew3U/oJA76Dv+ksL2X7wQoP+9d4PoyrrKjt2V4AaNBoY40MQgFtnTGHnhyfo8lt0+S02NkU2ZunHlu8PAItGQx3OpAcPDpdbZ0zhrNfHH46cZGvzUdq7vVGVY7Mp9ws4nU1G3uPrTwO2CrcdiOm5Lq4odLPtwHF+vXdoON1JrkwmuTLDKmeOnX5KXeBA3uPrT/cOVZWXkmxM2CyeMYXN+4/y8qDP3MvcLnYsuZFXPv1xrrsk+KTDtJwsirLCEy6hCDuhb12WGuNHkNtmTOHE+W782jtxWDYxlx1LbmRmXjaXZE/g+crr+frcmQHz2/X9oX2NwgAwVV9Mrjnhc/XkAq6alD9wvP3OG7g0+0Kg7AzD4Mc3zeEXt1yNK2Okm6QtR+igpul4CQa5I3SsqNiLjI8FDyfPd/NWaxvzpxczIcgE4V9OdfD5bW8MTMFkOgxeuns+Vxba7h2yx11TdwUMDv0tsgn0O0kzKQKKsjIHJhWDcUWhm9/fPZ91ez7kkOc8S0um2lEMVNjQf2wOOvsMMj4EiQS3M4MVV12ebDOCIob+X//xQHt3127eh8ibyTEppXlt8M4LQzpgVdYl3p7URlSGPPOhTp89/t8A5xNqUQojcE6R3w4+N0QQ99qGkwL/k1izUhjRtcN3jRvxzegQx2NATALLpwlKt8Nr/WT4yRGCuKo3HUb438TYlLooPO16cuuI6epRR1UW8iPAN9q1NDHBq1iPjXZhVEHyq7c0i2hNfG1KaVYHCoYZcN6hK4t/B6L7A5QmGMe80rMq0MWAghQ/Vu8R1W/Gx6bURYT7g+30FnJVWntVxYuipP3YY4DAjtyaukXB0oRcS5nh5yuArXdYHiec8Zny9VCJQgriWlN3CDW+TJz27UsRFLW+UvCzLQdDJQxrtbG7dvNWEV09drtSFOUn7tqGunCShr38O6cw82Hg9aiNSlWUV3O9k/8t3OQROdh5qpYWq9Xzynj5s2gDmg2HXh/JdnqRb3l035KZhsO3C7gk0rwpxjEL6/pQuyEMJ2KPlfyfb2wxYBHQFmneFKLDL3pbpGJAlNvm5dTUvSeqFUBkjoCpQTuWcVu0exmOyUnbc3/llWpZ24GpYynnIuK4YcninDVb3om2gBhtvWpsB8ZtiI7YoC1qsShvTf3+sZQyZq/H/JqGA4ZDbyKVP4mVV0UyrxurGBADQQByVte35ha136DID4DQMZEuHlSUJ3KLnQtyq9fHJAhc7De4r6ooR0mFfavaBflabs2WjbEsNOaO2u7quga/Oj6qMG7WC0eKwA7TYk6sxegrO350VFWUq1IrMD2e9SSQoyp8J6+6Lm5rDuIaysBdXdfgk54rgccZ3//ovaj+tMtylsZTDEjgzp1nHvzUR0yvPqTCMmBCyAz2oAfhORX/qrwntkbu7hsFCY/e1fnAHZMtSx4SpUrBlej6w6Qb9JemmKtc1ZsSGoI9aeHUOlZUFgrWPX37Z1ybLDuG8UeBdVaG89k+38uEY4v4dh0rKksU/YKILgFmJ7j6PSpsQPy/SlS3FAxbCDIYz72VkzD98xUWAgtBAjsMRscxkF0CLzos3eZaU3codJbEYTtBhtP+0NKJ+LpKBEcZqqUgJahOQTQbyAXJ50JUvE7QNsAD0gnSCjSiVqMa2qg+qzH/58+fSdrNhMH/A/bUCF4X1ZHcAAAAAElFTkSuQmCC",to:"https://t.me/vladaga"},{id:4,icon:"data:image/png;base64,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",to:"https://join.skype.com/invite/czxeVHioBN4r"}];return c.a.createElement("footer",{className:F.a.footer,id:"footer"},c.a.createElement("div",{className:F.a.container},c.a.createElement("h2",null,"Vlad Aharodnikov"),c.a.createElement("div",{className:F.a.footer__content},e.map((function(e){return c.a.createElement("a",{href:e.to,target:"_blank",className:F.a.footer__content_link},c.a.createElement("div",{key:e.id,className:F.a.footer__content_item},c.a.createElement("img",{src:e.icon,alt:""})))}))),c.a.createElement("span",null,"\xa9 Copyright Vlad Aharodnikov")))}var W=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement(v,null),c.a.createElement(x,null),c.a.createElement(P,null),c.a.createElement(R,null),c.a.createElement(D,null),c.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.34d0251e.chunk.js.map