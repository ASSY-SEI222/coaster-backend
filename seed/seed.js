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
            name: "Six Flags New England",
            description: "Theme Park located in Massachusetts",
            picture: ["https://i.ytimg.com/vi/ibgMHNhZexE/maxresdefault.jpg"],
            location: "Massechusetts",
            reviews:[],
            coasters:[]
        },
        {
            name: "Six Flags Great Adventure",
            description: "Theme Park located in New Jersey, with a Safari!",
            picture: ["https://i.ytimg.com/vi/uI6umjHJwok/maxresdefault.jpg"],
            location: "New Jersey",
            reviews:[],
            coasters:[]
        }
    ]
    await Park.insertMany(parkSeed)
    console.log(`inserted ${parkSeed.length}`)
}

const run = async () =>{
    try{
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