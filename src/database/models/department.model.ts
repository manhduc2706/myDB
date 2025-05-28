import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { Company } from "./company.model";
import { User } from "./user.model";

export interface DepartmentAttributes {
  departmentId?: string;
  departmentName: string;
  companyId: string;
}

@Table({
  tableName: "departments",
  timestamps: true,
})
export class Department extends Model<DepartmentAttributes> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  departmentId!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  departmentName!: string;

  // N - 1 company
  @ForeignKey(() => Company)
  @AllowNull(false)
  @Column(DataType.UUID)
  companyId!: string;

  @BelongsTo(() => Company)
  company!: Company;

  // 1 - N user
  @HasMany(() => User)
  users?: User[];
}
