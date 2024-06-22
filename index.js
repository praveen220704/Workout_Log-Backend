//import the mongoose module
const mongoose=require('mongoose');

//import the config module
const config=require('./utils/config');

// import the app module
const app=require('./app');

console.log('Connecting to MongoDB...');

//Connect to MongoDB using mongoose
mongoose.connect(config.MONGODB_URI)
.then(()=>{
    console.log('Connected to MongoDB...');

    const PORT=config.PORT || 3001;

    // start the server
app.listen(PORT,()=>{
    console.log(`server running on port ${config.PORT}`);
}
)
})
.catch((error)=>{
    console.log('Error connecting to MongoDB...',error.message);
})

