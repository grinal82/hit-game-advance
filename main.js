/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/app.js
class Game {
  constructor() {
    this.goblin = new Goblin();
    this.deadCount = 0;
    this.lostCount = 0;
    this.deadScore = document.getElementById("dead");
    this.lostScore = document.getElementById("lost");
    this.intervalId = null;
  }
  init() {
    this.addClickHandlers();
    this.startGame();
  }
  addClickHandlers() {
    const holes = document.querySelectorAll(".hole");
    holes.forEach(hole => {
      hole.addEventListener("click", () => {
        if (hole.classList.contains("hole_active")) {
          this.incrementScore();
          this.goblin.hide();
        } else {
          this.incrementLostCount();
        }
        this.startGame();
      });
    });
  }
  startGame() {
    this.clearInterval();
    this.intervalId = setInterval(() => {
      this.goblin.appear();
    }, 2000);
  }
  clearInterval() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  incrementScore() {
    this.deadCount++;
    this.deadScore.textContent = this.deadCount;
  }
  incrementLostCount() {
    this.lostCount++;
    this.lostScore.textContent = this.lostCount;
    if (this.lostCount > 4) {
      this.endGame();
    }
  }
  endGame() {
    alert("Игра завершена!");
    this.deadCount = 0;
    this.lostCount = 0;
    this.clearInterval();
  }
}
class Goblin {
  constructor() {
    this.holes = document.querySelectorAll(".hole");
    this.activeHole = null;
    this.timerId = null;
  }
  appear() {
    if (this.activeHole) {
      this.activeHole.classList.remove("hole_active");
    }
    const randomIndex = Math.floor(Math.random() * this.holes.length);
    this.activeHole = this.holes[randomIndex];
    this.activeHole.classList.add("hole_active");
    this.timerId = setTimeout(() => {
      game.incrementLostCount();
      this.hide();
    }, 2000);
  }
  hide() {
    if (this.activeHole) {
      this.activeHole.classList.remove("hole_active");
      this.activeHole = null;
      clearTimeout(this.timerId);
    }
  }
  isActive() {
    return this.activeHole !== null;
  }
}
const game = new Game();
document.addEventListener("DOMContentLoaded", () => {
  game.init();
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;