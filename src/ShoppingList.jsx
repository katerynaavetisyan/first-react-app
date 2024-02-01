
import ShoppingListItem from "./ShoppingListItem";

function ShopingList({ items }) {
    return (
        <ul>
            {items.map(i => (
                <ShoppingListItem
                    key={i.id}
                    item={i.item}
                    quantity={i.item}
                    completed={i.completed}
                />

            ))}
        </ul>
    )
}

export default ShopingList;