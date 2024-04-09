export default function Input({ label, invalid, ...props }) {
  let labelClass = "block mb-2 text-xs font-bold tracking-wide uppercase"
  let inputClass = "w-full px-3 py-2 leading-tight border rounded shadow"
  if(invalid) {
    // NOTE: Don't forget to put a space before writing anything in property here
    labelClass += " text-red-400"
    inputClass += " text-red-400 bg-red-100 border-red-500"
  } else {
    labelClass += " text-stone-300"
    inputClass += " text-gray-700 bg-stone-300"
  }
  return (
    <p>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...props} />
    </p>
  );
}