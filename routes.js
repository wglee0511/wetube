// global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWARD = "/change-passward";
const ME = "/me";

//videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

//Github

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";


const routes = {
 home:HOME,
 join:JOIN,
 login:LOGIN,
 logout:LOGOUT,
 search:SEARCH,
 me:ME,
 users:USERS,
 userDetail: id => {
     if (id) {
         return `/users/${id}`;
     }else{
         return USER_DETAIL;
     }
 },
 editProfile:EDIT_PROFILE,
 changePassward:CHANGE_PASSWARD,
 videos:VIDEOS,
 upload:UPLOAD,
 videoDetail: id => {
     if(id){
         return `/videos/${id}`;
     }else{
         return VIDEO_DETAIL;
     }
 },
 editVideo: id =>{
     if(id){
         return `/videos/${id}/edit`;
     } else {
         return EDIT_VIDEO;
     }
 },
 deleteVideo: id =>{
     if(id){
         return `/videos/${id}/delete`
     } else {
         return DELETE_VIDEO;
     }
 },
 github:GITHUB,
 githubCallback : GITHUB_CALLBACK
};

export default routes;