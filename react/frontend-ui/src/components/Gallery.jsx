import Painting from "./Painting"
export function Gallery(){
    return(
        <>
            <div id="gallery">
                <Painting name="Les femmes d'alger" price="2000" requested="3" />
                <Painting name="Monalisa" price="1000" requested="3" />
            </div>
        </>
    )
}