import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {darken, lighten} from 'polished';
import gridBreakpoints from '../../cssVar';
import closeIcon from '../../assets/images/icons/close.svg';
import burgerIcon from '../../assets/images/icons/burger.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
const { lg } = gridBreakpoints;



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
	`;
};

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
  padding: 100px 5rem 90px;
  background-color: #fff;
  box-shadow: -1px 0 33px 0 #0000002b;
  transform: translateX(100%);
  transition: transform 0.2s ease-in-out;
  font-size: 1.4rem;
  overflow: auto;
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
`;

const NavList = styled.ul`
  @media (min-width: ${gridBreakpoints.lg}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

// Заголовки меню
const NavItem = styled.li`
  margin-bottom: 40px;
  text-transform: uppercase;
	cursor: pointer;

  @media (min-width: ${gridBreakpoints.lg}) {
    margin: 0 20px;

    a {
      position: relative;
      line-height: 40px;
      z-index: 5;

      &:after {
        content: "";
        background-color: var(--color-menu-hover);
        position: absolute;
        width: 0;
        transition: width 0.2s ease-in-out;
      }

      &:hover {
        &::after {
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 15px;
        }
      }
    }

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
`;

// Надпись контакты
const Contacts = styled.div`
  color: var(--color-yellow-font);
  text-transform: uppercase;
  @media (min-width: ${gridBreakpoints.lg}) {
    transition: color 0.2s ease-in;
    &:hover {
      color: ${lighten(0.2, '#FAAF22')};;
    }

    a {
      line-height: 40px;
    }
  }
`;

// Кнопка открытия меню
const BurgerButton = styled.button`
  background-color: transparent;
  border: none;
  z-index: 10;

  & span {
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
			active: false,
			menu: [
				{title: 'Преимущества', link: 'need'},
				{title: 'Подход', link: 'levels'},
				{title: 'Клиенты', link: 'partners'},
				{title: 'Дизайн', link: 'slider'},
				{title: 'Контакты', link: 'slider'},
			],
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	scrollDisable(active = 'auto') {
		document.querySelector('html').style.overflow = active;
	}

	toggleMenu() {
		AOS.init();
		this.scrollDisable();

		// Если не декстоп, не блокируем скролл всего окна при клике по меню
		if (window.innerWidth <= parseInt(lg)) {
			this.scrollDisable(`${this.state.active ? 'auto' : 'hidden'}`);
      this.setState({active: !this.state.active});
		}
	}

	render() {
		const {active} = this.state;
		return (
			<>
				<Nav
					className={active ? 'active' : ''}>
					<NavList>
						{
							this.state.menu.map((item, i) => {
								return (
									<NavItem
										key={item.title}
										className={active ? 'aos-animate' : ''}
										data-aos="zoom-in-left"
										data-aos-delay={i * 300}
										data-aos-duration="500"
									>
										<Link
											activeClass="active"
											spy={true}
											smooth={true}
											duration={1000}
											offset={-70}
											onClick={this.toggleMenu}
											to={item.link}>{item.title}</Link>
									</NavItem>
								);
							})
						}
					</NavList>
					<Contacts>
						<a href="#">Контакты</a>
					</Contacts>
				</Nav>
				<BurgerButton
					aria-label={active ? 'Закрыть меню' : 'Открыть меню'}
					onClick={this.toggleMenu}>
					<span>
						<img
							src={active ? closeIcon : burgerIcon}
							alt={active ? 'Закрыть' : 'Открыть'}/>
					</span>
				</BurgerButton>
			</>

		);
	}
}

export default NavListMenu;
