var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var firebase = require('firebase/app');
require('firebase/firestore');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

var port = 8081
app.use(function(req, res, next){
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Methods', "GET, POST, OPTION, PUT, DELETE")
    
    next()
})
    
    
firebase.initializeApp({
    apiKey: "AIzaSyCNgVj8wI7OFVyPkilSH_OYGRclsGHGG4I",
    authDomain: "finalproject-b437c.firebaseapp.com",
    projectId: "finalproject-b437c"
});


var db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
})




var router = express.Router()

router.use(function(req, res, next){
    console.log("Handling Requests");
    next();
});


var itemNumber = 0


router.get('/', function(req, res){
    res.json({message: "good job man you are on ur way to victory"})
    
});

    
router.route('/shopping-cart/:id')
    .get(function(req,res){
        var d = []
        var i = 0
        console.log(req.params.id)
        db.collection('shopping-cart').where('id',"==", req.params.id).get().then(data =>{
            
            data.docs.forEach(doc =>{
                console.log(doc)
                d[i] = doc.data()
                i++
                
            })
            res.json(d)
        })
    })
    .put(function(req,res){
        var d = []
        var z = []
        
        var i = 0
        var id = ""
        var name = req.body.name        
        var quantity = req.body.quan
        db.collection('shopping-cart').where('id',"==", req.params.id).get().then(data =>{
            db.collection('products').where('title','==',name).get().then(datas=>{
                
                datas.docs.forEach(doc =>{
                    z[i] = doc.data()
                    i=0
                    console.log(doc.id)
                })
                data.docs.forEach(doc =>{
                    d[i] = doc.id
                    i++
                    id = d[0] 
                    
                })
                db.collection('shopping-cart').doc(id).update({
                    item: "yea"
                })
            })
        })
        
    })
    .delete(function(req,res){
        var d = []
        var i = 0
        var id = ""
        console.log(req.params.id)
        db.collection('shopping-cart').where('id',"==", req.params.id).get().then(data =>{
            
            data.docs.forEach(doc =>{
            
                d[i] = doc.id
                console.log(d[i])
                i++
                id = d[0]
            })
            db.collection('shopping-cart').doc(id).delete()
        })
        
        
    })
    
    
router.route('/shopping-cart')
    .post(function(req,res){
        var dateCreated = req.body.dateCreated
        var id = req.body.id
        db.collection('shopping-cart').add({
            dateCreated: dateCreated,
            id: id
        })
        
        res.json(dateCreated)
    })
    
    
router.route('/products/:Category')
    .get(function(req,res){
        var d = []
        var i = 0
        db.collection('products').where('category',"==", req.params.Category).get().then(data =>{
            
            data.docs.forEach(doc =>{
                console.log(doc)
                d[i] = doc.data()
                i++
                
            })
            res.json(d)
        })
    })

router.route('/products')
    //res.json({message:"Well you got here"})
    .post(function(req,res){
        
        var em = req.body.price;
        var na = req.body.title;
        var cat = req.body.category;
        var img = req.body.imageUrl;
        
        em.toString()
        na.toString()
        cat.toString()
        img.toString()
        
        db.collection('products').add({
            price: em,
            title: na,
            category: cat,
            imageUrl: img
            
        })
        res.json({
            message: "created"
        })
        
    })
    
    .get(function(req,res){
        db.collection('products').get() .then((snapshot)=>{
        var d = []
        var p = []
        var i=0
        snapshot.docs.forEach(doc => {
                //p = doc.data()
                
                //p.push(doc.id)
                d[i] = doc.data()
                
              
                i++
            })
            res.json(d);
        })
        
    })
    






router.get('/users', function(req, res){
    //res.json({message:"Well you got here"})
    db.collection('users').get() .then((snapshot)=>{
    var d = []
    var i=0
    snapshot.docs.forEach(doc => {
            d[i] = doc.data()
            i++
        })
        res.json(d);
    })
    
})
app.use('/api', router);



app.listen(port, process.env.IP, function(){
    console.log("Server is hopping on (fuckin bandwagons fam)")
});


