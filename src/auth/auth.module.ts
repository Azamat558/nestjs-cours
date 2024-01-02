import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { SessionStrategy } from "./session.strategy";
import { AuthService } from "./auth.service";
import { UsersService } from "src/users/users.service";
import { UsersModule } from "src/users/users.module";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: "your-secret-key", // Замените на свой секретный ключ
    }),
  ],
  providers: [SessionStrategy, AuthService],
  exports: [AuthService],
})
export class AuthModule {}
