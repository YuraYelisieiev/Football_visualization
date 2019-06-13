/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Point(x, y) {\n  this.x = x;\n  this.y = y;\n}\n\nfunction create_and_add(class_name, ihtml, container) {\n  let element = document.createElement(\"div\");\n  element.className = class_name;\n  element.innerHTML = ihtml;\n  container.append(element);\n}\n\nlet allTeams = document.getElementById(\"teams\");\nlet team_goal = new Map();\nlet teamInGoal = new Map();\n\nd3.csv(\"premier-league-goals-chances.csv\", d => {\n  return {\n    team: d.Team,\n    goal: [new Point(d.y1, d.x1), new Point(d.y2, d.x2)],\n    type: d.Type,\n    opp: d.Opp\n  };\n})\n  .then(data => {\n    data.map(first_team => {\n      team_goal[first_team.team] = team_goal[first_team.team] || [];\n      teamInGoal[first_team.team] = teamInGoal[first_team.team] || [];\n      data.map(second_team => {\n        if (second_team.opp === first_team.team && second_team.type === \"CG\") {\n          teamInGoal[first_team.team].push(second_team.goal);\n        }\n      });\n      if (first_team.type === \"CG\") {\n        team_goal[first_team.team].push(first_team.goal);\n      }\n    });\n  })\n  .then(() => {\n    let n = 1;\n    for (let team in team_goal) {\n      let container = document.createElement(\"div\");\n      container.className = \"TeamContainer\";\n      let allGoals = team_goal[team];\n      let inGoals = teamInGoal[team];\n      container.addEventListener(\"mousedown\", () => {\n        //element from another file\n        clearGoalLine();\n        allGoals.forEach(vector => {\n          drawGoalALine(vector[0], vector[1], \"blue\");\n        });\n        inGoals.forEach(vector => {\n          drawInGoalALine(vector[0], vector[1], \"red\");\n        });\n      });\n\n      create_and_add(\"number\", n, container);\n      create_and_add(\"team\", team, container);\n      allTeams.appendChild(container);\n      n++;\n    }\n  });\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });