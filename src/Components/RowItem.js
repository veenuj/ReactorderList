function RowItem(props){

    return(
        <tr>
            <th scope="row">{props.rowOrderId}</th>
            <td>{props.rowProductName}</td>
            <td>{props.rowCategory}</td>
            <td>{props.rowPrice}</td>
            <td>{props.rowQuantity}</td>
        </tr>
    );
}

export default RowItem