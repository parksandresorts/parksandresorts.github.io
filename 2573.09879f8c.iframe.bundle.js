"use strict";(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[2573],{"./src/components/shared-components/calendar/calendar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>calendar_calendar});var react=__webpack_require__("./node_modules/react/index.js"),date_helper=__webpack_require__("./src/helpers/date-helper.ts"),language_helper=__webpack_require__("./src/helpers/language-helper.ts"),event_aggregator=__webpack_require__("./src/helpers/event-aggregator.js"),sv=__webpack_require__("./node_modules/date-fns/esm/locale/sv/index.js"),en_GB=__webpack_require__("./node_modules/date-fns/esm/locale/en-GB/index.js"),nb=__webpack_require__("./node_modules/date-fns/esm/locale/nb/index.js"),index_esm=__webpack_require__("./node_modules/react-day-picker/dist/index.esm.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),calendar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/shared-components/calendar/calendar.module.less"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(calendar_module.Z,options);const calendar_calendar_module=calendar_module.Z&&calendar_module.Z.locals?calendar_module.Z.locals:void 0;var motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var classNames={caption_label:calendar_calendar_module.captionLabel,caption:calendar_calendar_module.caption,head_cell:[calendar_calendar_module.headCell,"body-xs"].join(" "),table:calendar_calendar_module.table,head_row:calendar_calendar_module.headRow,row:calendar_calendar_module.row,cell:calendar_calendar_module.cell,day:[calendar_calendar_module.day,"body-s"].join(" "),day_outside:calendar_calendar_module.dayOutside,day_disabled:calendar_calendar_module.dayDisabled},formatCurrentLocaleToDateFnsLocale=function formatCurrentLocaleToDateFnsLocale(currLocale){switch(currLocale){default:case"sv":return sv.Z;case"en":return en_GB.Z;case"nn":return nb.Z}},MonthSelectionArrow=function MonthSelectionArrow(_ref){var goToMonth=_ref.goToMonth,month=_ref.month,endOfMonthSpan=_ref.endOfMonthSpan,icon=_ref.icon;return(0,jsx_runtime.jsx)("button",{className:calendar_calendar_module.monthSelectionArrowButton,disabled:!month||endOfMonthSpan===month,onClick:function onClick(){return month&&goToMonth(month)},children:(0,jsx_runtime.jsx)("span",{className:[icon,calendar_calendar_module.monthSelectionArrow,!month&&calendar_calendar_module.disabledIcon].join(" ")})})};MonthSelectionArrow.displayName="MonthSelectionArrow";var _Dropdown=function Dropdown(_ref2){var onChange=_ref2.onChange,value=_ref2.value,children=_ref2.children,name=_ref2.name,startDate=_ref2.startDate,endDate=_ref2.endDate,currentDisplayedMonth=_ref2.currentDisplayedMonth,previousMonthIcon=_ref2.previousMonthIcon,nextMonthIcon=_ref2.nextMonthIcon,_useNavigation=(0,index_esm.HJ)(),goToMonth=_useNavigation.goToMonth,isDateDisplayed=_useNavigation.isDateDisplayed,nextMonth=_useNavigation.nextMonth,previousMonth=_useNavigation.previousMonth;if((0,react.useEffect)((function(){isDateDisplayed(currentDisplayedMonth)||goToMonth(currentDisplayedMonth)}),[currentDisplayedMonth,isDateDisplayed,goToMonth]),"years"!==name)return(0,jsx_runtime.jsxs)("div",{className:calendar_calendar_module.monthSelectionWrapper,children:[(0,jsx_runtime.jsx)(MonthSelectionArrow,{goToMonth,month:previousMonth,endOfMonthSpan:startDate,icon:previousMonthIcon}),(0,jsx_runtime.jsx)("select",{name,onChange,value,className:calendar_calendar_module.monthSelectionOption,children}),(0,jsx_runtime.jsx)(MonthSelectionArrow,{goToMonth,month:nextMonth,endOfMonthSpan:endDate,icon:nextMonthIcon})]})};_Dropdown.displayName="Dropdown";var Day=function Day(_ref3){var dayRender=_ref3.dayRender,isDateAvailable=_ref3.isDateAvailable,disableEmptyDates=_ref3.disableEmptyDates;return isDateAvailable?(0,jsx_runtime.jsx)(index_esm.zx,_objectSpread({},dayRender.buttonProps)):(0,jsx_runtime.jsx)(index_esm.zx,_objectSpread(_objectSpread({},dayRender.buttonProps),{},{className:[dayRender.buttonProps.className,calendar_calendar_module.closedDate,disableEmptyDates&&calendar_calendar_module.disabledDay].join(" ")}))},DayWrapper=function DayWrapper(_ref4){var date=_ref4.date,displayMonth=_ref4.displayMonth,buttonRef=(0,react.useRef)(null),dayRender=(0,index_esm.c$)(date,displayMonth,buttonRef),dayNumber=dayjs_min_default()(date).format("D"),modifiers=(0,index_esm.kD)().modifiers,_dayRender$activeModi=dayRender.activeModifiers,selected=_dayRender$activeModi.selected,outside=_dayRender$activeModi.outside,availableDates=modifiers.dates,disableEmptyDates=modifiers.disableEmptyDates,isDateAvailable=null==availableDates?void 0:availableDates.some((function(availableDate){return date_helper.ZP.isEqualYYYYMMDD(availableDate,date)}));return(0,jsx_runtime.jsxs)(motion.E.div,{initial:{opacity:.5},animate:{opacity:1},className:calendar_calendar_module.dayButtonWrapper,children:[selected&&!outside&&(0,jsx_runtime.jsx)(motion.E.div,{initial:{scale:.5},animate:{scale:1},className:calendar_calendar_module.selectedDateMarker,children:dayNumber}),(0,jsx_runtime.jsx)(Day,{dayRender,isDateAvailable,disableEmptyDates})]})};DayWrapper.displayName="DayWrapper";var Calendar=function Calendar(_ref5){var _calendarData$at$date,_calendarData$at,selectedDate=_ref5.selectedDate,changeDate=_ref5.changeDate,changedMonth=_ref5.changedMonth,_ref5$startDate=_ref5.startDate,startDate=void 0===_ref5$startDate?dayjs_min_default()().toDate():_ref5$startDate,calendarData=_ref5.calendarData,currentDisplayedMonth=_ref5.currentDisplayedMonth,nextMonthButtonIcon=_ref5.nextMonthButtonIcon,previousMonthButtonIcon=_ref5.previousMonthButtonIcon,disableEmptyDates=_ref5.disableEmptyDates,endDate=null!==(_calendarData$at$date=null==calendarData||null===(_calendarData$at=calendarData.at(-1))||void 0===_calendarData$at?void 0:_calendarData$at.date)&&void 0!==_calendarData$at$date?_calendarData$at$date:dayjs_min_default()().toDate(),previousMonthIcon=null!=previousMonthButtonIcon?previousMonthButtonIcon:"icon-chevron-left",nextMonthIcon=null!=nextMonthButtonIcon?nextMonthButtonIcon:"icon-chevron-right",datesFromCalendarData=null==calendarData?void 0:calendarData.map((function(data){return data.date})),locale=language_helper.Z.currentLocale;return(0,jsx_runtime.jsx)("div",{className:calendar_calendar_module.outerWrapper,children:(0,jsx_runtime.jsx)(index_esm._W,{className:calendar_calendar_module.innerWrapper,classNames,components:{Dropdown:function Dropdown(props){return _Dropdown(_objectSpread(_objectSpread({},props),{},{startDate,endDate,currentDisplayedMonth:null!=currentDisplayedMonth?currentDisplayedMonth:(0,date_helper.Bq)(),previousMonthIcon,nextMonthIcon}))},Day:DayWrapper},selected:selectedDate,onMonthChange:function onMonthChange(month){return changedMonth(month)},fromDate:startDate,toDate:endDate,modifiers:{dates:datesFromCalendarData,disableEmptyDates},onSelect:function handleOnSelect(day){!day||date_helper.ZP.isEqualYYYYMMDD(day,selectedDate)&&selectedDate||(changeDate(day),event_aggregator.Z.publish("trackEvent",{category:"Daily Schedule Block",action:"Clicked date",label:"Selected date: ".concat(selectedDate)}))},mode:"single",captionLayout:"dropdown",locale:formatCurrentLocaleToDateFnsLocale(locale)})})};Calendar.displayName="Calendar";const calendar_calendar=Calendar;try{calendar.displayName="calendar",calendar.__docgenInfo={description:"",displayName:"calendar",props:{selectedDate:{defaultValue:null,description:"",name:"selectedDate",required:!0,type:{name:"Date"}},changeDate:{defaultValue:null,description:"",name:"changeDate",required:!1,type:{name:"(day: Date) => void"}},changedMonth:{defaultValue:null,description:"",name:"changedMonth",required:!0,type:{name:"(month: Date) => void"}},startDate:{defaultValue:{value:"dayjs().toDate()"},description:"",name:"startDate",required:!1,type:{name:"Date"}},calendarData:{defaultValue:null,description:"",name:"calendarData",required:!1,type:{name:"(CalendarDataProps | CalendarDateFieldDataProps)[]"}},currentDisplayedMonth:{defaultValue:null,description:"",name:"currentDisplayedMonth",required:!1,type:{name:"Date"}},nextMonthButtonIcon:{defaultValue:null,description:"",name:"nextMonthButtonIcon",required:!1,type:{name:"string"}},previousMonthButtonIcon:{defaultValue:null,description:"",name:"previousMonthButtonIcon",required:!1,type:{name:"string"}},disableEmptyDates:{defaultValue:null,description:"",name:"disableEmptyDates",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/shared-components/calendar/calendar.tsx#calendar"]={docgenInfo:calendar.__docgenInfo,name:"calendar",path:"src/components/shared-components/calendar/calendar.tsx#calendar"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/event-aggregator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=new(function(){function EventAggregator(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,EventAggregator),this.events={},this.hOP=this.events.hasOwnProperty}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(EventAggregator,[{key:"subscribe",value:function subscribe(eventName,callbackFunction){var _this=this;this.hOP.call(this.events,eventName)||(this.events[eventName]=[]);var index=this.events[eventName].push(callbackFunction)-1;return{remove:function remove(){delete _this.events[eventName][index]}}}},{key:"publish",value:function publish(eventName,info){this.hOP.call(this.events,eventName)&&this.events[eventName].forEach((function(item){item(void 0!==info?info:{})}))}}]),EventAggregator}())},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/shared-components/calendar/calendar.module.less":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"._Yx3J1X_az5S6d_cfFDC {\n  padding: 0 0.25rem;\n}\n.emIA5rj0l0He7Mp0UjSA {\n  width: 100%;\n  max-width: var(--common-block-width-narrow);\n  margin: 0 auto;\n}\n@media (min-width: 48rem) {\n  .emIA5rj0l0He7Mp0UjSA {\n    min-width: var(--foundation-block-width-5);\n  }\n}\n.lTskm09IEZVtD_60rzcr {\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n.USIJsV1luGRtEgTKsZUz {\n  background: none;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.c5WF3Q8ttnXmdfOeOSTf {\n  font-size: 1.875rem;\n  transition: color 0.3s;\n}\n.SkAPKYzPKb69sKQqdaK3 {\n  color: var(--foundation-color-primary-300);\n}\n.b40pX3naqDnOS8ehWpPQ {\n  text-transform: capitalize;\n  padding: 0.5rem;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid var(--foundation-color-primary-600);\n  border-radius: 0.25rem;\n}\n.CGVPXf8oXcJhaonnLYvv {\n  display: none;\n}\n.p42C4FzKAd6IS470bv0r {\n  margin-bottom: 0.5rem;\n}\n.XxUIz15p_BiaRxOCE5ue {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n}\n.TL7mqSMTZ2hLijAK1rBi {\n  width: 100%;\n  display: flex;\n}\n.TL7mqSMTZ2hLijAK1rBi .UrYhgzfwxJqXxXvhczuY {\n  flex-grow: 1;\n  flex-basis: 0;\n  flex-shrink: 0;\n}\n.UrYhgzfwxJqXxXvhczuY {\n  font-weight: 400;\n  text-transform: lowercase;\n}\n.pxA8gI27h598lMEgtIWK {\n  display: flex;\n  gap: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.YK67_u1QGhquhtDdSjYj {\n  height: 3rem;\n  flex: 1;\n}\n.oAXfyxqEiq6X69c056ZF {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.oAXfyxqEiq6X69c056ZF .q2xcQrYxnNhp0bBWwVe2 {\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-radius: 0.25rem;\n  color: var(--foundation-color-primary-100);\n  background-color: var(--foundation-color-primary-700);\n  transition: background-color 0.5s;\n}\n.oAXfyxqEiq6X69c056ZF .q2xcQrYxnNhp0bBWwVe2:hover {\n  background-color: var(--foundation-color-primary-300);\n  color: var(--foundation-color-primary-900);\n}\n.oAXfyxqEiq6X69c056ZF .q2xcQrYxnNhp0bBWwVe2.g9KIIIFS4MvPNinwzIEA,\n.oAXfyxqEiq6X69c056ZF .q2xcQrYxnNhp0bBWwVe2:disabled {\n  background-color: transparent;\n  color: var(--foundation-color-primary-900);\n}\n.oAXfyxqEiq6X69c056ZF .q2xcQrYxnNhp0bBWwVe2:disabled,\n.oAXfyxqEiq6X69c056ZF .q2xcQrYxnNhp0bBWwVe2.pTFXdiUWvzbrimzXzdIO {\n  cursor: default;\n}\n.oAXfyxqEiq6X69c056ZF .x2jafM57AS541PfhQOc8 {\n  visibility: hidden;\n}\n.rCdtzEyOI0RVUlfUO6EI {\n  cursor: pointer;\n  height: 1.75rem;\n  width: 1.75rem;\n  font-weight: 400;\n  font-size: 1rem;\n  background: var(--foundation-color-primary-900);\n  color: var(--foundation-color-primary-100);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  z-index: 2;\n}\n.ab9zGctP4WPFIXocM7iJ {\n  cursor: pointer;\n}\n","",{version:3,sources:["webpack://./src/components/shared-components/calendar/calendar.module.less"],names:[],mappings:"AAEA;EACE,kBAAA;AADF;AAIA;EACE,WAAA;EACA,2CAAA;EACA,cAAA;AAFF;AAIE;EAAA;IACE,0CAAA;EADF;AACF;AAIA;EACE,WAAA;EACA,aAAA;EACA,cAAA;EACA,8BAAA;AAFF;AAKA;EACE,gBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAHF;AAMA;EACE,mBAAA;EACA,sBAAA;AAJF;AAOA;EACE,0CAAA;AALF;AAQA;EACE,0BAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,qDAAA;EACA,sBAAA;AANF;AASA;EACE,aAAA;AAPF;AAUA;EACE,qBAAA;AARF;AAWA;EACE,WAAA;EACA,aAAA;EACA,iBAAA;AATF;AAYA;EACE,WAAA;EACA,aAAA;AAVF;AAQA;EAKI,YAAA;EACA,aAAA;EACA,cAAA;AAVJ;AAcA;EACE,gBAAA;EACA,yBAAA;AAZF;AAeA;EACE,aAAA;EACA,YAAA;EACA,uBAAA;AAbF;AAgBA;EACE,YAAA;EACA,OAAA;AAdF;AAiBA;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAfF;AASA;EASI,WAAA;EACA,YAAA;EACA,YAAA;EACA,sBAAA;EACA,0CAAA;EACA,qDAAA;EACA,iCAAA;AAfJ;AAiBI;EACE,qDAAA;EACA,0CAAA;AAfN;AAkBI;;EAEE,6BAAA;EACA,0CAAA;AAhBN;AAkBI;;EAEE,eAAA;AAhBN;AAbA;EAkCI,kBAAA;AAlBJ;AAsBA;EACE,eAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,+CAAA;EACA,0CAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;AApBF;AAuBA;EACE,eAAA;AArBF",sourcesContent:['@import "../../../styling/break-points.less";\n\n.outer-wrapper {\n  padding: 0 0.25rem;\n}\n\n.inner-wrapper {\n  width: 100%;\n  max-width: var(--common-block-width-narrow);\n  margin: 0 auto;\n\n  @media @medium {\n    min-width: var(--foundation-block-width-5);\n  }\n}\n\n.month-selection-wrapper {\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n\n.month-selection-arrow-button {\n  background: none;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.month-selection-arrow {\n  font-size: 1.875rem;\n  transition: color 0.3s;\n}\n\n.disabled-icon {\n  color: var(--foundation-color-primary-300);\n}\n\n.month-selection-option {\n  text-transform: capitalize;\n  padding: 0.5rem;\n  font-size: 18px;\n  font-weight: 700;\n  border: 2px solid var(--foundation-color-primary-600);\n  border-radius: 0.25rem;\n}\n\n.caption-label {\n  display: none;\n}\n\n.caption {\n  margin-bottom: 0.5rem;\n}\n\n.table {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n}\n\n.head-row {\n  width: 100%;\n  display: flex;\n\n  .head-cell {\n    flex-grow: 1;\n    flex-basis: 0; //makes all flex items to have the same initial size\n    flex-shrink: 0;\n  }\n}\n\n.head-cell {\n  font-weight: 400;\n  text-transform: lowercase;\n}\n\n.row {\n  display: flex;\n  gap: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.cell {\n  height: 3rem;\n  flex: 1;\n}\n\n.day-button-wrapper {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .day {\n    width: 100%;\n    height: 100%;\n    border: none;\n    border-radius: 0.25rem;\n    color: var(--foundation-color-primary-100);\n    background-color: var(--foundation-color-primary-700);\n    transition: background-color 0.5s;\n\n    &:hover {\n      background-color: var(--foundation-color-primary-300);\n      color: var(--foundation-color-primary-900);\n    }\n\n    &.closed-date,\n    &:disabled {\n      background-color: transparent;\n      color: var(--foundation-color-primary-900);\n    }\n    &:disabled,\n    &.disabled-day {\n      cursor: default;\n    }\n  }\n\n  .day-outside {\n    visibility: hidden;\n  }\n}\n\n.selected-date-marker {\n  cursor: pointer;\n  height: 1.75rem;\n  width: 1.75rem;\n  font-weight: 400;\n  font-size: 1rem;\n  background: var(--foundation-color-primary-900);\n  color: var(--foundation-color-primary-100);\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  z-index: 2;\n}\n\n.button {\n  cursor: pointer;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"outer-wrapper":"_Yx3J1X_az5S6d_cfFDC",outerWrapper:"_Yx3J1X_az5S6d_cfFDC","inner-wrapper":"emIA5rj0l0He7Mp0UjSA",innerWrapper:"emIA5rj0l0He7Mp0UjSA","month-selection-wrapper":"lTskm09IEZVtD_60rzcr",monthSelectionWrapper:"lTskm09IEZVtD_60rzcr","month-selection-arrow-button":"USIJsV1luGRtEgTKsZUz",monthSelectionArrowButton:"USIJsV1luGRtEgTKsZUz","month-selection-arrow":"c5WF3Q8ttnXmdfOeOSTf",monthSelectionArrow:"c5WF3Q8ttnXmdfOeOSTf","disabled-icon":"SkAPKYzPKb69sKQqdaK3",disabledIcon:"SkAPKYzPKb69sKQqdaK3","month-selection-option":"b40pX3naqDnOS8ehWpPQ",monthSelectionOption:"b40pX3naqDnOS8ehWpPQ","caption-label":"CGVPXf8oXcJhaonnLYvv",captionLabel:"CGVPXf8oXcJhaonnLYvv",caption:"p42C4FzKAd6IS470bv0r",table:"XxUIz15p_BiaRxOCE5ue","head-row":"TL7mqSMTZ2hLijAK1rBi",headRow:"TL7mqSMTZ2hLijAK1rBi","head-cell":"UrYhgzfwxJqXxXvhczuY",headCell:"UrYhgzfwxJqXxXvhczuY",row:"pxA8gI27h598lMEgtIWK",cell:"YK67_u1QGhquhtDdSjYj","day-button-wrapper":"oAXfyxqEiq6X69c056ZF",dayButtonWrapper:"oAXfyxqEiq6X69c056ZF",day:"q2xcQrYxnNhp0bBWwVe2","closed-date":"g9KIIIFS4MvPNinwzIEA",closedDate:"g9KIIIFS4MvPNinwzIEA","disabled-day":"pTFXdiUWvzbrimzXzdIO",disabledDay:"pTFXdiUWvzbrimzXzdIO","day-outside":"x2jafM57AS541PfhQOc8",dayOutside:"x2jafM57AS541PfhQOc8","selected-date-marker":"rCdtzEyOI0RVUlfUO6EI",selectedDateMarker:"rCdtzEyOI0RVUlfUO6EI",button:"ab9zGctP4WPFIXocM7iJ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);