import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import HelpIcon from '@mui/icons-material/Help';
import { useEffect, useState } from "react";
import api_random from '../../services/apiIndividual';
import { Link, useParams } from "react-router-dom";

function RandomPokemons(){
    const { id } = useParams()

    let random = Math.floor(Math.random() * 100) + 1;
    // Nossa lista que sera preenchida pela requisição
    const [list, setList] = useState([]);

    // Chamando nossa função toda vez que o componente renderizar
    useEffect(() => {
        // Executar após essa requisição ser concluida, nos trazendo o data
        api_random.get(String(random)).then(({data}) => {
            setList(data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    return(
        <>
            <Card sx={{ 
                mr: 2,
                display: 'flex', 
                width: 440, 
                border: '2px solid',  
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            { list?.name }
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Pokemon type:  {list?.types?.map((item) => item.type.name.concat(' '))}
                        </Typography>
                    </CardContent>

                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="play/pause">
                        <Link to={"/pokemon/"+ list.name}>
                            <HelpIcon sx={{ height: 38, width: 38 }} />
                        </Link>
                        </IconButton>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image={list?.sprites?.front_default} 
                    alt={list.name} 
                />
            </Card>
        </>
    )
}

export default RandomPokemons