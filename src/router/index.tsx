import { createBrowserRouter } from "react-router-dom";
//import PageAuth from "../pages/PageAuth";
import PageChat from "../pages/PageChat";
import PageChatUser from "../pages/PageChatUser";
import IndexChat from "../modules/chat/components/IndexChat";
import PageUsers from "../pages/PageUsers";
import Root from "../pages/Root";
import PageAuth from "../pages/PageAuth";
import RootChat from "../pages/RootChat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Error</p>,
    children: [
      {
        index: true,
        element: <PageAuth />,
      },
      {
        path: "chat/",
        element: <RootChat />,
        children: [
          {
            path: "",
            element: <PageChat />,
            children: [
              {
                index: true,
                element: <IndexChat />,
              },
              {
                path: ":username",
                element: <PageChatUser />,
              },
            ],
          },
          {
            path: "users",
            element: <PageUsers />,
          },
        ],
      },
    ],
  },
]);

export default router;
