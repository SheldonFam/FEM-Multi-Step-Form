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
    <div className="w-full flex flex-col gap-12 mt-12 max-w-[449px]">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-[#051B33]">Personal info</h2>
        <p className="text-base text-[#9CA2B0]">
          Please provide your name, email address, and phone number.
        </p>
      </div>

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
        <Form className="flex flex-col flex-1">
          {/* wrap form */}
          <div className="flex flex-col gap-7">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium">Name</label>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <Field
                name="name"
                type="text"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium">Email Address</label>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <Field
                name="email"
                type="email"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium">
                  Phone Number
                </label>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <Field
                name="phone"
                type="text"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </div>

          <div className="flex justify-end mt-auto">
            <button
              type="submit"
              className="bg-[#051B33] text-white p-4 rounded-xl max-w-[122px] w-full cursor-pointer hover:bg-[#0A2A4D] transition duration-300"
            >
              Next Step
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
