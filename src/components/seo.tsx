import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords = "real estate, lands in hyderabad, flats, plots, commercial investment, villas, rental services, Gachibowli, Hitech City, Kondapur, Madhapur, Banjara Hills, Jubilee Hills, Narsingi, Nallagandla, Mokila, Tellapur, Tukkuguda, Vikarabad, Kollur, Future City, Shamshabad, Osman Nagar, Financial District",
  image = "https://firstdoor.in/opengraph.jpg",
  url = "https://firstdoor.in/"
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    const updateMetaTag = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attributeName, attributeValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('meta[name="description"]', 'name', 'description', description);
    updateMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    
    // Open Graph
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', image);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', url);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');

    // Twitter
    updateMetaTag('meta[property="twitter:title"]', 'property', 'twitter:title', title);
    updateMetaTag('meta[property="twitter:description"]', 'property', 'twitter:description', description);
    updateMetaTag('meta[property="twitter:image"]', 'property', 'twitter:image', image);
    updateMetaTag('meta[property="twitter:card"]', 'property', 'twitter:card', 'summary_large_image');
    
  }, [title, description, keywords, image, url]);

  return null;
}
