import { Dispatch, SetStateAction, useState } from 'react';
import { useFormik } from 'formik';

import { useAddUserMutation, useGetUserMutation } from 'shared/api';
import { IUserResponse } from 'shared/api/lib/types';
import { validationSchema } from 'widgets/Authorization/lib/util';

const useCustomFormik = (
  handlerClose: () => void,
  setUserAuth: Dispatch<SetStateAction<IUserResponse | null>>
) => {
  const [isLogin, setLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [createUser] = useAddUserMutation();
  const [getUser] = useGetUserMutation();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema,
    onSubmit: async ({ name, email, password }, { setErrors }) => {
      try {
        setLoading(true);
        if (!isLogin) await createUser({ name, email, password }).unwrap();
        const user = await getUser({ email, password }).unwrap();
        setUserAuth(user);
        handlerClose();
      } catch (error) {
        setErrors({ password: isLogin ? 'Неверный email или пароль' : 'Этот email уже занят' });
      } finally {
        setLoading(false);
      }
    },
  });

  return { formik, isLogin, isLoading, setLogin };
};

export { useCustomFormik };
