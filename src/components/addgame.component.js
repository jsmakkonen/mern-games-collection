import React, { Fragment, useState } from 'react';

const AddGame = () => {
    const [values, setValues] = useState({
        title: 'Game title',
        developer: 'Game developer',
        platform: 'Platforms',
        description: 'Short description',
        reviewscore: 'Game review score',
        release: 'Release year'
    });

    const addNewGame = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/games/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: values.title,
                    developer: values.developer,
                    platform: values.platform,
                    description: values.description,
                    reviewscore: values.reviewscore,
                    release: values.release
                })
            })
            console.log(response);
            window.location = '/'
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Fragment>
            <div className="container">
                <h3 className="mt-4">Add new game</h3>
                <input
                  type="text"
                  className="form-control mt-4"
                  name="title"
                  value={values.title}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="developer"
                  value={values.developer}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="platform"
                  value={values.platform}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="description"
                  value={values.description}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="reviewscore"
                  value={values.reviewscore}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="release"
                  value={values.release}
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>
  
              <div className="container">
                <button
                  type="button"
                  className="btn btn-primary mt-4"
                  data-dismiss="modal"
                  onClick={(e) => addNewGame(e)}
                >
                  Add New Game
                </button>
              </div>
        </Fragment>
    )
}

export default AddGame;