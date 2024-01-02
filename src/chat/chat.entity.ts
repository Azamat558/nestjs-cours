import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity({ name: "posts" })
export class Chat {
//   @PrimaryGeneratedColumn()
//   id: number;

  @Column()
  message: string;
}