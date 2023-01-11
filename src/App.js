import ListTable from './Components/ListTable';
import './App.css';
import React, {useState} from 'react';
import NewOderListFrom from './Components/NewOrderListForm';

function App() {
  
  const [orderList, setOrderList] = useState( [

    {rowOrderId: 1, rowProductName: 'Double bed', rowCategory: 'Furniturers', rowPrice: 45000, rowQuantity: 1},
    {rowOrderId: 2, rowProductName: 'Single bed', rowCategory: 'Furniturers', rowPrice: 16000, rowQuantity: 1},
    {rowOrderId: 3, rowProductName: 'l-shape sofa', rowCategory: 'Furniturers', rowPrice: 20000, rowQuantity: 1}
  ]);

  const addOrderList = (ProductName, Category, Price, Quantity) => {
    if(orderList.length > 0){
      const newOrderList = {
        rowOrderId: orderList.length+1,
        rowProductName: ProductName,
        rowCategory: Category,
        rowPrice: Price,
        rowQuantity: Quantity
      };
      setOrderList(orderList => [...orderList, newOrderList]);
      console.log(orderList);
    }
  }
  
  
  return (
    <div className="mt-5 container">
      <div className='card'>
        <div className='card-header'>
          Order List
          </div>
          
          <div className='card-body'>
            <ListTable orderList={orderList}/>
           
            <NewOderListFrom addOrderList={addOrderList}/>

          
           
        </div>

      </div>
    </div>
  );
}

export default App;
