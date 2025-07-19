import express from 'express';
import { homeController ,menuController} from '../controllers/PageController.js';

// express router initialization

const router = express.Router();

//  define routes

router.get('/',homeController);

router.get('/menu',menuController);

// export router

export default router;