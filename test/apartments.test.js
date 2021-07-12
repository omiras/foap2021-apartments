const puppeteer = require('puppeteer');

// -- e2e tests --
test('crear apartamento. Puedo crear un apartamento y luego listarlo en la lista de apartamentos', ()=>{
    // 1. Hay que ir al endpoint /admin/add-new
    // 2. Rellenar todos los campos
    // 3. Hacer click en el botón de submit
    // 4. Verificar en http://localhost:3000/ si el apartamento que cabamos de crear está presente
})

test('Buscar apartamentos. Dado un precio muy bajo (1 €); debe ocurrir que si realizamos una búsqueda con dicho valor, NO debemos obtener ningun apartamento en la lista de apartamentos. ', ()=>{
    // 1. Ir a localhost:3000
    // 2. Introducir un '1' en el formulario de búsqueda
    // 3. Hacer click en el botón de submit
    // 4. Comprobar que NO existe ningun aparamento en la lista de apartamentos (Pista: page.$$eval , consultar documentación puppeteer)
})
