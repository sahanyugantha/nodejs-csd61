const http = require ("http");
const path = require ("path");
const fs = require("fs");
const Posts = require ("./postDB");

const server = http.createServer (function (request, response){

    if (request.url === "/"){
        fs.readFile (path.join (__dirname, "public", "index.html"), function (error, data){

            if (error) throw error;
            response.write(data);            
            response.end();
        });
    }
    else if (request.url === "/css/style.css"){
        fs.readFile(path.join (__dirname, "public", "css", "style.css"),function (error, data){
            if (error) throw error;
            response.write (data);
            response.end();
        });
    }

    else if (request.url === "/posts"){
        post = new Posts ();

        post.getPosts().then(function (data){
            var p = JSON.stringify (data);
            response.writeHead (200, {"Content-Type":"application/JSON"});
            response.json (p);
            response.end ();
        });

    }
    
    else if(request.url === "/about")
    {
       fs.readFile (path.join (__dirname, "public" , "about"), function (error, data){
        if (error) throw error;
        response.write ();
       });
    }else{
        response.write ("<h2> 404 Page not found </h2>");
        response.end();
    }

});

server.listen (5000);