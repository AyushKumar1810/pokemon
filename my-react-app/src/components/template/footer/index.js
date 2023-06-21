import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import Gengar from './gengar.png'
import './index.css'

function Footer() {
    return(
        <Box className="footer">
            <Box 
                className="leftSide"
            >
                <img src={Gengar} width="70%" className="image"/>
            </Box>

            <Box className="rigthSide">
                <Typography 
                    sx={{
                        mt: 2,
                        fontSize: 42,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    Developed By AyushKumar
                </Typography>

                <img
                    src=""
                    alt='created by Ayush Kumar'
                    width="300px"
                    className="devImage"
                />

                <Typography 
                    sx={{
                        mt: 2,
                        fontSize: 30,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://github.com/AyushKumar1810" target="_blank" rel="noopener noreferrer">Link
                        <GitHubIcon /> Github    
                    </a>
                </Typography>

                <Typography 
                    sx={{
                        mt: 1,
                        fontSize: 30,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://www.linkedin.com/in/ayush-kumar-179035247" target="_blank" rel="noopener noreferrer">Link
                        <LinkedInIcon /> Linkedin
                    </a>
                </Typography>

                <Typography 
                    sx={{
                        mt: 1,
                        fontSize: 30,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">Link
                        <ArticleIcon /> Documentação
                    </a>
                </Typography>
                
            </Box>
        </Box>
    )
}

export default Footer