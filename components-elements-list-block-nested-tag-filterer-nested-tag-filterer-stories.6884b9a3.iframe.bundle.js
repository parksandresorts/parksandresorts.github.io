"use strict";(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[22],{"./src/components/elements/list-block/nested-tag-filterer/nested-tag-filterer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_list_block__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/elements/list-block/list-block.tsx"),_nested_tag_filterer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/elements/list-block/nested-tag-filterer/nested-tag-filterer.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var exampleProduct=function exampleProduct(pr){return _objectSpread({heading:"Ticket to ride",imageUrl:"https://images.ctfassets.net/ds6dz7ilx8up/1OyurI2ZkeLiVyg5HZyZiv/1bc53f2c539033ebf9a121b1ef5970fe/snor-rider-biljett.png?w=600&fm=webp&q=70",paragraph:"Entré till parken och åkband. Obegränsat med åk hela dagen!",productsPricesHeading:"Förmiddagens biljettpriser",productsPrices:{type:"description",price:"125 kr"},buttonLabel:"Köp ticket to ride"},pr)},entranceTag={id:"entr123",title:"Entré"},rideTag={id:"ride321",title:"Åkattraktioner"},seasonPassTag={id:"seas213",title:"Säsongskort"};const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/ListBlock/NestedTagFilterer",component:_nested_tag_filterer__WEBPACK_IMPORTED_MODULE_1__.R,decorators:[function(Story,storyContext){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_list_block__WEBPACK_IMPORTED_MODULE_2__.L,{data:[{headline:"Entrébiljetter",id:"grupp123",paragraph:"Lite text om våra biljetter som fnns och är och så vidare",isExpanded:!0,listObjects:[_objectSpread(_objectSpread({},exampleProduct({})),{},{id:"bla1",tags:[entranceTag,rideTag]}),_objectSpread(_objectSpread({},exampleProduct({heading:"Entrébiljett",paragraph:"Endast entré inkluderat"})),{},{id:"bla2",tags:[entranceTag]})]},{headline:"Säsongskort",id:"grupp321",paragraph:"Lite text om våra säsongskort som fnns och är och så vidare",isExpanded:!0,listObjects:[_objectSpread(_objectSpread({},exampleProduct({heading:"Sommarkortet"})),{},{id:"bla3",tags:[seasonPassTag,entranceTag]})]}],renderer:"ProductGroups",filter:function filter(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,_objectSpread(_objectSpread({},storyContext),{},{args:_objectSpread(_objectSpread({},storyContext.args),props)}))}})}],args:{data:void 0}};var Primary={args:{header:"Filtrera biljetter",filterMode:"single",noFilterSelectedLabel:"Visa alla",filterTags:[entranceTag,rideTag,seasonPassTag]}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    header: "Filtrera biljetter",\n    filterMode: "single",\n    noFilterSelectedLabel: "Visa alla",\n    filterTags: [entranceTag, rideTag, seasonPassTag]\n  }\n} satisfies StoryObj<typeof meta>'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]}}]);