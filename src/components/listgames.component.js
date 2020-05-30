import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditGame from './editgame.component';

const ListGames = () => {
    const [games, setGames] = useState([]);

    const getGames = async () => {
        try {
            const response = await fetch('http://localhost:5000/games');
            const jsonData = await response.json();
            setGames(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }

    const deleteGame = async (id) => {
        try {
            await fetch(`http://localhost:5000/games/${id}`, {
                method: 'DELETE'
            })
            setGames(games.filter(game => game._id !== id))
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getGames();
    }, [])

    return (
        <Fragment>
            <h3 className="mt-4">Game collection:</h3>
            <table className="table mt-4 text-center">
                <thead className="thead-light">
                    <tr>
                    <th>Title</th>
                    <th>Developer</th>
                    <th>Platform</th>
                    <th>Description</th>
                    <th>Release</th>
                    <th>Reviews</th>
                    <th>Actions</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {games.map(game => (
                        <tr key={game._id}>
                            <td> {game.title} </td>
                            <td> {game.developer} </td>
                            <td> {game.platform} </td>
                            <td> {game.description} </td>
                            <td> {game.release} </td>
                            <td> {game.reviewscore} % </td>
                            <td><EditGame game={game}/></td>
                            <td><button className="btn btn-danger" onClick={() => deleteGame(game._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
            <Link to='/create'><button className="btn btn-primary">Add Game</button></Link>
            </div>
        </Fragment>
    )
}

export default ListGames;