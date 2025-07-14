export default function From(props){
    return (
        <form action={props.handlecl}>
            <input className="ser" type="text" id="inpu" name="value" placeholder="e.g , tomato"/>
            <button>+add ingrediant</button>
        </form>
    )
}