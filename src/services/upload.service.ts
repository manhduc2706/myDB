import { UploadFile } from "../database/models/upload.model";

export class UploadService {
  static async saveFileMetadata(file: Express.Multer.File, userId: string) {
    return await UploadFile.create({
      name: file.originalname,
      path: file.path,
      mimetype: file.mimetype,
      size: file.size,
      uploadedBy: userId,
    });
  }

  static async getAllFiles() {
    return await UploadFile.findAll();
  }
}
