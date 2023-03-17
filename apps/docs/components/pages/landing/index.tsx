export default function Landing() {
  return (
    <div>
      <style jsx>{`
        .content-container {
          max-width: 90rem;
          padding-left: max(env(safe-area-inset-left), 1.5rem);
          padding-right: max(env(safe-area-inset-right), 1.5rem);
          margin: 0 auto;
        }
      `}</style>
      <div className="content-container">
        <div className="prose dark:prose-invert py-6">
          <h1>Desktop UI</h1>
          <p>
            Desktop UI is a style and component library with a native macOS
            Ventura and Windows 11 look-and-feel. 🚧 Work in progress.
          </p>
          <ul>
            <li className="text-gray-400">
              <a
                className="text-blue-500 underline hover:no-underline"
                href="https://desktop-ui-react.netlify.app/"
              >
                React Storybook
              </a>{" "}
              - contains the React components
            </li>
            <li className="text-gray-400">
              <a
                className="text-blue-500 underline hover:no-underline"
                href="https://desktop-ui-styles.netlify.app/"
              >
                Styles Storybook
              </a>{" "}
              - contains the CSS-library
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
