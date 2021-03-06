export const base = {
  ROOT: "./",
  TEST: "./tests/",
  DEV: "./client/dev/",
  DIST: "./client/dist/",
  DIST_CORDOVA: "./client/dist_cordova/www/"
}

export const tasks = {
  CLIENT_BUILD_DEV: "client.build:dev",
  CLIENT_BUILD_DIST: "client.build:dist",

  CLIENT_BUILD_CSS_DIST: "client.build_css:dist",
  CLIENT_JS_DIST: "client.build_js:dist",
  CLIENT_VIEWS_DIST: "client.views:dist",
  CLIENT_IMAGE_DIST: "client.imgs:dist",
  CLIENT_DEL_DIST: "client.del:dist",

  CLIENT_COPY: "client.copy",

  CLIENT_UNIT_TEST: "client.unit_test",
  CLIENT_COVERAGE: "client.coverage",

  CLIENT_RELOAD: "client.reload",

  CLIENT_WATCH: "client.watch",

  CLIENT_BUILD_TS: "client.build_ts",

  <% if (stylePreprocessor === "sass") { %>
  CLIENT_COMPILE_TO_CSS: "client.compile_from_sass_to_css:dev"
  <% } %>

  <% if (stylePreprocessor === "less") { %>
  CLIENT_COMPILE_TO_CSS: "client.compile_from_less_to_css:dev"
  <% } %>
}
