export const FORM_VALIDATION = {
  firstName: {
    required: "This field is required",
    minLength: {
      value: 2,
      message: "First name must be at least 2 characters",
    },
  },
  lastName: {
    required: "This field is required",
    minLength: {
      value: 2,
      message: "Last name must be at least 2 characters",
    },
  },
  email: {
    required: "This field is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  queryType: {
    required: "Please select a query type",
  },
  message: {
    required: "This field is required",
    minLength: {
      value: 10,
      message: "Message must be at least 10 characters",
    },
  },
  consent: {
    required: "To submit this form, please consent to being contacted",
  },
};

export const QUERY_TYPES = ["General Enquiry", "Support Request"];
