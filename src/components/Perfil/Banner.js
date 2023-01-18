import config from "../../../config.json"
import styled from 'styled-components'

const StyledBanner = styled.div`
    background-image: url(${({ bg }) => bg});
    /* background-repeat: no-repeat; */
    background-position: center;
    height: 300px;
    object-fit: cover;
`;

const Banner = () => {
  return (
    <StyledBanner bg={config.bg}>
    </StyledBanner> 
  )
}

export default Banner