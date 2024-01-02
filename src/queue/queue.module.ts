import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { QueueService } from "./queue.service";
import { QueueController } from "./queue.controller";

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'myQueue',
      useFactory: () => ({
        limiter: { max: 10, duration: 1000 },
        redis: {
          host: 'localhost',
          port: 6379,
        }
      })
    }),
  ],
  controllers: [QueueController],
  providers: [QueueService],
  exports: [QueueService],
})
export class QueueModule {}
