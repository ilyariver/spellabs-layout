import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Container from '../../../globalContainer';
import { mediaQueries } from '../../../globalContainer';
import gridBreakpoints from '../../../cssVar';

// Размеры устройств
const { sm, md, lg, xl, xxl } = gridBreakpoints;

// Обертка секции
const SectionSliderMain = styled.section`
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
	`)}
`;

const SlideItem = styled.div`
	background-color: gray;
	width: 180px;
    height: 290px;
`


// Компонент секции со слайдером
class SectionSlider extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'Посмотрите какая красота',
		};
	}

	render() {
		return (
			<SectionSliderMain>
				<Container className="section-container">
					<SectionTitle>{this.state.title}</SectionTitle>
					<Swiper
						spaceBetween={50}
						slidesPerView={3}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
					>
						<SwiperSlide>
							<SlideItem></SlideItem>
						</SwiperSlide>
						<SwiperSlide>
							<SlideItem></SlideItem>
						</SwiperSlide>
						<SwiperSlide>
							<SlideItem></SlideItem>
						</SwiperSlide>
						<SwiperSlide>
							<SlideItem></SlideItem>
						</SwiperSlide>
						<SwiperSlide>
							<SlideItem></SlideItem>
						</SwiperSlide>
						<SwiperSlide>
							<SlideItem></SlideItem>
						</SwiperSlide>
					</Swiper>
				</Container>
			</SectionSliderMain>
		);
	}
}

export default SectionSlider;