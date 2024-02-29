// import './Item.css'
import PropTypes from 'prop-types'; // ES6

const Item = (props) => { 
    const {title,amount} = props
    return(
        <li className="item">{title} <span>{amount}</span></li>
    );
}

Item.protoTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
        
export default Item;