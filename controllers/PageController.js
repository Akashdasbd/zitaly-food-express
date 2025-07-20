import { staffs } from "../data/staffs.js";

import { homeBanner } from "../data/home.js";

import { homeWelcomeCards } from "../data/home.js";

import { menuItems } from "../data/home.js";

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