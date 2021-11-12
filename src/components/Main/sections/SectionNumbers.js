import React from 'react';
import styled from 'styled-components';
import Container from '../../../globalContainer';
import {mediaQueries} from '../../../globalContainer';
import grid from '../../../assets/images/grid.svg'
import arrowDown from '../../../assets/images/arrow1.svg';
import gridBreakpoints from '../../../cssVar';

// Размеры устройств
const { sm, md, lg, xl, xxl } = gridBreakpoints;

// Обертка секции
const SectionNumbersWrap = styled.section`
	position: relative;
	background-color: var(--color-gray);
	padding-top: 10rem;
  padding-bottom: 10rem;
	font-size: 1.8rem;
	
	.section-container {
    position: relative;
    z-index: 3;
	}
	
	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		background-image: url(${grid});
		width: 100%;
		height: 100%;
	} 
	
	${mediaQueries(sm, `
		padding-top: 9rem;
		padding-bottom: 9rem;
		font-size: 1.3rem;
	`)}

  ${mediaQueries(md, `
		padding-top: 120px;
		padding-bottom: 120px;
		font-size: 24px;
	`)}

  ${mediaQueries(xl, `
		padding-top: 171px;
		padding-bottom: 171px;
		font-size: 24px;
	`)}
`

// Стрелка от кнопки
const ArrowFrom = styled.div`
	position: absolute;
	top: -10rem;
	left: 12rem;
	z-index: 4;
	
	img {
    width: 7rem;
	}
`

// Обертка заголовка текста
const TitleWrap = styled.div`
	margin-bottom: 3rem;
	
  ${mediaQueries(sm, `
		margin-bottom: 2rem;
	`)}

  ${mediaQueries(lg, `
		margin-bottom: 1rem;
	`)}

  ${mediaQueries(xl, `
		margin-bottom: 35px;
	`)}
`

// Заголовок
const SectionTitle = styled.h3`
	margin-top: 0;
  font-size: 1.8rem;
	text-align: center;

  ${mediaQueries(sm, `
		font-size: 1.3rem;
	`)}

  ${mediaQueries(md, `
		font-size: 24px;
	`)}

  ${mediaQueries(xl, `
  	margin-bottom: 15px;  	
	`)}
`

// Текст под заголовком
const Text = styled.p`
	margin-top: 0;
	text-align: center;
`

// Блок с решениями
const Solutions = styled.ul`
  display: flex;
	flex-direction: column;

  ${mediaQueries(lg, `
  	flex-direction: row;
  	justify-content: space-between;
	`)}

  ${mediaQueries(xl, `
  	padding: 0 85px;
	`)}
`

// Решение
const SolutionItem = styled.li`
  display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 4rem;
	
  .title {
    margin-bottom: 1rem;
    color: var(--color-blue-font);
		font-weight: 600;
		font-size: 7.6rem;
	}

  ${mediaQueries(sm, `
  	margin-bottom: 3rem;
  	
		.title {
		   margin-bottom: 0;
			font-size: 6.7rem;
		}
	`)}

  ${mediaQueries(md, `
  	margin-bottom: 60;
  	
		.title {
			font-size: 120px;
		}
	`)}

  ${mediaQueries(lg, `
  	width: 270px;
  	margin-bottom: 0;
  	
		.title {
			font-size: 70px;
		}
	`)}

  ${mediaQueries(xl, `
  	margin-bottom: 10px;
  	
		.title {
			margin-bottom: 10px;
			font-size: 84px;
		}
	`)}
`

// Компонент с сеткой
class SectionNumbers extends React.Component {
	constructor() {
		super();

		this.state = {
			titleText: 'Используйте готовое решение от профессионалов',
			subTitleText: 'Это сэкономит кучу времени и даст кучу всего',
			solutions: [
				{title: '+20', description: 'Готовые модули'},
				{title: '10', description: 'Используйте готовое'},
				{title: '+5K', description: 'Используйте готовое'},
			]
		}
	}

	render() {
		return (
			<SectionNumbersWrap>
				{/*<ArrowFrom>*/}
				{/*	<img src={arrowDown} alt="указатель"/>*/}
				{/*</ArrowFrom>*/}
				<Container className="section-container">
					<TitleWrap>
						<SectionTitle>{this.state.titleText}</SectionTitle>
						<Text>{this.state.subTitleText}</Text>
					</TitleWrap>
					<Solutions>
							{
								this.state.solutions.map(item => {
									return (
										<SolutionItem key={item.title}>
											<div className="title">{item.title}</div>
											<div className="description">{item.description}</div>
										</SolutionItem>
									)
								})
							}
					</Solutions>
				</Container>
			</SectionNumbersWrap>
		)
	}
}

export default SectionNumbers;
