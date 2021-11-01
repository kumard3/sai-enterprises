export default function Hero() {
  return (
    <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
        Data to  enrich
          <span className="dark:text-fuchsia-400"> your </span>
           <span>
           online business
        </span>
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
          amet vero eaque explicabo!
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-blue-500 text-white">
            Get started
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded dark:text-coolGray-50 dark:border-coolGray-700">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
