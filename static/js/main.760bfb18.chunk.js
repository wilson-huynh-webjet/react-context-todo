(this["webpackJsonpreact-todo-context"]=this["webpackJsonpreact-todo-context"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),c=n.n(r),l=(n(21),n(2)),u=n(15),i={FETCH_TODO:"FETCH_TODO",FETCH_TODO_SUCCESS:"FETCH_TODO_SUCCESS",FETCH_TODO_ERROR:"FETCH_TODO_ERROR",ADD_TODO:"ADD_TODO",REMOVE_TODO:"REMOVE_TODO",TOGGLE_TODO:"TOGGLE_TODO"},s=function(e,t){var n=t.type,a=t.payload;switch(n){case i.ADD_TODO:return void e.todoList.unshift({id:Math.random(),name:a,complete:!1});case i.REMOVE_TODO:return void(e.todoList=e.todoList.filter((function(e){return e.id!==a})));case i.TOGGLE_TODO:return void(e.todoList[a].complete=!e.todoList[a].complete);case i.FETCH_TODO:return e.status=0,void(e.fetchTodo=!e.fetchTodo);case i.FETCH_TODO_SUCCESS:return e.todoList=a,void(e.status=1);case i.FETCH_TODO_ERROR:return void(e.status=2);default:return}},O=n(13),d=n.n(O),E={todoAPI:"https://todo-api-zeta.vercel.app/"},m={todoList:[],fetchTodo:!0,status:0},T=Object(a.createContext)(),p=function(e){var t=e.children,n=Object(u.a)(s,m),r=Object(l.a)(n,2),c=r[0],O=r[1];return Object(a.useEffect)((function(){d.a.get(E.todoAPI).then((function(e){return O({type:i.FETCH_TODO_SUCCESS,payload:e.data})})).catch((function(){return O({type:i.FETCH_TODO_ERROR})}))}),[c.fetchTodo]),o.a.createElement(T.Provider,{value:{state:c,dispatch:O}},t)},f=function(){var e=Object(a.useContext)(T).state,t=e.todoList.filter((function(e){return!1===e.complete})).length,n=e.todoList.filter((function(e){return!0===e.complete})).length;return o.a.createElement("div",{className:"counter"},o.a.createElement("span",null,"Completed: ",n),o.a.createElement("span",null,"Todo: ",t))},h=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useContext)(T).dispatch;return o.a.createElement("div",null,o.a.createElement("input",{type:"text",value:n,onChange:function(e){return r(e.target.value)}}),o.a.createElement("button",{onClick:function(e){e.preventDefault(),r(""),n&&c({type:i.ADD_TODO,payload:n})}},"Add"))},D=function(){var e=Object(a.useContext)(T),t=e.state,n=e.dispatch;return o.a.createElement("ul",null,t.todoList.map((function(e,t){return o.a.createElement("li",{key:e.id,className:e.complete?"completed":null},o.a.createElement("input",{id:e.id,type:"checkbox",onChange:function(){return function(e){n({type:i.TOGGLE_TODO,payload:e})}(t)}}),o.a.createElement("label",{htmlFor:e.id},e.name),o.a.createElement("button",{onClick:function(){return t=e.id,void n({type:i.REMOVE_TODO,payload:t});var t}},"X"))})))},C=function(e){var t=e.show,n=e.children;return t?o.a.createElement(o.a.Fragment,null,n):null};var _=function(){var e=Object(a.useContext)(T),t=e.state,n=e.dispatch;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Todo"),o.a.createElement(C,{show:0===t.status},"loading..."),o.a.createElement(C,{show:1===t.status},o.a.createElement(f,null),o.a.createElement(h,null),o.a.createElement(D,null),o.a.createElement("button",{onClick:function(){return n({type:i.FETCH_TODO})}},"Reset")),o.a.createElement(C,{show:2===t.status},o.a.createElement("div",{className:"error"},"Error while loading data"),o.a.createElement("button",{onClick:function(){return n({type:i.FETCH_TODO})}},"Retry")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(14);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null,o.a.createElement(_,null))),document.getElementById("root")),Object(v.a)(document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.760bfb18.chunk.js.map