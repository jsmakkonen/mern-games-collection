import React, { Fragment, useState } from 'react';

const AddUpcoming = () => {
    const [allValues, setValues] = useState({
        title: 'Game title',
        developer: 'Game developer',
        platform: 'Platforms',
        description: 'Short description',
        release: 'Release'
    })

    const AddUpcomingGame = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/upcoming/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: allValues.title,
                    developer: allValues.developer,
                    platform: allValues.platform,
                    description: allValues.description,
                    release: allValues.release
                })
            })
            console.log(response);
            window.location = '/upcoming'
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Fragment>
            <div className="container">
                <h3 className="mt-4">Add game to watchlist</h3>
                <input
                  type="text"
                  className="form-control mt-4"
                  name="title"
                  value={allValues.title}
                  onChange={(e) =>
                    setValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="developer"
                  value={allValues.developer}
                  onChange={(e) =>
                    setValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="platform"
                  value={allValues.platform}
                  onChange={(e) =>
                    setValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="description"
                  value={allValues.description}
                  onChange={(e) =>
                    setValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="release"
                  value={allValues.release}
                  onChange={(e) =>
                    setValues({ ...allValues, [e.target.name]: e.target.value })
                  }
                />
              </div>
  
              <div className="container">
                <button
                  type="button"
                  className="btn btn-primary mt-4"
                  data-dismiss="modal"
                  onClick={(e) => AddUpcomingGame(e)}
                >
                  Add New Game
                </button>
              </div>
        </Fragment>
    )
}

export default AddUpcoming;