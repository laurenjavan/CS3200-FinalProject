import patronService, {findPatronById} from "./patron-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const PatronFormEditor = () => {
    const {id} = useParams()
    const [patron, setPatron] = useState({})
    useEffect(() => {
        if(id !=="new") {
            findPatronById(id)
        }
    }, []);
    const createPatron = (id) => {
        patronService.createPatron(id)
            .then(() => history.back())
    }
    const findPatronById = (id) => {
        patronService.findPatronById(id)
            .then(patron => setPatron(patron))
    }
    const deletePatron = (id) => {
        patronService.deletePatron(id)
            .then(() => history.back())
    }
    const updatePatron =(id, newPatron) => {
        patronService.updatePatron(id, newPatron)
            .then(() => history.back())
    }
    return (
        <div>
            <h2>Patron Editor</h2>
            <label>Id</label>
            <input className="form-control" value={patron.id}/><br/>
            <label>First Name</label>
            <input className="form-control" onChange={(e) => setPatron(patron =>
                ({...patron, firstName: e.target.value}))} value={patron.firstName}/><br/>
            <label>Last Name</label>
            <input className="form-control" onChange={(e) => setPatron(patron =>
                ({...patron, lastName: e.target.value}))} value={patron.lastName}/><br/>
            <label>Username</label>
            <input className="form-control" onChange={(e) => setPatron(patron =>
                ({...patron, username: e.target.value}))} value={patron.username}/><br/>
            <label>Password</label>
            <input className="form-control" onChange={(e) => setPatron(patron =>
                ({...patron, password: e.target.value}))} value={patron.password}/><br/>
            <label>Email</label>
            <input className="form-control" onChange={(e) => setPatron(patron =>
                ({...patron, email: e.target.value}))} value={patron.email}/><br/>
            <label>Date of Birth</label>
            <input className="form-control" onChange={(e) => setPatron(patron =>
                ({...patron, dateOfBirth: e.target.value}))} value={patron.dateOfBirth}/><br/>

            <Link to={`/ratings/patron/${patron.id}/ratings`}>
                Ratings
            </Link>
            <br></br>
            <br></br>
            <button className="btn btn-warning" onClick={() => {history.back();}}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deletePatron(patron.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updatePatron(patron.id, patron)}>Save</button>
            <button className="btn btn-success" onClick={() => createPatron(patron)}>Create</button>
        </div>
    )
}

export default PatronFormEditor