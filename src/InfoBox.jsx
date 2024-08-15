import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';





export default function InfoBox({ info }) {

    const INIT_URL = "img.png"

    const hot_url = "hot_img.png";
    const cold_url = "cold_img.png";
    const rain_url ="rain_img.png";


    return(
        <div className="InfoBox">
            {/* <h3>Weather Info = {info.weather}</h3> */}

            <div className='cardcontainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? rain_url : info.temp > 15 ? hot_url : cold_url}
                        title="green iguana"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 80 ? <WaterDropIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />
                            }
                        </Typography>

                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Minimum Temperature = {info.tempMin}&deg;C</p>
                            <p>maximum Temperature = {info.tempMax}&deg;C</p>
                            <p>The Weather can be described as <i><b>{info.weather}</b></i> and Feels Like {info.feelsLike}&deg;C</p>
        
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}