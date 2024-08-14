// eslint-disable-next-line react/prop-types
export default function Button({ children, action, type }) {
  return (
    <button
      className="p-2 bg-primary rounded-md hover:opacity-90 transition-opacity text-white"
      onClick={action}
      type={type}
    >
      {children}
    </button>
  );
}
