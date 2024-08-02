(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./assets/js/theme/f/api.js":
/*!**********************************!*\
  !*** ./assets/js/theme/f/api.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return apiCall; });
function apiCall(url, method, payload) {
  return fetch(url, {
    method: method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(function (response) {
    return response;
  });
}

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _f_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./f/api */ "./assets/js/theme/f/api.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Home = /*#__PURE__*/function (_PageManager) {
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Home, _PageManager);
  var _proto = Home.prototype;
  _proto.handlePasswordlessLogin = function handlePasswordlessLogin(email, redirectUrl) {
    Object(_f_api__WEBPACK_IMPORTED_MODULE_2__["default"])('/login.php?action=passwordless_login', 'POST', {
      email: email,
      redirect_url: redirectUrl
    }).then(function () {
      $('.login-email-sent').css('visibility', 'visible');
    });
  };
  _proto.onReady = function onReady() {
    var _this = this;
    $('.login-form-email').on('submit', function (event) {
      event.preventDefault();
      var email = $('#login_email').val();
      var redirectUrl = _this.context.passwordlessRedirectUrl;
      _this.handlePasswordlessLogin(email, redirectUrl);
    });
    $('.login-email-redo').on('click', function (event) {
      event.preventDefault();
      $('.login-email-sent').css('visibility', 'hidden');
    });
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZi9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwibmFtZXMiOlsiYXBpQ2FsbCIsInVybCIsIm1ldGhvZCIsInBheWxvYWQiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwiSG9tZSIsIl9QYWdlTWFuYWdlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJoYW5kbGVQYXNzd29yZGxlc3NMb2dpbiIsImVtYWlsIiwicmVkaXJlY3RVcmwiLCJyZWRpcmVjdF91cmwiLCIkIiwiY3NzIiwib25SZWFkeSIsIl90aGlzIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsIiwiY29udGV4dCIsInBhc3N3b3JkbGVzc1JlZGlyZWN0VXJsIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWUsU0FBU0EsT0FBT0EsQ0FBQ0MsR0FBRyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtFQUNsRCxPQUFPQyxLQUFLLENBQUNILEdBQUcsRUFBRTtJQUNkQyxNQUFNLEVBQU5BLE1BQU07SUFDTkcsV0FBVyxFQUFFLGFBQWE7SUFDMUJDLE9BQU8sRUFBRTtNQUNMLGNBQWMsRUFBRTtJQUNwQixDQUFDO0lBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNOLE9BQU87RUFDaEMsQ0FBQyxDQUFDLENBQUNPLElBQUksQ0FBQyxVQUFBQyxRQUFRO0lBQUEsT0FBSUEsUUFBUTtFQUFBLEVBQUM7QUFDakMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHlDO0FBQ1g7QUFBQSxJQUVUQyxJQUFJLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsS0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsY0FBQSxDQUFBSixJQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLElBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3JCRSx1QkFBdUIsR0FBdkIsU0FBQUEsd0JBQXdCQyxLQUFLLEVBQUVDLFdBQVcsRUFBRTtJQUN4Q3JCLHNEQUFPLENBQUMsc0NBQXNDLEVBQUUsTUFBTSxFQUFFO01BQ3BEb0IsS0FBSyxFQUFMQSxLQUFLO01BQ0xFLFlBQVksRUFBRUQ7SUFDbEIsQ0FBQyxDQUFDLENBQUNYLElBQUksQ0FBQyxZQUFNO01BQ1ZhLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQztJQUN2RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFQLE1BQUEsQ0FFRFEsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUFBLElBQUFDLEtBQUE7SUFDTkgsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQ3pDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BRXRCLElBQU1ULEtBQUssR0FBR0csQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDTyxHQUFHLENBQUMsQ0FBQztNQUNyQyxJQUFNVCxXQUFXLEdBQUdLLEtBQUksQ0FBQ0ssT0FBTyxDQUFDQyx1QkFBdUI7TUFFeEROLEtBQUksQ0FBQ1AsdUJBQXVCLENBQUNDLEtBQUssRUFBRUMsV0FBVyxDQUFDO0lBQ3BELENBQUMsQ0FBQztJQUVGRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDeENBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDdEJOLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQztJQUN0RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQVosSUFBQTtBQUFBLEVBeEI2QnFCLHFEQUFXIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwaUNhbGwodXJsLCBtZXRob2QsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xufVxuIiwiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBhcGlDYWxsIGZyb20gJy4vZi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGhhbmRsZVBhc3N3b3JkbGVzc0xvZ2luKGVtYWlsLCByZWRpcmVjdFVybCkge1xuICAgICAgICBhcGlDYWxsKCcvbG9naW4ucGhwP2FjdGlvbj1wYXNzd29yZGxlc3NfbG9naW4nLCAnUE9TVCcsIHtcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcmVkaXJlY3RfdXJsOiByZWRpcmVjdFVybCxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAkKCcubG9naW4tZW1haWwtc2VudCcpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgICQoJy5sb2dpbi1mb3JtLWVtYWlsJykub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gJCgnI2xvZ2luX2VtYWlsJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdFVybCA9IHRoaXMuY29udGV4dC5wYXNzd29yZGxlc3NSZWRpcmVjdFVybDtcblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQYXNzd29yZGxlc3NMb2dpbihlbWFpbCwgcmVkaXJlY3RVcmwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcubG9naW4tZW1haWwtcmVkbycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKCcubG9naW4tZW1haWwtc2VudCcpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==