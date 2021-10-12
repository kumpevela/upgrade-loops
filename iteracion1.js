/* const products = ['Camiseta de pokemon', 'Pantalón coquinero', 
'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 
'AC/DC Camiseta'];


for (let i = 0; i < products.length; i++) {
    if (products[i].includes("Camiseta")) {
        console.log(products[i])
    }
} */


    
    
    
    
    
    

/*Comprueba en cada uno de los usuarios que tenga 
al menos dos trimestres aprobados y añade la propiedad 
isApproved a true o false en consecuencia. Una vez
 lo tengas compruébalo con un console.log. */ 


/* const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
    ]

for (let i = 0; i < alumns.length; i++) {
    let count = 0
    if (alumns[i].T1){count++}
    if (alumns[i].T2){count++}
    if (alumns[i].T3){count++}
    if (count >= 2) {
        alumns[i].isApproved = true 
    } else {
        alumns[i].isApproved = false
    }
}

console.log(alumns) */




/* const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (let places of placesToTravel) {
    console.log(places);
}
 */



/* const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let key in alien) {
    console.log(alien[key])
}
TERMINADO */



/* let placesToTravelFiltered = []
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
for (let i = 0; i < placesToTravel.length; i++) {
    if (placesToTravel[i].id != 40 && placesToTravel[i].id != 11) {
        placesToTravelFiltered.push(placesToTravel[i])

    }
}

console.log(placesToTravelFiltered)

 */






/* const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    for (const toy of toys) {
        if (toy.name.includes("gato")) {
            toys.splice(toys.indexOf(toy))
        
        }
    }

    console.log(toys) */


const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]


for (const toy of toys) {
    if (toy.sellCount > 15) {
        popularToys.push(toy)
    }
}

console.log(popularToys)

