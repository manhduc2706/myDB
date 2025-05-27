import { Request, Response } from 'express';
import { UploadService } from '../services/upload.service';

  export const uploadFile = async (req: Request, res: Response) => {
    try {
      const file = req.file;
      const userId = String(req.user?.id || 0); // Gắn req.user từ middleware xác thực
      if (!file) return res.status(400).json({ error: 'No file provided' });

      const saved = await UploadService.saveFileMetadata(file, userId);
      return res.json({ file: saved });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  export const listFiles = async (_req: Request, res: Response) => {
    try {
      const files = await UploadService.getAllFiles();
      return res.json({ files });
    } catch (err) {
      return res.status(500).json({ error: 'Cannot retrieve files' });
    }
  }

