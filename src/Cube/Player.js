import Bullet from "./Bullets";

class Player {
  constructor(x, y, z, bulletObj, width) {
    this.health = 100;
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = width;
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
  pressingKeys = (e) => {
    const movingKeysArr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    movingKeysArr.forEach((val) => {
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

  moving = (dt) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.rotation += 1;

    if (this.x > width) {
      this.x = 0;
    } else if (this.x < 0 && this.Z > 500) {
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
        this.z -= 0.8 * dt;
      }
      if (this.keys["KeyX"]) {
        this.z += 0.8 * dt;
      }
      if (this.keys["KeyC"]) {
        this.shooting();
      }
    }
  };
  drawing() {
    const cubeWrapper = document.getElementById("cubeWrapper");

    cubeWrapper.style.transform = `translate3d(${this.x}px, ${this.y}px, ${this.z}px) rotateX(${this.rotation}deg) rotateY(${this.rotation}deg) rotateZ(${this.rotation}deg)`;
    // cubeWrapper.style.transform = ``;
  }
  shooting = () => {
    this.i++;

    const bullet = new Bullet(this.i, this.x, this.y, this.z, 5);
    bullet.initialize();
    this.bulletsObj[this.i] = bullet;
  };
  deleteEl() {
    const cubeWrapper = document.getElementById("cubeWrapper");
    cubeWrapper.parentNode.removeChild(cubeWrapper);
  }
}

export default Player;
