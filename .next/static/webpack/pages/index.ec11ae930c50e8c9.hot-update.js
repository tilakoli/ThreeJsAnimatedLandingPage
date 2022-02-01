"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/utils/initDroneLayer.js":
/*!********************************************!*\
  !*** ./Components/utils/initDroneLayer.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": function() { return /* binding */ init; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// importing the model and texture loader\n\n\nif (WebGL.isWebGLAvailable()) {\n    // Initiate function or other initializations here\n    animate();\n} else {\n    var warning = WebGL.getWebGLErrorMessage();\n    document.getElementById(\"container\").appendChild(warning);\n}\nvar camera, scene, renderer;\nvar loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader();\nfunction init() {\n    camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);\n    camera.position.z = 5;\n    camera.rotation.z = 1;\n    // getting the scene from the threeJS\n    scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n    var light = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(16777215, 2);\n    scene.add(light);\n    // loading the model and texture with the help of the GLTFLoader\n    loader.load(\"/models/drone/scene.gltf\", function(gltf) {\n        var model = gltf.scene;\n        model.scale.set(0.45, 0.45, 0.45);\n        // defining the animated movement of\n        // the drone with the help of GSAP\n        gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(camera.position, {\n            z: 1,\n            duration: 1,\n            ease: \"back.out(1.7)\"\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(camera.rotation, {\n            z: 0,\n            duration: 1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(model.rotation, {\n            y: Math.PI * 1.95,\n            duration: 2,\n            delay: 1\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(model.scale, {\n            delay: 1,\n            duration: 1,\n            x: 0.25,\n            y: 0.25,\n            z: 0.25\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].to(model.position, {\n            delay: 1,\n            duration: 1,\n            x: 0.35,\n            y: 0.3\n        });\n        // then adding the model to the scene that we created\n        scene.add(model);\n    });\n    renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\n        antialias: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setAnimationLoop(animation);\n    renderer.setClearColor(2565927, 1);\n    document.body.appendChild(renderer.domElement);\n    // configuring the window resize event for our canvas\n    window.addEventListener(\"resize\", function() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n    });\n}\nfunction animation() {\n    requestAnimationFrame(animation);\n    renderer.render(scene, camera);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3V0aWxzL2luaXREcm9uZUxheWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThCO0FBQzlCLEVBQXlDO0FBQzRCO0FBQzlDO0FBQ3ZCLEVBQUUsRUFBRUcsS0FBSyxDQUFDQyxnQkFBZ0IsSUFBSSxDQUFDO0lBQzdCLEVBQWtEO0lBQ2xEQyxPQUFPO0FBQ1QsQ0FBQyxNQUFNLENBQUM7SUFDTixHQUFLLENBQUNDLE9BQU8sR0FBR0gsS0FBSyxDQUFDSSxvQkFBb0I7SUFDMUNDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQVcsWUFBRUMsV0FBVyxDQUFDSixPQUFPO0FBQzFELENBQUM7QUFDRCxHQUFHLENBQUNLLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRO0FBQzNCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ2IsZ0ZBQVU7QUFFdEIsU0FBU2MsSUFBSSxHQUFHLENBQUM7SUFDdEJKLE1BQU0sR0FBRyxHQUFHLENBQUNYLG9EQUF1QixDQUNsQyxFQUFFLEVBQ0ZpQixNQUFNLENBQUNDLFVBQVUsR0FBR0QsTUFBTSxDQUFDRSxXQUFXLEVBQ3RDLElBQUksRUFDSixFQUFFO0lBRUpSLE1BQU0sQ0FBQ1MsUUFBUSxDQUFDQyxDQUFDLEdBQUcsQ0FBQztJQUNyQlYsTUFBTSxDQUFDVyxRQUFRLENBQUNELENBQUMsR0FBRyxDQUFDO0lBQ3JCLEVBQXFDO0lBQ3JDVCxLQUFLLEdBQUcsR0FBRyxDQUFDWix3Q0FBVztJQUV2QixHQUFLLENBQUN3QixLQUFLLEdBQUcsR0FBRyxDQUFDeEIsK0NBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaERZLEtBQUssQ0FBQ2MsR0FBRyxDQUFDRixLQUFLO0lBRWYsRUFBZ0U7SUFDaEVWLE1BQU0sQ0FBQ2EsSUFBSSxDQUFDLENBQTBCLDJCQUFFLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7UUFDakQsR0FBRyxDQUFDQyxLQUFLLEdBQUdELElBQUksQ0FBQ2hCLEtBQUs7UUFDdEJpQixLQUFLLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtRQUVoQyxFQUFvQztRQUNwQyxFQUFrQztRQUNsQzdCLCtDQUFPLENBQUNTLE1BQU0sQ0FBQ1MsUUFBUSxFQUFFLENBQUM7WUFDeEJDLENBQUMsRUFBRSxDQUFDO1lBQ0pZLFFBQVEsRUFBRSxDQUFDO1lBQ1hDLElBQUksRUFBRSxDQUFlO1FBQ3ZCLENBQUM7UUFDRGhDLCtDQUFPLENBQUNTLE1BQU0sQ0FBQ1csUUFBUSxFQUFFLENBQUM7WUFDeEJELENBQUMsRUFBRSxDQUFDO1lBQ0pZLFFBQVEsRUFBRSxDQUFDO1FBQ2IsQ0FBQztRQUNEL0IsK0NBQU8sQ0FBQzJCLEtBQUssQ0FBQ1AsUUFBUSxFQUFFLENBQUM7WUFDdkJhLENBQUMsRUFBRUMsSUFBSSxDQUFDQyxFQUFFLEdBQUcsSUFBSTtZQUNqQkosUUFBUSxFQUFFLENBQUM7WUFDWEssS0FBSyxFQUFFLENBQUM7UUFDVixDQUFDO1FBQ0RwQywrQ0FBTyxDQUFDMkIsS0FBSyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUNwQlEsS0FBSyxFQUFFLENBQUM7WUFDUkwsUUFBUSxFQUFFLENBQUM7WUFDWE0sQ0FBQyxFQUFFLElBQUk7WUFDUEosQ0FBQyxFQUFFLElBQUk7WUFDUGQsQ0FBQyxFQUFFLElBQUk7UUFDVCxDQUFDO1FBQ0RuQiwrQ0FBTyxDQUFDMkIsS0FBSyxDQUFDVCxRQUFRLEVBQUUsQ0FBQztZQUN2QmtCLEtBQUssRUFBRSxDQUFDO1lBQ1JMLFFBQVEsRUFBRSxDQUFDO1lBQ1hNLENBQUMsRUFBRSxJQUFJO1lBQ1BKLENBQUMsRUFBRSxHQUFHO1FBQ1IsQ0FBQztRQUNELEVBQXFEO1FBQ3JEdkIsS0FBSyxDQUFDYyxHQUFHLENBQUNHLEtBQUs7SUFDakIsQ0FBQztJQUVEaEIsUUFBUSxHQUFHLEdBQUcsQ0FBQ2IsZ0RBQW1CLENBQUMsQ0FBQztRQUFDeUMsU0FBUyxFQUFFLElBQUk7SUFBQyxDQUFDO0lBQ3RENUIsUUFBUSxDQUFDNkIsT0FBTyxDQUFDekIsTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0UsV0FBVztJQUN0RE4sUUFBUSxDQUFDOEIsZ0JBQWdCLENBQUNDLFNBQVM7SUFDbkMvQixRQUFRLENBQUNnQyxhQUFhLENBQUMsT0FBUSxFQUFFLENBQUM7SUFDbENyQyxRQUFRLENBQUNzQyxJQUFJLENBQUNwQyxXQUFXLENBQUNHLFFBQVEsQ0FBQ2tDLFVBQVU7SUFFN0MsRUFBcUQ7SUFDckQ5QixNQUFNLENBQUMrQixnQkFBZ0IsQ0FBQyxDQUFRLFNBQUUsUUFDcEMsR0FEMEMsQ0FBQztRQUN2Q3JDLE1BQU0sQ0FBQ3NDLE1BQU0sR0FBR2hDLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHRCxNQUFNLENBQUNFLFdBQVc7UUFDdERSLE1BQU0sQ0FBQ3VDLHNCQUFzQjtRQUM3QnJDLFFBQVEsQ0FBQzZCLE9BQU8sQ0FBQ3pCLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFRCxNQUFNLENBQUNFLFdBQVc7SUFDeEQsQ0FBQztBQUNILENBQUM7U0FFUXlCLFNBQVMsR0FBRyxDQUFDO0lBQ3BCTyxxQkFBcUIsQ0FBQ1AsU0FBUztJQUMvQi9CLFFBQVEsQ0FBQ3VDLE1BQU0sQ0FBQ3hDLEtBQUssRUFBRUQsTUFBTTtBQUMvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvdXRpbHMvaW5pdERyb25lTGF5ZXIuanM/YjAyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbi8vIGltcG9ydGluZyB0aGUgbW9kZWwgYW5kIHRleHR1cmUgbG9hZGVyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanNcIjtcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5pZiAoV2ViR0wuaXNXZWJHTEF2YWlsYWJsZSgpKSB7XG4gIC8vIEluaXRpYXRlIGZ1bmN0aW9uIG9yIG90aGVyIGluaXRpYWxpemF0aW9ucyBoZXJlXG4gIGFuaW1hdGUoKTtcbn0gZWxzZSB7XG4gIGNvbnN0IHdhcm5pbmcgPSBXZWJHTC5nZXRXZWJHTEVycm9yTWVzc2FnZSgpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZCh3YXJuaW5nKTtcbn1cbmxldCBjYW1lcmEsIHNjZW5lLCByZW5kZXJlcjtcbmNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgNzAsXG4gICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgMC4wMSxcbiAgICAxMFxuICApO1xuICBjYW1lcmEucG9zaXRpb24ueiA9IDU7XG4gIGNhbWVyYS5yb3RhdGlvbi56ID0gMTtcbiAgLy8gZ2V0dGluZyB0aGUgc2NlbmUgZnJvbSB0aGUgdGhyZWVKU1xuICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIGNvbnN0IGxpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMik7XG4gIHNjZW5lLmFkZChsaWdodCk7XG5cbiAgLy8gbG9hZGluZyB0aGUgbW9kZWwgYW5kIHRleHR1cmUgd2l0aCB0aGUgaGVscCBvZiB0aGUgR0xURkxvYWRlclxuICBsb2FkZXIubG9hZChcIi9tb2RlbHMvZHJvbmUvc2NlbmUuZ2x0ZlwiLCAoZ2x0ZikgPT4ge1xuICAgIGxldCBtb2RlbCA9IGdsdGYuc2NlbmU7XG4gICAgbW9kZWwuc2NhbGUuc2V0KDAuNDUsIDAuNDUsIDAuNDUpO1xuXG4gICAgLy8gZGVmaW5pbmcgdGhlIGFuaW1hdGVkIG1vdmVtZW50IG9mXG4gICAgLy8gdGhlIGRyb25lIHdpdGggdGhlIGhlbHAgb2YgR1NBUFxuICAgIGdzYXAudG8oY2FtZXJhLnBvc2l0aW9uLCB7XG4gICAgICB6OiAxLFxuICAgICAgZHVyYXRpb246IDEsXG4gICAgICBlYXNlOiBcImJhY2sub3V0KDEuNylcIixcbiAgICB9KTtcbiAgICBnc2FwLnRvKGNhbWVyYS5yb3RhdGlvbiwge1xuICAgICAgejogMCxcbiAgICAgIGR1cmF0aW9uOiAxLFxuICAgIH0pO1xuICAgIGdzYXAudG8obW9kZWwucm90YXRpb24sIHtcbiAgICAgIHk6IE1hdGguUEkgKiAxLjk1LFxuICAgICAgZHVyYXRpb246IDIsXG4gICAgICBkZWxheTogMSxcbiAgICB9KTtcbiAgICBnc2FwLnRvKG1vZGVsLnNjYWxlLCB7XG4gICAgICBkZWxheTogMSxcbiAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgeDogMC4yNSxcbiAgICAgIHk6IDAuMjUsXG4gICAgICB6OiAwLjI1LFxuICAgIH0pO1xuICAgIGdzYXAudG8obW9kZWwucG9zaXRpb24sIHtcbiAgICAgIGRlbGF5OiAxLFxuICAgICAgZHVyYXRpb246IDEsXG4gICAgICB4OiAwLjM1LFxuICAgICAgeTogMC4zLFxuICAgIH0pO1xuICAgIC8vIHRoZW4gYWRkaW5nIHRoZSBtb2RlbCB0byB0aGUgc2NlbmUgdGhhdCB3ZSBjcmVhdGVkXG4gICAgc2NlbmUuYWRkKG1vZGVsKTtcbiAgfSk7XG5cbiAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSB9KTtcbiAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgcmVuZGVyZXIuc2V0QW5pbWF0aW9uTG9vcChhbmltYXRpb24pO1xuICByZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4MjcyNzI3LCAxKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAvLyBjb25maWd1cmluZyB0aGUgd2luZG93IHJlc2l6ZSBldmVudCBmb3Igb3VyIGNhbnZhc1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGlvbigpIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbn1cbiJdLCJuYW1lcyI6WyJUSFJFRSIsIkdMVEZMb2FkZXIiLCJnc2FwIiwiV2ViR0wiLCJpc1dlYkdMQXZhaWxhYmxlIiwiYW5pbWF0ZSIsIndhcm5pbmciLCJnZXRXZWJHTEVycm9yTWVzc2FnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImNhbWVyYSIsInNjZW5lIiwicmVuZGVyZXIiLCJsb2FkZXIiLCJpbml0IiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJyb3RhdGlvbiIsIlNjZW5lIiwibGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJsb2FkIiwiZ2x0ZiIsIm1vZGVsIiwic2NhbGUiLCJzZXQiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInkiLCJNYXRoIiwiUEkiLCJkZWxheSIsIngiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwic2V0U2l6ZSIsInNldEFuaW1hdGlvbkxvb3AiLCJhbmltYXRpb24iLCJzZXRDbGVhckNvbG9yIiwiYm9keSIsImRvbUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/utils/initDroneLayer.js\n");

/***/ })

});