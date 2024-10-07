// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2, //20
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3, //15
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5, //50
  },
]; //85

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
  let sumPrice = 0;
  for (product of products) {
    sumPrice += product["price"] * product["quantity"];
  }
  if (promotionCode === "") {
    return sumPrice;
  } else if (promotionCode === "SALE20") {
    return sumPrice * 0.8;
  } else if (promotionCode === "SALE50") {
    return sumPrice * 0.5;
  }
}

console.log(calculateTotalPrice(products, promotionCode));