const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(`${__dirname}/public`));

let text = '';
let xyz = '';


app.get('/',function(req,res)
{
    res.sendFile(`${__dirname}/form.html`);
    

});

app.get('/data',function(req,res)
{
    res.sendFile(`${__dirname}/json.html`);
});

app.get('/about',function(req,res)
{
    res.sendFile(`${__dirname}/about.html`);
})

app.get('/stock_data',function(req,res)
{
    res.sendFile(`${__dirname}/stock_data.html`);
});

app.post('/abc',function(req,res)
{
    let name = {
        text1 : req.body.name1
    }
    let text = JSON.stringify(name);
    let text2 = JSON.parse(text);
    console.log(text2.text1);
    let url =`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${text2.text1}&apikey=7T9JBZP80EIG0H5Q`;
    console.log(url);
    https.get(url,(httpRes)=>
    {
        let chunk1 ='';
        
        httpRes.on('data',(data)=>
        {
            chunk1+=data;

            
        });
        httpRes.on('end',()=>
        {
            let a = JSON.parse(chunk1);
            console.log(a);
            let b =JSON.stringify(a);
            fs.writeFile('./public/json_demo.json',b,(err)=>
            {
                if(err){console.log(err)}
                console.log('data  inserted');
            });
            

        });
            

            
            // let xyz = JSON.parse(data);
            // console.log(xyz);
            // let bcd = JSON.stringify(xyz);
            
            /*app.get('/data',function(req,res)
            {
                res.writeHead(200 , 'Conten-type','application/json');
                res.end(abc);
            })*/
            
        
       
    });
    
    setTimeout(function() {
        res.redirect('/data');
    }, 4000);
    

});

app.get('/stock',function(req,res)
{
    var name = req.query.name;
    
    let url1 =`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${name}&apikey=7T9JBZP80EIG0H5Q`;
    console.log(url1);
    https.get(url1,(httpRes)=>
    {
        let chunk ='';
        
        httpRes.on('data',(data)=>
        {
            chunk+=data;
        });
        httpRes.on('end', () => {
            let x = JSON.parse(chunk);
            console.log(x);
            let y =JSON.stringify(x);
            fs.writeFile('./public/json_demo1.json',y,(err)=>
            {
                if(err){console.log(err)}
                console.log('data  inserted');
            });
        });

            // let xyz = JSON.parse((data,{ encoding: 'utf8' }));
            // console.log(xyz);
            // let abc = JSON.stringify(xyz);
            // fs.writeFile('./public/json_demo.json',abc,(err)=>
            // {
            //     if(err){console.log(err)}
            //     console.log('data  inserted');
            // })
            // /*app.get('/data',function(req,res)
            
            
    
       
    });

    setTimeout(function() {
        res.redirect('/stock_data');
    }, 4000);
    
});


app.listen(3999);
