interface VehiculeFunctionnalitee {
  demarrer: () => void;
  arreter: () => void;
  readonly toString: () => void;
}

abstract class Vehicule implements VehiculeFunctionnalitee {
  protected _roues: number;
  private _marque: string;
  private _kmh: number;
  private _km_parcourru: number = 0;

  constructor(marque: string, kmh: number) {
    this._marque = marque;
    this._kmh = kmh;
  }

  demarrer() {
    this._km_parcourru += this._kmh;
    setInterval(() => (this._km_parcourru += this._kmh), 1000);
  }

  arreter() {}

  toString() {
    return `Le véhicule est de la marque ${this._marque}`;
  }

  get marque() {
    return this._marque;
  }

  set marque(marque: string) {
    this._marque = marque;
  }

  get kmh(): number {
    return this._kmh;
  }

  get km_parcourru(): number {
    return this._km_parcourru;
  }
}

export default Vehicule;
