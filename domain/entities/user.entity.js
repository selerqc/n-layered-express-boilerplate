export class UserEntity {
  constructor({ id, email, password, role = 'User' }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  isAdmin() {
    return this.role === 'Admin';
  }
}
