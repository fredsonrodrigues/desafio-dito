import { Product } from "./Product";

export class Event {

    timestamp: Date = new Date;
    revenue: String = "";
    transaction_id: String = "";
    store_name: String = "";
    products: Array<Product> = []

    constructor(obj: any) {
        this.timestamp = obj.timestamp;
        this.revenue = obj.revenue;

        obj.custom_data.map((e: any) => {
            this.transaction_id = e.key === 'transaction_id' ? e.value : this.transaction_id;
            this.store_name = e.key === 'store_name' ? e.value : this.store_name;
        })
    }

}