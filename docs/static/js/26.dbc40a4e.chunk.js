webpackJsonp([26],{211:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function l(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function s(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"attributes",function(){return i});var r=t(0),c=t.n(r),o=t(35),m=t(225),u=t(247),p=(t.n(u),function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}()),i={},E=function(e){function a(e){n(this,a);var t=l(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return s(a,e),p(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Layout Grid"),c.a.createElement("blockquote",null,c.a.createElement("p",null,"Material design\u2019s responsive UI is based on a column-variate grid layout. It has 12 columns on desktop, 8 columns on tablet and 4 columns on phone.")),c.a.createElement("ul",null,c.a.createElement("li",null,"Module ",c.a.createElement("strong",null,"@rmwc/grid")),c.a.createElement("li",null,"Import styles:",c.a.createElement("ul",null,c.a.createElement("li",null,"import ",c.a.createElement("strong",null,"'@material/layout-grid/dist/mdc.layout-grid.css'"),";"))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://material.io/develop/web/components/layout-grid/"},"https://material.io/develop/web/components/layout-grid/"))),c.a.createElement("div",{className:"example render-with-code"},c.a.createElement("div",{className:"run"},c.a.createElement(o.a,null,c.a.createElement(o.b,{span:"4"},"1"),c.a.createElement(o.b,{span:"4"},"2"),c.a.createElement(o.b,{span:"4"},"3")),c.a.createElement(o.a,null,c.a.createElement(o.c,null,c.a.createElement(o.b,{span:"4"},"1"),c.a.createElement(o.b,{span:"4"},"2"),c.a.createElement(o.b,{span:"4"},c.a.createElement(o.c,null,c.a.createElement(o.b,{span:"4"},"a"),c.a.createElement(o.b,{span:"4"},"b"),c.a.createElement(o.b,{span:"4"},"c")))))),c.a.createElement("div",{className:"source"},c.a.createElement("pre",{className:"language-jsx"},c.a.createElement("code",{className:"language-jsx"},c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{")," Grid",c.a.createElement("span",{className:"token punctuation"},",")," GridCell",c.a.createElement("span",{className:"token punctuation"},",")," GridInner ",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'@rmwc/grid'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Standard Grid. For convenience, GridInner is added for you */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Grid"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"GridCell")," ",c.a.createElement("span",{className:"token attr-name"},"span"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"4",c.a.createElement("span",{className:"token punctuation"},'"')),c.a.createElement("span",{className:"token punctuation"},">")),c.a.createElement("span",{className:"token number"},"1"),c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"GridCell"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"GridCell")," ",c.a.createElement("span",{className:"token attr-name"},"span"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"4",c.a.createElement("span",{className:"token punctuation"},'"')),c.a.createElement("span",{className:"token punctuation"},">")),c.a.createElement("span",{className:"token number"},"2"),c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"GridCell"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"GridCell")," ",c.a.createElement("span",{className:"token attr-name"},"span"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"4",c.a.createElement("span",{className:"token punctuation"},'"')),c.a.createElement("span",{className:"token punctuation"},">")),c.a.createElement("span",{className:"token number"},"3"),c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"GridCell"),c.a.createElement("span",{className:"token punctuation"},">")),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Grid"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* If you need additional control over height of your grid, or need to add SubGrids, you can add your own GridInner components. */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Grid"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"GridInner"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"GridCell")," ",c.a.createElement("span",{className:"token attr-name"},"span"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"4",c.a.createElement("span",{className:"token punctuation"},'"')),c.a.createElement("span",{className:"token punctuation"},">")),c.a.createElement("span",{className:"token number"},"1"),c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"GridCell"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"GridCell")," ",c.a.createElement("span",{className:"token attr-name"},"span"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"4",c.a.createElement("span",{className:"token punctuation"},'"')),c.a.createElement("span",{className:"token punctuation"},">")),c.a.createElement("span",{className:"token number"},"2"),c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"GridCell"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"GridCell")," ",c.a.createElement("span",{className:"token attr-name"},"span"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"4",c.a.createElement("span",{className:"token punctuation"},'"')),c.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"GridInner"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","        ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"GridCell")," ",c.a.createElement("span",{className:"token attr-name"},"span"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"4",c.a.createElement("span",{className:"token punctuation"},'"')),c.a.createElement("span",{className:"token punctuation"},">")),"a",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"GridCell"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","        ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"GridCell")," ",c.a.createElement("span",{className:"token attr-name"},"span"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"4",c.a.createElement("span",{className:"token punctuation"},'"')),c.a.createElement("span",{className:"token punctuation"},">")),"b",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"GridCell"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","        ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"GridCell")," ",c.a.createElement("span",{className:"token attr-name"},"span"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"4",c.a.createElement("span",{className:"token punctuation"},'"')),c.a.createElement("span",{className:"token punctuation"},">")),"c",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"GridCell"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"GridInner"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"GridCell"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"GridInner"),c.a.createElement("span",{className:"token punctuation"},">")),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Grid"),c.a.createElement("span",{className:"token punctuation"},">")),"\n")))),c.a.createElement("div",{className:"example render-only"},c.a.createElement("div",{className:"run"},c.a.createElement(m.a,{docs:u,displayName:"Grid"}),c.a.createElement(m.a,{docs:u,displayName:"GridCell"}),c.a.createElement(m.a,{docs:u,displayName:"GridInner"}))))}}]),a}(c.a.Component);a.default=E},225:function(e,a,t){"use strict";function n(e){if(Array.isArray(e)){for(var a=0,t=Array(e.length);a<e.length;a++)t[a]=e[a];return t}return Array.from(e)}function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function r(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}t.d(a,"a",function(){return u});var c=t(0),o=(t.n(c),function(){function e(e,a){var t=[],n=!0,l=!1,s=void 0;try{for(var r,c=e[Symbol.iterator]();!(n=(r=c.next()).done)&&(t.push(r.value),!a||t.length!==a);n=!0);}catch(e){l=!0,s=e}finally{try{!n&&c.return&&c.return()}finally{if(l)throw s}}return t}return function(a,t){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return e(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),m=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),u=function(e){function a(e){l(this,a);var t=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.flatDocs=Object.values(e.docs).reduce(function(e,a){return e.concat(a)},[]),t}return r(a,e),m(a,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(a){return a.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,a){return c.createElement(c.Fragment,{key:a},0!==a&&c.createElement("br",null),e.split("  ").map(function(e,a){return c.createElement(c.Fragment,{key:a},0!==a&&c.createElement(c.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var a=this;return e.map(function(e){return a.findDocDef(e)}).filter(Boolean).reduce(function(e,a){return Object.assign({},a,e,{props:a.props||e.props?Object.assign({},a.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,a=this.props,t=a.displayName,l=a.composes,s=void 0===l?[]:l,r=this.getComposedDefs([t].concat(n(s)));return c.createElement("div",{className:"document-component"},c.createElement("h2",null,t),r&&!!r.description&&c.createElement("p",null,r.description),r&&r.props&&c.createElement("div",null,c.createElement("h3",null,"Props"),c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"Name"),c.createElement("th",null,"Type"),c.createElement("th",null,"Default"),c.createElement("th",null,"Description"))),c.createElement("tbody",null,Object.entries(r.props).map(function(a,t){var n=o(a,2),l=n[0],s=n[1];return c.createElement("tr",{key:t},c.createElement("td",{className:s.required?"required":""},c.createElement("code",null,l)),c.createElement("td",null,c.createElement("code",null,s.flowType&&e.renderRaw(s.flowType.raw||s.flowType.name||""))),c.createElement("td",null,s.defaultValue?c.createElement("code",null,s.defaultValue.value):c.createElement("code",null,"undefined")),c.createElement("td",null,s.description||""))})))))}}]),a}(c.Component)},247:function(e,a){e.exports=[{description:"",displayName:"GridRoot",methods:[{name:"classNames",docblock:null,modifiers:[],params:[{name:"props",type:{name:"intersection",raw:"{\n  /** Specifies the grid should have fixed column width. */\n  fixedColumnWidth?: boolean,\n  /** Specifies the alignment of the whole grid. */\n  align?: 'left' | 'right'\n} & SimpleTagPropsT",elements:[{name:"signature",type:"object",raw:"{\n  /** Specifies the grid should have fixed column width. */\n  fixedColumnWidth?: boolean,\n  /** Specifies the alignment of the whole grid. */\n  align?: 'left' | 'right'\n}",signature:{properties:[{key:"fixedColumnWidth",value:{name:"boolean",required:!1}},{key:"align",value:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}],required:!1}}]}},{name:"SimpleTagPropsT"}],alias:"GridPropsT"}}],returns:null}]},{description:"A Grid cell",displayName:"GridCell",methods:[],props:{span:{flowType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},required:!1,description:"Default number of columns to span."},phone:{flowType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},required:!1,description:"Number of columns to span on a phone."},tablet:{flowType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},required:!1,description:"Number of columns to span on a tablet."},desktop:{flowType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},required:!1,description:"Number of columns to span on a desktop."},order:{flowType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},required:!1,description:"Specifies the order of the cell."},align:{flowType:{name:"union",raw:"'top' | 'middle' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'bottom'"}]},required:!1,description:"Specifies the alignment of cell"}}},{description:"By default, an inner grid component is included inside of <Grid>. Use GridInner when doing nested Grids.",displayName:"GridInner",methods:[]},{description:"A Grid component",displayName:"Grid",methods:[],props:{fixedColumnWidth:{flowType:{name:"boolean"},required:!1,description:"Specifies the grid should have fixed column width."},align:{flowType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},required:!1,description:"Specifies the alignment of the whole grid."}}}]}});
//# sourceMappingURL=26.dbc40a4e.chunk.js.map