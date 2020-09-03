(this["webpackJsonpspace"] = this["webpackJsonpspace"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/back1.jpg */ "./src/img/back1.jpg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./Cube/spaceshipText.jpg */ "./src/Cube/spaceshipText.jpg");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./Cube/star02.png */ "./src/Cube/star02.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "/* * {\n  margin: 0;\n} */\n\n.background{\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  height: 100vh;\n\n\n}\n\n.background h1 {\n  margin: 0;\n}\n\n.title{\n  color:white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height:100%\n}\n.link{\n  text-decoration: none;\n  color:white;\n  font-size: 40px;\n  font-weight: bolder;\n}\n.link:hover{\n  color: yellowgreen;\n}\n\n#bigContainer {\n  perspective: 1000px;\n  perspective-origin: 50% 400px;\n}\n\n#wrapper {\n  height: 600px;\n  width: 1000px;\n  background-color: black;\n}\n\n#container {\n  width: 2000px;\n  position: relative;\n  transform-style: preserve-3d;\n  transform-origin: center center 50px;\n}\n\n#cubeWrapper {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  transform-style: preserve-3d;\n  transform: rotateY(100deg)\n}\n\n.sides {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n}\n\n#front {\n  transform: translateZ(-25px);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n\n}\n\n\n#back {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n\n  transform: translateZ(25px);\n\n}\n\n#top {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  transform-origin: top center;\n  transform: translateZ(25px) rotateX(-90deg) translateX(0px);\n}\n\n\n\n#bottom {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  transform-origin: bottom center;\n  transform: rotateX(90deg) translateY(25px);\n\n}\n\n\n#left {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  transform-origin: center left;\n  transform: rotateY(270deg) translateX(-25px);\n\n}\n\n\n#rigth {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  transform-origin: top right;\n  transform: rotateY(270deg) translateX(25px);\n\n}\n\n.bullet {\n\n  width: 5px;\n  height: 5px;\n  position: absolute;\n  background-color: yellow;\n}\n\n.star {\n  /* background-color: white; */\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  width: 4px;\n  height: 4px;\n  position: absolute;\n}\n\n.b {\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-color: #3b4ba3;\n  border-radius: 50%;\n  position: absolute;\n  box-shadow: inset -25px -25px 40px rgba(0, 0, 0, .5);\n  background-image: -ms-linear-gradient(-45deg, rgba(255, 255, 220, .3) 0%, transparent 100%);\n\n}\n\n.planet {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  background-size: contain;\n  background-repeat: no-repeat;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Cube_Space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cube/Space */ "./src/Cube/Space.js");
/* harmony import */ var _auth_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/Login */ "./src/auth/Login.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Register */ "./src/Register.js");
var _jsxFileName = "/home/elisita/react/project4/frontend/space/src/App.js";









function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/Register",
    exact: true,
    render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Register__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 53
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/login",
    exact: true,
    render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 50
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 45
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/game",
    exact: true,
    render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cube_Space__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 49
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cube_Space__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Cube/Bullets.js":
/*!*****************************!*\
  !*** ./src/Cube/Bullets.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Bullet {
  constructor(id, x, y, z) {
    this.initialize = () => {
      document.getElementById("container").appendChild(this.bulletEl);
    };

    this.movement = bulletObj => {
      if (this.z < -1000) {
        this.bulletEl.remove();
        delete bulletObj[this.id];
      } else {
        this.z -= 20;
        this.bulletEl.style.transform = `translate3d(${this.x}px, ${this.y}px, ${this.z}px)`;
      }
    };

    this.deleteEl = () => {
      this.bulletEl.remove();
    };

    this.id = id;
    this.x = x;
    this.y = y;
    this.z = z;
    this.bulletEl = document.createElement("div");
    this.bulletEl.className = "bullet";
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Bullet);

/***/ }),

/***/ "./src/Cube/Enemy.js":
/*!***************************!*\
  !*** ./src/Cube/Enemy.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Enemy {
  constructor(id, x, y, z) {
    this.moving = () => {
      const width = document.getElementById("wrapper").offsetWidth;
      const height = document.getElementById("wrapper").offsetHeight;
      this.z += 20;

      if (this.z > 0) {
        this.z = -2000;
      }

      if (this.x > width) {
        this.x = 0;
      } else if (this.x < 0) {
        this.x = 1000;
      } else if (this.y > height) {
        this.y = 0;
      } else if (this.y < 0) {
        this.y = 600;
      }
    };

    this.deleteEl = () => {
      console.log(document.getElementById("container"));
      this.enemyEl.remove();
    };

    this.id = id;
    this.x = x;
    this.y = y;
    this.z = z;
    this.enemyEl = document.createElement("div");
  }

  initializing() {
    const container = document.getElementById("container");
    this.enemyEl.classList = "b";
    container.appendChild(this.enemyEl);
  }

  drawing() {
    this.enemyEl.style.transform = `translate3d(${this.x}px, ${this.y}px, ${this.z}px)`;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./src/Cube/Logic.js":
/*!***************************!*\
  !*** ./src/Cube/Logic.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stars */ "./src/Cube/Stars.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Cube/Player.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enemy */ "./src/Cube/Enemy.js");
