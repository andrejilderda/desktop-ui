import { DocsThemeConfig } from "nextra-theme-docs/.";

const config: DocsThemeConfig = {
  logo: <span>Desktop UI</span>,
  project: {
    link: "https://github.com/andrejilderda/desktop-ui",
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">© {new Date().getFullYear()} Desktop UI</p>
      </div>
    ),
  },
};

export default config;
