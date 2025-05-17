import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Company } from "./company.model";
import { User } from "./user.model";

@Entity("departments")
export class Department {
  @PrimaryGeneratedColumn()
  departmentId: number;

  @Column({ unique: true })
  departmentName: string;

  @ManyToOne(() => Company, (company) => company.departments)

  @JoinColumn({ name: "companyId" })
  company: Company;

  @OneToMany(() => User, (user) => user.department)
  users: User[];

  @Column()
  companyId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
