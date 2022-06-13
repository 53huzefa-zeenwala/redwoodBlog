import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article key={article.id}>
      <div
        className="overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="transition-opacity bg-gray-500 bg-opacity-75"
            aria-hidden="true"
          ></div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:"
            aria-hidden="true"
          >
            ​
          </span>
          <div className="inline-block p-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
            <div>
              <div className="mt-3 text-left sm:mt-5">
                <h1 className="mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                  {article.title}
                </h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">
                  {article.body}
                </p>
              </div>
            </div>
            <div className="mt-6 sm:flex">
              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <Link
                  to={routes.article({ id: article.id })}
                  className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Article
