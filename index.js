const app= require('express')();

const  PORT = 4000;

app.listen( 
    PORT,
    () => console.log(`server is running on ${PORT}`)
);

app.get('/getRequest', (req,res)=>{
    res.send("hello this is succesfull Get Request")
});

app.post('/postRequest', (req,res)=>{
    res.send("Luis Angel Avila Lopez, 20966, 5A")
});