"use strict";(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[570],{"./src/components/elements/product-card/product-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Event:()=>Event,FullImage:()=>FullImage,Groups:()=>Groups,NoProductPrices:()=>NoProductPrices,OneProductPrice:()=>OneProductPrice,Prefix:()=>Prefix,Primary:()=>Primary,SomeSoldOut:()=>SomeSoldOut,Theme:()=>Theme,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/ProductCard",component:__webpack_require__("./src/components/elements/product-card/product-card.tsx").I};var standardProducts=[{category:"Barn 3-9 år",price:"150 kr"},{category:"Vuxen 10-64 år",price:"150 kr"},{category:"Barn 0-3 år",price:"Gratis"},{category:"Vuxen 65+ år",price:"95 kr"}],someSoldOutProducts=[{category:"Barn 3-9 år",price:"150 kr"},{category:"Vuxen 10-64 år",price:"150 kr",soldOutText:"Slutsålt"},{category:"Barn 0-3 år",price:"Gratis",soldOutText:"Slutsålt"},{category:"Vuxen 65+ år",price:"95 kr"}],Primary={args:{heading:"Ticket to ride",imageUrl:"https://images.ctfassets.net/ds6dz7ilx8up/1OyurI2ZkeLiVyg5HZyZiv/1bc53f2c539033ebf9a121b1ef5970fe/snor-rider-biljett.png?w=600&fm=webp&q=70",paragraph:"Entré till parken och åkband. Obegränsat med åk hela dagen!",productsPricesHeading:"Förmiddags biljettpriser",productsPrices:{type:"list",prices:standardProducts},buttonLabel:"Köp ticket to ride"}},FullImage={args:{heading:"Exklusiv guidning Tiger",imageUrl:"https://images.ctfassets.net/vyz35actmxi5/3ZagUIRzWMw6BCqkiqziQi/1c26288627af92273aa3c9c6cd3c4a20/tiger-snow.jpg?w=900&fm=webp&q=70",fullWidthImage:!0,paragraph:"Möt världens största kattdjur - den mäktiga tigern!",buttonLabel:"Köp ticket to ride"}},SomeSoldOut={args:_objectSpread(_objectSpread({},Primary.args),{},{productsPrices:{type:"list",prices:someSoldOutProducts}})},Prefix={args:_objectSpread(_objectSpread({},Primary.args),{},{prefix:"Populärt!"})},Groups={args:_objectSpread(_objectSpread({},Primary.args),{},{productsPrices:{type:"groups",groups:[{groupName:"Förmiddag",prices:standardProducts},{groupName:"Eftermiddag",prices:someSoldOutProducts}]}})},OneProductPrice={args:_objectSpread(_objectSpread({},Primary.args),{},{productsPrices:{type:"description",price:"150 kr",prefixLabel:"Från",description:"Inträde & obegränsat med spel"}})},NoProductPrices={args:_objectSpread(_objectSpread({},Primary.args),{},{productsPrices:void 0,productsPricesHeading:void 0})},Event={args:_objectSpread(_objectSpread({},Primary.args),{},{productsPrices:void 0,productsPricesHeading:void 0,heading:"Företagsbokning",paragraph:"Vill du ta med dina kollegor på en oförglömligt event eller AW? Här hittar du information om vad du kan bjuda med dina kollegor på.",buttonLabel:"Gå till företagsbokning",ghostButton:!0})},Theme={args:_objectSpread(_objectSpread({},Primary.args),{},{componentTheme:""})},__namedExportsOrder=["Primary","FullImage","SomeSoldOut","Prefix","Groups","OneProductPrice","NoProductPrices","Event","Theme"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    heading: "Ticket to ride",\n    imageUrl: "https://images.ctfassets.net/ds6dz7ilx8up/1OyurI2ZkeLiVyg5HZyZiv/1bc53f2c539033ebf9a121b1ef5970fe/snor-rider-biljett.png?w=600&fm=webp&q=70",\n    paragraph: "Entré till parken och åkband. Obegränsat med åk hela dagen!",\n    productsPricesHeading: "Förmiddags biljettpriser",\n    productsPrices: {\n      type: "list",\n      prices: standardProducts\n    },\n    buttonLabel: "Köp ticket to ride"\n  }\n}',...Primary.parameters?.docs?.source}}},FullImage.parameters={...FullImage.parameters,docs:{...FullImage.parameters?.docs,source:{originalSource:'{\n  args: {\n    heading: "Exklusiv guidning Tiger",\n    imageUrl: "https://images.ctfassets.net/vyz35actmxi5/3ZagUIRzWMw6BCqkiqziQi/1c26288627af92273aa3c9c6cd3c4a20/tiger-snow.jpg?w=900&fm=webp&q=70",\n    fullWidthImage: true,\n    paragraph: "Möt världens största kattdjur - den mäktiga tigern!",\n    buttonLabel: "Köp ticket to ride"\n  }\n}',...FullImage.parameters?.docs?.source}}},SomeSoldOut.parameters={...SomeSoldOut.parameters,docs:{...SomeSoldOut.parameters?.docs,source:{originalSource:'{\n  args: _objectSpread(_objectSpread({}, Primary.args), {}, {\n    productsPrices: {\n      type: "list",\n      prices: someSoldOutProducts\n    }\n  })\n}',...SomeSoldOut.parameters?.docs?.source}}},Prefix.parameters={...Prefix.parameters,docs:{...Prefix.parameters?.docs,source:{originalSource:'{\n  args: _objectSpread(_objectSpread({}, Primary.args), {}, {\n    prefix: "Populärt!"\n  })\n}',...Prefix.parameters?.docs?.source}}},Groups.parameters={...Groups.parameters,docs:{...Groups.parameters?.docs,source:{originalSource:'{\n  args: _objectSpread(_objectSpread({}, Primary.args), {}, {\n    productsPrices: {\n      type: "groups",\n      groups: [{\n        groupName: "Förmiddag",\n        prices: standardProducts\n      }, {\n        groupName: "Eftermiddag",\n        prices: someSoldOutProducts\n      }]\n    }\n  })\n}',...Groups.parameters?.docs?.source}}},OneProductPrice.parameters={...OneProductPrice.parameters,docs:{...OneProductPrice.parameters?.docs,source:{originalSource:'{\n  args: _objectSpread(_objectSpread({}, Primary.args), {}, {\n    productsPrices: {\n      type: "description",\n      price: "150 kr",\n      prefixLabel: "Från",\n      description: "Inträde & obegränsat med spel"\n    }\n  })\n}',...OneProductPrice.parameters?.docs?.source}}},NoProductPrices.parameters={...NoProductPrices.parameters,docs:{...NoProductPrices.parameters?.docs,source:{originalSource:"{\n  args: _objectSpread(_objectSpread({}, Primary.args), {}, {\n    productsPrices: undefined,\n    productsPricesHeading: undefined\n  })\n}",...NoProductPrices.parameters?.docs?.source}}},Event.parameters={...Event.parameters,docs:{...Event.parameters?.docs,source:{originalSource:'{\n  args: _objectSpread(_objectSpread({}, Primary.args), {}, {\n    productsPrices: undefined,\n    productsPricesHeading: undefined,\n    heading: "Företagsbokning",\n    paragraph: "Vill du ta med dina kollegor på en oförglömligt event eller AW? Här hittar du information om vad du kan bjuda med dina kollegor på.",\n    buttonLabel: "Gå till företagsbokning",\n    ghostButton: true\n  })\n}',...Event.parameters?.docs?.source}}},Theme.parameters={...Theme.parameters,docs:{...Theme.parameters?.docs,source:{originalSource:'{\n  args: _objectSpread(_objectSpread({}, Primary.args), {}, {\n    componentTheme: ""\n  })\n}',...Theme.parameters?.docs?.source}}}}}]);