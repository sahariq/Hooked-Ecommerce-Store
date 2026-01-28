// Shared TypeScript types and enums for Hooked
// Keep these in sync with backend Mongoose models.

// ----- Product -----

export type ProductCategory = "plushies" | "wearables" | "accessories" | "other";

export interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  images: string[]; // Cloudinary URLs
  category: ProductCategory;
  inStock: boolean;
  customizable: boolean;
  createdAt: string; // ISO date string from backend
  updatedAt?: string;
}

// ----- Orders -----

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  qty: number;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
}

export enum PaymentMethod {
  COD = "cod",
  BankTransfer = "bank_transfer",
}

export enum OrderStatus {
  Pending = "pending",
  Confirmed = "confirmed",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}

export interface Order {
  _id: string;
  items: OrderItem[];
  total: number;
  customerInfo: CustomerInfo;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  createdAt: string;
  updatedAt?: string;
}

// ----- Custom Orders -----

export enum CustomOrderStatus {
  Pending = "pending",
  Accepted = "accepted",
  Rejected = "rejected",
  Completed = "completed",
}

export interface CustomOrder {
  _id: string;
  customerName: string;
  contact: string; // phone or email
  description: string;
  preferredColors?: string;
  size?: string;
  budget?: number;
  status: CustomOrderStatus;
  createdAt: string;
  updatedAt?: string;
}

