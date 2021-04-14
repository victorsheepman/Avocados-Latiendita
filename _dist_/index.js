/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')
const baseUrl = "https://platzi-avo.vercel.app";
const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector('#app');

function formatPrice(price) {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "USD"
    }).format(price);
    
    return newPrice;
}
window.fetch(`${baseUrl}/api/avo`).then((respuesta)=>respuesta.json())
.then(responsejson=>{
    const allItem = [];
    responsejson.data.forEach(element => {
        //crear imagen
       const image = document.createElement('img');
       image.src = `${baseUrl}${element.image}`;
       //Crear titulo
       const title = document.createElement("h2");
        title.textContent = element.name;
        title.style.fontSize = '3rem';
        title.className = 'text-xl text-green-600 font-mono	';
       //crear precio
       const price = document.createElement("div");
        price.textContent = formatPrice(element.price);
        price.className = 'text-gray-400 text-base';

        const container= document.createElement("div");
        container.append(image, title, price);
        container.className="flex shadow-lg"
        allItem.push(container);
    });
    appNode.append(...allItem);
})




//Tarea: hacerlo con async/await