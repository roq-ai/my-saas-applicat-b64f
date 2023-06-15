import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  title: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  school_id: yup.string().nullable().required(),
});
