import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
	background-color: aliceblue;
`

class Footer extends React.Component {

	render() {
		return (
			<FooterWrap>Футер</FooterWrap>
		)
	}
}

export default Footer;