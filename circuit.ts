import Voiture from "./voiture";

class Circuit {
  private _kilometres: number;
  private _voitures: Voiture[];

  constructor(kilometres) {
    this._kilometres = kilometres;
  }

  depart() {
    this._voitures.forEach((voiture) => {
      voiture.demarrer();
    });
    const timer = setInterval(() => {
      this._voitures.forEach((voiture) => {
        console.log(voiture.toString());
        const { km_parcourru } = voiture;
        if (km_parcourru >= this._kilometres) {
          clearInterval(timer);
          this.fin(voiture);
        }
      });
    }, 1000);
  }

  private fin(voiture: Voiture) {
    console.log("\n");
    console.log(`La voiture ${voiture.marque} a gagné`);
  }

  get kilometres(): number {
    return this._kilometres;
  }

  set voitures(voitures: Voiture[]) {
    this._voitures = voitures;
  }

  get voitures(): Voiture[] {
    return this._voitures;
  }
}

export default Circuit;
