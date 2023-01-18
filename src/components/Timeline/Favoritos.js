import config from "../../../config.json"
import styled from "styled-components"

const StyledFavorito = styled.div`
  padding: 1rem 2rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: .8rem;
  }
  .lista-favoritos {
    display: flex;
    gap: 2rem;
  }
  .favorito {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
  }
  img {
    border-radius: 99px;
    width: 65px;
    height: 65px;
    border: 1px solid red;
  }
`;

const Favoritos = (props) => {
  console.log(props.favs);
  const listasFav = Object.keys(props.favs);

  return (
    <StyledFavorito>
      <div>
        <h3>Favoritos</h3>
        {listasFav.map((lista) => {
          const listas = props.favs[lista];
          console.log(listas);

          return (
            <section className="lista-favoritos">
              {listas.map((item) => {
                return (
                  <div className="favorito">
                    <img src={item.img} alt="" />
                    <p><a href={item.url} target="_blank"> {item.user} </a></p>
                  </div>
                );
              })}
            </section>
          );
        })}
      </div>
    </StyledFavorito>
  )
}

export default Favoritos