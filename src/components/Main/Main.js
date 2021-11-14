import React from 'react';
import styled from 'styled-components';
import SectionMain from './sections/SectionMain';
import SectionNumbers from './sections/SectionNumbers';
import SectionResults from './sections/SectionResults';
import SectionNeed from './sections/SectionNeed';
import SectionCms from './sections/SectionCms';
import SectionLevels from './sections/SectionLevels';
import SectionSlider from './sections/SectionSlider';
import SectionPartners from './sections/SectionPartners';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PageMain = styled.main`
	padding-top: 80px;
`

class Main extends React.Component {
	componentDidMount() {
	  AOS.init({})
	}

	render() {
		return (
			<PageMain>
				<SectionMain />
				<SectionNumbers />
				<SectionResults />
				<SectionNeed />
				<SectionCms />
				<SectionLevels />
				<SectionSlider />
				<SectionPartners />
			</PageMain>
		)
	}
}

export default Main;
