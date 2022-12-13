const express =  require("express") ;
const cors = require('cors')
const path = require('path')

const app  = express() ;

app.use(cors()) ;


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


// Express doesn't parse "multipart/form-data" by default.
// and Multer can parse it in the "upload" function.

// instead of typing it like this:

// app.post('/single', multerMiddleware.single('images'), (req, res) => {
//   // Logic here
// });

// this worked for me:
// app.post('/single', (req, res) => { multerMiddleware(req, res, (error) => {
//   // Logic here
// })});

app.get("/multipleupload", (req, res) =>{
    res.render("multipleUpload") ;
}) ;

app.post("/multipleupload", multerMiddleware.array('image', 3),(req, res) => {
    console.log(req.files)
    res.send("Images Uploaded")
}) ;
app.listen(3001);
console.log("3001 is th port.")
