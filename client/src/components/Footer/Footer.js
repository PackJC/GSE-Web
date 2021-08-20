import React from "react";
import {
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (

	<Container>
		<Row>
		<Column>
			<Heading>Category</Heading>
			<FooterLink href="#">Cartridges</FooterLink>
			<FooterLink href="#">Distillate</FooterLink>
			<FooterLink href="#">Edibles</FooterLink>
		</Column>
		<Column>
			<Heading>Customer Service</Heading>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Contact Us</FooterLink>
			<FooterLink href="#">Return Policy</FooterLink>
			<FooterLink href="#">Shipping Policy</FooterLink>
		</Column>
		<Column>
			<Heading>Partner Applications</Heading>
			<FooterLink href="#">Wholesale Application</FooterLink>
			<FooterLink href="#">Distributor Application</FooterLink>
		</Column>
    <Column>
    			<Heading>Social Media</Heading>
    			<FooterLink href="#">Instagram</FooterLink>
    			<FooterLink href="#">Reddit</FooterLink>
    			<FooterLink href="#">Snapchat</FooterLink>
    		</Column>
		</Row>
	</Container>
);
};
export default Footer;
