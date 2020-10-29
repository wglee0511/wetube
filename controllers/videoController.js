//global
export const home = (req, res) => res.render("home",{pageTitle:"Home"}); // inside of render is pug file.

export const search =(req, res) => { 
    const {query:{term : searchingBy }} = req; // const searchingBy = req.query.term;
    res.render("search",{pageTitle:"Search",searchingBy}); // at searchingBy : searchingBy
};

//video
export const videos = (req, res) => res.render("videos",{pageTitle:"Videos"});

export const upload = (req, res) => res.render("upload",{pageTitle:"Upload"});

export const videoDetail = (req, res) => res.render("videoDetail",{pageTitle:"Video Detail"});

export const editVideo = (req, res) => res.render("editVideo",{pageTitle:"Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo",{pageTitle:"Delete Video"});