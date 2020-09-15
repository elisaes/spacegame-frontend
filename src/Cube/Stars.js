class Stars {
  constructor(id, x, y, z) {
    this.id = id;
    this.starEl = document.createElement("div");
    this.starEl.classList = "star";

    this.x = x;
    this.y = y;
    this.z = z;
    this.velocity = Math.random()*25
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
    if (this.z > 100) {
      this.z = -5000;
    }
  }
}

export default Stars;
