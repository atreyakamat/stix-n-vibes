import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_TITLE = 'Stix N Vibes'

/**
 * Updates document.title and canonical link per route.
 * @param {string} title - Page-specific title segment (e.g. "Our Story")
 * @param {string} description - Optional meta description override
 */
export function PageMeta({ title, description }) {
  const { pathname } = useLocation()

  useEffect(() => {
    // Update <title>
    document.title = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | Premium Stickers for Every Vibe`

    // Update or create canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `https://stixnvibes.com${pathname}`)

    // Update meta description if provided
    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (meta) {
        meta.setAttribute('content', description)
      }
    }

    // Cleanup: restore defaults on unmount
    return () => {
      document.title = `${BASE_TITLE} | Premium Stickers for Every Vibe`
    }
  }, [title, description, pathname])

  return null
}

export default PageMeta
