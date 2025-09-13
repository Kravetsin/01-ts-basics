interface User {
  id: number;
  name: string;
}

const users = ["alice", "bob", "charlie"];

function toUserObjects(users: string[]): User[] {
  return users.map((name, index) => ({
    id: index + 1,
    name,
  }));
}

console.log(toUserObjects(users));
