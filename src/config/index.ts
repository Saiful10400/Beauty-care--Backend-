
import dotenv from "dotenv"
import path from "path"

dotenv.config({path:path.join(process.cwd(),".env")})



export default{
    port:process.env.PORT,
    jwtSecret:process.env.JWT_SECRET,
    accessTokenLife:process.env.access_token_life,
    api_secret:process.env.API_SECRET,
    frontend_url:process.env.FRONT_END_URL,
    db_url:process.env.DB_URL
   
}