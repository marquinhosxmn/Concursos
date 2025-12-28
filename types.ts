import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingBenefit {
  text: string;
  included: boolean;
}