/* harmony import */ var _Planets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Planets */ "./src/Cube/Planets.js");




let time = Date.now();
let start = true;
let player = {};
const starsObj = {};
const enemyObj = {};
const bulletObj = {};
const interval = 20;
const planets = {};
const planetUrl = ["/img/sunRotate.gif"];

const stop = e => {
  start = !start;
};

const createStartButton = () => {
  let button = document.getElementById("stop");
  button.addEventListener("click", stop);
};

const creatingPlayer = () => {
  player = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"](200, 300, -100, bulletObj);
  player.initializing();
};

const creatingPlanets = () => {
  planetUrl.forEach((url, i) => {
    const planet = new _Planets__WEBPACK_IMPORTED_MODULE_3__["default"](i, 350, 250, -1000, url);
    planet.initializing();
    planets[i] = planet;
    console.log(planet);
  });
};

const createStars = () => {
  for (let i = 0; i < 500; i++) {
    starsObj[i] = new _Stars__WEBPACK_IMPORTED_MODULE_0__["default"](i, Math.random() * 1000, Math.random() * 600, -(Math.random() * 600));
    starsObj[i].initialize();
  }
};

const creatingEnemy = () => {
  for (let i = 0; i < 1; i++) {
    enemyObj[i] = new _Enemy__WEBPACK_IMPORTED_MODULE_2__["default"](i, 300, 300, -2000);
    enemyObj[i].initializing();
  }
};

const collisionDetection = (obj1, obj2) => {
  const radiusCheck = (a, b, r) => {
    return Math.abs(a - b) < r;
  };

  if (radiusCheck(obj1.x, obj2.x, 100) && radiusCheck(obj1.y, obj2.y, 100) && radiusCheck(obj1.z, obj2.z, 100)) {
    console.log("HITEED,", obj1, obj2);
    return true;
  }
};

const gameLoop = () => {
  setInterval(() => {
    const dt = Date.now() - time; // 0

    time = Date.now(); // 0

    if (start) {
      //stars
      for (let key in starsObj) {
        const star = starsObj[key];
        star.movement();
      } //bullets


      for (let key in bulletObj) {
        const bullet = bulletObj[key];
        bullet.movement(bulletObj);
      } //enemies


      for (const key in enemyObj) {
        enemyObj[key].moving();
        enemyObj[key].drawing();
      } //run collision detections bullet-enemy


      for (let key in bulletObj) {
        const bullet = bulletObj[key];

        for (const eKey in enemyObj) {
          const enemy = enemyObj[eKey];
          const collided = collisionDetection(bullet, enemy);

          if (collided) {
            bullet.deleteEl();
            enemy.deleteEl();
            delete bulletObj[bullet.id];
            delete enemyObj[enemy.id];
          }
        }
      } //run collision detections player-enemy


      for (let key in enemyObj) {
        const enemy = enemyObj[key];
        const collided = collisionDetection(player, enemy);

        if (collided) {//   stop()
        }
      } //player


      if (player) {
        player.moving(dt);
        player.drawing();
      }
    }
  }, interval);
};

const logic = () => {
  // one time initialization
  creatingPlanets();
  createStars();
  createStartButton();
  creatingPlayer();
  creatingEnemy(); // main game loop

  gameLoop();
};

/* harmony default export */ __webpack_exports__["default"] = (logic);

/***/ }),

/***/ "./src/Cube/Planets.js":
/*!*****************************!*\
  !*** ./src/Cube/Planets.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Planet {
  constructor(id, x, y, z, url) {
    this.initializing = () => {
      this.planetEl.style.backgroundImage = `url(${this.url})`;
      this.planetEl.style.top = this.y + "px";
      this.planetEl.style.left = this.x + "px";
      this.planetEl.style.transform = `translateZ(${this.z}px)`;
      document.getElementById("container").appendChild(this.planetEl);
    };

    this.id = id;
    this.x = x;
    this.y = y;
    this.z = z;
    this.url = url;
    this.planetEl = document.createElement("div");
    this.planetEl.classList = "planet";
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Planet);

/***/ }),

