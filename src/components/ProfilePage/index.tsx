import React from 'react';
import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';


const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>

            <h1>Leonardo Ferreira</h1>
            <h2>@lleonardof_</h2>

            <p>
                Developer, <a href="https://github.com/LoFerreira">GitHub profile</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    São Paulo, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 10 de dezembro de 2000
                </li>
            </ul>

            <Followage>
                <span>
                    Seguindo <strong>100</strong>
                </span>
                <span>
                    <strong>500</strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;