import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
    HeaderForm: Yup.string().required("عنوان الزامی می باشد"),
})