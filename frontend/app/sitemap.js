export default function sitemap() {
  return [
    {
      url: 'https://welkedeelauto.nl',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://welkedeelauto.nl/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ]
}
