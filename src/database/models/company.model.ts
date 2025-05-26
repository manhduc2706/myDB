import { AllowNull, Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Department } from "./department.model";

export interface CompanyAttributes {
  companyId: string;
  companyName: string;
}

@Table({
  tableName: "companies",
  timestamps: true,
})
export class Company extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  companyId!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  companyName!: string


  // 1 - N department
  @HasMany(() => Department)
  departments?: Department[]

}
