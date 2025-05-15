
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/market" element={<NotFound />} />
          <Route path="/farmers" element={<NotFound />} />
          <Route path="/how-it-works" element={<NotFound />} />
          <Route path="/login" element={<NotFound />} />
          <Route path="/register" element={<NotFound />} />
          <Route path="/cart" element={<NotFound />} />
          <Route path="/category/:id" element={<NotFound />} />
          <Route path="/farmer/:id" element={<NotFound />} />
          <Route path="/product/:id" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
