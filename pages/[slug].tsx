import Breadcrumb from '@components/breadcrumb'
import Container from '@components/container'
import Layout from '@components/layout'
import Meta from '@components/meta'
import {
  getIFramePage,
  getIFramePageSlugs,
  IFramePageData,
  IFramePageSlugsData,
} from '@data/iframe'
import { GetStaticPaths, GetStaticProps } from 'next'

type IFramePageProps = {
  data: IFramePageData
}

const IFramePage = ({
  data: {
    header,
    footer,
    page: { seo, slug, title, code },
  },
}: IFramePageProps) => {
  return (
    <Layout header={header} footer={footer}>
      <Meta seo={seo} slug={slug} />
      <Breadcrumb title={title} />
      <Container>
        <h1 className="mt-14">{title}</h1>
        <div className="mt-12 mb-24 prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: code }} />
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: IFramePageSlugsData = await getIFramePageSlugs()

  return {
    paths: data.map(({ locale, slug }) => ({
      params: { slug },
      locale,
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<{}, { slug: string }> = async ({
  locale,
  preview,
  params,
}) => {
  const data = await getIFramePage(
    params?.slug as string,
    locale,
    Boolean(preview)
  )

  if (!data.page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
    revalidate: 60,
  }
}

export default IFramePage
