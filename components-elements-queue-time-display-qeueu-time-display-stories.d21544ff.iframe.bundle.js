"use strict";(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[8371],{"./src/components/elements/queue-time-display/qeueu-time-display.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,NoTime:()=>NoTime,WithTime:()=>WithTime,__namedExportsOrder:()=>__namedExportsOrder,default:()=>qeueu_time_display_stories});var _WithTime$parameters,_WithTime$parameters2,_Error$parameters,_Error$parameters2,_NoTime$parameters,_NoTime$parameters2,label=__webpack_require__("./src/components/elements/label/label.tsx"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),object_helper=__webpack_require__("./src/helpers/object-helper.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),QueueTimeDisplay=function QueueTimeDisplay(_ref){var state=_ref.state,queueTimeText=_ref.queueTimeText,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"LABEL":_ref$variant,t=(0,es.$G)().t,displayState=getDisplayState(state,queueTimeText);switch(displayState){case"STOPPAGE":return renderQueueTime(t("queueTimeStoppage"),variant);case"TIME_AVAILABLE":return renderQueueTime("".concat(t("queueTime"),": ").concat(queueTimeText," ").concat(t("queueMinutes")),variant);case"NO_TIME_AVAILABLE":return null;default:return(0,object_helper.y)(displayState)}},getDisplayState=function getDisplayState(state,queueTimeText){return 0!==state||queueTimeText?0===state&&queueTimeText?"TIME_AVAILABLE":"STOPPAGE":"NO_TIME_AVAILABLE"},renderQueueTime=function renderQueueTime(text,variant){switch(variant){case"LABEL":return(0,jsx_runtime.jsx)(label.Z,{title:text});case"SPAN":return(0,jsx_runtime.jsx)("span",{children:text});default:return(0,object_helper.y)(variant)}};try{QueueTimeDisplay.displayName="QueueTimeDisplay",QueueTimeDisplay.__docgenInfo={description:"",displayName:"QueueTimeDisplay",props:{queueTimeText:{defaultValue:null,description:"",name:"queueTimeText",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"number"}},variant:{defaultValue:{value:"LABEL"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"LABEL"'},{value:'"SPAN"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/elements/queue-time-display/queue-time-display.tsx#QueueTimeDisplay"]={docgenInfo:QueueTimeDisplay.__docgenInfo,name:"QueueTimeDisplay",path:"src/components/elements/queue-time-display/queue-time-display.tsx#QueueTimeDisplay"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const qeueu_time_display_stories={title:"Elements/QueueTimeDisplay",component:QueueTimeDisplay,render:function render(args){return(0,jsx_runtime.jsx)("div",{style:{position:"absolute"},children:(0,jsx_runtime.jsx)(QueueTimeDisplay,_objectSpread({},args))})}};var WithTime={args:{queueTimeText:"0-10",state:0}},Error={args:{state:1}},NoTime={args:{state:0,queueTimeText:void 0},render:function render(args){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{children:"No label should be visible here since we have no queueTimeText.."}),(0,jsx_runtime.jsx)(QueueTimeDisplay,_objectSpread({},args))]})}};WithTime.parameters=_objectSpread(_objectSpread({},WithTime.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithTime$parameters=WithTime.parameters)||void 0===_WithTime$parameters?void 0:_WithTime$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    queueTimeText: "0-10",\n    state: 0\n  }\n}'},null===(_WithTime$parameters2=WithTime.parameters)||void 0===_WithTime$parameters2||null===(_WithTime$parameters2=_WithTime$parameters2.docs)||void 0===_WithTime$parameters2?void 0:_WithTime$parameters2.source)})}),Error.parameters=_objectSpread(_objectSpread({},Error.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Error$parameters=Error.parameters)||void 0===_Error$parameters?void 0:_Error$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    state: 1\n  }\n}"},null===(_Error$parameters2=Error.parameters)||void 0===_Error$parameters2||null===(_Error$parameters2=_Error$parameters2.docs)||void 0===_Error$parameters2?void 0:_Error$parameters2.source)})}),NoTime.parameters=_objectSpread(_objectSpread({},NoTime.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NoTime$parameters=NoTime.parameters)||void 0===_NoTime$parameters?void 0:_NoTime$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    state: 0,\n    queueTimeText: undefined\n  },\n  render(args) {\n    return <div>\n        <p>No label should be visible here since we have no queueTimeText..</p>\n        <QueueTimeDisplay {...args} />\n      </div>;\n  }\n}"},null===(_NoTime$parameters2=NoTime.parameters)||void 0===_NoTime$parameters2||null===(_NoTime$parameters2=_NoTime$parameters2.docs)||void 0===_NoTime$parameters2?void 0:_NoTime$parameters2.source)})});var __namedExportsOrder=["WithTime","Error","NoTime"]},"./src/components/elements/label/label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>label_label});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),label_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/elements/label/label.module.less"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(label_module.Z,options);const label_label_module=label_module.Z&&label_module.Z.locals?label_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Label=function Label(props){return(0,jsx_runtime.jsx)("div",{className:label_label_module.labelWrapper,children:(0,jsx_runtime.jsx)("span",{className:[label_label_module.label,"p_small"].join(" "),children:props.title})})};Label.displayName="Label";const label_label=Label;try{label.displayName="label",label.__docgenInfo={description:"",displayName:"label",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/elements/label/label.tsx#label"]={docgenInfo:label.__docgenInfo,name:"label",path:"src/components/elements/label/label.tsx#label"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/object-helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>extract,y:()=>exhaustiveCheck});var lodash_es_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash-es/get.js"),extract=function extract(object,path){var defaultValue=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,value=(0,lodash_es_get__WEBPACK_IMPORTED_MODULE_0__.Z)(object,path,defaultValue);return null===value?defaultValue:value},exhaustiveCheck=function exhaustiveCheck(_param){throw new Error("should not reach here")}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/elements/label/label.module.less":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".label-module--label-wrapper--iyWAX {\n  background: var(--component-label-background-color);\n  padding: 0.5rem;\n  border-radius: var(--component-label-border-radius);\n}\n.label-module--label-wrapper--iyWAX .label-module--label--HLWhV {\n  color: var(--component-label-text-color);\n}\n","",{version:3,sources:["webpack://./src/components/elements/label/label.module.less"],names:[],mappings:"AAAA;EACE,mDAAA;EACA,eAAA;EACA,mDAAA;AACF;AAJA;EAKI,wCAAA;AAEJ",sourcesContent:[".label-wrapper {\n  background: var(--component-label-background-color);\n  padding: 0.5rem;\n  border-radius: var(--component-label-border-radius);\n  .label {\n    color: var(--component-label-text-color);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"label-wrapper":"label-module--label-wrapper--iyWAX",labelWrapper:"label-module--label-wrapper--iyWAX",label:"label-module--label--HLWhV"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);