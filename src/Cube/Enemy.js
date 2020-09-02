class Enemy {
  constructor(id, x, y, z) {
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

  moving = () => {
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
  drawing() {
    this.enemyEl.style.transform = `translate3d(${this.x}px, ${this.y}px, ${this.z}px)`;
  }

  deleteEl = () => {
    console.log(document.getElementById("container"))
    this.enemyEl.remove()
  }
}

export default Enemy;
