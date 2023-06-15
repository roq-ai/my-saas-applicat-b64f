import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  title: string;
  start_date: any;
  end_date: any;
  school_id: string;
  created_at?: any;
  updated_at?: any;

  school?: SchoolInterface;
  _count?: {};
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  school_id?: string;
}
