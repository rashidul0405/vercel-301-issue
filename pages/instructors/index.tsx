import type { Locale } from '@types'
import type { GetStaticProps } from 'next'

const Instructors = ({ data: { locale } }) => {
  return <div>Instructors {locale}</div>
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

export default Instructors
