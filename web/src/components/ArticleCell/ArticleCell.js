import Article from '../Article/Article'

export const QUERY = gql`
  query ArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ article }) => {
  return (
    <section className='border-solid border-2 border-black mx-10'>
      <div className=" flex flex-col px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div className="w-full">
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold capitalize'>{article.title}</h1>
            <p className="text-lg font-semibold mt-2 text-gray-600">{article.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
