import { BullModule } from '@nestjs/bull';
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MiddlewareConsumer, Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.entity";
import { PostsModule } from "./posts/posts.module";
import { Post } from "./posts/posts.entity";
import { AuthModule } from "./auth/auth.module";
import { QueueModule } from "./queue/queue.module";
import { QueueConsumer } from "./queue/queue.consumer";
import { ChatGateway } from './chat/chat.gateway';
import { ChatModule } from './chat/chat.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { CustomIoAdapter } from './shared/adapters/custom-io.adapter';

@Module({
  controllers: [],
  providers: [QueueConsumer, ChatGateway],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, Post],
      synchronize: true,
    }),
    QueueModule,
    UsersModule,
    PostsModule,
    AuthModule,
    QueueModule,
    // ChatModule
  ],
})
export class AppModule {
  
}
