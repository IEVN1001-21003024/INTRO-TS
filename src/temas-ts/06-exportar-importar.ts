import { calcularIVA2,Producto } from "./05-desestructurar.funciones";

const ProductosN: Producto[] = [{
    desc: "telefono 1",
    precio: 1000
},
{
    desc: "telefono 2",
    precio: 2000
},
{
    desc: "telefono 3",
    precio: 3000
}
]
const [total,iva]=calcularIVA2(ProductosN);
console.log(total,iva);