import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditGear from './editgear.component';

const ListGear = () => {
    const [gears, setGears] = useState([]);

    const getGears = async () => {
        try {
            const response = await fetch('http://localhost:5000/gears');
            const jsonData = await response.json();
            setGears(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    const deleteGear = async (id) => {
        try {
            await fetch(`http://localhost:5000/gears/${id}`, {
                method: 'DELETE'
            })
            setGears(gears.filter(gear => gear._id !== id))
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getGears();
    }, [])

    return (
        <Fragment>
            <h3 className="mt-4">Gaming gear:</h3>
            <table className="table mt-4 text-center">
                <thead className="thead-light">
                    <tr>
                    <th>Title</th>
                    <th>Processor</th>
                    <th>Graphics</th>
                    <th>Memory</th>
                    <th>Storage</th>
                    <th>Additional</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {gears.map(gear => (
                        <tr key={gear._id}>
                            <td> {gear.title} </td>
                            <td> {gear.cpu} </td>
                            <td> {gear.gpu} </td>
                            <td> {gear.memory} </td>
                            <td> {gear.storage} </td>
                            <td> {gear.additional} </td>
                            <td><EditGear gear={gear} /></td>
                            <td><button className="btn btn-danger" onClick={() => deleteGear(gear._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <Link to='/addgear'><button className="btn btn-primary">Add New Gear</button></Link>
            </div>
        </Fragment>
    )
}

export default ListGear;