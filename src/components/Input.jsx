export default function Input({ name, setName }) {
  return (
    <input
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}