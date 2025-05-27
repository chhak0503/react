import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main/MainPage";
import { HelloPage } from "../pages/introduction/HelloPage";
import { DirectionPage } from "../pages/introduction/DirectionPage";
import { ListPage } from "../pages/market/ListPage";
import { StoryPage } from "../pages/croptalk/StoryPage";
import { GrowPage } from "../pages/croptalk/GrowPage";
import { SchoolPage } from "../pages/croptalk/SchoolPage";
import { InfoPage } from "../pages/event/InfoPage";
import { NoticePage } from "../pages/community/NoticePage";
import { MenuPage } from "../pages/community/MenuPage";
import { ChefPage } from "../pages/community/ChefPage";
import { QnaPage } from "../pages/community/QnaPage";
import { FaqPage } from "../pages/community/FaqPage";
import { LoginPage } from "../pages/user/LoginPage";
import { TermsPage } from "../pages/user/TermsPage";
import { RegisterPage } from "../pages/user/RegisterPage";
import { AdminMainPage } from "../pages/admin/AdminMainPage";
import { lazy, Suspense } from "react";

// prettier-ignore
const AdminProductRegisterPage = lazy(() =>  import("../pages/admin/product/RegisterPage"));
const BoardListPage = lazy(() => import("../pages/board/ListPage"));
const BoardWritePage = lazy(() => import("../pages/board/WritePage"));
const BoardViewPage = lazy(() => import("../pages/board/ViewPage"));
const BoardModifyPage = lazy(() => import("../pages/board/ModifyPage"));

// 라우터 생성
const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },

  { path: "/introduction/hello", element: <HelloPage /> },
  { path: "/introduction/direction", element: <DirectionPage /> },

  { path: "/market/list", element: <ListPage /> },

  { path: "/croptalk/story", element: <StoryPage /> },
  { path: "/croptalk/grow", element: <GrowPage /> },
  { path: "/croptalk/school", element: <SchoolPage /> },

  { path: "/event/info", element: <InfoPage /> },

  { path: "/community/notice", element: <NoticePage /> },
  { path: "/community/menu", element: <MenuPage /> },
  { path: "/community/chef", element: <ChefPage /> },
  { path: "/community/qna", element: <QnaPage /> },
  { path: "/community/faq", element: <FaqPage /> },

  { path: "/user/login", element: <LoginPage /> },
  { path: "/user/terms", element: <TermsPage /> },
  { path: "/user/register", element: <RegisterPage /> },
  { path: "/user/logout", element: null },

  { path: "/board/list", element: <BoardListPage /> },
  { path: "/board/write", element: <BoardWritePage /> },
  { path: "/board/view", element: <BoardViewPage /> },
  { path: "/board/modify", element: <BoardModifyPage /> },

  { path: "/admin", element: <AdminMainPage /> },
  {
    path: "/admin/product/register",
    element: (
      <Suspense>
        <AdminProductRegisterPage />
      </Suspense>
    ),
  },
]);

// 라우터 내보내기
export default router;
