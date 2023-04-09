const formatPrice = (amount: number | null) => {
    if(amount){
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount / 100)
    }
    return 'Price not available'    
}


export default formatPrice
