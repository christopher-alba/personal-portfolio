// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      primaryHover: string;
      dropShadow: string;
      secondary: string;
      secondaryHover: string;
      tertiary: string;
      tertiary2: string;
      quaternary: string;
    };
  }
}
