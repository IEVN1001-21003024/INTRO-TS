export class Figura {
    protected area: number | null = null;

    constructor(
        protected tipo: 'Rectangulo' | 'Circulo' | 'Cuadrado', 
        protected dimensiones: number[]
    ) {
        this.calcularArea();
    }

    private calcularArea(): void {
        if (this.tipo === 'Cuadrado') {
            const lado = this.dimensiones[0];
            this.area = lado ** 2;
        } else if (this.tipo === 'Rectangulo') {
            const [largo, ancho] = this.dimensiones;
            this.area = largo * ancho;
        } else if (this.tipo === 'Circulo') {
            const radio = this.dimensiones[0];
            this.area = Math.PI * radio ** 2;
        }
    }

    getArea(): number | null {
        return this.area;
    }

    getTipo(): 'Rectangulo' | 'Circulo' | 'Cuadrado' {
        return this.tipo;
    }
}