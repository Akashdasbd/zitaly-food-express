import express from 'express';
import { homeController ,menuController ,staffController ,galleryController , locationController , blogController , newsController , reservationController} from '../controllers/PageController.js';

// express router initialization

const router = express.Router();

//  define routes

router.get('/',homeController);

router.get('/menu',menuController);

router.get('/staff',staffController);

router.get('/gallery',galleryController);

router.get('/location',locationController);

router.get('/blog',blogController);

router.get('/news',newsController);

router.get('/reservation',reservationController);


// export router

export default router;