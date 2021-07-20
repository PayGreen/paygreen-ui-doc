(self.webpackChunkpg_ui_doc=self.webpackChunkpg_ui_doc||[]).push([[296],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return c}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(t),c=a,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return t?r.createElement(k,l(l({ref:n},s),{},{components:t})):r.createElement(k,l({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8644:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return s}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),l={id:"childrenMargin",title:"Marges des enfants",sidebar_position:5},p={unversionedId:"Grids/Grid/childrenMargin",id:"Grids/Grid/childrenMargin",isDocsHomePage:!1,title:"Marges des enfants",description:"La props gridGap permet d'espacer les enfants de la Grid en displayType grid ou column&nbsp; flex;.",source:"@site/docs/Grids/Grid/ChildrenMargin.mdx",sourceDirName:"Grids/Grid",slug:"/Grids/Grid/childrenMargin",permalink:"/docs/Grids/Grid/childrenMargin",version:"current",sidebarPosition:5,frontMatter:{id:"childrenMargin",title:"Marges des enfants",sidebar_position:5},sidebar:"docs",previous:{title:'Le displayType "column"',permalink:"/docs/Grids/Grid/displayTypeColumn"},next:{title:"Enfants en escalier",permalink:"/docs/Grids/Grid/childrenShift"}},o=[{value:"Valeurs autoris\xe9es",id:"valeurs-autoris\xe9es",children:[]},{value:"La props <code>childrenMargin</code>",id:"la-props-childrenmargin",children:[]},{value:"La props <code>childrenMarginBig</code>",id:"la-props-childrenmarginbig",children:[]}],d={toc:o};function s(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"La ",(0,i.kt)("a",{parentName:"p",href:"/docs/Grids/GridGap"},"props ",(0,i.kt)("inlineCode",{parentName:"a"},"gridGap"))," permet d'espacer les enfants de la ",(0,i.kt)("strong",{parentName:"p"},"Grid")," en ",(0,i.kt)("inlineCode",{parentName:"p"},"displayType")," ",(0,i.kt)("inlineCode",{parentName:"p"},"grid")," ou ",(0,i.kt)("inlineCode",{parentName:"p"},"column"),"\xa0",": en revanche, en ",(0,i.kt)("inlineCode",{parentName:"p"},"flex"),", cette props ne peut pas s'appliquer car la propri\xe9t\xe9 CSS ",(0,i.kt)("inlineCode",{parentName:"p"},"gap")," est tr\xe8s peu support\xe9e avec un ",(0,i.kt)("inlineCode",{parentName:"p"},"display: flex;"),"."),(0,i.kt)("p",null,"La ",(0,i.kt)("strong",{parentName:"p"},"Grid")," permet donc de d\xe9finir des marges identiques pour tous ses enfants","\xa0",": ces marges d\xe9finies dans la ",(0,i.kt)("strong",{parentName:"p"},"Grid")," \xe9crasent les marges \xe9ventuelles d\xe9finies dans les composants enfants."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Props"),(0,i.kt)("th",{parentName:"tr",align:null},"Valeur par d\xe9faut"),(0,i.kt)("th",{parentName:"tr",align:null},"Largeur d'\xe9cran"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"childrenMargin"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"md")),(0,i.kt)("td",{parentName:"tr",align:null},"Jusqu'\xe0 ",(0,i.kt)("inlineCode",{parentName:"td"},"theme.screen.min.md"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"childrenMarginBig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lg")),(0,i.kt)("td",{parentName:"tr",align:null},"\xc0 partir de ",(0,i.kt)("inlineCode",{parentName:"td"},"theme.screen.min.md"))))),(0,i.kt)("h2",{id:"valeurs-autoris\xe9es"},"Valeurs autoris\xe9es"),(0,i.kt)("p",null,"Les props ",(0,i.kt)("inlineCode",{parentName:"p"},"childrenMargin")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"childrenMarginBig")," autorisent les m\xeames valeurs","\xa0",":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Valeur"),(0,i.kt)("th",{parentName:"tr",align:null},"Taille en pixels"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"none")),(0,i.kt)("td",{parentName:"tr",align:null},"Aucune","*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"xs")),(0,i.kt)("td",{parentName:"tr",align:null},"4px")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sm")),(0,i.kt)("td",{parentName:"tr",align:null},"8px")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"md")),(0,i.kt)("td",{parentName:"tr",align:null},"16px")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lg")),(0,i.kt)("td",{parentName:"tr",align:null},"32px")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"xl")),(0,i.kt)("td",{parentName:"tr",align:null},"64px")))),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"*"," La valeur ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," ne remplit pas les ",(0,i.kt)("inlineCode",{parentName:"p"},"margin")," avec ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\xa0",": aucune instruction CSS n'est \xe9crite lorsque la props envoie ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),", ce qui permet aux marges d\xe9finies dans chaque enfant de s'appliquer sans \xeatre \xe9cras\xe9es."),(0,i.kt)("p",{parentName:"div"},"Pour d\xe9finir des marges distinctes pour chaque enfant d'une ",(0,i.kt)("strong",{parentName:"p"},"Grid"),", il faut donc utiliser ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," dans les props ",(0,i.kt)("inlineCode",{parentName:"p"},"childrenMargin")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"childrenMarginBig"),"."),(0,i.kt)("p",{parentName:"div"},"\xc0 l'inverse, il est impossible de forcer les marges des enfants \xe0 0 via la valeur ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),"."))),(0,i.kt)("h2",{id:"la-props-childrenmargin"},"La props ",(0,i.kt)("inlineCode",{parentName:"h2"},"childrenMargin")),(0,i.kt)("p",null,"Cette props s'applique sur les petits \xe9crans inf\xe9rieurs \xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.screen.min.md"),"."),(0,i.kt)("p",null,"Elle remplit les instructions CSS ",(0,i.kt)("inlineCode",{parentName:"p"},"margin-top")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"margin-bottom")," de chaque enfant (les ",(0,i.kt)("inlineCode",{parentName:"p"},"margin-left")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"margin-right")," sont d\xe9finies \xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"auto")," pour que les enfants soient centr\xe9s)."),(0,i.kt)("h2",{id:"la-props-childrenmarginbig"},"La props ",(0,i.kt)("inlineCode",{parentName:"h2"},"childrenMarginBig")),(0,i.kt)("p",null,"Cette props \xe9crase la props ",(0,i.kt)("inlineCode",{parentName:"p"},"childrenMargin")," sur les grands \xe9crans sup\xe9rieurs ou \xe9gaux \xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.screen.min.md"),"."),(0,i.kt)("p",null,"Elle remplit les instructions CSS ",(0,i.kt)("inlineCode",{parentName:"p"},"margin-top"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"margin-bottom"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"margin-left")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"margin-right")," de chaque enfant."))}s.isMDXComponent=!0}}]);