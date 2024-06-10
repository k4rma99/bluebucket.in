// pages/api/invoices.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
  ssl: true,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      invoiceNumber,
      fullName,
      phoneNumber,
      address,
      customerType,
      items,
      remarks,
      expressDelivery,
      discount,
    } = req.body;

    try {
      const client = await pool.connect();
      await client.query("BEGIN");
      const insertInvoiceText =
        "INSERT INTO invoices(invoice_number, full_name, phone_number, address, customer_type, remarks, express_delivery, discount) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id";
      const insertInvoiceValues = [
        invoiceNumber,
        fullName,
        phoneNumber,
        address,
        customerType,
        remarks,
        expressDelivery,
        discount,
      ];
      const resInvoice = await client.query(
        insertInvoiceText,
        insertInvoiceValues
      );
      const invoiceId = resInvoice.rows[0].id;

      const insertItemText =
        "INSERT INTO items(invoice_id, description, rate, qty, net_total) VALUES($1, $2, $3, $4, $5)";
      for (const item of items) {
        const insertItemValues = [
          invoiceId,
          item.description,
          item.rate,
          item.qty,
          item.netTotal,
        ];
        await client.query(insertItemText, insertItemValues);
      }

      await client.query("COMMIT");
      client.release();

      res.status(200).json({ message: "Invoice submitted successfully" });
    } catch (error) {
      console.error("Error saving invoice", error);
      res.status(500).json({ error: "Error saving invoice" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
