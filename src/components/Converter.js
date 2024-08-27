import {useState} from "react"; 
function Converter({name,price}){
    const [amount,setAmount] = useState(1);
    const [isFlipped,setIsFlipped] = useState(false);
    const onChange=(e)=>setAmount(e.target.value);
    const flip=()=>setIsFlipped(!isFlipped);
    return (
    <div>
        <div>
            <label>USD</label>
                <input type="number" value={isFlipped ? amount / price : amount} onChange={onChange} disabled={isFlipped} />
        </div>
        <div>
            <label>{name}</label>
                <input type="number" value={isFlipped ? amount : amount * price} onChange={onChange} placeholder="Enter the amount" disabled={!isFlipped} />
           
        </div>
        <button onClick={flip}>Flip</button>

    </div>);
}

export default Converter;