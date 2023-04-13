import { SearchParamsType } from "components/types/SearchParamsType"
import Image from "next/image"
import formatPrice from "components/util/PricesFormat"
import AddCart from "../AddCart"


export default async function Product({searchParams}: SearchParamsType) {
    return (
        <div className="flex justify-between gap-24 p-12 text-gray-700">
                <Image 
                src={searchParams.image}
                alt={searchParams.name}
                width={800}
                height={800}
                className='rounded-lg'
                />
                <div>
                <div>
                    <h1 className="text-teal-700 text-xl">{searchParams.name}</h1>
                    <p>{searchParams.description}</p>
                </div>
                <div className="flex gap-2">
                    <p className="font-bold text-teal-700">{formatPrice(searchParams.unit_amount)}</p>
                </div>
                <AddCart {...searchParams} />
                </div>
        </div>
    )
}