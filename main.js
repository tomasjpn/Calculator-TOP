(()=>{"use strict";var __webpack_modules__={365:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(601),r=t.n(a),o=t(314),i=t.n(o)()(r());i.push([n.id,"/*gesamter <Body>*/\nbody {\n    background: aliceblue;\n    display: flex; \n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    margin: 0;\n    overflow: hidden;\n    transform: scale(0.7);\n    margin-bottom: 5px;\n}\n\n/*Titel*/\nh1 {\n    text-align: center;\n    color: rgba(24, 24, 27, 0.252);\n    font-weight: bold;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n/*Container vom Taschenrechner*/\n.container{\n    background: rgba(24,24,27,0.1);\n    border-radius: 25px;\n    margin-top: 0px;\n    margin-left: 200px;\n    margin-right: 200px;\n    max-width: 450px;\n    max-height: 770px;\n    overflow: hidden;\n    align-items: center;\n    justify-content: center;\n    animation: shadow 4s ease-in-out forwards, slideUp 1.5s ease-out forwards;\n}\n\n\n/*Animation: Shatten*/\n@keyframes shadow{\n    from {\n        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);\n    }\n    to{\n        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.186);\n    }\n}\n\n/* Animation: hoch sliden */\n@keyframes slideUp {\n    from {\n        transform: translateY(100vh);\n    }\n    to {\n        transform: translateY(0);\n    }\n}\n\n\n/*Anzeige des Taschenrechners*/\n.input-display{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n#inputDisplay{\n    width: 100%;\n    border: none;\n    border-radius: 25px;\n    height: 150px;\n    background-color: rgba(24, 24, 27, 0.068);\n    font-size: 75px;\n    text-align: right;\n    padding-right: 20px;\n    padding-left: 20px;\n    color:aliceblue;\n}\n\n/*Tasten des Taschenrechners*/\n.calc-buttons{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 10px;\n    padding: 50px;\n    align-items: center;\n    justify-content: center;\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-bottom: 10px;\n}\n\nbutton{\n    width: 90px;\n    height: 90px;\n    font-size: 36px;\n    font-weight: bold;\n    border: none;\n    border-radius: 30px;\n    cursor: pointer;\n    color: rgb(255, 255, 255);\n    background-color: rgba(24, 24, 27, 0.068);\n    opacity: 0; \n    animation: fadeIn 0.5s ease-out forwards; \n}\n\n/* Animation: Fade-In für Buttons */\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n/* Verschiedene Verzögerungen für Buttons */\nbutton:nth-child(1) {\n    animation-delay: 0s;\n}\nbutton:nth-child(2) {\n    animation-delay: 0.1s;\n}\nbutton:nth-child(3) {\n    animation-delay: 0.2s;\n}\nbutton:nth-child(4) {\n    animation-delay: 0.3s;\n}\nbutton:nth-child(5) {\n    animation-delay: 0.4s;\n}\nbutton:nth-child(6) {\n    animation-delay: 0.5s;\n}\nbutton:nth-child(7) {\n    animation-delay: 0.6s;\n}\nbutton:nth-child(8) {\n    animation-delay: 0.7s;\n}\nbutton:nth-child(9) {\n    animation-delay: 0.8s;\n}\nbutton:nth-child(10) {\n    animation-delay: 0.9s;\n}\nbutton:nth-child(11) {\n    animation-delay: 1s;\n}\nbutton:nth-child(12) {\n    animation-delay: 1.1s;\n}\n\n/*hover Animation*/\nbutton:hover{\n    background-color: rgba(24, 24, 27, 0.111);\n    transition: background-color 0.3s;\n}\n\n/* Spezielle Buttons */\n#operatorBtn, .equal, #clearBtn, #delBtn {\n    animation: fadeIn 0.5s ease-out forwards;\n}\n\n/* Animation Delay für spezielle Buttons */\n#operatorBtn { animation-delay: 1.2s; }\n.equal { animation-delay: 1.3s; }\n#clearBtn { animation-delay: 1.4s; }\n#delBtn { animation-delay: 1.5s; }\n\n#operatorBtn{\n    color: rgb(249, 169, 160);\n}\n\n.equal{\n    background-color: rgb(251, 142, 130);\n    height: 200px;\n    grid-row: span 2;\n}\n\n.button-container{\n    margin-bottom: 10px;\n    grid-column: span 3;\n    margin-top: 20px;\n}\n\n#clearBtn, #delBtn{\n    background-color: rgba(251, 142, 130, 0.586);\n    width: 140px;\n    height: 90px;\n}\n#clearBtn{\n    margin-right: 5px;\n}\n\n#clearBtn:hover, #delBtn:hover {\n    background-color: rgba(251, 142, 130, 0.895);\n    transition: background-color 0.3s;\n}\n\n.equal:hover{\n    background-color: rgba(247, 88, 70, 0.797);\n    transition: background-color 0.3s;\n}\n\n/*Optimiert für kleinere Screens*/\n@media only screen and (max-width: 730px) {\n    body{\n        transform: scale(0.7);\n    }\n}\n\n@media only screen and (max-width: 400px) {\n    body{\n        transform: scale(0.7);\n    }\n}\n\n@media only screen and (max-width: 1280px) {\n    body{\n        transform: scale(0.7);\n    }\n}",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);a&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],s=0;s<n.length;s++){var l=n[s],c=a.base?l[0]+a.base:l[0],u=o[c]||0,_="".concat(c," ").concat(u);o[c]=u+1;var d=t(_),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var m=r(p,a);a.byIndex=s,e.splice(s,0,{identifier:_,updater:m,references:1})}i.push(_)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var l=a(n,r),c=0;c<o.length;c++){var u=t(o[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=l}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},602:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>calculateVal});var _utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(251);const calculateVal=()=>{try{_utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.H.value=eval(_utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.H.value)}catch{_utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.H.value="Error"}}},251:(n,e,t)=>{t.d(e,{H:()=>a});const a=document.getElementById("inputDisplay")}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[n]={id:n,exports:{}};return __webpack_modules__[n](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(n,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},__webpack_require__.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),__webpack_require__.nc=void 0;var __webpack_exports__={},calculateInput=__webpack_require__(602),domElm=__webpack_require__(251);const clearInput=()=>{domElm.H.value="0"},deleteLastInput=()=>{domElm.H.value=domElm.H.value.slice(0,-1),""===domElm.H.value&&(domElm.H.value="0")},displayVal=n=>{"0"===domElm.H.value?domElm.H.value=n:domElm.H.value+=n};var injectStylesIntoStyleTag=__webpack_require__(72),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__(825),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__(659),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__(56),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__(540),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__(113),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__(365),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();var update=injectStylesIntoStyleTag_default()(styles.A,options);const src_styles=styles.A&&styles.A.locals?styles.A.locals:void 0,keyboardFunc=()=>{document.addEventListener("keydown",(function(n){const e=n.key;e>="0"&&e<="9"||"."===e||"+"===e||"-"===e||"*"===e||"/"===e?displayVal(e):"Enter"===e||"="===e?(n.preventDefault(),(0,calculateInput.e)()):"Backspace"===e?deleteLastInput():"Escape"!==e&&"c"!==e||clearInput()}))};window.displayVal=displayVal,window.calculateVal=calculateInput.e,window.clearInput=clearInput,window.deleteLastInput=deleteLastInput,keyboardFunc()})();