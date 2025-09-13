//! ===================================
function foo<T>(value: T) {
  console.log(value);
}

foo<number>(5);
//! ===================================

//! ===================================
function foo1<T, Y>(value1: T, value2: Y) {
  console.log(value1);
  console.log(value2);
}

foo1<number, string>(5, "a");
//! ===================================

//! ===================================
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];

function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(reverseArray<number>(numbers));
console.log(reverseArray(letters));
//! ===================================

//! ===================================
function saveToStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

saveToStorage<string>("user", "Ihor Kravets");
//! ===================================

//! ===================================
function getName<T extends { name: string }>(data: T) {
  return data.name;
}

console.log(getName({ name: "Kravets", age: 26 }));
//! ===================================

//! ===================================
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

console.log(getLength("Kravets"));
//! ===================================

//! ===================================
