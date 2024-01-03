async function productData() {
 try    
{
    const response = await fetch("data.json");
    if (!response.ok) {
       throw new Error('Вы получили ошибку при обработке data.json') 
    }
    const data = await response.json();
    console.log(data);
    const container = document.querySelector('.container_box');
    data.forEach(({ photo, name, description, price }) => {
       const productCard = 
       `<div class="container">
        <div class="card">
        <div class="img">
        <img class = "image_products" src="${photo}" alt="${name}">
        </div>
        <div class="content">
            <p class="name">${name}</p>
            <p class="description">${description}</p>
            <p class="price"><span>$${price}</span></p>
        </div>
        </div>
    </div>` 
    container.insertAdjacentHTML('beforeend', productCard);
    });
} catch (error) {
    console.error(error);
}
}
productData();