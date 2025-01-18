import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
    let INIT_URL = "https://images7.alphacoders.com/660/660728.jpg";
    
    return(
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       <p>Tempreture : {info.temp} &deg; C</p>
       <p>Min_temoreture : {info.tempMin} &deg; C</p>
       <p>Max_Tempreture : {info.tempMax} &deg; C</p>
       <p>Humidity : {info.humidity}</p>
       <p>the weather can be describe as {info.weather} and feels like {info.feelsLike} &deg; C</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    )
}