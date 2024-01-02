import { Processor, Process } from "@nestjs/bull";

@Processor("myQueue")
export class QueueConsumer {
  @Process()
  async processJob(job: any) {
    // Обработка задачи
    console.log(`Processing job with data:`, job.data);
  }
}
