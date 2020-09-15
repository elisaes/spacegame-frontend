import Stars from "./Stars";
import Player from "./Player";
import Enemy from "./Enemy";
import Planet from "./Planets";
import PlanetMov from "./PlanetMov";

let time = Date.now();
let start = true;
let player = {};
const starsObj = {};
const enemyObj = {};
const bulletObj = {};
const interval = 20;
const planets = {};
const movingPlanets = {};
const planetUrl = ["/img/sunRotate.gif"];
const windowDim = { height: 600, width: 800 };

const stop = (e) => {
  start = !start;
};

const createStartButton = () => {
  let button = document.getElementById("stop");
  button.addEventListener("click", stop);
};
const creatingPlayer = () => {
  player = new Player(300, 300, -100, bulletObj, 50);
  player.initializing();
};
const creatingPlanets = () => {
  planetUrl.forEach((url, i) => {
    const planet = new Planet(
      i,
      windowDim.width / 2 - 100,
      windowDim.height / 2 - 100,
      -5000,
      url
    );
    planet.initializing();

    planets[i] = planet;
    // console.log(planet);
  });
};

const createStars = () => {
  for (let i = 0; i < 300; i++) {
    starsObj[i] = new Stars(
      i,
      Math.random() * 1000,
      Math.random() * 600,
      -(Math.random() * 600)
    );

    starsObj[i].initialize();
  }
};

const creatingEnemy = () => {
  const x = [300, -200, 1100, 1000, 500];
  const y = [300, 0, 100, 0, 0];
  const z = [-5000, -1000, -5000, -5000, -4000];
  const deltaz = [20, 30, 50, 40, 10];

  for (let i = 0; i < 5; i++) {
    enemyObj[i] = new Enemy(i, x[i], y[i], z[i], 80, deltaz[i]);
    enemyObj[i].initializing();
  }
};

const collisionDetection = (obj1, obj2) => {
  const radiusCheck = (a, b, r) => {
     //console.log(a, b);
    return Math.abs(a - b) < r;
  };

  if (
    radiusCheck(obj1.x + obj1.width / 2, obj2.x + obj2.width / 2, 100) &&
    radiusCheck(obj1.y + obj1.width / 2, obj2.y + obj2.width / 2, 100) &&
    radiusCheck(obj1.z, obj2.z, 100)
  ) {
    console.log("collided");
    return true;
  } else {
    return false;
  }
};

const updateDimension = () => {
  windowDim.width = window.innerWidth;
  windowDim.height = window.innerHeight;
};
const creatingMovingPlanets = () => {
  const url = [
    "/img/pngwave.png",
    "/img/saturn-transparent.png",
    "/img/earth-transparent.png",
    "/img/sun-transparent.png",
    "/img/jupiter-transparent.png",
  ];
  const x = [0, -200, 1100, 1000, 500];
  const y = [0, 400, 500, 100, 100];
  const z = [-3000, -1000, -5000, -100, -4000];

  for (let i = 0; i < 5; i++) {
    const movPlanet = new PlanetMov(i, x[i], y[i], z[i], url[i], 200);
    movPlanet.initializing();
    movingPlanets[i] = movPlanet;
  }
};

const gameLoop = (updatePlayerHealth) => {
  setInterval(() => {
    const dt = Date.now() - time; // 0
    time = Date.now(); // 0
    if (start) {
      //stars
      for (let key in starsObj) {
        const star = starsObj[key];
        star.movement();
      }
      //bullets

      for (let key in bulletObj) {
        const bullet = bulletObj[key];
        bullet.movement(bulletObj);
      }
      //enemies

      for (const key in enemyObj) {
        enemyObj[key].moving();
        enemyObj[key].drawing();
      }
      //run collision detections bullet-enemy
      for (let key in bulletObj) {
        const bullet = bulletObj[key];
        //cccccccccccccccccconsole.log(bulletObj)
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
      }

      //run collision detections player-enemy

      for (let key in enemyObj) {
        const enemy = enemyObj[key];
        const collided = collisionDetection(player, enemy);
        if (collided) {
          player.health -= 1;
          updatePlayerHealth(player.health);
          if (player.health < 0) {
            console.log("you lose");
            stop();
          }
          //console.log("collided");
        }
      }
      //run collision detections player-movingplanets
      for (let key in movingPlanets) {
        const collided = collisionDetection(player, movingPlanets[key]);
        //console.log(collided);
        if (collided) {
          console.log("collided");
          // alert("game over")
          movingPlanets[key].changePlanetImage("/img/explosion.png");
          stop();
        }
      }

      for (const key in movingPlanets) {
        movingPlanets[key].moving();
      }

      //player
      if (player) {
        player.moving(dt);
        player.drawing();
      }
    }
  }, interval);
};

const logic = (updatePlayerHealth) => {
  // one time initialization
  updateDimension();
  creatingPlanets();
  createStars();
  createStartButton();
  creatingPlayer();
  creatingEnemy();
  creatingMovingPlanets();

  // main game loop
  gameLoop(updatePlayerHealth);
};

export default logic;
