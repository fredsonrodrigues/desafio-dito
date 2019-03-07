import {Product} from "./Product";

export class Timeline {

    timestamp: Date = new Date;
    revenue: String = "";
    transaction_id: String = "";
    store_name: String = "";
    products: Array<Product> = []

    constructor(obj: any) {
        let store = obj.events.filter((e: any) => e.event === "comprou");
        let product = obj.events.filter((e: any) => e.event === "comprou-produto");

        store.map((el: any) => {
            this.timestamp = el.timestamp;
            this.revenue = el.revenue;

            el.custom_data.map((e: any) => {
                this.transaction_id = e.key === 'transaction_id' ? e.value : this.transaction_id;
                this.store_name = e.key === 'store_name' ? e.value : this.store_name;
            })
        })

        product.map((el:any) => {
            this.products.push(new Product(el))
        })
    }
}