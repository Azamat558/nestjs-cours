import { Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from "src/users/users.entity";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    ) {}
    
    async validateUser(email: string, password: string): Promise<any> {
      const user = await this.userService.getByEmail(email);      
    if (!user) {
      throw new NotFoundException('user net')
    }
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  
  async generateToken(user: User): Promise<string> {
    const payload = { id: user.id, email: user.email };
    return this.jwtService.signAsync(payload);
  }
  

  // async login () {
  //   const users = await this.userRepository.findOne({
  //     where: {
  //       email: email,
  //       password: 
  //     },
  //   });
  //   return users;
  // }

}
