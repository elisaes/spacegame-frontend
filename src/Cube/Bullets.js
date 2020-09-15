class Bullet {
  constructor(id, x, y, z,width) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = width;
    this.bulletEl = document.createElement("div");
    this.bulletEl.className = "bullet";
  }

  initialize = () => {
    document.getElementById("container").appendChild(this.bulletEl);
  };

  movement = (bulletObj) => {

    if (this.z < -1000) {

       this.bulletEl.remove();
      delete bulletObj[this.id];
    } else {
      this.z -= 20;
      this.bulletEl.style.transform = `translate3d(${this.x}px, ${this.y}px, ${this.z}px)`;
    }

  };

  deleteEl = () => {
    this.bulletEl.remove()
  }
}

export default Bullet;
