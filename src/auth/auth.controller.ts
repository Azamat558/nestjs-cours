import { Controller, Request, Post, Req, UseGuards } from "@nestjs/common";
import { AuthenticatedSessionGuard } from "./guard.auth";
import { AuthService } from "./auth.service";
import { Public } from "./public.decorator";
import { LocalAuthGuard } from "./local-auth.guard";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Session } from "express-session";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  // @ApiBody({ description: 'User login credentials', type: LoginDto })
  @ApiOperation({ summary: "ВХОД" })
  @UseGuards(LocalAuthGuard)
  @Post("login")

  async login(@Req() req) {
    // Возвращайте пользовательские данные или что-то другое

    const user = await this.authService.validateUser(req.body.email, req.body.password);
    req.session.user = user;
    // return await this.authService.validateUser(req.body.email, req.body.password);
    const token = await this.authService.generateToken(user);
    return { token };
  }





  // async findAll(@Req() req) {
  //   // Возвращайте пользовательские данные или что-то другое
  //   return await this.authService.validateUser(
  //     req.body.email,
  //     req.body.password
  //   );
  // }


  // @ApiOperation({ summary: "РЕГИСТРАЦИЯ" })

  // @Public()
  // @Post("register")
  // async register(@Req() req) {
  // }

}
