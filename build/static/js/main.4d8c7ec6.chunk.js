(this["webpackJsonptik-tak-toe"]=this["webpackJsonptik-tak-toe"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(3),i=t.n(l),c=(t(13),t(14),t(4)),o=t(5),u=t(1),s=t(7),m=t(6),y=function(e){var n=e.onClick,t=e.value,a=e.id;return r.a.createElement("button",{disabled:!!t,className:"tile",onClick:function(){return n(a)}},t||a)},f=function(e){var n=e.onClick,t=e.tiles,a=e.isGameOver,l=t.map((function(e,t){return r.a.createElement(y,{value:e,key:t,id:t,onClick:n})})),i=a?"gameBoard disable":"gameBoard";return r.a.createElement("div",{className:i},l)},h=function(e){var n=e.winner,t=e.hasDrawn,a=e.currentPlayerName,l="".concat(a,"'s turn");return n&&(l="".concat(n," won the game")),t&&(l="Game draw"),r.a.createElement("p",{className:"status"},l)},d=function(e){var n=e.onClick;return r.a.createElement("button",{onClick:n},"Restart Game")},k=function(e){Object(s.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={currentPlayer:e.player1,nextPlayer:e.player2,tiles:Array(9).fill(null),hasDrawn:!1,winner:null},a.handlerClick=a.handlerClick.bind(Object(u.a)(a)),a.resetDefault=a.resetDefault.bind(Object(u.a)(a)),a}return Object(o.a)(t,[{key:"handlerClick",value:function(e){this.setState((function(n){var t=n.tiles,a=n.currentPlayer,r=n.nextPlayer,l=t.slice();return l[e]=a.symbol,function(e){return e.every((function(e){return e}))}(l)?{tiles:l,hasDrawn:!0}:function(e,n){return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].some((function(t){return t.every((function(t){return e[t]===n}))}))}(l,a.symbol)?{tiles:l,winner:a.name}:{tiles:l,currentPlayer:r,nextPlayer:a}}))}},{key:"resetDefault",value:function(){var e=this;this.setState((function(){return{currentPlayer:e.props.player1,nextPlayer:e.props.player2,tiles:Array(9).fill(null),hasDrawn:!1,winner:null}}))}},{key:"render",value:function(){var e=this.state,n=e.tiles,t=e.currentPlayer,a=e.winner,l=e.hasDrawn;return r.a.createElement("div",null,r.a.createElement(h,{currentPlayerName:t.name,hasDrawn:l,winner:a}),r.a.createElement(f,{onClick:this.handlerClick,tiles:n,isGameOver:l||a}),r.a.createElement(d,{onClick:this.resetDefault}))}}]),t}(r.a.Component),v=function(){return r.a.createElement("div",{className:"app"},r.a.createElement("header",null,"Tik-Tak-Toe"),r.a.createElement(k,{player1:{name:"Player1",symbol:"X"},player2:{name:"Player2",symbol:"O"}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.4d8c7ec6.chunk.js.map