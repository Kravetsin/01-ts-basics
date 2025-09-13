interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

interface CreateUserProps {
  name: string;
  age: number;
}

function createUser({ name, age }: CreateUserProps): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log(createUser({ name: "Alice", age: 30 }));
