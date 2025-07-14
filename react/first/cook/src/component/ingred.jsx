export default function Ingred(prop){

    const fin=prop.ingrediant.map(item => <li key={item}>{item}</li>)
    return(
        <div className="inte">
        <h2>Ingredients on hand:</h2>
        <ul className="it">
            {fin}
        </ul>
        </div>
    )
}