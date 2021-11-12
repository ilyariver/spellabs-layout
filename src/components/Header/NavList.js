import React from 'react';
import styled from 'styled-components';
import gridBreakpoints from '../../cssVar';
import closeIcon from '../../assets/images/icons/close.svg';
import burgerIcon from '../../assets/images/icons/burger.svg';


// Общие стили для кнопки открытия и закрытия меню
const mediaQueries = () => {
	return `@media (min-width: ${gridBreakpoints.sm}) {
		& span {
				width: 35px;
				height: 35px;
			}
		}
		
		@media (min-width: ${gridBreakpoints.lg}) {
			display: none;
		}
	`
}

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
	
	@media (min-width: ${gridBreakpoints.md}) {
		right: 4rem;
	}
  ${mediaQueries()}  
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
  width: 30rem;
  padding: 60px 5rem;
  background-color: #fff;
  box-shadow: -1px 0 33px 0 #0000002b;
  transform: translateX(100%);
	transition: transform 0.2s ease-in-out;
	font-size: 1.4rem;
	z-index: 6;

  &.active {
		transform: translateX(0);
  }

  @media (min-width: ${gridBreakpoints.sm}) {
    width: 25rem;
    padding-top: 110px;
    font-size: 1.2rem;
  }
  
  @media (min-width: ${gridBreakpoints.md}) {
		padding: 100px 90px;
    width: 17rem;
    font-size: 0.8rem;
  }
	
  @media (min-width: ${gridBreakpoints.lg}) {
    display: flex;
		background-color: transparent;
		position: static;
		flex-direction: row;
		width: 100%;
		height: auto;
		padding: 0;
    box-shadow: none;
    font-size: 12px;
    transform: translateX(0);
  }

  @media (min-width: ${gridBreakpoints.xxl}) {
    font-size: 14px;
  }
`

const NavList = styled.ul`
  @media (min-width: ${gridBreakpoints.lg}) {
    display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
`

// Заголовки меню
const NavItem = styled.li`
	margin-bottom: 40px;
	text-transform: uppercase;

  @media (min-width: ${gridBreakpoints.lg}) {
		margin: 0 20px;
		
		&:first-child {
			margin-left: 0;
		}

    &:last-child {
      margin-right: 0;
    }
	}

  @media (min-width: ${gridBreakpoints.xl}) {
    margin: 0 25px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

// Надпись контакты
const Contacts = styled.div`
	color: var(--color-yellow-font);
	text-transform: uppercase;
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
`;

// Компонент меню навигации
class NavListMenu extends React.Component {
	constructor() {
		super();

		this.state = {
			active: false
		};

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState({active: !this.state.active});
	}

	render() {
		return (
			<>
				<Nav
				className={this.state.active ? 'active' : ''}>
				<CloseButton
					aria-label="Убрать меню"
					onClick={this.toggleMenu}>
					<span></span>
				</CloseButton>
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
				<BurgerButton
					aria-label="Показать меню"
					onClick={this.toggleMenu}>
					<span></span>
				</BurgerButton>
			</>

		)
	}
}

export default NavListMenu
