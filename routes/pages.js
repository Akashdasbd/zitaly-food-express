import express from 'express';
import { homeController ,menuController ,staffController} from '../controllers/PageController.js';

// express router initialization

const router = express.Router();

//  define routes

router.get('/',homeController);

router.get('/menu',menuController);

router.get('/staff',staffController);

// export router

export default router;