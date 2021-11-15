import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import Container from '../../../globalContainer';
import {mediaQueries} from '../../../globalContainer';
import gridBreakpoints from '../../../cssVar';
import greenpeace from '../../../assets/images/icons/greenpeace.png';
import metalInvest from '../../../assets/images/icons/metallinvest.png';
import nike from '../../../assets/images/icons/nike.png';
import arrow from '../../../assets/images/icons/arrowr-right.svg';
import arrowToNext from '../../../assets/images/arrow2.svg';

// Размеры устройств
const {sm, md, lg, xl} = gridBreakpoints;

// Обертка секции
const SectionPartnersMain = styled.section`
  position: relative;
  background-color: var(--color-white);
  padding-top: 10rem;
  padding-bottom: 10rem;

  .section-container {
    overflow: hidden;
    width: 280px;
  }

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
    background-color: var(--color-white);
    height: 100%;
    transform: translateY(-25%);

    &:after {
      content: "";
      position: absolute;
      background-image: url(${arrow});
      background-repeat: no-repeat;
      background-size: 50%;
      background-position: center;
      width: 20px;
      height: 100%;
    }
  }

  .swiper-button-prev {
    left: -27px;

    &:after {
      transform: rotate(180deg);
    }
  }

  .swiper-button-next {
    right: -27px;
  }

  ${mediaQueries(sm, `
  	.swiper-button-prev, .swiper-button-next {
	  	width: 40px;

		&:after {
			background-size: 30%;
			width: 40px;
		}
	}

	.swiper-button-prev {
			left: -40px;
		}
	
		.swiper-button-next {			
			right: -40px;
		}
	`)}

  ${mediaQueries(md, `
  	padding-top: 5rem;
    padding-bottom: 8rem;

	.section-container {
		width: 550px;
	}

  	.swiper-button-prev, .swiper-button-next {
		transform: translateY(-13%);
		  &:after {
			display: block;
			}
	  }
	`)}

  ${mediaQueries(lg, `
		padding-top: 116px;
		padding-bottom: 210px;

		.section-container {
			width: 610px;
		}

		.swiper-button-prev, .swiper-button-next {
			&:after {
				background-size: 30%;
			}
		}
		}
	`)}

  ${mediaQueries(xl, `
		.section-container {
			width: 850px;
			padding: 0 40px;
		}

		.swiper-button-prev, .swiper-button-next  {
			transform: translateY(-15%);
		}
	`)}
`;

// Стрелка указывающая на следующий блок
const ArrowTo = styled.div`
  position: absolute;
  top: -84px;
  left: 50%;
  transform: translateX(-50%) !important;
  z-index: 4;

  ${mediaQueries(md, `
   	top: -40px;
	`)}
	
  ${mediaQueries(lg, `
   	top: -80px;
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
  	margin-bottom: 225px;  
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
		height: 1.9rem;
	`)}

  ${mediaQueries(lg, `
		height: 70px;
	`)}

  ${mediaQueries(xl, `
  	width: 83%;
  	height: 60px;
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
				{alt: 'nike', logo: nike},
				{alt: 'greenpeace', logo: greenpeace},
				{alt: 'metalInvest', logo: metalInvest},
			]
		};
	}

	render() {
		// install Swiper modules
		SwiperCore.use([Navigation]);

		return (
			<SectionPartnersMain
				id="partners">
				<ArrowTo>
					<img
						src={arrowToNext}
						alt="указатель"
						data-aos="fade-down"
						data-aos-delay="700"/>
				</ArrowTo>
				<Container className="section-container">
					<SectionTitle
						data-aos="fade-up"
						data-aos-duration="200">{this.state.title}</SectionTitle>
					<Swiper
						data-aos="zoom-out"
						data-aos-duration="700"
						data-aos-delay="600"
						data-aos-easing="cubic-bezier(.175,.885,.32,1.275)"
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
							this.state.preview.map((item, i) => {
								return (
									<SwiperSlide
										key={item.alt}
									>
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
