import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NextPage from "../pages/NextPage.vue";
import GroupDetailPage from "../pages/GroupDetailPage.vue";
import TestPage from "../pages/TestPage.vue"; // TestPage를 import

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage, // 기본 페이지
  },
  {
    path: "/next",
    name: "Next",
    component: NextPage, // 버튼을 통해 이동할 페이지
  },
  {
    path: "/groups/:groupId", // :groupId로 pathVariable 정의
    name: "GroupDetail",
    component: GroupDetailPage,
    meta: {showUserList: true}
  },
  {
    path: "/test",
    name: "Test",
    component: TestPage, // front - back data 통신 테스트용 페이지
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
