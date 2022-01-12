import { Link } from "react-router-dom";

const ItemList = (props) => {
    const items = props.item
    const title = props.title
    return ( 
        <div className="list">
            <h2>{ title }</h2>
            {items.map((item) => (
                <div className = "item-preview" key = { item.id }>
                    <Link to = {`/items/${item.id}`}>
                        <h2>{ item.object }</h2>
                        <p>{ item.description }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default ItemList;