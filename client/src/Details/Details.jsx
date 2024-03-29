import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../action/Action";
import NavBar from '../NavBar/NavBar'

export default function Details() {
    const dispatch = useDispatch();
    const pokeID = useParams();
    let pokemon = useSelector ((state) => state.pokemon)

    useEffect(() => {
        dispatch(getDetails(pokeID.id))
    }, [dispatch])


    return (
        <div className="backgroundDetails">
            <NavBar />
            {
                <div className="pokeDetails">
                    <div className="leftDetails">
                    <h3>Health Power: {pokemon.hp}</h3>
                    <h3>Attack: {pokemon.attack}</h3>
                    <h3>Defense: {pokemon.defense}</h3>
                    <h3>Speed: {pokemon.speed}</h3>
                    <h3>ID: {pokemon.id}</h3>
                    </div>

                    <div className="centerDetails">
                    <h1 className="pkname">Pokemon: {pokemon.name.toUpperCase()}</h1>
                    <img className="pkimg" src={ pokemon.img ? pokemon.img : pokemon.image } alt="PokeImage" height="350px" width="350px" />
                    </div>

                    <div className="rightDetails">
                    <h3>Height: {pokemon.height}</h3>
                    <h3>Weight: {pokemon.weight}</h3>
                    <h3>Types: {pokemon.types.map(pt => (<li>{pt.name.toUpperCase()}</li>))}</h3>
                    </div>
                </div>
                
            }
        </div>
    )
}