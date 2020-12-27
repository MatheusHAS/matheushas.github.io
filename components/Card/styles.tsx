import styled, { keyframes } from "styled-components"
import { ReactComponent as ItsMe } from "./svgs/itsMe.svg"
import { ReactComponent as GithubIcon } from "./svgs/github.svg"
import { ReactComponent as LinkedInIcon } from "./svgs/linkedin.svg"

const MakeColorAnimation = (property: string = "fill") => keyframes`
    0%   { ${property}: #2d3040; }
    9%   { ${property}: #2d3840; }
    19%  { ${property}: #2d403e; }
    28%  { ${property}: #2d4030; }
    37%  { ${property}: #3b402d; }
    46%  { ${property}: #403d2d; }
    55%  { ${property}: #40342d; }
    64%  { ${property}: #402d2d; }
    73%  { ${property}: #402d35; }
    86%  { ${property}: #402d3f; }
    100% { ${property}: #372d40; }
`

const ImageAnimation = MakeColorAnimation()

export const Container = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 320px;
	padding: 24px;
	text-align: center;
	border: 1px solid ${(props) => props.theme.colors.text};
`

export const Name = styled.h1`
	font-size: 2em;
	margin-top: 8px;
	margin-bottom: 16px;
	font-weight: 600;

	strong {
		font-weight: 500;
	}
`

export const Title = styled.h2`
	font-size: 1.2em;
	margin-bottom: 16px;
	font-weight: 600;
`

export const Overview = styled.h2`
	font-size: 1em;
`

export const Image = styled(ItsMe)`
	width: 120px;
	height: 120px;

	path {
		animation-name: ${ImageAnimation};
		animation-duration: 3s;
		animation-iteration-count: infinite;
	}
`

export const IconLinkedIn = styled(LinkedInIcon)`
	width: ${(props) => props.theme.sizes.icon};
	height: ${(props) => props.theme.sizes.icon};

	svg {
		path {
			fill: ${(props) => props.theme.colors.text};
		}
	}
`

export const IconGithub = styled(GithubIcon)`
	width: ${(props) => props.theme.sizes.icon};
	height: ${(props) => props.theme.sizes.icon};

	svg {
		path {
			fill: ${(props) => props.theme.colors.text};
		}
	}
`

export const LinkedInLink = styled.a`
	display: flex;

	&:hover {
		svg {
			path {
				fill: #0077b7;
			}
		}
	}
`
export const GithubLink = styled.a`
	display: flex;
`

export const Socials = styled.ul`
	display: flex;
	margin-top: 32px;

	li {
		&:not(:last-child) {
			margin-right: 6px;
		}
	}
`
