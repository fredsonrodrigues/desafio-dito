import { Timeline } from "../models/Timeline";

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
    }
  ]
};

test("Criando Objeto Timeline", async () => {
    let timeline = new Timeline(data);
    expect(timeline).toEqual({
        timestamp: '2016-09-22T13:57:31.2311892-03:00',
        revenue: 250,
        transaction_id: '3029384',
        store_name: 'Patio Savassi',
        products:
            [
                { name: 'Camisa Azul', price: 100 },
                { name: 'Calça Rosa', price: 150 }
            ]
    });
});
