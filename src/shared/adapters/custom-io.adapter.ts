import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';

export class CustomIoAdapter extends IoAdapter {
  createIOServer(port, options?: ServerOptions): any {
    // Customize your WebSocket server configuration here
    const server = super.createIOServer(port, options);
    // You can add middleware, configure namespaces, and more here
    return server;
  }
}