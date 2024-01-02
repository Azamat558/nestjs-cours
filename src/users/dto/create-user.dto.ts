import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "olrg@gmail.com", description: "Почтовый ящик" })
  readonly email: string;
  
  @ApiProperty({ example: "123456789", description: "пароль" })
  readonly password: string;
}
