/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ \"./src/media.ts\");\n\n// --- NEW CODE: Pure HTML/CSS/JS Image Viewer ---\nconst s3Bucket = 'pabloguarneros';\nconst s3Region = 'us-east-1';\nconst DRAWING_HIGH_RES_PATH = 'pabloguarneros/drawings/';\nconst DRAWING_LOW_RES_PATH = 'pabloguarneros/drawings_low_res/';\n// Create sidebar\nconst sidebar = document.createElement('div');\nsidebar.id = 'sidebar';\ndocument.body.appendChild(sidebar);\n// Create main image viewer\nconst viewer = document.createElement('div');\nviewer.id = 'viewer';\nviewer.style.position = 'fixed';\nviewer.style.display = 'flex';\nviewer.style.alignItems = 'center';\nviewer.style.justifyContent = 'center';\nviewer.style.background = 'rgba(0,0,0,0.85)';\nviewer.style.transition = 'background 0.4s';\ndocument.body.appendChild(viewer);\n// Main image element\nconst mainImg = document.createElement('img');\nmainImg.style.maxWidth = '80vw';\nmainImg.style.maxHeight = '80vh';\nmainImg.style.borderRadius = '16px';\nmainImg.style.boxShadow = '0 8px 32px rgba(0,0,0,0.5)';\nmainImg.style.opacity = '0';\nmainImg.style.transform = 'scale(0.96)';\nmainImg.style.transition = 'opacity 0.5s, transform 0.5s';\nviewer.appendChild(mainImg);\n// Sidebar thumbnails\n_media__WEBPACK_IMPORTED_MODULE_0__.drawings.forEach((drawing, idx) => {\n    const thumb = document.createElement('img');\n    thumb.src = `https://${s3Bucket}.s3.${s3Region}.amazonaws.com/${DRAWING_LOW_RES_PATH}` + drawing.name;\n    thumb.style.width = '80px';\n    thumb.style.height = '80px';\n    thumb.style.objectFit = 'cover';\n    thumb.style.cursor = 'pointer';\n    thumb.title = drawing.name || `Drawing ${idx + 1}`;\n    thumb.style.borderRadius = '3px';\n    thumb.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';\n    thumb.style.transition = 'box-shadow 0.3s, transform 0.3s';\n    thumb.onmouseenter = () => {\n        thumb.style.boxShadow = '0 4px 16px rgba(0,0,0,0.4)';\n        thumb.style.transform = 'scale(1.05)';\n    };\n    thumb.onmouseleave = () => {\n        thumb.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';\n        thumb.style.transform = 'scale(1)';\n    };\n    // Preload high-res image\n    const highResImg = new Image();\n    highResImg.src = `https://${s3Bucket}.s3.${s3Region}.amazonaws.com/${DRAWING_HIGH_RES_PATH}` + drawing.name;\n    thumb.onclick = () => {\n        mainImg.style.opacity = '0';\n        mainImg.style.transform = 'scale(0.96)';\n        setTimeout(() => {\n            // If preloaded, use it instantly\n            if (highResImg.complete) {\n                mainImg.src = highResImg.src;\n                mainImg.style.opacity = '1';\n                mainImg.style.transform = 'scale(1)';\n            }\n            else {\n                mainImg.src = highResImg.src;\n                mainImg.onload = () => {\n                    mainImg.style.opacity = '1';\n                    mainImg.style.transform = 'scale(1)';\n                };\n            }\n        }, 200);\n    };\n    sidebar.appendChild(thumb);\n});\n// Show first image by default\nif (_media__WEBPACK_IMPORTED_MODULE_0__.drawings.length > 0) {\n    mainImg.src = `https://${s3Bucket}.s3.${s3Region}.amazonaws.com/${DRAWING_HIGH_RES_PATH}` + _media__WEBPACK_IMPORTED_MODULE_0__.drawings[0].name;\n    mainImg.onload = () => {\n        mainImg.style.opacity = '1';\n        mainImg.style.transform = 'scale(1)';\n    };\n}\nconst supportBtn = document.createElement('button');\nsupportBtn.id = 'support-this-project-button';\nsupportBtn.innerText = '🪼';\nsupportBtn.title = 'Support This Project';\ndocument.body.appendChild(supportBtn);\nconst supportCard = document.createElement('div');\nsupportCard.id = 'support-this-project-card';\nsupportCard.style.display = 'none';\ndocument.body.appendChild(supportCard);\n// Close button\nconst closeBtn = document.createElement('div');\ncloseBtn.id = 'close-support-this-project-button';\ncloseBtn.innerText = 'close';\ncloseBtn.title = 'Close support this project card.';\nsupportCard.appendChild(closeBtn);\nconst heading = document.createElement('p');\nheading.id = 'support-this-project-heading';\nheading.innerHTML = '<b>get_bio()</b>';\nsupportCard.appendChild(heading);\nconst message = document.createElement('p');\nmessage.id = 'support-this-project-message';\nmessage.className = 'tldr-height';\nmessage.innerHTML = `\n<p>Hello, my name is Pablo. I'm a writer from Mexico City who likes to draw. These are some drawings painted at good times and bad times.</p>\n<br/>\n<p>One day, I want to live in a lighthouse by a grey sand beach. I write for work. I guess I draw to connect.</p>\n<br/>\n<pre style=\"font-family: inherit; font-size: inherit; margin: 0;\">\nmoments: List[str] = []\nwhile i.keep_dreaming():\n    life.time += timedelta(minutes=45)\n    if i.meet(you):\n        break()\n\nmoments.extend(a_lifetime_with(you))\n</pre>\n`;\nsupportCard.appendChild(message);\n// Links container\nconst linksContainer = document.createElement('div');\nlinksContainer.id = 'support-this-project-links';\nsupportCard.appendChild(linksContainer);\nconst links = [\n    {\n        label: 'Merch',\n        emoji: '🦦',\n        url: 'https://www.redbubble.com/people/WRNO',\n        desc: 'A place where you can buy a few... pillow covers',\n    },\n    {\n        label: 'Storyture',\n        emoji: '🪼',\n        url: 'https://www.storyture.com/',\n        desc: 'A fictional world of nonfictional things.',\n    },\n];\nlinks.forEach(link => {\n    const btn = document.createElement('button');\n    btn.className = 'support-link';\n    btn.onclick = () => window.open(link.url, '_blank');\n    btn.innerHTML = `\n        <p><b>${link.label}</b> ${link.emoji}</p>\n        <p class=\"tldr-width tldr-height\">${link.desc}</p>\n    `;\n    linksContainer.appendChild(btn);\n});\n// Show/hide logic with smooth transition\nlet isOpen = false;\nsupportBtn.onclick = () => {\n    isOpen = true;\n    supportCard.style.display = 'block';\n    setTimeout(() => {\n        supportCard.classList.add('open');\n    }, 10);\n};\ncloseBtn.onclick = () => {\n    supportCard.classList.remove('open');\n    setTimeout(() => {\n        supportCard.style.display = 'none';\n        isOpen = false;\n    }, 400);\n};\n\n\n//# sourceURL=webpack://pabloguarneros/./src/index.tsx?\n}");

