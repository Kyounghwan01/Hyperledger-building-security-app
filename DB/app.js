var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/hyper';

mongo.connect(url, (err)=>{
    console.log('connect database!')
})

app.get('/data', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var collection = db.collection('user');
        collection.find({}).toArray((x, result)=>{
            res.send(result);
        })
    })
})



app.post('/data', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var collection = db.collection('user');
        var user = {
            email_db: req.body.email_db,
            password_db: req.body.password_db,
            name_db:req.body.name_db
        }
        collection.insert(user, (x, result)=>{
            res.send(result);
        })
    })
})

app.post('/Gasdata', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var col=db.collection('Gasdata');
        var GasList={
            facilityNumber: req.body.facilityNumber,
            check1:req.body.check1,
            check2:req.body.check2,
            check3:req.body.check3,
            check4:req.body.check4,
            check5:req.body.check5,
            check6:req.body.check6,
            check7:req.body.check7,
            check8:req.body.check8,
            check9:req.body.check9,
            check10:req.body.check10,
            check11:req.body.check11,
            check12:req.body.check12,
            check13:req.body.check13,
            check14:req.body.check14,
            name : req.body.name,
            day:req.body.day,
            image:req.body.image
        }
        col.insert(GasList,(x,rep)=>{
            res.send(rep);
        })
    })
})

app.post('/Elevatordata', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var col=db.collection('Elevatordata');
        var ElevatorList={
            facilityNumber: req.body.facilityNumber,
            check1:req.body.check1,
            check2:req.body.check2,
            check3:req.body.check3,
            check4:req.body.check4,
            check5:req.body.check5,
            check6:req.body.check6,
            check7:req.body.check7,
            check8:req.body.check8,
            check9:req.body.check9,
            check10:req.body.check10,
            check11:req.body.check11,
            check12:req.body.check12,
            check13:req.body.check13,
            check14:req.body.check14,
            check15:req.body.check15,
            check16:req.body.check16,
            check17:req.body.check17,
            name : req.body.name,
            day:req.body.day,
            image:req.body.image
        }
        col.insert(ElevatorList,(x,rep)=>{
            res.send(rep);
        })
    })
})
app.post('/Buildingdata', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var col=db.collection('Buildingdata');
        var BuildingList={
            facilityNumber: req.body.facilityNumber,
            check1:req.body.check1,
            check2:req.body.check2,
            check3:req.body.check3,
            check4:req.body.check4,
            check5:req.body.check5,
            check6:req.body.check6,
            check7:req.body.check7,
            check8:req.body.check8,
            check9:req.body.check9,
            check10:req.body.check10,
            check11:req.body.check11,
            check12:req.body.check12,
            check13:req.body.check13,
            check14:req.body.check14,
            check15:req.body.check15,
            check16:req.body.check16,
            check17:req.body.check17,
            check18:req.body.check18,
            check19:req.body.check19,
            name : req.body.name,
            day:req.body.day,
            image:req.body.image,

        }
        col.insert(BuildingList,(x,rep)=>{
            res.send(rep);
        })
    })
})
app.post('/Firedata', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var col=db.collection('Firedata');
        var FireList={
            facilityNumber: req.body.facilityNumber,
            check1:req.body.check1,
            check2:req.body.check2,
            check3:req.body.check3,
            check4:req.body.check4,
            check5:req.body.check5,
            check6:req.body.check6,
            check7:req.body.check7,
            check8:req.body.check8,
            check9:req.body.check9,
            check10:req.body.check10,
            check11:req.body.check11,
            check12:req.body.check12,
            check13:req.body.check13,
            check14:req.body.check14,
            check15:req.body.check15,
            check16:req.body.check16,
            check17:req.body.check17,
            check18:req.body.check18,
            check19:req.body.check19,
            check20:req.body.check20,
            check21:req.body.check21,
            check22:req.body.check22,
            check23:req.body.check23,
            check24:req.body.check24,
            name : req.body.name,
            day:req.body.day,
            image:req.body.image,
            
        }
        col.insert(FireList,(x,rep)=>{
            res.send(rep);
        })
    })
})
app.post('/Electricdata', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var col=db.collection('Electricdata');
        var Electricist={
            facilityNumber: req.body.facilityNumber,
            check1:req.body.check1,
            check2:req.body.check2,
            check3:req.body.check3,
            check4:req.body.check4,
            check5:req.body.check5,
            check6:req.body.check6,
            check7:req.body.check7,
            check8:req.body.check8,
            check9:req.body.check9,
            check10:req.body.check10,
            check11:req.body.check11,
            check12:req.body.check12,
            check13:req.body.check13,
            check14:req.body.check14,
            check15:req.body.check15,
            check16:req.body.check16,
            check17:req.body.check17,
            check18:req.body.check18,
            name : req.body.name,
            day:req.body.day,
            image:req.body.image
        }
        col.insert(Electricist,(x,rep)=>{
            res.send(rep);
        })
    })
})

app.post('/FacilityImage', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var collection = db.collection('FacilityImage');
        var FacilityImage = {
            FacilityImage: req.body.FacilityImage,
            FacilityNumber:req.body.FacilityNumber,
            admin:req.body.admin,
            safetycheck_date: req.body.safetycheck_date,
            Electricity: req.body.Electricity,
            Gas: req.body.Gas,
            Elevator: req.body.Elevator,
            Building: req.body.Building,
            FireSafety: req.body.FireSafety

        }
        collection.insert(FacilityImage, (x, result)=>{
            res.send(result);
        })
    })
})


app.get('/FacilityImage', (req, res)=>{
    mongo.connect(url, (err, db)=>{
        var collection = db.collection('FacilityImage');
        
        collection.find({}).toArray((x, result)=>{
            res.send(result);
        })
    })
})

app.listen(3210, ()=>{
    console.log('Server connect @port 3210!');
})
