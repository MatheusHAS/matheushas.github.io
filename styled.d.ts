// import original module declaration
import "styled-components"

// and extend it
declare module "styled-components" {
	export interface DefaultTheme {
		borderRadius: string
		sizes: {
			icon: string
		}
		colors: {
			main?: string
			secondary?: string
			background?: string
			text?: string
			custom?: any
		}
	}
}
