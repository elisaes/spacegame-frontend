let contX = 600;
let contY = 500;
let contZ = 800;
let keys = {};
let transX = 0;
let transY = 0;
let rotY = 0;

const pressingKeys = (e) => {
  const movingKeysArr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  movingKeysArr.forEach((val) => {
    if (e.code === val) {
      e.preventDefault();
    }
  });
  if (e.type === "keydown") {
    keys[e.code] = true;
  }
  if (e.type === "keyup") {
    keys[e.code] = false;
  }
};


const moving = (dt) => {

  if (keys["ArrowDown"]) {
    contZ -= .1 * dt;
  }
  if (keys["ArrowUp"]) {
    contZ += .1 * dt;
  }
  if (keys["ArrowLeft"]) {
    rotY++;
  }
  if (keys["ArrowRight"]) {
    rotY--;
  }
};

const drawingCube = (dt) => {
  const bigContainer = document.getElementById("bigContainer");
  const container = document.getElementById("container");
  const front = document.getElementById("front");
  const back = document.getElementById("back");
  const top = document.getElementById("top");
  const bottom = document.getElementById("bottom");
  const left = document.getElementById("left");
  const rigth = document.getElementById("rigth");

  // bigContainer.style.perspectiveOrigin = persOr + "% 400px";
  container.style.transform = `translate3d(${transX}px, ${transY}px, ${contZ}px)`;
  container.style.top = contY + "px";
  container.style.left = contX + "px";
  // container.style.transform = `rotateY(${rotY}deg)`;

  front.style.transform = `translateZ(-100px)`;
  back.style.transform = `translateZ(-150px)`;
  top.style.transform = `translateZ(-100px) rotateX(-90deg) translateX(0px)`;
  bottom.style.transform = `rotateX(90deg) translateY(-100px)`;
  left.style.transform = `rotateY(270deg) translateX(-150px)`;
  rigth.style.transform = `rotateY(270deg) translateX(-100px)`;


};

let time = Date.now()
const cube = () => {
  window.addEventListener("keydown", pressingKeys);
  window.addEventListener("keyup", pressingKeys);
  drawingCube();
  setInterval(() => {
    const dt = Date.now()-time
    time = Date.now()
    moving(dt);
    drawingCube(dt);
  }, 20);
};

export default cube;
