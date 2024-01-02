import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsService } from "./posts.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("СОЗДАНИЕ ПОСТОВ")
@Controller("posts")
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOperation({ summary: "создание постов " })
  @ApiResponse({ status: 200, type: Post })
  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    const post = await this.postsService.createPost(createPostDto);
    return post;
  }
}
