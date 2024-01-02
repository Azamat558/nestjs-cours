import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({ example: "зеленная миля", description: "название" })
    title: string;
  
    @ApiProperty({ example: "ыолпвалырвалыокарфызка", description: "контетн" })
    content: string;

    @ApiProperty({ example: "88", description: "контетн" })
    userId: string;
  }