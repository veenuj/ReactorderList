import RowItem from "./RowItem"

function ListTable(props){
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ProductName</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                </tr>
            </thead>
            <tbody>
                {props.orderList.map(placeOrder => (
                    
                    <RowItem
                    key={placeOrder.rowOrderId}
                    rowOrderId={placeOrder.rowOrderId}
                    rowProductName={placeOrder.rowProductName}
                    rowCategory={placeOrder.rowCategory}
                    rowPrice={placeOrder.rowPrice}
                    rowQuantity={placeOrder.rowQuantity}
                    />
                ))}
            </tbody>
        </table>
        

        
    );
}


export default ListTable