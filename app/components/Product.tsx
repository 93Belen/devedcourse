import Image from "next/image"
import formatPrice from "components/util/PricesFormat"
import { ProductType } from "components/types/ProductType"
import Link from "next/link"

export default function Product({name, image, unit_amount, id, description}: ProductType){
    return (
        <Link href={{pathname:`/product/${id}`, query: {name, image, unit_amount, id, description}}}>
        <div>
            <Image 
            src={image}
            alt={name}
            width={800}
            height={800}
            className='rounded-lg'
            />
            <div className='font-medium'>
            <h1>{name}</h1>
            <h2 className='text-sm text-teal-700'>{formatPrice(unit_amount)}</h2>
            </div>
        </div>
        </Link>
    )
}