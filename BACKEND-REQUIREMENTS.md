# Backend Requirements - Blog API

## 🎯 What We Need

Just **2 API endpoints** to get started. Keep it simple!

---

## 📡 Endpoint 1: Get All Blogs (List)

**URL**: `GET /api/blogs`

**Purpose**: Show all blogs on the blog list page

**Response Format**:
```json
{
  "success": true,
  "data": [
    {
      "id": 9,
      "slug": "metaverse-gaming-2024",
      "category": "Games",
      "thumbnail": "https://your-storage.com/image.png",
      "title": "Metaverse Gaming in 2024",
      "summary": "Explore the future of gaming in the metaverse...",
      "publishedDate": "2024-10-15",
      "readTime": "8 min read"
    },
    {
      "id": 10,
      "slug": "ai-development-guide",
      "category": "AI",
      "thumbnail": "https://your-storage.com/image2.png",
      "title": "AI Development Complete Guide",
      "summary": "Everything you need to know about AI development...",
      "publishedDate": "2024-10-14",
      "readTime": "12 min read"
    }
  ]
}
```

### Required Fields:
- ✅ `id` - Unique blog ID (number)
- ✅ `slug` - URL-friendly string (e.g., "metaverse-gaming-2024")
- ✅ `category` - One of: "Games", "Development", "AI", "CGI", "AR"
- ✅ `thumbnail` - Image URL (full URL)
- ✅ `title` - Blog title
- ✅ `summary` - Short description (150-200 chars)
- ✅ `publishedDate` - Date string
- ✅ `readTime` - String like "8 min read"

---

## 📡 Endpoint 2: Get Single Blog (Details)

**URL**: `GET /api/blogs/:slug`

**Example**: `GET /api/blogs/metaverse-gaming-2024`

**Purpose**: Show full blog content on individual blog page

**Response Format**:
```json
{
  "success": true,
  "data": {
    "id": 9,
    "slug": "metaverse-gaming-2024",
    "category": "Games",
    "title": "Metaverse Gaming in 2024",
    "thumbnail": "https://your-storage.com/thumb.png",
    "summary": "Explore the future of gaming...",
    "publishedDate": "2024-10-15",
    "readTime": "8 min read",
    "featuredImage": {
      "desktop": "https://your-storage.com/desktop-image.png",
      "mobile": "https://your-storage.com/mobile-image.png"
    },
    "content": [
      {
        "type": "heading",
        "content": "Metaverse Gaming in 2024"
      },
      {
        "type": "paragraph",
        "content": "The metaverse is revolutionizing gaming industries across the world. With VR technology advancing rapidly..."
      },
      {
        "type": "subheading",
        "content": "Key Trends to Watch"
      },
      {
        "type": "paragraph",
        "content": "Several trends are emerging in the metaverse gaming space..."
      },
      {
        "type": "list",
        "items": [
          "Virtual Reality Integration",
          "Social Gaming Experiences",
          "NFT-based In-game Items",
          "Cross-platform Compatibility"
        ]
      },
      {
        "type": "subheading",
        "content": "Popular Metaverse Games"
      },
      {
        "type": "paragraph",
        "content": "Some of the most popular games include..."
      }
    ],
    "tableOfContents": [
      {
        "id": "section1",
        "title": "Introduction to Metaverse Gaming"
      },
      {
        "id": "section2",
        "title": "Key Trends to Watch"
      },
      {
        "id": "section3",
        "title": "Popular Metaverse Games"
      }
    ]
  }
}
```

### Required Fields (Same as Endpoint 1, PLUS):
- ✅ `featuredImage` - Object with:
  - `desktop` - Desktop image URL
  - `mobile` - Mobile image URL
- ✅ `content` - Array of content blocks (see below)
- ✅ `tableOfContents` - **AUTO-GENERATED** from heading blocks (see below)

---

## 📝 Content Block Types

The `content` array contains different types of blocks. Support these 4 types to start:

### 1. Heading (Main Title)
```json
{
  "type": "heading",
  "content": "Main Section Title"
}
```
**Renders as**: Large H1 title

---

