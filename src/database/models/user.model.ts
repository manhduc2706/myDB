
import { Department } from "./department.model";
import { ROLE, STATE } from "../enum/enum";
import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { UploadFile } from "./upload.model";

export interface UserAttributes{
  userId: string;
  username: string;
  password: string;
  email: string;
  departmentId: string;
  role: ROLE;
  state: STATE;
}

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  userId!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  username!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  email!: string;

  // 1 - N uploadFile
  @HasMany(()=> UploadFile)
  uploadFiles?: UploadFile[]

  // N - 1 department
  @ForeignKey(() => Department)
  @AllowNull(false)
  @Column(DataType.UUID)
  departmentId?: string;

  @BelongsTo(() => Department)
  department!: Department;

  @Column({
    type: DataType.ENUM(...Object.values(ROLE)),
    defaultValue: ROLE.USER,
  })
  role!: ROLE;

  @Column({
    type: DataType.ENUM(...Object.values(STATE)),
    defaultValue: STATE.ACTIVE,
  })
  state!: STATE;
}