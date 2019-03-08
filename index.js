const express=require("express");
const ejs=require("ejs");
const path=require("path");
const bodyParser = require('body-parser')
const app=express();
//const port= 3000;
 const port=process.env.PORT || 3000;
 app.use(bodyParser.urlencoded({extended: false}));
 app.set("view engine","ejs");

  app.use(express.static("public"));
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/myuploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
//     }
//   });
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
  


app.get("/",(req,res)=>{
//res.send("welcome");
res.render("home");
});
var youtubelink ="https://www.youtube.com/results?search_query=";
var googlelink ="https://www.google.com/search?safe=active&source=hp&ei=qscPXMiPLYyGvQSHtoWICQ&q=";
var wikilink ="https://en.wikipedia.org/wiki/";
var binglink ="https://www.bing.com/search?q=";
var yahoolink ="https://uk.search.yahoo.com/search?p=";
var duckduckgolink ="https://duckduckgo.com/?q=";
app.post("/search",(req,res) =>{
    var search = req.body.t1;
    console.log(search);
    //res.send(search);
    let youtube1 = youtubelink+search;
    let google1 =googlelink+search;
    let wiki1 =wikilink+search;
    let bing1 =binglink+search;
    let yahoo1 =yahoolink+search;
    let duckduckgo1 = duckduckgolink+search;
    res.render("index",{
      google : google1,
      youtube : youtube1,
      wiki :wiki1,
      bing :bing1,
      yahoo :yahoo1,
      duckduckgo :duckduckgo1

    });
})
//post route


app.listen(port,console.log("server is running..........."));