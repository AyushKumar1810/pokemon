import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Ghosts from './ghosts.png'
import './index.css'

function notFoundPage() {
    return (
        <Box className="notFoundPage">
            <>
                <Typography variant='h2' className='title'>
                    Procurando fantasmas ? Página errada !
                </Typography>
                <Typography variant='h6' className='title'>
                    <Link to={"/"}>
                        Redirecionar para home !
                    </Link>
                </Typography>
            </>
            

            <img src={Ghosts} width="500rem" alt='Fantasmas'/>
        </Box>
    )
}

export default notFoundPage