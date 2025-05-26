import { Request, Response } from "express";
import { UploadService } from "../services/upload.service";

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ message: "No file uploaded" });

    const result = await UploadService.processFile(file);
    res.status(200).json({ message: "File uploaded", data: result });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
  }
};
