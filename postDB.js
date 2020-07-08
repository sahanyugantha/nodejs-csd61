const mysql =  require ('mysql')

class posts {
    
    constructor (){
        console.log ("Yep Database is working");
    }

    getPosts (){
        const promise = new Promise ((resolve, reject) => {

            const connection = mysql.createConnection ({
                host: 'localhost',
                user:'root',
                database: 'netflix_db'
            });
        
            const queryString = "SELECT * FROM tbl_posts" ;

            var postsArray = [];
            connection.query (queryString, (err, rows, fields) => {
                if (err) reject (err)

                rows.forEach(element => {
                 var posts =  {
                        id: element.parseInt (row.id),
                        title: row.title.toString (),
                        body: row.body.toString (),
                        time: row.time.toString () 
                    }
                    postsArray.push (push); 
                });
                
            })
            resolve(postsArray);
        });
    }
}

module.exports = posts;