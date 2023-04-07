import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { App as AntdApp } from 'antd';
import Main from './pages/Main';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AntdApp>
          <Main />
        </AntdApp>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
