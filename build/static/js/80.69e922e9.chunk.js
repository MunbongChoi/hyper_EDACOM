(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[80],{1150:function(e,a,t){"use strict";t.r(a);var n=t(13),s=t(15),c=t(16),o=t(17),r=t(0),l=t.n(r),i=t(18),m=t(11),u=t(34),d=t(100),b=t(131),p=t(132),f=t(140),M=t(141),g=t(28),N=t(490),h=t.n(N),v=t(915),j=t.n(v),R=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e))._isMounted=!1,s.renderRedirectToRoot=function(){if(Object(g.b)())return l.a.createElement(m.a,{to:"/"})},s.state={},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=Object(g.b)();return l.a.createElement(l.a.Fragment,null,this.renderRedirectToRoot(),(this._isMounted||!e)&&l.a.createElement("div",{className:"account-pages mt-5 mb-5"},l.a.createElement(d.a,null,l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(p.a,{lg:5},l.a.createElement(f.a,null,l.a.createElement("div",{className:"card-header pt-4 pb-4 text-center bg-primary"},l.a.createElement("a",{href:"/"},l.a.createElement("span",null,l.a.createElement("img",{src:h.a,alt:"",height:"18"})))),l.a.createElement(M.a,{className:"p-4 position-relative"},l.a.createElement("div",{className:"text-center m-auto"},l.a.createElement("img",{src:j.a,alt:"",height:"64"}),l.a.createElement("h4",{className:"text-dark-50 text-center mt-4 font-weight-bold"},"Please check your email"),l.a.createElement("p",{className:"text-muted mb-4"},"A email has been send to ",l.a.createElement("b",null,"youremail@domain.com"),". Please check for an email from company and click on the included link to reset your password."),l.a.createElement("p",{className:"text-center"},l.a.createElement(u.b,{className:"btn btn-primary",to:"/account/login"},"Back to Login"))))))))))}}]),t}(r.Component);a.default=Object(i.b)()(R)},131:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(0),o=t.n(c),r=t(7),l=t.n(r),i=t(43),m=t.n(i),u=t(38),d=l.a.oneOfType([l.a.number,l.a.string]),b={tag:u.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,t=e.cssModule,c=e.noGutters,r=e.tag,l=e.form,i=e.widths,d=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];i.forEach((function(a,t){var n=e[a];if(delete d[a],n){var s=!t;b.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var p=Object(u.mapToCssModules)(m()(a,c?"no-gutters":null,l?"form-row":"row",b),t);return o.a.createElement(r,Object(n.a)({},d,{className:p}))};f.propTypes=b,f.defaultProps=p,a.a=f},132:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(0),o=t.n(c),r=t(7),l=t.n(r),i=t(43),m=t.n(i),u=t(38),d=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:d,offset:d})]),p={tag:u.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},M=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,c=e.widths,r=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),i=[];c.forEach((function(a,n){var s=e[a];if(delete l[a],s||""===s){var c=!n;if(Object(u.isObject)(s)){var o,r=c?"-":"-"+a+"-",d=M(c,a,s.size);i.push(Object(u.mapToCssModules)(m()(((o={})[d]=s.size||""===s.size,o["order"+r+s.order]=s.order||0===s.order,o["offset"+r+s.offset]=s.offset||0===s.offset,o)),t))}else{var b=M(c,a,s);i.push(b)}}})),i.length||i.push("col");var d=Object(u.mapToCssModules)(m()(a,i),t);return o.a.createElement(r,Object(n.a)({},l,{className:d}))};g.propTypes=p,g.defaultProps=f,a.a=g},140:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(0),o=t.n(c),r=t(7),l=t.n(r),i=t(43),m=t.n(i),u=t(38),d={tag:u.tagPropType,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,c=e.color,r=e.body,l=e.inverse,i=e.outline,d=e.tag,b=e.innerRef,p=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(u.mapToCssModules)(m()(a,"card",!!l&&"text-white",!!r&&"card-body",!!c&&(i?"border":"bg")+"-"+c),t);return o.a.createElement(d,Object(n.a)({},p,{className:f,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},141:function(e,a,t){"use strict";var n=t(6),s=t(12),c=t(0),o=t.n(c),r=t(7),l=t.n(r),i=t(43),m=t.n(i),u=t(38),d={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,r=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.mapToCssModules)(m()(a,"card-body"),t);return o.a.createElement(r,Object(n.a)({},l,{className:i,ref:c}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},490:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAAAkCAYAAACZv5Y5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRTQ0NzJFMjc4QzExRThCRjM5QzgxRkFCODM4RENBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRTQ0NzJGMjc4QzExRThCRjM5QzgxRkFCODM4RENBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JFNDQ3MkMyNzhDMTFFOEJGMzlDODFGQUI4MzhEQ0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JFNDQ3MkQyNzhDMTFFOEJGMzlDODFGQUI4MzhEQ0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4bJkp8AAAICklEQVR42uxdX2gURxj/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"},915:function(e,a,t){e.exports=t.p+"static/media/mail_sent.d5e4f040.svg"}}]);
//# sourceMappingURL=80.69e922e9.chunk.js.map