### 2. Subheading (Subtitle)
```json
{
  "type": "subheading",
  "content": "Subsection Title"
}
```
**Renders as**: Bold text (smaller than heading)

---

### 3. Paragraph (Normal Text)
```json
{
  "type": "paragraph",
  "content": "This is a normal paragraph with regular text content..."
}
```
**Renders as**: Regular paragraph text

---

### 4. List (Bullet Points)
```json
{
  "type": "list",
  "items": [
    "First item",
    "Second item",
    "Third item"
  ]
}
```
**Renders as**: Bulleted list

---

## 📋 Table of Contents - Auto-Generation

**Important**: Table of contents should be **automatically generated** from the content!

### How It Works:

When the editor adds content blocks in the CMS:
1. Editor adds heading: `"Introduction to Gaming"`
2. Editor adds paragraphs and lists
3. Editor adds another heading: `"Top Game Companies"`
4. Editor adds more content

**Backend automatically extracts all headings and creates TOC**:

```json
"tableOfContents": [
  {
    "id": "section1",
    "title": "Introduction to Gaming"
  },
  {
    "id": "section2", 
    "title": "Top Game Companies"
  }
]
```

### Backend Logic:
```javascript
// When saving/retrieving blog
function generateTableOfContents(contentBlocks) {
  return contentBlocks
    .filter(block => block.type === 'heading')
    .map((block, index) => ({
      id: `section${index + 1}`,
      title: block.content
    }));
}
```

**Purpose**: 
- Shows in sticky sidebar for easy navigation
- Editor doesn't need to manually create TOC
- TOC always matches the actual content
- Automatically updates when content changes

---

## 🎨 Category Values

Only use these exact values:
- `"Games"` - Orange theme
- `"Development"` - Green theme
- `"AI"` - Red theme
- `"CGI"` - Cyan theme
- `"AR"` - Cyan theme

⚠️ **Important**: Use exact spelling and capitalization!

---

## 🗄️ Database Schema Suggestion

