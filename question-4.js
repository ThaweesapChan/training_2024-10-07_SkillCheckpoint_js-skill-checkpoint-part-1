// Question #4
// const inventory = [
//   { name: "Apple", price: 35, quantity: 100 },
//   { name: "Banana", price: 10, quantity: 50 },
//   { name: "Orange", price: 30, quantity: 60 },
// ];
// เริ่มเขียนโค้ดตรงนี้

const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 2000 },
  { name: "Orange", price: 30, quantity: 60 },
];

quantityMin = inventory[0]["quantity"];
let anwser=""
for (let i = 0; i < inventory.length; i++) {
  if (quantityMin > inventory[i]["quantity"]) {
    quantityMin = inventory[i]["quantity"];

    anwser = `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${inventory[i]["name"]} ซึ่งมี ${inventory[i]["quantity"]} ชิ้น`;
  }

}
console.log(anwser);
