import { defineConfig } from "@rsbuild/core"
import { pluginReact } from "@rsbuild/plugin-react"
import { pluginSass } from "@rsbuild/plugin-sass"

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  html: {
    title: "48 BOARD GAME",
    favicon: "./src/assets/images/favicon.png",
    appIcon: "./src/assets/images/favicon.png",
    meta: {
      description: "48 BOARD GAME STATISTICS",
    },
  },
})
