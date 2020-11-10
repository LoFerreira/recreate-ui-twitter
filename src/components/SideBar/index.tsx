import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import News from '../News';
import FollowSuggestion from '../FollowSuggestion';
import { Container, SearchWrapper, SearchIcon, SearchInput, Body } from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter" />
              <SearchIcon />
          </SearchWrapper>

        <StickyBox>
          <Body>
            <List 
              title="Talvez você curta"
              elements={[
                <FollowSuggestion name="Felicio Ferreira" nickname="@felicioferreira" />,
                <FollowSuggestion name="Felicio Ferreira" nickname="@felicioferreira" />,
                <FollowSuggestion name="Felicio Ferreira" nickname="@felicioferreira" />
              ]}
            />
            
            <List 
              title="Talvez você curta"
              elements={[
              <News />, 
              <News />, 
              <News />]}
            />

            <List 
              title="Talvez você curta"
              elements={[
              <News />, 
              <News />, 
              <News />]}
            />

            <List 
              title="Talvez você curta"
              elements={[
              <News />, 
              <News />, 
              <News />]}
            />

            <List 
              title="Talvez você curta"
              elements={[
              <News />, 
              <News />, 
              <News />]}
            />
          </Body>
        </StickyBox>
      </Container>
  );
}

export default SideBar;