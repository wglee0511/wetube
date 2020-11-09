import routes from "../routes";
import Video from "../models/Video";

//global
export const home = async (req, res) => {
    try{
        const videos = await Video.find({}).sort({_id:-1});
    res.render("home",{pageTitle:"Home", videos});
    }catch (error) {
        console.log(error);
        res.render("home",{pageTitle:"Home", videos : [] });
    }
}; // inside of render is pug file.
   // async is function of Javascript for waiting next part

export const search =(req, res) => { 
    const {query:{term : searchingBy }} = req; // const searchingBy = req.query.term;
    res.render("search",{pageTitle:"Search",searchingBy,videos}); // at searchingBy : searchingBy
};

//video

export const getUpload = (req, res) => res.render("upload",{pageTitle:"Upload"});

export const postUpload = async (req, res) => {
   const {
       body : { title, description},
       file : { path } 
    } = req;

    const newVideo = await Video.create({
        fileUrl : path,
        title,
        description
    })
    console.log(newVideo);
   // To Do Upload and Save video
   res.redirect(routes.videoDetail(newVideo.id));
}

export const videoDetail =  async (req, res) => {
    const {
        params : {id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("videoDetail",{pageTitle:video.title, video});
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
};

export const getEditVideo = async(req, res) => {

    const {
        params : {id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("editVideo",{pageTitle:`Edit ${video.title}`, video});
    }catch(error){
        res.redirect(routes.home);
    }
};

export const postEditVideo = async (req, res) => {

    const {
        params : {id},
        body : { title, description }
    }=req;
    try{
        await Video.findOneAndUpdate({_id : id },{title,description});
        res.redirect(routes.videoDetail(id));
    }catch(error){
        res.redirect(routes.home);
    }
    
};

export const deleteVideo = async (req, res) => {
    const {
        params : {id}
    }=req;
    try{
        await Video.findOneAndRemove({_id : id});
    } catch(error) {
        
    }
    res.redirect(routes.home);
}