(this["webpackJsonpsnake-game-react"]=this["webpackJsonpsnake-game-react"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(5),c=a.n(s),i=(a(13),a(6)),r=a(7),l=a(1),d=(a(14),function(e){return o.a.createElement("div",null,e.snakeData.map((function(e,t){var a={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return o.a.createElement("div",{className:"snake",key:t,style:a,"data-testid":"snake-".concat(t)})})))}),m=(a(15),function(e){var t=e.isSnakeNearFood?"food":"food animate-food",a=e.isSnakeNearFood?"bomb":"bomb animate-bomb",n={left:"".concat(e.foodData[0],"%"),top:"".concat(e.foodData[1],"%")};return o.a.createElement("div",null,o.a.createElement("div",{className:e.bomb?a:t,style:n}))}),u=38,f=40,b=37,h=39,v=13;var k=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},p=function(){var e=Object(n.useState)({food:{apple:k(),bomb:k()}}),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),p=Object(l.a)(c,2),E=p[0],g=p[1],O=Object(n.useState)("RIGHT"),j=Object(l.a)(O,2),S=j[0],P=j[1],w=Object(n.useState)({snakePositions:[[50,50],[52,50],[54,50]]}),N=Object(l.a)(w,2),y=N[0],T=N[1],D=Object(n.useState)(0),I=Object(l.a)(D,2),F=I[0],H=I[1],G=Object(n.useState)(0),M=Object(l.a)(G,2),R=M[0],x=M[1],W=Object(n.useState)(200),L=Object(l.a)(W,2),B=L[0],C=L[1],J=Object(n.useState)(!1),U=Object(l.a)(J,2),Y=U[0],$=U[1];function q(e){var t=y.snakePositions,a=t[t.length-1],n=e.keyCode;n===h?a[1]!==t[t.length-2][1]&&P("RIGHT"):n===b?a[1]!==t[t.length-2][1]&&P("LEFT"):n===f?a[0]!==t[t.length-2][0]&&P("DOWN"):n===u?a[0]!==t[t.length-2][0]&&P("UP"):n===v&&(P("RIGHT"),C(200),H(0),T({snakePositions:[[50,50],[52,50],[54,50]]}),g(!1))}function z(){var e=y.snakePositions,t=e[e.length-1];switch(S){case"RIGHT":t=[t[0]+2,t[1]];break;case"LEFT":t=[t[0]-2,t[1]];break;case"DOWN":t=[t[0],t[1]+2];break;case"UP":t=[t[0],t[1]-2]}e.push(t),e.shift(),T({snakePositions:e})}return Object(n.useEffect)((function(){!function(){var e=y.snakePositions[y.snakePositions.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&g(!0)}(),function(){var e=y.snakePositions,t=e[e.length-1];t[0]===a.food.apple[0]&&t[1]===a.food.apple[1]?(H(F+1),e.unshift([]),s({food:{apple:k(),bomb:k()}}),T({snakePositions:e}),B>20&&C(B-10)):t[0]===a.food.bomb[0]&&t[1]===a.food.bomb[1]&&g(!0)}(),function(){var e=Object(r.a)(y.snakePositions),t=e[e.length-1];e.pop();var a,n=Object(i.a)(e);try{for(n.s();!(a=n.n()).done;){var o=a.value;t[0]===o[0]&&t[1]===o[1]&&g(!0)}}catch(s){n.e(s)}finally{n.f()}}(),function(){var e=y.snakePositions,t=e[e.length-1];"RIGHT"===S||"LEFT"===S?a.food.apple[1]===t[1]?$(!0):$(!1):a.food.apple[0]===t[0]?$(!0):$(!1)}();var e=setInterval(z,B);return F>R&&x(F),window.onkeydown=q,function(){return clearInterval(e)}}),[S,z,y.snakePositions]),o.a.createElement("div",{"data-testid":"container"},o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("div",null,"Score: ",F),o.a.createElement("div",null,"High Score: ",o.a.createElement("span",{"data-testid":"highScore"},R))),o.a.createElement("div",{className:"game"},E?o.a.createElement("div",{className:"endGame"},o.a.createElement("div",{className:"bombText"},"Ohh Noo!! You Died. Press enter to restart the game"),R>0?o.a.createElement("div",{className:"highScoreText"},"High Score : ",R):""):o.a.createElement("div",null,o.a.createElement(d,{snakeData:y.snakePositions}),o.a.createElement(m,{foodData:a.food.apple,isSnakeNearFood:Y}),F>0&&F%5===0?o.a.createElement(m,{foodData:a.food.bomb,isSnakeNearFood:Y,bomb:!0}):"")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0ac10005.chunk.js.map