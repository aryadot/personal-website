import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </TooltipProvider>
  );
}

export default App;
