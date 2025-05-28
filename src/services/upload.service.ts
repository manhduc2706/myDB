import { UploadFile } from "../database/models/upload.model";

export class UploadService {
  static async saveFileMetadata(file: Express.Multer.File, userId: string) {
    return await UploadFile.create({
      name: file.originalname,
      path: file.path,
      type: file.mimetype,
      size: file.size,
      userId,
    });
  }

  static async getAllFiles() {
    return await UploadFile.findAll();
  }
}
