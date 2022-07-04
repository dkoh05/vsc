<<<<<<< HEAD
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './about.css'
=======
function About(){
    return (
        <div className="about-me">
            <h1>A Brief History about Dae Yeon</h1>
            <ul>
                <li>Born in Seoul, South Korea in 2005</li>
                <li>Moved to Ho Chi Minh City, Vietnam in 2007</li>
                <li>Attended the British International School, HCMC in Year 2</li>
                <li>Built my first website in Year 9</li>
            </ul>
        </div>



    )
}
>>>>>>> 8f921d8b52b01f0bc70afc92c897e0ca67539a77

export default function ActionAreaCard() {
  return (
    <div className='about_me_banner'>
      <Typography variant="h1" component="div" gutterBottom>
        About DaeYeon!
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia className='column'
            component="img"
            height="140"
            image="https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_Ceulemans_Cup_Korea-Vietnam.svg"
            alt="korea vietnam flag"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mixed Nationality
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Born in South Korea, I grew up in Vietnam since the age of 2.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://cdn2.iconfinder.com/data/icons/translation-1/513/translation-translate-language-international-translating_2_copy_7-1024.png"
            alt="languages"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Multi-lingual
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Proficient in English, Korean, Vietnamese and Chinese. Currently learning Spanish!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://static.thenounproject.com/png/3683675-200.png"
            alt="languages"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hobbies and Leisure
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In my free time, I like to do martial arts, travel, and hang out with friends!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
