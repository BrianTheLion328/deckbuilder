(this.webpackJsonpdeckbuilder=this.webpackJsonpdeckbuilder||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(10),r=c(4),a=c(2),s=c(19),i=c.n(s),d=c(9),u=c.n(d),o=c(3),j=c.n(o),l=c(7);function b(e){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(j.a.mark((function e(t){var c,n,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.name,n=t.text,e.prev=1,e.next=4,u.a.get("https://api.magicthegathering.io/v1/cards?name=".concat(c,"&text=").concat(n));case 4:return r=e.sent,a=r.data,e.abrupt("return",a.cards||[]);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var p=c(0),x=function(e){var t=e.setResults,c=Object(a.useState)(""),n=Object(r.a)(c,2),s=n[0],i=n[1],d=Object(a.useState)(""),u=Object(r.a)(d,2),o=u[0],h=u[1];function x(){return(x=Object(l.a)(j.a.mark((function e(c){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,b({name:s,text:o});case 3:n=e.sent,t(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{id:"search",children:[Object(p.jsx)("h3",{children:"Look up cards here..."}),Object(p.jsxs)("form",{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(p.jsx)("input",{type:"text",placeholder:"card name",value:s,onChange:function(e){i(e.target.value)}}),Object(p.jsx)("input",{type:"text",placeholder:"card text",value:o,onChange:function(e){h(e.target.value)}}),Object(p.jsx)("button",{type:"submit",children:"Search"})]})]})},m=c(20),O=(c(45),function(e){var t=e.id,c=e.name,n=e.type,r=e.manaCost,a=e.text,s=e.flavor,i=e.imageUrl,d=e.addCardToDeck,u=e.removeCardFromDeck;return Object(p.jsxs)("div",{className:"Card",children:[Object(p.jsxs)("div",{className:"info",children:[Object(p.jsxs)("p",{className:"header",children:[c," - ",r]}),Object(p.jsx)("p",{className:"type",children:n}),Object(p.jsx)("p",{className:"text",children:a}),Object(p.jsx)("p",{className:"flavor",children:s})]}),Object(p.jsx)("img",{className:"preview",src:i}),Object(p.jsxs)("div",{className:"actions",children:[Object(p.jsx)("button",{onClick:function(){d({id:t,name:c})},children:"(+) Add to Deck"}),Object(p.jsx)("button",{onClick:function(){u({id:t})},children:"(-) Remove from Deck"})]})]})}),f=(c(46),function(e){var t=e.results,c=e.addCardToDeck,n=e.removeCardFromDeck;return Object(p.jsxs)("div",{id:"results",children:[Object(p.jsxs)("h3",{children:["Here's what we found (",t.length," results):"]}),Object(p.jsx)("div",{className:"CardList",children:t.map((function(e){return Object(p.jsx)(O,Object(m.a)({addCardToDeck:c,removeCardFromDeck:n},e),e.id)}))})]})}),v=function(e){var t=e.deck,c=e.addCardToDeck,n=e.removeCardFromDeck,r=t.reduce((function(e,t){return e+t.count}),0);return Object(p.jsxs)("div",{id:"deck",children:[Object(p.jsxs)("h3",{children:["Your deck so far (",r," cards):"]}),Object(p.jsx)("div",{className:"DeckList",children:t.map((function(e){var t=e.id,r=e.name,a=e.count;return Object(p.jsxs)("p",{children:[Object(p.jsxs)("span",{children:["(",a,"x) ",r]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:function(){return c({id:t,name:r})},children:" + "}),Object(p.jsx)("button",{onClick:function(){return n({id:t})},children:" - "})]},t)}))})]})},k=(c(47),function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)([]),d=Object(r.a)(i,2),u=d[0],o=d[1],j=function(e){var t=e.id,c=e.name,r=Object(n.a)(u),a=r.findIndex((function(e){return e.id===t}));a>-1?r[a].count+=1:r.push({id:t,name:c,count:1}),o(r)},l=function(e){var t=e.id,c=Object(n.a)(u),r=c.findIndex((function(e){return e.id===t}));-1!==r&&(1===c[r].count?c.splice(r,1):c[r].count-=1,o(c))};return Object(p.jsxs)("div",{id:"app",children:[Object(p.jsx)(x,{setResults:s}),Object(p.jsx)(f,{results:c,addCardToDeck:j,removeCardFromDeck:l}),Object(p.jsx)(v,{deck:u,addCardToDeck:j,removeCardFromDeck:l})]})});i.a.render(Object(p.jsx)(k,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.75c5b3d4.chunk.js.map