/***/ "./src/Cube/Player.js":
/*!****************************!*\
  !*** ./src/Cube/Player.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bullets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bullets */ "./src/Cube/Bullets.js");


class Player {
  constructor(x, y, z, bulletObj) {
    this.pressingKeys = e => {
      const movingKeysArr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      movingKeysArr.forEach(val => {
        if (e.code === val) {
          e.preventDefault();
        }
      });

      if (e.type === "keydown") {
        this.keys[e.code] = true;
      }

      if (e.type === "keyup") {
        this.keys[e.code] = false;
      }
    };

    this.moving = dt => {
      const width = document.getElementById("wrapper").offsetWidth;
      const height = document.getElementById("wrapper").offsetHeight;
      this.rotation += 5;

      if (this.x > width) {
        this.x = 0;
      } else if (this.x < 0) {
        this.x = 1000;
      } else if (this.y > height) {
        this.y = 0;
      } else if (this.y < 0) {
        this.y = 600;
      } else {
        if (this.keys["ArrowDown"]) {
          this.y += 0.2 * dt;
        }

        if (this.keys["ArrowUp"]) {
          this.y -= 0.2 * dt;
        }

        if (this.keys["ArrowLeft"]) {
          this.x -= 0.2 * dt;
        }

        if (this.keys["ArrowRight"]) {
          this.x += 0.2 * dt;
        }

        if (this.keys["KeyS"]) {
          this.z -= 0.2 * dt;
        }

        if (this.keys["KeyX"]) {
          this.z += 0.2 * dt;
        }

        if (this.keys["KeyC"]) {
          this.shooting();
        }
      }
    };

    this.shooting = () => {
      this.i++;
      const bullet = new _Bullets__WEBPACK_IMPORTED_MODULE_0__["default"](this.i, this.x, this.y, this.z);
      bullet.initialize();
      this.bulletsObj[this.i] = bullet;
    };

    this.x = x;
    this.y = y;
    this.z = z;
    this.keys = {};
    this.i = 0;
    this.bulletsObj = bulletObj;
    this.rotation = 0;
  }

  initializing() {
    const container = document.getElementById("container");
    window.addEventListener("keydown", this.pressingKeys);
    window.addEventListener("keyup", this.pressingKeys);
  }

  drawing() {
    const cubeWrapper = document.getElementById("cubeWrapper");
    cubeWrapper.style.transform = `translate3d(${this.x}px, ${this.y}px, ${this.z}px) rotateX(${this.rotation}deg) rotateY(${this.rotation}deg) rotateZ(${this.rotation}deg)`; // cubeWrapper.style.transform = ``;
  }

  deleteEl() {
    const cubeWrapper = document.getElementById("cubeWrapper");
    cubeWrapper.parentNode.removeChild(cubeWrapper);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/Cube/Space.js":
/*!***************************!*\
  !*** ./src/Cube/Space.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logic */ "./src/Cube/Logic.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/elisita/react/project4/frontend/space/src/Cube/Space.js";




class Cube extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.componentDidMount = () => {
      Object(_Logic__WEBPACK_IMPORTED_MODULE_1__["default"])();
    };
  }

  render() {
    console.log("Render", Date.now());
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "bigContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "cubeWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sides",
      id: "front",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sides",
      id: "back",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sides",
      id: "top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sides",
      id: "bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sides",
      id: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sides",
      id: "rigth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      id: "stop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, "Stop"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cube);

/***/ }),

/***/ "./src/Cube/Stars.js":
/*!***************************!*\
  !*** ./src/Cube/Stars.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Stars {
  constructor(id, x, y, z) {
    this.id = id;
    this.starEl = document.createElement("div");
    this.starEl.classList = "star";
    this.x = x;
    this.y = y;
    this.z = z;
    this.velocity = Math.random() * 25;
  }

  initialize() {
    this.starEl.style.top = this.y + "px";
    this.starEl.style.left = this.x + "px";
    const container = document.getElementById("container");
    container.appendChild(this.starEl);
  }

  movement() {
    this.z += this.velocity;
    this.starEl.style.transform = `translateZ(${this.z}px)`;

    if (this.z > 1000) {
      this.z = -2000;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Stars);

/***/ }),

