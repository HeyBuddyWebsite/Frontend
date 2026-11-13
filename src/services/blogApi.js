const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://email-backend.heybuddy.co.in';

// Cache API responses on the server for 10 minutes (ignored in the browser).
const CACHE = { next: { revalidate: 600 } };

// ==================== BLOG API ====================

export async function getAllBlogs(page = 1, limit = 9, category = '') {
  try {
    const categoryParam = category ? `&category=${encodeURIComponent(category)}` : '';
    const response = await fetch(`${API_URL}/api/blogs?isExpand=false&page=${page}&limit=${limit}${categoryParam}`, CACHE);
    const data = await response.json();
    // Return both data and pagination info
    return data.success ? { blogs: data.data, pagination: data.pagination } : { blogs: [], pagination: {} };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return { blogs: [], pagination: {} };
  }
}

export async function getBlogBySlug(slug) {
  try {
    // Fetch with pageContent for full blog view
    const response = await fetch(`${API_URL}/api/blogs/slug/${slug}?isExpand=true`, CACHE);
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
    const response = await fetch(`${API_URL}/api/categories?isActive=true&includeCount=true`, CACHE);
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getCategoryBySlug(slug) {
  try {
    const response = await fetch(`${API_URL}/api/categories/slug/${slug}`, CACHE);
    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

export async function getCategoryStats() {
  try {
    const response = await fetch(`${API_URL}/api/categories/stats`, CACHE);
    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching category stats:', error);
    return [];
  }
}

