import { defineNoteConfig, defineNotesConfig } from "vuepress-theme-plume";

const demoNote = defineNoteConfig({
  dir: "myself",
  link: "/myself",
  sidebar: ["", "药", "demo"],
});

export const notes = defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [demoNote],
});
