/**
 * @module Experience
 */

import React, { Profiler } from 'react'
import { useLazyQuery, gql } from '@apollo/client'

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
  const [getPost, { data, loading, error }] = useLazyQuery(POST, {
    variables: { id: 1 }
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const handleRefetch = () => {
    getPost()
  }

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={() => handleRefetch()}>Fetching</button>
      {data && (
        <>
          <div>Id : {data?.post?.id}</div>
          <div>Title : {data?.post?.title}</div>
          <div>Body : {data?.post?.body}</div>
        </>
      )}
    </Profiler>
  )
}

export default Experience
