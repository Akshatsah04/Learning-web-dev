import Head from "./component/header";
import Form from "./component/form"
import Ingred from "./component/ingred";
import Recipe from "./component/recipe";
import React from "react";

export default function App(){

    const [ingrediant , setIngrediant] =React.useState([])

    function handlecl(data){
        // setIngrediant()
        // data.preventdefault()
        let newitem =data.get("value")
        setIngrediant(prev=>[...prev,newitem])
    }

    return(
        <>
            <Head />
            <Form handlecl={handlecl} />
            <Ingred ingrediant={ingrediant} />
            {ingrediant.length>3? <Recipe /> : null}
            
        </>
        
    )
}
