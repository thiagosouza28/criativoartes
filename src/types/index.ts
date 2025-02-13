export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
}