import Planets from "./Planets";

class PlanetMov extends Planets {
  constructor(id, x, y, z, url,width) {
    super(id, x, y, z, url);
    this.width = width;
    this.deltaz = 1;
  }
  moving() {

     this.z = this.z + this.deltaz;
    //console.log(this.deltaz);
    this.planetEl.style.transform = `translate3d(${this.x}px, ${this.y}px, ${this.z}px)`;
    if (this.z > -100 || this.z < -5000) {
      this.deltaz = -this.deltaz;
    }
  }
  changePlanetImage(url){
      this.url = url;
    this.planetEl.style.backgroundImage = `url(${this.url})`;
   
  }
}
export default PlanetMov;