/***/ "./src/Cube/spaceshipText.jpg":
/*!************************************!*\
  !*** ./src/Cube/spaceshipText.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/spaceshipText.96328d09.jpg";

/***/ }),

/***/ "./src/Cube/star02.png":
/*!*****************************!*\
  !*** ./src/Cube/star02.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAMAAADXT/YiAAADAFBMVEUAAAA5OTlCQkJSUlJaWlpzc3N7e3uEhISMjIyUlJScnJylpaWtra3GxsbOzs69tbW1ra2clJR7c3NrY2P/3t7vxsaMc3P/zs7vtbVjSkq1hIT/tbXnhIR7QkIhEBD/e3uEKSlSGBjOCAjOKSH3Y1LOWkqUY1qlQjHeMQj/OQhzGABNLQSlKQB7Y1r/hFLOYzm9QghjIQD/tYTvaxhzORDehDljWlKUjITOjEqEWin/pUL3jBj/1qWtjGOEUgitcxClawj/5721exCUYwj33q2cjGvWtXOlhEL3tSnvrSFza1pKQjHvzoT/zmPerUL/vSm1lELvvUL/xjFaQgjOlAj/3oTntSH/997v5861rZS1pXP/55z/1lqlnHuEe1r/99b/762chBjnximtnCH/5yGtraWcnIxKSkKtrZQxMSmlpYRaWhjOzjH//zl7hCHW5zmltTGtxjlzhDmUtUK1zntzlDFSaym992N7pUKl3lJ7tULn9957jHOlvZyc93vG5717tWtSlEI5hCkYORBr3lopWiFz/2NazkpClDlrzmNKrUKtta21zrU5QjkhMSGl96U5czkhUiEpayk5lDkYUhgISjEQQjkxOVIxOYxrc85KUrXv7//n5/+9vdZra3vOzvfGxvdCQlqlpee1tf9KSmuUlNacnOdzc61ra6Wlpf+EhM5jY5xzc7VSUoR7e8ZCQmtaWpRKSntjY6U5OWMpKUpCQnsxMWM5OXNjY85jY/9SUtZCQr0hIWNSUv85ObVCQt4hIXMxKXtjWpSMhK1jWoxKKaVCEMYpAJRKKZS1nOchGDFjQpw/LQ4hAFIxAHuEY62EQtZjIbU5AIS1hO+ta/dzQq2ESsZSKXtKIXMxAGNKAJRSAKVKOVpjSnvOlP+ca8Z7Qq2cUt5KCIQhADmtY8ZKAGOcY6VjAHN7c3sKGQpKAEpSAFJ7AHN7SnNKMUJjKUKEa3OUc3v/c5RjOUKUa3OcOUr/jJy9a3PvY3POKTn/OUp7GCH3c3vWOUKlISn///+esnxoAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+IMDwAtLBg523IAAAAvSURBVAjXY2AAAhYGGGCFMdLZ0qEMVk5WEJOF9QXnf3M2VhawmDlrOpo6JL0Q8wAKKAXqn9VOvQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/elisita/react/project4/frontend/space/src/Home.js";



class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "background",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "#",
      className: "link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }
    }, "The future of the \uD83C\uDF0C is in your \u270B\u270B")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/Register.js":
/*!*************************!*\
  !*** ./src/Register.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/home/elisita/react/project4/frontend/space/src/Register.js";



class Register extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.changeHandler = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
      console.log(this.state);
    };

    this.registerHandler = () => {
      this.props.register(this.state);
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, "register", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      name: "firstname",
      type: "firstname",
      onChange: this.changeHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      name: "lastname",
      type: "lastname",
      onChange: this.changeHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      name: "email",
      type: "email",
      onChange: this.changeHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      name: "password",
      type: "password",
      onChange: this.changeHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.registerHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, "Register")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "./src/auth/Login.js":
/*!***************************!*\
  !*** ./src/auth/Login.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/home/elisita/react/project4/frontend/space/src/auth/Login.js";



class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      email: "",
      password: ""
    };

    this.changeHandler = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.loginHandler = () => {
      this.props.login(this.state);
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, "login", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      name: "email",
      type: "email",
      onChange: this.changeHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      name: "password",
      type: "password",
      onChange: this.changeHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: this.loginHandler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, "Login")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/img/back1.jpg":
/*!***************************!*\
  !*** ./src/img/back1.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/back1.9e977f31.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/elisita/react/project4/frontend/space/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/elisita/react/project4/frontend/space/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/elisita/react/project4/frontend/space/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/elisita/react/project4/frontend/space/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map