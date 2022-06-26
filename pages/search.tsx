import type { GetServerSideProps } from 'next'

const Search = ({ data: { locale } }) => {
  return <div>Search {locale}</div>
}

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
  locale,
  preview,
}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const page = query.page ?? 1
  const pattern = query.q ?? ''

  return {
    props: {
      data: locale,
    },
  }
}

export default Search
