import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Vite configuration targeting Netlify.
//
// The @netlify/vite-plugin-tanstack-start plugin:
//   - configures `vite build` to emit a Netlify-ready bundle (static client in
//     dist/client, server handler as a Netlify Function)
//   - emulates the Netlify platform during `vite dev`, so the local dev server
//     behaves the same as production on every OS.
export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
    netlify(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: false,
  },
});
