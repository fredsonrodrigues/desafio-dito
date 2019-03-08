export class Product {

    name: String = '';
    price: Number = 0;

    constructor(obj: any) {
        obj.custom_data.map((el:any) => {
            this.name = el.key === 'product_name' ? el.value : this.name;
            this.price = el.key === 'product_price' ? el.value : this.price;
        })
    }
}