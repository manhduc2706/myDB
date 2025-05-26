import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.model";

@Entity("uploads")
export class Upload {
  @PrimaryGeneratedColumn()
  uploadId: number;

  @Column()
  uploadName: string;

  @Column()
  uploadPath: string;

  @Column()
  uploadType: string;

  @Column()
  uploadSize: number;

  @OneToOne(() => User)
  @JoinColumn({ name: "userId" })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
