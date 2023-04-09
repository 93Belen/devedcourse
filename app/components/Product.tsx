import Image from "next/image"
import formatPrice from "components/util/PricesFormat"
import { ProductType } from "components/types/ProductType"

export default function Product({name, image, price}: ProductType){
    return (
        <div>
            <Image 
            src={image}
            alt={name}
            width={400}
            height={400}
            />
            <h1>{name}</h1>
            <p>{formatPrice(price)}</p>
        </div>
    )
}