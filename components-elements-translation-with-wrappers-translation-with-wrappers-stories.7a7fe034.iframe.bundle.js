"use strict";(self.webpackChunk_parksandresorts_core=self.webpackChunk_parksandresorts_core||[]).push([[3176],{"./src/components/elements/translation-with-wrappers/translation-with-wrappers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>TranslationWithWrappers});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TranslationWithWrappers(_ref){var label=_ref.label,interpolation=_ref.interpolation,wrappers=_ref.wrappers,t=(0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.$G)().t,toKey=function toKey(key){return"{{".concat(key,"}}")},text=t(label,Object.fromEntries(Object.keys(null!=interpolation?interpolation:{}).map((function(key){return[key,wrappers[key]?toKey(key):interpolation[key]]})))),elements=Object.entries(wrappers).reduce((function(nodes,_ref2){var _ref3=_slicedToArray(_ref2,2),key=_ref3[0],wrapper=_ref3[1];return nodes.flatMap((function(node,nodeIndex){return"string"==typeof node&&wrapper?node.split(toKey(key)).flatMap((function(part,partIndex){if(0===partIndex)return part;var fragmentKey="".concat(key,"_").concat(nodeIndex,"_").concat(partIndex);return[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:wrapper(interpolation[key])},fragmentKey),part]})):node}))}),[text]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:elements})}try{TranslationWithWrappers.displayName="TranslationWithWrappers",TranslationWithWrappers.__docgenInfo={description:"",displayName:"TranslationWithWrappers",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"enum",value:[{value:'"length"'},{value:'"image"'},{value:'"activate"'},{value:'"card"'},{value:'"cardNumber"'},{value:'"day"'},{value:'"morning"'},{value:'"afternoon"'},{value:'"night"'},{value:'"from"'},{value:'"guest"'},{value:'"month"'},{value:'"of"'},{value:'"promoCode"'},{value:'"year"'},{value:'"minutesAndSeconds"'},{value:'"seconds"'},{value:'"cancel"'},{value:'"change"'},{value:'"confirmDetails"'},{value:'"copied"'},{value:'"getting"'},{value:'"hideDetails"'},{value:'"loading"'},{value:'"modify"'},{value:'"no"'},{value:'"okay"'},{value:'"readLess"'},{value:'"readMore"'},{value:'"remove"'},{value:'"save"'},{value:'"showDetails"'},{value:'"showLess"'},{value:'"somethingWentWrong"'},{value:'"toPage"'},{value:'"tryAgain"'},{value:'"yes"'},{value:'"fetchingProducts"'},{value:'"back"'},{value:'"continue"'},{value:'"next"'},{value:'"nextStep"'},{value:'"previous"'},{value:'"add"'},{value:'"added"'},{value:'"addedToCartBody"'},{value:'"addedToCartHeadline"'},{value:'"adding"'},{value:'"addingToCart"'},{value:'"addToCart"'},{value:'"adult_one"'},{value:'"adult_other"'},{value:'"adult_zero"'},{value:'"amount"'},{value:'"baby_one"'},{value:'"baby_other"'},{value:'"baby_zero"'},{value:'"category_barn"'},{value:'"category_vuxen"'},{value:'"child_one"'},{value:'"child_other"'},{value:'"child_zero"'},{value:'"chooseAmount"'},{value:'"continueShopping"'},{value:'"currencyPerUnit"'},{value:'"defaultProductUnit"'},{value:'"digital"'},{value:'"elderly_one"'},{value:'"elderly_other"'},{value:'"elderly_zero"'},{value:'"errorGetPurchaseFlow"'},{value:'"fetchingPrice"'},{value:'"goToCheckout"'},{value:'"goToPayment"'},{value:'"jetpass"'},{value:'"loadingPurchaseFlow"'},{value:'"numberOfTickets"'},{value:'"perPerson"'},{value:'"pieces_one"'},{value:'"pieces_other"'},{value:'"pieces_zero"'},{value:'"physical"'},{value:'"preparingProducts"'},{value:'"shipping"'},{value:'"summary"'},{value:'"toCheckout"'},{value:'"total"'},{value:'"address"'},{value:'"city"'},{value:'"dateOfBirth"'},{value:'"email"'},{value:'"firstName"'},{value:'"lastName"'},{value:'"phone"'},{value:'"postalCode"'},{value:'"formCouldNotSendAnswers"'},{value:'"formErrorDialogOkLabel"'},{value:'"formSomethingWentWrong"'},{value:'"imageChange"'},{value:'"imageChosen"'},{value:'"inputPlaceholderPromoCode"'},{value:'"mandatory"'},{value:'"selectBoxPickAlternative"'},{value:'"tryWithOtherInfo"'},{value:'"inputPlaceholderAdress"'},{value:'"inputPlaceholderCity"'},{value:'"inputPlaceholderDay"'},{value:'"inputPlaceholderEmail"'},{value:'"inputPlaceholderFirstName"'},{value:'"inputPlaceholderLastName"'},{value:'"inputPlaceholderMonth"'},{value:'"inputPlaceholderPhone"'},{value:'"inputPlaceholderPostalCode"'},{value:'"inputPlaceholderYear"'},{value:'"inputValidationDateOfBirth"'},{value:'"inputValidationEmail"'},{value:'"inputValidationImageID"'},{value:'"inputValidationPhone"'},{value:'"inputValidationPostalCode"'},{value:'"inputValidationRequired"'},{value:'"inputValidationNoValue"'},{value:'"invalidEmail"'},{value:'"invalidDateOfBirth"'},{value:'"invalidPhone"'},{value:'"invalidPostalCode"'},{value:'"availableTickets"'},{value:'"attractions"'},{value:'"bookNow"'},{value:'"calendarFooterNextOpenDay"'},{value:'"calendarFooterOpenToday"'},{value:'"calendarOpeningTimes"'},{value:'"chosenTime"'},{value:'"concertCanceledLabel"'},{value:'"concertInformationHeadline"'},{value:'"dailyActivities"'},{value:'"dailyInformationHeadline"'},{value:'"eventRowCancelledLabelText"'},{value:'"loadingTimes"'},{value:'"location"'},{value:'"noJetpassForToday"'},{value:'"noSpotsForTimeBody"'},{value:'"noSpotsForTimeHeading"'},{value:'"noTimeSlotsForDay"'},{value:'"noTimeslotsText"'},{value:'"parkClosedHeading"'},{value:'"parkClosedNextOpenDateLabel"'},{value:'"parkClosesBetweenPasses"'},{value:'"passedTime"'},{value:'"queueMinutes"'},{value:'"queueTime"'},{value:'"queueTimeStoppage"'},{value:'"restaurants"'},{value:'"scheduleRowCancelled"'},{value:'"scheduleRowClosedToday"'},{value:'"scheduleRowOpen"'},{value:'"showMoreTimes"'},{value:'"soldOut"'},{value:'"soldOutToday"'},{value:'"sortByActivityLabel"'},{value:'"sortByTimeLabel"'},{value:'"startingNow"'},{value:'"time"'},{value:'"timeLeftToEvent_one"'},{value:'"timeLeftToEvent_other"'},{value:'"timeLeftToEvent_zero"'},{value:'"todaysEvents"'},{value:'"searchRestaurantEmptyResult"'},{value:'"searchRestaurantInputLabel"'},{value:'"searchRestaurantInputPlaceholder"'},{value:'"searchRestaurantResultInfo"'},{value:'"searchRestaurantResults"'},{value:'"restaurantWaitTimeLabelPrefix"'},{value:'"restaurantWaitTimeFullQueue"'},{value:'"restaurantWaitTimeModalHeaderFullQueue"'},{value:'"restaurantWaitTimeModalHeaderLongQueue"'},{value:'"restaurantWaitTimePaused"'},{value:'"restaurantGoBack"'},{value:'"restaurantContinue"'},{value:'"restaurantFilterButtonWithActiveFilters_zero"'},{value:'"restaurantFilterButtonWithActiveFilters_one"'},{value:'"restaurantFilterButtonWithActiveFilters_other"'},{value:'"restaurantFilterNoResultHeadline"'},{value:'"restaurantFilterNoResultClearFilters"'},{value:'"restaurantFilterChoseMany"'},{value:'"restaurantFilterNumberOfHits"'},{value:'"restaurantFilterClearFilter"'},{value:'"restaurantFilterDoFilter"'},{value:'"completeSeasonPassInfo"'},{value:'"convertToNewCard"'},{value:'"getSeasonPassInfo"'},{value:'"gettingSeasonPass"'},{value:'"imageID"'},{value:'"imageIDHelperText"'},{value:'"imageIDUpload"'},{value:'"reactivate"'},{value:'"reactivatePassDuplicateHeading"'},{value:'"reactivatePassDuplicateText"'},{value:'"reactivatePassCannotReactivateHeading"'},{value:'"reactivatePassCannotReactivateText"'},{value:'"reactivatePassMustCompleteHeading"'},{value:'"reactivatePassMustCompleteText"'},{value:'"reactivatePassNotFoundHeading"'},{value:'"reactivatePassNotFoundText"'},{value:'"reactivatePromptHeading"'},{value:'"reactivateSelectQuantityHeading"'},{value:'"reactivation"'},{value:'"seasonPassGroupInputLabelShowMore"'},{value:'"seasonPassGroupInputLabelShowLess"'},{value:'"seasonPassToggleSingleMultiPass"'},{value:'"seasonPassChooseForAll"'},{value:'"remainingWaitingRoomTime"'},{value:'"stepWrapperBookedExperiences_one"'},{value:'"stepWrapperBookedExperiences_other"'},{value:'"stepWrapperBookedExperiences_zero"'},{value:'"stepWrapperBookedJetPasses"'},{value:'"stepWrapperGoTo"'},{value:'"stepWrapperJetPassLimitExceeded"'},{value:'"stepWrapperSelectedTickets_one"'},{value:'"stepWrapperSelectedTickets_other"'},{value:'"stepWrapperSelectedTickets_zero"'},{value:'"stepWrapperCheckoutPaymentDisabledText"'},{value:'"stepWrapperCheckoutShippingDisabledText"'},{value:'"stepWrapperGroupSizeDisabledText"'},{value:'"stepWrapperSelectDateDisabledText"'},{value:'"stepWrapperSelectEntryTimeDisabledText"'},{value:'"stepWrapperSelectJetpassDisabledText"'},{value:'"stepWrapperSelectMandatoryJetpassDisabledText"'},{value:'"stepWrapperSelectTicketDisabledText"'},{value:'"stepWrapperUpsellDisabledText"'},{value:'"stepWrapperSummaryDisabledText"'},{value:'"groupSizeStepDialogBodyText"'},{value:'"groupSizeStepDialogConfirmChange"'},{value:'"groupSizeStepDialogHeading"'},{value:'"groupSizeStepSummary"'},{value:'"groupSizeStepTitle"'},{value:'"groupSizeStepWarningNotEnoughVisitorsSelectedBodyText"'},{value:'"groupSizeStepWarningNotEnoughVisitorsSelectedTitle"'},{value:'"groupSizeStepWarningNotIndependentBodyText"'},{value:'"groupSizeStepWarningNotIndependentTitle"'},{value:'"calendarStepDailyInformationLinkText"'},{value:'"calendarStepDailyInformationOpeningTimes"'},{value:'"calendarStepDialogChangeDateBodyText"'},{value:'"calendarStepDialogChangeDateHeading"'},{value:'"calendarStepDialogChangeVariantBodyText"'},{value:'"calendarStepDialogChangeVariantHeading"'},{value:'"calendarStepDialogConfirmChangeDate"'},{value:'"calendarStepDialogConfirmChangeVariant"'},{value:'"calendarStepEventDescriptionText"'},{value:'"calendarStepPriceLegendHeading"'},{value:'"calendarStepPriceLegendHeadingHighestPrice"'},{value:'"calendarStepCalendarWarningNoDatePickedBodyText"'},{value:'"calendarStepCalendarWarningNoDatePickedTitle"'},{value:'"calendarStepCalendarWarningNotAvailableTitle"'},{value:'"calendarStepCalendarWarningVariantBodyTextMultipleDays"'},{value:'"calendarStepCalendarWarningVariantBodyTextSingleDay"'},{value:'"calendarStepCalendarWarningVariantTitle"'},{value:'"calendarStepTitle"'},{value:'"calendarStepVariantSelectionHeading"'},{value:'"selectEntryTimeStepDescription"'},{value:'"selectEntryTimeStepDescriptionMultipleDays"'},{value:'"selectEntryTimeStepDialogChangeBodyText"'},{value:'"selectEntryTimeStepDialogConfirmChange"'},{value:'"selectEntryTimeStepDialogHeadingText"'},{value:'"selectEntryTimeStepErrorGetEntryTimes"'},{value:'"selectEntryTimeStepLoadingEntryTimes"'},{value:'"selectEntryTimeStepTitle"'},{value:'"selectTicketStepDialogBodyText"'},{value:'"selectTicketStepDialogConfirmChange"'},{value:'"selectTicketStepDialogHeading"'},{value:'"selectTicketStepHeadlineInfo"'},{value:'"selectTicketStepHeadlineText"'},{value:'"selectTicketStepHighEntranceInformation"'},{value:'"selectTicketStepHighEntrancePassed"'},{value:'"selectTicketStepHighEntranceTitle"'},{value:'"selectTicketStepJetpassesIncluded"'},{value:'"selectTicketStepSoldOutProduct"'},{value:'"selectTicketStepTitle"'},{value:'"selectTicketStepWarningBodyText"'},{value:'"selectTicketStepWarningTitle"'},{value:'"selectTicketStepYouHaveNotChosenTicketsFor"'},{value:'"selectMandatoryJetpassStepTitle"'},{value:'"selectMandatoryJetpassStepChoice"'},{value:'"selectMandatoryJetpassStepChoose"'},{value:'"selectMandatoryJetpassStepSpotsLeft_one"'},{value:'"selectMandatoryJetpassStepSpotsLeft_other"'},{value:'"selectJetpassSelectRides"'},{value:'"selectJetpassSelectRidesLater"'},{value:'"selectJetpassStepDescription"'},{value:'"selectJetpassStepDescriptionTooManyGuests"'},{value:'"selectJetpassStepHeading"'},{value:'"selectJetpassStepHeadingTooManyGuests"'},{value:'"selectJetpassStepTerms"'},{value:'"selectJetpassStepTermsTooManyGuests"'},{value:'"selectJetpassStepTitle"'},{value:'"upsellStepChooseATime"'},{value:'"upsellStepDescription"'},{value:'"upsellStepGenericProductName"'},{value:'"upsellStepHeading"'},{value:'"upsellStepNearestAvailableTimeSlot"'},{value:'"upsellStepNearestAvailableTimeSlotHeading"'},{value:'"upsellStepNoProductsDescription"'},{value:'"upsellStepTitle"'},{value:'"upsellStepSomethingWentWrong"'},{value:'"summaryStepAddOns"'},{value:'"summaryStepEntry"'},{value:'"summaryStepEntryTickets"'},{value:'"summaryStepIntroText"'},{value:'"summaryStepJetpasses"'},{value:'"summaryStepPieces_one"'},{value:'"summaryStepPieces_other"'},{value:'"summaryStepPieces_zero"'},{value:'"summaryStepTitle"'},{value:'"checkoutErrorMessage"'},{value:'"checkoutPaymentStepTitle"'},{value:'"checkoutPurchaseConfirmationBody"'},{value:'"checkoutPurchaseConfirmationHeader"'},{value:'"checkoutPurchaseConfirmationOrderDate"'},{value:'"checkoutPurchaseConfirmationOrderNumber"'},{value:'"checkoutPurchaseConfirmationProducts"'},{value:'"checkoutPurchaseConfirmationSum"'},{value:'"checkoutPurchaseConfirmationVisitDate"'},{value:'"checkoutShippingStepTitle"'},{value:'"creatingCart"'},{value:'"loadingConfirmation"'},{value:'"myParksButtonLabel"'},{value:'"saveCardInformation"'},{value:'"shippingChangeUser"'},{value:'"shippingErrorEmailBody"'},{value:'"shippingErrorEmailTitle"'},{value:'"shippingErrorPhoneBody"'},{value:'"shippingErrorPhoneInvalidBody"'},{value:'"shippingErrorPhoneInvalidTitle"'},{value:'"shippingErrorPhoneTitle"'},{value:'"shippingErrorPinInvalidBody"'},{value:'"shippingErrorPinInvalidTitle"'},{value:'"shippingIntroText"'},{value:'"shippingLoggedInAs"'},{value:'"shippingLoginBody"'},{value:'"shippingLoginTitle"'},{value:'"shippingNoEmail"'},{value:'"shippingNoPhoneNumber"'},{value:'"shippingPinBody"'},{value:'"shippingPinCancel"'},{value:'"shippingPinLabel"'},{value:'"shippingPinPlaceholder"'},{value:'"shippingPinSubmit"'},{value:'"shippingPinTitle"'},{value:'"shippingSendPin"'},{value:'"staffQueueDisplayHeader"'},{value:'"staffQueueDisplaySort"'},{value:'"staffQueueDisplayShowAll"'},{value:'"staffQueueDisplayShowRestaurants"'},{value:'"staffQueueDisplayShowAttractions"'},{value:'"staffQueueDisplayHideClosed"'},{value:'"staffQueueDisplaySortOrderLongestWaitTime"'},{value:'"staffQueueDisplaySortOrderShortestWaitTime"'},{value:'"staffQueueDisplaySortOrderAlphabeticalAscending"'},{value:'"staffQueueDisplaySortOrderAlphabeticalDescending"'},{value:'"staffQueueDisplayOrdersInQueue"'},{value:'"staffQueueDisplayPlaceClosed"'},{value:'"staffQueueDisplayScrollToTop"'},{value:'"staffQueueDisplayClosedNotOpenYet"'},{value:'"staffQueueDisplayClosedAlreadyClosed"'},{value:'"queueTimeExpectedTimeSwedish"'},{value:'"queueTimePageSwedish"'},{value:'"queueTimeNextSwedish"'},{value:'"queueTimeMinutesSwedish"'},{value:'"queueTimeExpectedTimeEnglish"'},{value:'"queueTimeStoppageSwedish"'},{value:'"dateTimeLockMessageHeading"'},{value:'"dateTimeLockMessageParagraph"'},{value:'"obliterateTicketsRefundNotAllowedPaidWithGiftCard"'},{value:'"obliterateTicketsRefundNotAllowedRecievedAsGift"'},{value:'"obliterateTicketsRefundNotAllowedContactSupport"'},{value:'"obliterateTicketsContactUs"'},{value:'"obliterateTicketsContactUsLink"'},{value:'"upcomingBlockNextEvent"'},{value:'"upcomingBlockNoEvents"'}]}},interpolation:{defaultValue:null,description:"",name:"interpolation",required:!0,type:{name:"Record<K, string>"}},wrappers:{defaultValue:null,description:"",name:"wrappers",required:!0,type:{name:"Partial<Record<K, (s: string) => ReactNode>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/elements/translation-with-wrappers/translation-with-wrappers.tsx#TranslationWithWrappers"]={docgenInfo:TranslationWithWrappers.__docgenInfo,name:"TranslationWithWrappers",path:"src/components/elements/translation-with-wrappers/translation-with-wrappers.tsx#TranslationWithWrappers"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/elements/translation-with-wrappers/translation-with-wrappers.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithArray:()=>WithArray,WithLink:()=>WithLink,WithMultiArray:()=>WithMultiArray,WithObjectInterpolation:()=>WithObjectInterpolation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _translation_with_wrappers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/elements/translation-with-wrappers/translation-with-wrappers.tsx"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/labels/i18n.ts"),react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/Tramslation with Wrappers",component:_translation_with_wrappers__WEBPACK_IMPORTED_MODULE_2__.y};(0,___WEBPACK_IMPORTED_MODULE_3__.wX)("sv",{sv:{CUSTOM_LABEL_WITH_STRING_PLACEHOLDERS:"Hej, mitt namn är {{name}}. Slit inte ut det!",CUSTOM_LABEL_WITH_ARRAY_PLACEHOLDERS:"Hej, mitt namn är {{0}}. Slit inte ut det!",CUSTOM_LABEL_WITH_MULTI_ARRAY_PLACEHOLDERS:"Hej, mitt namn är {{0}} men du kan kalla mig {{1}}. Jag är {{2}} år gammal.",CUSTOM_LABEL_WITH_LINK:"Vi jobbar dagligen med hållbarhet eller något. {{0}} för att läsa mer om vårat arbete.",CUSTOM_LABEL_WITH_LINK_LINK_CONTENT:"Klicka här"},en:{CUSTOM_LABEL_WITH_STRING_PLACEHOLDERS:"Hello, my name is {{name}}. Don't wear it out!",CUSTOM_LABEL_WITH_ARRAY_PLACEHOLDERS:"Hello, my name is {{0}}. Don't wear it out!",CUSTOM_LABEL_WITH_MULTI_ARRAY_PLACEHOLDERS:"Hello, my name is {{0}} but you can call me {{1}}. I am {{2}} years old.",CUSTOM_LABEL_WITH_LINK:"We work daily with sustainability or something. {{0}} to read more about our work.",CUSTOM_LABEL_WITH_LINK_LINK_CONTENT:"Click here"},nn:{CUSTOM_LABEL_WITH_STRING_PLACEHOLDERS:"Hei, mitt namn er {{name}}. Slit det ikkje ut!",CUSTOM_LABEL_WITH_ARRAY_PLACEHOLDERS:"Hei, mitt namn er {{0}}. Slit det ikkje ut!",CUSTOM_LABEL_WITH_MULTI_ARRAY_PLACEHOLDERS:"Hei mitt namn er {{0}}, men du kan kalle meg {{1}}. Eg er {{2}} år gamal.",CUSTOM_LABEL_WITH_LINK:"Vi jobbar dagleg med berekraft eller noko. {{0}} for å lese meir om arbeidet vårt.",CUSTOM_LABEL_WITH_LINK_LINK_CONTENT:"Klikk her"}});var WithObjectInterpolation={args:{label:"CUSTOM_LABEL_WITH_STRING_PLACEHOLDERS",interpolation:{name:"Andreas"},wrappers:{name:function name(s){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:s})}}}},WithArray={args:{label:"CUSTOM_LABEL_WITH_ARRAY_PLACEHOLDERS",interpolation:["Andreas"],wrappers:{0:function _(s){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{children:s})}}}},WithMultiArray={args:{label:"CUSTOM_LABEL_WITH_MULTI_ARRAY_PLACEHOLDERS",interpolation:["Carl Gustaf","Ers Höghet Kungen","75"],wrappers:{1:function _(s){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b",{style:{color:"purple"},children:s})}}}},WithLink={args:{},render:function TemporaryComponent(){var t=(0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.$G)().t;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_translation_with_wrappers__WEBPACK_IMPORTED_MODULE_2__.y,{label:"CUSTOM_LABEL_WITH_LINK",interpolation:{0:t("CUSTOM_LABEL_WITH_LINK_LINK_CONTENT")},wrappers:{0:function _(s){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://google.com",children:s})}}})}},__namedExportsOrder=["WithObjectInterpolation","WithArray","WithMultiArray","WithLink"];WithObjectInterpolation.parameters={...WithObjectInterpolation.parameters,docs:{...WithObjectInterpolation.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: ("CUSTOM_LABEL_WITH_STRING_PLACEHOLDERS" as keyof LabelType),\n    interpolation: {\n      name: "Andreas"\n    },\n    wrappers: {\n      name: s => <b>{s}</b>\n    }\n  }\n} satisfies StoryObj<typeof TranslationWithWrappers>',...WithObjectInterpolation.parameters?.docs?.source}}},WithArray.parameters={...WithArray.parameters,docs:{...WithArray.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: ("CUSTOM_LABEL_WITH_ARRAY_PLACEHOLDERS" as keyof LabelType),\n    interpolation: ["Andreas"],\n    wrappers: {\n      0: s => <b>{s}</b>\n    }\n  }\n} satisfies StoryObj<typeof TranslationWithWrappers<number, Record<number, string>>>',...WithArray.parameters?.docs?.source}}},WithMultiArray.parameters={...WithMultiArray.parameters,docs:{...WithMultiArray.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: ("CUSTOM_LABEL_WITH_MULTI_ARRAY_PLACEHOLDERS" as keyof LabelType),\n    interpolation: ["Carl Gustaf", "Ers Höghet Kungen", "75"],\n    wrappers: {\n      1: s => <b style={{\n        color: "purple"\n      }}>{s}</b>\n    }\n  }\n} satisfies StoryObj<typeof TranslationWithWrappers<number, Record<number, string>>>',...WithMultiArray.parameters?.docs?.source}}},WithLink.parameters={...WithLink.parameters,docs:{...WithLink.parameters?.docs,source:{originalSource:'{\n  args: {},\n  render: function TemporaryComponent() {\n    const {\n      t\n    } = useTranslation();\n    return <TranslationWithWrappers label={("CUSTOM_LABEL_WITH_LINK" as keyof LabelType)} interpolation={{\n      0: t(("CUSTOM_LABEL_WITH_LINK_LINK_CONTENT" as keyof LabelType))\n    }} wrappers={{\n      0: s => <a href="https://google.com">{s}</a>\n    }} />;\n  }\n} satisfies StoryObj<typeof TranslationWithWrappers>',...WithLink.parameters?.docs?.source}}}}}]);