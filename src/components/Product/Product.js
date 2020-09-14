import React, {useState} from 'react';
import { useDispatch } from "react-redux"
import {increment} from "../../features/Listings/ListingsSlice"

function Product({data}) {
    const { productData, images } = data
    const {productAltText, price, discountPercentage, productTitle, makingChargesDiscount, setName} = productData
    const [active, setActive] = useState(0)
    const [hover, setHover] = useState(false)
    const [tmOut, setTmOut] = useState(null)

    const dispatch = useDispatch()

    const startAnimate = (activeImage, isHovered) => {
        if (isHovered) {
            const tt = setTimeout(() => {
                setActive((activeImage)%images.length)
                onHoverControlEnter(activeImage+1, true)
            }, 1200);
            setTmOut(tt)
        }
    }

    const stopAnimation = () => {
        setActive(0)
        setHover(false)
        clearTimeout(tmOut)
    } 

    const onHoverControlEnter = (a, isHovered) => {
        if (isHovered) {
            setHover(true)
            startAnimate(a, true)    
        }
    } 

    return (
        <div className="product"  
            onMouseOver={()=>onHoverControlEnter(active+1, !hover)} 
            onMouseLeave={stopAnimation}
        >
            <div title={productTitle} className="product-image">
                {images.map((item, idx)=>(
                        <img 
                            className={active===idx?"active":""} 
                            key={idx} 
                            alt={productAltText} 
                            src={item}/>
                        ))}
            </div>
                {hover? <button onClick={()=>dispatch(increment())} >WISHLIST</button>: <span>{setName}</span>} 
            <div className="pricing" >
                ₹{Math.floor(price - (price * parseInt(discountPercentage.slice(0,-1))/100))} 
                &nbsp; <del>₹{Math.floor(price)}</del>
            </div>
            <div className="discount" >
                <span>{makingChargesDiscount} off on making charges</span>
            </div>
            
        </div>
    )
}

export default Product;