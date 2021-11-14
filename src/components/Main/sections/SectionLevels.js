import React from 'react';
import styled from 'styled-components';
import Container from '../../../globalContainer';
import { mediaQueries } from '../../../globalContainer';
import gridBreakpoints from '../../../cssVar';

// Размеры устройств
const { sm, md, lg, xl } = gridBreakpoints;

// Обертка секции
const SectionLevelsWrap = styled.section `
  position: relative;
  background-color: var(--color-blue);
  padding-top: 5rem;
  padding-bottom: 10rem;
  overflow: hidden;

  .section-container {
    position: relative;
  }

  ${mediaQueries(md, `
  	padding-top: 3rem;
		padding-bottom: 7rem;
	
		.section-container {
			&:after {
				bottom: -61rem;
				left: -52rem;
			}
		}	
	`)}

  ${mediaQueries(lg, `
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
	`)}

  ${mediaQueries(xl, `
  	padding-top: 76px;
    padding-bottom: 80px;

    .section-container {
      &:after {
        left: -1320px;
      }
    }
	`)}
`;

// Заголовок секции
const SectionTitle = styled.h2`
  position: relative;
  margin: 0 0 3rem;
  font-size: 3rem;
  line-height: 3.8rem;
  color: var(--color-white);
  font-weight: 400;
  z-index: 2;

  span {
    font-weight: 600;
  }

  ${mediaQueries(sm, `
		font-size: 2.5rem;
		line-height: 3rem;
	`)}

  ${mediaQueries(md, `
  	width: 20rem;
		margin: 0 0 1.5rem 0;
		font-size: 1.5rem;
		line-height: 2rem;
 `)}

  ${mediaQueries(lg, `
  	width: 620px;
		margin: 0 0 50px;
    font-size: 48px;
    line-height: 59px;
	 `)}

  ${mediaQueries(xl, `
		margin: 0 0 55px;
		font-size: 48px;
		line-height: 59px;
	`)}
`;

// Список уровней
const LevelList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);

  ${mediaQueries(md, `
		flex-direction: row;
  	align-items: start;
  	justify-content: space-between;
  	flex-wrap: wrap;
	`)}	
`;

// Пункты списка
const LevelItem = styled.li`
  background-color: var(--color-blue-light);
  width: 26rem;
  height: 30rem;
  padding: 2rem;
  border-radius: 0.7rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  .figure {
    margin-bottom: 1.6rem;
  }

  .triangle {
    position: relative;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 39px 39px;
    border-color: transparent transparent var(--color-white) transparent;
		transition: border 0.1s ease-in-out;

    &:after {
      content: "";
      position: absolute;
      top: 11px;
      left: -28px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 23px 23px;
      border-color: transparent transparent var(--color-blue-light) transparent;
      z-index: 2;
    }
  }

  .circle {
    width: 35px;
    height: 35px;
    background-color: var(--color-blue-light);
    border-radius: 50%;
    border: 5px solid var(--color-white);
		transition: border 0.1s ease-in-out;
  }

  .square {
    width: 35px;
    height: 35px;
    background-color: var(--color-blue-light);
    border: 5px solid var(--color-white);
		transition: border 0.2s ease-in-out;
  }

  ${mediaQueries(sm, `
		width: 19rem;
		height: 22rem;
		padding: 1.8rem;
		border-radius: 0.5rem;	
		
		.figure {
			margin-bottom: 1.2rem;
		}
	`)}  

  ${mediaQueries(md, `
		width: calc(100% / 2 - 0.4rem);
		height: 15rem;
		padding: 1.2rem;
		border-radius: 0.3rem;
		border: 5px solid var(--color-blue-light);
		transition: border 0.2s ease-in-out;
		
    	&:not(:last-child) {
			margin-bottom: 0.8rem;
		}
		
		&:last-child {
			margin: 0 auto;
			margin-bottom: 0.8rem;
		}
		    
    	.figure {
			margin-bottom: 0.9rem;
		}
		
		&:hover {
			border: 5px solid var(--color-yellow-font);
			.circle, .square {
				border: 5px solid var(--color-yellow-font);
			}
			.triangle {
				border-color: transparent transparent var(--color-yellow-font) transparent;
			}
		}
	`)}

  ${mediaQueries(lg, `
		width: calc(100% / 3 - 10px);
		height: 350px;
    border-radius: 8px;
		padding: 30px;		
		
		&:not(:last-child) {
			margin-bottom: 15px;
		}
		
		&:last-child {
			margin: 0;
			margin-bottom: 15px;
		}
		
		.figure {
			margin-bottom: 20px;
		}
	`)}

  ${mediaQueries(xl, `
		width: calc(100% / 3 - 10px);
		height: 465px;
    border-radius: 10px;
		padding: 35px 40px;
    
    .figure {
			margin-bottom: 25px;
		}	
		
		.triangle {
			border-width: 0 0 45px 45px;

			&:after {
				top: 10px;
				left: -35px;
				border-width: 0 0 30px 30px;
			}
		}
				
		.square {
			width: 46px;
			height: 46px;
		}
	
		.circle {
			width: 46px;
			height: 46px;
		}	
	`)}
