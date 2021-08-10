/**
 * Profile the app for knowing when everything re-render
 * @module Experiences/Experience0
 */

import React, { Profiler, useState } from 'react'

const onRender = (id, phase, actualDuration) => {
  console.log(id, phase, actualDuration)
}

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [val, setVal] = useState(0)

  return (
    <Profiler id="Experience" onRender={onRender}>
      <button onClick={() => setVal((c) => c + 1)}>
        Increment val ({val})
      </button>
    </Profiler>
  )
}

export default Experience
