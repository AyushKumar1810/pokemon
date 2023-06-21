import './index.css'
import { Box, Button, LinearProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import api_individual from '../../services/apiIndividual';
import NotFoundPage from '../NotFoundPage/index';
import RandomPokemons from '../RandomPokemons';

function PokemonsDetails() {
    const { id } = useParams()

    // Nossa lista que sera preenchida pela requisição
    const [list, setList] = useState([]);
    const [error, setError] = useState(!id);

    // Chamando nossa função toda vez que o componente renderizar
    useEffect(() => {
        // Executar após essa requisição ser concluida, nos trazendo o data
        api_individual.get(id).then(({data}) => {
            setList(data)
        })
        .catch(() => {
            setError(true)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return(
        <>
            {error && (
                <NotFoundPage />
            )}

            {!error && (
                <Box className='box'>
                    <Box className="informacoesUm">
                        <Box className="nome">
                            <Typography variant="h4" className="nomes" sx={{ mt: 1}}>
                                {list.name}
                            </Typography>
                        </Box>
                        <Box className="imagen">
                            <img 
                                src={list?.sprites?.front_default} 
                                alt={list.name} 
                                width="70%"
                            />
                        </Box>
                        <Box className="tipo">
                            <Typography 
                                variant="h5"
                                sx={{ m: 1 }}
                                className="nomes"
                            >
                                #{list.id} 
                            </Typography>

                            <Typography 
                                variant="h5"
                                sx={{ m: 1 }}
                                className="nomes"
                            >
                                Pokemon type:  {list?.types?.map((item) => item.type.name.concat(' '))}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Link to={"/"}>
                                <Button 
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    size="large"
                                    sx={{
                                        mt: 4
                                    }}
                                >
                                    BACK TO HOME
                                </Button>
                            </Link>
                        </Box>

                    </Box>

                    <Box className='informacoesDois'>
                        <Box className='infos'>
                            <Typography 
                                variant="h4"
                                sx={{
                                    textAlign: 'center',
                                }}
                                className="titulos"
                            >
                                Information                            </Typography>
                            <Box className='estatisticas'>
                                {list?.stats?.map((item, index) => { 
                                    return(
                                        <Box key={item.stat.name} className='status'>
                                            <Typography 
                                                variant="h6"
                                                sx={{ ml: 1}}
                                                className="nomes"
                                            >
                                                {item.stat.name}: {item.base_stat}
                                            </Typography>

                                            <LinearProgress 
                                                variant="determinate"
                                                value={item.base_stat}  
                                                sx={{
                                                    width: 400,
                                                    height: 10, 
                                                    mr: 2,
                                                    background: '#eeeeee'
                                                }} 
                                            
                                            />
                                        </Box>
                                    )
                                })}
                            </Box>
                            <Typography 
                                variant="h4"
                                sx={{
                                    textAlign: 'center',
                                }}
                                className="titulos"
                            >
                                Hits
                            </Typography>
                            <Box className='Hits'>
                                {list?.moves?.map((item) => {
                                    return(
                                        <Box 
                                            key={item.move.name} 
                                            sx={{
                                                p: 1,
                                                m: 1,
                                                bgcolor: 'background.paper',
                                                borderRadius: 1,
                                            }}    

                                            className='HitsBotoes'
                                        >
                                            <Button 
                                                variant="contained"
                                                sx = {{
                                                    backgroundColor: '#004953'
                                                }}
                                            >
                                                {item.move.name}
                                            </Button>
                                        </Box>
                                    )
                                })}
                            </Box>
                        </Box>
                        
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row-reverse',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                                borderRadius: 1,

                              }}
                        >
                            <RandomPokemons/>
                            <RandomPokemons/>
                        </Box>
                    </Box>
                </Box>
            )}            
        </>
    )
}

export default PokemonsDetails