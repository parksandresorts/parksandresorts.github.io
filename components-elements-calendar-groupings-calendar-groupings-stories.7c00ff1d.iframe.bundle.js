"use strict";(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[9265],{"./src/components/elements/calendar-groupings/calendar-groupings.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Theme:()=>Theme,__namedExportsOrder:()=>__namedExportsOrder,default:()=>calendar_groupings_stories});var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Theme$parameters,_Theme$parameters2,_Theme$parameters2$do,dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),calendar_groupings=__webpack_require__("./src/components/elements/calendar-groupings/calendar-groupings.tsx"),preview=__webpack_require__("./.storybook/preview.tsx"),dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min);function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const calendar_groupings_stories={title:"Elements/Calendar Groupings",component:calendar_groupings.Z,decorators:[preview.withBlockWrapper],argTypes:{componentTheme:{options:["","winter-wonderland","gold","halloween","night-rider","gronan-live","ticket-to-play","furuvik-primary","furuvik-primary-dark","furuvik-secondary","furuvik-secondary-dark","furuvik-tertiary","furuvik-tertiary-dark","sommarland-primary","sommarland-primary-dark","sommarland-secondary","sommarland-secondary-dark","sommarland-tertiary","sommarland-tertiary-dark","gronalund-primary","gronalund-primary-dark","gronalund-secondary","gronalund-secondary-dark","gronalund-tertiary","gronalund-tertiary-dark","kolmarden-primary","kolmarden-primary-dark","kolmarden-secondary","kolmarden-secondary-dark","kolmarden-tertiary","kolmarden-tertiary-dark"],control:{type:"radio"}}}};var today=dayjs_min_default()(),standardProducts=[{category:"Barn 3-9 år",price:"150 kr"},{category:"Vuxen 10-64 år",price:"150 kr"},{category:"Barn 0-3 år",price:"Gratis"},{category:"Vuxen 65+ år",price:"95 kr"}],Primary={args:{groupings:[{onClick:function onClick(){return"purchaseFlowGroup"},isExpanded:!0,heading:"Tillgängliga biljetter 19 augusti",key:"available-tickets-19-august",content:[{type:"product",heading:"Ticket to Ride",imageUrl:"https://images.ctfassets.net/ds6dz7ilx8up/1OyurI2ZkeLiVyg5HZyZiv/1bc53f2c539033ebf9a121b1ef5970fe/snor-rider-biljett.png?w=600&fm=webp&q=70",paragraph:"Entré till parken och åkband. Obegränsat med åk hela dagen!",productsPricesHeading:"Förmiddags biljettpriser",productsPrices:{type:"list",prices:standardProducts},buttonLabel:"Köp ticket to ride",buttonAction:(0,dist.aD)("Clicked")},{type:"product",heading:"Ticket to Play",imageUrl:"https://images.ctfassets.net/ds6dz7ilx8up/1OyurI2ZkeLiVyg5HZyZiv/1bc53f2c539033ebf9a121b1ef5970fe/snor-rider-biljett.png?w=600&fm=webp&q=70",paragraph:"Entré till parken och åkband. Obegränsat med åk hela dagen!",productsPricesHeading:"Förmiddags biljettpriser",productsPrices:{type:"list",prices:standardProducts},buttonLabel:"Köp ticket to ride",buttonAction:(0,dist.aD)("Clicked")}]},{onClick:function onClick(){return"eventScheduleGroup"},isExpanded:!0,heading:"Detta händer i parken 20 augusti",key:"events-20-august",content:[{event:{id:"3zBDoyuvoQTXSbOYIuRy9S",showId:"7HETaIf2j1TFEV2AjHUjZn",title:"Familjeföreställning - Findus flyttar ut",cancelled:!1,cancelledText:null,startDateAndTime:today.set("hour",17).set("minute",0).toDate(),endDateAndTime:null,description:null,showImageUrl:"/api/glt/show/7HETaIf2j1TFEV2AjHUjZn/image"},show:{contentful_id:"7HETaIf2j1TFEV2AjHUjZn",node_locale:"sv",internalTitle:"Show block - Pettson och Findus 2023",id:"80819540-caa8-5a14-97ad-ca4d3c3a1eb7",sortIndex:null,preHeading:null,title:"Pettson och Findus ",preamble:null,label:null,labelComponentTheme:null,shortDescriptionInList:"Missa inte nya teatern där Findus flyttar ut!",pageLink:{slug:"/familjeforestallning/pettsson-och-findus"},imageInList:{gatsbyImageData:{images:{sources:[{srcSet:"https://images.ctfassets.net/ds6dz7ilx8up/1Yd54PNUTBntbV0hJ6OzE8/362f8ab8ee760ddf77e5baa906ad5d57/findus_1.png?w=132&h=132&q=50&fm=webp 132w,\nhttps://images.ctfassets.net/ds6dz7ilx8up/1Yd54PNUTBntbV0hJ6OzE8/362f8ab8ee760ddf77e5baa906ad5d57/findus_1.png?w=264&h=264&q=50&fm=webp 264w",sizes:"132px",type:"image/webp"}],fallback:{src:"https://images.ctfassets.net/ds6dz7ilx8up/1Yd54PNUTBntbV0hJ6OzE8/362f8ab8ee760ddf77e5baa906ad5d57/findus_1.png?w=132&h=132&q=50&fm=png",srcSet:"https://images.ctfassets.net/ds6dz7ilx8up/1Yd54PNUTBntbV0hJ6OzE8/362f8ab8ee760ddf77e5baa906ad5d57/findus_1.png?w=132&h=132&q=50&fm=png 132w,\nhttps://images.ctfassets.net/ds6dz7ilx8up/1Yd54PNUTBntbV0hJ6OzE8/362f8ab8ee760ddf77e5baa906ad5d57/findus_1.png?w=264&h=264&q=50&fm=png 264w",sizes:"132px"}},layout:"fixed",backgroundColor:"#f8e8c8",width:132,height:132},file:{url:"//images.ctfassets.net/ds6dz7ilx8up/1Yd54PNUTBntbV0hJ6OzE8/362f8ab8ee760ddf77e5baa906ad5d57/findus_1.png"}},tags:[{title:"Familjeföreställningar"}],length:null,location:"Pettson och Findus-huset",product:null,mapLink:null,calendarText:null,calendarLink:null,customDateText:null,customDateTime:null,hideEventDateAndOnlyShowCustomText:null,showInPurchaseFlow:null,showProductDescriptionTextInPurchaseFlow:null},onClick:"https://gronalund.com/familjeforestallning/pettsson-och-findus",type:"event"}]}]}},Theme={args:_objectSpread(_objectSpread({},Primary.args),{},{componentTheme:"winter-wonderland"})};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    groupings: [{\n      onClick: () => "purchaseFlowGroup",\n      isExpanded: true,\n      heading: "Tillgängliga biljetter 19 augusti",\n      key: "available-tickets-19-august",\n      content: [ticketToRideProduct, ticketToPlayProduct]\n    }, {\n      onClick: () => "eventScheduleGroup",\n      isExpanded: true,\n      heading: "Detta händer i parken 20 augusti",\n      key: "events-20-august",\n      content: [{\n        event: {\n          id: "3zBDoyuvoQTXSbOYIuRy9S",\n          showId: "7HETaIf2j1TFEV2AjHUjZn",\n          title: "Familjeföreställning - Findus flyttar ut",\n          cancelled: false,\n          cancelledText: null,\n          startDateAndTime: today.set("hour", 17).set("minute", 0).toDate(),\n          endDateAndTime: null,\n          description: null,\n          showImageUrl: "/api/glt/show/7HETaIf2j1TFEV2AjHUjZn/image"\n        },\n        show: {\n          contentful_id: "7HETaIf2j1TFEV2AjHUjZn",\n          node_locale: "sv",\n          internalTitle: "Show block - Pettson och Findus 2023",\n          id: "80819540-caa8-5a14-97ad-ca4d3c3a1eb7",\n          sortIndex: null,\n          preHeading: null,\n          title: "Pettson och Findus ",\n          preamble: null,\n          label: null,\n          labelComponentTheme: null,\n          shortDescriptionInList: "Missa inte nya teatern där Findus flyttar ut!",\n          pageLink: {\n            slug: "/familjeforestallning/pettsson-och-findus"\n          },\n          imageInList: {\n            gatsbyImageData: {\n              images: {\n                sources: [{\n                  srcSet: "https://images.ctfassets.net/ds6dz7ilx8up/1Yd54PNUTBntbV0hJ6OzE8/362f8ab8ee760ddf77e5baa906ad5d57/findus_1.png?w=132&h=132&q=50&fm=webp 132w,\\nhttps://images.ctfassets.net/ds6dz7ilx8up/1Yd54PNUTBntbV0hJ6OzE8/362f8ab8ee760ddf77e5baa906ad5d57/findus_1.png?w=264&h=264&q=50&fm=webp 264w",\n                  sizes: "132px",\n                  type: "image/webp"\n                }],\n                fallback: {\n                  src: "https://images.ctfassets.net/ds6dz7ilx8up/1Yd54PNUTBntbV0hJ6OzE8/362f8ab8ee760ddf77e5baa906ad5d57/findus_1.png?w=132&h=132&q=50&fm=png",\n                  srcSet: "https://images.ctfassets.net/ds6dz7ilx8up/1Yd54PNUTBntbV0hJ6OzE8/362f8ab8ee760ddf77e5baa906ad5d57/findus_1.png?w=132&h=132&q=50&fm=png 132w,\\nhttps://images.ctfassets.net/ds6dz7ilx8up/1Yd54PNUTBntbV0hJ6OzE8/362f8ab8ee760ddf77e5baa906ad5d57/findus_1.png?w=264&h=264&q=50&fm=png 264w",\n                  sizes: "132px"\n                }\n              },\n              layout: "fixed",\n              backgroundColor: "#f8e8c8",\n              width: 132,\n              height: 132\n            },\n            file: {\n              url: "//images.ctfassets.net/ds6dz7ilx8up/1Yd54PNUTBntbV0hJ6OzE8/362f8ab8ee760ddf77e5baa906ad5d57/findus_1.png"\n            }\n          },\n          tags: [{\n            title: "Familjeföreställningar"\n          }],\n          length: null,\n          location: "Pettson och Findus-huset",\n          product: null,\n          mapLink: null,\n          calendarText: null,\n          calendarLink: null,\n          customDateText: null,\n          customDateTime: null,\n          hideEventDateAndOnlyShowCustomText: null,\n          showInPurchaseFlow: null,\n          showProductDescriptionTextInPurchaseFlow: null\n        },\n        onClick: "https://gronalund.com/familjeforestallning/pettsson-och-findus",\n        //Need to have an external link here because storybook can\'t handle gatsbys internal link\n        type: "event"\n      }]\n    }]\n  }\n} satisfies StoryObj<typeof meta>'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Theme.parameters=_objectSpread(_objectSpread({},Theme.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Theme$parameters=Theme.parameters)||void 0===_Theme$parameters?void 0:_Theme$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    ...Primary.args,\n    componentTheme: "winter-wonderland"\n  }\n} satisfies StoryObj<typeof meta>'},null===(_Theme$parameters2=Theme.parameters)||void 0===_Theme$parameters2||null===(_Theme$parameters2$do=_Theme$parameters2.docs)||void 0===_Theme$parameters2$do?void 0:_Theme$parameters2$do.source)})});var __namedExportsOrder=["Primary","Theme"]},"./src/components/elements/calendar-groupings/calendar-groupings.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>calendar_groupings});var motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),event_row=__webpack_require__("./src/components/elements/event-row/event-row.tsx"),product_card=__webpack_require__("./src/components/elements/product-card/product-card.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),calendar_groupings_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/elements/calendar-groupings/calendar-groupings.module.less"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(calendar_groupings_module.Z,options);const calendar_groupings_calendar_groupings_module=calendar_groupings_module.Z&&calendar_groupings_module.Z.locals?calendar_groupings_module.Z.locals:void 0;var object_helper=__webpack_require__("./src/helpers/object-helper.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Grouping=function Grouping(_ref){var grouping=_ref.grouping,isExpanded=grouping.isExpanded;return(0,jsx_runtime.jsxs)("div",{className:calendar_groupings_calendar_groupings_module.grouping,children:[(0,jsx_runtime.jsxs)("button",{className:calendar_groupings_calendar_groupings_module.clickableHeader,onClick:grouping.onClick,children:[(0,jsx_runtime.jsx)(motion.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:(0,jsx_runtime.jsx)("h5",{className:"bold ".concat(calendar_groupings_calendar_groupings_module.heading),children:grouping.heading})}),(0,jsx_runtime.jsx)(motion.E.div,{initial:{rotate:isExpanded?180:0},animate:{rotate:isExpanded?180:0},className:"".concat(calendar_groupings_calendar_groupings_module.expandIcon," icon-chevron-down bold")})]}),(0,jsx_runtime.jsx)(motion.E.div,{initial:{height:isExpanded?"auto":0},animate:{height:isExpanded?"auto":0},transition:{type:"tween"},className:[calendar_groupings_calendar_groupings_module.listWrapper,"event"===grouping.content[0].type?calendar_groupings_calendar_groupings_module.listWrapperEvent:calendar_groupings_calendar_groupings_module.listWrapperProductCard].join(" "),children:grouping.content.map((function(content){return function renderContent(content,selectedDate){switch(content.type){case"product":return(0,jsx_runtime.jsx)(motion.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:(0,jsx_runtime.jsx)(product_card.I,_objectSpread(_objectSpread({},content),{},{selectedDate}))},content.heading);case"event":return(0,react.createElement)(event_row.Z,_objectSpread(_objectSpread({},content),{},{key:content.event.id}));default:(0,object_helper.y)(content)}}(content,grouping.selectedDate)}))})]},grouping.key)};Grouping.displayName="Grouping";var CalendarGroupings=function CalendarGroupings(_ref2){var groupings=_ref2.groupings,componentTheme=_ref2.componentTheme;return(0,jsx_runtime.jsx)("div",{className:"".concat(calendar_groupings_calendar_groupings_module.groupings," block--max-width ").concat(componentTheme),children:groupings.map((function(grouping){return(0,jsx_runtime.jsx)(Grouping,{grouping},grouping.key)}))})};CalendarGroupings.displayName="CalendarGroupings";const calendar_groupings=CalendarGroupings;try{calendargroupings.displayName="calendargroupings",calendargroupings.__docgenInfo={description:"",displayName:"calendargroupings",props:{groupings:{defaultValue:null,description:"",name:"groupings",required:!0,type:{name:"CalendarGrouping[]"}},componentTheme:{defaultValue:null,description:"",name:"componentTheme",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"winter-wonderland"'},{value:'"gold"'},{value:'"halloween"'},{value:'"night-rider"'},{value:'"gronan-live"'},{value:'"ticket-to-play"'},{value:'"furuvik-primary"'},{value:'"furuvik-primary-dark"'},{value:'"furuvik-secondary"'},{value:'"furuvik-secondary-dark"'},{value:'"furuvik-tertiary"'},{value:'"furuvik-tertiary-dark"'},{value:'"sommarland-primary"'},{value:'"sommarland-primary-dark"'},{value:'"sommarland-secondary"'},{value:'"sommarland-secondary-dark"'},{value:'"sommarland-tertiary"'},{value:'"sommarland-tertiary-dark"'},{value:'"gronalund-primary"'},{value:'"gronalund-primary-dark"'},{value:'"gronalund-secondary"'},{value:'"gronalund-secondary-dark"'},{value:'"gronalund-tertiary"'},{value:'"gronalund-tertiary-dark"'},{value:'"kolmarden-primary"'},{value:'"kolmarden-primary-dark"'},{value:'"kolmarden-secondary"'},{value:'"kolmarden-secondary-dark"'},{value:'"kolmarden-tertiary"'},{value:'"kolmarden-tertiary-dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/elements/calendar-groupings/calendar-groupings.tsx#calendargroupings"]={docgenInfo:calendargroupings.__docgenInfo,name:"calendargroupings",path:"src/components/elements/calendar-groupings/calendar-groupings.tsx#calendargroupings"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/elements/calendar-groupings/calendar-groupings.module.less":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".EKgNAa8Cbar3LfTYubkc {\n  padding: var(--common-spacing-padding-content-mobile-small);\n}\n@media (min-width: 48rem) {\n  .EKgNAa8Cbar3LfTYubkc {\n    padding: var(--common-spacing-padding-content-desktop);\n  }\n}\n.miG1YriPQQQkgYFK_AJd {\n  position: relative;\n}\n.WMobPs5bMEsj8hCaFI1y {\n  background-color: var(--component-plate-color-background);\n  padding: 1rem;\n  margin-bottom: 1rem;\n  border-radius: var(--component-plate-border-radius);\n}\n.ZNsFXhAdNOsZTT74HxQ2 {\n  color: var(--component-plate-color-text);\n}\n.oS1ZS_GFFI7wmq_hRw1T {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background: transparent;\n  border: none;\n  appearance: none;\n}\n.VYJdW64VQjRXegUbvhLe {\n  color: var(--component-plate-color-text);\n  font-size: var(--component-icon-arrow-size);\n}\n.lMVcFem9M7vdHX1MX3kc {\n  overflow: hidden;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.lMVcFem9M7vdHX1MX3kc.IT_599KccAHlBWCy65k0 {\n  gap: 0.5rem;\n}\n.lMVcFem9M7vdHX1MX3kc.h4e0DYNFSnxsNvIbtUwO > div {\n  margin: var(--common-spacing-padding-content-mobile-large);\n}\n@media (max-width: 36rem) {\n  .lMVcFem9M7vdHX1MX3kc.h4e0DYNFSnxsNvIbtUwO > div {\n    margin: 0;\n  }\n}\n","",{version:3,sources:["webpack://./src/components/elements/calendar-groupings/calendar-groupings.module.less"],names:[],mappings:"AAEA;EAIE,2DAAA;AAJF;AACE;EAAA;IACE,sDAAA;EAEF;AACF;AAEA;EACE,kBAAA;AAAF;AAGA;EACE,yDAAA;EACA,aAAA;EACA,mBAAA;EACA,mDAAA;AADF;AAIA;EACE,wCAAA;AAFF;AAKA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,YAAA;EACA,gBAAA;AAHF;AAMA;EACE,wCAAA;EACA,2CAAA;AAJF;AAOA;EACE,gBAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;AALF;AAOE;EACE,WAAA;AALJ;AAQE;EAEI,0DAAA;AAPN;AAQM;EAAA;IACE,SAAA;EALN;AACF",sourcesContent:['@import "../../../../src/styling/break-points.less";\n\n.groupings {\n  @media @medium {\n    padding: var(--common-spacing-padding-content-desktop);\n  }\n  padding: var(--common-spacing-padding-content-mobile-small);\n}\n\n.grouping-wrapper {\n  position: relative;\n}\n\n.grouping {\n  background-color: var(--component-plate-color-background);\n  padding: 1rem;\n  margin-bottom: 1rem;\n  border-radius: var(--component-plate-border-radius);\n}\n\n.heading {\n  color: var(--component-plate-color-text);\n}\n\n.clickableHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background: transparent;\n  border: none;\n  appearance: none;\n}\n\n.expandIcon {\n  color: var(--component-plate-color-text);\n  font-size: var(--component-icon-arrow-size);\n}\n\n.list-wrapper {\n  overflow: hidden;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  &.listWrapperEvent {\n    gap: 0.5rem;\n  }\n\n  &.listWrapperProductCard {\n    > div {\n      margin: var(--common-spacing-padding-content-mobile-large);\n      @media @small-only {\n        margin: 0;\n      }\n    }\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={groupings:"EKgNAa8Cbar3LfTYubkc","grouping-wrapper":"miG1YriPQQQkgYFK_AJd",groupingWrapper:"miG1YriPQQQkgYFK_AJd",grouping:"WMobPs5bMEsj8hCaFI1y",heading:"ZNsFXhAdNOsZTT74HxQ2",clickableHeader:"oS1ZS_GFFI7wmq_hRw1T",expandIcon:"VYJdW64VQjRXegUbvhLe","list-wrapper":"lMVcFem9M7vdHX1MX3kc",listWrapper:"lMVcFem9M7vdHX1MX3kc",listWrapperEvent:"IT_599KccAHlBWCy65k0",listWrapperProductCard:"h4e0DYNFSnxsNvIbtUwO"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);