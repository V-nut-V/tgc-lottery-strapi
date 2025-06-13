"use strict";

module.exports = {
  routes: [
    // 自定义导出接口
    {
      method: "GET",
      path: "/history/export",
      handler: "history.export",
      config: {
        auth: false,
      },
    },

    // ✅ 自动加载默认 CRUD 路由
    {
      method: "GET",
      path: "/history",
      handler: "history.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/history/:id",
      handler: "history.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/history",
      handler: "history.create",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/history/:id",
      handler: "history.update",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/history/:id",
      handler: "history.delete",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
