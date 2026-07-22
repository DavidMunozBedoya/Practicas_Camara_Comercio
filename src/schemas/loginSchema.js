import * as Yup from "yup";

export const userLoginSchema = Yup.object().shape({

   email: Yup.string()
      .trim()
      .lowercase()
      .required('Ingrese un correo!')
      .email('Ingrese una dirección de correo válida!')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'El correo debe tener el dominio ej: .com'),

   password: Yup.string()
      .required('Ingrese una contraseña!')
      .min(8, 'Debe contener mínimo 8 caracteres!')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un carácter especial!')
      .matches(/\d/, 'Debe contener al menos un número!')
      .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula!'),
});

export const createUserSchema = Yup.object().shape({

   name: Yup.string()
      .trim()
      .lowercase()
      .required('Ingrese un Nombre')
      .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
         "El nombre solo puede contener letras y espacios")
   ,
   lastname: Yup.string()
      .trim()
      .lowercase()
      .matches()
      .required('Ingrese su Apellido')
      .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
         "El nombre solo puede contener letras y espacios")
   ,
   email: Yup.string()
      .trim()
      .lowercase()
      .required('Ingrese un correo!')
      .email('Ingrese una dirección de correo válida!')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'El correo debe tener el dominio ej: .com'),

   password: Yup.string()
      .required('Ingrese una contraseña!')
      .min(8, 'Debe contener mínimo 8 caracteres!')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un carácter especial!')
      .matches(/\d/, 'Debe contener al menos un número!')
      .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula!'),

   passwordConfirm: Yup.string()
      .required('Confirme la contraseña!')
      .oneOf([Yup.ref('password')], 'No coinciden. Revisalas!'),

   terms: Yup.boolean()
      .oneOf([true], 'Debe aceptar los terminos!')
});