import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Interconexao from "./pages/Interconexao";
import SMSMassa from "./pages/SMSMassa";
import QuemSomos from "./pages/QuemSomos";
import NotFound from "./pages/NotFound";


import Terms from "./pages/Terms";
import Privacidade from "./pages/Privacidade";



const queryClient = new QueryClient();

// Main App component with routing
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/interconexao" element={<Interconexao />} />
          <Route path="/sms-massa" element={<SMSMassa />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="/privacidade" element={<Privacidade />} />         
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
