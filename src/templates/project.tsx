import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

type PageProps = {
  data: {
    mdx: {
      frontmatter: {
        title: string
      }
    }
  }
}

const PageTemplate: React.FunctionComponent<PageProps> = ({
  data: { mdx },
}) => {
  return (
    <Layout>
      <div>
        <h1>{mdx.frontmatter.title}</h1>
      </div>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
    }
  }
`
