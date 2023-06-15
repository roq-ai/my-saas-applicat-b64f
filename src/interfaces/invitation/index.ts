import { SchoolInterface } from 'interfaces/school';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  email: string;
  role: string;
  school_id: string;
  inviter_id: string;
  created_at?: any;
  updated_at?: any;

  school?: SchoolInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  email?: string;
  role?: string;
  school_id?: string;
  inviter_id?: string;
}
