import Stars from "./Stars";
import Player from "./Player";
import Enemy from "./Enemy";

let time = Date.now();
let start = true;
let player = {};
const starsObj = {};
const enemyObj = {};
const bulletObj = {};
const interval = 20;

const stop = (e) => {
  start = !start;
};

const createStartButton = () => {
  let button = document.getElementById("stop");
  button.addEventListener("click", stop);
};
const creatingPlayer = () => {
  player = new Player(200, 300, -100, bulletObj);
  player.initializing();
};

const createStars = () => {
  for (let i = 0; i < 1000; i++) {
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
  for (let i = 0; i < 1; i++) {
    enemyObj[i] = new Enemy(i, 300, 300, -2000);
    enemyObj[i].initializing();
  }
};

const collisionDetection = (obj1, obj2) => {
  const radiusCheck = (a, b, r) => {
    return Math.abs(a - b) < r;
  };

  if (
    radiusCheck(obj1.x, obj2.x, 100) &&
    radiusCheck(obj1.y, obj2.y, 100) &&
    radiusCheck(obj1.z, obj2.z, 100)
  ) {
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
        for (const eKey in enemyObj) {
          const enemy = enemyObj[eKey];
          const collided = collisionDetection(bullet, enemy);

          if (collided){
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
        if (collided){
       //   stop()
        }
      }

      //player
      if (player) {
        player.moving(dt);
        player.drawing();
      }
    }
  }, interval);
};

const logic = () => {
  // one time initialization
  createStars();
  createStartButton();
  creatingPlayer();
  creatingEnemy();

  // main game loop
  gameLoop();
};

export default logic;
