import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

const demoNote = defineNoteConfig({
  dir: "demo",
  link: "/demo",
  sidebar: ["", "foo", "bar", "sss"],
});

export const notes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [demoNote],
});
