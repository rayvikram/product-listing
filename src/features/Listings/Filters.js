import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux"

import { setListingsData } from "./ListingsSlice"
import Data from "../../data/data.json"

function Filters() {

    const productData = Data.data.products;
    const dispatch = useDispatch()

    const [carat18, setCarat18] = useState(false)
    const [carat22, setCarat22] = useState(false)
    const [price30, setPrice30] = useState(false)
    const [price50, setPrice50] = useState(false)
    const [priceM50, setPriceM50] = useState(false)
    const [ship, setShip] = useState(false)

    // will only run at on-load of component
    useEffect(()=>{
        dispatch(setListingsData(productData))
    },[dispatch, productData])

    // will run after each filter is selected
    useEffect(()=>{
        let newData = [...productData]
        if(carat18) {
            newData = newData.filter(i => i.productData.karat === "18" )
        }
        if(carat22) {
            newData = newData.filter(i => i.productData.karat === "22" )
        }
        if(price30) {
            newData = newData.filter(i => parseInt(i.productData.price) < 30000 )
        }
        if(price50) {
            newData = newData.filter(i => parseInt(i.productData.price) < 50000 )
        }
        if(priceM50) {
            newData = newData.filter(i => parseInt(i.productData.price) > 50000 )
        }
        if(ship) {
            newData = newData.filter(i => i.productData.quickShip === "1" )
        }
        dispatch(setListingsData(newData))

    }, [carat18, carat22, price30, price50, priceM50, ship, dispatch, productData])

    return <div className="left-side" > 
        <div> 
            <div>Gold Karat</div>
            <div>
                <input onChange={()=>setCarat18(!carat18)} checked={carat18} type="checkbox" id="18karat" name="18karat" value="vik" />
                <label for="18karat"> 18 Karat </label> <br/>

                <input onChange={()=>setCarat22(!carat22)} checked={carat22} type="checkbox" id="22karat" name="22karat" />
                <label for="22karat"> 22 Karat </label> <br/>
            </div>
            <hr/>
            <div>Quick Ship</div>
            <div>
                <input onChange={()=>setShip(!ship)} checked={ship} type="checkbox" id="readytoship" name="readytoship" />
                <label for="readytoship"> Ready To Ship </label> <br/>
            </div>
            <hr/>
            <div>Price</div>
            <div>
                <input onChange={()=>setPrice30(!price30)} checked={price30} type="checkbox" id="lessthan30" name="lessthan30" />
                <label for="lessthan30"> Less then ₹30,000 </label> <br/>
            </div>
            <div>
                <input onChange={()=>setPrice50(!price50)} checked={price50} type="checkbox" id="lessthan50" name="lessthan50" />
                <label for="lessthan50"> Less then ₹50,000 </label> <br/>
            </div>
            <div>
                <input onChange={()=>setPriceM50(!priceM50)} checked={priceM50} type="checkbox" id="morethen50" name="morethen50" />
                <label for="morethen50"> More then ₹50,000 </label> <br/>
            </div>
            <hr/>
        </div>
     </div>
}

export default Filters;