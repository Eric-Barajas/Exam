import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className="w-50 p-4 rounded mx-auto shadow" >
                We're sorry, but we could not find the Pet you are looking for. Would you like to add this pet to our database?
            </h1>
            <Link to="/pets/new"> Add a Pet </Link>
        </div>
    );
}

export default NotFound;