import { Injectable } from "@nestjs/common";
import { Queue } from "bull";
import { InjectQueue } from '@nestjs/bull';


@Injectable()
export class QueueService {

  constructor(
    @InjectQueue('myQueue')
    private readonly queue: Queue
  ) {}

  async addJob(data: any) {
    await this.queue.add(data, {delay: 1000});
  }

}
