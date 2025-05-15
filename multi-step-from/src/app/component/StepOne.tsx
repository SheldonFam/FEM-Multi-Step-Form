/* StepOne.tsx */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormData } from "./MultiStepForm";

interface Props {
  next: () => void;
  formData: FormData;
  updateForm: (data: Partial<FormData>) => void;
}

export default function StepOne({ next, formData, updateForm }: Props) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-2 text-[#051B33]">Personal info</h2>
      <p className="text-sm text-[#9CA2B0] mb-4">
        Please provide your name, email address, and phone number.
      </p>
      <Formik
        initialValues={{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          phone: Yup.string()
            .matches(/^(\d{1,3}[- ]?)?\d{10,15}$/, "Invalid phone number")
            .required("Phone number is required"),
        })}
        onSubmit={(values) => {
          updateForm(values);
          next();
        }}
      >
        <Form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <Field
              name="name"
              type="text"
              className="w-full border px-3 py-2 rounded"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <Field
              name="email"
              type="email"
              className="w-full border px-3 py-2 rounded"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <Field
              name="phone"
              type="text"
              className="w-full border px-3 py-2 rounded"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#051B33] text-white px-4 py-2 rounded"
            >
              Next Step
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
