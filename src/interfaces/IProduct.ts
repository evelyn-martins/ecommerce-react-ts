export interface IProduct{
    id?: string,
    name: string,
    price: number,
    category: string,
    highlight: boolean,
    image: string[],
    inStock: boolean,
    colors: string[],
    sizes: string[],
    offer: boolean
}