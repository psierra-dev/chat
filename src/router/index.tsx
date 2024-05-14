import { createBrowserRouter } from "react-router-dom";
import PageAuth from "../pages/PageAuth";
import PageChat from "../pages/PageChat";
import PageChatUser from "../pages/PageChatUser";
import IndexChat from "../modules/chat/components/IndexChat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageAuth />,
  },
  {
    path: "chat/",
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
]);

export default router;
