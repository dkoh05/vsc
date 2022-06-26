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
