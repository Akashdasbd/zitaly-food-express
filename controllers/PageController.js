/**
 * Home controller for rendering the home page.
 * @param {*} req 
 * @param {*} res 
 */

export const homeController = (req,res)=>{
    res.render('index')
}


export const menuController = (req,res)=>{
    res.render('menu')
}