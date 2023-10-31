/*eslint-disable*/
import { useRouter } from 'next/router';
import React from "react";
// reactstrap components
import Logo from "components/logo";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import configValues from '../../helpers/config';
import styles from "./Footer.module.css";
interface FooterProps { }

const Footer: React.FC<FooterProps> = ({ }) => {
  const router = useRouter()
  const generateRef = (ref: string) => {
    return (router.pathname != '/') ? `/${ref}` : ref;
  }

  return (
    <>
      <Container>
        <Nav className={styles.FooterContent}>
          <NavItem>
            <NavLink active href={generateRef("#")}>

              {Logo({ width: 300 })}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={generateRef("#speakers")}>Palestrantes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={generateRef("#sponsors")}>Patrocinadores</NavLink>
          </NavItem>
          {(configValues.midiaKit) ? <NavItem>
            <NavLink target="_blank" style={{ color: 'red' }} href={configValues.midiaKit}>Seja um patrocinador</NavLink>
          </NavItem> : <></>}
          {(configValues.midiaKit) ? <NavItem>
            <NavLink target="_blank" href="https://docs.google.com/document/d/16duFqXn39gR0rs2l-YOZ2UbDEUnG96YMD5mVvQZI_MQ/edit?usp=sharing">Código de conduta</NavLink>
          </NavItem> : <></>}
          <NavItem className={styles.FooterRegister}>
            <NavLink target="_blank" href={configValues.eventLinkRegistrationUrl}>Se cadastrar</NavLink>
          </NavItem>
          {/*<NavItem>
            <NavLink href="#">Agenda</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Organizadores</NavLink>
  </NavItem>
          */}
        </Nav>
        <a href="https://bohr.io/" target="_blank">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '60px' }}>

            Hospedado em <img style={{ paddingLeft: '10px' }} height="30px" src="/bohr.png" />
          </div>
        </a>
      </Container>
    </>
  );
};

export default Footer;
