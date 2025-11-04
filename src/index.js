import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({
    path: './env'
}
)

connectDB()
.then(()=>{
    
    const server= app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
        
    });
    server.on ("error", (err) => {
      console.error("Server error:", err);
      process.exit(1);
    });
}
)
.catch((err)=>{
    console.log("MongoDB Connection failed",err);
    
})
