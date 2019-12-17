import React from "react"
import { graphql } from "gatsby"

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
    <div>
      <h1>{mdx.frontmatter.title}</h1>
    </div>
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
