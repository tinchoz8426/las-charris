import ItemDetail from "../ItemDetail/ItemDetail";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { products } from '../Products';


function ItemDetailContainer() {


    const {itemId} = useParams()
    
    const productProps = () => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        }).then(result => {
            const filter = result.filter(element => element.id === itemId)
            setProductState(filter)
        });
    }

    useEffect(productProps, [itemId])

    const [ProductState, setProductState] = useState()  

    return(
        <>  
            {ProductState && ProductState.map(element => <ItemDetail key={element.id} objeto={element}/>)}
        </>
    )
}

export default ItemDetailContainer