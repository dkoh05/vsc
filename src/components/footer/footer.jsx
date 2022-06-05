import { Typography } from '@mui/material'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <Typography>
                &copy; {new Date().getFullYear()} DaeYeon. All Rights Reserved.
            </Typography>
        </div>
    )
}

export default Footer
