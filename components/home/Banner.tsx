export const Banner = () => {
  return (
    <div className="flex flex-col gap-8 py-8 px-4 text-black text-wrap font-bold lg:text-right">
      <h2 className="text-5xl ">SOY MATÍAS </h2>
      <h3 className="text-4xl">
        <a
          rel="nofollow noopener noreferrer"
          href="https://github.com/MatiasPViecho"
          target="_blank"
          className="underline decoration-blue-600 text-blue-600 decoration-2 underline-offset-2 visited:decoration-violet-800 visited:text-violet-800"
        >
          DEVELOPER
        </a>{" "}
        Y FOTÓGRAFO
      </h3>
    </div>
  );
};
