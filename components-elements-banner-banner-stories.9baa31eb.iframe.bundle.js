"use strict";(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[7707],{"./src/components/elements/banner/banner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>banner_banner});var object_helper=__webpack_require__("./src/helpers/object-helper.ts"),parks_button=__webpack_require__("./src/components/shared-components/parks-button/parks-button.tsx"),icon=__webpack_require__("./src/components/elements/icon/icon.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),banner_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/elements/banner/banner.module.less"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(banner_module.Z,options);const banner_banner_module=banner_module.Z&&banner_module.Z.locals?banner_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Banner=function Banner(_ref){var type=_ref.type,heading=_ref.heading,paragraph=_ref.paragraph,id=_ref.id,_ref$headingLevel=_ref.headingLevel,HeadingLevel=void 0===_ref$headingLevel?"span":_ref$headingLevel,_ref$border=_ref.border,border=void 0!==_ref$border&&_ref$border,arrow=_ref.arrow,buttonText=_ref.buttonText,onClose=_ref.onClose,onButtonClick=_ref.onButtonClick;return(0,jsx_runtime.jsxs)("div",{"data-type":type,"data-has-border":border,"data-has-arrow":!!arrow,"data-arrow-position":arrow,className:banner_banner_module.wrapper,id,children:[(0,jsx_runtime.jsx)(icon.Z,{name:getIconFromType(type),size:"xl"}),(0,jsx_runtime.jsx)(HeadingLevel,{className:"".concat(banner_banner_module.heading," bold"),children:heading}),"function"==typeof onClose&&(0,jsx_runtime.jsx)(parks_button.gh,{iconCenterNew:"close",iconSize:"xxl",className:banner_banner_module.closeButton,onClick:onClose}),(0,jsx_runtime.jsx)("p",{className:banner_banner_module.paragraph,children:paragraph}),onButtonClick&&buttonText&&(0,jsx_runtime.jsx)(parks_button.f5,{className:banner_banner_module.button,label:buttonText,onClick:onButtonClick})]})};Banner.displayName="Banner";var getIconFromType=function getIconFromType(type){switch(type){case"information":case"inheritTheme":return"info";case"warning":case"darkWarning":return"warning";case"critical":return"error";case"success":return"check";default:return(0,object_helper.y0)(type)}};const banner_banner=Banner;try{banner.displayName="banner",banner.__docgenInfo={description:"",displayName:"banner",props:{type:{defaultValue:null,description:"PS! If you add a new banner type, don't forget to:\n- add new variables in theming\\component.less\n- add new case in getIconFromType",name:"type",required:!0,type:{name:"enum",value:[{value:'"warning"'},{value:'"information"'},{value:'"darkWarning"'},{value:'"critical"'},{value:'"success"'},{value:'"inheritTheme"'}]}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},paragraph:{defaultValue:null,description:"",name:"paragraph",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"The id prop could be useful e.g when improving accessibility through aria-attributes",name:"id",required:!1,type:{name:"string"}},headingLevel:{defaultValue:null,description:"For semantic purposes (accessibility)",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'},{value:'"span"'}]}},border:{defaultValue:{value:"false"},description:"Border will be hidden if arrow is shown",name:"border",required:!1,type:{name:"boolean"}},arrow:{defaultValue:null,description:"",name:"arrow",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'}]}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/elements/banner/banner.tsx#banner"]={docgenInfo:banner.__docgenInfo,name:"banner",path:"src/components/elements/banner/banner.tsx#banner"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/elements/banner/banner.module.less":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.banner-module--wrapper--fs7L_ {\n  --padding: var(--foundation-spacing-x4);\n  --grid-gap: var(--foundation-spacing-x2);\n  display: grid;\n  grid-template-columns: min-content auto;\n  grid-template-rows: 1fr auto auto;\n  column-gap: var(--grid-gap);\n  row-gap: var(--grid-gap);\n  align-items: center;\n  padding: var(--padding);\n  position: relative;\n  color: var(--component-banner-text-color);\n  background: var(--background-color);\n  --arrow-size: 2rem;\n  --arrow-border-visible: var(--arrow-size) solid var(--background-color);\n  --arrow-border-transparent: var(--arrow-size) solid transparent;\n  --arrow-position-offset: calc(var(--arrow-size) * -1);\n}\n.banner-module--wrapper--fs7L_[data-type="information"] {\n  --background-color: var(--component-banner-information-background-color);\n  --border-color: var(--component-banner-information-border-color);\n  --icon-color: var(--component-banner-information-icon-color);\n}\n.banner-module--wrapper--fs7L_[data-type="warning"] {\n  --background-color: var(--component-banner-warning-background-color);\n  --border-color: var(--component-banner-warning-border-color);\n  --icon-color: var(--component-banner-warning-icon-color);\n}\n.banner-module--wrapper--fs7L_[data-type="darkWarning"] {\n  --background-color: var(--component-banner-dark-warning-background-color);\n  --border-color: var(--component-banner-dark-warning-border-color);\n  --icon-color: var(--component-banner-dark-warning-icon-color);\n}\n.banner-module--wrapper--fs7L_[data-type="critical"] {\n  --background-color: var(--component-banner-critical-background-color);\n  --border-color: var(--component-banner-critical-border-color);\n  --icon-color: var(--component-banner-critical-icon-color);\n}\n.banner-module--wrapper--fs7L_[data-type="success"] {\n  --background-color: var(--component-banner-success-background-color);\n  --border-color: var(--component-banner-success-border-color);\n  --icon-color: var(--component-banner-success-icon-color);\n}\n.banner-module--wrapper--fs7L_[data-type="inheritTheme"] {\n  --background-color: var(--component-banner-inherit-background-color);\n  --border-color: var(--component-banner-inherit-border-color);\n  --icon-color: var(--component-banner-inherit-icon-color);\n}\n.banner-module--wrapper--fs7L_[data-has-border="true"] {\n  border: 1px solid var(--border-color);\n  border-radius: var(--foundation-border-radius-xs);\n}\n.banner-module--wrapper--fs7L_[data-has-arrow="true"] {\n  border: none;\n}\n.banner-module--wrapper--fs7L_[data-has-arrow="true"]:after {\n  content: " ";\n  position: absolute;\n}\n.banner-module--wrapper--fs7L_[data-arrow-position="top"] {\n  margin-top: var(--arrow-size);\n}\n.banner-module--wrapper--fs7L_[data-arrow-position="top"]:after {\n  transform: translate(var(--arrow-size));\n  right: 50%;\n  top: var(--arrow-position-offset);\n  border-right: var(--arrow-border-transparent);\n  border-bottom: var(--arrow-border-visible);\n  border-left: var(--arrow-border-transparent);\n}\n.banner-module--wrapper--fs7L_[data-arrow-position="right"] {\n  margin-right: var(--arrow-size);\n}\n.banner-module--wrapper--fs7L_[data-arrow-position="right"]:after {\n  right: var(--arrow-position-offset);\n  border-top: var(--arrow-border-transparent);\n  border-bottom: var(--arrow-border-transparent);\n  border-left: var(--arrow-border-visible);\n}\n.banner-module--wrapper--fs7L_[data-arrow-position="bottom"] {\n  margin-bottom: var(--arrow-size);\n}\n.banner-module--wrapper--fs7L_[data-arrow-position="bottom"]:after {\n  transform: translate(var(--arrow-size));\n  right: 50%;\n  bottom: var(--arrow-position-offset);\n  border-top: var(--arrow-border-visible);\n  border-right: var(--arrow-border-transparent);\n  border-left: var(--arrow-border-transparent);\n}\n.banner-module--wrapper--fs7L_[data-arrow-position="left"] {\n  margin-left: var(--arrow-size);\n}\n.banner-module--wrapper--fs7L_[data-arrow-position="left"]:after {\n  left: var(--arrow-position-offset);\n  border-top: var(--arrow-border-transparent);\n  border-right: var(--arrow-border-visible);\n  border-bottom: var(--arrow-border-transparent);\n}\n.banner-module--wrapper--fs7L_ .banner-module--close-button--VSlce {\n  position: absolute;\n  top: 0;\n  right: var(--padding);\n  padding: 0;\n  color: var(--component-banner-text-color);\n}\n.banner-module--wrapper--fs7L_ .banner-module--heading--AwAuk {\n  margin: 0;\n  font-size: var(--component-banner-heading-font-size);\n  line-height: var(--component-banner-heading-line-height);\n}\n.banner-module--wrapper--fs7L_ .banner-module--paragraph--Nr3xP {\n  margin: 0;\n  font-size: var(--component-banner-paragraph-font-size);\n  grid-column-start: 2;\n}\n.banner-module--wrapper--fs7L_ .banner-module--button--ft4Qh {\n  grid-column-start: 2;\n  width: fit-content;\n  --component-outline-button-text: var(--component-banner-text-color);\n  --component-outline-button-border: var(--border-color);\n}\n',"",{version:3,sources:["webpack://./src/components/elements/banner/banner.module.less"],names:[],mappings:"AAAA;EACE,uCAAA;EACA,wCAAA;EACA,aAAA;EACA,uCAAA;EACA,iCAAA;EACA,2BAAA;EACA,wBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,yCAAA;EACA,mCAAA;EA6CA,kBAAA;EACA,uEAAA;EACA,+DAAA;EACA,qDAAA;AA3CF;AAHE;EACE,wEAAA;EACA,gEAAA;EACA,4DAAA;AAKJ;AAFE;EACE,oEAAA;EACA,4DAAA;EACA,wDAAA;AAIJ;AADE;EACE,yEAAA;EACA,iEAAA;EACA,6DAAA;AAGJ;AAAE;EACE,qEAAA;EACA,6DAAA;EACA,yDAAA;AAEJ;AACE;EACE,oEAAA;EACA,4DAAA;EACA,wDAAA;AACJ;AAEE;EACE,oEAAA;EACA,4DAAA;EACA,wDAAA;AAAJ;AAGE;EACE,qCAAA;EACA,iDAAA;AADJ;AAWE;EACE,YAAA;AATJ;AAUI;EACE,YAAA;EACA,kBAAA;AARN;AAYE;EACE,6BAAA;AAVJ;AAWI;EACE,uCAAA;EACA,UAAA;EACA,iCAAA;EACA,6CAAA;EACA,0CAAA;EACA,4CAAA;AATN;AAaE;EACE,+BAAA;AAXJ;AAYI;EACE,mCAAA;EACA,2CAAA;EACA,8CAAA;EACA,wCAAA;AAVN;AAcE;EACE,gCAAA;AAZJ;AAaI;EACE,uCAAA;EACA,UAAA;EACA,oCAAA;EACA,uCAAA;EACA,6CAAA;EACA,4CAAA;AAXN;AAeE;EACE,8BAAA;AAbJ;AAcI;EACE,kCAAA;EACA,2CAAA;EACA,yCAAA;EACA,8CAAA;AAZN;AAlGA;EAmHI,kBAAA;EACA,MAAA;EACA,qBAAA;EACA,UAAA;EACA,yCAAA;AAdJ;AAzGA;EA2HI,SAAA;EACA,oDAAA;EACA,wDAAA;AAfJ;AA9GA;EAiII,SAAA;EACA,sDAAA;EACA,oBAAA;AAhBJ;AAnHA;EAuII,oBAAA;EACA,kBAAA;EACA,mEAAA;EACA,sDAAA;AAjBJ",sourcesContent:['.wrapper {\n  --padding: var(--foundation-spacing-x4);\n  --grid-gap: var(--foundation-spacing-x2);\n  display: grid;\n  grid-template-columns: min-content auto;\n  grid-template-rows: 1fr auto auto;\n  column-gap: var(--grid-gap);\n  row-gap: var(--grid-gap);\n  align-items: center;\n  padding: var(--padding);\n  position: relative;\n  color: var(--component-banner-text-color);\n  background: var(--background-color);\n\n  &[data-type="information"] {\n    --background-color: var(--component-banner-information-background-color);\n    --border-color: var(--component-banner-information-border-color);\n    --icon-color: var(--component-banner-information-icon-color);\n  }\n\n  &[data-type="warning"] {\n    --background-color: var(--component-banner-warning-background-color);\n    --border-color: var(--component-banner-warning-border-color);\n    --icon-color: var(--component-banner-warning-icon-color);\n  }\n\n  &[data-type="darkWarning"] {\n    --background-color: var(--component-banner-dark-warning-background-color);\n    --border-color: var(--component-banner-dark-warning-border-color);\n    --icon-color: var(--component-banner-dark-warning-icon-color);\n  }\n\n  &[data-type="critical"] {\n    --background-color: var(--component-banner-critical-background-color);\n    --border-color: var(--component-banner-critical-border-color);\n    --icon-color: var(--component-banner-critical-icon-color);\n  }\n\n  &[data-type="success"] {\n    --background-color: var(--component-banner-success-background-color);\n    --border-color: var(--component-banner-success-border-color);\n    --icon-color: var(--component-banner-success-icon-color);\n  }\n\n  &[data-type="inheritTheme"] {\n    --background-color: var(--component-banner-inherit-background-color);\n    --border-color: var(--component-banner-inherit-border-color);\n    --icon-color: var(--component-banner-inherit-icon-color);\n  }\n\n  &[data-has-border="true"] {\n    border: 1px solid var(--border-color);\n    border-radius: var(--foundation-border-radius-xs);\n  }\n\n  // Arrows generated through CSS border trick\n  // see https://css-tricks.com/snippets/css/css-triangle/\n  --arrow-size: 2rem;\n  --arrow-border-visible: var(--arrow-size) solid var(--background-color);\n  --arrow-border-transparent: var(--arrow-size) solid transparent;\n  --arrow-position-offset: calc(var(--arrow-size) * -1);\n\n  &[data-has-arrow="true"] {\n    border: none;\n    &:after {\n      content: " ";\n      position: absolute;\n    }\n  }\n\n  &[data-arrow-position="top"] {\n    margin-top: var(--arrow-size);\n    &:after {\n      transform: translate(var(--arrow-size));\n      right: 50%;\n      top: var(--arrow-position-offset);\n      border-right: var(--arrow-border-transparent);\n      border-bottom: var(--arrow-border-visible);\n      border-left: var(--arrow-border-transparent);\n    }\n  }\n\n  &[data-arrow-position="right"] {\n    margin-right: var(--arrow-size);\n    &:after {\n      right: var(--arrow-position-offset);\n      border-top: var(--arrow-border-transparent);\n      border-bottom: var(--arrow-border-transparent);\n      border-left: var(--arrow-border-visible);\n    }\n  }\n\n  &[data-arrow-position="bottom"] {\n    margin-bottom: var(--arrow-size);\n    &:after {\n      transform: translate(var(--arrow-size));\n      right: 50%;\n      bottom: var(--arrow-position-offset);\n      border-top: var(--arrow-border-visible);\n      border-right: var(--arrow-border-transparent);\n      border-left: var(--arrow-border-transparent);\n    }\n  }\n\n  &[data-arrow-position="left"] {\n    margin-left: var(--arrow-size);\n    &:after {\n      left: var(--arrow-position-offset);\n      border-top: var(--arrow-border-transparent);\n      border-right: var(--arrow-border-visible);\n      border-bottom: var(--arrow-border-transparent);\n    }\n  }\n\n  .close-button {\n    position: absolute;\n    top: 0;\n    right: var(--padding);\n    padding: 0;\n    color: var(--component-banner-text-color);\n  }\n\n  .heading {\n    margin: 0;\n    font-size: var(--component-banner-heading-font-size);\n    line-height: var(--component-banner-heading-line-height);\n  }\n\n  .paragraph {\n    margin: 0;\n    font-size: var(--component-banner-paragraph-font-size);\n    grid-column-start: 2;\n  }\n\n  .button {\n    grid-column-start: 2;\n    width: fit-content;\n    --component-outline-button-text: var(--component-banner-text-color);\n    --component-outline-button-border: var(--border-color);\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"banner-module--wrapper--fs7L_","close-button":"banner-module--close-button--VSlce",closeButton:"banner-module--close-button--VSlce",heading:"banner-module--heading--AwAuk",paragraph:"banner-module--paragraph--Nr3xP",button:"banner-module--button--ft4Qh"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/elements/banner/banner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomArrow:()=>BottomArrow,Critical:()=>Critical,CustomColors:()=>CustomColors,DarkWarning:()=>DarkWarning,HasBorder:()=>HasBorder,HasButton:()=>HasButton,HasCloseButton:()=>HasCloseButton,Information:()=>Information,InheritTheme:()=>InheritTheme,LeftArrow:()=>LeftArrow,Primary:()=>Primary,RightArrow:()=>RightArrow,Success:()=>Success,TopArrow:()=>TopArrow,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _banner__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/elements/banner/banner.tsx"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/Banner",component:_banner__WEBPACK_IMPORTED_MODULE_3__.Z,parameters:{layout:"centered"}};var Primary={args:{type:"warning",heading:"Informationsruta",headingLevel:"h2",paragraph:"På din valda dag är det konsert. Om du köper entrébiljett den här dagen måste du gå in i parken innan 18:00.",id:"my-banner",border:!1}},Information={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"information",heading:"Information"})},Warning={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"warning",heading:"Warning"})},DarkWarning={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"darkWarning",heading:"Dark Warning"})},Critical={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"critical",heading:"Critical"})},Success={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"success",heading:"Success"})},InheritTheme={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"inheritTheme",heading:"Inherit Theme"})},HasBorder={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"information",heading:"Has border",border:!0})},TopArrow={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"critical",heading:"Top arrow",arrow:"top"})},RightArrow={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"critical",heading:"Right arrow",arrow:"right"})},BottomArrow={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"critical",heading:"Bottom arrow",arrow:"bottom"})},LeftArrow={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"critical",heading:"Left arrow",arrow:"left"})},HasButton={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"information",heading:"Has button",buttonText:"Text button",onButtonClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Text button clicked")})},HasCloseButton={args:_objectSpread(_objectSpread({},Primary.args),{},{type:"information",heading:"Has close button",onClose:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Close button clicked")})},CustomColors={argTypes:{backgroundColor:{control:"color"},textColor:{control:"color"},borderColor:{control:"color"},iconColor:{control:"color"}},args:_objectSpread(_objectSpread({},Primary.args),{},{type:"warning",heading:"Custom color",arrow:"bottom",backgroundColor:"purple",textColor:"white",borderColor:"black",iconColor:"white"}),render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center","--component-banner-warning-background-color":args.backgroundColor,"--component-banner-text-color":args.textColor,"--component-banner-warning-border-color":args.borderColor,"--component-banner-warning-icon-color":args.iconColor},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_banner__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread({},args)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:"100px",height:"100px",background:"green"},children:"Ticket To Ride"})]})}},__namedExportsOrder=["Primary","Information","Warning","DarkWarning","Critical","Success","InheritTheme","HasBorder","TopArrow","RightArrow","BottomArrow","LeftArrow","HasButton","HasCloseButton","CustomColors"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: "warning",\n    heading: "Informationsruta",\n    headingLevel: "h2",\n    paragraph: "På din valda dag är det konsert. Om du köper entrébiljett den här dagen måste du gå in i parken innan 18:00.",\n    id: "my-banner",\n    border: false\n  }\n}',...Primary.parameters?.docs?.source}}},Information.parameters={...Information.parameters,docs:{...Information.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "information",\n    heading: "Information"\n  }\n}',...Information.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "warning",\n    heading: "Warning"\n  }\n}',...Warning.parameters?.docs?.source}}},DarkWarning.parameters={...DarkWarning.parameters,docs:{...DarkWarning.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "darkWarning",\n    heading: "Dark Warning"\n  }\n}',...DarkWarning.parameters?.docs?.source}}},Critical.parameters={...Critical.parameters,docs:{...Critical.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "critical",\n    heading: "Critical"\n  }\n}',...Critical.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "success",\n    heading: "Success"\n  }\n}',...Success.parameters?.docs?.source}}},InheritTheme.parameters={...InheritTheme.parameters,docs:{...InheritTheme.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "inheritTheme",\n    heading: "Inherit Theme"\n  }\n}',...InheritTheme.parameters?.docs?.source}}},HasBorder.parameters={...HasBorder.parameters,docs:{...HasBorder.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "information",\n    heading: "Has border",\n    border: true\n  }\n}',...HasBorder.parameters?.docs?.source}}},TopArrow.parameters={...TopArrow.parameters,docs:{...TopArrow.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "critical",\n    heading: "Top arrow",\n    arrow: "top"\n  }\n}',...TopArrow.parameters?.docs?.source}}},RightArrow.parameters={...RightArrow.parameters,docs:{...RightArrow.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "critical",\n    heading: "Right arrow",\n    arrow: "right"\n  }\n}',...RightArrow.parameters?.docs?.source}}},BottomArrow.parameters={...BottomArrow.parameters,docs:{...BottomArrow.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "critical",\n    heading: "Bottom arrow",\n    arrow: "bottom"\n  }\n}',...BottomArrow.parameters?.docs?.source}}},LeftArrow.parameters={...LeftArrow.parameters,docs:{...LeftArrow.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "critical",\n    heading: "Left arrow",\n    arrow: "left"\n  }\n}',...LeftArrow.parameters?.docs?.source}}},HasButton.parameters={...HasButton.parameters,docs:{...HasButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "information",\n    heading: "Has button",\n    buttonText: "Text button",\n    onButtonClick: action("Text button clicked")\n  }\n}',...HasButton.parameters?.docs?.source}}},HasCloseButton.parameters={...HasCloseButton.parameters,docs:{...HasCloseButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    type: "information",\n    heading: "Has close button",\n    onClose: action("Close button clicked")\n  }\n}',...HasCloseButton.parameters?.docs?.source}}},CustomColors.parameters={...CustomColors.parameters,docs:{...CustomColors.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    backgroundColor: {\n      control: "color"\n    },\n    textColor: {\n      control: "color"\n    },\n    borderColor: {\n      control: "color"\n    },\n    iconColor: {\n      control: "color"\n    }\n  },\n  args: {\n    ...Primary.args,\n    type: "warning",\n    heading: "Custom color",\n    arrow: "bottom",\n    backgroundColor: "purple",\n    textColor: "white",\n    borderColor: "black",\n    iconColor: "white"\n  },\n  render: args => {\n    return <div style={{\n      display: "flex",\n      flexDirection: "column",\n      alignItems: "center",\n      // @ts-expect-error Ignore wrong style attribute\n      "--component-banner-warning-background-color": args.backgroundColor,\n      "--component-banner-text-color": args.textColor,\n      "--component-banner-warning-border-color": args.borderColor,\n      "--component-banner-warning-icon-color": args.iconColor\n    }}>\n        <Banner {...args} />\n        <div style={{\n        width: "100px",\n        height: "100px",\n        background: "green"\n      }}>Ticket To Ride</div>\n      </div>;\n  }\n}',...CustomColors.parameters?.docs?.source}}}}}]);