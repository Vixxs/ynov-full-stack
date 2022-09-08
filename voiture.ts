import Vehicule from "./vehicule";

class Voiture extends Vehicule {
  protected _roues: number = 4;

  toString() {
    return `La voiture de la marque ${this.marque} a parcourru ${this.km_parcourru}km`;
  }
}

export default Voiture;
