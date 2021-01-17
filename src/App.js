import Favorites from "./modules/favorites/Favorites";
import SearchBar from "./modules/search/SearchBar";
import Nominees from "./modules/nominees/Nominees";

import { NomineesProvider } from "./modules/contexts/nominees";

import { AppContainer } from "./App.styled";

import Header from "./modules/design-system/components/Header";

function App() {
  return (
    <NomineesProvider>
      <AppContainer>
        <Header>
          <SearchBar />
        </Header>
        <Nominees />
        <Favorites />
      </AppContainer>
    </NomineesProvider>
  );
}

export default App;
