/**
 * @module Experience
 */

import React, { Profiler } from 'react'
import { useQuery, gql } from '@apollo/client'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const POST = gql`
  query Test($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`

/**
 * @function Experience
 * Will always call the api and fetch it from the network
 * Try to navaigate between experience for saying the loading always showing up (move from experience 6 to 7 to 6 to 7)
 * @return {Object} Return the dom of the Experience page
 */
const Experience = () => {
  const { loading, error, data } = useQuery(POST, {
    variables: { id: 1 },
    fetchPolicy: 'network-only'
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  const { post } = data

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Id : {post.id}</div>
      <div>Title : {post.title}</div>
      <div>Body : {post.body}</div>
    </Profiler>
  )
}

export default Experience
