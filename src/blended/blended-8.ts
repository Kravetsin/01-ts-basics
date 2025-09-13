enum Role {
  Admin,
  User,
  Guest,
}

function getPermissions(role: Role): string {
  const permissionsMap = {
    [Role.Admin]: ["create", "read", "update", "delete"],
    [Role.User]: ["read", "update"],
    [Role.Guest]: ["read"],
  };
  return permissionsMap[role].join(", ");
}

console.log(getPermissions(Role.Admin));
