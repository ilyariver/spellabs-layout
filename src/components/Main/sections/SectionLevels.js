import React from 'react';
import styled from 'styled-components';
import Container from '../../../globalContainer';
import {mediaQueries} from '../../../globalContainer';
import gridBreakpoints from '../../../cssVar';

// Размеры устройств
const {md, lg, xl} = gridBreakpoints;

// Обертка секции
const SectionLevelsWrap = styled.section`
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
  padding-top: 140px;
    padding-bottom: 215px;

    .section-container {
      &:after {
        left: -1320px;
      }
    }
  	`)}

`;

// Заголовок секции
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
`;

// Список уровней
const LevelList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
`;

// Пункты списка
const LevelItem = styled.li`
  background-color: var(--color-blue-light);
  width: 26rem;
  height: 30rem;
  padding: 3.4rem;
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  
  &. .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 30px 30px;
    border-color: transparent transparent #007bff transparent;
  }
`;

// Фигура в пункте
// const Figure = styled.div`
// `;

// Заголовок
const Title = styled.h5`
  margin: 0 0 15px 0;
  font-size: 14px;
`;

// Текст
const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
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
					<SectionTitle>
						Для каждого уровня
						<span> цифровое пространство </span>
						имеет свой вид
					</SectionTitle>
					<LevelList>
						{
							this.state.levels.map(item => {
								return (
									<LevelItem key={item.title}>
										{/*<div className={item.figure}></div>*/}
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
