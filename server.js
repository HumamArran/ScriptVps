const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path")

app.use(express.urlencoded({ extended: false }));
app.get("/status",(req,res)=> res.send({server_status: "OK"}));
app.get('/setup', function (req, res) {

    const options = {

        root: path.join(__dirname)

    };
 

    const fileName = 'setup.sh';

    res.sendFile(fileName, options, function (err) {

        if (err) {

            console.error('Error sending file:', err);

        } else {

            console.log('Sent:', fileName);

        }

    });
});

app.post("/append",(req,res)=>{
const {ip_address,name,date} = req.body
const lineToAppend = `\n### ${name} ${date} ${ip_address}\n`
fs.appendFile('ip', lineToAppend, 'utf-8', err => {
  if (err) {
    return res.send("not inserted")
  }
return res.send("inserted")
})
})

app.listen(3000,()=> console.log("server running on port 8007"));
