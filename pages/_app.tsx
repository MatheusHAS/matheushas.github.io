import type { AppProps } from "next/app"
import Head from "next/head"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Reset } from "styled-reset"
import { theme } from "../styles/theme"
import "../styles/custom.scss"

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${(props: any) => props.theme.colors.custom.gray};
		color: ${(props: any) => props.theme.colors.text};
		display: flex;
		min-height: 100vh;
		align-items: center;
		font-family: "Roboto";
		justify-content: center;
		margin: 0 auto;
	}
`

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Reset />
				<GlobalStyle />
				<Head>
					<title>Matheus Azambuja - Software Engineer</title>
				</Head>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
