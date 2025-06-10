import { store } from "./rootState";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface IProduct {
  product: {
    name: "string";
    sku: "string";
    barcode: "string";
    category: "string";
    subcategory: "string";

    appearance: {
      color: "string";
      material: "string";
      shape: "string";
      dimensions: "string";
      weight: "number";
    };

    manufacturer: {
      brand: "string";
      country: "string";
      series: "string";
      manufacture_date: "date";
    };

    technical: {
      power_type: "string";
      power: "number";
      voltage: "number";
      interfaces: ["string"];
      capacity: "number";
      compatibility: "string";
    };

    packaging: {
      included_items: "string";
      package_dimensions: "string";
      gross_weight: "number";
      units_per_box: "number";
      packaging_type: "string";
    };

    pricing: {
      purchase_price: "number";
      retail_price: "number";
      discount_price: "number";
      vat: "number";
    };

    inventory: {
      status: "string";
      condition: "string";
      added_date: "date";
      warranty: "string";
    };

    marketing: {
      keywords: ["string"];
      short_description: "string";
      full_description: "string";
      images: ["string"];
      videos: ["string"];
    };
  };
}
