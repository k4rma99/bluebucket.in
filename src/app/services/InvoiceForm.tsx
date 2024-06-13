// components/InvoiceForm.tsx
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface Item {
  description: string;
  rate: number;
  qty: number;
  netTotal: number;
}

interface FormData {
  invoiceNumber: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  customerType: string;
  items: Item[];
  remarks: string;
  expressDelivery: boolean;
  discount: number;
}

const InvoiceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    invoiceNumber: "",
    fullName: "",
    phoneNumber: "",
    address: "",
    customerType: "Regular",
    items: [{ description: "", rate: 0, qty: 0, netTotal: 0 }],
    remarks: "",
    expressDelivery: false,
    discount: 0,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "expressDelivery"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
  };

  const handleItemChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const a = "";
    const items = [...formData.items];
    items[index] = { ...items[index], [name]: value };
    setFormData({ ...formData, items });
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        { description: "", rate: 0, qty: 0, netTotal: 0 },
      ],
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/invoices", formData);
      alert("Invoice submitted successfully");
    } catch (error) {
      console.error("Error submitting invoice", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Invoice Number</label>
        <input
          type="text"
          name="invoiceNumber"
          value={formData.invoiceNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Customer Type</label>
        <select
          name="customerType"
          value={formData.customerType}
          onChange={handleInputChange}
        >
          <option value="Regular">Regular</option>
          <option value="Hotel">Hotel</option>
          <option value="Hotel-Guest">Hotel Guest</option>
        </select>
      </div>
      {formData.items.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            name="description"
            value={item.description}
            onChange={(e) => handleItemChange(index, e)}
            placeholder="Description"
          />
          <input
            type="number"
            name="rate"
            value={item.rate}
            onChange={(e) => handleItemChange(index, e)}
            placeholder="Rate"
          />
          <input
            type="number"
            name="qty"
            value={item.qty}
            onChange={(e) => handleItemChange(index, e)}
            placeholder="Quantity"
          />
          <input
            type="number"
            name="netTotal"
            value={item.netTotal}
            onChange={(e) => handleItemChange(index, e)}
            placeholder="Net Total"
          />
        </div>
      ))}
      <button type="button" onClick={handleAddItem}>
        Add Item
      </button>
      <div>
        <label>Remarks</label>
        <textarea
          name="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="expressDelivery"
            checked={formData.expressDelivery}
            onChange={handleInputChange}
          />
          Express Delivery
        </label>
      </div>
      <div>
        <label>Discount</label>
        <input
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InvoiceForm;
