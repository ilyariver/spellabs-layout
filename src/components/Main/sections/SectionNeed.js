import React from 'react';
import styled from 'styled-components';
import Container from '../../../globalContainer';
import { mediaQueries } from '../../../globalContainer';
import gridBreakpoints from '../../../cssVar';
import support from '../../../assets/images/support.png';

// Размеры устройств
const { sm, md, lg, xl } = gridBreakpoints;

// Обертка секци
const SectionNeedWrap = styled.section `
  background-color: var(--color-gray);
  padding-top: 4rem;
  padding-bottom: 4rem;

  .section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${mediaQueries(md, `  	
		.section-container {
			display: block;
			align-items: start;
		}
	`)}

  ${mediaQueries(lg, `
  	padding-top: 50px;	
  	padding-bottom: 120px;
	`)}

  ${mediaQueries(xl, `
  	padding-top: 70px;
  	padding-bottom: 137px;	
	`)}
`;

// Заголовок
const SectionTitle = styled.h4`
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
  	margin-bottom: 47px;  	
	`)}
`;

// Контентная часть секции под заголовком
const Content = styled.div`
  ${mediaQueries(lg, `
  	display: flex;
		justify-content: space-between;
		align-items: center;
	`)}

  ${mediaQueries(xl, `
		justify-content: start;
	`)}
`;

// Блок с картинкой
const ImageWrap = styled.div`
  margin-bottom: 4rem;

  ${mediaQueries(md, `
  	margin: 0 auto;
		margin-bottom: 4rem;
  	width: 15rem; 	
	`)}

  ${mediaQueries(lg, `
  	margin-bottom: 0;
  	width: 430px;
	`)}

  ${mediaQueries(lg, `
  	margin: 0;
  	width: 50%;
	`)}

  ${mediaQueries(xl, `
  	width: auto;
	`)}
`;

// Список возможностей
const ContentList = styled.ul`
  ${mediaQueries(lg, `
  	display: flex;
  	flex-direction: column;
  	align-items: end;
	`)}

  ${mediaQueries(xl, `
  	padding-top: 25px;
    margin-left: 50px;
	`)}
`;

const Item = styled.li`
  margin-bottom: 3rem;

  ${mediaQueries(lg, `
  	margin-bottom: 0;
	`)}

  ${mediaQueries(xl, `
  	margin-bottom: 10px;
	`)}
`;

// Обертка заголовка и порядкого номера
const TitleWrap = styled.div`
  display: flex;
  align-items: center;

  ${mediaQueries(xl, `
  	margin-bottom: 10px;
	`)}
`;

// Порядковый номер пункта
const SerialNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-yellow-font);
  min-width: 3rem;
  min-height: 3rem;
  border-radius: 50%;
  margin-right: 1rem;
  font-size: 1.5rem;

  ${mediaQueries(md, `
		min-width: 1.5rem;
		min-height: 1.5rem;
		margin-right: 0.5rem;
  	font-size: 1rem; 	
	`)}

  ${mediaQueries(lg, `
		min-width: 25px;
		min-height: 25px;
		margin-right: 15px;
  	font-size: 16px; 	
	`)}

  ${mediaQueries(xl, `
		min-width: 40px;
		min-height: 40px;
		margin-right: 15px;
  	font-size: 20px; 	
	`)}
`;

// Текст заголовка
const Title = styled.h5`
  margin: 0;
  font-size: 1.7rem;
  text-transform: uppercase;

  ${mediaQueries(md, `
  	font-size: 1rem; 	
	`)}

  ${mediaQueries(lg, `
  	font-size: 16px; 	
	`)}

  ${mediaQueries(xl, `
  	font-size: 20px; 	
	`)}
`;

// Текст пункиа
const Text = styled.p`
  width: 22rem;
  color: var(--color-gray-font);
  font-size: 1.2rem;
  line-height: 2.3rem;

  ${mediaQueries(sm, `
  	width: 23rem; 	
	`)}

  ${mediaQueries(md, `
 		width: 14rem;
  	font-size: 0.7rem; 	
  	line-height: 1.3rem;
	`)}

  ${mediaQueries(lg, `
    width: 320px;
    font-size: 14px;
    line-height: 26px;
	`)}

  ${mediaQueries(xl, `
 		width: 460px;
  	margin-top: 0;
		font-size: 20px;
		line-height: 35px;
	`)}
`;


// Компонент секции "Это то, что вам нужно"
class SectionNeed extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'Это то, что вам нужно',
			dignityList: [
				{
					title: 'Полная интеграция', text: 'Используйте готовое решение для \n' +
						'трансформации портала в цифровое \n' +
						'рабочее место '
				},
				{
					title: 'Поддержка', text: 'Все будет гладко, как шелк наша служба \n' +
						'поддержки доступна 8/7 '
				},
				{
					title: 'Возможность развития', text: 'Копите деньги – покупайте дополнительные \n' +
						'блоки и дополняйте портал'
				},
			]
		};
	}

	render() {
		const {title, dignityList} = this.state;
		return (
			<SectionNeedWrap>
				<Container className="section-container">
					<SectionTitle
						data-aos="fade-up"
						data-aos-duration = "700">{title}</SectionTitle>
					<Content>
						<ImageWrap
							data-aos="fade-right"
							data-aos-duration = "700">
							<img src={support} alt={title}/>
						</ImageWrap>
						<ContentList
							data-aos-anchor-placement="center-bottom">
							{
								dignityList.map((item, i) => {
									return (
										<Item 
											key={item.title}
											data-aos="fade-left" 
											data-aos-delay={i * 400} 
											data-aos-duration = "1000"
											data-aos-easing="cubic-bezier(.175,.885,.32,1.275)">
											<TitleWrap>
												<SerialNumber>{i + 1}</SerialNumber>
												<Title>{item.title}</Title>
											</TitleWrap>
											<Text>{item.text}</Text>
										</Item>
									);
								})
							}
						</ContentList>
					</Content>
				</Container>
			</SectionNeedWrap>
		);
	}
}

export default SectionNeed;