import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: black;
position: absolute;
bottom: 0;
width: 100%;
justify-content: center;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	max-height:20%;
	margin: 0 auto;
	border-top: 1px solid lightgray;
	margin-top: 10%;


	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
width: 200%;
`;


export const Row = styled.div`
display: grid;
max-width:100%;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-column-gap: 15%;


@media (max-width: 1000px) {
	display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;

}
`;

export const FooterLink = styled.a`
color: #A4C5AF;
font-size:1vw;
text-decoration: none;
margin:auto;
&:hover {
	color:  #A4C5AF;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size:1vw;
color: darkgray;
font-weight: bold;
`;
export const Copyright = styled.p`
font-size: 0.5vw;
color: #A4C5AF;
margin: auto;
`;
