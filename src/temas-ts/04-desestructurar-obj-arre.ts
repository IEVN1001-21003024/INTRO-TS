interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number
}

const reproductor:Reproductor={
    volumen: 50,
    segundo: 30,
    cancion: "la vida me lala",
    detalles: {
        autor: "fernando",
        year:1500
    }
}

/*console.log(`èl volumen actual es: ${reproductor.volumen}`)
console.log(`los segundos son: ${reproductor.segundo}`)
console.log(`la cancion es: ${reproductor.cancion}`)
console.log(`el cantante es: ${reproductor.detalles.autor}`)
console.log(`el año es: ${reproductor.detalles.year}`)*/

const{volumen, segundo, cancion, detalles}=reproductor;
const{autor,year}=detalles;
console.log(`èl volumen actual es: ${volumen}`)
console.log(`los segundos son: ${segundo}`)
console.log(`la cancion es: ${cancion}`)
console.log(`el cantante es: ${autor}`)
console.log(`el año es: ${year}`)

const dbz:string[]=['goku','majumbu','babidy','frezeer']
console.log(`personaje 1; ${dbz[0]}`)
console.log(`personaje 2; ${dbz[1]}`)
console.log(`personaje 3; ${dbz[2]}`)
console.log(`personaje 4; ${dbz[3]}`)

const[a,,b,c]=dbz;
console.log(`personaje 1; ${a}`)
console.log(`personaje 2; ${b}`)
console.log(`personaje 3; ${c}`)