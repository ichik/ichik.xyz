import { resolve } from "path"

export async function createPages({ graphql, actions, reporter }) {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
              updated
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const projects = result.data.allMdx.edges
  projects.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: resolve(`./src/templates/project.tsx`),
      context: { id: node.id, updated: node.frontmatter.updated },
    })
  })
}
