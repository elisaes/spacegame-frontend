class Enemy {
  constructor(id, x, y, z, width, deltaz) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = width;
    this.deltaz = deltaz;
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

    this.z = this.z + this.deltaz;

    if (this.z > 0) {
      this.z = -5000;
    }

    if (this.x > width) {
      this.x = 0;
    } else if (this.y > height) {
      this.y = 0;
    }
  };
  drawing() {
    this.enemyEl.style.transform = `translate3d(${this.x}px, ${this.y}px, ${this.z}px)`;
  }

  deleteEl = () => {
    console.log(document.getElementById("container"));
    this.enemyEl.remove();
  };
}

export default Enemy;
