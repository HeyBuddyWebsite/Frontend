const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://emails-backend-ghaeffhnfmcbfscv.eastus-01.azurewebsites.net';

export async function getAllBlogs() {
  try {
    // Fetch without pageContent for list view (faster)
    const response = await fetch(`${API_URL}/api/blogs?isExpand=false&status=published`);
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    // Fetch with pageContent for full blog view
    const response = await fetch(`${API_URL}/api/blogs/slug/${slug}?isExpand=true`);
    const data = await response.json();
    
    return data.success ? data.data : null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