`;

// Заголовок
const Title = styled.h3`
  margin: 0 0 1.5rem 0;
  font-size: 1.4rem;

  ${mediaQueries(sm, `
		margin: 0 0 0.5rem 0;
    font-size: 0.9rem;
	`)}

  ${mediaQueries(md, `
		margin: 0 0 0.5rem 0;
    font-size: 0.6rem;
	`)}

  ${mediaQueries(lg, `
		margin: 0 0 10px 0;
    font-size: 12px;
	`)}

  ${mediaQueries(xl, `
		margin: 0 0 12px 0;
    font-size: 20px;
	`)}
`;

// Текст
const Text = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2rem;

  ${mediaQueries(sm, `
  	margin-top: 0;
		font-size: 0.7rem;
  	line-height: 1.2rem;
	`)}

  ${mediaQueries(md, `
		font-size: 0.5rem;
  	line-height: 0.8rem;
	`)}

  ${mediaQueries(lg, `
		margin: 0;
    font-size: 11px;
  	line-height: 20px;
	`)}

  ${mediaQueries(xl, `
		line-height: 25px;
    font-size: 16px;
	`)}
`;

// Компонент секции "Уровни"
class SectionLevels extends React.Component {
	constructor() {
		super();
		this.state = {
			levels: [
				{
					title: 'Эмоциональный уровень', text: 'На эмоциональном уровне сотрудники \n' +
						'узнают новости компании и индустрии, \n' +
						'свершения, стратегические планы.', figure: 'circle',
				},
				{
					title: 'Рациональный уровень', text: 'На рациональном уровне осуществляется \n' +
						'вся основная рабочая деятельность и \n' +
						'общение.', figure: 'square',
				},
				{
					title: 'Материальный уровень', text: 'На материальном уровне сотрудники \n' +
						'получают информацию о зарплате, \n' +
						'отпусках и больничных, обучении, строят \n' +
						'планы своего карьерного развития.', figure: 'triangle',
				},
			]
		};
	}

	render() {

		return (
			<SectionLevelsWrap>
				<Container className="section-container">
					<SectionTitle
						data-aos="fade-up"
						data-aos-duration = "700">
						Для каждого уровня
						<span> цифровое пространство </span>
						имеет свой вид
					</SectionTitle>
					<LevelList
						data-aos-anchor-placement="center-bottom">
						{
							this.state.levels.map((item, i)=> {
								return (
									<LevelItem 
										key={item.title}
										data-aos="zoom-out" 
										data-aos-delay={i * 300} 
										data-aos-duration = "700"
										data-aos-easing="cubic-bezier(.175,.885,.32,1.275)">
										<div className={'figure ' + item.figure}></div>
										<Title>{item.title}</Title>
										<Text>{item.text}</Text>
									</LevelItem>
								);
							})
						}
					</LevelList>
				</Container>
			</SectionLevelsWrap>
		);
	}
}

export default SectionLevels;