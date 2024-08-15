import './App.css';
import './resources/styles/custom.scss';
import MainLayout from './components/Layout';
import TablePage from './containers/Table';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DetailPage from './containers/Detail';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout title='Hello'>Hello world!</MainLayout>,
    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
    {
      path: "/table",
      element: <TablePage />,
    },
  ]);

  return (
    <div id={"app-main"} className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
