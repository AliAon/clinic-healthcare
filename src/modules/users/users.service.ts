import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/user.dto';
@Injectable()
export class UsersService {
  private users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Doe' },
  ];
  findAll(): User[] {
    return this.users;
  }
  findOne(id: any): User | undefined {
    return this.users.find((user) => user.id === id);
  }
  create(user: User): void {
    this.users.push(user);
  }
  update(id: any, user: User) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = user;
    return user;
  }
  remove(id: any): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
