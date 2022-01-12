import ItemList from './ItemList';
import useFetch from './useFetch';

const Home = () => {
    const { data: items, isLoading, error } = useFetch('http://localhost:3000/items');

    return (
        <div className = "home">
            { error && <div>{ error }</div> }
            { isLoading && <div>Loading...</div> }
            { items && <ItemList item = { items } title = "All Items"/> }
        </div>
    );
}
 
export default Home;