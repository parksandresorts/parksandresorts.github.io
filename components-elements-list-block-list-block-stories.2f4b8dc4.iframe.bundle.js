"use strict";(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[1003],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>action});var v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),preview_errors=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in dist.C?dist.C.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors.is({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.Z)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/components/elements/list-block/list-block.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _list_block__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/elements/list-block/list-block.tsx"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/ListBlock",component:_list_block__WEBPACK_IMPORTED_MODULE_1__.L};var exampleProduct=function exampleProduct(pr){return _objectSpread({heading:"Ticket to ride",image:{images:{sources:[{srcSet:"https://images.ctfassets.net/ds6dz7ilx8up/3vUU4hrck2XujINR4qJsdP/b86cd8e082097823ddb55c5f12764378/ticket-to-ride-produktbild-1600x900_NY.png?w=228&h=128&q=100&fm=webp 228w,\nhttps://images.ctfassets.net/ds6dz7ilx8up/3vUU4hrck2XujINR4qJsdP/b86cd8e082097823ddb55c5f12764378/ticket-to-ride-produktbild-1600x900_NY.png?w=456&h=256&q=100&fm=webp 456w",sizes:"228px",type:"image/webp"}],fallback:{src:"https://images.ctfassets.net/ds6dz7ilx8up/3vUU4hrck2XujINR4qJsdP/b86cd8e082097823ddb55c5f12764378/ticket-to-ride-produktbild-1600x900_NY.png?w=228&h=128&q=100&fm=png",srcSet:"https://images.ctfassets.net/ds6dz7ilx8up/3vUU4hrck2XujINR4qJsdP/b86cd8e082097823ddb55c5f12764378/ticket-to-ride-produktbild-1600x900_NY.png?w=228&h=128&q=100&fm=png 228w,\nhttps://images.ctfassets.net/ds6dz7ilx8up/3vUU4hrck2XujINR4qJsdP/b86cd8e082097823ddb55c5f12764378/ticket-to-ride-produktbild-1600x900_NY.png?w=456&h=256&q=100&fm=png 456w",sizes:"228px"}},layout:"fixed",width:228,height:128},imageUrl:"https://images.ctfassets.net/ds6dz7ilx8up/1OyurI2ZkeLiVyg5HZyZiv/1bc53f2c539033ebf9a121b1ef5970fe/snor-rider-biljett.png?w=600&fm=webp&q=70",paragraph:"Entré till parken och åkband. Obegränsat med åk hela dagen!",productsPricesHeading:"Förmiddagens biljettpriser",productsPrices:{type:"description",price:"125 kr"},buttonLabel:"Köp ticket to ride",buttonAction:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Clicked")},pr)},Primary={args:{data:[{id:"group",headline:"Header",paragraph:"Some text",isExpanded:!0,align:"center",listObjects:[_objectSpread({id:"1"},exampleProduct({})),_objectSpread({id:"2"},exampleProduct({}))]}],renderer:"ProductGroups"}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    data: [{\n      id: "group",\n      headline: "Header",\n      paragraph: "Some text",\n      isExpanded: true,\n      align: "center",\n      listObjects: [{\n        id: "1",\n        ...exampleProduct({})\n      }, {\n        id: "2",\n        ...exampleProduct({})\n      }]\n    }],\n    renderer: "ProductGroups"\n  }\n  // Cannot use `StoryObj<typeof meta>` here. Maybe because of the generic parameter, or the `SpecificRendererIf`-type?\n} satisfies StoryObj<typeof ListBlock<ProductGroup>>',...Primary.parameters?.docs?.source}}}}}]);