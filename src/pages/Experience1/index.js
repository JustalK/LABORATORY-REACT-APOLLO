/**
 * @module Experience
 */

import React from 'react'
import { useQuery, gql } from '@apollo/client'

const POST = gql`
  query {
    post(id: 1) {
      id
      title
      body
    }
  }
`

/**
 * @function Experience
 * @return {Object} Return the dom of the Experience page
 */
const Experience = () => {
  const { loading, error, data } = useQuery(POST)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  const { post } = data

  return (
    <>
      <div>Id : {post.id}</div>
      <div>Title : {post.title}</div>
      <div>Body : {post.body}</div>
    </>
  )
}

export default Experience
