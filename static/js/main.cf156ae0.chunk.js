(this["webpackJsonpteste-trybetunes"]=this["webpackJsonpteste-trybetunes"]||[]).push([[0],{24:function(t,e,n){},32:function(t,e,n){},34:function(t,e,n){},36:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(25),s=n.n(i),c=(n(32),n(4)),o=n(5),u=n(6),l=n(7),d=n(14),j=n(9),h=n(19),b=n(8),m=n(3),f=n(2),p=n.n(f),v="favorite_songs";JSON.parse(localStorage.getItem(v))||localStorage.setItem(v,JSON.stringify([]));var O=function(){return JSON.parse(localStorage.getItem(v))},x=function(t){return localStorage.setItem(v,JSON.stringify(t))},k=function(t){return function(e){setTimeout((function(){e(t)}),500)}},g=function(){return new Promise((function(t){var e=O();k(e)(t)}))},y=function(t){return new Promise((function(e){if(t){var n=O();x([].concat(Object(h.a)(n),[t]))}k("OK")(e)}))},N=function(t){return new Promise((function(e){var n=O();x(n.filter((function(e){return e.trackId!==t.trackId}))),k("OK")(e)}))},S=n(20),w="user",F=function(t){return localStorage.setItem(w,JSON.stringify(t))},C=function(t){return function(e){setTimeout((function(){e(t)}),1500)}},B=function(){return new Promise((function(t){var e=JSON.parse(localStorage.getItem(w));null===e&&(e={}),C(e)(t)}))},I=function(t){return new Promise((function(e){F(Object(S.a)(Object(S.a)({},{name:"",email:"",image:"",description:""}),t)),C("OK")(e)}))},P=function(t){return new Promise((function(e){F(Object(S.a)({},t)),C("OK")(e)}))},A=(n(34),n(0)),U=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{className:"load",children:Object(A.jsx)("p",{children:"Carregando..."})})}}]),n}(r.a.Component),D=U,M=(n(36),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={user:""},t.readerPromise=t.readerPromise.bind(Object(m.a)(t)),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.readerPromise()}},{key:"readerPromise",value:function(){var t=Object(b.a)(p.a.mark((function t(){var e,n=this;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B().then((function(t){return n.setState({user:t.name})}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.user;return Object(A.jsxs)("header",{"data-testid":"header-component",className:"header",children:[Object(A.jsxs)("div",{className:"first-line",children:[Object(A.jsx)("h2",{children:" TrybeTunnes "}),Object(A.jsxs)("div",{className:"user",children:[t?Object(A.jsx)("span",{children:" "}):Object(A.jsx)(D,{}),Object(A.jsx)("strong",{children:Object(A.jsx)("p",{"data-testid":"header-user-name",className:"name",children:t})})]})]}),Object(A.jsxs)("div",{className:"links",children:[Object(A.jsx)(d.b,{"data-testid":"link-to-favorites",to:"/favorites",children:" Favoritos "}),Object(A.jsx)(d.b,{to:"/profile","data-testid":"link-to-profile",children:" Perfil "}),Object(A.jsx)(d.b,{to:"/search","data-testid":"link-to-search",children:" Pesquisar "})]})]})}}]),n}(r.a.Component)),J=M,T=function(){var t=Object(b.a)(p.a.mark((function t(e){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(e,"&entity=song"));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=T,q=(n(45),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.listFavorites,n=t.onClick,a=t.musica,r=t.musica,i=r.trackName,s=r.trackId,c=r.previewUrl;return Object(A.jsx)("div",{className:"musicas",children:Object(A.jsxs)("div",{className:"track",children:[Object(A.jsxs)("div",{className:"text ",children:[Object(A.jsx)("p",{children:i}),Object(A.jsxs)("label",{htmlFor:"fav",children:["Favorita",Object(A.jsx)("input",{id:"fav",type:"checkbox",name:s,"data-testid":"checkbox-music-".concat(s),onChange:function(){return n(a)},checked:e.some((function(t){return t.trackId===s}))})]})]}),Object(A.jsx)("div",{className:"content-sound",children:Object(A.jsx)("audio",{"data-testid":"audio-component",src:c,controls:!0,children:Object(A.jsx)("track",{kind:"captions"})})})]})})}}]),n}(r.a.Component)),K=q,R=(n(24),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={infoAboutAlbum:[],listFavorites:[],load:!1},t.findMusics=t.findMusics.bind(Object(m.a)(t)),t.addFavorite=t.addFavorite.bind(Object(m.a)(t)),t.returnFavorite=t.returnFavorite.bind(Object(m.a)(t)),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;this.findMusics(t),this.returnFavorite()}},{key:"addFavorite",value:function(){var t=Object(b.a)(p.a.mark((function t(e){var n,a,r,i=this;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({load:!0}),t.next=3,g();case 3:if(n=t.sent,n.find((function(t){return t.trackId===e.trackId}))){t.next=11;break}return t.next=8,y(e);case 8:this.setState((function(t){i.setState({listFavorites:[].concat(Object(h.a)(t.listFavorites),[e])})})),t.next=16;break;case 11:return t.next=13,N(e);case 13:a=this.state.listFavorites,r=a.filter((function(t){return t.trackId!==e.trackId})),this.setState({listFavorites:r});case 16:this.setState({load:!1});case 17:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"returnFavorite",value:function(){var t=Object(b.a)(p.a.mark((function t(){var e=this;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g().then((function(t){return e.setState({listFavorites:t})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"findMusics",value:function(){var t=Object(b.a)(p.a.mark((function t(e){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:n=t.sent,this.setState({infoAboutAlbum:n});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,n=e.infoAboutAlbum,a=e.load,r=e.listFavorites,i=n[0];return Object(A.jsxs)("div",{"data-testid":"page-album",children:[Object(A.jsx)(J,{}),Object(A.jsxs)("div",{className:"album",children:[a&&Object(A.jsx)(D,{}),Object(A.jsx)("img",{src:Object(i).artworkUrl100,alt:Object(i).collectionName}),Object(A.jsxs)("div",{className:"title-text",children:[Object(A.jsx)("h2",{"data-testid":"artist-name",children:Object(i).artistName}),Object(A.jsx)("p",{"data-testid":"album-name",children:Object(i).collectionName})]}),Object(A.jsx)("div",{className:"soundAlbum",children:n.filter((function(t){return t.kind})).map((function(e){return Object(A.jsx)(K,{musica:e,onClick:t.addFavorite,load:a,listFavorites:r},e.trackId)}))})]})]})}}]),n}(r.a.Component)),_=R,z=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={load:!1,listFavorites:[]},t.returnFavorite=t.returnFavorite.bind(Object(m.a)(t)),t.remove=t.remove.bind(Object(m.a)(t)),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.returnFavorite()}},{key:"remove",value:function(){var t=Object(b.a)(p.a.mark((function t(e){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({load:!0}),t.next=3,N(e);case 3:n=this.state.listFavorites,a=n.filter((function(t){return t.trackId!==e.trackId})),this.setState({listFavorites:a,load:!1});case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"returnFavorite",value:function(){var t=Object(b.a)(p.a.mark((function t(){var e=this;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({load:!0}),t.next=3,g().then((function(t){return e.setState({listFavorites:t})}));case 3:this.setState({load:!1});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,n=e.load,a=e.listFavorites;return Object(A.jsxs)("div",{"data-testid":"page-favorites",children:[Object(A.jsx)(J,{}),n&&Object(A.jsx)(D,{}),Object(A.jsx)("div",{className:"albumFav",children:a.map((function(e){return Object(A.jsx)(K,{musica:e,onClick:t.remove,listFavorites:a,load:n},e.trackId)}))})]})}}]),n}(r.a.Component),G=z,H=(n(46),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).disableButton=t.disableButton.bind(Object(m.a)(t)),t.clickButton=t.clickButton.bind(Object(m.a)(t)),t.state={nameUser:"",offButton:!0,start:!1,loader:!1},t}return Object(o.a)(n,[{key:"disableButton",value:function(t){var e=this.state.nameUser;this.setState({nameUser:t.target.value}),e.length>=2?this.setState({offButton:!1}):this.setState({offButton:!0})}},{key:"clickButton",value:function(){var t=Object(b.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.nameUser,this.setState({loader:!0}),t.next=4,I({name:e});case 4:return n=t.sent,this.setState({loader:!1}),this.setState({start:!0}),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.loader,n=t.start,a=t.offButton;return e?Object(A.jsx)(D,{}):Object(A.jsxs)("div",{"data-testid":"page-login",className:"login",children:[Object(A.jsx)("h2",{children:"TrybeTunnes"}),Object(A.jsx)("label",{htmlFor:"name",children:Object(A.jsx)("input",{id:"name",type:"text",onChange:this.disableButton,placeholder:"                   Nome","data-testid":"login-name-input"})}),Object(A.jsx)("button",{type:"submit","data-testid":"login-submit-button",disabled:a,onClick:this.clickButton,children:"Entrar"}),!0===n&&Object(A.jsx)(j.a,{to:"/search"})]})}}]),n}(r.a.Component)),L=H,Q=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{"data-testid":"page-not-found",children:Object(A.jsx)("p",{children:" Parece que ocorreu um erro por aqui... "})})}}]),n}(r.a.Component),V=Q,W=(n(47),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={user:"",loadName:!1,mail:"",img:"",description:""},t.user=t.user.bind(Object(m.a)(t)),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.user()}},{key:"user",value:function(){var t=Object(b.a)(p.a.mark((function t(){var e,n=this;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loadName:!0}),t.next=3,B().then((function(t){return n.setState({user:t.name,mail:t.email,description:t.description,img:t.image})}));case 3:return e=t.sent,this.setState({loadName:!1}),t.abrupt("return",e);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.user,n=t.loadName,a=t.mail,r=t.img,i=t.description,s=Object(A.jsxs)("div",{className:"user-info",children:[Object(A.jsx)("img",{className:"user-icon","data-testid":"profile-image",alt:e,src:r}),Object(A.jsxs)("div",{className:"informa\xe7oes",children:[Object(A.jsx)("h3",{children:"Nome:"}),Object(A.jsx)("p",{children:e}),Object(A.jsx)("h3",{children:"Email:"}),Object(A.jsx)("p",{children:a}),Object(A.jsx)("h3",{children:"Descri\xe7\xe3o:"}),Object(A.jsx)("p",{children:i})]}),Object(A.jsx)(d.b,{className:"link",to:"/profile/edit",children:" Editar perfil "})]});return Object(A.jsxs)("div",{className:"profile","data-testid":"page-profile",children:[Object(A.jsx)(J,{}),n?Object(A.jsx)(D,{}):s]})}}]),n}(r.a.Component)),X=W,Y=n(18),Z=(n(48),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={user:"",loadName:!1,mail:"",img:"",description:"",buttonDisable:!0,redirect:!1},t.user=t.user.bind(Object(m.a)(t)),t.handleChange=t.handleChange.bind(Object(m.a)(t)),t.validateButton=t.validateButton.bind(Object(m.a)(t)),t.upUser=t.upUser.bind(Object(m.a)(t)),t.click=t.click.bind(Object(m.a)(t)),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.user()}},{key:"handleChange",value:function(t){var e=this,n=t.target,a=n.name,r=n.value;this.setState(Object(Y.a)({},a,r),(function(){e.validateButton()})),this.validateButton()}},{key:"validateButton",value:function(){var t=this.state,e=t.user,n=t.mail,a=t.img,r=t.description;e.length>0&&n.includes("@")&&a.length>0&&r.length>0?this.setState({buttonDisable:!1}):this.setState({buttonDisable:!0})}},{key:"user",value:function(){var t=Object(b.a)(p.a.mark((function t(){var e,n=this;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loadName:!0}),t.next=3,B().then((function(t){return n.setState({user:t.name,mail:t.email,description:t.description,img:t.image})}));case 3:return e=t.sent,this.setState({loadName:!1}),this.validateButton(),t.abrupt("return",e);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"upUser",value:function(){var t=Object(b.a)(p.a.mark((function t(){var e,n,a,r,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state,n=e.user,a=e.mail,r=e.description,i=e.img,t.next=3,P({name:n,email:a,image:i,description:r});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"click",value:function(){this.upUser(),this.setState({redirect:!0})}},{key:"render",value:function(){var t=this.state,e=t.user,n=t.mail,a=t.description,r=t.img,i=t.loadName,s=t.buttonDisable,c=t.redirect,o=Object(A.jsxs)("form",{className:"form-edit",children:[Object(A.jsx)("label",{htmlFor:"name",children:Object(A.jsx)("input",{id:"name","data-testid":"edit-input-name",name:"user",type:"text",value:e,placeholder:"Nome",onChange:this.handleChange})}),Object(A.jsx)("label",{htmlFor:"mail",children:Object(A.jsx)("input",{id:"mail",name:"mail",type:"text","data-testid":"edit-input-email",value:n,onChange:this.handleChange,placeholder:"Email"})}),Object(A.jsx)("p",{children:"Sobre mim "}),Object(A.jsx)("textarea",{id:"desc",name:"description","data-testid":"edit-input-description",value:a,onChange:this.handleChange}),Object(A.jsx)("label",{htmlFor:"img",children:Object(A.jsx)("input",{id:"img",name:"img",type:"text",value:r,placeholder:"Adicione uma foto ","data-testid":"edit-input-image",onChange:this.handleChange})}),Object(A.jsx)("button",{"data-testid":"edit-button-save",type:"button",disabled:s,onClick:this.click,children:"Salvar"})]});return Object(A.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(A.jsx)(J,{}),i?Object(A.jsx)(D,{}):o,c&&Object(A.jsx)(j.a,{to:"/profile"})]})}}]),n}(r.a.Component)),$=Z,tt=(n(49),function(){var t=Object(b.a)(p.a.mark((function t(e){var n,a,r,i,s,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURI(e).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),t.next=4,fetch(a);case 4:return r=t.sent,t.next=7,r.json();case 7:return i=t.sent,s=i.results,c=s.map((function(t){return{artistId:t.artistId,artistName:t.artistName,collectionId:t.collectionId,collectionName:t.collectionName,collectionPrice:t.collectionPrice,artworkUrl100:t.artworkUrl100,releaseDate:t.releaseDate,trackCount:t.trackCount}})),t.abrupt("return",c);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),et=tt,nt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={nameFind:"",offButton:!0,waitAPI:"false",artist:"",find:""},t.validadeButton=t.validadeButton.bind(Object(m.a)(t)),t.searchButton=t.searchButton.bind(Object(m.a)(t)),t}return Object(o.a)(n,[{key:"validadeButton",value:function(t){var e=t.target,n=this.state.nameFind,a=e.value;this.setState({nameFind:a}),n.length>=1?this.setState({offButton:!1}):this.setState({offButton:!0})}},{key:"searchButton",value:function(){var t=Object(b.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.nameFind,this.setState({waitAPI:"true"}),t.next=4,et(e);case 4:n=t.sent,this.setState({find:e}),this.setState({nameFind:""}),this.setState({waitAPI:"ok"}),this.setState({artist:n});case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.offButton,n=t.nameFind,a=t.waitAPI,r=t.artist,i=t.find,s=Object.values(r).map((function(t){return Object(A.jsxs)("div",{className:"allAbuns",children:[Object(A.jsx)("img",{alt:t.artistName,src:t.artworkUrl100}),Object(A.jsx)(d.b,{"data-testid":"link-to-album-".concat(t.collectionId),to:"/album/".concat(t.collectionId),children:Object(A.jsx)("p",{children:t.collectionName})})]},t.collectionId)})),c=Object(A.jsxs)("div",{children:[Object(A.jsxs)("p",{className:"result",children:["Resultado de \xe1lbuns de:"," ".concat(i)]}),Object(A.jsx)("div",{children:s})]});return Object(A.jsxs)("div",{"data-testid":"page-search",className:"search",children:[Object(A.jsx)(J,{}),Object(A.jsxs)("div",{className:"area-search",children:[Object(A.jsx)("label",{htmlFor:"search",children:Object(A.jsx)("input",{className:"search","data-testid":"search-artist-input",type:"text",placeholder:"Banda ou artista",onChange:this.validadeButton,value:n})}),Object(A.jsx)("button",{"data-testid":"search-artist-button",type:"submit",disabled:e,onClick:this.searchButton,children:"Pesquisar"})]}),Object(A.jsxs)("div",{className:"content",children:["true"===a&&Object(A.jsx)(D,{}),"ok"===a&&r.length>0&&c,"ok"===a&&0===r.length&&Object(A.jsx)("p",{children:" Nenhum \xe1lbum foi encontrado "})]})]})}}]),n}(r.a.Component),at=nt,rt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{children:Object(A.jsx)(d.a,{children:Object(A.jsxs)(j.d,{children:[Object(A.jsx)(j.b,{exact:!0,path:"/album/:id",component:_}),Object(A.jsx)(j.b,{exact:!0,path:"/favorites",component:G}),Object(A.jsx)(j.b,{exact:!0,path:"/",component:L}),Object(A.jsx)(j.b,{exact:!0,path:"/login",component:L}),Object(A.jsx)(j.b,{exact:!0,path:"/load",component:D}),Object(A.jsx)(j.b,{exact:!0,path:"/search",component:at}),Object(A.jsx)(j.b,{exact:!0,path:"/profile",component:X}),Object(A.jsx)(j.b,{exact:!0,path:"/profile/edit",component:$}),Object(A.jsx)(j.b,{component:V})]})})})}}]),n}(r.a.Component),it=rt;s.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(it,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.cf156ae0.chunk.js.map