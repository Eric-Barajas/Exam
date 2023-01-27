import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const EditPet = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill, setSkill] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const [errors, setErrors] = useState(null);

    // url route param matching `:id`.
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                const {
                    name,
                    type,
                    description,
                    skill,
                    skill2,
                    skill3
                } = res.data
                console.log(typeof id);
                setName(name);
                setType(type);
                setDescription(description);
                setSkill(skill);
                setSkill2(skill2);
                setSkill3(skill3);
            }).catch(err => {
                console.log(err);
                navigate('/errors')
            })
    }, [navigate, id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const editedPet = {
            name,
            type,
            description,
            skill,
            skill2,
            skill3
        }

        axios.put(`http://localhost:8000/api/pets/${id}`, editedPet)
            .then(res => {
                console.log(res);
                navigate('/pets');
            }).catch(err => {
                console.log(err.response);
                /*
                For this catch to happen, the server needs to return an error status code.
                `?.` is optional chaining to safely access keys that may not exist.
                `errors` exists on validation errors but maybe not on other errors.
                */
                setErrors(err.response?.data?.errors)
            })
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <Link to="/pets"> Home </Link>
            <h4> Edit {name} </h4>
            <form
                onSubmit={e => { handleUpdate(e) }}
            >
                <div className="form-group">
                    <label className="h6">Pet Name:</label>
                    {
                        errors?.name && (
                            <p style={{ color: 'red' }}>{errors.name?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        type="text" className="form-control" value={name}
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Pet Type:</label>
                    {
                        errors?.type && (
                            <p style={{ color: 'red' }}>{errors.type?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setType(event.target.value);
                        }}
                        type="text" className="form-control" value={type}
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Pet Description:</label>
                    {
                        errors?.description && (
                            <p style={{ color: 'red' }}>{errors.description?.message}</p>
                        )
                    }
                    <input
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                        type="text" className="form-control" value={description}
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Skill 1:</label>
                    <input
                        onChange={(event) => {
                            setSkill(event.target.value);
                        }}
                        type="text" className="form-control" value={skill}
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Skill 2:</label>
                    <input
                        onChange={(event) => {
                            setSkill2(event.target.value);
                        }}
                        type="text" className="form-control" value={skill2}
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Skill 3:</label>
                    <input
                        onChange={(event) => {
                            setSkill3(event.target.value);
                        }}
                        type="text" className="form-control" value={skill3}
                    />
                </div>
                {/* <Link className="btn btn-sm btn-outline-success mx-1" to='/pets'> Edit Pet </Link> */}
                <button className="btn btn-sm btn-outline-success mx-1"> Edit Pet </button>
            </form>
        </div>
    )
}

export default EditPet