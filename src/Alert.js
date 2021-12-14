export default function Alert({ message }) {
  let result = null;

  if (message) result = <p className="alert">{message}</p>;

  return <>{result}</>;
}
