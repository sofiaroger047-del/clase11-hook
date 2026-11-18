import { useContadorGuardado } from "../hooks/useContadorGuardado";

export default function ContadorDeVisitas() {
  const { cuenta, sumar } = useContadorGuardado("visitas");

  return (
    <div>
      <h2>Contador de visitas</h2>
      <p>Visitas: {cuenta}</p>

      <button onClick={sumar}>
        Agregar visita
      </button>
    </div>
  );
}
