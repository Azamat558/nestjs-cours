import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";

import { RolesEnum } from "src/enums/roles";
import { Post } from "src/posts/posts.entity";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ enum: RolesEnum, default: RolesEnum.READER })
  role: RolesEnum;

  @OneToMany(()=> Post, post => post.user)
  posts: Post[]
}
