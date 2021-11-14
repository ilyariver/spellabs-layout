import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Container from '../../../globalContainer';
import { mediaQueries } from '../../../globalContainer';
import gridBreakpoints from '../../../cssVar';
import arrowRight from '../../../assets/images/icons/arrow-elipse.svg'

// Размеры устройств
const { sm, md, lg, xl, xxl } = gridBreakpoints;

// Обертка секции
const SectionSliderMain = styled.section `
  background-color: var(--color-gray);
  padding-top: 4rem;
  padding-bottom: 4rem;
  overflow: hidden;
	
	// swiper
  .swiper-container {
		overflow: visible;
	}
	
	.swiper-button-next, .swiper-button-prev {
		&::after {
      		display: none;			
		}    
	}  

  ${mediaQueries(md, `
  	padding-top: 50px;	
  	padding-bottom: 50px;
  	
  	.swiper-button-next, .swiper-button-prev {
			&::after {
				display: block;
				content: "";
				position: absolute;
				background-image: url(${arrowRight});
				background-repeat: no-repeat;
				background-color: var(--color-slide-button);
				background-position: center;
				min-width: 50px;
				min-height: 50px;
				border-radius: 50%;
			}
		}
		
		.swiper-button-prev {
			&::after {
				left: -40px;
				transform: rotate(180deg);
			}
		}

		.swiper-button-next {
			&::after {
				right: -40px;
			}
		}
		
		.swiper-slide {
  		display: flex;
    	justify-content: center;
  	}
	`)}
	
	${mediaQueries(lg, `
		.swiper-button-prev {
			&:hover {
				&::after {
					transform: rotate(180deg) scale(1.1);			
				}
			}
			&::after {
				transition: transform 0.2s ease-in;
				left: -30px;				
			}			
		}
		
  		.swiper-button-next {
			&:hover {
				&::after {
					transform: scale(1.1);
				}
			}
			&::after {
				transition: transform 0.2s ease-in;
				right: -30px;
			}
		}
	`)}

  ${mediaQueries(xl, `
  	padding-top: 70px;	
  	padding-bottom: 187px;
  	
  	.swiper-button-next, .swiper-button-prev {
			&::after {
				min-width: 58px;
				min-height: 58px;
			}
		}
		
		.swiper-button-prev {
			&::after {
				left: 10px;
			}
		}
		
  	.swiper-button-next {
			&::after {
				right: 10px;
			}
		}
		
		.swiper-slide {
  		display: flex;
    	justify-content: center;
  	}	
  	
  	.swiper-slide.swiper-slide-prev {
    	justify-content: flex-end;
  	}	
  	.swiper-slide.swiper-slide-next {
    	justify-content: flex-start;
  	}	
	`)}
`;

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
  	padding-top: 30px;	
	`)}
`;

const SlideItem = styled.div`
  background-color: var(--color-white);
  height: 29rem;
  border-radius: 0.7rem;
	
  ${mediaQueries(sm, `
		height: 20rem;
	`)}

  ${mediaQueries(md, `
  	width: 83%;
		height: 13rem;
	`)}

  ${mediaQueries(lg, `
  	width: 83%;
		height: 13rem;
	`)}

  ${mediaQueries(xl, `
  	width: 83%;
  	height: 550px;
  	border-radius: 20px;
	`)}
`;


// Компонент секции со слайдером
class SectionSlider extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'Посмотрите какая красота',
			preview: [
				{},
				{},
				{},
				{},
				{},
				{},
			]
		};
	}

	render() {
	// install Swiper modules
		SwiperCore.use([Navigation]);

		return (
			<SectionSliderMain>
				<Container className="section-container">
					<SectionTitle
						data-aos="fade-up"
						data-aos-duration = "700">{this.state.title}</SectionTitle>
					<Swiper
						data-aos="zoom-out" 
						data-aos-delay="400" 
						data-aos-duration = "700"
						data-aos-anchor-placement="center-bottom"
						spaceBetween={50}
						slidesPerView={1}
						navigation={true}
						breakpoints={{
							750: {
								spaceBetween: 5
							}
						}}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
					>
						{
							this.state.preview.map((item, i) => {
								return (
									<SwiperSlide 
										key={i}
										>
										<SlideItem></SlideItem>
									</SwiperSlide>
								);
							})
						}
					</Swiper>

				</Container>
			</SectionSliderMain>
		);
	}
}

export default SectionSlider;