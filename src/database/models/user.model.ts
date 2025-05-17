import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Department } from "./department.model";
import { ROLE, STATE } from "../enum/enum";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @ManyToOne(() => Department, (department) => department.users)
  @JoinColumn({ name: "departmentId" })
  department: Department;

  @Column()
  departmentId: number;

  @Column({
    type: "varchar",
    enum: ROLE,
    default: ROLE.USER,
  })
  role: ROLE;
  @Column({
    type: "varchar",
    enum: STATE,
    default: STATE.ACTIVE,
  })
  state: STATE;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
