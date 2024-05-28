export interface IProduct {
    [x: string]: any
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
    quantity: number
  }
  
  export interface Rating {
    rate: number
    count: number
  }
  