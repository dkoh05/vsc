import { Card, CardContent, Typography } from "@mui/material"
import { Container } from "@mui/system"
import './body.css'

function Body() {
    return (
        <Container className="body">
            <Card sx={{maxWidth: "500px"}}>
                <CardContent>
                    <Typography variant="h6">
                        Cheese Cake
                    </Typography>
                    <Typography>
                        Cheese cake is an amazing dessert. I love cheese cake!
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{maxWidth: "500px"}}>
                <CardContent>
                    <Typography variant="h6">
                        Sushi
                    </Typography>
                    <Typography>
                        Originated from Japan. Very delicious!
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Body