(self.webpackChunkdo=self.webpackChunkdo||[]).push([[375,894],{2653:e=>{e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(n){!t.hasOwnProperty(n)||null===t[n]||"object"!=typeof t[n]&&"function"!=typeof t[n]||Object.isFrozen(t[n])||e(t[n])})),t}},3982:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var i=n(5495),a=n(8610),o="is-opened",r={HOVER:"pointerover",CLICK:"pointerdown"},s={MENU:".tabs__menu",CONTENT:".tabs__content",PANE:".tabs__pane"},c={NONE:"none",FADE:"fade",HORIZONTAL:"slide horizontal",VERTICAL:"slide vertical"},d=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function r(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}c((i=i.apply(e,t||[])).next())}))},l=function(e,t){var n,i,a,o,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(r=0)),r;)try{if(n=1,i&&(a=2&s[0]?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,i=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(a=r.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){r=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(6===s[0]&&r.label<a[1]){r.label=a[1],a=s;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(s);break}a[2]&&r.ops.pop(),r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e],i=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}};function u(e){return d(this,void 0,void 0,(function(){function t(e){var t;C.has(e.id)&&(null===(t=C.get(e.id))||void 0===t||t.disconnect());var n=new ResizeObserver((function(e){e.forEach((function(e){requestAnimationFrame((function(){var t=Math.round(e.contentRect.height),n=parseFloat(g.style.height);0!==t&&n!==t&&(g.style.height="".concat(t,"px"),M&&(M.cancel(),d(g)))}))}))}));n.observe(e),C.set(e.id,n)}function d(e){(M=g.animate({height:[u(x),u(e)]},{easing:N,duration:O})).onfinish=function(){M=null}}function u(e){if(!e.classList.contains(o)){e.classList.add(o);var t=getComputedStyle(e).height;return e.classList.remove(o),t}return getComputedStyle(e).height}function f(e){e.forEach((function(e){return e.classList.remove(o)}))}function h(e){e.forEach((function(e){return e.classList.add(o)}))}function p(){var e="click"===b.event?r.CLICK:r.HOVER,n=k===c.HORIZONTAL||k===c.VERTICAL;A.forEach((function(n,i){f([A[i],E[i]]),T===i&&h([A[i],E[i]]),n.addEventListener(e,(function(){return function(e){var n;if(T!==e){f(A),h([A[e]]),S&&(S.cancel(),S=null,L&&L.cancel());var i=E[e],a=E[T],o=e>T;switch(T=e,x=a,f(E),C.has(a.id)&&(null===(n=C.get(a.id))||void 0===n||n.disconnect(),t(i)),k){case c.FADE:h([a]),(S=a.animate({opacity:[1,0],height:[u(a),u(i)]},{easing:N,duration:O/2})).onfinish=function(){f([a]),h([i]),(S=i.animate({opacity:[0,1]},{easing:N,duration:O/2})).onfinish=function(){S=null}};break;case c.HORIZONTAL:case c.VERTICAL:h([i,a]);var r=k===c.HORIZONTAL?"X":"Y";d(i);var s=a.animate({transform:["translate".concat(r,"(0)"),"translate".concat(r,"(").concat(o?"-100%":"100%",")")],opacity:[1,0]},{easing:N,duration:O}),l=i.animate({transform:["translate".concat(r,"(").concat(o?"100%":"-100%",")"),"translate".concat(r,"(0)")],opacity:[0,1]},{easing:N,duration:O});L=s,(S=l).onfinish=function(){i.style.zIndex="1",a.style.zIndex="0",f([a]),S=null,L=null};break;default:h([i])}}}(i)}))})),n&&E.forEach((function(e,n){if(Object.assign(e.style,{zIndex:n===T?"1":"0",position:"absolute",left:"0",top:"0"}),T===n){var i=u(e);"auto"!==i&&(g.style.height=i),t(e)}}))}var m,v,y,b,w,g,A,E,_,k,N,O,T,x,S,L,M,C;return l(this,(function(t){switch(t.label){case 0:return[4,n(8476).default];case 1:return m=t.sent(),[4,n(6696)];case 2:return v=t.sent(),y=v.default("data-do-tt_tabs",e),b=y(a.$U.SCREEN),w=(0,i.Uf)(e,s.MENU),g=(0,i.Uf)(e,s.CONTENT),A=Array.from(w.children),E=Array.from(g.children),_=b.animation,k=_.effect,N=_.easing,O=_.duration,T=b.activeIndex,x=E[T],S=null,L=null,M=null,C=new Map,m.add(p),[2]}}))}))}},4511:(e,t,n)=>{"use strict";function i(e,t,n){let i;return function(){let a=this,o=arguments,r=n&&!i;clearTimeout(i),i=setTimeout((function(){i=null,n||e.apply(a,o)}),t),r&&e.apply(a,o)}}n.d(t,{s:()=>i})},5495:(e,t,n)=>{"use strict";n.d(t,{Fr:()=>s,I6:()=>a,TN:()=>r,Uf:()=>c,Uk:()=>o,kp:()=>i});function i(e,t){for(;e;){if(t(e))return e;e=e.parentElement}return e}function a(e,t,n){for(var i=void 0!==n?n:0,a=e.length;i<a;){if(i in e&&t(e[i],i))return e[i];i+=1}}function o(e,t,n){for(var i=void 0!==n?n:e.length-1;i>-1;){if(i in e&&t(e[i],i))return e[i];i-=1}}function r(e,t){return"string"==typeof e.className&&e.className.startsWith(t)}function s(){var e=!1;if("maxTouchPoints"in navigator)e=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)e=navigator.msMaxTouchPoints>0;else{var t=matchMedia("(pointer:coarse)");if(t&&"(pointer:coarse)"===t.media)e=!!t.matches;else if("orientation"in window)e=!0;else{var n=navigator.userAgent;e=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(n)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(n)}}return e}function c(e,t){return Array.from(e.children).find((function(e){return e.matches(t)}))}},6696:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var i=n(8610),a=n(2653);const o=n.n(a)()({"data-do-accordion":["isOpened","closeOther","childrenAsync"],"data-do-auth_popup_btn":["showUserName","showSettings","showOrders","showLogout","popupAfterAuthorized"],"data-do-form_auth":["isNativeStyle","isDrop","otherHeaderAfterAuth","showUserName","isToggle","isHeader","isRemember","isRegistration","isForgot","showSocial"],"data-do-blocklist":["slider","loop","returnToFirst","swipe","lastSlideArrow","center","controlsGroup","autoplay","childrenAsync","isMarquee","hoverStop"],"data-do-tt_blocklist":["slider","loop","returnToFirst","swipe","lastSlideArrow","center","controlsGroup","autoplay","childrenAsync","isMarquee","hoverStop"],"data-do-checkbox":["required"],"data-do-checkbox_group":["required"],"data-do-content":["image","gallery","text","headers"],"data-do-countdown":["isEnabledDays","isEnabledHours","isEnabledMinutes","isEnabledSeconds"],"data-do-form":["nativeStyle","showTitleAfterSend","disabledNativeStyleSelect"],"data-do-image":["scrollZoom","zoomOnClick"],"data-do-input":["required"],"data-do-input_date":["required"],"data-do-input_date_interval":["required"],"data-do-input_email":["required"],"data-do-input_phone":["required"],"data-do-link_universal":["blank","sidepanel"],"data-do-link_universal_block":["blank","sidepanel"],"data-do-link_universal_button":["blank","sidepanel"],"data-do-popup":["wmshowpopup"],"data-do-radio_group":["required"],"data-do-marquee":["circular","hoverStop","invertHover"],"data-do-menu_column":["dropdown","more","cancelForward","firstClick"],"data-do-menu_horizontal":["cancelForward","more","firstClickOpen"],"data-do-menu_vertical":["cancelForward","firstClickOpen"],"data-do-s3_article":["isHeadBlock","isAllLink","isImage","isDate","isAnnounce","isLinkMore","isDay","isMonth","isYear"],"data-do-s3_article2":["isHeadBlock","isAllLink","isImage","isDate","isAnnounce","isLinkMore","isDay","isYear"],"data-do-s3_board":["isDate","isDay","isMonth","isYear"],"data-do-s3_news_constructor":["isHeadNews","isAllNews","isImage","isDate","isAnnounce","isLinkMore","isDay","isYear"],"data-do-s3_unified_news_constructor":["isHeadBlock","isAllLink","isImage","isDate","isAnnouncement","isLinkMore","isDay","isYear","isTime","isMonthFirst","isDelimiterDayMonth","isDelimiterMonthYear","isDelimiterYearTime","isCustomDateFormat","isTags","isDelimiterTag"],"data-do-s3_vote_constructor":["isResults","isResultsInfo","isNativeStyle","isHideTextResult","isOtherAnswer"],"data-do-section":["scroll","smooth"],"data-do-select":["required"],"data-do-select_multiple":["required"],"data-do-slider":["loop","returnToFirst","lastSlideArrow","controlsGroup","swipe","autoplay","childrenAsync","previews","thumbs","thumbsSlider","independentScrolling","thumbsCenterMode"],"data-do-spoiler":["isOpened"],"data-do-svg_image":["stretch"],"data-do-tabs":["childrenAsync"],"data-do-textarea":["required"],"data-do-upload_file":["required"],"data-do-video":["viewportAutoPlay"],"data-do-video2":["viewportAutoPlay"]});const r=function(e,t){if(e in o){var n=o[e],i=function(e){for(var t in e)if(t in e){var a=e[t];n.includes(t)&&"boolean"!=typeof a?e[t]="0"!==a&&Boolean(a):"string"!=typeof a||Number.isNaN(+a)||(e[t]=Number(a)),"object"==typeof a&&i(a)}};i(t)}};function s(e,t){let n={};try{n=JSON.parse(t.getAttribute(e)||"")}catch(n){return void console.warn(`Error media: ${e} - ${t}`)}const a=i.Ay.slice(0,3),o=i.Ay.slice(4).reverse();return function(t){const s=i.Ay[t]||a.find((e=>window.matchMedia(e).matches))||o.find((e=>window.matchMedia(e).matches))||i.QF;let c={};const d=i.Ay.indexOf(s);let l=d>i.Yb?i.Ay.slice(i.Yb):i.Ay.slice(d,i.Yb+1).reverse();for(let e=0;e<l.length;e++){const t=l[e];if(Object.assign(c,n[t]),t===s)break}return r(e,c),c}}},8476:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var i=n(8610),a=n(4511).s,o=new Set,r=s();function s(){for(var e,t=i.Ay.slice().reverse(),n=i.QF,a=!0,o=0;o<t.length;o+=1){if((e=t[o])===i.QF&&(a=!1),window.matchMedia(e).matches&&(n=e,a))break}return n}var c=a((function(){var e=s();e!==r&&(r=e,o.forEach((function(t){t(e)})))}),200);window.addEventListener("resize",c);const d={add:function(e){o.add(e),e(r)},remove:function(e){o.delete(e)},getMedia:s}},8610:(e,t,n)=>{"use strict";n.d(t,{$U:()=>i,Ay:()=>c,QF:()=>o,Yb:()=>s});var i,a=n(2653),o="screen",r=n.n(a)()(["(min-width: 1920px)","(min-width: 1440px)","(min-width: 1280px)",o,"(max-width: 991px)","(max-width: 767px)","(max-width: 479px)"]),s=r.indexOf(o);!function(e){e.BIG_SCREEN3=0,e.BIG_SCREEN2=1,e.BIG_SCREEN1=2,e.SCREEN=3,e.TABLET_LANDSCAPE=4,e.TABLET_PORTRAIT=5,e.MOBILE=6}(i||(i={}));const c=r}}]);