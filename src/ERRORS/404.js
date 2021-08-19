import { useRouteMatch } from "react-router-dom"

export default function NotFound () {
    
    const { url } = useRouteMatch()
    
    return (
        <>
        <h2 style={{color:"red"}}>Ups! No encontramos la página</h2>
       <div>{url}</div>
        </>
    )
}