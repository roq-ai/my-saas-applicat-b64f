import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  email: yup.string().required(),
  role: yup.string().required(),
  school_id: yup.string().nullable().required(),
  inviter_id: yup.string().nullable().required(),
});
