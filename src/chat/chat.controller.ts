import { ChatGateway } from './chat.gateway';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Chat } from './chat.entity';
@ApiTags('chat')

@Controller()
export class ChatController {
  constructor(private readonly chatGateway: ChatGateway) {}

  @ApiOperation({ summary: "KDZFNksjzdfno пользователя" })

  @ApiResponse({ status: 200, type: Chat })
  @Get()
  getHello(): string {
    console.log('asdasd');
    
    return 'Hello World!';
  }

  @MessagePattern('message')
  handleMessage(@Payload() message: string): void {
    this.chatGateway.server.emit('message', message);
  }
}