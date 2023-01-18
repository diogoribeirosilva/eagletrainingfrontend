import { useState } from "react"
import styled from "styled-components"
import config from "../config.json"

// import Favoritos from "../src/components/Timeline/Favoritos"
import Header from '../src/components/Menu/Header'
import Profile from '../src/components/Perfil/Profile'
import Timeline from '../src/components/Timeline/Timeline'

const HomePage = () => {
  const [valorDaBusca, setValorDaBusca] = useState("");

  return (
    <>
      <div style={{
      display: "flex",
      flexDirection: "column",
      flex: 1,
      }}></div>
      <Header searchValue={valorDaBusca} setSearchValue={setValorDaBusca}/>
      <Profile/>
      <Timeline searchValue={valorDaBusca} lista={config.playlists}/>
    </>
  )
}

export default HomePage