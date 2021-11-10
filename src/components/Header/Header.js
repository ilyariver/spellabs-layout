import React from 'react';
import Container from '../../globalContainer';
import gridBreakpoints from '../../cssVar';
import styled from 'styled-components';
import closeIcon from '../../assets/images/icons/close.svg';
import mainLogo from '../../assets/images/logo.svg';
import burgerIcon from '../../assets/images/icons/burger.svg';

// Общие стили для кнопки открытия и закрытия меню
const mediaQueries = () => {
	return `@media (min-width: ${gridBreakpoints.sm}) {
		& span {
				width: 35px;
				height: 35px;
			}
		}
	`
}

// Обертка хедера
const HeaderWrap = styled.header`
  position: relative;
  height: 80px;

  .header-container {
    display: flex;
    justify-content: space-between;
		align-items: center;
		height: 100%;
  }
`

// Логотип
const HeaderLogo = styled.div`
  height: 20px;
  width: 80px;
  
  @media (min-width: 576px) {
	width: 100px;
  }
`

// Меню навигации
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  padding: 80px 50px;
  background-color: #fff;
  box-shadow: -1px 0 3px 0 #00000038;
  
  &.active {
    display: flex;
  }
  
  @media (min-width: ${gridBreakpoints.md}) {
		padding: 100px 90px;
    width: 60%;
  }
  @media (min-width: ${gridBreakpoints.lg}) {
  }
`

// Кнопка открытия меню
const BurgerButton = styled.button`
  background-color: transparent;
  border: none;

  & span {
    background-image: url(${burgerIcon});
    background-repeat: no-repeat;
    display: block;
    width: 30px;
    height: 30px;
  }
  ${mediaQueries()}
`

// Кнопка закрытия меню
const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 40px;
  background-color: transparent;
  border: none;
  
  & span {
    background-image: url(${closeIcon});
    background-repeat: no-repeat;
    display: block;
    width: 30px;
    height: 30px;
  }
  ${mediaQueries()}
`

const NavList = styled.ul`
	
`

// Заголовки меню
const NavItem = styled.li`
	margin-bottom: 40px;
	text-transform: uppercase;
`

// Надпись контакты
const Contacts = styled.div`
	color: var(--color-yellow-font);
	text-transform: uppercase;
`

class Header extends React.Component {

	render() {
		return (
			<HeaderWrap>
				<Container className="header-container">
					<HeaderLogo>
						<a href="#">
							<img src={mainLogo} alt="Spellabs"/>
						</a>
					</HeaderLogo>
					<Nav>
						<CloseButton aria-label="Убрать меню"><span className="close"></span></CloseButton>
						<NavList>
							<NavItem>
								<a href="#">Преимущества</a>
							</NavItem>
							<NavItem>
								<a href="#">Подход</a>
							</NavItem>
							<NavItem>
								<a href="#">Клиенты</a>
							</NavItem>
							<NavItem>
								<a href="#">Дизайн</a>
							</NavItem>
							<NavItem>
								<a href="#">Контакты</a>
							</NavItem>
						</NavList>
						<Contacts>
							<a href="#">Контакты</a>
						</Contacts>
					</Nav>
					<BurgerButton aria-label="Показать меню"><span></span></BurgerButton>
				</Container>
			</HeaderWrap>
		)
	}
}

export default Header;
