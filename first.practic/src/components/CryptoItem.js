import "./CryptoItem.css";
// import CryptoNumber from "./CryptoNumber";
function CryptoItem(props) {
    return (
        <div>
            <div className="title">HEADER</div>
            <div className="main">
                <h1>{props.name}</h1>
                <h2>{props.wallet}</h2>
                <h3>{props.course}</h3>
            </div>
        </div>
    );
}
export default CryptoItem;
