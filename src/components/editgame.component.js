import React, {Fragment, useState} from 'react'
import {useSnackbar} from 'notistack'

const EditGame = ({game}) => {
  const [values, setValues] = useState({
    title: game.title,
    developer: game.developer,
    platform: game.platform,
    description: game.description,
    release: game.release,
    reviewscore: game.reviewscore,
  })

  const {enqueueSnackbar} = useSnackbar()

  const updateGame = async (e) => {
    e.preventDefault()
    try {
      await fetch(`http://localhost:5000/games/${game._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: values.title,
          developer: values.developer,
          platform: values.platform,
          description: values.description,
          reviewscore: values.reviewscore,
          release: values.release,
        }),
      })

      window.location = '/'
    } catch (err) {
      enqueueSnackbar(err.message, {variant: 'error'})
    }
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${game._id}`}>
        Edit
      </button>

      <div className="modal" id={`id${game._id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit game info</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                name="title"
                value={values.title}
                onChange={(e) =>
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="developer"
                value={values.developer}
                onChange={(e) =>
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="platform"
                value={values.platform}
                onChange={(e) =>
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="description"
                value={values.description}
                onChange={(e) =>
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="release"
                value={values.release}
                onChange={(e) =>
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="reviewscore"
                value={values.reviewscore}
                onChange={(e) =>
                  setValues({
                    ...values,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateGame(e)}>
                Edit
              </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EditGame
