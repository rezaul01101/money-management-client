interface InputType {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
}
const InputComponent = ({ label, type, id, placeholder }: InputType) => {
  return (
    <div className="relative w-full mb-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="block w-full px-4 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-theme-yellow-500 focus:border-theme-yellow-500 placeholder-gray-500 placeholder-text-sm"
      />
    </div>
  );
};

export default InputComponent;
