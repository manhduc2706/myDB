import { User } from "./user.model";
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  AllowNull,
  BelongsTo,
  PrimaryKey,
  Default,
} from "sequelize-typescript";

export interface UploadFileAttributes {
  fileId?: string;
  name: string;
  path: string;
  type: string;
  size: number;
  userId: string;
}

@Table({ tableName: "upload_files", timestamps: true })
export class UploadFile extends Model<UploadFileAttributes> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  fileId!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  name!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  path!: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  type!: string;

  @AllowNull(false)
  @Column({ type: DataType.INTEGER })
  size!: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.UUID)
  userId?: User;

  @BelongsTo(() => User)
  user!: User;
}
