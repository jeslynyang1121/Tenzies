export default function Die(props) {
    return (
        <button 
            className={props.isHeld ? "held" : ""}
            onClick={props.hold}>
            {props.value}
        </button>
    )
}