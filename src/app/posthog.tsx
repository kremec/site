'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'

export default function Posthog() {
  useEffect(() => {
    posthog.init('phc_mwGjoNz5VjUekkAabvbc6dOiHkqvb83kIiNrTsaOjpx', {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'always',
    })
  }, [])

  return <></>
}
