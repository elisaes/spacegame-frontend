class Planet {
  constructor(id, x, y, z, url) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.z = z;
    this.url = url;
    this.planetEl = document.createElement("div");
    this.planetEl.classList = "planet";
  }
  initializing = () => {
    this.planetEl.style.backgroundImage = `url(${this.url})`;
    this.planetEl.style.top=this.y + "px"
    this.planetEl.style.left=this.x+ "px"
    this.planetEl.style.transform = `translateZ(${this.z}px)`;


    document.getElementById("container").appendChild(this.planetEl);
  };
}
export default Planet;
