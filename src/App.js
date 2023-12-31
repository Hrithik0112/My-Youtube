import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/storeMain";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Results from "./components/Results";

import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: [<Head />, <Body/>],
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path : "results/:searchQueary",
        element : <Results/>
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* 
        Header
        Sidebar
          Mnuitems
        Body
          butonlist
          viedocontainer
            videocard
       */}
        {/* <Head /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
