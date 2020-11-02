import {videos} from "../db";
import routes from "../routes";

//global
export const home = (req, res) => {
    res.render("home",{pageTitle:"Home", videos})
}; // inside of render is pug file.

export const search =(req, res) => { 
    const {query:{term : searchingBy }} = req; // const searchingBy = req.query.term;
    res.render("search",{pageTitle:"Search",searchingBy,videos}); // at searchingBy : searchingBy
};

//video

export const getUpload = (req, res) => res.render("upload",{pageTitle:"Upload"});

export const postUpload = (req, res) => {
   const  { body : { file, title, description} }=req;

   // To Do Upload and Save video

   res.redirect(routes.videoDetail(121212));
}

export const videoDetail = (req, res) => res.render("videoDetail",{pageTitle:"Video Detail"});

export const editVideo = (req, res) => res.render("editVideo",{pageTitle:"Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo",{pageTitle:"Delete Video"});