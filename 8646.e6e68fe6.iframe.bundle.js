"use strict";(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[8646],{"./src/helpers/date-helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bq:()=>createDate,ZG:()=>getFirstAndLastDayOf42DayCalendar,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var dayjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__),dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/dayjs/plugin/customParseFormat.js"),dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__),dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/dayjs/plugin/isBetween.js"),dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_2__),dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/dayjs/plugin/updateLocale.js"),dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_3__),lodash_es__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lodash-es/parseInt.js"),_language_helper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/helpers/language-helper.ts");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_2___default()),dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend(dayjs_plugin_updateLocale__WEBPACK_IMPORTED_MODULE_3___default()),dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1___default()),dayjs__WEBPACK_IMPORTED_MODULE_0___default().updateLocale("en",{months:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]});const __WEBPACK_DEFAULT_EXPORT__=new(function(){function DateHelper(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DateHelper)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DateHelper,[{key:"toStringYYYYMMDD",value:function toStringYYYYMMDD(date){return date?dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("YYYY-MM-DD"):""}},{key:"toStringDDMMYYYY",value:function toStringDDMMYYYY(date){return date?dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("DD-MM-YYYY"):""}},{key:"getEndOfYearDate",value:function getEndOfYearDate(){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().endOf("year").toDate()}},{key:"getStartOfYearDate",value:function getStartOfYearDate(){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().startOf("year").toDate()}},{key:"addDays",value:function addDays(date,days){var result=createDate(date);return result.setDate(result.getDate()+days),result}},{key:"getModifiedDateByMonth",value:function getModifiedDateByMonth(date,monthChange){var newDate=createDate(date);return newDate.setDate(1),-1===monthChange?newDate.setDate(0):newDate.setMonth(newDate.getMonth()+monthChange),newDate}},{key:"toStringTimeHHMM",value:function toStringTimeHHMM(date){return date?dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("HH:mm"):""}},{key:"toStringNonLocalTimeHHMM",value:function toStringNonLocalTimeHHMM(date){return date&&dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).isValid()?dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("HH:mm"):""}},{key:"toStringTimeYYYYMMDDHHMM",value:function toStringTimeYYYYMMDDHHMM(date){return date&&dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).isValid()?dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("YYYY-MM-DDTHH:mm"):""}},{key:"toStringMMMYYYY",value:function toStringMMMYYYY(date){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("MMM YYYY")}},{key:"toStringDD",value:function toStringDD(date){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).toDate().toLocaleDateString(_language_helper__WEBPACK_IMPORTED_MODULE_4__.Z.currentLocale,{weekday:"short"})}},{key:"toStringMMDDWeekday",value:function toStringMMDDWeekday(date){return date?dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).toDate().toLocaleDateString(_language_helper__WEBPACK_IMPORTED_MODULE_4__.Z.currentLocale,{month:"long",day:"numeric",weekday:"long"}):""}},{key:"toStringWeekdayDDMonthYear",value:function toStringWeekdayDDMonthYear(date){return date?dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).toDate().toLocaleDateString(_language_helper__WEBPACK_IMPORTED_MODULE_4__.Z.currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}):""}},{key:"toStringDDMonth",value:function toStringDDMonth(date){return date?dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).toDate().toLocaleDateString(_language_helper__WEBPACK_IMPORTED_MODULE_4__.Z.currentLocale,{day:"numeric",month:"long"}):""}},{key:"toStringDDShortMonth",value:function toStringDDShortMonth(date){return date?dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).toDate().toLocaleDateString(_language_helper__WEBPACK_IMPORTED_MODULE_4__.Z.currentLocale,{day:"numeric",month:"short"}):""}},{key:"toStringDDMonthYear",value:function toStringDDMonthYear(date){return date instanceof Date?date.toLocaleDateString(_language_helper__WEBPACK_IMPORTED_MODULE_4__.Z.currentLocale,{day:"numeric",month:"short",year:"numeric"}):""}},{key:"toStringDDMMHHMM",value:function toStringDDMMHHMM(date){return date instanceof Date?date.toLocaleTimeString(_language_helper__WEBPACK_IMPORTED_MODULE_4__.Z.currentLocale,{day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"}):""}},{key:"hasDatePassed",value:function hasDatePassed(date){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,offsetUnit=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,dateToCheck=offset>0&&offsetUnit?dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).add(offset,offsetUnit):dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date);return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().isAfter(dateToCheck,offsetUnit)}},{key:"hasTimePassedToday",value:function hasTimePassedToday(time){var now=dayjs__WEBPACK_IMPORTED_MODULE_0___default()(),_time$split2=_slicedToArray(time.split(":"),2),hour=_time$split2[0],minute=_time$split2[1],hourNumber=(0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.Z)(hour,10),minuteNumber=(0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.Z)(minute,10),eventTime=dayjs__WEBPACK_IMPORTED_MODULE_0___default()().hour(hourNumber).minute(minuteNumber);return now.isAfter(eventTime)}},{key:"isDatePassed",value:function isDatePassed(date){var offsetInMinutes=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,dateWithOffset=createDate(date);return dateWithOffset.setMinutes(dateWithOffset.getMinutes()+offsetInMinutes),dateWithOffset<createDate()}},{key:"minutesPassedSinceDate",value:function minutesPassedSinceDate(date){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().diff(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date),"minutes")}},{key:"isEqualLocaleDateStringYYYYMMDD",value:function isEqualLocaleDateStringYYYYMMDD(date1,date2){return!(!this.isDateValid(date1)||!this.isDateValid(date2))&&date1.toLocaleDateString(_language_helper__WEBPACK_IMPORTED_MODULE_4__.Z.currentLocale)===date2.toLocaleDateString(_language_helper__WEBPACK_IMPORTED_MODULE_4__.Z.currentLocale)}},{key:"isEqualYYYYMMDDHHMM",value:function isEqualYYYYMMDDHHMM(date1,date2){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date1).isSame(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date2),"minute")}},{key:"isTodayInDateSpan",value:function isTodayInDateSpan(dateFrom,dateTo){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().isBetween(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateFrom),dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateTo),"day","[]")}},{key:"isDateInDateSpan",value:function isDateInDateSpan(date,dateSpanFrom,dateSpanTo){var granularity=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"second";return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).isBetween(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateSpanFrom),dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateSpanTo),granularity,"[]")}},{key:"isToday",value:function isToday(date){return this.isEqualYYYYMMDD(date,dayjs__WEBPACK_IMPORTED_MODULE_0___default()())}},{key:"isEqualYYYYMMDD",value:function isEqualYYYYMMDD(date1,date2){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date1).isSame(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date2),"date")}},{key:"isEqualYYYYMM",value:function isEqualYYYYMM(date1,date2){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date1).isSame(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date2),"month")}},{key:"isLessThanYYYYMM",value:function isLessThanYYYYMM(date1,date2){return date1 instanceof Date&&date2 instanceof Date&&(date1.getFullYear()<=date2.getFullYear()&&date1.getMonth()<date2.getMonth())}},{key:"isLessThanYYYYMMDD",value:function isLessThanYYYYMMDD(date1,date2){var date1AsDayJs=dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date1),date2AsDayJs=dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date2);return date1AsDayJs.isBefore(date2AsDayJs,"day")}},{key:"isGreaterThanYYYYMM",value:function isGreaterThanYYYYMM(date1,date2){return date1 instanceof Date&&date2 instanceof Date&&(date1.getFullYear()>=date2.getFullYear()&&date1.getMonth()>date2.getMonth())}},{key:"getNumericTimeFromDate",value:function getNumericTimeFromDate(date){if(!this.isDateValid(date))return null;var hourAndMintes=("0"+date.getHours()).slice(-2)+""+("0"+date.getMinutes()).slice(-2);return(0,lodash_es__WEBPACK_IMPORTED_MODULE_5__.Z)(hourAndMintes)}},{key:"isBefore",value:function isBefore(date1,date2){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date1).isBefore(date2)}},{key:"isAfter",value:function isAfter(date1,date2){return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date1).isAfter(date2)}},{key:"compareDates",value:function compareDates(dateA,dateB){return dateA>dateB?1:dateB>dateA?-1:0}},{key:"isDateValid",value:function isDateValid(date,format){return!!date&&dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date,format).isValid()}},{key:"addMinutes",value:function addMinutes(date,minutes){if(!this.isDateValid(date))return null;var parsedDate=createDate(date);return createDate(parsedDate.getTime()+6e4*minutes)}},{key:"getTimestamp",value:function getTimestamp(minutes){return this.addMinutes(createDate(),minutes).getTime()}},{key:"getAge",value:function getAge(birthDate){if(!birthDate)return null;return Math.floor((createDate().getTime()-createDate(birthDate).getTime())/315576e5)}}]),DateHelper}());var createDate=function createDate(){var dateInfo=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,format=arguments.length>1?arguments[1]:void 0;return dateInfo?dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateInfo,format).toDate():dayjs__WEBPACK_IMPORTED_MODULE_0___default()().toDate()},getDatesForMonth=function getDatesForMonth(year,month){var daysInMonth=getAmountOfDaysInMonth(year,month),firstDayInMonth=new Date(year,month,1),lastDayInMonth=new Date(year,month,daysInMonth);return getDatesFromInterval(firstDayInMonth,lastDayInMonth)},getDatesFromInterval=function getDatesFromInterval(startDate,endDate){for(var dates=[],startCopy=new Date(startDate),endCopy=new Date(endDate);startCopy<endCopy;)dates.push(new Date(startCopy)),startCopy.setDate(startCopy.getDate()+1);return dates.push(endCopy),dates},getAmountOfDaysInMonth=function getAmountOfDaysInMonth(year,month){return 32-new Date(year,month,32).getDate()},getFirstAndLastDayOf42DayCalendar=function getFirstAndLastDayOf42DayCalendar(selectedMonth){var lastDayOfPrevMonth=new Date(selectedMonth);lastDayOfPrevMonth.setDate(0);var allDatesOfPrevMonth=getDatesForMonth(lastDayOfPrevMonth.getFullYear(),lastDayOfPrevMonth.getMonth()),allDatesOfSelectedMonth=getDatesForMonth(selectedMonth.getFullYear(),selectedMonth.getMonth()),firstDayOfSelectedMonth=allDatesOfSelectedMonth[0],dayIndex=function getWeekdayIndex(date){var day=date.getDay();return day-(0===day?-7:0)}(firstDayOfSelectedMonth),prevMonthInView=allDatesOfPrevMonth.slice(allDatesOfPrevMonth.length-dayIndex+1,allDatesOfPrevMonth.length),firstDayInView=prevMonthInView.length>0?prevMonthInView[0]:firstDayOfSelectedMonth,nextMonth=dayjs__WEBPACK_IMPORTED_MODULE_0___default()(selectedMonth).add(1,"month"),allDatesOfNextMonth=getDatesForMonth(nextMonth.year(),nextMonth.month()),lastDayInView=[].concat(_toConsumableArray(prevMonthInView),_toConsumableArray(allDatesOfSelectedMonth),_toConsumableArray(allDatesOfNextMonth)).slice(0,42)[41],startOfDayToday=dayjs__WEBPACK_IMPORTED_MODULE_0___default()().startOf("day").toDate();return startOfDayToday>=firstDayInView&&startOfDayToday<=lastDayInView&&(firstDayInView=startOfDayToday),{firstDayInView,lastDayInView}}},"./src/helpers/language-helper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=new(function(){function LanguageHelper(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,LanguageHelper),this.currentLocale="sv",this.locales=[]}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(LanguageHelper,[{key:"setLocale",value:function setLocale(locale){this.currentLocale=locale}},{key:"getCurrentLocale",value:function getCurrentLocale(){return this.currentLocale}},{key:"setAvailableLanguages",value:function setAvailableLanguages(locales){this.locales=locales}},{key:"getAllLanguages",value:function getAllLanguages(){return this.locales}}]),LanguageHelper}())}}]);