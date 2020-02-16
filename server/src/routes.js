import { Router } from 'express';
import multer from 'multer';
import storage from './config/multer';

import GameController from './app/controllers/GameController';

const upload = multer({ storage });

const routes = new Router();

routes.post('/', upload.single('file'), (req, res) => {
  return res.status(200).json({ upload: 'Success' });
});

routes.get('/infos', GameController.index());

routes.get('/infos/:id', GameController.show());

export default routes;
