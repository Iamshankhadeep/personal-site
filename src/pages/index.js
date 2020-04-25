import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import useDarkMode from "use-dark-mode"
import { ProjectPreview } from "../templates/Projects"
import { ArticlePreview } from "../templates/Articles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RecentEvents from "../components/RecentEvents"
import sections from "../data/nav-sections.json"
import mediaLinks from "../data/media-links.json"
import NavLink from "../components/RootComponents/NavLink"
import MediaLink from "../components/RootComponents/MediaLink"
import EmploymentHistory from "../data/timeline.json"

export default function Start({ data }) {
  const featuredProjectOne = data.Projects.edges[0].node.frontmatter
  const featuredProjectTwo = data.Projects.edges[1].node.frontmatter
  const featuredArticleOne = data.Articles.edges[0].node
  const featuredArticleTwo = data.Articles.edges[1].node
  const currentJob = EmploymentHistory[0]
  const darkMode = useDarkMode()
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="is-grey is-light-grey-bg">
        <div className="row container-small pad-20-t pad-10-b">
          <div className="col-xs-12 col-sm-6 pad-5-lr">
            <h1 className="is-hero-menu margin-0">Sam</h1>
            <h1 className="is-hero-menu margin-0">Larsen-Disney</h1>
            <div className="line margin-10-t margin-10-b" />
            <div className="border" />
            <h4 className="is-hero-sub-text">
              {`${currentJob.role} @ `}
              <button
                style={{ color: "#046ED0", cursor: "pointer" }}
                onClick={() => {
                  window.open(currentJob.url, "_blank")
                }}
              >
                {currentJob.company}.
              </button>
            </h4>
            <div className="row  pad-6-t pad-10-b  pad-10-b">
              {mediaLinks.map(item => (
                <MediaLink type={item.type} url={item.url} key={item.type} />
              ))}
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 pad-5-lr pad-10-b">
            {sections.map(item => (
              <NavLink {...item} key={item.label} />
            ))}
          </div>
        </div>
      </div>
      <div className="is-grey is-white-bg">
        <div className="row container-small pad-10-t  pad-3-lr pad-20-b">
          <div className="col-xs-12">
            <h2 className="">Latest Projects</h2>
          </div>

          <div className="col-xs-12 col-md-6 ">
            <ProjectPreview {...featuredProjectOne} />
          </div>
          <div className="col-xs-12 col-md-6 ">
            <ProjectPreview {...featuredProjectTwo} />
          </div>
        </div>
      </div>
      <div className="is-grey is-light-grey-bg">
        <div className="row container-small pad-10-t pad-3-lr pad-20-b">
          <div className="col-xs-12">
            <h2 className="">Recent Articles</h2>
          </div>
          <div className="col-xs-12 col-md-6">
            <ArticlePreview
              {...featuredArticleOne}
              {...featuredArticleOne.fields}
            />
          </div>
          <div className="col-xs-12 col-md-6 ">
            <ArticlePreview
              {...featuredArticleTwo}
              {...featuredArticleTwo.fields}
            />
          </div>
        </div>
      </div>
      <div className="is-grey is-white-bg">
        <div className="row container-small pad-10-t pad-20-b">
          <div className="pad-10-lr">
            <h2 className="margin-0-b">Recent Events</h2>
          </div>
          <RecentEvents />
        </div>
      </div>
      <div
        className="is-grey is-light-grey-bg"
        style={{ position: "relative" }}
      >
        <img
          src={
            !darkMode.value
              ? "https://ik.imagekit.io/sld/Untitled_Artwork_9_oDFR_CBToKE.gif"
              : "https://ik.imagekit.io/sld/Untitled_Artwork_10_46sRVmnPyiG.gif"
          }
          style={{
            width: "100%",
            maxHeight: "100%",
            objectFit: "cover",
            position: "absolute",
            zIndex: 0,
          }}
        />

        <div
          className="row container-small pad-20-tb"
          style={{ position: "relative", zIndex: 5 }}
        >
          <div className="col-xs-12 text-align-center">
            <div className="row">
              <div className="col-xs-12">
                <h1 className="is-grey">For The People Who Prefer Paper</h1>
              </div>
              <div className="col-xs-12">
                <AniLink paintDrip hex="#ffffff" to="/cv">
                  <button
                    className="bubble-button "
                    style={{
                      minWidth: 300,
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    View CV
                  </button>
                </AniLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    Articles: allFeedMediumBlog(
      sort: { order: DESC, fields: [isoDate] }
      limit: 2
    ) {
      edges {
        node {
          fields {
            hero_img
            excerpt
            slug
          }
          title
          pubDate
        }
      }
    }
    Projects: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "Project" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            type
            title
            desc
            date
            skills
            path
            coverimg {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
