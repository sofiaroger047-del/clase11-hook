import { useState, useEffect } from "react";

export function useContadorGuardado(clave, inicial = 0) {
  const [cuenta, setCuenta] = useState(() => {
    return Number(localStorage.getItem(clave)) || inicial;
  });

  useEffect(() => {
    localStorage.setItem(clave, String(cuenta));
  }, [cuenta, clave]);

  function sumar() {
    setCuenta(c => c + 1);
  }

  return { cuenta, sumar };
}
