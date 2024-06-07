export interface Details {
  id: number;
  category_id: number;
  business_name: string;
  description: string;
  amount_needed: number;
  remaining_amount: number;
  potential_risks: string;
  future_growth: string;
  products_or_services: string;
  returns_percentage: string;
  company_valuation: string;
  start_date: string;
  end_date: string;
  revenues: string;
  net_profit: string;
  profit_margin: string;
  cash_flow: string;
  ROI: string;
  photo: string;
  created_at: string;
  updated_at: string;
  category_name: string;
  
  uuid:string
  category: {
    uuid: string;
    name: string;
  };

}
