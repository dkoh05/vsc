<<<<<<< HEAD
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './home.css'

function Home() {
  return (
    <div>
      <div className='home-title'>
        <Typography variant="h1" component="div" gutterBottom>
          kohlab
        </Typography>
      </div>
      <Typography variant="h2" component="div" gutterBottom>
        Projects
      </Typography>
      <div className='home-projects'>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia className='column'
              component="img"
              height="140"
              image="https://icon-library.com/images/hotel-icon-png/hotel-icon-png-3.jpg"
              alt="hotel"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Booking Reservation Project
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a Java-based project of a reservation ooking program for my mom's holiday home!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://i.pinimg.com/originals/e6/4a/d0/e64ad03dfa52c77b1005576db6ec70a1.jpg"
              alt="languages"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Arnold Schwarzenegger One-Liner Discord Bot
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a Discord bot that will give you one-liners said by Arnold Schwarzenegger!
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
                First Website Made
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is where it all started. This website was the inspiration behind why I wanted to further study Computer Science!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>

  );
}

export default Home;
=======
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <div className="home-page">
      <h1>kohlab</h1>
      <div>
        <h3>Welcome to my website!</h3>
      </div>
      <h1>Projects</h1>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Home Reservation Program
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Coursework for the iB curriculum
          </Typography>
          <Typography variant="body2">
            This is a program where guests can make reservations, and the owner
            of the program is able to see the database of reservations their
            guests have made.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">click to see source code</Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Arnold Schwarzenegger One-Liner Discord Bot
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            A project for funzies!
          </Typography>
          <Typography variant="body2">
            This is a program where users in a Discord server can type in
            specific commands and the bot will reply the user corresponding to
            the command.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">click to see source code</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Home;
>>>>>>> 8f921d8b52b01f0bc70afc92c897e0ca67539a77
