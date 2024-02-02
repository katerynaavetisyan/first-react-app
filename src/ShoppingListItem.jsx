function ShoppingListItem({ item, quantity, completed }) {
    return (
        <li>
            {item} - {quantity}
        </li>
    )
}

export default ShoppingListItem;



<li
    key={i.id}
    style={{
        color: i.completed ? "blue" : "red",
        textDecoration: i.completed ? "line-through" : "none"
    }}

>
    {i.item} - {i.quantity}
</li> 