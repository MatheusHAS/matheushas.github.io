import React from "react"

import {
	Container,
	Name,
	Overview,
	Title,
	Image,
	Socials,
	GithubLink,
	IconGithub,
	LinkedInLink,
	IconLinkedIn,
} from "./styles"

export const Card = () => {
	return (
		<Container>
			<Image />
			<Name>
				Matheus <strong>Azambuja</strong>
			</Name>
			<Title>Software engineer, Front-End and Back-End Developer.</Title>
			<Overview>
				Sou um desenvolvedor que ama oque faz. Se preciso fazer mais de
				uma vez, isso provavelmente será automatizado.
			</Overview>
			<Socials>
				<li>
					<LinkedInLink
						href={"https://www.linkedin.com/in/matheusazambuja/"}
						target="_blank"
					>
						<IconLinkedIn />
					</LinkedInLink>
				</li>
				<li>
					<GithubLink
						href={"https://github.com/MatheusHAS/"}
						target="_blank"
					>
						<IconGithub />
					</GithubLink>
				</li>
			</Socials>
		</Container>
	)
}
