import { Request, Response, NextFunction } from 'express';
import { UploadService } from '../services/upload.service';

export const uploadFile = async (req: Request, res: Response) => {
    try {
      const file = req.file;
      const userId = String(req.user?.id);
      if (!file) {
        res.status(400).json({ error: 'No file provided' });
        return;
      }

      const saved = await UploadService.saveFileMetadata(file, userId);
      res.json({ file: saved });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

export const listFiles = async (_req: Request, res: Response) => {
    try {
      const files = await UploadService.getAllFiles();
      res.json({ files });
    } catch (err) {
      res.status(500).json({ error: 'Cannot retrieve files' });
    }
  }

