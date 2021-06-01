class ProductList {
    #goods;
    #allProducts;
    constructor(container = '.products') {
      this.container = container;
      this.#goods = [];
      this.#allProducts = [];
  
      this.#fetchGoods();
      this.#render();
      this.ProductPrice();
    }
  
    #fetchGoods() {
      this.#goods = [
        {id: 1, title: 'Notebook', price: 20000},
        {id: 2, title: 'Mouse', price: 1500},
        {id: 3, title: 'Keyboard', price: 5000},
        {id: 4, title: 'Gamepad', price: 4500},
      ];
    }
  
    #render() {
      const block = document.querySelector(this.container);
  
      for (let product of this.#goods) {
        const productObject = new ProductItem(product);
  
        this.#allProducts.push(productObject);
        block.insertAdjacentHTML('beforeend', productObject.render());
      }
    }
    ProductPrice() {  // метод для выводы суммы всех товаров
      let sum = 0;
      this.#goods.forEach(function(product) {
        sum += product.price;
        console.log(sum);
      });
        
    }
  }
  
  class ProductItem {
    constructor(product, img='https://via.placeholder.com/200x150') {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.img = img;
    }
  
    render() {
      return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p class="price">${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
    }
  }
  
  const catalog = new ProductList();

  class Cart { // создание корзины
    constructor(container = ".product") {
      this.cartProduct();
      
    }

    
   
 
  
  