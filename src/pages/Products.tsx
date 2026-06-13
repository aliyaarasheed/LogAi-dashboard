import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const openAddModal = () => {
    setEditingProduct(null);

    setFormData({
      name: "",
      sku: "",
      price: "",
      stock: "",
    });

    setShowModal(true);
  };

  const openEditModal = (product: any) => {
    setEditingProduct(product);

    setFormData({
      name: product.name,
      sku: product.sku,
      price: product.price,
      stock: product.stock.toString(),
    });

    setShowModal(true);
  };

  const saveProduct = () => {
    if (
      !formData.name ||
      !formData.sku ||
      !formData.price ||
      !formData.stock
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id
            ? {
                ...p,
                name: formData.name,
                sku: formData.sku,
                price: formData.price,
                stock: Number(formData.stock),
              }
            : p
        )
      );
    } else {
      const newProduct = {
        id: Date.now(),
        name: formData.name,
        sku: formData.sku,
        price: formData.price,
        stock: Number(formData.stock),
      };

      setProducts([...products, newProduct]);
    }

    setShowModal(false);
  };

  const deleteProduct = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-5xl font-bold">
            Product Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your product inventory and pricing
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-black text-white px-5 py-3 rounded-xl"
        >
          + Add Product
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Total Products</p>
          <h2 className="text-4xl font-bold mt-2">
            {products.length}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">In Stock</p>
          <h2 className="text-4xl font-bold mt-2 text-green-600">
            {products.filter((p) => p.stock >= 20).length}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Low Stock</p>
          <h2 className="text-4xl font-bold mt-2 text-yellow-600">
            {products.filter(
              (p) => p.stock > 0 && p.stock < 20
            ).length}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Out Of Stock</p>
          <h2 className="text-4xl font-bold mt-2 text-red-600">
            {products.filter((p) => p.stock === 0).length}
          </h2>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded-lg mb-6 w-full max-w-xl"
      />

      <div className="bg-white rounded-xl shadow p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Name</th>
              <th className="text-left py-3">SKU</th>
              <th className="text-left py-3">Price</th>
              <th className="text-left py-3">Stock</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-4">{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>

                <td>
                  {product.stock < 20 ? (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                      Low Stock
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                      In Stock
                    </span>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => openEditModal(product)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-2xl font-bold mb-4">
              {editingProduct
                ? "Edit Product"
                : "Add Product"}
            </h2>

            <input
              type="text"
              placeholder="Product Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="text"
              placeholder="SKU"
              value={formData.sku}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  sku: e.target.value,
                })
              }
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="text"
              placeholder="Price"
              value={formData.price}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  price: e.target.value,
                })
              }
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="number"
              placeholder="Stock"
              value={formData.stock}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  stock: e.target.value,
                })
              }
              className="w-full border p-2 mb-4 rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={saveProduct}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Products;