function Inputs({ type, placeholder, onchange }) {
  return (
      <input
        type={type}
        placeholder={placeholder}
        onChange={onchange}
        className="border-2 border-gray rounded"
      />
  );
}

export default Inputs;
