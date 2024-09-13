class Persona3{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log("nombre:"+this.nombre+" edad: "+this.edad);
    }
}

class  Empleado extends Persona3{
    private sueldo:number;
    constructor(nombre:string,edad:number,sueldo:number){
        super(nombre,edad);
        this.sueldo=sueldo;
    }
    imprimir(): void {
        console.log(`sueldo${this.sueldo}`)
    }
    pagaImpuesto(){
        if(this.sueldo >5000)
            console.log(`${this.nombre} debe pagar impuestos`);
        else
        console.log(`${this.nombre} no debe pagar impuestos`)
    }
}
const persona3=new Persona3('juan',44);
persona3.imprimir();

const empleado1=new Empleado('ana',22,7000)
empleado1.imprimir();
empleado1.pagaImpuesto();