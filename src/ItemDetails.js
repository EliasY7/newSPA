import { useHistory, useParams } from "react-router";
import useFetch from './useFetch';

const ItemDetails = () => {
    const { id } = useParams();
    const { data: item, error, isLoading } = useFetch('http://localhost:3000/items/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:3000/items/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="item-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { item && (
                <article>
                    <h2>{ item.object }</h2>
                    <p>Owned by { item.owner }</p>
                    <div>{ item.description }</div>
                    <button onClick = { handleClick }>Delete</button>
                </article>
            ) }
        </div>
    );
}
 
export default ItemDetails;