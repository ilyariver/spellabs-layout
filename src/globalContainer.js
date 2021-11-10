import styled from 'styled-components';
import gridBreakpoints from './cssVar';

const Container = styled.div`  
	min-width: 320px;
	width: 100%;
	padding: 0 20px;
	margin: 0 auto;  

  @media (min-width: ${gridBreakpoints.sm}) {    
      width: 540px;
      padding: 0 40px;    
  }

  @media (min-width: ${gridBreakpoints.md}) {
      width: 720px;    
  }

  @media (min-width: ${gridBreakpoints.lg}) {
      width: 960px;    
  }

  @media (min-width: ${gridBreakpoints.xl}) {
      width: 1140px;    
  }

  @media (min-width: ${gridBreakpoints.xxl}) {
      width: 1320px;
  }
`

export default Container;