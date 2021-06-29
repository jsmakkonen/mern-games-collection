import React, {Fragment, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import EditUpcoming from './editupcoming.component'

const ListUpcoming = () => {
  const [upcomingGames, setUpcoming] = useState([])

  const getUpcomingGames = async () => {
    try {
      const response = await fetch('http://localhost:5000/upcoming')
      const jsonData = await response.json()
      setUpcoming(jsonData)
    } catch (err) {
      console.log(err.message)
    }
  }

  const deleteUpcomingGame = async (id) => {
    try {
      await fetch(`http://localhost:5000/upcoming/${id}`, {
        method: 'DELETE',
      })
      setUpcoming(upcomingGames.filter((item) => item._id !== id))
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getUpcomingGames()
  }, [])

  return (
    <Fragment>
      <h3 className="mt-4">Upcoming game watchlist:</h3>
      <table className="table mt-4 text-center">
        <thead className="thead-light">
          <tr>
            <th>Title</th>
            <th>Developer</th>
            <th>Platform</th>
            <th>Description</th>
            <th>Release</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {upcomingGames.map((item) => (
            <tr key={item._id}>
              <td> {item.title} </td>
              <td> {item.developer} </td>
              <td> {item.platform} </td>
              <td> {item.description} </td>
              <td> {item.release} </td>
              <td>
                <EditUpcoming item={item} />
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteUpcomingGame(item._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Link to="/addupcoming">
          <button className="btn btn-primary">Add Game to Watchlist</button>
        </Link>
      </div>
    </Fragment>
  )
}

export default ListUpcoming
