import React from 'react';
import styled from 'styled-components';
import Container from '../../../globalContainer';
import { mediaQueries } from '../../../globalContainer';
import gridBreakpoints from '../../../cssVar';
import sap from '../../../assets/images/logos/logo-sap.jpeg';
import bitrix from '../../../assets/images/logos/logo-bitrix.png';
import wordpress from '../../../assets/images/logos/logo-wordpress.png';

// Размеры устройств
const { sm, md, lg, xl } = gridBreakpoints;

// Обертка секции
const SectionCmsWrap = styled.section `
  background-color: var(--color-white);
  padding-top: 4rem;
  padding-bottom: 4rem;

  ${mediaQueries(lg, `
  	padding-top: 50px;	
  	padding-bottom: 50px;	
	`)}

  ${mediaQueries(xl, `
  	padding-top: 107px;	
		padding-bottom: 93px;
	`)}
`

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
		margin-bottom: 80px;
		font-size: 24px;
	`)}

  ${mediaQueries(xl, `
  	margin-bottom: 150px;  
  	
  	.topText {
  		margin-bottom: 15px;
  	}	
	`)}
`

// Список логотипов CMS
const LogoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  	${mediaQueries(md, `
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
  		align-items: center;
	`)}

    ${mediaQueries(lg, `
		padding: 0 50px;
	`)}

    ${mediaQueries(xl, `
		padding: 0 150px;
	`)}
`

// Лого
const LogoItem = styled.li`
	width: 15rem;
	
  	&:not(:last-child) {
	  margin-bottom: 8rem;
	}

  	${mediaQueries(sm, `
		width: 13rem;
			
		&:not(:last-child) {
		  margin-bottom: 5rem;
		}
	`)}

    ${mediaQueries(md, `
		width: 8rem;
			
		&:not(:last-child) {
		  margin-bottom: 4rem;
		}
		
		&:last-child {
			margin: 0 auto;
		}
	`)}

    ${mediaQueries(lg, `
		width: 230px;	
				
		&:not(:last-child) {
		  margin-bottom: 100px;
		}
		
		&:last-child {
			margin: 0 0 100px 0;
		}
	`)}
`

// Компонент секции с CMS
class SectionCms extends React.Component {
	constructor() {
		super();
		this.state = {
			title: {
				topText: 'ВЫ не привязаны к CMS-системам, ',
				bottomText: 'наше решение подходит к любой платформе'
			},
			logo: [
				{alt: 'bitrix', image: bitrix},
				{alt: 'sap', image: sap},
				{alt: 'wordpress', image: wordpress},
			]
		}
	}

	render() {
		return (
			<SectionCmsWrap>
				<Container className="section-container">
					<SectionTitle>
						<div className="topText">{this.state.title.topText}</div>
						<div className="bottomText">{this.state.title.bottomText}</div>
					</SectionTitle>
					<LogoList>
						{
							this.state.logo.map(item => {
								return (
									<LogoItem key={item.alt}>
										<img src={item.image} alt={item.alt}/>
									</LogoItem>
								)
							})
						}
					</LogoList>
				</Container>
			</SectionCmsWrap>
		)
	}
}

export default SectionCms;
