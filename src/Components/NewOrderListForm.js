import React, {useState} from "react"

function NewOderListFrom(props){

        const [ProductName, setProductName] = useState('');
        const [Category, setCategory] = useState('');
        const [Price, setPrice] = useState('');
        const [Quantity, setQuantity] = useState('');

        const submitOrderList = ()=>{
            if(ProductName !== '' || Category !== '' || Price !== '' || Quantity !== '' ) {
                props.addOrderList(ProductName,Category,Price,Quantity);
                setProductName('');
                setCategory('');
                setPrice('');
                setQuantity('');

            }
        }

        return(
            <div className="mt-5">
                <p><strong> Placing New Orders</strong></p>
                <form>
                    <div className="mb-3">
                        <label className="form-label"> ProductName </label>
                        <input type="text" className="form-control" required onChange={e => setProductName(e.target.value)} value={ProductName}></input>    
                    </div>
                    <div className="mb-3">
                    <label className="form-label"> Category </label>
                    <textarea className="form-control" rows={3} required onChange={e => setCategory(e.target.value)} value= {Category}> </textarea> 
                </div>
                <div className="mb-3">
                    <label className="form-label"> Price </label>
                    <textarea className="form-control" rows={3} required onChange={e => setPrice(e.target.value)} value= {Price}> </textarea> 
                </div>
                <div className="mb-3">
                    <label className="form-label"> Quantity </label>
                    <textarea className="form-control" rows={3} required onChange={e => setQuantity(e.target.value)} value= {Quantity}> </textarea> 
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitOrderList}>Add Order List</button>
                </form>
            </div>
        )
}

export default NewOderListFrom