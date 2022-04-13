import multer from "multer";

//middleware to handle file uploading
const storage = multer.diskStorage({
    //destination where we want to upload our files
    destination:(req, file, cb) => {
        cb(null, './uploads/')
    },
    //filename
    filename:(req,file,cb) => {
        cb(null,Date.now() + file.originalname);
    },
});
//specifying file types that are allowed to be uploaded
const file_filter = (req, file, cb) => {
    if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"||file.mimetype==="image/jpg"){
        cb(null,true);
    }else{
        cb(null,false);
    }
};
const upload = multer({storage:storage,limits:{
    fileSize :1024 * 1024 * 100
},
fileFilter:file_filter
})

export default upload;
