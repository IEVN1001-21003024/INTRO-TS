import { Figura } from './09-figuras1';

export class Figura3D {
    protected volumen: number | null = null;

    constructor(
        private figura: Figura,
        private altura: number
    ) {
        this.calcularVolumen();
    }

    private calcularVolumen(): void {
        const area = this.figura.getArea();
        if (area !== null) {
            this.volumen = area * this.altura;
        }
    }

    imprimir(): void {
        console.log(`Área del ${this.figura.getTipo().toLowerCase()}: ${this.figura.getArea()?.toFixed(2)}`);
        console.log(`Volumen del ${this.figura.getTipo().toLowerCase()}: ${this.volumen?.toFixed(2)}`);
    }
}

const figura1 = new Figura('Rectangulo', [10, 4]);
const figura2 = new Figura('Circulo', [3]);
const figura3 = new Figura('Cuadrado', [5]);

const figuras3D = [
    new Figura3D(figura1, 5),
    new Figura3D(figura2, 7),
    new Figura3D(figura3, 6)
];

figuras3D.forEach(figura => figura.imprimir());