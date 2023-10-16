"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0d47a1",
    },
    secondary: {
      main: "#1a237e",
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
