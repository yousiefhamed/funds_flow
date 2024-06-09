export interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  is_approved: any; // Ensure it's a number
  created_at: string;
  updated_at: string;
  investor: { national_id: string; user_id: number };
  business: { tax_card_number: string; user_id: number };
  
}
