// NOTE: This layout will be used in this route and child routes.
const AboutLayout = ({ children }) => {
  return (
    <section>
      <h1>About Layout</h1>
      <div className="mt-6">{children}</div>
    </section>
  );
};

export default AboutLayout;
