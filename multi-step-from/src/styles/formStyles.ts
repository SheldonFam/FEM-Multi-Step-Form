export const FORM_STYLES = {
  input: {
    base: "mt-1 w-full rounded-md border p-2 font-karla transition focus:border-[hsl(169,82%,27%)] focus:outline-none resize-none",
    error: "border-[hsl(0,66%,54%)]",
    normal: "border-[hsl(186,15%,59%)]",
  },
  label: {
    base: "block text-base font-medium text-[hsl(187,24%,22%)] font-karla",
    required: "text-[hsl(169,82%,27%)] pl-2",
  },
  error: {
    base: "mt-1 text-sm text-[hsl(0,66%,54%)] font-karla",
  },
  button: {
    base: "w-full rounded-md bg-[hsl(169,82%,35%)] p-3 text-white hover:bg-[hsl(169,82%,27%)] transition font-karla font-bold cursor-pointer",
    disabled: "opacity-50 cursor-not-allowed",
  },
};
