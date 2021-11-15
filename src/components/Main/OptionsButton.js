import React from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import gridBreakpoints from '../../cssVar';
import { mediaQueries } from '../../globalContainer';
import { Link, animateScroll as scroll } from 'react-scroll';
// Размеры устройств
const { sm, md, lg, xl } = gridBreakpoints;

const ButtonWrap = styled.div`
 .button {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 20rem;
   position: relative;
   background-color: var(--color-blue-font);
   padding: 0 3.5rem;
   border: none;
   border-radius: 50px;
   line-height: 4.5rem;
   color: var(--color-white);
   font-size: 1rem;
   white-space: nowrap;
   z-index: 5;

   ${mediaQueries(sm, `
		width: 15rem;
		padding: 0 2rem;
		line-height: 3.6rem;
		font-size: 0.9rem;
	`)}

   ${mediaQueries(md, `
		width: 10.9rem;
		padding: 0 0.4rem;
		line-height: 2.5rem;
		font-size: 0.7rem;
		transition: background-color 0.15s ease-in, transform 0.2s ease-in;

		&:hover {
			background-color: ${lighten(0.020, '#3026FA')};
			transform: scale(1.1);
		}
	`)}

   ${mediaQueries(lg, `
		width: 340px;
		padding: 0 20px;
		line-height: 75px;
		font-size: 22px;
		cursor: pointer;
	`)}

   ${mediaQueries(xl, `
		width: 320px;
		padding: 0 20px;
    	line-height: 65px;
		font-size: 20px;`
   )}
 }
`

class OptionsButton extends React.Component {

	render() {

		return (
			<ButtonWrap>
				<Link
					className="button"
					data-aos="zoom-out"
					data-aos-duration="700"
					data-aos-delay="500"
					activeClass="active"
					spy={true}
					smooth={true}
					duration={1000}
					offset={-70}
					to="section-numbers">
					<span>{this.props.buttonTitle || "Кнопка"}</span>
				</Link>
			</ButtonWrap>
		)
	}
}

export default OptionsButton;
