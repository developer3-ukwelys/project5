/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/projects.js":
/*!**********************************!*\
  !*** ./resources/js/projects.js ***!
  \**********************************/
/***/ (() => {

eval("$(document).ready(function () {\n  var table = '#projects-table';\n  var modal = '#add-project-modal';\n  var form = '#add-project-form';\n  $(form).on('submit', function (event) {\n    event.preventDefault();\n    var url = $(this).attr('action');\n    var form = new FormData(form);\n    console.log(form);\n    $.ajax({\n      url: url,\n      method: 'POST',\n      data: form,\n      dataType: 'JSON',\n      contentType: false,\n      cache: false,\n      processData: false,\n      success: function success(response) {\n        var row = '<tr>';\n        row += '<th scope=\"row\">' + response.id + '</th>';\n        row += '<td>' + response.title + '</td>';\n        row += '<td>' + response.title + '</td>';\n        row += '</tr>';\n        $(table).find('tbody').prepend(row);\n        $(form).trigger(\"reset\");\n        $(modal).modal('hide');\n      },\n      error: function error(response) {}\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcHJvamVjdHMuanM/MzE0OCJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwibW9kYWwiLCJmb3JtIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXJsIiwiYXR0ciIsIkZvcm1EYXRhIiwiY29uc29sZSIsImxvZyIsImFqYXgiLCJtZXRob2QiLCJkYXRhIiwiZGF0YVR5cGUiLCJjb250ZW50VHlwZSIsImNhY2hlIiwicHJvY2Vzc0RhdGEiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJyb3ciLCJpZCIsInRpdGxlIiwiZmluZCIsInByZXBlbmQiLCJ0cmlnZ2VyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVU7QUFFeEIsTUFBSUMsS0FBSyxHQUFHLGlCQUFaO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLG9CQUFaO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLG1CQUFYO0FBRUFMLEVBQUFBLENBQUMsQ0FBQ0ssSUFBRCxDQUFELENBQVFDLEVBQVIsQ0FBVyxRQUFYLEVBQXFCLFVBQVNDLEtBQVQsRUFBZTtBQUNoQ0EsSUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBRUEsUUFBSUMsR0FBRyxHQUFHVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLElBQVIsQ0FBYSxRQUFiLENBQVY7QUFDQSxRQUFJTCxJQUFJLEdBQUUsSUFBSU0sUUFBSixDQUFhTixJQUFiLENBQVY7QUFDQU8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlSLElBQVo7QUFDQUwsSUFBQUEsQ0FBQyxDQUFDYyxJQUFGLENBQU87QUFDSEwsTUFBQUEsR0FBRyxFQUFFQSxHQURGO0FBRUhNLE1BQUFBLE1BQU0sRUFBRSxNQUZMO0FBR0hDLE1BQUFBLElBQUksRUFBRVgsSUFISDtBQUlIWSxNQUFBQSxRQUFRLEVBQUUsTUFKUDtBQUtIQyxNQUFBQSxXQUFXLEVBQUUsS0FMVjtBQU1IQyxNQUFBQSxLQUFLLEVBQUUsS0FOSjtBQU9IQyxNQUFBQSxXQUFXLEVBQUUsS0FQVjtBQVFIQyxNQUFBQSxPQUFPLEVBQUMsaUJBQVNDLFFBQVQsRUFDUjtBQUNJLFlBQUlDLEdBQUcsR0FBRyxNQUFWO0FBQ0lBLFFBQUFBLEdBQUcsSUFBSSxxQkFBbUJELFFBQVEsQ0FBQ0UsRUFBNUIsR0FBK0IsT0FBdEM7QUFDQUQsUUFBQUEsR0FBRyxJQUFJLFNBQU9ELFFBQVEsQ0FBQ0csS0FBaEIsR0FBc0IsT0FBN0I7QUFDQUYsUUFBQUEsR0FBRyxJQUFJLFNBQU9ELFFBQVEsQ0FBQ0csS0FBaEIsR0FBc0IsT0FBN0I7QUFDSkYsUUFBQUEsR0FBRyxJQUFJLE9BQVA7QUFFQXZCLFFBQUFBLENBQUMsQ0FBQ0csS0FBRCxDQUFELENBQVN1QixJQUFULENBQWMsT0FBZCxFQUF1QkMsT0FBdkIsQ0FBK0JKLEdBQS9CO0FBR0F2QixRQUFBQSxDQUFDLENBQUNLLElBQUQsQ0FBRCxDQUFRdUIsT0FBUixDQUFnQixPQUFoQjtBQUNBNUIsUUFBQUEsQ0FBQyxDQUFDSSxLQUFELENBQUQsQ0FBU0EsS0FBVCxDQUFlLE1BQWY7QUFDSCxPQXJCRTtBQXNCSHlCLE1BQUFBLEtBQUssRUFBRSxlQUFTUCxRQUFULEVBQW1CLENBQ3pCO0FBdkJFLEtBQVA7QUF5QkgsR0EvQkQ7QUFpQ0gsQ0F2Q0QiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgdmFyIHRhYmxlID0gJyNwcm9qZWN0cy10YWJsZSc7XG4gICAgdmFyIG1vZGFsID0gJyNhZGQtcHJvamVjdC1tb2RhbCc7XG4gICAgdmFyIGZvcm0gPSAnI2FkZC1wcm9qZWN0LWZvcm0nO1xuXG4gICAgJChmb3JtKS5vbignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciB1cmwgPSAkKHRoaXMpLmF0dHIoJ2FjdGlvbicpO1xuICAgICAgICBsZXQgZm9ybT0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JtKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiBmb3JtLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdKU09OJyxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHJvdyA9ICc8dHI+JztcbiAgICAgICAgICAgICAgICAgICAgcm93ICs9ICc8dGggc2NvcGU9XCJyb3dcIj4nK3Jlc3BvbnNlLmlkKyc8L3RoPic7XG4gICAgICAgICAgICAgICAgICAgIHJvdyArPSAnPHRkPicrcmVzcG9uc2UudGl0bGUrJzwvdGQ+JztcbiAgICAgICAgICAgICAgICAgICAgcm93ICs9ICc8dGQ+JytyZXNwb25zZS50aXRsZSsnPC90ZD4nO1xuICAgICAgICAgICAgICAgIHJvdyArPSAnPC90cj4nO1xuXG4gICAgICAgICAgICAgICAgJCh0YWJsZSkuZmluZCgndGJvZHknKS5wcmVwZW5kKHJvdyk7XG5cblxuICAgICAgICAgICAgICAgICQoZm9ybSkudHJpZ2dlcihcInJlc2V0XCIpO1xuICAgICAgICAgICAgICAgICQobW9kYWwpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KTtcbiJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcHJvamVjdHMuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/projects.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/projects.js"]();
/******/ 	
/******/ })()
;