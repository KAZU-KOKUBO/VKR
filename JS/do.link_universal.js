(self.webpackChunkdo=self.webpackChunkdo||[]).push([[725],{1507:(e,t,n)=>{"use strict";n.d(t,{Bt:()=>i,Vh:()=>a});var o=window.dojs||{};function i(e){return function(e,t){for(var n=0,o=t;n<o.length;n++){var i=o[n];if(!(i in e))return;e=e[i]}return e}(o,["widgets",e])}function a(e,t){return function(e,t,n){for(var o=0,i=t;o<i.length;o++){var a=i[o];t.indexOf(a)===t.length-1?e[a]=n:(e[a]||(e[a]={}),e=e[a])}return n}(o,["widgets",e],t)}window.dojs=o},1512:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var o=n(1507);function i(e){const t="mosaic-event-showed--",n="mosaic-event-hidden--",i="mosaic-event-toggled--";let a={self:{alert:function(){console.log("alert")}},select:{show:function(o,i){const a=e("#"+i.selectedTag),s=t+i.eventName,r=n+i.eventName;a.removeClass(r),i.displayType?a.css("display",i.displayType).addClass(s):a.show().addClass(s)},hide:function(o,a){const s=n+a.eventName,r=[t+a.eventName,i+a.eventName];e("#"+a.selectedTag).hide().removeClass(r.join(" ")).addClass(s)},toggle:function(t,o){const a=e("#"+o.selectedTag),s=i+o.eventName,r=n+o.eventName;a.removeClass(r),!a.hasClass(s)&&o.displayType?a.show().css("display",o.displayType).addClass(s):a.toggle().toggleClass(s)},setSrcBig:function(t,n){const o="mosaic-event-src-modified--"+n.eventName,i=e(t).find("img"),a=i.attr("data-src-alt")||i.attr("src-alt")||i.attr("src-big"),s=e("#"+n.selectedTag).find("img"),r=s.attr("src");a&&!s.hasClass(o)&&s.attr("src-old",r).attr("src",a).addClass(o)},unsetSrcBig:function(t){const n=e("#"+t.selectedTag).find("img"),o=n.attr("src-old"),i="mosaic-event-src-modified--"+t.eventName;n.attr("src",o).removeAttr("src-old").removeClass(i)}}};const s={click(t){const{eventAction:n,eventElement:i,selectedTag:s}=t,r=this,c=e(`#${s}`);r.on("click",(function(e){if("select"===i&&s){const e=(0,o.Bt)(s);e&&e.hasOwnProperty(n)?e[n]():a.select.hasOwnProperty(n)&&a.select[n](r,t)}else a.self.hasOwnProperty(n)&&a.self[n](r);e.stopPropagation()})),c.on("click",(function(e){e.stopPropagation()}))},hover:function(t){if(void 0!==t.eventElement){const{eventAction:n,eventElement:i,selectedTag:s}=t,c=this,l=document.querySelector(`#${s}`);c.on("mouseenter",(function(){if("select"===i&&s){const e=(0,o.Bt)(s);e&&e.hasOwnProperty(n)?e[n]():a.select.hasOwnProperty(n)&&a.select[n](c,t)}else a.self.hasOwnProperty(n)&&a.self[n](c)})),c.on("mouseleave",(function(e){l&&!l.contains(e.toElement)&&l!==e.toElement&&(e.data={options:t},r(e))})),e(l).on("mouseleave",(function(e){e.data={options:t},r(e)}))}}};let r=function(e){let t=e.data.options;"setSrcBig"===t.action&&a.select.unsetSrcBig(t)};e.fn.mosaicUEvent=function(t){if(s[t])return s[t].apply(this,Array.prototype.slice.call(arguments,1));e.error("Метод с именем "+t+" не существует для jQuery.mosaicUEvent")}}},2434:(e,t,n)=>{e.exports=function(){return new Promise((function(e){n.e(692).then(function(t){e(n(4692))}.bind(null,n)).catch(n.oe)}))}},2653:e=>{e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(n){!t.hasOwnProperty(n)||null===t[n]||"object"!=typeof t[n]&&"function"!=typeof t[n]||Object.isFrozen(t[n])||e(t[n])})),t}},6696:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var o=n(8610),i=n(2653);const a=n.n(i)()({"data-do-accordion":["isOpened","closeOther","childrenAsync"],"data-do-auth_popup_btn":["showUserName","showSettings","showOrders","showLogout","popupAfterAuthorized"],"data-do-form_auth":["isNativeStyle","isDrop","otherHeaderAfterAuth","showUserName","isToggle","isHeader","isRemember","isRegistration","isForgot","showSocial"],"data-do-blocklist":["slider","loop","returnToFirst","swipe","lastSlideArrow","center","controlsGroup","autoplay","childrenAsync","isMarquee","hoverStop"],"data-do-tt_blocklist":["slider","loop","returnToFirst","swipe","lastSlideArrow","center","controlsGroup","autoplay","childrenAsync","isMarquee","hoverStop"],"data-do-checkbox":["required"],"data-do-checkbox_group":["required"],"data-do-content":["image","gallery","text","headers"],"data-do-countdown":["isEnabledDays","isEnabledHours","isEnabledMinutes","isEnabledSeconds"],"data-do-form":["nativeStyle","showTitleAfterSend","disabledNativeStyleSelect"],"data-do-image":["scrollZoom","zoomOnClick"],"data-do-input":["required"],"data-do-input_date":["required"],"data-do-input_date_interval":["required"],"data-do-input_email":["required"],"data-do-input_phone":["required"],"data-do-link_universal":["blank","sidepanel"],"data-do-link_universal_block":["blank","sidepanel"],"data-do-link_universal_button":["blank","sidepanel"],"data-do-popup":["wmshowpopup"],"data-do-radio_group":["required"],"data-do-marquee":["circular","hoverStop","invertHover"],"data-do-menu_column":["dropdown","more","cancelForward","firstClick"],"data-do-menu_horizontal":["cancelForward","more","firstClickOpen"],"data-do-menu_vertical":["cancelForward","firstClickOpen"],"data-do-s3_article":["isHeadBlock","isAllLink","isImage","isDate","isAnnounce","isLinkMore","isDay","isMonth","isYear"],"data-do-s3_article2":["isHeadBlock","isAllLink","isImage","isDate","isAnnounce","isLinkMore","isDay","isYear"],"data-do-s3_board":["isDate","isDay","isMonth","isYear"],"data-do-s3_news_constructor":["isHeadNews","isAllNews","isImage","isDate","isAnnounce","isLinkMore","isDay","isYear"],"data-do-s3_unified_news_constructor":["isHeadBlock","isAllLink","isImage","isDate","isAnnouncement","isLinkMore","isDay","isYear","isTime","isMonthFirst","isDelimiterDayMonth","isDelimiterMonthYear","isDelimiterYearTime","isCustomDateFormat","isTags","isDelimiterTag"],"data-do-s3_vote_constructor":["isResults","isResultsInfo","isNativeStyle","isHideTextResult","isOtherAnswer"],"data-do-section":["scroll","smooth"],"data-do-select":["required"],"data-do-select_multiple":["required"],"data-do-slider":["loop","returnToFirst","lastSlideArrow","controlsGroup","swipe","autoplay","childrenAsync","previews","thumbs","thumbsSlider","independentScrolling","thumbsCenterMode"],"data-do-spoiler":["isOpened"],"data-do-svg_image":["stretch"],"data-do-tabs":["childrenAsync"],"data-do-textarea":["required"],"data-do-upload_file":["required"],"data-do-video":["viewportAutoPlay"],"data-do-video2":["viewportAutoPlay"]});const s=function(e,t){if(e in a){var n=a[e],o=function(e){for(var t in e)if(t in e){var i=e[t];n.includes(t)&&"boolean"!=typeof i?e[t]="0"!==i&&Boolean(i):"string"!=typeof i||Number.isNaN(+i)||(e[t]=Number(i)),"object"==typeof i&&o(i)}};o(t)}};function r(e,t){let n={};try{n=JSON.parse(t.getAttribute(e)||"")}catch(n){return void console.warn(`Error media: ${e} - ${t}`)}const i=o.Ay.slice(0,3),a=o.Ay.slice(4).reverse();return function(t){const r=o.Ay[t]||i.find((e=>window.matchMedia(e).matches))||a.find((e=>window.matchMedia(e).matches))||o.QF;let c={};const l=o.Ay.indexOf(r);let d=l>o.Yb?o.Ay.slice(o.Yb):o.Ay.slice(l,o.Yb+1).reverse();for(let e=0;e<d.length;e++){const t=d[e];if(Object.assign(c,n[t]),t===r)break}return s(e,c),c}}},8610:(e,t,n)=>{"use strict";n.d(t,{$U:()=>o,Ay:()=>c,QF:()=>a,Yb:()=>r});var o,i=n(2653),a="screen",s=n.n(i)()(["(min-width: 1920px)","(min-width: 1440px)","(min-width: 1280px)",a,"(max-width: 991px)","(max-width: 767px)","(max-width: 479px)"]),r=s.indexOf(a);!function(e){e.BIG_SCREEN3=0,e.BIG_SCREEN2=1,e.BIG_SCREEN1=2,e.SCREEN=3,e.TABLET_LANDSCAPE=4,e.TABLET_PORTRAIT=5,e.MOBILE=6}(o||(o={}));const c=s},9657:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var o=function(e,t,n,o){return new(n||(n=Promise))((function(i,a){function s(e){try{c(o.next(e))}catch(e){a(e)}}function r(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}c((o=o.apply(e,t||[])).next())}))},i=function(e,t){var n,o,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(r){return function(c){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,r[0]&&(s=0)),s;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,o=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,c])}}};function a(e){return o(this,void 0,void 0,(function(){var t,o,a,s,r,c,l,d,u,p,f;return i(this,(function(i){switch(i.label){case 0:return[4,n(2434)()];case 1:return t=i.sent(),[4,n(1512)];case 2:return o=i.sent(),[4,n(6696)];case 3:if(a=i.sent(),s=a.default("data-do-link_universal",e),r=s(),Object.keys(r).length){if("link"===r.type)return[2];c="none",void 0!==r.popup&&"none"!==r.popup?(c=r.popup,l=t(e).attr("id"),d=l.split("_"),u=d[0],p=parseInt(d[1],10),t(e).on("click",(function(){t("#".concat(c)).mosaicPopup("open",u,p)}))):void 0!==r.eventName&&"none"!==r.eventName&&("customScript"===r.eventAction?(f=r.customScript?r.customScript:"","click"===r.eventName?t(e).on("click",new Function(f)):"hover"===r.eventName&&t(e).on("mouseover",new Function(f))):(o.default(t),t(e).mosaicUEvent(r.eventName,r))),r.sidepanel&&"none"===r.popup&&t(e).on("click",(function(){var e=window.sidePanelController;e&&e.toggle()}))}return[2]}}))}))}}}]);