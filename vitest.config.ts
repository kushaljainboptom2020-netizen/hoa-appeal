import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
      // Tests run in plain Node, which resolves the "default" condition of
      // server-only — a module that throws by design. Point at the no-op build
      // that Next uses for the react-server condition.
      "server-only": path.resolve(__dirname, "node_modules/server-only/empty.js"),
    },
  },
});
