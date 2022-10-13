import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "components/App.styled"
import { Suspense } from 'react';
export const SharedLayout = () => {
  return (
<Container>
      <Header>
        <nav> 
          <Link to="/home">Home</Link>
           <Link to="/movies">Movies</Link>
         </nav>

          </Header>
          <Suspense>
          <Outlet />
        </Suspense>
    </Container>
  );
};

