"use strict";

const { Parser } = require("json2csv");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::history.history", ({ strapi }) => ({
  // 保留默认 CRUD，同时加上导出逻辑
  async export(ctx) {
    const { start, end, store, sort = "desc" } = ctx.query;

    const filters = {};
    if (start || end) {
      filters.Create_Date = {};
      if (start) filters.Create_Date["$gte"] = new Date(start);
      if (end) filters.Create_Date["$lte"] = new Date(end);
    }

    if (store) {
      filters.Store_ID = store;
    }

    const entries = await strapi.entityService.findMany(
      "api::history.history",
      {
        fields: [
          "Create_Date",
          "Spent",
          "Prize_Name",
          "Code",
          "Store_ID",
          "Store_Name",
        ],
        filters,
        sort: [{ Create_Date: sort }],
        limit: 9999,
      }
    );

    const parser = new Parser({
      fields: [
        "Create_Date",
        "Spent",
        "Prize_Name",
        "Code",
        "Store_ID",
        "Store_Name",
      ],
    });

    const csv = parser.parse(entries);

    ctx.set("Content-Type", "text/csv");
    ctx.set("Content-Disposition", "attachment; filename=history_export.csv");
    ctx.body = csv;
  },
}));
