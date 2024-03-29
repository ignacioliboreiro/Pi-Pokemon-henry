import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokes, getTypes, reload, orderByAbc, filterByType, orderByStrength, filterApi } from '../action/Action';
import {Link} from 'react-router-dom';
import loading from "../PokeImagenes/loading.gif"

import Card from '../card/card';
import NavBar from '../NavBar/NavBar';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar'

export default function Home(){

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons)
    const allTypes = useSelector((state) => state.pokemonsTypes)
            // Local States \\
    const [current, setCurrent] = useState(1)
    const [pokemonsPage, setPokemonsPage] = useState(12)
    const [order, setOrder] = useState("")
    const lastPoke = current * pokemonsPage
    const firstPoke = lastPoke - pokemonsPage
    const pokemons = allPokemons.slice(firstPoke, lastPoke)
            // Pages \\
    const paginado = (pageNumber) => {
        setCurrent(pageNumber)
    }

            // Filters \\

    useEffect ( () => {
        dispatch(getTypes())
    }, [dispatch] )

    useEffect ( () => {
        dispatch(getPokes())
    }, [dispatch] )
    
    function handleReload(e){
        e.preventDefault();
        dispatch(reload(e))
    }
    function handleOrderByAbc(e){
        e.preventDefault();
        dispatch(orderByAbc(e.target.value));
        setCurrent(1);
        setOrder(`Ordenado ${e.target.value}`)
    }
    function handleFilterType(e){
        e.preventDefault();
        dispatch(filterByType(e.target.value))
    }

    function handleOrderByStrength(e){
        e.preventDefault();
        dispatch(orderByStrength(e.target.value));
        setCurrent(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    function handleFilterApi(e){
        dispatch(filterApi(e.target.value))
    }
    

    return (
        <div className='mainContainer'>

            <div className='sb'>
                <NavBar />
            </div>
            
            <div className='left'>
                <SearchBar className="searchBar"/>
                <h4 className='text'>Create Pokemon:    
                    <Link to = '/pokemons'>
                        <button className='create' />
                    </Link>
                </h4>
                <Paginado className="paginado" pokemonsPage = {pokemonsPage} allPokemons = {allPokemons.length} paginado = {paginado} />
                <div className='filters'>
                    <select className='filterAbc' onChange={e => handleOrderByAbc(e)}>
                        <option value="all">Alphabetical Order...</option>
                        <option value="asc">A to Z</option>
                        <option value="desc">Z to A</option>
                    </select>
                    <br/>
                    <select className='filterType' onChange={e => handleFilterType(e)}>
                        <option value="all">Type Filter...</option>
                        {
                            allTypes?.map( pt => {
                                return <option value={pt.name} key={pt.id}>{pt.name}</option>
                            })
                        }
                    </select>
                    <br/>
                    <select className='filterStrength' onChange={e => handleOrderByStrength(e)}>
                        <option value="all">Strength Order...</option>
                        <option value="powerfull">Powerfull</option>
                        <option value="weak">Weak</option>
                    </select>
                    <br/>
                    <select className='filterApi' onChange={e => handleFilterApi(e)}>
                        <option value="pokes">Existent or Created Filter...</option>
                        <option value="api">Existent</option>
                        <option value="db">Created</option>
                    </select>
                    <br />
                    <h4 className='text'>Reload Pokemons:    
                        <button className='reload' onClick={e => {handleReload(e)}}/>
                    </h4>
                </div>
            </div>

            <div className='cardscards'>
                { 
                    pokemons.length > 0 ? pokemons.map( p => {
                        return(
                        <Card id={p.id} name={p.name} hp={p.hp} attack={p.attack} defense={p.defense} speed={p.speed} height={p.height} weight={p.weight} img={p.img} types={p.types} />
                    )}) : 
                    <div>
                        <p className='loading'>Cargando Pokemons...</p>
                        <img src={loading} alt="loading.gif" width="700px" height="250px" />
                    </div>
                    
                }
                {/*
                { 
                    pokemons?.map( p => {
                        return(
                        <Card name={p.name} img={p.img} types={p.types} />
                    )})
                }
                */}
            </div>

        </div>
    )
} 