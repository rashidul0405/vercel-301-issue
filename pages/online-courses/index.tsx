import type { Locale } from '@types'
import type { GetStaticProps } from 'next'

const Courses = ({ data: { locale } }) => {
  return <div>Courses {locale}</div>
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

export default Courses
