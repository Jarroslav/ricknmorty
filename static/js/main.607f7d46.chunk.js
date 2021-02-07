(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(80),o=a.n(c),s=(a(95),a(2)),i=a(3),l=a(5),u=a(1),m=a(4),d=a(22),p=a(7),h=(a(96),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).links=[r.a.createElement(d.b,{activeClassName:"is-active",exact:!0,to:"/"},"Home"),r.a.createElement(d.b,{activeClassName:"is-active",to:"/characters/"},"Characters"),r.a.createElement(d.b,{activeClassName:"is-active",to:"/episodes/"},"Episodes"),r.a.createElement(d.b,{activeClassName:"is-active",to:"/locations/"},"Locations"),r.a.createElement(d.b,{activeClassName:"is-active",to:"/watchlist/"},"My Watch List")],a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-list"},this.links.map(function(e,t){return r.a.createElement("li",{className:"nav-list-item",key:t},e)}))))}}]),t}(n.Component)),f=(a(101),function(){return r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"home-title"},r.a.createElement("h1",null,"Meet Rick and Morty")))}),g=a(27),E=a(6),v=a.n(E),b=a(11),y="https://rickandmortyapi.com/api/character",C="https://rickandmortyapi.com/api/location",k="https://rickandmortyapi.com/api/episode",N=function(){var e=Object(b.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error(a.statusText);case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=function(e,t){return t+new URLSearchParams(e).toString()},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y+"/?",a=O(e,t);return N(a)},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k+"/?",a=O(e,t);return N(a)},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:C+"/?",a=O(e,t);return N(a)},x=(a(104),function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"filter-form"},r.a.createElement("input",{name:"name",type:"text",className:"filter-search",placeholder:"Enter name",onChange:e.handleChange,defaultValue:e.searchValue}),r.a.createElement("select",{name:"gender",className:"filter-select",onChange:e.handleChange,defaultValue:e.genderValue},r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:"female"},"female"),r.a.createElement("option",{value:"male"},"male"),r.a.createElement("option",{value:"genderless"},"genderless"),r.a.createElement("option",{value:"unknown"},"unknown")),r.a.createElement("select",{name:"species",className:"filter-select",onChange:e.handleChange,defaultValue:e.speciesValue},r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:"human"},"human"),r.a.createElement("option",{value:"alien"},"alien")),r.a.createElement("select",{name:"status",className:"filter-select",onChange:e.handleChange,defaultValue:e.statusValue},r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:"alive"},"alive"),r.a.createElement("option",{value:"dead"},"dead"),r.a.createElement("option",{value:"unknown"},"unknown")),r.a.createElement("input",{type:"submit",value:"Filter",className:"filter-submit"}))}),L=(a(105),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-image",src:e.imageSrc,alt:"character"}),r.a.createElement("h2",{className:"card-name"},e.name),r.a.createElement("p",{className:"card-species"},"Species: ",e.species),r.a.createElement("p",{className:"card-gender"},"Gender: ",e.gender),r.a.createElement("p",{className:"card-gender"},"Status: ",e.status))}),V=a(81),T=a.n(V),D=(a(106),function(e){var t=function(e,t){for(var a=[],n=Math.min(e,t),r=Math.min(e,t),c=1;c<3&&c<t;c++)n>1&&n--,c<3&&r<t&&r++;for(var o=n;o<=r;o++)a.push(o);return a}(e.currentPage,e.pages);return r.a.createElement("ul",{onClick:e.handleClick,className:"pagination"},t.map(function(t){return r.a.createElement("li",{key:t,className:T()("pagination-item",{active:t===e.currentPage})},t)}))}),A=a(82),P=a.n(A),F=(a(107),function(e){return e.isLoaded?e.children:r.a.createElement("div",{className:"preloader"},r.a.createElement("img",{src:P.a,alt:"spinner"}))}),I=(a(108),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",name:"",gender:"",species:"",status:"",origins:{name:"",url:""},locations:{name:"",url:""},episode:[],characters:[],page:1,isLoaded:!1},a.handlePaginationClick=function(e){var t=+e.target.textContent;a.setState({isLoaded:!1,page:t},Object(b.a)(v.a.mark(function e(){var t,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchCharacters();case 2:t=e.sent,n=Array.prototype.slice.call(t.results,0),a.setState({characters:n,pages:t.info.pages,isLoaded:!0});case 5:case"end":return e.stop()}},e)})))},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.setState({isLoaded:!1,page:1},Object(b.a)(v.a.mark(function e(){var t,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchCharacters();case 2:t=e.sent,n=Array.prototype.slice.call(t.results,0),a.setState({characters:n,pages:t.info.pages,isLoaded:!0});case 5:case"end":return e.stop()}},e)})))},a.fetchCharacters=function(){return j({id:a.state.id,name:a.state.name,gender:a.state.gender,species:a.state.species,status:a.state.status,origins:{name:function(){return a.state.origin.name},url:function(){return a.state.origin.url}},locations:{name:function(){return a.state.origin.name},url:function(){return a.state.origin.url}},episode:function(){return a.state.episode.push()},page:a.state.page})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,a=Array.prototype.slice.call(t.results,0),this.setState({characters:a,pages:t.info.pages,isLoaded:!0});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.characters,a=e.isLoaded,n=e.name,c=e.gender,o=e.species,s=e.status,i=e.originName,l=e.originUrl,u=e.locationName,m=e.locationUrl,d=e.episode,p=e.page,h=e.pages;return r.a.createElement("div",null,r.a.createElement(F,{isLoaded:a},r.a.createElement(x,{handleSubmit:this.handleFormSubmit,handleChange:this.handleInputChange,searchValue:n,genderValue:c,speciesValue:o,statusValue:s,originNameValue:i,originUrlValue:l,locationNameValue:u,locationUrlValue:m,episodeValue:d}),r.a.createElement("div",{className:"characters characters-background"},t.map(function(e){return r.a.createElement(L,{id:e.id,key:e.id,character:e,imageSrc:e.image,name:e.name,species:e.species,gender:e.gender,status:e.status,originName:e.origin.name,originUrl:e.origin.url,locationName:e.location.name,locationUrl:e.location.url,episode:e.episode})})),r.a.createElement(D,{handleClick:this.handlePaginationClick,currentPage:p,pages:h})))}}]),t}(n.Component)),_=(a(109),function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"filter-form"},r.a.createElement("input",{name:"name",type:"text",className:"filter-search",placeholder:"Enter name of episode",onChange:e.handleChange,defaultValue:e.searchValue}),r.a.createElement("input",{type:"submit",value:"Filter",className:"filter-submit"}))}),M=(a(110),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",name:"",air_date:"",episode:"",episodes:[],created:"",url:"",page:1,isLoaded:!1},a.handlePaginationClick=function(e){var t=+e.target.textContent;a.setState({isLoaded:!1,page:t},Object(b.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchEpisodes();case 2:t=e.sent,a.setState({episodes:t.results,pages:t.info.pages,isLoaded:!0});case 4:case"end":return e.stop()}},e)})))},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.setState({isLoaded:!1,page:1},Object(b.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchEpisodes();case 2:t=e.sent,a.setState({episodes:t.results,pages:t.info.pages,isLoaded:!0});case 4:case"end":return e.stop()}},e)})))},a.fetchEpisodes=function(){return S({id:a.state.id,name:a.state.name,air_date:a.state.air_date,episode:a.state.episode,episodes:function(){return a.state.episode.push()},created:a.state.created,url:a.state.url,page:a.state.page})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({episodes:t.results,pages:t.info.pages,isLoaded:!0});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.name,n=e.episodes,c=e.page,o=e.pages;return r.a.createElement("div",null,r.a.createElement(F,{isLoaded:t},r.a.createElement(_,{handleSubmit:this.handleFormSubmit,handleChange:this.handleInputChange,searchValue:a}),r.a.createElement("div",{className:"episodes episodes-background"},r.a.createElement("table",{className:"episodes-table"},r.a.createElement("thead",{className:"episodes-thead"},r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"5"},"Episodes:")),r.a.createElement("tr",null,r.a.createElement("th",null,"Number:"),r.a.createElement("th",null,"Episode:"),r.a.createElement("th",null,"Name:"),r.a.createElement("th",null,"Air Date:"))),r.a.createElement("tbody",{className:"episodes-tbody"},n.map(function(e){return r.a.createElement("tr",{key:e.id,id:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.episode),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.air_date))},console.log(n))))),r.a.createElement(D,{handleClick:this.handlePaginationClick,currentPage:c,pages:o})))}}]),t}(n.Component)),R=(a(111),function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"filter-form"},r.a.createElement("input",{name:"type",type:"text",className:"filter-search",placeholder:"Enter Type",onChange:e.handleChange,defaultValue:e.typeValue}),r.a.createElement("input",{name:"name",type:"text",className:"filter-search",placeholder:"Enter Name",onChange:e.handleChange,defaultValue:e.nameValue}),r.a.createElement("input",{name:"dimension",type:"text",className:"filter-search",placeholder:"Enter Dimension",onChange:e.handleChange,defaultValue:e.dimensionValue}),r.a.createElement("input",{type:"submit",value:"Filter",className:"filter-submit"}))}),U=(a(112),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",name:"",type:"",dimension:"",residents:[],locations:[],created:"",url:"",page:1,isLoaded:!1},a.handlePaginationClick=function(e){var t=+e.target.textContent;a.setState({isLoaded:!1,page:t},Object(b.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchLocations();case 2:t=e.sent,a.setState({locations:t.results,pages:t.info.pages,isLoaded:!0});case 4:case"end":return e.stop()}},e)})))},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.setState({isLoaded:!1,page:1},Object(b.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchLocations();case 2:t=e.sent,a.setState({locations:t.results,pages:t.info.pages,isLoaded:!0});case 4:case"end":return e.stop()}},e)})))},a.fetchLocations=function(){return w({id:a.state.id,name:a.state.name,type:a.state.type,dimension:a.state.dimension,url:a.state.url,residents:a.state.residents.push(),created:a.state.created,page:a.state.page})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,this.setState({locations:t.results,pages:t.info.pages,isLoaded:!0});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.name,n=e.type,c=e.dimension,o=e.locations,s=e.page,i=e.pages;return r.a.createElement("div",null,r.a.createElement(F,{isLoaded:t},r.a.createElement(R,{handleSubmit:this.handleFormSubmit,handleChange:this.handleInputChange,nameValue:a,typeValue:n,dimensionValue:c}),r.a.createElement("div",{className:"locations locations-background"},r.a.createElement("table",{className:"locations-table"},r.a.createElement("thead",{className:"locations-thead"},r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"5"},"Episodes:")),r.a.createElement("tr",null,r.a.createElement("th",null,"Number:"),r.a.createElement("th",null,"Type:"),r.a.createElement("th",null,"Name:"),r.a.createElement("th",null,"Dimension:"))),r.a.createElement("tbody",{className:"locations-tbody"},o.map(function(e){return r.a.createElement("tr",{key:e.id,id:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.dimension))})))),r.a.createElement(D,{handleClick:this.handlePaginationClick,currentPage:s,pages:i})))}}]),t}(n.Component)),J=a(10),q=a(21),B=r.a.memo(function(e){var t=e.todo,a=e.id,c=e.onRemoveTodo,o=e.onToggleTodoDone,s=e.onEditTodo,i=e.isDone,l=e.setCustomError,u=Object(n.useCallback)(function(){return c(a)},[a,c]),m=Object(n.useCallback)(function(){return o(a)},[a,o]),d=Object(n.useCallback)(function(e){if(13===e.keyCode){e.preventDefault();var t=e.target.value;if(t.length<3)return void l("Todo text is too short.");if(t.length>20)return void l("Todo text is too long.");s(a,e.target.value),l(null),e.target.blur()}},[a,s,l]),p=Object(n.useRef)(null);return r.a.createElement("li",{className:"watchlist-item"},r.a.createElement("input",{id:"isWatched",type:"checkbox",ref:p,checked:!!i,onChange:m,className:"watchlist-item__checkbox"}),r.a.createElement("span",{onClick:function(){return p.current.click()}}),r.a.createElement("input",{type:"text",defaultValue:t,onKeyDown:d,style:{textDecoration:i?"line-through":"none"},className:"watchlist-item__text"}),r.a.createElement("button",{onClick:u,className:"watchlist-item__delete-button"},r.a.createElement("span",{role:"img","aria-labelledby":"trash"}),"\ud83d\uddd1\ufe0f"))}),W=r.a.memo(function(e){var t=e.todoItems,a=e.onRemoveTodo,n=e.onToggleTodoDone,c=e.onEditTodo,o=e.setCustomError;return r.a.createElement("ul",null,t&&Array.isArray(t)&&t.length>0&&t.map(function(e){var t=e.id,s=e.todo,i=e.isDone;return r.a.createElement(B,{key:t,id:t,todo:s,onRemoveTodo:a,onToggleTodoDone:n,onEditTodo:c,isDone:i,setCustomError:o})}))}),G=a(89),H=a(55),K=r.a.memo(function(e){var t=e.onAddTodo,a=e.customError,n=Object(G.a)({validateOnChange:!1,validateOnBlur:!1,initialValues:{todo:""},validationSchema:H.a().shape({todo:H.b().min(3,"Text is too short.").max(20,"Text is too long.").required("Text is required.")}),onSubmit:function(e,a){var n=a.resetForm;t(e.todo),n()}}),c=Object.keys(n.errors),o=c.length>0?n.errors[c[0]]:null,s=a||o;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:n.handleSubmit,className:"watchlist-form"},r.a.createElement("input",{id:"todo",name:"todo",type:"text",onChange:n.handleChange,value:n.values.todo,autoComplete:"off",placeholder:"Add to watch list",className:"filter-search"}),r.a.createElement("button",{type:"submit",className:"filter-submit"},"Add")),s&&r.a.createElement("span",null,s))}),z=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},Q=a(88),X=a.n(Q),Y=r.a.memo(function(){var e=Object(n.useState)(function(e){var t=localStorage.getItem(e),a=null;try{var n=JSON.parse(t);Array.isArray(n)&&(a=n)}catch(r){a=[]}return a}("todo")||[]),t=Object(q.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),s=Object(q.a)(o,2),i=s[0],l=s[1],u=Object(n.useCallback)(function(e){var t=null;1===a.length?t=a[0]:a.length>1&&(t=a.sort(function(e,t){return e.id>t.id})[0]);var n=[{id:t?t.id+1:0,todo:e}].concat(Object(J.a)(a));c(n),z("todo",n)},[a]),m=Object(n.useCallback)(function(e){var t=a.filter(function(t){return t.id!==e});c(t),z("todo",t)},[a]),d=Object(n.useCallback)(function(e){var t=a.find(function(t){return t.id===e});t.isDone=!t.isDone,c(Object(J.a)(a)),z("todo",a)},[a]),p=Object(n.useCallback)(function(e,t){a.find(function(t){return t.id===e}).todo=t,c(Object(J.a)(a)),z("todo",a)},[a]);return r.a.createElement("div",{className:X.a.todo},r.a.createElement(K,{customError:i,onAddTodo:u}),r.a.createElement(W,{todoItems:a,onRemoveTodo:m,onToggleTodoDone:d,onEditTodo:p,setCustomError:l}))}),Z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h,null),r.a.createElement(p.a,{exact:!0,path:"/",component:f}),r.a.createElement(p.a,{path:"/characters/",component:I}),r.a.createElement(p.a,{path:"/episodes/",component:M}),r.a.createElement(p.a,{path:"/locations/",component:U}),r.a.createElement(p.a,{path:"/watchlist/",component:Y}))}}]),t}(n.Component);o.a.render(r.a.createElement(Z,null),document.getElementById("root"))},82:function(e,t,a){e.exports=a.p+"static/media/spinner.9aa11ce9.svg"},88:function(e,t,a){},90:function(e,t,a){e.exports=a(211)},95:function(e,t,a){},96:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.607f7d46.chunk.js.map