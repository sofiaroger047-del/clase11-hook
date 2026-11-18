import { useContadorGuardado } from "../hooks/useContadorGuardado";

export default function ContadorDeCafes() {
  const { cuenta, sumar } = useContadorGuardado("cafes");

  return (
    <div>
      <h2>Contador de cafés</h2>
      <p>Cafés: {cuenta}</p>

      <button onClick={sumar}>
        Agregar café
      </button>
    </div>
  );
}
