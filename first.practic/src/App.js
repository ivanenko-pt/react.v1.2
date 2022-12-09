import CryptoItem from "./components/CryptoItem";

function App() {
    const token = [
        {
            name: "Atom",
            course: 10,
            wallet: "OKX",
        },
        {
            name: "Eth",
            course: 250,
            wallet: "SFP",
        },
        {
            name: "Atom",
            course: 99,
            wallet: "Metta",
        },
    ];

    return (
        <div>
            <h1>Go</h1>
            <CryptoItem
                name={token[0].name}
                course={token[0].course}
                wallet={token[0].wallet}
            />
            <CryptoItem
                name={token[1].name}
                course={token[1].course}
                wallet={token[1].wallet}
            />
            <CryptoItem
                name={token[2].name}
                course={token[2].course}
                wallet={token[2].wallet}
            />
        </div>
    );
}

export default App;
