"use strict";(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[3],{"./src/components/elements/list-block/list-block.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_list_block__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/elements/list-block/list-block.tsx"),_elements_product_card_product_card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/elements/product-card/product-card.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/ListBlock",component:_list_block__WEBPACK_IMPORTED_MODULE_1__.L,decorators:[function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"common foundation",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}]};var Primary={args:{data:[function exampleProduct(pr){return _objectSpread({heading:"Ticket to ride",imageUrl:"https://images.ctfassets.net/ds6dz7ilx8up/1OyurI2ZkeLiVyg5HZyZiv/1bc53f2c539033ebf9a121b1ef5970fe/snor-rider-biljett.png?w=600&fm=webp&q=70",paragraph:"Entré till parken och åkband. Obegränsat med åk hela dagen!",productsPricesHeading:"Förmiddagens biljettpriser",productsPrices:{type:"description",price:"125 kr"},buttonLabel:"Köp ticket to ride"},pr)}({})],renderer:function renderer(_ref){var data=_ref.data;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:data.map((function(s,idx){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_elements_product_card_product_card__WEBPACK_IMPORTED_MODULE_2__.I,_objectSpread({},s),idx)}))})}}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    data: [exampleProduct({})],\n    renderer: ({\n      data\n    }) => <>\n        {data.map((s, idx) => <ProductCard key={idx} {...s} />)}\n      </>\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})});var __namedExportsOrder=["Primary"]},"./src/components/elements/list-block/list-block.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>ListBlock});var react=__webpack_require__("./node_modules/react/index.js"),product_card=__webpack_require__("./src/components/elements/product-card/product-card.tsx");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}const event_aggregator=new(function(){function EventAggregator(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,EventAggregator),this.events={},this.hOP=this.events.hasOwnProperty}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(EventAggregator,[{key:"subscribe",value:function subscribe(eventName,callbackFunction){var _this=this;this.hOP.call(this.events,eventName)||(this.events[eventName]=[]);var index=this.events[eventName].push(callbackFunction)-1;return{remove:function remove(){delete _this.events[eventName][index]}}}},{key:"publish",value:function publish(eventName,info){this.hOP.call(this.events,eventName)&&this.events[eventName].forEach((function(item){item(void 0!==info?info:{})}))}}]),EventAggregator}());var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),product_list_renderer_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/elements/list-block/product-list-renderer/product-list-renderer.module.less"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(product_list_renderer_module.Z,options);const product_list_renderer_product_list_renderer_module=product_list_renderer_module.Z&&product_list_renderer_module.Z.locals?product_list_renderer_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function product_list_renderer_typeof(obj){return product_list_renderer_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},product_list_renderer_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function product_list_renderer_toPropertyKey(arg){var key=function product_list_renderer_toPrimitive(input,hint){if("object"!==product_list_renderer_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==product_list_renderer_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===product_list_renderer_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ProductListRenderer(_ref){var data=_ref.data,isExpandableList=_ref.isExpandableList,className=_ref.className,_useState2=_slicedToArray((0,react.useState)({}),2),isExpanded=_useState2[0],_setIsExpanded=_useState2[1];(0,react.useEffect)((function(){_setIsExpanded(Object.fromEntries(data.map((function(d){var _d$isExpanded;return[d.id,!isExpandableList||null===(_d$isExpanded=d.isExpanded)||void 0===_d$isExpanded||_d$isExpanded]}))))}),[data,isExpandableList]);return(0,jsx_runtime.jsx)("section",{className:"".concat(null!=className?className:""),children:null==data?void 0:data.map((function(group){var id=group.id,headline=group.headline,listObjects=group.listObjects,groupIsExpanded=isExpanded[id];return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h2",{className:"heading-m",onClick:function onClick(){return isExpandableList&&function setIsExpanded(_ref2,expanded){var id=_ref2.id,headline=_ref2.headline;_setIsExpanded(_objectSpread(_objectSpread({},isExpanded),{},_defineProperty({},id,expanded))),event_aggregator.publish("trackEvent",{category:"Product List",action:expanded?"Opened":"Closed",label:headline})}(group,!groupIsExpanded)},children:headline}),groupIsExpanded&&(0,jsx_runtime.jsx)("div",{className:product_list_renderer_product_list_renderer_module.cardRow,children:listObjects.map((function(p){return(0,jsx_runtime.jsx)(product_card.I,_objectSpread({},p),p.id)}))})]},id)}))})}ProductListRenderer.displayName="ProductListRenderer";try{ProductListRenderer.displayName="ProductListRenderer",ProductListRenderer.__docgenInfo={description:"",displayName:"ProductListRenderer",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"ProductGroup<T>[]"}},isExpandableList:{defaultValue:null,description:"",name:"isExpandableList",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/elements/list-block/product-list-renderer/product-list-renderer.tsx#ProductListRenderer"]={docgenInfo:ProductListRenderer.__docgenInfo,name:"ProductListRenderer",path:"src/components/elements/list-block/product-list-renderer/product-list-renderer.tsx#ProductListRenderer"})}catch(__react_docgen_typescript_loader_error){}function list_block_typeof(obj){return list_block_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},list_block_typeof(obj)}function list_block_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function list_block_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?list_block_ownKeys(Object(source),!0).forEach((function(key){list_block_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):list_block_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function list_block_defineProperty(obj,key,value){return(key=function list_block_toPropertyKey(arg){var key=function list_block_toPrimitive(input,hint){if("object"!==list_block_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==list_block_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===list_block_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function PassDataThrough(_ref){var data=_ref.data,children=_ref.children;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:react.Children.map(children,(function(child){return react.isValidElement(child)?react.cloneElement(child,{data}):child}))})}function ListBlockBase(_ref2){var Renderer=_ref2.renderer,_ref2$filter=_ref2.filter,Filter=void 0===_ref2$filter?PassDataThrough:_ref2$filter,_ref2$sorter=_ref2.sorter,Sorter=void 0===_ref2$sorter?PassDataThrough:_ref2$sorter,_ref2$data=_ref2.data,data=void 0===_ref2$data?[]:_ref2$data;return(0,jsx_runtime.jsx)(Filter,{data,children:(0,jsx_runtime.jsx)(Sorter,{data:void 0,children:(0,jsx_runtime.jsx)(Renderer,{data:void 0})})})}function ListBlock(_ref3){var renderer=_ref3.renderer,filter=_ref3.filter,sorter=_ref3.sorter,data=_ref3.data;switch(renderer){case"Product":return(0,jsx_runtime.jsx)(ListBlockBase,{renderer:function renderer(_ref4){var data=_ref4.data;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:null==data?void 0:data.map((function(product,idx){return(0,jsx_runtime.jsx)(product_card.I,list_block_objectSpread({},product),idx)}))})},filter,sorter,data});case"ProductGroups":return(0,jsx_runtime.jsx)(ListBlockBase,{renderer:function renderer(props){return(0,jsx_runtime.jsx)(ProductListRenderer,list_block_objectSpread({isExpandableList:!1},props))},filter,sorter,data})}return(0,jsx_runtime.jsx)(ListBlockBase,{renderer,filter,sorter,data})}ListBlockBase.displayName="ListBlockBase",ListBlock.displayName="ListBlock";try{ListBlock.displayName="ListBlock",ListBlock.__docgenInfo={description:"",displayName:"ListBlock",props:{filter:{defaultValue:null,description:"",name:"filter",required:!1,type:{name:"FunctionComponent<ListTransformerProps<T>> | FunctionComponent<ListTransformerProps<T>> | FunctionComponent<...>"}},sorter:{defaultValue:null,description:"",name:"sorter",required:!1,type:{name:"FunctionComponent<ListTransformerProps<T>> | FunctionComponent<ListTransformerProps<T>> | FunctionComponent<...>"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[] | T[] | T[]"}},renderer:{defaultValue:null,description:"",name:"renderer",required:!0,type:{name:'"Product" | "ProductGroups" | ListRenderer<T>'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/elements/list-block/list-block.tsx#ListBlock"]={docgenInfo:ListBlock.__docgenInfo,name:"ListBlock",path:"src/components/elements/list-block/list-block.tsx#ListBlock"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/elements/list-block/product-list-renderer/product-list-renderer.module.less":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".NbyVwbs7p5p7Qg5kP09e {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n}\n.NbyVwbs7p5p7Qg5kP09e > div {\n  margin: 1rem;\n}\n","",{version:3,sources:["webpack://./src/components/elements/list-block/product-list-renderer/product-list-renderer.module.less"],names:[],mappings:"AAAA;EACE,aAAA;EACA,eAAA;EACA,oBAAA;AACF;AAJA;EAMI,YAAA;AACJ",sourcesContent:[".card-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n\n  > div {\n    margin: 1rem;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"card-row":"NbyVwbs7p5p7Qg5kP09e",cardRow:"NbyVwbs7p5p7Qg5kP09e"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);