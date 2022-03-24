const db = require('../db')
const { State, Coaster, Park, Review } = require('../models')

db.on('error', console.error.bind(console,'DB Connection Error'))

const createState = async () =>{
  const stateSeed = [
        {
           name:"New Jersey",
           parks:[]
        },
        {
            name:"Texas",
            parks:[]
        }
   ]
   
   await State.insertMany(stateSeed)
   console.log(" Inserted states")
}

const createPark = async () =>{
    let parkSeed = [
        {
            parkName: "Universal's Islands of Adventure",
            location: "6000 Universal Blvd, Orlando, FL 32819",
            picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2c6g8wB9g8Y%2Fmaxresdefault.jpg&f=1&nofb=1"
        },
    
        {
            parkName: "Six Flags Great Adventure",
            location: "1 Six Flags Blvd, Jackson Township, NJ 08527",
            picture: "https://www.acadexthailand.com/wp-content/uploads/2015/09/SFFF.jpg"
        },
    
        {
            parkName: "Six Flags Great Adventure",
            location: "1 Six Flags Blvd, Jackson Township, NJ 08527",
            picture: "https://i.ytimg.com/vi/uI6umjHJwok/maxresdefault.jpg"
        },
    
        {
            parkName: "Cedar Point",
            location: "Perimeter Rd, Sandusky, OH 44870",
            picture: "https://workandtravelgroup.com/wp-content/uploads/cedar-point.jpg"
        },
    
        {
            parkName: "Busch Gardens Tampa",
            location: " 10165 N McKinley Dr, Tampa, FL 33612",
            picture: "https://i.ytimg.com/vi/ozhhuJa5KXE/maxresdefault.jpg"
        }
    ]
    await Park.insertMany(parkSeed)
    console.log(`inserted ${parkSeed.length}`)
}

const createCoasters = async () =>{
    let coasterSeed = [
    
        {
            rideName: "Jurassic World VelociCoaster",
            aboutRide: " At Universal's Islands of Adventure, the Jurassic World VelociCoaster takes its passengers on a high-flying ride through Jurassic World's famous raptor paddock, racing along on the dinosaurs' hunt with two launches and four inversions.",
            minHeight: "51 inches", 
            ridePeak: "155 ft",
            speed: "70 mph",
            trackLength: "4,700 ft",
            image: ["https://www.themeparktribune.com/wp-content/uploads/2021/06/img_5296-1024x768.jpg"], 
            video: "https://www.youtube.com/watch?v=yxJghEqGFfk"
            
     },
    
     {
        rideName: "Kingda Ka", 
        aboutRide: "Kingda Ka is a steel launched roller coaster at Six Flags Great Adventure's Golden Kingdom area. It is currently the tallest roller coaster in the world and the second fastest.",
        minHeight: "51 inches",
        ridePeak: "456 ft",
        speed: "128 mph",
        trackLength: "3,118 ft",
        image: ["https://www.tripsavvy.com/thmb/ATalGR5h6EURxmYMS1a52XIRMvM=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/4722410085_859ed85509_o-593e572a5f9b58d58ac35a11.jpg"],
        video: "https://www.youtube.com/watch?v=QDweC0iIHQ8"
        
    },
    
    
     {
         rideName: "El Toro", 
         aboutRide: "Located in New Jersey's Six Flags Great Adventure is El Toro, a wooden roller coaster that offers the steepest drop off any wooden roller coater in the country and flies at 70 miles per hour. It truly lives up to its name, with a challenging route that'll leave you walking on legs that feel like jelly afterwards.",
         minHeight: "48 inches",
         ridePeak: "188 ft",
         speed: "70 mph",
         trackLength: "4,400 ft",
         image: ["https://sf-static.sixflags.com/wp-content/uploads/2020/04/sfga-eltoro_1440x1533_0-1-962x1024.jpg"],
         video: "https://www.youtube.com/watch?v=XBf_hHNb7WQ"
         
    },
    
     {
        rideName: "Steel Vengeance", 
        aboutRide: "Steel Vengeance is a frontier-themed roller coaster in Cedar Point. The 'hyper-hybrid' track measures 5,740 feet in length and includes a 200-foot drop at 90 degrees. Riders also get treated to many twists, turns and four inversions, according to Cedar Point. The ride western-inspired ride reaches a maximum speed of 74-miles-per hour and takes about two and a half minutes to complete",
        minHeight: "52 inches",
        ridePeak: "205 ft",
        speed: "74 mph",
        trackLength: "5,740 ft",
        image: ["https://3cfbfb0553974aafbc31-74c41e68ace2933c08ef8ba40eaa02f3.ssl.cf1.rackcdn.com/0/0/0/0/95/350/95350_1"],
        video: "https://www.youtube.com/watch?v=RTXTbzctl0c&feature=emb_imp_woyt"
        
    },
    
    {
        rideName: "Montu", 
        aboutRide: "Prepare to be upside down. Montu is known for its inversions – seven of them, in fact, including a heart-shaped Batwing inversion. Montu made history as the first roller coaster to combine both a loop and a roll at the same time. It’s one of the tallest inverted coasters you can ride, and it reaches speeds of 60 miles per hour with a G-force of 3.85. The 104-foot-tall loop will leave your stomach in your throat. ",
        minHeight: "54 inches",
        ridePeak: "150 ft",
        speed: "60 mph",
        trackLength: "3,983 ft",
        image: ["https://www.gannett-cdn.com/presto/2021/08/12/USAT/ffbb8790-19bc-4099-aad1-ec330d6080e3-montu-busch-gardens-tampa.jpg?width=2560"],
        video: "https://www.youtube.com/watch?v=0lcMhGhCBtQ&t=14s"
       
    }
    
    ]

    await Coaster.insertMany(coasterSeed)
    console.log(`inserted ${coasterSeed.length} coasters`)
    
}



const run = async () =>{
    try{
        // await createCoasters();
        await createPark();

    }
    catch (error) {
        console.log(error)
    }
    finally {
        await db.close()
  }
}
run();