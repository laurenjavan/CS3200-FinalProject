import patronService, {findAllPatrons} from "./patron-service"

const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;
const PatronList = () => {
    const history = useHistory()
    const [patrons, setPatrons] = useState([])
    useEffect(() => {
        findAllPatrons()
    },[])
    const findAllPatrons = () => {
        patronService.findAllPatrons().then(patrons => setPatrons(patrons))
    }
    return(
        <div>
            <h2>Patron List</h2>
            <button onClick={() => history.push("/patrons/new")}>
                Add Patron
            </button>
            <ul className={"list-group"}>
                {
                    patrons.map(patron =>
                        <li key={patron.id}>
                            <Link to={`/patrons/${patron.id}`}>
                                {patron.firstName},
                                {patron.lastName}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default PatronList;