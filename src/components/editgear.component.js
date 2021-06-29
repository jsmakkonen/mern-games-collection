import React, {Fragment, useState} from 'react'
import {useSnackbar} from 'notistack'

const EditGear = ({gear}) => {
  const [gearValues, setValues] = useState({
    title: gear.title,
    cpu: gear.cpu,
    gpu: gear.gpu,
    memory: gear.memory,
    storage: gear.storage,
    additional: gear.additional,
  })

  const {enqueueSnackbar} = useSnackbar()

  const updateGear = async (e) => {
    e.preventDefault()
    try {
      await fetch(`http://localhost:5000/gears/${gear._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: gearValues.title,
          cpu: gearValues.cpu,
          gpu: gearValues.gpu,
          memory: gearValues.memory,
          storage: gearValues.storage,
          additional: gearValues.additional,
        }),
      })

      window.location = '/gear'
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
        data-target={`#gid${gear._id}`}>
        Edit
      </button>

      <div className="modal" id={`gid${gear._id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit gear info</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                name="title"
                value={gearValues.title}
                onChange={(e) =>
                  setValues({
                    ...gearValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="cpu"
                value={gearValues.cpu}
                onChange={(e) =>
                  setValues({
                    ...gearValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="gpu"
                value={gearValues.gpu}
                onChange={(e) =>
                  setValues({
                    ...gearValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="memory"
                value={gearValues.memory}
                onChange={(e) =>
                  setValues({
                    ...gearValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="storage"
                value={gearValues.storage}
                onChange={(e) =>
                  setValues({
                    ...gearValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mt-3"
                name="additional"
                value={gearValues.additional}
                onChange={(e) =>
                  setValues({
                    ...gearValues,
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
                onClick={(e) => updateGear(e)}>
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

export default EditGear
