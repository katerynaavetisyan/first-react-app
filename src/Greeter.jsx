export default function Greeter({ person = "EVERYONE", from = "ANONYMOUS" }) {
    return (
        <>
            <h1>Hi there, {person}!</h1>
            <h2>from, {from}</h2>
        </>
    )
}