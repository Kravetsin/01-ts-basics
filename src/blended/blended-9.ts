// 1. Інтерфейс Container – це "інструкція", як має виглядати коробка
interface Container<T> {
  items: T[]; // масив елементів (тільки одного типу)
  addItem(item: T): void; // метод додати елемент
  getItem(index: number): T; // метод взяти елемент за індексом
}

// 2. Створюємо два контейнери

// Коробка з числами
let numberContainer: Container<number> = {
  items: [],
  addItem(item: number) {
    this.items.push(item);
  },
  getItem(index: number) {
    return this.items[index];
  },
};

// Коробка з рядками
let stringContainer: Container<string> = {
  items: [],
  addItem(item: string) {
    this.items.push(item);
  },
  getItem(index: number) {
    return this.items[index];
  },
};

// 3. Використовуємо addItem і getItem
numberContainer.addItem(10);
numberContainer.addItem(20);

stringContainer.addItem("Привіт");
stringContainer.addItem("Світ");

console.log(numberContainer.getItem(0)); // 10
console.log(numberContainer.getItem(1)); // 20
console.log(stringContainer.getItem(0)); // "Привіт"
console.log(stringContainer.getItem(1)); // "Світ"

// 4. Функція, яка бере останній елемент
function getLastElement<T>(items: T[]): T {
  return items[items.length - 1];
}

// 5. Перевірка
console.log(getLastElement(numberContainer.items)); // 20
console.log(getLastElement(stringContainer.items)); // "Світ"
