import styled from "styled-components";
import config from "../../../config.json"

import Favoritos from "./Favoritos"

export const StyledTimeline = styled.div`

  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h3 {
    font-size: 1.25rem;
    margin-bottom: .8rem;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    object-fit: cover;
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: .5rem;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      /* scroll-snap-type: x mandatory; */
      a {
        color: ${({ theme }) => theme.textColorBase};
        scroll-snap-align: start;
        p {
          position: relative;
          display: inline-block;
          margin-top: .5rem;
        }
      }
    }
  }
`;

const Timeline = ({ searchValue, ...props }) => {
  const nomeListas = Object.keys(props.lista);

  return (
    <StyledTimeline>
      <div>
        {nomeListas.map((nome) => {
          const videos = props.lista[nome];
          console.log(videos);

          return (
            <section>
              <h3>{nome}</h3>
              <div>
                {videos.filter((video) => {
                  const tituloEmCaixaBaixa = video.title.toLowerCase();
                  const resultadoBuscaCaixaBaixa = searchValue.toLowerCase();

                  return tituloEmCaixaBaixa.includes(resultadoBuscaCaixaBaixa);
                })
                .map((video) => {
                  return (
                    <a href={video.url}>
                      <img src={video.thumb} alt=""/>
                      <p>
                        {video.title}
                      </p>
                    </a>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
      <Favoritos favs={config.favoritos}/>
    </StyledTimeline>

  )
}

export default Timeline