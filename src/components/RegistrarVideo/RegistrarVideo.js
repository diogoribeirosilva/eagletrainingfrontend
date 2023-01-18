import { useState } from "react";
import { StyledRegistrarVideo } from "./style"

function useForm() {
  const [ values, setValues] = useState({ titulo: "", url: ""});

  return {
    values,
    handleChange: (event) => {
      const value = event.target.value;
      const name = event.target.name;

      console.log(value);
      console.log(name);

      setValues({
        ...values,
        [name]: value,
      });
    }
  };
}

function RegistrarVideo() {
  const formCadastro = useForm();
  const [ formVisivel, setFormVisivel ] = useState(false);

  return (
    <StyledRegistrarVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form onSubmit={(event) => event.preventDefault()}>
          <div>
            <button className="close-modal" onClick={() => setFormVisivel(false)}>
              X
            </button>

            <input
              placeholder="Titulo do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />

            <button type="submit">
              Enviar
            </button>
          </div>
        </form>
      ) : null }

    </StyledRegistrarVideo>
  )
}

export default RegistrarVideo