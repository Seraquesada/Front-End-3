const enStocks =["manzana","pera","naranja","banana","kiwi"];
const enFalta = ["durazno","cereza","anana"];


const Stock = () => {
    return(
        <div>
            <h2>Lista de productos en stock:</h2>
        <ul>
            {
            enStocks.map((product,index)=>
                <Lista
                key= {index}
                    fruta={product}
                />
            )
            }
        </ul>
        </div>
    )
};

const Faltas =()=>{
    return(
            <div>
        <h2>Productos en falta:</h2>
        <ul>
        {
            enFalta.map((product,index) => 
                <Lista
                key= {index}
                    fruta={product}
                />
            )
        }
        </ul>
        </div>
    )
}


const Lista =({fruta}) => {
    return (<li>{fruta}</li>)
}


ReactDOM.render(<Stock/>, document.getElementById("enStock"));
ReactDOM.render(<Faltas/>, document.getElementById("enFalta"))