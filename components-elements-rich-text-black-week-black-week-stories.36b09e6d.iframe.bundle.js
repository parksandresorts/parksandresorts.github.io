"use strict";(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[2538],{"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/elements/rich-text/black-week/black-week.module.less":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".black-week-module--black-week-custom--yjtox {\n  font-size: 20px;\n  margin: 8px 0;\n  background-color: #78f9d1;\n  color: #000000;\n  font-weight: bold;\n  width: fit-content;\n  box-shadow: -2px 1px 4px 5px #78f9d1;\n  border-radius: 8px 0 8px 0;\n}\n@media (min-width: 36rem) {\n  .black-week-module--black-week-custom--yjtox {\n    font-size: 24px;\n  }\n}\n","",{version:3,sources:["webpack://./src/components/elements/rich-text/black-week/black-week.module.less"],names:[],mappings:"AAEA;EACE,eAAA;EACA,aAAA;EACA,yBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,oCAAA;EACA,0BAAA;AADF;AAEE;EAAA;IACE,eAAA;EACF;AACF",sourcesContent:['@import "../../../../styling/break-points.less";\n\n.black-week-custom {\n  font-size: 20px;\n  margin: 8px 0;\n  background-color: #78f9d1;\n  color: #000000;\n  font-weight: bold;\n  width: fit-content;\n  box-shadow: -2px 1px 4px 5px #78f9d1;\n  border-radius: 8px 0 8px 0;\n  @media @small {\n    font-size: 24px;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"black-week-custom":"black-week-module--black-week-custom--yjtox",blackWeekCustom:"black-week-module--black-week-custom--yjtox"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/elements/rich-text/black-week/black-week.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>black_week_stories});var dist=__webpack_require__("./node_modules/@contentful/rich-text-types/dist/index.js"),rich_text_react_renderer_es5=__webpack_require__("./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),black_week_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/elements/rich-text/black-week/black-week.module.less"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(black_week_module.Z,options);const black_week_black_week_module=black_week_module.Z&&black_week_module.Z.locals?black_week_module.Z.locals:void 0;var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function getAllTexts(node){return node.content.map((function(item){return"text"===item.nodeType?item.value:getAllTexts(item)})).join("")}var printCustomForBlackWeek=function printCustomForBlackWeek(ComponentType){return function BlackWeekHeadingElement(node,next){var blackWeekKeyword=(0,(0,es.$G)().t)("blackWeekKeyword","Black Week").toLocaleLowerCase(),className=getAllTexts(node).toLocaleLowerCase().includes(blackWeekKeyword)?black_week_black_week_module.blackWeekCustom:void 0;return(0,jsx_runtime.jsx)(ComponentType,{className,children:next})}};try{printCustomForBlackWeek.displayName="printCustomForBlackWeek",printCustomForBlackWeek.__docgenInfo={description:"",displayName:"printCustomForBlackWeek",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/elements/rich-text/black-week/black-week.tsx#printCustomForBlackWeek"]={docgenInfo:printCustomForBlackWeek.__docgenInfo,name:"printCustomForBlackWeek",path:"src/components/elements/rich-text/black-week/black-week.tsx#printCustomForBlackWeek"})}catch(__react_docgen_typescript_loader_error){}var i18n=__webpack_require__("./src/labels/i18n.ts"),react=__webpack_require__("./node_modules/react/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const black_week_stories={title:"Elements/Rich Text/Black Week Override",render:function StoryComponent(args){(0,react.useEffect)((function(){(0,i18n.wX)("sv",{sv:_defineProperty({},"blackWeekKeyword",args.blackWeekKeyword),en:_defineProperty({},"blackWeekKeyword",args.blackWeekKeyword),nn:_defineProperty({},"blackWeekKeyword",args.blackWeekKeyword)})}),[args.blackWeekKeyword]);var elements=(0,rich_text_react_renderer_es5.h)(args.richText,{renderNode:_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},dist.BLOCKS.HEADING_1,printCustomForBlackWeek("h1")),dist.BLOCKS.HEADING_2,printCustomForBlackWeek("h2")),dist.BLOCKS.HEADING_3,printCustomForBlackWeek("h3")),dist.BLOCKS.HEADING_4,printCustomForBlackWeek("h4")),dist.BLOCKS.HEADING_5,printCustomForBlackWeek("h5")),dist.BLOCKS.HEADING_6,printCustomForBlackWeek("h6"))});return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:elements})}};var Primary={args:{richText:{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Welcome to Black Week!",nodeType:"text"}],nodeType:dist.BLOCKS.HEADING_3},{data:{},content:[{data:{},marks:[],value:"Here is some body text. This will not get Black Week styling even if it contains the keyword, because this is not a heading.",nodeType:"text"}],nodeType:dist.BLOCKS.PARAGRAPH}],nodeType:dist.BLOCKS.DOCUMENT},blackWeekKeyword:"Black Week"}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    richText: {\n      data: {},\n      content: [{\n        data: {},\n        content: [{\n          data: {},\n          marks: [],\n          value: "Welcome to Black Week!",\n          nodeType: "text"\n        }],\n        nodeType: BLOCKS.HEADING_3\n      }, {\n        data: {},\n        content: [{\n          data: {},\n          marks: [],\n          value: "Here is some body text. This will not get Black Week styling even if it contains the keyword, because this is not a heading.",\n          nodeType: "text"\n        }],\n        nodeType: BLOCKS.PARAGRAPH\n      }],\n      nodeType: BLOCKS.DOCUMENT\n    },\n    blackWeekKeyword: "Black Week"\n  }\n}',...Primary.parameters?.docs?.source}}}}}]);