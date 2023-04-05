

const Cart = require('./cart');
const db=require('../util/database');



module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO product (title,price,description,imageUrl) VALUES (?,?,?,?)',[this.title,this.price,this.description,this.imageUrl])
  }

  static deleteById(id) {
   return db.execute('DELETE *FROM WHERE product.id = ?', {id});
  }

  static fetchAll() {
   return  db.execute('SELECT *FROM product');
   
  }

  static findById(id) {
   return db.execute('SELECT *FROM WHERE product.id = ?', {id})
  }
};
