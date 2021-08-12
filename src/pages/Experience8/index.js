/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler } from 'react'
import { useMutation, useQuery, gql } from '@apollo/client'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

const GET_POST = gql`
  query Test($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`

const POST = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const query = useQuery(GET_POST, {
    variables: { id: 1 }
  })
  const [mutateFunction, { data, loading }] = useMutation(POST, {
    refetchQueries: [{ query: GET_POST, variables: { id: 1 } }]
  })

  const handleClick = () => {
    mutateFunction({
      variables: {
        input: {
          title: 'A Very Captivating Post Title',
          body: 'Some interesting content.'
        }
      }
    })
  }

  if (loading) {
    return <div>Loading</div>
  }

  console.log(query)
  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={handleClick}>Mutate</button>
      {data && data?.createPost?.id}
    </Profiler>
  )
}

export default Experience
