import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Department } from "./department.model";

@Entity("companies")
export class Company {
  @PrimaryGeneratedColumn()
  companyId: number;

  @Column({ unique: true })
  companyName: string;

  @OneToMany(() => Department, (department) => department.company)
  departments: Department[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
