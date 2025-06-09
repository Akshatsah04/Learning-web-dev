export default function Format(props){
    return (
        <div className="card">
            <div className="img"><img className="img" src={props.image} alt="event poster" /></div>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <h4>{props.year}</h4>
            <h6>{props.description}</h6>
        </div>
    )
}








// https://iili.io/3lFrrQ9.md.jpg