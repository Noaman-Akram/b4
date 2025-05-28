export interface Order {
  id: number;
  code: string;
  customer_id?: number | null;
  customer_name: string;
  address: string;
  order_status: string;
  order_price: number;
  work_types: string[];
  created_by?: string | null;
  company?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  sales_person?: string | null;
  order_details?: OrderDetailWithStages[];
}

export interface OrderStage {
  id: number;
  order_detail_id: number | null;
  stage_name: string;
  status: string;
  planned_start_date: string | null;
  planned_finish_date: string | null;
  actual_start_date: string | null;
  actual_finish_date: string | null;
  notes: string | null;
  created_at: string | null;
  updated_at: string | null;
  assignments?: OrderStageAssignment[];
}

export interface OrderStageAssignment {
  id: number;
  order_stage_id: number;
  order_detail_id?: number;  // Added to track the relationship
  employee_name: string;
  work_date: string;
  note?: string | null;
  is_done?: boolean | null;
  created_at?: string;
  employee_rate?: number | null;
}

export interface OrderDetailWithStages {
  detail_id: number;
  order_id: number;
  assigned_to?: string | null;
  updated_date?: string | null;
  due_date?: string | null;
  price: number;
  total_cost: number;
  notes?: string | null;
  img_url?: string | null;
  process_stage?: string | null;
  updated_at?: string | null;
  stages: OrderStage[];
}

export interface Employee {
  id: number;
  name: string;
  role: string;
} 