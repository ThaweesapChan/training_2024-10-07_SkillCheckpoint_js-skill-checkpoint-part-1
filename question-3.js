// Question #3
let userPassword = "sd5fd";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
  let countPassWord = userPassword.length
  console.log(countPassWord);
  if (countPassWord < 6) {
    return "Weak";
  } else if (6 <= countPassWord && countPassWord <= 10) {
    return "Medium";
  } else if (countPassWord > 10) {
    return "Strong";
  }
}

console.log(checkPasswordStrength(userPassword));
