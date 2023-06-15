import * as yup from 'yup';
import { eventValidationSchema } from 'validationSchema/events';
import { invitationValidationSchema } from 'validationSchema/invitations';

export const schoolValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  event: yup.array().of(eventValidationSchema),
  invitation: yup.array().of(invitationValidationSchema),
});
