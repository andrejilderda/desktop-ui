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
        <h1>Desktop UI</h1>
        {/* red text */}
        <div className="text-red-600">Test</div>
        <p>
          Desktop UI is a style and component library with a native macOS
          Ventura and Windows 11 look-and-feel. 🚧 Work in progress.
        </p>
      </div>
    </div>
  );
}
