export class Figuras {
    private area: number = 0;
    protected altura_cuadrado:number = 0;
    protected radio:number = 0;
    protected lado:number = 0;


    calcularAreaRectangulo(base: number, altura_cuadrado: number): number {
        this.area = base * altura_cuadrado;
        console.log(`Área del rectángulo: ${this.area}`);
        return this.area;
    }

    calcularAreaCuadrado(lado: number): number {
        this.area = lado * lado;
        console.log(`Área del cuadrado: ${this.area}`);
        return this.area;
    }

    calcularAreaCirculo(radio: number): number {
        this.area = Math.PI * radio * radio;
        console.log(`Área del círculo: ${this.area}`);
        return this.area;
    }
}

const figuras = new Figuras();

const areaRectangulo = figuras.calcularAreaRectangulo(10, 5);
const areaCuadrado = figuras.calcularAreaCuadrado(4);
const areaCirculo = figuras.calcularAreaCirculo(3);

export { areaRectangulo, areaCuadrado, areaCirculo };