import { defineNotesConfig } from "vuepress-theme-plume";

import demoNote from "./demo.note";

export default defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [demoNote],
});
