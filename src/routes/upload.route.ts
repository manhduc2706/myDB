import { Router } from 'express';
import { upload } from '../middlewares/upload.middleware';
import { listFiles, uploadFile } from '../controllers/upload.controller';
// import { authMiddleware } from '../middlewares/auth.middleware'; // nếu có

const uploadRoute = Router();
// const controller = new UploadController();

uploadRoute.post('/upload', upload.single('file'), uploadFile);
uploadRoute.get('/files', listFiles);

export default uploadRoute;
