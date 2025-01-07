import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RouteIndex from "./routes";

const client = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={client}>
      <RouteIndex />
    </QueryClientProvider>
  );
}
