import { staffs } from "../data/staffs.js";

import { homeBanner } from "../data/home.js";

import { homeWelcomeCards } from "../data/home.js";

import { menuItems } from "../data/menu.js";

import { galleryImages } from "../data/gallery.js";

/**
 * Home controller for rendering the home page.
 * @param {*} req 
 * @param {*} res 
 */

export const homeController = (req,res)=>{
    res.render('index',{
        homeBanner,
        homeWelcomeCards,
    })
}

/**
 * Menu controller for rendering the menu page 
 * @param {*} req 
 * @param {*} res 
 */
export const menuController = (req,res)=>{
    
    res.render('menu',{

        menuItems,
    })
}

/**
 * Staff controller for rendering the staff page
 * @param {*} req 
 * @param {*} res 
 */
export const staffController = (req,res)=>{
    res.render('staff',{
        staffs,
    })
}


export const galleryController = (req,res)=>{
    res.render('gallery',{
        galleryImages,
    })
}

export const locationController = (req,res)=>{
    res.render('location')
}

export const blogController = (req,res)=>{
    res.render('blog')
}

export const newsController = (req,res)=>{
    res.render('news')
}

export const reservationController = (req,res)=>{
    res.render('reservation')
}