# E-commerce API

This is an API for an e-commerce website that allows customers to browse and purchase products online. It's built using `Node.js` and `Express`, and uses `MongoDB` as the database.

### Features
* Browse products by category or search for specific items
* Add items to a shopping cart
* Checkout and place an order
* Track order status
* Admin dashboard for managing products and orders


### Installation
1. Clone the repository
2. Install dependencies with `npm install`
3. Set up environment variables (see `.env` file)
4. Start the server with `npm start`


### Usage
> The API has the following endpoints:

/api/usuario/register - `POST` to create user  
/api/usuario/login - `POST` to remember user details  
/api/usuario - `GET` user  
/api/productos - `POST` to create product  
/api/productos - `GET` all products  
/api/productos/:id - `GET` a specific product by ID  
/api/productos/:id - `DELETE` remove specific product by ID  
/api/productos/:id - `PUT` modify specific product details by ID  
/api/carrito - `POST` to create a cart   
/api/carrito/:id/productos/:id_producto - `POST` to add products to a cart  
/api/carrito/:id/productos - `GET` a specific cart     
/api/carrito/:id/productos/:id_producto - `DELETE` remove specific product by ID  
/api/carrito/:id - `DELETE` remove specific cart by ID  
/api/pedido/: id_usr - `POST` to make your order  
