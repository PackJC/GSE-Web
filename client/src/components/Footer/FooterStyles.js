import styled from 'styled-components';

export const Box = styled.div`
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
flex-direction: column;
display: grid;
margin-left: 15%;
margin-right: 15%;
`;


export const Row = styled.div`
display: grid;
max-width:100%;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(4, 1fr);



@media (max-width: 1000px) {
	display: grid;
  grid-template-columns: repeat(4, 1fr);

}
`;

export const FooterLink = styled.a`
color: #A4C5AF;
font-size:1vw;
margin: 0;
padding: 0;
&:hover {
	color:  #A4C5AF;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size:1.5vw;
color: darkgray;
font-weight: bold;
`;
export const Copyright = styled.p`
font-size: 1vw;
color: #A4C5AF;
margin: auto;
`;