### blogs table
```sql
CREATE TABLE blogs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  slug VARCHAR(255) UNIQUE NOT NULL,
  category VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  thumbnail_url VARCHAR(500) NOT NULL,
  featured_desktop_url VARCHAR(500) NOT NULL,
  featured_mobile_url VARCHAR(500) NOT NULL,
  published_date DATE NOT NULL,
  read_time VARCHAR(50),
  status ENUM('draft', 'published') DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### blog_content table
```sql
CREATE TABLE blog_content (
  id INT PRIMARY KEY AUTO_INCREMENT,
  blog_id INT NOT NULL,
  content_order INT NOT NULL,
  type ENUM('heading', 'subheading', 'paragraph', 'list') NOT NULL,
  content TEXT,
  items JSON, -- For list type, store array as JSON
  FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE
);
```

**Note**: No `blog_toc` table needed! Table of contents is auto-generated from `blog_content` where `type='heading'`

---

## 🎨 CMS Editor Flow (For Future Reference)

### How Editor Creates Blog:

1. **Add Basic Info**:
   - Title, slug, category, summary
   - Upload featured images (desktop, mobile, thumbnail)
   - Set publish date, read time

2. **Add Content Blocks** (One by one):
   ```
   [Add Block] ▼
   ├─ Heading
   ├─ Subheading  
   ├─ Paragraph
   └─ List
   ```

3. **Example Editor Session**:
   ```
   + Add Heading → "Introduction to Gaming"
   + Add Paragraph → "Gaming has evolved..."
   + Add Paragraph → "Today we see..."
   + Add Heading → "Top Companies"     ← Auto-added to TOC!
   + Add List → [Nintendo, Sony, ...]
   + Add Paragraph → "In conclusion..."
   ```

4. **Backend Automatically**:
   - Saves all content blocks in order
   - Generates `tableOfContents` from heading blocks
   - Returns complete blog JSON

### Content Block Storage:
```json
{
  "content": [
    { "type": "heading", "content": "Introduction to Gaming" },
    { "type": "paragraph", "content": "Gaming has evolved..." },
    { "type": "heading", "content": "Top Companies" },
    { "type": "list", "items": ["Nintendo", "Sony"] }
  ]
}
```

### Auto-Generated TOC:
```json
{
  "tableOfContents": [
    { "id": "section1", "title": "Introduction to Gaming" },
    { "id": "section2", "title": "Top Companies" }
  ]
}
```

**No manual TOC entry needed!** ✨

---

## 🔐 Authentication (Future)

For now, just focus on GET endpoints. Later you'll add:
- `POST /api/blogs` - Create blog (Editor adds blocks, backend auto-generates TOC)
- `PUT /api/blogs/:id` - Update blog (Re-generates TOC on update)
- `DELETE /api/blogs/:id` - Delete blog

These will need JWT authentication.

---

## 🧪 Test Data Example

Here's a complete blog you can use for testing:

```json
{
  "id": 9,
  "slug": "test-blog-post",
  "category": "Games",
  "title": "Test Blog Post",
  "thumbnail": "https://via.placeholder.com/400x300",
  "summary": "This is a test blog post to verify the API integration is working correctly.",
  "publishedDate": "2024-10-15",
  "readTime": "5 min read",
  "featuredImage": {
    "desktop": "https://via.placeholder.com/1200x600",
    "mobile": "https://via.placeholder.com/800x600"
  },
  "content": [
    {
      "type": "heading",
      "content": "Welcome to Test Blog"
    },
    {
      "type": "paragraph",
      "content": "This is the first paragraph of the test blog post."
    },
    {
      "type": "subheading",
      "content": "Key Points"
    },
    {
      "type": "list",
      "items": [
        "Point number one",
        "Point number two",
        "Point number three"
      ]
    },
    {
      "type": "paragraph",
      "content": "This is another paragraph after the list."
    }
  ],
  "tableOfContents": [
    {
      "id": "section1",
      "title": "Welcome to Test Blog"
    },
    {
      "id": "section2",
      "title": "Key Points"
    }
  ]
}
```

---

## ✅ Checklist for Backend Team

- [ ] Set up database with 2 tables (blogs, blog_content)
- [ ] Create GET /api/blogs endpoint
- [ ] Create GET /api/blogs/:slug endpoint
- [ ] **Add logic to auto-generate `tableOfContents` from heading blocks**
- [ ] Add test blog using the example above
- [ ] Test with Postman/Insomnia
- [ ] Verify JSON structure matches exactly
- [ ] Verify TOC auto-generates correctly
- [ ] Deploy to dev environment
- [ ] Share API URL with frontend team

---

## 🚀 Example API Calls

### Get all blogs
```bash
curl http://your-api.com/api/blogs
```

### Get specific blog
```bash
curl http://your-api.com/api/blogs/test-blog-post
```

---

## 📞 Questions?

Common questions answered:

**Q: Where should images be stored?**  
A: Use your existing Azure Blob Storage (same as current hardcoded blogs)

**Q: Do we need authentication for GET endpoints?**  
A: No, GET endpoints should be public

**Q: What if slug doesn't exist?**  
A: Return 404 with `{"success": false, "message": "Blog not found"}`

**Q: Should we support pagination?**  
A: Not needed initially. Add later if you have 50+ blogs

**Q: Can content blocks have HTML?**  
A: Plain text for now. We'll add rich text support later

---

## 📊 Priority

**Phase 1 (Week 1)**: ⭐ HIGH PRIORITY
- ✅ Database schema
- ✅ GET /api/blogs
- ✅ GET /api/blogs/:slug
- ✅ Test with 1-2 sample blogs

**Phase 2 (Week 2-3)**: Medium Priority
- POST /api/blogs (CMS create)
- PUT /api/blogs/:id (CMS update)
- Image upload endpoint

**Phase 3 (Week 4+)**: Future
- DELETE endpoint
- Draft/Published workflow
- Rich text editor support
- Search functionality

---

## 💡 Keep It Simple!

Start with:
1. ✅ 2 GET endpoints
2. ✅ 4 content block types
3. ✅ Basic database schema
4. ✅ 1 test blog

That's enough to get the frontend working! ✨

---

**Need help? Ask the frontend team for clarification!**

