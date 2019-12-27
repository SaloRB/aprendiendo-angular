import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;

    constructor() {
        this.zapatillas = [
            new Zapatilla('Nike Air Max', 'Nike', 'Rojo', 190, true),
            new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', 80, true),
            new Zapatilla('Reebok Spartan', 'Reebok', 'Azul', 40, true),
            new Zapatilla('Nike Runner MD', 'Nike', 'Negro', 60, true),
            new Zapatilla('Adidas Yeezy', 'Adidas', 'Gris', 180, false)
        ];
    }

    getTexto() {
        return "Hola Mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}