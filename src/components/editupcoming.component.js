import React, {Fragment, useState} from 'react'
import {useSnackbar} from 'notistack'

const EditUpcomingGame = ({item}) => {
  const [values, setValues] = useState({
    title: item.title,
    developer: item.developer,
    platform: item.platform,
    description: item.description,
    release: item.release,
  })

  const {enqueueSnackbar} = useSnackbar()

  const updateUpcomingGame = async (e) => {
    e.preventDefault()
    try {
      await fetch(`http://localhost:5000/upcoming/${item._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: values.title,
          developer: values.developer,
          platform: values.platform,
          description: values.description,
          release: values.release,
        }),
      })

      window.location = '/upcoming'
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
        data-target={`#uid${item._id}`}>
        Edit
      </button>

      <div className="modal" id={`uid${item._id}`}>
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
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateUpcomingGame(e)}>
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

export default EditUpcomingGame
