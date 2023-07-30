function Section({ id, title, children }) {
  return (
    <div>
      <section
        id={id}
        className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          {title}
        </h2>
        {children}
      </section>
    </div>
  );
}

export default Section;
