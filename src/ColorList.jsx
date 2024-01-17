export default function ColorList({ colors }) {

    const elemetns = [<p>Hello!</p>, <h1>Bye</h1>, <input type="password" />];
    return (
        < div >
            <p>Color List</p>
            <p>{colors}</p>
            {elemetns}
        </div >
    )
}