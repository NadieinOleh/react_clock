(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=(n(12),n(0));var m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={today:new Date,clockName:t.props.name},t.timerId=0,t.timerPrint=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;window.setInterval((function(){t.setState({today:new Date})}),1e3);var e=this.state.clockName;this.timerId=window.setInterval((function(){var n=e,c=function(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}();t.setState({clockName:c}),console.debug("Renamed from ".concat(n," to ").concat(c))}),3300),this.timerPrint=window.setInterval((function(){console.info("".concat(t.state.today.toUTCString().slice(-12,-4)," PM"))}),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),window.clearInterval(this.timerPrint)}},{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.today;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:"".concat(e," time is")}),Object(u.jsx)("span",{className:"Clock__time",children:"".concat(n.toUTCString().slice(-12,-4)," PM")})]})}}]),n}(l.Component),d=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={clockName:"Clock-0",hasClock:!0},t.mouseClickRight=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.mouseClickLeft=function(){t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("contextmenu",this.mouseClickRight),document.addEventListener("click",this.mouseClickLeft)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.mouseClickRight)}},{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),n&&Object(u.jsx)(m,{name:e})]})}}]),n}(l.Component);o.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.24228f97.chunk.js.map