import { Injectable } from "@nestjs/common";
import { User } from "./users.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RolesEnum } from "src/enums/roles";
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async registerReader(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const hashedPassword = await bcrypt.hash(dto.password,12)
    user.role = RolesEnum.READER;
    user.password = hashedPassword
    return await this.userRepository.save(user);
  }

  async getAllUsers() {
    const users = await this.userRepository.find({
      relations: ["posts"],
    });
    return users;
  }

  async getById(id) {
    const users = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });
    return users;
  }
  async getByEmail(email: string) {
    const users = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
    return users;
  }
}
