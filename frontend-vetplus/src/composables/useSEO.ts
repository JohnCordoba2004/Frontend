import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

/**
 * Composable para manejar SEO de forma centralizada
 * Uso: const { setPageSEO } = useSEO()
 *       setPageSEO({
 *         title: 'Mis Planes',
 *         description: 'Descubre nuestros planes...',
 *         image: 'https://...'
 *       })
 */

interface SEOConfig {
  title: string
  description: string
  image?: string
  keywords?: string
  type?: 'website' | 'article' | 'business'
  schema?: any
}

export const useSEO = () => {
  const route = useRoute()
  const baseUrl = 'https://petsalud.com'

  // Canonical URL dinámico
  const canonicalUrl = computed(() => `${baseUrl}${route.path}`)

  /**
   * Configurar SEO de una página
   */
  const setPageSEO = (config: SEOConfig) => {
    const {
      title,
      description,
      image = 'https://res.cloudinary.com/diro0cqpe/image/upload/v1779247628/urgencias_ypzs3r.png',
      keywords = 'medicina prepagada veterinaria, PetSalud',
      type = 'website',
      schema
    } = config

    const fullTitle = title.includes('|') ? title : `${title} | PetSalud`

    const headConfig: any = {
      title: fullTitle,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          name: 'keywords',
          content: keywords
        },
        // Open Graph
        {
          property: 'og:title',
          content: fullTitle
        },
        {
          property: 'og:description',
          content: description
        },
        {
          property: 'og:image',
          content: image
        },
        {
          property: 'og:type',
          content: type
        },
        {
          property: 'og:url',
          content: canonicalUrl.value
        },
        {
          property: 'og:locale',
          content: 'es_CO'
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: fullTitle
        },
        {
          name: 'twitter:description',
          content: description
        },
        {
          name: 'twitter:image',
          content: image
        },
        // SEO adicional
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          httpEquiv: 'X-UA-Compatible',
          content: 'IE=edge'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: canonicalUrl.value
        }
      ]
    }

    // Agregar schema.org si existe
    if (schema) {
      headConfig.script = [
        {
          type: 'application/ld+json',
          children: JSON.stringify(schema)
        }
      ]
    }

    useHead(headConfig)
  }

  /**
   * Schema.org para LocalBusiness
   */
  const getLocalBusinessSchema = () => ({
    '@context': 'https://schema.org/',
    '@type': 'LocalBusiness',
    'name': 'PetSalud',
    'image': 'https://res.cloudinary.com/diro0cqpe/image/upload/v1779247628/urgencias_ypzs3r.png',
    'description': 'Medicina prepagada veterinaria con cobertura nacional en Colombia',
    'telephone': '+57 1 234 5678',
    'email': 'info@petsalud.com',
    'url': baseUrl,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Calle Principal 123',
      'addressLocality': 'Bogotá',
      'addressRegion': 'Cundinamarca',
      'postalCode': '110111',
      'addressCountry': 'CO'
    },
    'areaServed': 'CO',
    'priceRange': '$$'
  })

  /**
   * Schema.org para FAQPage
   */
  const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  })

  /**
   * Schema.org para Breadcrumbs
   */
  const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${baseUrl}${item.url}`
    }))
  })

  /**
   * Schema.org para ServiceType
   */
  const getServiceSchema = (config: {
    name: string
    description: string
    areaServed?: string
  }) => ({
    '@context': 'https://schema.org/',
    '@type': 'MedicalService',
    'name': config.name,
    'description': config.description,
    'provider': {
      '@type': 'MedicalBusiness',
      'name': 'PetSalud',
      'url': baseUrl
    },
    'areaServed': config.areaServed || 'CO'
  })

  return {
    setPageSEO,
    getLocalBusinessSchema,
    getFAQSchema,
    getBreadcrumbSchema,
    getServiceSchema,
    canonicalUrl,
    baseUrl
  }
}
