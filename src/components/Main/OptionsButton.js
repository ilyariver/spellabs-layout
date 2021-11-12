import React from 'react';
import styled from 'styled-components';
import gridBreakpoints from '../../cssVar';

const Button = styled.a`
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

  @media (min-width: ${gridBreakpoints.sm}) {
		width: 15rem;
		padding: 0 2rem;
		line-height: 3.6rem;
		font-size: 0.9rem;
	}

  @media (min-width: ${gridBreakpoints.md}) {
    width: 10.9rem;
    padding: 0 0.4rem;
    line-height: 2.5rem;
    font-size: 0.7rem;
	}
	
  @media (min-width: ${gridBreakpoints.lg}) {{
		width: 340px;
		padding: 0 20px;
		line-height: 75px;
		font-size: 22px;
		cursor: pointer;
	}
		
	@media (min-width: ${gridBreakpoints.xl}) {{
		width: 320px;
		padding: 0 20px;
    line-height: 65px;
		font-size: 20px;
	}		
`

class OptionsButton extends React.Component {

	render() {

		return (
			<Button>
				<span>{this.props.buttonTitle || "Кнопка"}</span>
			</Button>
		)
	}
}

export default OptionsButton;
