(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{18:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Typography}));var _Users_ale_Sites_CDG_NHS_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(48),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49);function _templateObject(){var data=Object(_Users_ale_Sites_CDG_NHS_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["  \n  body {\n    font-family: 'Inter', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    font-size: ",";\n    background: ",";\n  }\n\n  h1 {\n    font-size: ",";\n    color: ",";\n    font-weight: 200;\n    margin: 0 0 1em;\n  }\n\n  h2 {\n    font-size: ",";\n    font-weight: bold;\n    margin: 0 0 1em;\n  }\n\n  h3 {\n    font-size: ",";\n    font-weight: normal;\n    margin: 0 0 1em;\n  }\n\n  input{\n    border: none;\n    padding:","px;\n    font-size: inherit;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var palette={violet:{dark:"#685F9B",medium:"#8B83BA",light:"#D9D5EC"},orange:{medium:"#E58A00",light:"#EEC68B"},grey:{darker:"#444444",dark:"#99999",medium:"#DEE5E8",light:"#EBEBEB",lighter:"#F0F3F4"},white:"#fff"},textSize={h1:"3.6rem",h2:"2.4rem",h3:"2rem",textBody:"1.6rem"},breakPoints={small:390,large:800},theme={textSize:textSize,palette:palette,colorCodes:{primary:palette.violet.dark,primary_contrast:palette.white,secondary:palette.violet.medium,accent:palette.orange.medium},radius:3,spacer:8,breakPoints:breakPoints,mediaQueries:{small:"@media screen and (min-width: ".concat(breakPoints.small,"px)"),large:"@media screen and (min-width: ".concat(breakPoints.large,"px)")},page:{maxWidth:1280,bgColor:"linear-gradient(314.6deg,hsl(215deg 18% 80%) 2.53%,#F0F3F4 100%);"},shadow:"box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2)",largeShadow:"box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1)"};__webpack_exports__.b=theme;var Typography=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.a)(_templateObject(),textSize.textBody,theme.page.bgColor,textSize.h1,theme.colorCodes.primary,textSize.h2,textSize.h3,2*theme.spacer)},215:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Input_style}));var taggedTemplateLiteral=__webpack_require__(48),styled_components_browser_esm=__webpack_require__(49),theme_default=__webpack_require__(18);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  border-radius: ","px;\n  background-color: ",";\n  border: 1px solid ",";\n  color: ",";\n  font-size: 2rem;\n  padding: ","px ","px;\n  display: inline-block;\n  width: 100%;\n\n  &::placeholder {\n    font-style: italic;\n    font-weight: 200;\n    color: ",";\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var Input_style=styled_components_browser_esm.c.input(_templateObject(),theme_default.b.radius,theme_default.b.palette.white,theme_default.b.palette.violet.light,theme_default.b.colorCodes.primary,theme_default.b.spacer,2*theme_default.b.spacer,theme_default.b.palette.grey.dark)},474:function(module,exports,__webpack_require__){__webpack_require__(475),__webpack_require__(630),__webpack_require__(631),__webpack_require__(847),__webpack_require__(848),__webpack_require__(827),__webpack_require__(855),__webpack_require__(852),__webpack_require__(849),__webpack_require__(856),__webpack_require__(853),module.exports=__webpack_require__(843)},542:function(module,exports){},631:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(198)},843:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(198).configure)([__webpack_require__(844),__webpack_require__(845)],module,!1)}).call(this,__webpack_require__(161)(module))},844:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=844},845:function(module,exports,__webpack_require__){var map={"./components/base/button/Button.stories.js":851,"./components/base/input/Input.stories.js":846,"./components/base/paper/Paper.stories.js":854,"./components/widgets/searchBox/SearchBox.stories.js":850};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=845},846:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Input",(function(){return Input}));var _Users_ale_Sites_CDG_NHS_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86),___WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(215)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(22);__webpack_exports__.default={title:"Base/Input",argTypes:{placeholder:{defaultValue:"Name",control:{type:"text"}}}};var Input=function Input(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.a,Object(_Users_ale_Sites_CDG_NHS_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))};Input.__docgenInfo={description:"",methods:[],displayName:"Input"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/base/input/Input.stories.js"]={name:"Input",docgenInfo:Input.__docgenInfo,path:"src/components/base/input/Input.stories.js"})},850:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SearchBox",(function(){return SearchBox_stories_SearchBox}));var objectSpread2=__webpack_require__(86),react=__webpack_require__(0),input=__webpack_require__(215);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _ref2=react.createElement("path",{d:"M15.677 16.607l-5.715-5.716a6 6 0 01-7.719-9.133 6 6 0 019.134 7.718l5.715 5.716-1.414 1.414-.001.001zM6.485 2a4 4 0 102.917 1.264l.605.6-.682-.68-.012-.012A3.972 3.972 0 006.485 2z",fill:"currentColor"});function SvgMagnifier(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,["title","titleId"]);return react.createElement("svg",_extends({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 17",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,_ref2)}var ForwardRef=react.forwardRef(SvgMagnifier),taggedTemplateLiteral=(__webpack_require__.p,__webpack_require__(48)),styled_components_browser_esm=__webpack_require__(49),theme_default=__webpack_require__(18);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 2rem;\n  button {\n    position: absolute;\n    right: 1px;\n    border: none;\n    background-color: transparent;\n    color: ",";\n    padding: ","px;\n    line-height: 1;\n    cursor: pointer;\n  }\n  input {\n    padding-right: ","px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var SearchBox_style=styled_components_browser_esm.c.form(_templateObject(),theme_default.b.colorCodes.secondary,theme_default.b.spacer,4*theme_default.b.spacer),jsx_runtime=__webpack_require__(22),SearchBox_SearchBox=function SearchBox(_ref){var className=_ref.className,onSearch=_ref.onSearch,placeholder=_ref.placeholder,defaultValue=_ref.defaultValue,classes=["SearchBox"];return className&&classes.push(className),Object(jsx_runtime.jsxs)(SearchBox_style,{onSubmit:function onSubmit(e){e.preventDefault(),onSearch(e.target.keyword.value)},className:classes.join(" "),children:[Object(jsx_runtime.jsx)(input.a,{name:"keyword",type:"text",placeholder:placeholder,defaultValue:defaultValue}),Object(jsx_runtime.jsx)("button",{type:"submit",children:Object(jsx_runtime.jsx)(ForwardRef,{})})]})};SearchBox_SearchBox.displayName="SearchBox",SearchBox_SearchBox.defaultProps={className:null,placeholder:null,defaultValue:null},SearchBox_SearchBox.__docgenInfo={description:"",methods:[],displayName:"SearchBox",props:{className:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},placeholder:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},defaultValue:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},onSearch:{type:{name:"func"},required:!0,description:""}}};var searchBox_SearchBox=SearchBox_SearchBox;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/widgets/searchBox/SearchBox.js"]={name:"SearchBox",docgenInfo:SearchBox_SearchBox.__docgenInfo,path:"src/components/widgets/searchBox/SearchBox.js"});__webpack_exports__.default={title:"Widgets/Search Box",argTypes:{onSearch:{action:"on search"},placeholder:{defaultValue:"Keyword",control:{type:"text"}},defaultValue:{control:{type:"text"}}}};var SearchBox_stories_SearchBox=function SearchBox(args){return Object(jsx_runtime.jsx)(searchBox_SearchBox,Object(objectSpread2.a)({},args))};SearchBox_stories_SearchBox.__docgenInfo={description:"",methods:[],displayName:"SearchBox"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/widgets/searchBox/SearchBox.stories.js"]={name:"SearchBox",docgenInfo:SearchBox_stories_SearchBox.__docgenInfo,path:"src/components/widgets/searchBox/SearchBox.stories.js"})},851:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Button",(function(){return Button_stories_Button}));var objectSpread2=__webpack_require__(86),objectWithoutProperties=__webpack_require__(454),react=__webpack_require__(0);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var right_arrow_ref2=react.createElement("path",{d:"M10 20C4.48 19.994.006 15.52 0 10v-.2C.11 4.305 4.635-.072 10.13 0c5.497.074 9.904 4.569 9.868 10.065C19.962 15.562 15.497 20 10 20zm0-18a8 8 0 108 8 8.009 8.009 0 00-8-8zM8.55 15l-1.414-1.415 3.535-3.535-3.535-3.535L8.55 5.1l4.95 4.95L8.551 15H8.55z",fill:"currentColor"});function SvgRightArrow(_ref,svgRef){var title=_ref.title,titleId=_ref.titleId,props=_objectWithoutProperties(_ref,["title","titleId"]);return react.createElement("svg",_extends({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,right_arrow_ref2)}var ForwardRef=react.forwardRef(SvgRightArrow),taggedTemplateLiteral=(__webpack_require__.p,__webpack_require__(48)),styled_components_browser_esm=__webpack_require__(49),theme_default=__webpack_require__(18);function _templateObject5(){var data=Object(taggedTemplateLiteral.a)(["\n          padding: ","px ","px;\n        "]);return _templateObject5=function _templateObject5(){return data},data}function _templateObject4(){var data=Object(taggedTemplateLiteral.a)(["\n          padding: ","px ","px;\n        "]);return _templateObject4=function _templateObject4(){return data},data}function _templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n      background-color: transparent;\n      color: ",";\n      box-shadow: none;\n      &:hover {\n        opacity: 1;\n        background-color: ","11;\n      }\n    "]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n      background-color: ",";\n      color: ",";\n      border: 1px solid ",";\n      box-shadow: none;\n      &:hover {\n        opacity: 1;\n        background-color: ","11;\n      }\n    "]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ","px;\n  border: 1px solid transparent;\n  color: ",";\n  cursor: pointer;\n  display: inline-grid;\n  font-family: inherit;\n  font-size: 2rem;\n  grid-auto-flow: column;\n  grid-gap: ","px;\n  ",";\n\n  &:hover {\n    opacity: 0.9;\n  }\n\n  ","\n\n  ","\n\n  ","\n\n  \n  :disabled {\n    background-color: ",";\n    color: ",";\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var Button_style=styled_components_browser_esm.c.button(_templateObject(),theme_default.b.colorCodes.primary,theme_default.b.radius,theme_default.b.colorCodes.primary_contrast,2*theme_default.b.spacer,theme_default.b.largeShadow,(function(_ref){return"secondary"===_ref.variation&&Object(styled_components_browser_esm.b)(_templateObject2(),theme_default.b.palette.white,theme_default.b.palette.violet.medium,theme_default.b.palette.violet.light,theme_default.b.palette.violet.light)}),(function(_ref2){return"tertiary"===_ref2.variation&&Object(styled_components_browser_esm.b)(_templateObject3(),theme_default.b.palette.violet.medium,theme_default.b.palette.grey.darker)}),(function(_ref3){return _ref3.small?Object(styled_components_browser_esm.b)(_templateObject4(),theme_default.b.spacer,2*theme_default.b.spacer):Object(styled_components_browser_esm.b)(_templateObject5(),2*theme_default.b.spacer,3*theme_default.b.spacer)}),theme_default.b.palette.grey.light,theme_default.b.palette.grey.dark),jsx_runtime=__webpack_require__(22),Button_stories_Button=(__webpack_exports__.default={title:"Base/Button",argTypes:{onClick:{action:"clicked",table:{disable:!0}},label:{defaultValue:"Button label",control:{type:"text"}},disabled:{defaultValue:!1,control:{type:"boolean"}},variation:{defaultValue:"primary",options:["primary","secondary","tertiary"],control:{type:"radio"}},small:{defaultValue:!1,control:{type:"boolean"}},addIcon:{name:"Add icon",defaultValue:!1,control:{type:"boolean"}}}},function Button(_ref){var addIcon=_ref.addIcon,args=Object(objectWithoutProperties.a)(_ref,["addIcon"]);return Object(jsx_runtime.jsxs)(Button_style,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{children:[args.label," ",addIcon&&Object(jsx_runtime.jsx)(ForwardRef,{})]}))});Button_stories_Button.defaultProps={addIcon:!1,variation:"primary"},Button_stories_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{addIcon:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},variation:{defaultValue:{value:"'primary'",computed:!1},type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/base/button/Button.stories.js"]={name:"Button",docgenInfo:Button_stories_Button.__docgenInfo,path:"src/components/base/button/Button.stories.js"})},853:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(171),esm=__webpack_require__(5),client=(__webpack_require__(0),__webpack_require__(198)),taggedTemplateLiteral=__webpack_require__(48),styled_components_browser_esm=__webpack_require__(49),jsx_runtime=(__webpack_require__(840),__webpack_require__(22));function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  html,\n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 62.5%;\n    height: 100%;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  svg {\n    width: 1em;\n    height: 1em;\n  }\n\n"]);return _templateObject=function _templateObject(){return data},data}var CssBaseline=Object(styled_components_browser_esm.a)(_templateObject()),baseline_BaseLine=function BaseLine(_ref){var Typography=_ref.Typography;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(CssBaseline,{}),Object(jsx_runtime.jsx)(Typography,{})]})};baseline_BaseLine.displayName="Baseline",baseline_BaseLine.__docgenInfo={description:"",methods:[],displayName:"Baseline",props:{Typography:{type:{name:"shape",value:{}},required:!0,description:""}}};var baseline=baseline_BaseLine;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme/baseline.js"]={name:"BaseLine",docgenInfo:baseline_BaseLine.__docgenInfo,path:"src/theme/baseline.js"});var theme_default=__webpack_require__(18);Object(client.addDecorator)((function(storyFn){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(baseline,{Typography:theme_default.a}),storyFn()]})}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},854:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Paper",(function(){return Paper_stories_Paper}));var objectSpread2=__webpack_require__(86),taggedTemplateLiteral=(__webpack_require__(0),__webpack_require__(48)),styled_components_browser_esm=__webpack_require__(49),theme_default=__webpack_require__(18);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  border-radius: ","px;\n  background-color: ",";\n  ",";\n\n  padding: ","px;\n"]);return _templateObject=function _templateObject(){return data},data}var Paper_style=styled_components_browser_esm.c.div(_templateObject(),theme_default.b.radius,theme_default.b.palette.white,theme_default.b.largeShadow,(function(_ref){var _ref$padding=_ref.padding,padding=void 0===_ref$padding?2:_ref$padding;return theme_default.b.spacer*padding})),jsx_runtime=__webpack_require__(22),Paper_stories_Paper=(__webpack_exports__.default={title:"Base/Paper",argTypes:{padding:{defaultValue:1,control:{type:"range",min:0,max:10}}}},function Paper(args){return Object(jsx_runtime.jsx)(Paper_style,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{children:Object(jsx_runtime.jsx)("h1",{children:"This is just a container for other UI elements..."})}))});Paper_stories_Paper.__docgenInfo={description:"",methods:[],displayName:"Paper"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/base/paper/Paper.stories.js"]={name:"Paper",docgenInfo:Paper_stories_Paper.__docgenInfo,path:"src/components/base/paper/Paper.stories.js"})}},[[474,2,3]]]);