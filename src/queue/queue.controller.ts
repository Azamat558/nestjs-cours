import { Controller, Get, Inject } from "@nestjs/common";
import { QueueService } from "./queue.service";
import { ApiOperation } from "@nestjs/swagger";


@Controller()
export class QueueController {
  constructor(
    private readonly queueService: QueueService
  ) {}

  @ApiOperation({description:"queue"})
  @Get("add-job")
  async addJob() {
    await this.queueService.addJob({ message: "Hello from the queue!" });
    return "Job added to the queue.";
  }
}
