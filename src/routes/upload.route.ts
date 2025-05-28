import { Router } from 'express';
import { upload } from '../middlewares/upload.middleware';
import { listFiles, uploadFile } from '../controllers/upload.controller';
import { authenticate, checkAccountState } from '../middlewares/auth.middleware';
// import { authMiddleware } from '../middlewares/auth.middleware'; // nếu có

const uploadRoute = Router();
// const controller = new UploadController();

uploadRoute.post('/upload', upload.single('file'), authenticate,checkAccountState, uploadFile);
uploadRoute.get('/files', authenticate,checkAccountState, listFiles);

export default uploadRoute;
