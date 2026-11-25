
import { useFetch } from "../hooks/useFetch";

export default function PerfilGitHub({ usuario }) {
  const url = `https://api.github.com/users/${encodeURIComponent(usuario)}`;

  const {
    datos: perfil,
    cargando,
    error
  } = useFetch(url);

  if (cargando) {
    return <p>Cargando perfil...</p>;
  }

  if (error) {
    return <p>Ocurrió un error: {error}</p>;
  }

  if (!perfil) {
    return <p>No se encontró el perfil.</p>;
  }

  return (
    <div>
      <h2>Mi perfil de GitHub</h2>

      <img
        src={perfil.avatar_url}
        alt={`Avatar de ${perfil.login}`}
        width="150"
      />

      <h3>{perfil.name || perfil.login}</h3>

      <p>Usuario: {perfil.login}</p>

      <p>
        Repositorios públicos: {perfil.public_repos}
      </p>
    </div>
  );
}


