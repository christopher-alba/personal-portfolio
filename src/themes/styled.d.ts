// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      primaryLight: string;
      primaryHover: string;
      dropShadow: string;
      secondary: string;
      secondaryHover: string;
      tertiary: string;
      tertiary2: string;
      tertiary3: string;
      tertiary4: string;
      tertiary5: string;
      quaternary: string;
    };
  }
}
