(()=>{"use strict";var t=document.querySelector(".profile__button-edit"),e=document.querySelector(".profile__button-avatar"),r=document.querySelector(".profile__button-add"),n=document.querySelector(".profile__avatar"),o=document.querySelector("#profile-form"),i=o.querySelector("#name"),u=o.querySelector("#about"),c=document.querySelector("#add-form"),l=(c.querySelector("#new-name"),c.querySelector("#link"),document.querySelector("#avatar-form")),a=(l.querySelector("#avatar"),document.querySelector(".photo-grid__list")),s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-submit",inactiveButtonClass:"popup__button-submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"};function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var y=function(){function t(e,r,n,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._idCard=e._id,this._idUser=r._id,this._templateSelector=n,this._handleCardClick=o,this._handleLike=i,this._handleDeleteClick=u,this._handleDeleteClickBind=this._handleDeleteClick.bind(this),this._element=this._getTemplate(),this._buttonLike=this._element.querySelector(".photo-grid__like"),this._likesNumber=this._element.querySelector(".photo-grid__likes-number"),this._buttonDelete=this._element.querySelector(".photo-grid__delete"),this._cardImage=this._element.querySelector(".photo-grid__image"),this._cardText=this._element.querySelector(".photo-grid__text")}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".photo-grid__item").cloneNode(!0)}},{key:"_setLikeNumber",value:function(){this._likesNumber.textContent=this._likes.length}},{key:"_deleteCardElement",value:function(){this._element.remove(),this._element=null}},{key:"_isLike",value:function(){for(var t=0;t<this._likes.length;t+=1)this._likes[t]._id===this._idUser&&this._buttonLike.classList.add("photo-grid__like_active")}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){t._handleLike()})),null!==this._element.querySelector(".photo-grid__delete")&&this._buttonDelete.addEventListener("click",this._handleDeleteClickBind),this._cardImage.addEventListener("click",this._handleCardClick)}},{key:"generateCard",value:function(){return this._setEventListeners(),this._cardText.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._setLikeNumber(),this._isLike(),this._element}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}var m=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._config.inputErrorClass),e.classList.add(this._config.errorClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._config.inputErrorClass),e.classList.remove(this._config.errorClass),e.textContent=""}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"resetError",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._disableSubmitButton()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}var _=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}var w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__button-close").addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("mousedown",(function(e){e.target===t._popup&&t.close()}))}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},O.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(n);if(o){var r=P(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._handleSubmit=e,r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this.formValues={},Array.from(this._popup.querySelectorAll(".popup__input")).forEach((function(e){t.formValues[e.name]=e.value})),this.formValues}},{key:"setEventListeners",value:function(){var t=this;O(P(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues())}))}},{key:"close",value:function(){this._popup.querySelector(".popup__form").reset(),O(P(u.prototype),"close",this).call(this)}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},T.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(n);if(o){var r=R(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imageOfPopup=e._popup.querySelector(".popup__image"),e._captionOfPopup=e._popup.querySelector(".popup__caption"),e}return e=u,(r=[{key:"open",value:function(t){this._link=t.link,this._name=t.name,this._imageOfPopup.src=this._link,this._imageOfPopup.alt=this._name,this._captionOfPopup.textContent=this._name,T(R(u.prototype),"open",this).call(this)}}])&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var U=function(){function t(e){var r=e.profileNameSelector,n=e.profileAboutSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileNameSelector=document.querySelector(r),this._profileAboutSelector=document.querySelector(n)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){var t={};return t.name=this._profileNameSelector.textContent,t.about=this._profileAboutSelector.textContent,t}},{key:"setUserInfo",value:function(t){this._profileNameSelector.textContent=t.name,this._profileAboutSelector.textContent=t.about}}])&&D(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=G(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},V.apply(this,arguments)}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},J(t,e)}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},G(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&J(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=G(n);if(o){var r=G(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._buttonSubmitDelete=e._popup.querySelector(".popup__button-confirmation"),e}return e=u,(r=[{key:"setEventListeners",value:function(t){var e=this;this._handleSubmit=t,this._buttonSubmitDelete.addEventListener("click",(function(){e._handleSubmit()})),V(G(u.prototype),"setEventListeners",this).call(this)}}])&&N(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===M(o)?o:String(o)),n)}var o}var $=function(){function t(e){var r=e.baseUrl,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=r,this.headers=n}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так!")})).catch((function(t){console.log(t)}))}},{key:"getCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так!")})).catch((function(t){console.log(t)}))}},{key:"editProfile",value:function(t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",body:JSON.stringify({name:t.name,about:t.about}),headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так!")})).catch((function(t){console.log(t)}))}},{key:"createItem",value:function(t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",body:JSON.stringify({name:t.name,link:t.link}),headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так!")})).catch((function(t){console.log(t)}))}},{key:"deleteItem",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так!")})).catch((function(t){console.log(t)}))}},{key:"setLike",value:function(t){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так!")})).catch((function(t){console.log(t)}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так!")})).catch((function(t){console.log(t)}))}},{key:"updateAvatar",value:function(t){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",body:JSON.stringify({avatar:t.avatar}),headers:this.headers}).then((function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так!")})).catch((function(t){console.log(t)}))}},{key:"getAllNeededData",value:function(){return Promise.all([this.getCards(),this.getUserInfo()])}}])&&z(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}var K=["new-name"];function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function X(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==F(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===F(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}t.addEventListener("click",(function(){ot.open();var t=ut.getUserInfo();i.value=t.name,u.value=t.about,rt.resetError()})),r.addEventListener("click",(function(){it.open(),nt.resetError()}));var Y=new x(".popup_type_photo");function Z(){var t={link:this.src,name:this.alt};Y.open(t)}function tt(){var t=this._likesNumber.textContent,e=Number(t);this._buttonLike.classList.contains("photo-grid__like_active")?(this._buttonLike.classList.remove("photo-grid__like_active"),t=e-=1,this._likesNumber.textContent=t,st.deleteLike(this._idCard)):(this._buttonLike.classList.add("photo-grid__like_active"),t=e+=1,this._likesNumber.textContent=t,st.setLike(this._idCard))}function et(){var t=this._element,e=this._idCard;at.open(),at.setEventListeners((function(){t.remove(),st.deleteItem(e),at.close()}))}Y.setEventListeners();var rt=new m(s,o);rt.enableValidation();var nt=new m(s,c);nt.enableValidation();var ot=new L(".popup_type_profile",(function(){var t=this._popup.querySelector(".popup__button-submit");ft(!0,t,"Сохранить");var e=this._getInputValues();ut.setUserInfo(e),st.editProfile(e).finally((function(){ft(!1,t,"Сохранить")})),ot.close()}));ot.setEventListeners();var it=new L(".popup_type_add",(function(t){var e=t["new-name"],r=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,K),n=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(Object(r),!0).forEach((function(e){X(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({name:e},r),o={};for(var i in n)o[i]=n[i];var u=this._popup.querySelector(".popup__button-submit");ft(!0,u,"Создать"),n.likes=[],st.getUserInfo().then((function(t){var e=new y(n,t,"#template-card",Z,tt,et).generateCard();a.prepend(e)})),st.createItem(o).finally((function(){ft(!1,u,"Создать")})),it.close()}));it.setEventListeners();var ut=new U({profileNameSelector:".profile__name",profileAboutSelector:".profile__about"});e.addEventListener("click",(function(){ct.open(),lt.resetError()}));var ct=new L(".popup_type_avatar",(function(){var t=this._popup.querySelector(".popup__button-submit");ft(!0,t,"Сохранить");var e=this._getInputValues();n.src=e.avatar,st.updateAvatar(e).finally((function(){ft(!1,t,"Сохранить")})),ct.close()}));ct.setEventListeners();var lt=new m(s,l);lt.enableValidation();var at=new H(".popup_type_confirmation"),st=new $({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"e4a26b2f-7ecf-4502-808a-71514b8a9269","Content-Type":"application/json"}});function ft(t,e,r){e.textContent=t?"Сохранение...":r}st.getAllNeededData().then((function(t){var e,r,o=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],l=!0,a=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){a=!0,o=t}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(a)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],u=o[1];n.src=u.avatar;var c=new _({renderer:function(t){var e=new y(t,u,"#template-card",Z,tt,et).generateCard();t.owner._id!==u._id&&e.querySelector(".photo-grid__delete").remove(),c.addItem(e)}},".photo-grid__list");c.renderItems(i),ut.setUserInfo(u)}))})();