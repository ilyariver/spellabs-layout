import React from 'react';
import styled from 'styled-components';
import SectionMain from './sections/SectionMain';
import SectionNumbers from './sections/SectionNumbers';
import SectionResults from './sections/SectionResults';
import SectionNeed from './sections/SectionNeed';
import SectionCms from './sections/SectionCms';
import SectionLevels from './sections/SectionLevels';
const PageMain = styled.main`
	padding-top: 80px;
`

class Main extends React.Component {
	render() {
		return (
			<PageMain>
				<SectionMain />
				<SectionNumbers />
				<SectionResults />
				<SectionNeed />
				<SectionCms />
				<SectionLevels />
			</PageMain>
		)
	}
}

export default Main;