/***/ }),

/***/ "./src/media.ts":
/*!**********************!*\
  !*** ./src/media.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawings: () => (/* binding */ drawings)\n/* harmony export */ });\nconst drawings = [\n    {\n        name: \"000-000-000.png\",\n        alias: \"Data Park\"\n    },\n    {\n        name: \"000-000-001.png\",\n        alias: \"Yendo\"\n    },\n    {\n        name: \"000-000-002.png\",\n        alias: \"Not BA\"\n    },\n    {\n        name: \"000-000-003.png\",\n        alias: \"Purple\"\n    },\n    {\n        name: \"000-000-004.png\",\n        alias: \"Hope\"\n    },\n    {\n        name: \"000-000-005.png\",\n        alias: \"Yellow\"\n    },\n    {\n        name: \"000-000-031.png\",\n    },\n    {\n        name: \"000-000-034.png\",\n    },\n    {\n        name: \"000-000-038.png\",\n    },\n    {\n        name: \"000-000-033.png\",\n    },\n    {\n        name: \"000-000-035.png\",\n    },\n    {\n        name: \"000-000-022.png\",\n    },\n    {\n        name: \"000-000-023.png\",\n    },\n    {\n        name: \"000-000-011.png\",\n    },\n    {\n        name: \"000-000-006.png\",\n    },\n    {\n        name: \"000-000-007.png\",\n    },\n    {\n        name: \"000-000-008.png\",\n    },\n    {\n        name: \"000-000-009.png\",\n    },\n    {\n        name: \"000-000-010.png\",\n    },\n    {\n        name: \"000-000-012.png\",\n    },\n    {\n        name: \"000-000-013.png\",\n    },\n    {\n        name: \"000-000-014.png\",\n    },\n    {\n        name: \"000-000-015.png\",\n    },\n    {\n        name: \"000-000-016.png\",\n    },\n    {\n        name: \"000-000-017.png\",\n    },\n    {\n        name: \"000-000-018.png\",\n    },\n    {\n        name: \"000-000-019.png\",\n    },\n    {\n        name: \"000-000-020.png\",\n    },\n    {\n        name: \"000-000-021.png\",\n    },\n    {\n        name: \"000-000-024.png\",\n    },\n    {\n        name: \"000-000-025.png\",\n    },\n    {\n        name: \"000-000-027.png\",\n    },\n    {\n        name: \"000-000-028.png\",\n    },\n    {\n        name: \"000-000-029.png\",\n    },\n    {\n        name: \"000-000-030.png\",\n    },\n    {\n        name: \"000-000-032.png\",\n    },\n    {\n        name: \"000-000-036.png\",\n    },\n    {\n        name: \"000-000-037.png\",\n    },\n    {\n        name: \"000-000-039.jpg\",\n    }\n];\nconst poetry = [\n    {\n        path: \"\",\n        position: [0, 0, 0],\n        quaternion: [0, 0, 0, 1]\n    }\n];\n\n\n//# sourceURL=webpack://pabloguarneros/./src/media.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;