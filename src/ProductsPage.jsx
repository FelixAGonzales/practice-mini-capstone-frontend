import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  let products = [
    {
      id: 4,
      name: "Steam Deck",
      price: "400.0",
      description: "This is a console developed by Valve",
      created_at: "2024-09-01T21:42:22.276Z",
      updated_at: "2024-09-01T21:42:22.276Z",
      supplier: null,
      supplier_id: null,
    },
    {
      id: 5,
      name: "Gamecube",
      price: "100.0",
      description: "his is a console developed by Nintendo",
      created_at: "2024-09-01T21:42:24.583Z",
      updated_at: "2024-09-01T21:42:24.583Z",
      supplier: null,
      supplier_id: null,
    },
    {
      id: 6,
      name: "Xbox 360",
      price: "200.0",
      description: "This is a console developed by Microsoft",
      tax: "The Tax is: $36.0",
      total: "The total (including tax) is: $436.0",
      supplier: null,
      supplier_id: null,
    },
  ];


  return (
    <main>
      <ProductsNew />
      <ProductsIndex products={products} />
    </main>
  );
}
