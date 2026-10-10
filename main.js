// ============================================================
// JavaScript: String & Array Manipulation Task
// ============================================================

// ------------------------------------------------------------
// Case 1: User Data Cleaner (String & Array Interop)
// ------------------------------------------------------------
const rawInput = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

// 1. Bersihkan whitespace di awal & akhir string
const trimmedInput = rawInput.trim();

// 2. Ubah jadi array nama (dipisah berdasarkan koma)
const nameList = trimmedInput.split(",");

// 3. Format tiap nama jadi lowercase tanpa spasi liar
const cleanedNames = nameList.map((name) => name.trim().toLowerCase());

// 4. Gabungkan kembali jadi string dengan format "nama1 | nama2 | nama3"
const finalString = cleanedNames.join(" | ");

console.log("=== Case 1: User Data Cleaner ===");
console.log("Input mentah   :", JSON.stringify(rawInput));
console.log("Setelah trim   :", JSON.stringify(trimmedInput));
console.log("Array nama     :", nameList);
console.log("Array bersih   :", cleanedNames);
console.log("Hasil akhir    :", finalString);

// ------------------------------------------------------------
// Case 2: E-Commerce Product Filter (Array of Objects)
// ------------------------------------------------------------
const products = [
  { name: "Laptop", price: 1000, active: true },
  { name: "Mouse", price: 20, active: false },
  { name: "Keyboard", price: 50, active: true },
];

// 1. Saring produk yang active: true (.filter())
const activeProducts = products.filter((product) => product.active === true);

// 2. Array baru berisi nama produk huruf kapital semua (.map())
const activeProductNames = activeProducts.map((product) =>
  product.name.toUpperCase(),
);

// 3. Hitung total harga semua produk aktif (.reduce())
const totalPrice = activeProducts.reduce(
  (total, product) => total + product.price,
  0,
);

console.log("\n=== Case 2: E-Commerce Product Filter ===");
console.log("Produk aktif      :", activeProducts);
console.log("Nama produk (CAPS):", activeProductNames); // [ 'LAPTOP', 'KEYBOARD' ]
console.log("Total harga aktif :", totalPrice); // 1050
