export class Sneaker {
  id: Number;
  brand: String;
  name: String;
  price: Number;
  imageUrl: String;
  shopUrl: String;
  releaseDate: Date;
  description: String;

  constructor(id: Number, brand: String, description: String, name: String, price: Number, imageUrl: String, shopUrl: String, releaseDate: Date) {
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.shopUrl = shopUrl;
    this.releaseDate = releaseDate;
    this.description = description;
  }
}
