(this.webpackJsonpbeisnest=this.webpackJsonpbeisnest||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/line.917c8ddf.svg"},47:function(e,t,a){e.exports=a.p+"static/media/banner1.c6b49d5d.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/banner2.7d91dd27.jpg"},52:function(e,t,a){e.exports=a(92)},57:function(e,t,a){},87:function(e,t,a){e.exports=a.p+"static/media/logo.dd2603dd.png"},88:function(e,t,a){e.exports=a.p+"static/media/instagram.15bc5470.svg"},89:function(e,t,a){e.exports=a.p+"static/media/facebook.c0cd1382.svg"},90:function(e,t,a){e.exports=a.p+"static/media/logo2.7975bd83.png"},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(57),a(7)),i=a(18),s=a(15),m=a(13),u=a(41),p=a(51),d=a(17),E={openDrawer:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_DRAWER":return Object(d.a)(Object(d.a)({},e),{},{openDrawer:!e.openDrawer});default:return e}},b={portfolioList:[],portfolioModal:{open:!1,caption:"",mediaUrl:"",mediaType:"",likeCount:0,timestamp:""}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PORTFOLIO_FAIL":return Object(d.a)({},e);case"GET_PORTFOLIO_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{portfolioList:t.portfolioList});case"SET_PORTFOLIO_MODAL":return Object(d.a)(Object(d.a)({},e),{},{portfolioModal:t.portfolioModal});default:return e}},O=function(e){return Object(m.c)({router:Object(i.b)(e),topbarReducer:f,portfolioReducer:g})},h=a(20),v=a.n(h),N=a(23),k=a(16),y=a.n(k);y.a.defaults.baseURL="https://beisnest.herokuapp.com/",y.a.defaults.headers.Accept="application/json",y.a.defaults.headers["app-key"]="beinest",y.a.defaults.headers["Content-Type"]="application/json",y.a.defaults.headers.get["Content-Type"]="application/json",y.a.defaults.headers.post["Content-Type"]="application/json",y.a.defaults.xsrfCookieName="XSRF-TOKEN",y.a.defaults.xsrfHeaderName="X-XSRF-TOKEN";var j=function(e,t){var a={params:t};return y.a.get(e,a)},C=v.a.mark(w);function w(e){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("portfolio/",{});case 3:if(t=e.sent,console.log("response",t),200!==t.status){e.next=9;break}return console.log("response.data",t.data),e.next=9,Object(N.a)({type:"GET_PORTFOLIO_SUCCESS",portfolioList:t.data});case 9:e.next=16;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log("error occurs",e.t0),e.next=16,Object(N.a)({type:"GET_PORTFOLIO_FAIL",payload:{status:"error",message:"Error occurs when geting user account"}});case 16:case"end":return e.stop()}}),C,null,[[0,11]])}var T=v.a.mark(L);function L(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.b)("GET_PORTFOLIO_REQUEST",w);case 2:case"end":return e.stop()}}),T)}var S=Object(s.a)(),x=Object(p.a)();var R=a(11),_=function(){return r.a.createElement("div",{className:"about-content-info"},r.a.createElement("p",{className:"title"},"\u5730\u7406\u4f4d\u7f6e"),r.a.createElement("p",{id:"about-address"},"\u53f0\u5317\u5e02\u5927\u5b89\u5340\u5fe0\u5b5d\u6771\u8def\u56db\u6bb549\u5df74\u5f0416\u865f"),r.a.createElement("iframe",{title:"address",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.762126904798!2d121.54347401498799!3d25.04214544411889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abda88777e43%3A0xea8c0209a58fb8f1!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5b-g5a2d5p2x6Lev5Zub5q61NDnlt7c05byEMTbomZ8!5e0!3m2!1szh-TW!2stw!4v1617533468774!5m2!1szh-TW!2stw",width:"98%",height:"300",loading:"lazy",allowFullScreen:!0,frameBorder:"0"}))},I=a(42),F=function(){return r.a.createElement("div",{className:"about-content-info"},r.a.createElement("p",{className:"title"},"\u9810\u7d04\u65b9\u5f0f"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u500b\u4eba\u5de5\u4f5c\u5ba4\uff0c\u63a1\u5b8c\u5168\u9810\u7d04\u5236\uff0c\u8acb\u52ff\u9072\u5230\u5537"),r.a.createElement("li",null,"LINE \u5b98\u65b9\u5e33\u865f\uff1a",r.a.createElement("a",{href:"https://line.me/R/ti/p/%40beisnest",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block"}},r.a.createElement("img",{src:I,className:"social-link-icon",alt:"line-logo"}))),r.a.createElement("li",null,"\u9810\u7d04\uff1a",r.a.createElement("a",{href:"https://line.me/R/ti/p/%40beisnest",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block"}},r.a.createElement("img",{src:I,className:"social-link-icon",style:{marginRight:"10px"},alt:"line-logo"})),"(\u9ede\u64ca\u5716\u793a\u958b\u555f Line)")),r.a.createElement("br",null),r.a.createElement("p",{className:"title"},"\u670d\u52d9\u9805\u76ee"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5ac1\u63a5\u776b\u6bdb\uff1a"),r.a.createElement("p",null,"\u55ae\u6839\u5ac1\u63a5\u3001\u591a\u6839\u5ac1\u63a5"),r.a.createElement("li",null,"\u7f8e\u5bb9 SPA\uff1a"),r.a.createElement("p",null,"\u7121\u75db\u7c89\u523a\u3001\u6de8\u5316\u6392\u9178\u3001\u81c9\u90e8\u4fdd\u990a")))},P=a(87),A=function(){return r.a.createElement("div",{className:"about-logo"},r.a.createElement("img",{src:P,alt:"logo"}))},M=function(e){var t=e.showLogo;return r.a.createElement("div",{className:"about-container-main"},t?r.a.createElement(A,null):null,r.a.createElement("div",{className:"about-container-sub"},r.a.createElement(F,null),r.a.createElement(_,null)))},U=a(50),D=a(21),B=a(47),G=a.n(B),W=a(48),z=a.n(W),X=function(){var e=Object(n.useState)(0),t=Object(U.a)(e,2),a=t[0],l=t[1];return r.a.createElement(D.a,{activeIndex:a,onSelect:function(e,t){l(e)}},r.a.createElement(D.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:z.a,alt:"First slide",style:{height:"350px"}}),r.a.createElement(D.a.Caption,null,r.a.createElement("h3",null,"Bei\u2019s Nest \u8c9d\u7aa9\u7f8e\u776b\u7f8e\u5bb9\u8f15\u8a2d\u8a08"),r.a.createElement("p",null,"\u5ac1\u63a5\u776b\u6bdb\u3001\u7121\u75db\u7c89\u523a\u3001\u500b\u4eba\u5de5\u4f5c\u5ba4\uff08\u63a1\u5b8c\u5168\u9810\u7d04\u5236\uff09\uff0c\u7522\u54c1\u7686\u7d93 SGS\u5408\u683c\u8a8d\u8b49\uff0c\u9810\u7d04\u8a62\u554f\u8acb\u52a0 Line"))),r.a.createElement(D.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:G.a,alt:"Second slide",style:{width:"800px",height:"350px"}}),r.a.createElement(D.a.Caption,null,r.a.createElement("h3",null,"BEINEST \u7f8e\u5a55"),r.a.createElement("p",null,"\u5ac1\u63a5\u776b\u6bdb\u3001\u7121\u75db\u7c89\u523a\u3001\u500b\u4eba\u5de5\u4f5c\u5ba4\uff08\u63a1\u5b8c\u5168\u9810\u7d04\u5236\uff09\uff0c\u7522\u54c1\u7686\u7d93 SGS\u5408\u683c\u8a8d\u8b49\uff0c\u9810\u7d04\u8a62\u554f\u8acb\u52a0 Line"))))},Y=a(24),J=a.n(Y),q=function(e){var t=Object(o.d)(),a=e.portfolio,l=Object(n.useCallback)((function(){t({type:"SET_PORTFOLIO_MODAL",portfolioModal:{open:!0,caption:a.caption,mediaUrl:a.mediaUrl,mediaType:a.mediaType,likeCount:a.likeCount,timestamp:a.timestamp}})}),[a]);return r.a.createElement("div",{className:"portfolio-card",onClick:l},r.a.createElement(J.a,null,r.a.createElement(Y.CardPrimaryContent,null,"IMAGE"===a.mediaType||"CAROUSEL_ALBUM"===a.mediaType?r.a.createElement(Y.CardMedia,{square:!0,imageUrl:a.mediaUrl}):r.a.createElement("video",{className:"mdc-card__media",controls:!0},r.a.createElement("source",{src:a.mediaUrl,type:"video/mp4"}),"Your browser does not support the video tag.")),r.a.createElement(Y.CardPrimaryContent,null,r.a.createElement("div",{className:"portfolio-card-header"},r.a.createElement("strong",{style:{color:"darkgray"}},"Bei's nest")))))},H=function(){var e=Object(o.e)((function(e){return e.portfolioReducer.portfolioModal})),t=e.open,a=e.caption,l=e.mediaUrl,c=Object(o.d)(),i=Object(n.useCallback)((function(){c({type:"SET_PORTFOLIO_MODAL",portfolioModal:{open:!1}})}),[]),s="";return a&&(s=a.replace(/[\n\r]/g,"<br/>")),r.a.createElement("div",{className:"portfolio-modal",style:{display:t?"block":"none"}},r.a.createElement("span",{className:"portfolio-modal-close-btn",onClick:i},"\xd7"),r.a.createElement("div",{className:"portfolio-modal-content"},r.a.createElement("img",{src:l}),r.a.createElement("div",{className:"portfolio-modal-caption",dangerouslySetInnerHTML:{__html:s}})))},K=function(e){var t=e.category,a=e.portfolioList,n=null===t||void 0===t?"0":"100px";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"portfolio-container"},r.a.createElement("div",{className:"portfolio-list",style:{paddingBottom:n}},a.map((function(e){return r.a.createElement(q,{key:e.id,portfolio:e})})))),r.a.createElement(H,null))},Q=function(e){var t=Object(o.d)(),a=e.showPostNumber,l=Object(R.e)().category,c=Object(o.e)((function(e){return e.portfolioReducer.portfolioList})),i=[];switch(l){case"acne":i=c.filter((function(e){return e.caption.indexOf("\u7121\u75db\u7c89\u523a")>0}));break;case"all":i=c;break;default:i=c.filter((function(e){return e.caption.indexOf("\u7121\u75db\u7c89\u523a")<0}))}return void 0!==a&&a>0&&(i=i.slice(0,8)),Object(n.useEffect)((function(){t({type:"GET_PORTFOLIO_REQUEST"})}),[]),r.a.createElement(K,{portfolioList:i,category:l})},Z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(Q,{showPostNumber:12}),r.a.createElement("hr",{className:"separate-line"}),r.a.createElement(M,{showLogo:!1}))},V=function(){return r.a.createElement(R.c,null,r.a.createElement(R.a,{exact:!0,path:"/"},r.a.createElement(Z,null)),r.a.createElement(R.a,{exact:!0,path:"/portfolioCatg/:category"},r.a.createElement(Q,null)),r.a.createElement(R.a,{exact:!0,path:"/about"},r.a.createElement(M,{showLogo:!0})),r.a.createElement(R.a,{exact:!0,path:"*"},r.a.createElement("div",null,r.a.createElement("h1",null,"Sorry, No this page"))))},$=a(8),ee=a(88),te=a(89),ae=a(42),ne=function(){return r.a.createElement("div",{className:"social-link-menu"},r.a.createElement("a",{href:"https://www.instagram.com/beisnest/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:ee,className:"social-link-icon",alt:"instagram-logo"})),r.a.createElement("a",{href:"https://www.facebook.com/beisnest/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:te,className:"social-link-icon",alt:"facebook-logo"})),r.a.createElement("a",{href:"https://line.me/R/ti/p/%40beisnest",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:ae,className:"social-link-icon",alt:"line-logo"})))},re=function(){var e=Object(o.d)(),t=Object(o.e)((function(e){return e.topbarReducer.openDrawer})),a=function(a){e(Object($.d)("/".concat(a))),t&&e({type:"OPEN_DRAWER"})};return r.a.createElement("div",{className:"drawer-menu"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",{className:"menu"},r.a.createElement("li",{onClick:function(){return a("")}},"\u6700\u65b0\u6d88\u606f"),r.a.createElement("li",{onClick:function(){return a("portfolioCatg/nest")}},"\u7f8e\u5a55\u5ac1\u5a55"),r.a.createElement("li",{onClick:function(){return a("portfolioCatg/acne")}},"\u7121\u75db\u7c89\u523a\u8ab2\u7a0b"),r.a.createElement("li",{onClick:function(){return a("about")}},"\u95dc\u65bc BEI'S NEST"),r.a.createElement("li",null,r.a.createElement(ne,null)," "))))},le=function(){return Object(o.e)((function(e){return e.topbarReducer.openDrawer}))?r.a.createElement("div",{id:"drawer-bar"},r.a.createElement(re,null)):r.a.createElement(r.a.Fragment,null)},ce=function(){return r.a.createElement("div",{id:"footer"},r.a.createElement(ne,null),r.a.createElement("p",null,"Copyright \xa9 2021 Bei's nest. All rights reserved."))},oe=a(90),ie=function(){var e=Object(o.d)();return r.a.createElement("div",{className:"logo-area"},r.a.createElement("img",{className:"logo",src:oe,alt:"logo",onClick:function(){e(Object($.d)("/"))}}),r.a.createElement("span",{id:"store-title",onClick:function(){e(Object($.d)("/"))}},"BEI'S NEST"))},se=function(){var e=Object(o.d)(),t=function(t){e(Object($.d)("/".concat(t)))};return r.a.createElement("div",{className:"topbar-menu"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",{className:"menu"},r.a.createElement("li",{onClick:function(){return t("")}},"\u6700\u65b0\u6d88\u606f"),r.a.createElement("li",{onClick:function(){return t("portfolioCatg/nest")}},"\u7f8e\u5a55\u5ac1\u5a55"),r.a.createElement("li",{onClick:function(){return t("portfolioCatg/acne")}},"\u7121\u75db\u7c89\u523a\u8ab2\u7a0b"),r.a.createElement("li",{onClick:function(){return t("about")}},"\u95dc\u65bc BEI'S NEST"))))},me=a(49),ue=a.n(me),pe=function(){var e=Object(o.d)(),t=Object(n.useCallback)((function(){e({type:"OPEN_DRAWER"})}),[e]);return r.a.createElement(ue.a,{role:"button",icon:"menu",id:"drawer-button",onClick:t})},de=function(){return r.a.createElement("div",{className:"topbar"},r.a.createElement(pe,null),r.a.createElement(ie,null),r.a.createElement(se,null))},Ee=(a(91),function(e){var t=Object(m.e)(O(S),e,Object(m.d)(Object(m.a)(Object(u.a)(S),x)));return x.run(L),t}({})),fe=function(){return r.a.createElement(o.a,{store:Ee},r.a.createElement(de,null),r.a.createElement(le,null),r.a.createElement(i.a,{history:S},r.a.createElement(V,null)),r.a.createElement(ce,null))},be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),be()}},[[52,1,2]]]);
//# sourceMappingURL=main.c51db5ee.chunk.js.map