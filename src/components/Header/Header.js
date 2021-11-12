import React from 'react';
import Container from '../../globalContainer';
import gridBreakpoints from '../../cssVar';
import styled from 'styled-components';
import mainLogo from '../../assets/images/logo.svg';
import NavListMenu from './NavList';


// Хедер
const PageHeader = styled.header`
  position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
  height: 80px;
	background-color: var(--color-white);
	z-index: 6;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  @media (min-width: ${gridBreakpoints.lg}) {
    .header-container {
      justify-content: flex-start;
    }
  }

  @media (min-width: ${gridBreakpoints.xl}) {
    height: 80px;
  }
`;

// Логотип
const HeaderLogo = styled.div`
  height: 2rem;
  width: 8rem;

  @media (min-width: ${gridBreakpoints.sm}) {
    height: 1.8rem;
    width: 7rem;
  }
	
  @media (min-width: ${gridBreakpoints.md}) {
    height: 1rem;
    width: 5rem;
  }

  @media (min-width: ${gridBreakpoints.xl}) {
    height: 30px;
    width: 150px;
  }

  @media (min-width: ${gridBreakpoints.xxl}) {
    width: 160px;
  }
`;



class Header extends React.Component {

	render() {
		return (
			<PageHeader>
				<Container className="header-container">
					<HeaderLogo>
						<a href="#">
							<img src={mainLogo} alt="Spellabs"/>
						</a>
					</HeaderLogo>
					<NavListMenu />
				</Container>
			</PageHeader>
		);
	}
}

export default Header;
