// CÂU 1: Constructor Function
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// CÂU 2: Khởi tạo mảng products
const products = [
    new Product(1, "iPhone 15 Pro", 32000000, 10, "Phone", true),
    new Product(2, "Samsung S24 Ultra", 31000000, 5, "Phone", true),
    new Product(3, "MacBook Air M2", 28000000, 0, "Laptop", false),
    new Product(4, "Dell XPS 13", 35000000, 2, "Laptop", true),
    new Product(5, "Chuột Logitech", 500000, 100, "Accessories", true),
    new Product(6, "Bàn phím cơ", 1500000, 0, "Accessories", true),
    new Product(7, "Tai nghe Sony", 2000000, 15, "Accessories", true)
];

console.clear();
console.group("Câu 2: Danh sách sản phẩm");
console.table(products);
console.groupEnd();

// CÂU 3: Lấy Name và Price
const nameAndPrice = products.map(p => ({ 
    'Tên SP': p.name, 
    'Giá': p.price.toLocaleString() + ' đ' 
}));
console.group("Câu 3: Mảng Name & Price");
console.table(nameAndPrice);
console.groupEnd();

// CÂU 4: Lọc sản phẩm còn hàng
const availableProducts = products.filter(p => p.quantity > 0);
console.group("Câu 4: Sản phẩm còn hàng");
console.table(availableProducts);
console.groupEnd();

// CÂU 5: Kiểm tra có SP > 30.000.000
const hasExpensive = products.some(p => p.price > 30000000);
console.group("Câu 5: Có sản phẩm > 30tr?");
console.log(hasExpensive ? "✅ CÓ" : "❌ KHÔNG");
console.groupEnd();

// CÂU 6: Kiểm tra tất cả Accessories có đang bán không
const allAccAvailable = products
    .filter(p => p.category === 'Accessories')
    .every(p => p.isAvailable === true);
console.group("Câu 6: Tất cả Accessories đang bán?");
console.log(allAccAvailable ? "✅ ĐÚNG" : "❌ SAI");
console.groupEnd();

// CÂU 7: Tính tổng giá trị kho
const totalValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.group("Câu 7: Tổng giá trị tồn kho");
console.log(`💰 ${totalValue.toLocaleString()} VNĐ`);
console.groupEnd();

// CÂU 8: Duyệt mảng bằng for...of
console.group("Câu 8: Duyệt for...of");
for (const p of products) {
    console.log(`📦 ${p.name} | ${p.category} | ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}
console.groupEnd();

// CÂU 9: Duyệt đối tượng bằng for...in
console.group("Câu 9: Duyệt for...in (SP đầu tiên)");
const firstP = products[0];
for (const key in firstP) {
    console.log(`🔹 ${key}: ${firstP[key]}`);
}
console.groupEnd();

// CÂU 10: Lấy tên SP đang bán & còn hàng
const activeNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.group("Câu 10: Tên SP đang bán & còn hàng");
console.log(activeNames);
console.groupEnd();