import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Login } from "./pages/Login";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ModeToggle />
      <Login />
    </ThemeProvider>
  );
}
