const express =  require("express") ;
const app  = express() ;
const path = require('path')

const multer = require("multer") ;

const storageEngine = multer.diskStorage({
    destination: (req, file, cb ) =>{
        cb(null, 'Images')
    },
    filename: (req, file, cb) =>{
        console.log(file) ;
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const multerMiddleware = multer({storage:storageEngine})

app.set("view engine", "ejs") ;

app.get("/singleupload", (req, res) =>{
    res.render("singleUpload") ;
}) ;

app.post("/singleupload", multerMiddleware.single('image'),(req, res) => {
    console.log(req.file)
    res.send("Image Uploaded")
}) ;

app.get("/multipleupload", (req, res) =>{
    res.render("multipleUpload") ;
}) ;

app.post("/multipleupload", multerMiddleware.array('image', 3),(req, res) => {
    console.log(req.files)
    res.send("Images Uploaded")
}) ;
app.listen(3001);
console.log("3001 is th port.")
