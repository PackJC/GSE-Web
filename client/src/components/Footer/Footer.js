import React from "react";
import {
Container,
Row,
Column,
FooterLink,
Heading,
Copyright
} from "./FooterStyles";

const Footer = () => {
return (
	<Container>
		<Row>
		<Column>
			<Heading>Important Links</Heading>
			<FooterLink href="/">Shop</FooterLink>
			<FooterLink href="/knowledge">Knowledge Base</FooterLink>

		</Column>
		<Column>
			<Heading>Customer Service</Heading>
			<FooterLink href="/about">About Us</FooterLink>
		</Column>
		<Column>
			<Heading>Policies</Heading>
			<FooterLink href="/privacy">Privacy Policy</FooterLink>

			<FooterLink href="/return">Return Policy</FooterLink>
			<FooterLink href="/shipping">Shipping Policy</FooterLink>		</Column>
    <Column>
    			<Heading>Social Media</Heading>
    			<FooterLink href="https://www.instagram.com/greatsmokyextracts">Instagram</FooterLink>
    			<FooterLink href="https://www.reddit.com/u/greatsmokyextracts">Reddit</FooterLink>
    		</Column>
		</Row>
		<Copyright> © 2021 Great Smoky Extracts </Copyright>
	</Container>
);
};
export default Footer;
