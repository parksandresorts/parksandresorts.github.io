/*! For license information please see components-shared-components-calendar-calendar-footer-calendar-footer-stories.778162c6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[9967],{"./src/components/shared-components/calendar/calendar-footer/calendar-footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Closed:()=>Closed,MultiplePasses:()=>MultiplePasses,PassesWithGap:()=>PassesWithGap,PassesWithoutGap:()=>PassesWithoutGap,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _calendar_footer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/shared-components/calendar/calendar-footer/calendar-footer.tsx"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_parksandresorts_webapiproxy_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@parksandresorts/webapiproxy-types/dist/index.js"),_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_storybook_jest__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/jest/dist/index.mjs"),_core_labels_labels__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/labels/labels.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:"suspendedYield",p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/Daily Schedule/Calendar Footer",component:_calendar_footer__WEBPACK_IMPORTED_MODULE_3__.Z};var _play,_play2,_play3,Primary={args:{selectedDate:new Date("2024-10-08"),openingHours:{closingTime:"22.00",date:new Date("2024-10-08"),openingTime:"10.00",passes:[]},nextOpenDay:new Date("2024-10-09"),onChangeToNextOpenDate:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Click onchange"),calendarOpeningTimes:"Öppettider",contentfulLabelId:"Hej"}},Closed={args:_objectSpread(_objectSpread({},Primary.args),{},{openingHours:void 0})},firstPartOfGapLabel=_core_labels_labels__WEBPACK_IMPORTED_MODULE_4__.Z.sv.parkClosesBetweenPasses.split(/\s*\{\{.*?\}\}\s*/)[0],PassesWithGap={args:_objectSpread(_objectSpread({},Primary.args),{},{openingHours:{closingTime:"22.00",date:new Date("2024-10-08"),openingTime:"10.00",passes:[{partOfDay:_parksandresorts_webapiproxy_types__WEBPACK_IMPORTED_MODULE_1__.Fs.MORNING,from:"2024-10-08T08:00:00.000Z",to:"2024-10-08T14:00:00.000Z"},{partOfDay:_parksandresorts_webapiproxy_types__WEBPACK_IMPORTED_MODULE_1__.Fs.AFTERNOON,from:"2024-10-08T14:30:00.000Z",to:"2024-10-08T20:30:00.000Z"}]}}),play:(_play=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(_ref){var canvasElement,canvas;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:canvasElement=_ref.canvasElement,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.uh)(canvasElement),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(canvas.getByText(firstPartOfGapLabel,{exact:!1})).toBeInTheDocument();case 3:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})},PassesWithoutGap={args:_objectSpread(_objectSpread({},Primary.args),{},{openingHours:{closingTime:"22.00",date:new Date("2024-10-08"),openingTime:"10.00",passes:[{partOfDay:_parksandresorts_webapiproxy_types__WEBPACK_IMPORTED_MODULE_1__.Fs.MORNING,from:"2024-10-08T08:00:00.000Z",to:"2024-10-08T14:00:00.000Z"},{partOfDay:_parksandresorts_webapiproxy_types__WEBPACK_IMPORTED_MODULE_1__.Fs.AFTERNOON,from:"2024-10-08T14:00:00.000Z",to:"2024-10-08T20:30:00.000Z"}]}}),play:(_play2=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(_ref2){var canvasElement,canvas;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:canvasElement=_ref2.canvasElement,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.uh)(canvasElement),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(canvas.queryByText(firstPartOfGapLabel,{exact:!1})).toBeNull();case 3:case"end":return _context2.stop()}}),_callee2)}))),function play(_x2){return _play2.apply(this,arguments)})},MultiplePasses={args:_objectSpread(_objectSpread({},Primary.args),{},{openingHours:{closingTime:"22.00",date:new Date("2024-10-08"),openingTime:"10.00",passes:[{partOfDay:_parksandresorts_webapiproxy_types__WEBPACK_IMPORTED_MODULE_1__.Fs.MORNING,from:"2024-10-08T08:00:00.000Z",to:"2024-10-08T14:00:00.000Z"},{partOfDay:_parksandresorts_webapiproxy_types__WEBPACK_IMPORTED_MODULE_1__.Fs.AFTERNOON,from:"2024-10-08T14:30:00.000Z",to:"2024-10-08T18:00:00.000Z"},{partOfDay:_parksandresorts_webapiproxy_types__WEBPACK_IMPORTED_MODULE_1__.Fs.NIGHT,from:"2024-10-08T18:30:00.000Z",to:"2024-10-08T20:00:00.000Z"}]}}),play:(_play3=_asyncToGenerator(_regeneratorRuntime().mark((function _callee3(_ref3){var canvasElement,canvas;return _regeneratorRuntime().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:canvasElement=_ref3.canvasElement,canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_2__.uh)(canvasElement),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(canvas.queryByText(_core_labels_labels__WEBPACK_IMPORTED_MODULE_4__.Z.sv.morning,{exact:!1})).toBeNull(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(canvas.queryByText(_core_labels_labels__WEBPACK_IMPORTED_MODULE_4__.Z.sv.afternoon,{exact:!1})).toBeNull(),(0,_storybook_jest__WEBPACK_IMPORTED_MODULE_5__.l)(canvas.queryByText(_core_labels_labels__WEBPACK_IMPORTED_MODULE_4__.Z.sv.night,{exact:!1})).toBeNull();case 5:case"end":return _context3.stop()}}),_callee3)}))),function play(_x3){return _play3.apply(this,arguments)})},__namedExportsOrder=["Primary","Closed","PassesWithGap","PassesWithoutGap","MultiplePasses"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    selectedDate: new Date("2024-10-08"),\n    openingHours: {\n      closingTime: "22.00",\n      date: new Date("2024-10-08"),\n      openingTime: "10.00",\n      passes: []\n    },\n    nextOpenDay: new Date("2024-10-09"),\n    onChangeToNextOpenDate: action("Click onchange"),\n    calendarOpeningTimes: "Öppettider",\n    contentfulLabelId: "Hej"\n  }\n}',...Primary.parameters?.docs?.source}}},Closed.parameters={...Closed.parameters,docs:{...Closed.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Primary.args,\n    openingHours: undefined\n  }\n}",...Closed.parameters?.docs?.source}}},PassesWithGap.parameters={...PassesWithGap.parameters,docs:{...PassesWithGap.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    openingHours: {\n      closingTime: "22.00",\n      date: new Date("2024-10-08"),\n      openingTime: "10.00",\n      passes: [{\n        partOfDay: PartOfDay.MORNING,\n        from: "2024-10-08T08:00:00.000Z",\n        to: "2024-10-08T14:00:00.000Z"\n      }, {\n        partOfDay: PartOfDay.AFTERNOON,\n        from: "2024-10-08T14:30:00.000Z",\n        to: "2024-10-08T20:30:00.000Z"\n      }]\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.getByText(firstPartOfGapLabel, {\n      exact: false\n    })).toBeInTheDocument();\n  }\n}',...PassesWithGap.parameters?.docs?.source}}},PassesWithoutGap.parameters={...PassesWithoutGap.parameters,docs:{...PassesWithoutGap.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    openingHours: {\n      closingTime: "22.00",\n      date: new Date("2024-10-08"),\n      openingTime: "10.00",\n      passes: [{\n        partOfDay: PartOfDay.MORNING,\n        from: "2024-10-08T08:00:00.000Z",\n        to: "2024-10-08T14:00:00.000Z"\n      }, {\n        partOfDay: PartOfDay.AFTERNOON,\n        from: "2024-10-08T14:00:00.000Z",\n        //When from time is the same as previous pass\' end time, there is no gap between passes\n        to: "2024-10-08T20:30:00.000Z"\n      }]\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.queryByText(firstPartOfGapLabel, {\n      exact: false\n    })).toBeNull();\n  }\n}',...PassesWithoutGap.parameters?.docs?.source}}},MultiplePasses.parameters={...MultiplePasses.parameters,docs:{...MultiplePasses.parameters?.docs,source:{originalSource:'{\n  args: {\n    ...Primary.args,\n    openingHours: {\n      closingTime: "22.00",\n      date: new Date("2024-10-08"),\n      openingTime: "10.00",\n      passes: [{\n        partOfDay: PartOfDay.MORNING,\n        from: "2024-10-08T08:00:00.000Z",\n        to: "2024-10-08T14:00:00.000Z"\n      }, {\n        partOfDay: PartOfDay.AFTERNOON,\n        from: "2024-10-08T14:30:00.000Z",\n        to: "2024-10-08T18:00:00.000Z"\n      }, {\n        partOfDay: PartOfDay.NIGHT,\n        from: "2024-10-08T18:30:00.000Z",\n        to: "2024-10-08T20:00:00.000Z"\n      }]\n    }\n  },\n  //When we have three or more passes we should never show them, instead we show a simple opening hours text\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    expect(canvas.queryByText(labels.sv.morning, {\n      exact: false\n    })).toBeNull();\n    expect(canvas.queryByText(labels.sv.afternoon, {\n      exact: false\n    })).toBeNull();\n    expect(canvas.queryByText(labels.sv.night, {\n      exact: false\n    })).toBeNull();\n  }\n}',...MultiplePasses.parameters?.docs?.source}}}},"?4f7e":()=>{}}]);