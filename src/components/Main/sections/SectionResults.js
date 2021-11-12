import React from 'react';
import styled from 'styled-components';
import Container from '../../../globalContainer';
import {mediaQueries} from '../../../globalContainer';
import gridBreakpoints from '../../../cssVar';
import saving from '../../../assets/images/saving.png';
import result from '../../../assets/images/result.png';

// Размеры устройств
const { sm, md, lg, xl, xxl } = gridBreakpoints;

// Обертка секции
const SectionResultsMain = styled.section`
	background-color: var(--color-white);
	padding-top: 4rem;
	padding-bottom: 4rem;

  ${mediaQueries(lg, `
  	padding-top: 50px;	
  	padding-bottom: 50px;
	`)}

  ${mediaQueries(xl, `
  	padding-top: 70px;	
  	padding-bottom: 135px;	
	`)}
`

// Заголовок
const SectionTitle = styled.h2`
  margin-top: 0;
	margin-bottom: 50px;
  font-size: 1.8rem;
  text-align: center;

  ${mediaQueries(sm, `
		font-size: 1.3rem;
	`)}

  ${mediaQueries(md, `
		font-size: 24px;
	`)}

  ${mediaQueries(xl, `
  	margin-bottom: 55px;  	
	`)}
`

// Обертка пунктов
const ContentList = styled.ul`
  ${mediaQueries(lg, `
  	padding: 0 40px;
	`)}

  ${mediaQueries(xl, `
  	padding: 0 100px;
	`)}
`

// Пункты
const ContentItem = styled.li`
  display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 3.5rem;

  ${mediaQueries(lg, `
  	flex-direction: row;
		justify-content: space-between;  	
  	margin-bottom: 60px;
  	
  	&.reverse {
				flex-direction: row-reverse;
			}  	
	`)}

  ${mediaQueries(lg, `
  	margin-bottom: 0;	
	`)}

  ${mediaQueries(xxl, `
  	padding-right: 60px;	
	`)}
`

// Блок с картинкой
const ImageWrap = styled.div`
	margin-bottom: 2rem;
	width: 16.5rem;

  ${mediaQueries(md, `
  	width: 10rem; 	
	`)}

  ${mediaQueries(lg, `
  	margin-bottom: 0;
  	width: auto; 	
	`)}
`

// Блок с текстом
const TextWrap = styled.div`
  display: flex;
	flex-direction: column;
	align-items: center;
	
	a {
    display: block;
		color: var(--color-blue-font);
    font-size: 1.2rem;
  }

  ${mediaQueries(md, `
		a {
			font-size: 0.7rem; 	
		}
	`)}

  ${mediaQueries(lg, `
		display: block;
		
		a {
			font-size: 14px; 	
		}
	`)}

  ${mediaQueries(xl, `		
		a {
			font-size: 18px; 	
		}
	`)}

  ${mediaQueries(xxl, `		
		a {
			font-size: 20px; 	
		}
	`)}
`

const Title = styled.div`
	margin-bottom: 1.5rem;
	font-size: 1.7rem;
	font-weight: 600;
	text-transform: uppercase;

  ${mediaQueries(md, `
  	margin-bottom: 0.5rem;
  	font-size: 1rem; 	
	`)}

  ${mediaQueries(lg, `
  	margin-bottom: 20px;
  	font-size: 35px; 	
	`)}

  ${mediaQueries(xl, `
  	margin-bottom: 20px;
  	font-size: 45px; 	
	`)}

  ${mediaQueries(xxl, `
  	margin-bottom: 20px;
  	font-size: 48px; 	
	`)}
`

const Text = styled.div`
	margin-bottom: 0.6rem;
	width: 20rem;
	font-size: 1.2rem;
	line-height: 2.3rem;
	text-align: center;

  ${mediaQueries(sm, `
  	width: 23rem; 	
	`)}

  ${mediaQueries(md, `
 		margin-bottom: 0.3rem;
 		width: 14rem;
  	font-size: 0.7rem; 	
  	line-height: 1.3rem;
	`)}

  ${mediaQueries(lg, `
 		margin-bottom: 10px;
    width: 320px;
    font-size: 14px;
    line-height: 30px;
  	text-align: start;
	`)}

  ${mediaQueries(xl, `
  	margin-bottom: 5px;
		width: 400px;
  	font-size: 18px;
    line-height: 35px;
	`)}
	
  ${mediaQueries(xxl, `
  	margin-bottom: 5px;
		width: 420px;
  	font-size: 20px;
    line-height: 35px;
	`)}
	
`

// Компонент секции "Наилучшие результаты в короткий срок"
class SectionResults extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'Наилучшие результаты в короткий срок',
			offer: [
				{title: 'Экономия', text: 'Используйте готовое решение для текст \n' +
						'трансформации портала в цифровое рыба\n' +
						'место от профессионалов', link: '#', img: saving},
				{title: 'Результат', text: 'Используйте готовое решение для текст \n' +
						'трансформации портала в цифровое рыба\n' +
						'место от профессионалов', link: '#', img: result},
			],
		}
	}

	render() {
		return (
			<SectionResultsMain>
				<Container className="section-container">
					<SectionTitle>{this.state.title}</SectionTitle>
					<ContentList>
						{
							this.state.offer.map((item, i) => {
								return (
									<ContentItem key={item.title} className={i % 2 !== 0 && 'reverse'}>
										<ImageWrap>
											<img src={item.img} alt={item.title}/>
										</ImageWrap>
										<TextWrap>
											<Title>{item.title}</Title>
											<Text>{item.text}</Text>
											<a href={item.link}>Подробнее</a>
										</TextWrap>
									</ContentItem>
								)
							})
						}
					</ContentList>
				</Container>
			</SectionResultsMain>
		)
	}
}

export default SectionResults;
