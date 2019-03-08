import { Event } from "../models/Event";
import { Product } from "../models/Product";

const data = {
  events: [
    {
      event: "comprou-produto",
      timestamp: "2016-09-22T13:57:32.2311892-03:00",
      custom_data: [
        { key: "product_name", value: "Camisa Azul" },
        { key: "transaction_id", value: "3029384" },
        { key: "product_price", value: 100 }
      ]
    },
    {
      event: "comprou",
      timestamp: "2016-09-22T13:57:31.2311892-03:00",
      revenue: 250,
      custom_data: [
        { key: "store_name", value: "Patio Savassi" },
        { key: "transaction_id", value: "3029384" }
      ]
    },
    {
      event: "comprou-produto",
      timestamp: "2016-09-22T13:57:33.2311892-03:00",
      custom_data: [
        { key: "product_price", value: 150 },
        { key: "transaction_id", value: "3029384" },
        { key: "product_name", value: "Calça Rosa" }
      ]
    },
    {
      event: "comprou-produto",
      timestamp: "2016-10-02T11:37:35.2300892-03:00",
      custom_data: [
        {
          key: "transaction_id",
          value: "3409340"
        },
        {
          key: "product_name",
          value: "Tenis Preto"
        },
        {
          key: "product_price",
          value: 120
        }
      ]
    },
    {
      event: "comprou",
      timestamp: "2016-10-02T11:37:31.2300892-03:00",
      revenue: 120,
      custom_data: [
        {
          key: "transaction_id",
          value: "3409340"
        },
        {
          key: "store_name",
          value: "BH Shopping"
        }
      ]
    }
  ]
};

test("Criando Objeto Timeline", async () => {
  var timeline = new Array<Event>();
  let product = new Array();
  let store = data.events.filter((e: any) => e.event === "comprou");
  product = data.events.filter((e: any) => e.event === "comprou-produto");

  store.map((el: any) => {
    let event = new Event(el);
    let products = new Array<Product>();
    product.map((el: any) =>
      el.custom_data.map((e: any) => {
        if (e.key === "transaction_id" && e.value === event.transaction_id) {
          products.push(new Product(el))
        }
      })
    );
    event.products = products;
    timeline.push(event)
  })
  
  expect(timeline).toEqual([
    {
      timestamp: "2016-09-22T13:57:31.2311892-03:00",
      revenue: 250,
      transaction_id: "3029384",
      store_name: "Patio Savassi",
      products: [
        {
          name: "Camisa Azul",
          price: 100
        },
        {
          name: "Calça Rosa",
          price: 150
        }
      ]
    },
    {
      timestamp: "2016-10-02T11:37:31.2300892-03:00",
      revenue: 120,
      transaction_id: "3409340",
      store_name: "BH Shopping",
      products: [
        {
          name: "Tenis Preto",
          price: 120
        }
      ]
    }
  ]);
});
