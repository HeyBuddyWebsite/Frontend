const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://email-backend.heybuddy.co.in';

// ==================== BLOG API ====================

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

// ==================== CATEGORY API ====================

export async function getAllCategories() {
  try {
    // Fetch all active categories with blog count
    const response = await fetch(`${API_URL}/api/categories?isActive=true&includeCount=true`);
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getCategoryBySlug(slug) {
  try {
    const response = await fetch(`${API_URL}/api/categories/slug/${slug}`);
    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

export async function getCategoryStats() {
  try {
    const response = await fetch(`${API_URL}/api/categories/stats`);
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching category stats:', error);
    return [];
  }
}

