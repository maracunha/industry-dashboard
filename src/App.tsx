import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { App as AntdApp, Spin } from 'antd';
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
        <Suspense
          fallback={
            <Spin tip="Loading" size="large">
              <div className="content" />
            </Spin>
          }
        >
          <AntdApp>
            <Main />
          </AntdApp>
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
