import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Shop = () => {
    const [title, setTitle] = useState('');
    const [object, setObject] = useState('');
    const [description, setDescription] = useState('');
    const [owner, setOwner] = useState('Elias');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { title, object, description, owner };

        setIsLoading(true);

        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        }).then(() => {
            console.log('new item created');
            setIsLoading(false);
            history.push('/');
        });
    }

    return (
        <div className="shop">
            <h2>Add a new item</h2>
            <form onSubmit = {handleSubmit}>
                <label>Item Title:</label>
                <input
                    type = "text"
                    required
                    value = { title }
                    onChange = { (e) => setTitle(e.target.value) }
                />
                <label>Item Object:</label>
                <input
                    type = "text"
                    required
                    value = { object }
                    onChange = { (e) => setObject(e.target.value) }
                />
                <label>Description</label>
                <textarea
                    required
                    value = { description }
                    onChange = { (e) => setDescription(e.target.value) }
                />
                <label>Item Owner:</label>
                <select
                    value = { owner }
                    onChange = { (e) => setOwner(e.target.value) }
                >
                    <option value = "Elias">Elias</option>
                    <option value = "Yoo">Yoo</option>
                </select>
                { !isLoading && <button>Add Item</button> } 
                { isLoading && <button disabled>Adding Item...</button> } 
            </form>
        </div>
    );
}
 
export default Shop;