import React, { Fragment, useState } from 'react';

const AddGear = () => {
    const [gearValues, setGearValues] = useState({
        title: 'Name',
        cpu: 'Processor',
        gpu: 'Graphics',
        memory: 'System memory',
        storage: 'System storage',
        additional: 'Additional gear'
    })

    const addNewGear = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/gears/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: gearValues.title,
                    cpu: gearValues.cpu,
                    gpu: gearValues.gpu,
                    memory: gearValues.memory,
                    storage: gearValues.storage,
                    additional: gearValues.additional
                })
            })
            console.log(response);
            window.location = '/gear'
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Fragment>
            <div className="container">
                <h3 className="mt-4">Add new gear</h3>
                <input
                  type="text"
                  className="form-control mt-4"
                  name="title"
                  value={gearValues.title}
                  onChange={(e) =>
                    setGearValues({ ...gearValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="cpu"
                  value={gearValues.cpu}
                  onChange={(e) =>
                    setGearValues({ ...gearValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="gpu"
                  value={gearValues.gpu}
                  onChange={(e) =>
                    setGearValues({ ...gearValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="memory"
                  value={gearValues.memory}
                  onChange={(e) =>
                    setGearValues({ ...gearValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="storage"
                  value={gearValues.storage}
                  onChange={(e) =>
                    setGearValues({ ...gearValues, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  name="additional"
                  value={gearValues.additional}
                  onChange={(e) =>
                    setGearValues({ ...gearValues, [e.target.name]: e.target.value })
                  }
                />
              </div>
  
              <div className="container">
                <button
                  type="button"
                  className="btn btn-primary mt-4"
                  data-dismiss="modal"
                  onClick={(e) => addNewGear(e)}
                >
                  Add New Gear
                </button>
              </div>
        </Fragment>
    )
}

export default AddGear;