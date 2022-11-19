// let ism = prompt("Ismingiz nima?");
// let familiya = prompt("Familiyez nima?");
// let yosh = prompt("Yoshingiz nechchida?");

// alert(`${ism} ${familiya} ${yosh} yoshada`);

// console.log(Math.abs(12));
// console.log(Math.max(12, 100, -35, 0, 24, 50));
// console.log(Math.min(12, 100, -35, 0, 24, 50));
// console.log(Math.pow(2, 3), 2 ** 3);
// console.log(Math.sqrt(9));
// console.log(Math.random() * 10); // min => 0, max => 0.999999999999

// ceil, floor, round

// let butunSon = 2;
// let son = 2.553456;
// let negativeSon = -2.553456;

// -- -3 -- -2.353456 -- -2 -- -1 -- 0 -- 1 -- 2 -- 2.353456  -- 3 -- 4

// console.log(Math.ceil(butunSon));
// console.log(Math.ceil(son));
// console.log(Math.ceil(negativeSon));
// console.log(Math.floor(butunSon));
// console.log(Math.floor(son));
// console.log(Math.floor(negativeSon));
// console.log(Math.round(butunSon));
// console.log(Math.round(son));
// console.log(Math.round(negativeSon));

// console.log(Math.floor(Math.random() * 10)); // min => 0, max => 0.999999999999
// 3.345 => 3
// 3.645 => 3
// 9.4001 => 9
// 9.5000001 => 9

// console.log(Math.floor(Math.random() * 10)); // min => 0, max => 9
// console.log(Math.floor(Math.random() * 10) + 1); // min => 1, max => 10

// 0 * 10 => 0 + 1 => 1
// 0.999999 * 10 => 9.99999 => 9 + 1 => 10

// console.log(Math.floor(Math.random() * 11)); // min => 0, max => 10
// 0 * 11
// 0.99999 * 11

// console.log(Math.floor(Math.random() * 21));

// console.log(Math.floor(Math.random() * (50 + 1)) + 50);

// 0 * 51 => 0 + 50 => 50
// 0.99999 * 51 => 50.99949 => 50 + 50 => 100

// min => 5, max => 100

// console.log(Math.floor(Math.random() * /* Max - Min + 1 */ 96) + /* Min */ 5);

// 0 * 96 => 0 + 5 => 5
// 0.9999 * 96 => 95.99904000000001 => 95 + 5 => 100

// min = 1, max = 10

// let son = Math.floor(Math.random() * (10 - 1 + 1) + 1);

// console.log(son);

// let input = prompt("Bir son o'yladim. [1, 10]. Nechchi deb o'ylaysiz.");

// alert(`Men ${son} sonini o'ylagan edim, siz ${input} sonini kiritdingiz.`);

// Conditionals

// if, else if, else

// if (false) {
//   console.log(1);
// } else if (false) {
//   console.log(2);
// } else if (false) {
//   console.log(3);
// } else {
//   console.log(4);
// }

// Switch, case

// let son = Math.floor(Math.random() * (10 - 1 + 1) + 1);
// console.log(son);
// let input = +prompt("Bir son o'yladim. [1, 10]. Nechchi deb o'ylaysiz.");
// if (input === son) {
//   console.log(`To'g'ri topdingiz, ${son} sonini o'ylagn edim`);
// } else if (input > son) {
//   console.log(
//     `Katta son kiritdingiz, men ${son} sonini o'ylagn edim. Qaytadan urinib ko'ring!`
//   );
// } else if (input < son) {
//   console.log(
//     `Kichik son kiritdingiz, men ${son} sonini o'ylagn edim. Qaytadan urinib ko'ring!`
//   );
// } else {
//   console.log("Iltimos Son kiriting");
// }

// && => AND => VA, || => OR => YOKI

// Conjunction
// true && true => true
// false && true => false
// true && false => false
// false && false => false

// Disjunction
// true || true => true
// false || true => true
// true || false => true
// false || false => false

// if (true && false) {
//   console.log("Va ishladi");
// }

// if (typeof input === "number" || typeof input === "string") {
// }

// let son = Math.floor(Math.random() * (10 - 1 + 1) + 1);
// console.log(son);
// let input = +prompt("Bir son o'yladim. [1, 10]. Nechchi deb o'ylaysiz.");

// if (input === son || input > son || input < son) {
//   console.log("Siz haqiqatdan ham son kiritdingiz");
// } else {
//   console.log("Siz son kiritmadingiz");
// }

// ticket => $350
// living => $680
// tour => ¢230

// $ => 11250som
// ¢ => 12864som

// min 3
// max 30 (included)
