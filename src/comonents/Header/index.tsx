import { ContentHeader, Image, Title } from "./styles";

import logo from "../../assets/images/logo.svg";
import backgroundImage from "../../assets/images/fundo_header.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Banner } from "../Banner";

export const Header = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === "/");

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  return (
    <div>
      <Image
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <ContentHeader>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        {isHome && (
          <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        )}
        {!isHome && <Banner />}
      </ContentHeader>
    </div>
  );
};
