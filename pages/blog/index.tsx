import type { Locale } from '@types'
import type { GetStaticProps } from 'next'

const Blog = ({ data: { locale } }) => {
  return <div>Blog {locale}</div>
}

export const getStaticProps: GetStaticProps<{}, { locale: Locale }> = async ({
  locale,
  preview,
}) => ({
  props: {
    data: locale,
  },
  revalidate: 60,
})

export default Blog
