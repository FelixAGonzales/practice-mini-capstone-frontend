export function ProductsNew() {
  return (
    <div>
      <h1>New Product</h1>
      <form>
        <div>
          <label htmlFor="Name">Name:</label>
          <input type="text" id="title" name="title"></input>
        </div>
        <br />
        <div>
          <label htmlFor="Price">Price:</label>
          <input type="text" id="price" name="price"></input>
        </div>
        <br />
        <div>
          <label htmlFor="Description">Description:</label>
          <input type="text" id="description" name="description"></input>
        </div>
        <br />
      </form>
    </div>
  );
}
