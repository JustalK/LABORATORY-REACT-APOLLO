/**
 * @module Experience
 */

import React, { Profiler, useRef } from 'react'
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
 * Refetch the query with new variable
 * @return {Object} Return the dom of the Experience page
 */
const Experience = () => {
  const id = useRef(1)
  const { loading, error, data, refetch } = useQuery(POST, {
    variables: { id: id.current }
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  const { post } = data

  const handleRefetch = () => {
    id.current = id.current === 1 ? 2 : 1
    refetch({ id: id.current })
  }

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={() => handleRefetch()}>Refetching</button>
      <div>Id : {post.id}</div>
      <div>Title : {post.title}</div>
      <div>Body : {post.body}</div>
    </Profiler>
  )
}

export default Experience
