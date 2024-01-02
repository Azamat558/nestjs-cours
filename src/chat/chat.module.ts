import { Module } from "@nestjs/common";
import { ChatGateway } from "./chat.gateway";
import { ChatController } from "./chat.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
//   imports: [TypeOrmModule.forFeature([Post])],

    controllers: [ChatController],
  providers: [ChatGateway], // Здесь может быть больше провайдеров, если нужно
  exports: [ChatGateway],
})
export class ChatModule {}
