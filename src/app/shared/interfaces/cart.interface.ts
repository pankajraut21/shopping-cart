export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    discountPercentage?: number; // Optional if some products may not have a discount
}
  