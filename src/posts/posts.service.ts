import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "./posts.entity"; // Путь к сущности Post
import { CreatePostDto } from "./dto/create-post.dto";
import { UsersService } from "src/users/users.service";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private userService: UsersService
  ) {}

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const user = await this.userService.getById(createPostDto.userId);

    if (!user) {
      throw new NotFoundException("userId takogo net");
    }
    const post = await this.postRepository.create(createPostDto);
    post.user = await this.userService.getById(createPostDto.userId);
    return await this.postRepository.save(post);
  }

  async getByUserId(id: number) {
    const usersId = await this.postRepository.findOne({
      where: {
        id: id,
      },
    });
    return usersId;
  }
}
