import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Container from '../../../globalContainer';
import {mediaQueries} from '../../../globalContainer';
import gridBreakpoints from '../../../cssVar';
import greenpeace from '../../../assets/images/icons/greenpeace.png';
import metalInvest from '../../../assets/images/icons/metallinvest.png';
import nike from '../../../assets/images/icons/nike.png';
import arrow from '../../../assets/images/icons/arrowr-right.svg';

// Размеры устройств
const {sm, md, lg, xl, xxl} = gridBreakpoints;

// Обертка секции
const SectionPartnersMain = styled.section`
  background-color: var(--color-white);
  padding-top: 4rem;
  padding-bottom: 10rem;
	
	.swiper-container {
		position: relative;
		overflow: visible;
		
		&:after, &:before {
			content: "";
			position: absolute;
			top: 0;
			background-color: var(--color-slide-button);
			height: 100%;
			width: 2px;
			z-index: 5;
		}

    &:after {
      left: 0;			
		}

    &:before {
			right: 0;
    }
	}
	
	.swiper-button-prev, .swiper-button-next {
		&:after {
			content: "";
			position: absolute;
			background-image: url(${arrow});
			background-repeat: no-repeat;
      background-color: var(--color-white);
			background-size: 50%;
			background-position: center;
			width: 4rem;
			height: 4rem;
		}
	}
	
	.swiper-button-prev {
		left: -3rem;
		&:after {
			transform: rotate(180deg);
		}
	}

  .swiper-button-next {
    right: -3rem;
  }

  ${mediaQueries(sm, `
  .swiper-button-prev, .swiper-button-next {
			&:after {
				background-size: 10%;
			}
		}
		.swiper-button-prev {
			background-position: right;
			left: -2.5rem;
			
			&:after {
				background-position: 22px;
			}
		}
	
		.swiper-button-next {
			right: -2.5rem;
			
			&:after {
				background-position: 22px;
			}
		}
	`)}

  ${mediaQueries(md, `
	`)}

  ${mediaQueries(lg, `
		padding-top: 110px;
		padding-bottom: 210px;
	`)}
`;

// Заголовок
const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 10rem;
  font-size: 1.8rem;
  text-align: center;	
	

  ${mediaQueries(sm, `
    margin-bottom: 10rem;
		font-size: 1.3rem;
	`)}

  ${mediaQueries(md, `
  	margin-bottom: 5rem;
		font-size: 24px;
	`)}

  ${mediaQueries(lg, `
  	margin-bottom: 150px;  
		font-size: 24px;
	`)}

  ${mediaQueries(xl, `
  	margin-bottom: 150px;  
  	padding-top: 30px;	
	`)}
`;

const SlideItem = styled.div`
  background-color: var(--color-white);
  height: 7rem;
	width: 100%;
  border-radius: 0.7rem;
  display: flex;
  justify-content: center;
	
  ${mediaQueries(sm, `
		height: 5rem;
	`)}

  ${mediaQueries(md, `
		height: 3rem;
	`)}

  ${mediaQueries(lg, `
		height: 80px;
	`)}

  ${mediaQueries(xl, `
  	width: 83%;
  	height: 80px;
  	border-radius: 20px;
	`)}
`;


// Компонент секции со слайдером
class SectionPartners extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'Более 15 лет на рынке it-решений',
			preview: [
				{alt:'nike', logo: nike},
				{alt:'greenpeace', logo: greenpeace},
				{alt:'metalInvest', logo: metalInvest},
			]
		};
	}

	render() {
	// install Swiper modules
		SwiperCore.use([Navigation]);

		return (
			<SectionPartnersMain>
				<Container className="section-container">
					<SectionTitle>{this.state.title}</SectionTitle>
					<Swiper
						spaceBetween={50}
						loop={true}
						slidesPerView={1}
						navigation={true}
						breakpoints={{
							754: {
								spaceBetween: 5,
								slidesPerView: 3
							}
						}}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
					>
						{
							this.state.preview.map(item => {
								return (
									<SwiperSlide key={item.alt}>
										<SlideItem>
											<img src={item.logo} alt={item.alt}/>
										</SlideItem>
									</SwiperSlide>
								);
							})
						}
					</Swiper>

				</Container>
			</SectionPartnersMain>
		);
	}
}

export default SectionPartners;
