import React from 'react';
import styled from 'styled-components';
import Container from '../../../globalContainer';
import OptionsButton from '../OptionsButton';
import arrowDown from '../../../assets/images/arrow1.svg';
import gridBreakpoints from '../../../cssVar';
import backImg from '../../../assets/images/header-img.png';

const SectionMainWrap = styled.section`
	position: relative;
  background-color: var(--color-blue);
  padding-top: 5rem;
  padding-bottom: 10rem;
	overflow: hidden;
	
	.section-container {
		position: relative;
		
    &:after {
      content: "";
      position: absolute;
      background-image: var(--color-blue-gradient);
      width: 80rem;
      height: 80rem;
      bottom: -53rem;
      left: -47rem;
      transform: rotate(40deg);
    }
	}
	
	@media (min-width: ${gridBreakpoints.md}) {
    padding-top: 3rem;
    padding-bottom: 7rem;

    .section-container {
      &:after {
        bottom: -61rem;
        left: -52rem;
      }
    }
	}

  @media (min-width: ${gridBreakpoints.lg}) {
    padding-top: 100px;
    padding-bottom: 200px;
		
    .section-container {
      &:after {
        width: 2250px;
        height: 2250px;
        bottom: -1706px;
        left: -1510px;
        transform: rotate(32deg);
      }
    }
  }

  @media (min-width: ${gridBreakpoints.xl}) {
    padding-top: 140px;
    padding-bottom: 215px;

    .section-container {
      &:after {
        left: -1320px;
      }
    }
  }
`

const SectionTitle = styled.h1`
	position: relative;
	margin: 0 0 3rem;
  width: 27rem;
  font-size: 3rem;
  line-height: 3.8rem;
  color: var(--color-white);
	font-weight: 400;
	z-index: 2;
	
	span {
		font-weight: 600;
	}
	
	@media (min-width: ${gridBreakpoints.sm}) {
    width: 21rem;
    font-size: 2rem;
    line-height: 3rem;
	}

  @media (min-width: ${gridBreakpoints.md}) {
    width: 16rem;
    margin: 0 0 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }
	
	@media (min-width: ${gridBreakpoints.lg}) {
    width: 580px;
    margin: 0 0 30px;
    font-size: 55px;
    line-height: 70px;
	}

  @media (min-width: ${gridBreakpoints.lg}) {
    width: 510px;
    margin: 0 0 30px;
    font-size: 48px;
    line-height: 59px;
  }
`


// Блок с изображением
const SectionImage = styled.div`
	display: none;
	position: absolute;
	right: -18rem;
	top: 0;
	width: 25rem;
	z-index: 1;
	
	@media (min-width: ${gridBreakpoints.md}) {
    right: -11rem;
    width: 15rem;
	}
	
	@media (min-width: ${gridBreakpoints.lg}) {
		display: block;
    top: -30px;
    right: -90px;
    width: 560px;
	}

  @media (min-width: ${gridBreakpoints.xl}) {
    top: -63px;
    right: -70px;
    width: 600px;
  }

  @media (min-width: ${gridBreakpoints.xxl}) {
    right: 80px;
  }
`

class SectionMain extends React.Component {

	render() {
		return (
			<SectionMainWrap>
				<Container className="section-container">
					<SectionTitle>
						Трансформируйте
						свой портал
						в&nbsp;<span>цифровое рабочее место</span>
					</SectionTitle>
					<SectionImage>
						<img src={backImg} alt="Изображение"/>
					</SectionImage>
					<OptionsButton buttonTitle={"Начать трансформацию"} />
				</Container>
			</SectionMainWrap>
		)
	}
}

export default SectionMain;
