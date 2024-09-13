import { areaRectangulo, areaCuadrado, areaCirculo } from './09-figuras1';

class Volumen {
    calcularVolumen(area: number, altura: number): number {
        return area * altura;
    }
}

class VolumenCalculator {
    calcularVolumenRectangular(area: number, altura: number): number {
        const volumen = new Volumen();
        return volumen.calcularVolumen(area, altura);
    }

    calcularVolumenCubo(area: number, lado: number): number {
        const volumen = new Volumen();
        return volumen.calcularVolumen(area, lado);
    }

    calcularVolumenCilindro(area: number, altura: number): number {
        const volumen = new Volumen();
        return volumen.calcularVolumen(area, altura);
    }
}

const volumenCalc = new VolumenCalculator();

const volumenRect = volumenCalc.calcularVolumenRectangular(areaRectangulo, 4);
console.log(`Volumen del prisma rectangular: ${volumenRect}`);

const volumenCubo = volumenCalc.calcularVolumenCubo(areaCuadrado, Math.sqrt(areaCuadrado));
console.log(`Volumen del cubo: ${volumenCubo}`);

const volumenCilindro = volumenCalc.calcularVolumenCilindro(areaCirculo, 15);
console.log(`Volumen del cilindro: ${volumenCilindro}`);