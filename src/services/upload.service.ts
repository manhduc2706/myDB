import { UploadFile, UploadFileAttributes } from "../database/models/upload.model";

export class UploadService {
  static async saveFileMetadata(file: Express.Multer.File, userId: string) {
    const metadata: UploadFileAttributes = {
      name: file.originalname,
      path: file.path,
      type: file.mimetype,
      size: file.size,  
      userId,
    };
  return await UploadFile.create(metadata);
  }

  static async getAllFiles() {
    return await UploadFile.findAll();
  }
}
