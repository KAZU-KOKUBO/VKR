"use strict";(self.webpackChunkdo=self.webpackChunkdo||[]).push([[926],{285:(e,t,n)=>{function a(e){e.fn.marquee=function(t){return this.each((function(){var n,a,i,r,s=e.extend({},e.fn.marquee.defaults,t),o=e(this),u=o.width(),d="js-marquee-wrapper",l="js-marquee",f="blocklist__item-wrapper",p=3,m="animation-play-state",c=!1,g="number"==typeof s.column,h=o.find(`.${f}`).length,v=g?100/s.column*h:0,y=g?Math.floor(100/h):0,w=g?"%":"px",S=g?Math.ceil(100/v):1,b=function(e,t,n){for(var a=["webkit","moz","MS","o",""],i=0;i<a.length;i++)a[i]||(t=t.toLowerCase()),e.addEventListener(a[i]+t,n,!1)},k=function(){o.timer=setTimeout(_,s.delayBeforeStart)},C={pause:function(){c&&s.allowCss3Support?n.css(m,"paused"):e.fn.pause&&n.pause(),o.data("runningStatus","paused"),o.trigger("paused")},resume:function(){c&&s.allowCss3Support?n.css(m,"running"):e.fn.resume&&n.resume(),o.data("runningStatus","resumed"),o.trigger("resumed")},toggle:function(){C["resumed"==o.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(o.timer),o.find("*").addBack().off(),o.removeAttr("style").html(o.find(`.${l}:first`).html()),o.find(`.${f}`).removeAttr("style")}};if("string"!=typeof t){o.wrapInner('<div class="'+l+'"></div>');var O=o.find(`.${l}`);if(O.css({"margin-right":s.gap,float:"left"}),g?(r=(100/(S+1)).toFixed(2),o.find(`.${f}`).css({"flex-basis":y+w,"flex-grow":1}),s.duration=h/s.column*s.duration):(o.css("width","100000px"),r=O.width(),o.css("width",""),S=Math.ceil(u/r),s.duration=r/u*s.duration),S!==1/0)for(var A=0;A<S;A++)O.clone(!0,!0).appendTo(o);if(o.wrapInner('<div class="'+d+'"></div>'),n=o.find(`.${d}`),i=g?v*(S+1):1e5,n.css("width",i+w),o.find(`.${l}`).css("width",r+w),s.allowCss3Support){var $=document.body||document.createElement("div"),M="marqueeAnimation-"+Math.floor(1e7*Math.random()),q="Webkit Moz O ms Khtml".split(" "),x="animation",H="",B="";if(void 0!==$.style.animation&&(B="@keyframes "+M+" ",c=!0),!1===c)for(A=0;A<q.length;A++)if(void 0!==$.style[q[A]+"AnimationName"]){var I="-"+q[A].toLowerCase()+"-";x=I+x,m=I+m,B="@"+I+"keyframes "+M+" ",c=!0;break}c&&(H=M+" "+s.duration/1e3+"s "+s.delayBeforeStart/1e3+"s infinite "+s.css3easing,o.data("css3AnimationIsSupported",!0))}s.duplicated&&s.startVisible&&n.css("transform","translateX(0)");var _=function(){if(s.duplicated&&(1===p?(s._originalDuration=s.duration,s.duration="left"==s.direction?s.duration+i/(r/s.duration):2*s.duration,H&&(H=M+" "+s.duration/1e3+"s "+s.delayBeforeStart/1e3+"s "+s.css3easing),p++):2===p&&(s.duration=s._originalDuration,H&&(M+="0",B=e.trim(B)+"0 ",H=M+" "+s.duration/1e3+"s 0s infinite "+s.css3easing),p++)),p>2&&n.css("transform","translateX("+("left"==s.direction?0:"-"+r+w)+")"),a={transform:"translateX("+("left"==s.direction?"-"+r+w:0)+")"},o.trigger("beforeStarting"),c){n.css(x,H);var t=B+" { 100%  "+function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+":"+e[n]);return t.push(),"{"+t.join(",")+"}"}(a)+"}",u=n.find("style");0!==u.length?u.filter(":last").html(t):e("head").append("<style>"+t+"</style>"),b(n[0],"AnimationIteration",(function(){o.trigger("finished")})),b(n[0],"AnimationEnd",(function(){_(),o.trigger("finished")}))}else n.animate(a,s.duration,s.easing,(function(){o.trigger("finished"),s.pauseOnCycle?k():_()}));o.data("runningStatus","resumed")};o.on("pause",C.pause),o.on("resume",C.resume),s.pauseOnHover&&(s.playOnHover?(o.on("mouseleave",C.pause),o.on("mouseenter",C.resume)):(o.on("mouseenter",C.pause),o.on("mouseleave",C.resume))),c&&s.allowCss3Support?(_(),s.pauseOnHover&&s.playOnHover&&o.trigger("pause")):k()}else e.isFunction(C[t])&&(n||(n=o.find(`.${d}`)),!0===o.data("css3AnimationIsSupported")&&(c=!0),C[t]())}))},e.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:0,direction:"left",duplicated:!1,duration:5e3,speed:0,gap:20,pauseOnCycle:!1,pauseOnHover:!1,playOnHover:!1,startVisible:!1}}n.r(t),n.d(t,{default:()=>a})}}]);