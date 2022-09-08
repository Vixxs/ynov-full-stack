import Circuit from "./circuit";
import Voiture from "./voiture";

const circuit = new Circuit(4500);

const mercedes = new Voiture("Mercedes", 350);
const redbull = new Voiture("RedBull", 300);

circuit.voitures = [mercedes, redbull];

circuit.depart();
