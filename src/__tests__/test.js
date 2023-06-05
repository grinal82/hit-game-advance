import { Game } from "../js/app.js";
import { Goblin } from "../js/app.js";

describe("Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
    document.body.innerHTML = `
      <div class="card">
        <div id="status" class="status">
          Убито демонов: <span id="dead">0</span><br>
          Промахов: <span id="lost">0</span><br>
        </div>
        <div class="hole-game">
          <div class="hole hole_active" id="hole1"></div>
          <div class="hole" id="hole2"></div>
          <div class="hole" id="hole3"></div>
          <div class="hole" id="hole4"></div>
          <div class="hole" id="hole5"></div>
          <div class="hole" id="hole6"></div>
          <div class="hole" id="hole7"></div>
          <div class="hole" id="hole8"></div>
          <div class="hole" id="hole9"></div>
        </div>
      </div>
    `;
  });

  test("incrementScore should increase the deadCount and update the deadScore element", () => {
    game.incrementScore();
    expect(game.deadCount).toBe(1);
    expect(game.deadScore.textContent).toBe("1");
  });

  test("incrementLostCount should increase the lostCount and update the lostScore element", () => {
    game.incrementLostCount();
    expect(game.lostCount).toBe(1);
    expect(game.lostScore.textContent).toBe("1");
  });
});

describe("Goblin", () => {
  let goblin;

  beforeEach(() => {
    goblin = new Goblin();
    document.body.innerHTML = `
      <div class="hole hole_active" id="hole1"></div>
      <div class="hole" id="hole2"></div>
      <div class="hole" id="hole3"></div>
      <div class="hole" id="hole4"></div>
      <div class="hole" id="hole5"></div>
      <div class="hole" id="hole6"></div>
      <div class="hole" id="hole7"></div>
      <div class="hole" id="hole8"></div>
      <div class="hole" id="hole9"></div>
    `;
  });

  test("appear should add hole_active class to a random hole", () => {
    goblin.appear();
    expect(document.querySelector(".hole_active")).toBeTruthy();
  });
});
