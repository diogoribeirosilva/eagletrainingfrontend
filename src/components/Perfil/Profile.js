import config from "../../../config.json"
import styled from 'styled-components'
import Banner from "./Banner"

const StyledProfile = styled.section`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  img {
    width: 85px;
    height: 85px;
    border-radius: 99px;
  }
  .user-info {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1rem;
    width: 100%;
  }
`;

const Profile = () => {
  return (
    <>
      <Banner/>
      <StyledProfile>
        <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} alt="foto de perfil do usuario"/>

        <div className="user-title">
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
        </section>
      </StyledProfile>
    </>

  )
}

export default Profile