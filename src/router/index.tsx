import { createBrowserRouter } from "react-router-dom";
//import PageAuth from "../pages/PageAuth";
import PageChat from "../pages/PageChat";
import PageChatUser from "../pages/PageChatUser";
import IndexChat from "../modules/chat/components/IndexChat";
import PageUsers from "../pages/PageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageChat />,
    errorElement: <p>Error</p>,
    children: [
      {
        index: true,
        element: <IndexChat />,
      },
      {
        path: ":userId",
        element: <PageChatUser />,
      },
    ],
  },
  {
    path: "/users",
    element: <PageUsers />,
  },
]);

export default router;
