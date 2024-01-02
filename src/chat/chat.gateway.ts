import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
 })
export class ChatGateway {
  
  @WebSocketServer()
  server: Server;
  private connectedUsers: Set<Socket> = new Set();

  handleConnection(client: Socket) {
    console.log('sdffdsfdssdf')
    this.connectedUsers.add(client);
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.connectedUsers.delete(client);
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('chatMessage')
  handleChatMessage(client: Socket, payload: { message: string }) {
    // console.log(payload,'Aza')
    // Отправляем сообщение всем клиентам, подключенным к чату
    this.server.emit('chatMessage', payload);
  }
}
