const Header= () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Carrera</li>
                    <li>Educacion</li>
                </ul>
            </nav>
        </header>
    )
}

const Avatar=({image,imageAlt}) => {
    return(
        <img src={image} alt={imageAlt} />
    )
}

const PersonalInfo= ({name,age,nationality,occupation}) => {
    return(
        <div>
            <article>
            <span>Informacion Personal</span>
                <ul>
                    <li>Nombre: {name}</li>
                    <li>Edad: {age}</li>
                    <li>Nacionalidad: {nationality}</li>
                    <li>Ocupacion: {occupation}</li>
                </ul>
            </article>
        </div>)
};
const Peliculas= ({movies,series})=>{
    return (
        <div>           
            <article>
            <span>Experencia en Peliculas:</span>
                <ul>{
                    movies.map((movie, index) =>              
                        <li key={index}>{movie}</li>            
                        )
                    }</ul>
            </article>
            <article>
            <span>Experencia en Series:</span>
                <ul>{
                    series.map((serie, index) =>              
                        <li key={index}>{serie}</li>            
                        )
                    }</ul>
            </article>
        </div>
    )
}        


const App= () => {
    const db = [
        {
            name: "Taylor Daniel Lauthner",
            occupation: "Actor",
            nationality: "American",
            DOB: "Feb. 11th, 1992",
            age: "30 years old",
            movies: ["Twilight Saga", "Shark Boy 1, 2", "Runner", "Abduction", "Ridiculous", "Run the Tide", "Scream Queens", "St. Valentine's"],
            series: ["Cuckoo"],
            avatar: "https://younghollywood.com/images/stories/newsIMG/wenn/20110902/wenn3484998_46_2000_9.jpg"
        }
    ]

    const dbProps = {
        name: db[0].name,
        occupation:db[0].occupation,
        nationality:db[0].nationality,
        DOB:db[0].DOB,
        age:db[0].age,
        movies:db[0].movies,
        series:db[0].series
    }

    return(
        <div>
            <Header/>
            <section>
                <Avatar image={db[0].avatar} imageAlt={db[0].name} />
                <PersonalInfo {...dbProps}/>
                <Peliculas {...dbProps}/>
            </section>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))