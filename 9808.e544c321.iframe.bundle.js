"use strict";(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[9808,8098,4326,2347,5006,5449,6381,4293,8109,3833,1323],{"./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{DB:()=>k,Ye:()=>G,rU:()=>A});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);__webpack_require__("./node_modules/invariant/browser.js");function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}const s=e=>{const{search:t,hash:r,href:n,origin:o,protocol:a,host:s,hostname:i,port:c}=e.location;let{pathname:l}=e.location;return!l&&n&&u&&(l=new URL(n).pathname),{pathname:encodeURI(decodeURI(l)),search:t,hash:r,href:n,origin:o,protocol:a,host:s,hostname:i,port:c,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}},u=!("undefined"==typeof window||!window.document||!window.document.createElement),l=((e,t)=>{let r=[],n=s(e),a=!1,i=()=>{};return{get location(){return n},get transitioning(){return a},_onTransitionComplete(){a=!1,i()},listen(t){r.push(t);const o=()=>{n=s(e),t({location:n,action:"POP"})};return e.addEventListener("popstate",o),()=>{e.removeEventListener("popstate",o),r=r.filter((e=>e!==t))}},navigate(t,{state:c,replace:u=!1}={}){if("number"==typeof t)e.history.go(t);else{c=o({},c,{key:Date.now()+""});try{a||u?e.history.replaceState(c,null,t):e.history.pushState(c,null,t)}catch(r){e.location[u?"replace":"assign"](t)}}n=s(e),a=!0;const l=new Promise((e=>i=e));return r.forEach((e=>e({location:n,action:"PUSH"}))),l}}})(u?window:((e="/")=>{const t=e.indexOf("?"),r={pathname:t>-1?e.substr(0,t):e,search:t>-1?e.substr(t):""};let n=0;const o=[r],a=[null];return{get location(){return o[n]},addEventListener(e,t){},removeEventListener(e,t){},history:{get entries(){return o},get index(){return n},get state(){return a[n]},pushState(e,t,r){const[s,i=""]=r.split("?");n++,o.push({pathname:s,search:i.length?`?${i}`:i}),a.push(e)},replaceState(e,t,r){const[s,i=""]=r.split("?");o[n]={pathname:s,search:i},a[n]=e},go(e){const t=n+e;t<0||t>a.length-1||(n=t)}}}})()),{navigate:p}=l;function h(e,r){return react__WEBPACK_IMPORTED_MODULE_0__.createServerContext?((e,r=null)=>(globalThis.__SERVER_CONTEXT||(globalThis.__SERVER_CONTEXT={}),globalThis.__SERVER_CONTEXT[e]||(globalThis.__SERVER_CONTEXT[e]=react__WEBPACK_IMPORTED_MODULE_0__.createServerContext(e,r)),globalThis.__SERVER_CONTEXT[e]))(e,r):react__WEBPACK_IMPORTED_MODULE_0__.createContext(r)}const m=h("Base",{baseuri:"/",basepath:"/"}),d=h("Location"),f=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(m),y=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(d);function E(e){this.uri=e}function b(t){const{to:r,replace:n=!0,state:o,noThrow:a,baseuri:s}=t;react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{Promise.resolve().then((()=>{const e=k(r,s);p(P(e,t),{replace:n,state:o})}))}),[]);const i=k(r,s);return a||(e=>{throw new E(e)})(P(i,t)),null}const R=t=>{const r=y(),{baseuri:n}=f();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(b,o({},r,{baseuri:n},t))};R.propTypes={from:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,to:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired};const C=(e,t)=>e.substr(0,t.length)===t,k=(e,t)=>{if(C(e,"/"))return e;const[r,n]=e.split("?"),[o]=t.split("?"),a=N(r),s=N(o);if(""===a[0])return L(o,n);if(!C(a[0],".")){const e=s.concat(a).join("/");return L(("/"===o?"":"/")+e,n)}const i=s.concat(a),c=[];for(let e=0,t=i.length;e<t;e++){const t=i[e];".."===t?c.pop():"."!==t&&c.push(t)}return L("/"+c.join("/"),n)},P=(e,t)=>{const[r,n=""]=e.split("?");let o="/"+N(r).map((e=>{const r=O.exec(e);return r?t[r[1]]:e})).join("/");const{location:{search:a=""}={}}=t,s=a.split("?")[1]||"";return o=L(o,n,s),o},O=/^:(.+)/,N=e=>e.replace(/(^\/+|\/+$)/g,"").split("/"),L=(e,...t)=>e+((t=t.filter((e=>e&&e.length>0)))&&t.length>0?`?${t.join("&")}`:""),V=["innerRef"],q=["to","state","replace","getProps"],X=["key"];let{forwardRef:B}=react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2));void 0===B&&(B=e=>e);const K=()=>{},A=B(((t,r)=>{let{innerRef:n}=t,s=a(t,V);const{baseuri:i}=f(),{location:c}=y(),{to:u,state:l,replace:h,getProps:m=K}=s,d=a(s,q),E=k(u,i),g=encodeURI(E),v=c.pathname===g,b=C(c.pathname,g);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",o({ref:r||n,"aria-current":v?"page":void 0},d,m({isCurrent:v,isPartiallyCurrent:b,href:E,location:c}),{href:E,onClick:e=>{if(d.onClick&&d.onClick(e),(e=>!e.defaultPrevented&&0===e.button&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey))(e)){e.preventDefault();let t=h;if("boolean"!=typeof h&&v){const e=a(o({},c.state),X);t=((e,t)=>{const r=Object.keys(e);return r.length===Object.keys(t).length&&r.every((r=>t.hasOwnProperty(r)&&e[r]===t[r]))})(o({},l),e)}p(E,{state:l,replace:t})}}}))}));A.displayName="Link",A.propTypes={to:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired};class F extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(...e){super(...e),this.displayName="ReactUseErrorBoundary"}componentDidCatch(...e){this.setState({}),this.props.onError(...e)}render(){return this.props.children}}const W=react__WEBPACK_IMPORTED_MODULE_0__.createContext({componentDidCatch:{current:void 0},error:void 0,setError:()=>!1});function H({children:t}){const[r,n]=react__WEBPACK_IMPORTED_MODULE_0__.useState(),o=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),a=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({componentDidCatch:o,error:r,setError:n})),[r]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(W.Provider,{value:a},react__WEBPACK_IMPORTED_MODULE_0__.createElement(F,{error:r,onError:(e,t)=>{n(e),null==o.current||o.current(e,t)}},t))}H.displayName="ReactUseErrorBoundaryContext";const z=function(t){var r,n;function a(r){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(t,o({key:"WrappedComponent"},r)))}return a.displayName=`WithErrorBoundary(${null!=(r=null!=(n=t.displayName)?n:t.name)?r:"Component"})`,a}((({history:t=l,children:r})=>{const{location:n}=t,[o,a]=react__WEBPACK_IMPORTED_MODULE_0__.useState({location:n}),[s]=function(t){const r=react__WEBPACK_IMPORTED_MODULE_0__.useContext(W);r.componentDidCatch.current=void 0;const n=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{r.setError(void 0)}),[]);return[r.error,n]}();if(react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{t._onTransitionComplete()}),[o.location]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{let e=!1;const r=t.listen((({location:t})=>{Promise.resolve().then((()=>{requestAnimationFrame((()=>{e||a({location:t})}))}))}));return()=>{e=!0,r()}}),[]),s){if(!(e=>e instanceof E)(s))throw s;p(s.uri,{replace:!0})}return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:o},"function"==typeof r?r(o):r||null)})),G=({children:t})=>{const r=y();return r?t(r):react__WEBPACK_IMPORTED_MODULE_0__.createElement(z,null,t)}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),preview_errors=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if((e=>!("object"!=typeof e||!e||!findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))||"function"!=typeof e.persist))(a)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in dist.C?dist.C.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{exitBeforeEnter&&(mode="wait");let[forceRender]=function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Z_.postRender(forceRender)),[forceRender]),forcedRenderCount]}();const forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);const isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exiting=new Set,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),(0,use_unmount_effect.z)((()=>{isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return"wait"===mode&&exiting.size&&(childrenToRender=[]),exiting.forEach((key=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:()=>{allChildren.delete(key),exiting.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout,mode},child))})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}},"./node_modules/gatsby-link/dist/index.modern.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{rU:()=>P});var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs"),gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js");function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function a(t){let e=t||"/",n="",r="";const o=e.indexOf("#");-1!==o&&(r=e.slice(o),e=e.slice(0,o));const s=e.indexOf("?");return-1!==s&&(n=e.slice(s),e=e.slice(0,s)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}const c=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=t=>{if("string"==typeof t)return!(t=>c.test(t))(t)},p=()=>__PATH_PREFIX__;function h(t,e=(()=>__BASE_PATH__)()){var n;if(!l(t))return t;if(t.startsWith("./")||t.startsWith("../"))return t;const r=null!=(n=null!=e?e:p())?n:"/";return`${null!=r&&r.endsWith("/")?r.slice(0,-1):r}${t.startsWith("/")?t:`/${t}`}`}const f=t=>null==t?void 0:t.startsWith("/"),u=()=>"undefined"!=typeof __TRAILING_SLASH__?__TRAILING_SLASH__:void 0;function _(t,e){const{pathname:n,search:r,hash:o}=a(t);return`${(0,gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__.H)(n,e)}${r}${o}`}const d=(t,e)=>"number"==typeof t?t:l(t)?f(t)?function(t){const e=h(t),n=u();return"always"===n||"never"===n?_(e,n):e}(t):function(t,e){if(f(t))return t;const r=u(),o=(0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.DB)(t,e);return"always"===r||"never"===r?_(o,r):o}(t,e):t,m=["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace","_location"];const v={activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,activeStyle:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,partiallyActive:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool};function b(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Ye,null,(({location:n})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(w,i({},t,{_location:n}))))}class w extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(t){super(t),this.defaultGetProps=({isPartiallyCurrent:t,isCurrent:e})=>(this.props.partiallyActive?t:e)?{className:[this.props.className,this.props.activeClassName].filter(Boolean).join(" "),style:i({},this.props.style,this.props.activeStyle)}:null;let e=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(e=!0),this.state={IOSupported:e},this.abortPrefetch=null,this.handleRef=this.handleRef.bind(this)}_prefetch(){let t=window.location.pathname+window.location.search;this.props._location&&this.props._location.pathname&&(t=this.props._location.pathname+this.props._location.search);const e=a(d(this.props.to,t)),n=e.pathname+e.search;if(t!==n)return ___loader.enqueue(n)}componentWillUnmount(){if(!this.io)return;const{instance:t,el:e}=this.io;this.abortPrefetch&&this.abortPrefetch.abort(),t.unobserve(e),t.disconnect()}handleRef(t){this.props.innerRef&&Object.prototype.hasOwnProperty.call(this.props.innerRef,"current")?this.props.innerRef.current=t:this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(this.io=((t,e)=>{const n=new window.IntersectionObserver((n=>{n.forEach((n=>{t===n.target&&e(n.isIntersecting||n.intersectionRatio>0)}))}));return n.observe(t),{instance:n,el:t}})(t,(t=>{t?this.abortPrefetch=this._prefetch():this.abortPrefetch&&this.abortPrefetch.abort()})))}render(){const t=this.props,{to:n,getProps:r=this.defaultGetProps,onClick:s,onMouseEnter:c,state:p,replace:h,_location:f}=t,u=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)e.indexOf(n=s[r])>=0||(o[n]=t[n]);return o}(t,m),_=d(n,f.pathname);return l(_)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.rU,i({to:_,state:p,getProps:r,innerRef:this.handleRef,onMouseEnter:t=>{c&&c(t);const e=a(_);___loader.hovering(e.pathname+e.search)},onClick:t=>{if(s&&s(t),!(0!==t.button||this.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();let e=h;const n=encodeURI(_)===f.pathname;"boolean"!=typeof h&&n&&(e=!0),window.___navigate(_,{state:p,replace:e})}return!0}},u)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",i({href:_},u))}}w.propTypes=i({},v,{onClick:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,to:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired,replace:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,state:prop_types__WEBPACK_IMPORTED_MODULE_3___default().object});const P=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((t,n)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(b,i({innerRef:n},t))))},"./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js":(__unused_webpack_module,exports)=>{exports.H=void 0;exports.H=(input,option="always")=>{const hasHtmlSuffix=input.endsWith(".html"),hasXmlSuffix=input.endsWith(".xml"),hasPdfSuffix=input.endsWith(".pdf");return"/"===input?input:((hasHtmlSuffix||hasXmlSuffix||hasPdfSuffix)&&(option="never"),"always"===option?input.endsWith("/")?input:`${input}/`:"never"===option&&input.endsWith("/")?input.slice(0,-1):input)}},"./node_modules/invariant/browser.js":module=>{module.exports=function(condition,format,a,b,c,d,e,f){if(!condition){var error;if(void 0===format)error=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var args=[a,b,c,d,e,f],argIndex=0;(error=new Error(format.replace(/%s/g,(function(){return args[argIndex++]})))).name="Invariant Violation"}throw error.framesToPop=1,error}}},"./node_modules/lodash-es/_baseRest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_baseRest});var identity=__webpack_require__("./node_modules/lodash-es/identity.js");const _apply=function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2])}return func.apply(thisArg,args)};var nativeMax=Math.max;const _overRest=function overRest(func,start,transform){return start=nativeMax(void 0===start?func.length-1:start,0),function(){for(var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);++index<length;)array[index]=args[start+index];index=-1;for(var otherArgs=Array(start+1);++index<start;)otherArgs[index]=args[index];return otherArgs[start]=transform(array),_apply(func,this,otherArgs)}};const lodash_es_constant=function constant(value){return function(){return value}};var _getNative=__webpack_require__("./node_modules/lodash-es/_getNative.js");const _defineProperty=function(){try{var func=(0,_getNative.Z)(Object,"defineProperty");return func({},"",{}),func}catch(e){}}();const _baseSetToString=_defineProperty?function(func,string){return _defineProperty(func,"toString",{configurable:!0,enumerable:!1,value:lodash_es_constant(string),writable:!0})}:identity.Z;var nativeNow=Date.now;const _setToString=function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=16-(stamp-lastCalled);if(lastCalled=stamp,remaining>0){if(++count>=800)return arguments[0]}else count=0;return func.apply(void 0,arguments)}}(_baseSetToString);const _baseRest=function baseRest(func,start){return _setToString(_overRest(func,start,identity.Z),func+"")}},"./node_modules/lodash-es/_isIndex.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var reIsUint=/^(?:0|[1-9]\d*)$/;const __WEBPACK_DEFAULT_EXPORT__=function isIndex(value,length){var type=typeof value;return!!(length=null==length?9007199254740991:length)&&("number"==type||"symbol"!=type&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length}},"./node_modules/lodash-es/_isIterateeCall.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _eq_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lodash-es/eq.js"),_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash-es/isArrayLike.js"),_isIndex_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash-es/_isIndex.js"),_isObject_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash-es/isObject.js");const __WEBPACK_DEFAULT_EXPORT__=function isIterateeCall(value,index,object){if(!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__.Z)(object))return!1;var type=typeof index;return!!("number"==type?(0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__.Z)(object)&&(0,_isIndex_js__WEBPACK_IMPORTED_MODULE_2__.Z)(index,object.length):"string"==type&&index in object)&&(0,_eq_js__WEBPACK_IMPORTED_MODULE_3__.Z)(object[index],value)}},"./node_modules/lodash-es/isArrayLike.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash-es/isFunction.js"),_isLength_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash-es/isLength.js");const __WEBPACK_DEFAULT_EXPORT__=function isArrayLike(value){return null!=value&&(0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__.Z)(value.length)&&!(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__.Z)(value)}},"./node_modules/lodash-es/isBoolean.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash-es/_baseGetTag.js"),_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash-es/isObjectLike.js");const __WEBPACK_DEFAULT_EXPORT__=function isBoolean(value){return!0===value||!1===value||(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__.Z)(value)&&"[object Boolean]"==(0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__.Z)(value)}},"./node_modules/lodash-es/isLength.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function isLength(value){return"number"==typeof value&&value>-1&&value%1==0&&value<=9007199254740991}},"./node_modules/lodash-es/sortBy.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>lodash_es_sortBy});var _arrayPush=__webpack_require__("./node_modules/lodash-es/_arrayPush.js"),_Symbol=__webpack_require__("./node_modules/lodash-es/_Symbol.js"),isArguments=__webpack_require__("./node_modules/lodash-es/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash-es/isArray.js"),spreadableSymbol=_Symbol.Z?_Symbol.Z.isConcatSpreadable:void 0;const _isFlattenable=function isFlattenable(value){return(0,isArray.Z)(value)||(0,isArguments.Z)(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])};const _baseFlatten=function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;for(predicate||(predicate=_isFlattenable),result||(result=[]);++index<length;){var value=array[index];depth>0&&predicate(value)?depth>1?baseFlatten(value,depth-1,predicate,isStrict,result):(0,_arrayPush.Z)(result,value):isStrict||(result[result.length]=value)}return result};var _baseOrderBy=__webpack_require__("./node_modules/lodash-es/_baseOrderBy.js"),_baseRest=__webpack_require__("./node_modules/lodash-es/_baseRest.js"),_isIterateeCall=__webpack_require__("./node_modules/lodash-es/_isIterateeCall.js");const lodash_es_sortBy=(0,_baseRest.Z)((function(collection,iteratees){if(null==collection)return[];var length=iteratees.length;return length>1&&(0,_isIterateeCall.Z)(collection,iteratees[0],iteratees[1])?iteratees=[]:length>2&&(0,_isIterateeCall.Z)(iteratees[0],iteratees[1],iteratees[2])&&(iteratees=[iteratees[0]]),(0,_baseOrderBy.Z)(collection,_baseFlatten(iteratees,1),[])}))}}]);