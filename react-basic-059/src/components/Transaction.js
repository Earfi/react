import Item from "./Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';


const Transaction = () => {
    
    const data = [
        {title: "ซื้อสิงโต 5 ตัว", amount: 2500000}, 
        {title:"ซื้อเสื้อผ้า", amount:8000}, 
        {title: "ซื้อข้าว", amount: 400}, 
        {title: "จ่ายค่าเทอม 2/2567", amount:35000},
        {title:"ค่าเดินทาง",amount:500},
    ]

    return(
          <ul className="item-list">
            {data.map((e) => {
                return( 
                     <>
                        <Item key={uuidv4()}  {...e}/> 
                     </>
                )
            })}  
          </ul> 
    )
  }

export default Transaction;