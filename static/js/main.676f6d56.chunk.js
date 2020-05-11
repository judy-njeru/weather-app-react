(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(41)},19:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=(n(19),n(2)),l=n(3),u=n.n(l),s=(n(37),n(38),function(e){return r.a.createElement("div",{className:"search"},r.a.createElement("div",null,r.a.createElement("input",{className:"input",placeholder:"Search by zipcode",type:"text",onKeyPress:e.handleKeyDown}),r.a.createElement("svg",{className:"searchIcon",viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"currentColor",d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}))))}),m=function(e){return e.children},h=(n(39),function(e){var t=e.forecast.dt_txt,n=new Date(t),a=e.forecast.icon;a=a.replace(/n/g,"d");var c="https://openweathermap.org/img/wn/".concat(a,"@2x.png");return n=(n=n.toDateString()).slice(0,4),r.a.createElement("div",{className:"days"},r.a.createElement("div",null,n),r.a.createElement("img",{src:c,alt:"weather icon"}),r.a.createElement("div",null,Math.round(e.forecast.temperature),"\xb0"))});n(40);var d=function(e){var t,n="".concat("https://openweathermap.org/img/wn/").concat(e.currentWeather.icon,"@2x.png"),a=e.currentWeather.date,c=new Date(1e3*a),i=c.toString(),o="".concat(i.slice(3,8)," ").concat((t=c,t.getDate()+(t.getDate()%10===1&&11!==t.getDate()?"st":t.getDate()%10===2&&12!==t.getDate()?"nd":t.getDate()%10===3&&13!==t.getDate()?"rd":"th")),",").concat(i.slice(10,16));return r.a.createElement("div",{className:"weather"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"location-weather"},r.a.createElement("div",{className:"location-info"},r.a.createElement("div",null,o),r.a.createElement("div",null,e.currentWeather.city)),r.a.createElement("div",{className:"current-weather"},r.a.createElement("div",{className:"current-temp"},Math.round(e.currentWeather.temperature),"\xb0"),r.a.createElement("div",null,r.a.createElement("div",{className:"current-weather-info"},r.a.createElement("p",null,e.currentWeather.description),r.a.createElement("img",{src:n,alt:"weather icon"})),r.a.createElement("p",null,"The high today will be ",Math.round(e.currentWeather.max),"\xb0 with wind speeds up to"," ",Math.round(e.currentWeather.wind_speed)," m/s"))),r.a.createElement("div",{className:"forecast row"},e.forecast.map((function(e){return r.a.createElement(h,{key:e.id,forecast:e})}))))))},p=function(e){return r.a.createElement(m,null,r.a.createElement(d,{forecast:e.forecast,currentWeather:e.currentWeather}))},f=function(e){var t=null;return null!=e.error&&(t=r.a.createElement("p",{style:{color:"#a91717",textAlign:"center",marginBottom:"10px"}},e.error)),r.a.createElement("div",null,t)},E=function(){var e=Object(a.useState)(3500),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({}),l=Object(o.a)(i,2),m=l[0],h=l[1],d=Object(a.useState)([]),E=Object(o.a)(d,2),w=E[0],g=E[1],v=Object(a.useState)(null),b=Object(o.a)(v,2),y=b[0],x=b[1],j="a3b0755ce308bdd5b6b20382c8352be8",N="https://api.openweathermap.org/data/2.5/";Object(a.useEffect)((function(){D(n).then((function(e){h(e),x(null)})).catch((function(e){x("Error fetching current weather for : ",y)}))}),[n,y]),Object(a.useEffect)((function(){W(n).then((function(e){g(e),x(null)})).catch((function(e){x("Error fetching forecast for zip ".concat(n,":"),y)}))}),[n,y]);var O=function(e){if(200===e.status)return e.data;throw new f("Error: Location "+e.statusText)},D=function(){return u.a.get("".concat(N,"weather?zip=").concat(n,",").concat("DK","&appid=").concat(j,"&units=metric")).then((function(e){return O(e)})).then((function(e){if(Object.entries(e).length)return _(e)}))},W=function(){return u.a.get("".concat(N,"forecast?zip=").concat(n,",").concat("DK","&appid=").concat(j,"&units=metric")).then((function(e){return O(e)})).then((function(e){if(Object.entries(e).length){for(var t=[],n=0;n<e.list.length;n+=7)t.push(_(e.list[n]));return t.shift(),t}}))},_=function(e){var t={id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),city:e.name,country:e.sys.country,date:e.dt,humidity:e.main.humidity,icon_id:e.weather[0].id,temperature:e.main.temp,description:e.weather[0].description,wind_speed:e.wind.speed,condition:e.cod};return e.dt_txt&&(t.dt_txt=e.dt_txt),e.weather[0].icon&&(t.icon=e.weather[0].icon),e.main.temp_min&&e.main.temp_max&&(t.max=e.main.temp_max,t.min=e.main.temp_min),Object.keys(t).forEach((function(e){return void 0===t[e]&&delete t[e]})),t},S=null;return(m&&Object.keys(m).length||w&&Object.keys(w).length)&&(S=r.a.createElement(p,{zip:n,currentWeather:m,forecast:w,setZip:c,error:y})),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(s,{handleKeyDown:function(e){"Enter"===e.key&&c(e.target.value)}}),r.a.createElement(f,{error:y}),r.a.createElement("div",{className:"weather-app"},S)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.676f6d56.chunk.js.map