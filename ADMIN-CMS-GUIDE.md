# Admin CMS Guide - Blog Creation

Complete guide for building the blog creation/editing interface in the admin panel.

---

## 📋 Database Structure Required

### Blog Schema (MongoDB/Mongoose Example)

```javascript
{
  _id: ObjectId,
  slug: String, // URL-friendly, unique (e.g., "top-game-companies-2024")
  title: String, // Blog title
  subtitle: String, // Optional subtitle
  description: String, // Short summary for blog list (150-200 chars)
  category: String, // "Games", "Development", "AI", "CGI", "AR"
  coverImage: String, // Full URL to cover image
  pageContent: Array, // Array of content blocks (see below)
  status: String, // "draft" or "published"
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎨 Admin Form Fields

### 1. Basic Information Section

```
┌─────────────────────────────────────────┐
│ Title *                                 │
│ ┌─────────────────────────────────────┐ │
│ │ Enter blog title                    │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Slug * (Auto-generated from title)     │
│ ┌─────────────────────────────────────┐ │
│ │ top-game-companies-2024             │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Description * (Summary for blog list)  │
│ ┌─────────────────────────────────────┐ │
│ │ Made up your mind to invest in...  │ │
│ │                                     │ │
│ └─────────────────────────────────────┘ │
│ Character count: 150 / 200              │
│                                         │
│ Category *                              │
│ ┌─────────────────────────────────────┐ │
│ │ [Dropdown]                          │ │
│ │ ▼ Games                             │ │
│ │   Development                       │ │
│ │   AI                                │ │
│ │   CGI                               │ │
│ │   AR                                │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Cover Image *                           │
│ ┌─────────────────────────────────────┐ │
│ │ [Upload Image] or [Enter URL]      │ │
│ └─────────────────────────────────────┘ │
│ Preview: [Image preview here]           │
└─────────────────────────────────────────┘
```

**Field Details:**
- **Title**: Main blog title (required)
- **Slug**: Auto-generate from title, allow manual edit, must be unique
- **Description**: 150-200 character summary shown in blog list
- **Category**: Dropdown with exact values: "Games", "Development", "AI", "CGI", "AR"
- **Cover Image**: Upload or URL input for cover image

---

### 2. Content Builder Section

This is the main content area where the editor adds content blocks.

```
┌─────────────────────────────────────────┐
│ Content Builder                         │
│                                         │
│ [+ Add Content Block ▼]                │
│   ├─ Heading                            │
│   ├─ Subheading                         │
│   ├─ Paragraph                          │
│   └─ List                               │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Block 1: Heading                    │ │
│ │ Top Game Development Companies      │ │
│ │ [Edit] [Delete] [↑] [↓]             │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Block 2: Paragraph                  │ │
│ │ Made up your mind to invest...      │ │
│ │ [Edit] [Delete] [↑] [↓]             │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Block 3: Subheading                 │ │
│ │ Nintendo                            │ │
│ │ [Edit] [Delete] [↑] [↓]             │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [+ Add Content Block ▼]                │
└─────────────────────────────────────────┘
```

---

## 📝 Content Block Types

### 1. Heading Block

**Purpose**: Main section titles (shown in table of contents)

**Form**:
```
┌─────────────────────────────────────────┐
│ Block Type: Heading                     │
│                                         │
│ Content:                                │
│ ┌─────────────────────────────────────┐ │
│ │ Enter heading text                  │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [Save] [Cancel]                         │
└─────────────────────────────────────────┘
```

**Saved as**:
```json
{
  "type": "heading",
  "content": "Top Game Development Companies - Choose the Best One"
}
```

**Important**: All heading blocks automatically appear in the table of contents!

---

### 2. Subheading Block

**Purpose**: Smaller section titles, bold text (NOT in table of contents)

**Form**:
```
┌─────────────────────────────────────────┐
│ Block Type: Subheading                  │
│                                         │
│ Content:                                │
│ ┌─────────────────────────────────────┐ │
│ │ Enter subheading text               │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [Save] [Cancel]                         │
└─────────────────────────────────────────┘
```

**Saved as**:
```json
{
  "type": "subheading",
  "content": "Nintendo"
}
```

**Use for**: Company names, subsections, bold highlights like "Market Segment:", "Audience:", etc.

---

### 3. Paragraph Block

**Purpose**: Regular text content

**Form**:
```
┌─────────────────────────────────────────┐
│ Block Type: Paragraph                   │
│                                         │
│ Content:                                │
│ ┌─────────────────────────────────────┐ │
│ │ Enter paragraph text...             │ │
│ │                                     │ │
│ │                                     │ │
│ │                                     │ │
│ └─────────────────────────────────────┘ │
│ [Rich text editor optional]             │
│                                         │
│ [Save] [Cancel]                         │
└─────────────────────────────────────────┘
```

**Saved as**:
```json
{
  "type": "paragraph",
  "content": "They are one of the oldest game development companies, founded way back in the 19th century..."
}
```

---

### 4. List Block

**Purpose**: Bullet point lists

**Form**:
```
┌─────────────────────────────────────────┐
│ Block Type: List                        │
│                                         │
│ List Items:                             │
│ ┌─────────────────────────────────────┐ │
│ │ 1. [X] Games genre               [×]│ │
│ │ 2. [X] Platform                  [×]│ │
│ │ 3. [X] Target audience           [×]│ │
│ │ 4. [X] Core gameplay mechanics   [×]│ │
│ │                                     │ │
│ │ [+ Add Item]                        │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [Save] [Cancel]                         │
└─────────────────────────────────────────┘
```

**Saved as**:
```json
{
  "type": "list",
  "items": [
    "Games genre",
    "Platform",
    "Target audience",
    "Core gameplay mechanics"
  ]
}
```

---

## 💾 Save Structure

When saving, create the `pageContent` array in order:

```javascript
// Example of what gets saved to database
{
  "_id": "507f1f77bcf86cd799439011",
  "slug": "top-game-development-companies",
  "title": "Top Game Development Companies - Choose the Best One",
  "description": "Made up your mind to invest in game development? A great decision indeed...",
  "category": "Games",
  "coverImage": "https://heybuddystorage.blob.core.windows.net/...",
  "status": "published",
  "pageContent": [
    {
      "type": "heading",
      "content": "Top Game Development Companies - Choose the Best One"
    },
    {
      "type": "paragraph",
      "content": "Made up your mind to invest in game development? A great decision indeed."
    },
    {
      "type": "paragraph",
      "content": "The reasons are many such as diverse monetization models..."
    },
    {
      "type": "heading",
      "content": "Top 9 Game Development Companies in the World"
    },
    {
      "type": "subheading",
      "content": "Nintendo"
    },
    {
      "type": "paragraph",
      "content": "They are one of the oldest game development companies..."
    },
    {
      "type": "subheading",
      "content": "Market Segment:"
    },
    {
      "type": "paragraph",
      "content": "Broad, with a focus on family-friendly games."
    },
    {
      "type": "list",
      "items": [
        "Games genre",
        "Platform",
        "Target audience"
      ]
    }
  ],
  "createdAt": "2024-10-15T10:00:00.000Z",
  "updatedAt": "2024-10-15T10:00:00.000Z"
}
```

---

## 🔄 API Endpoints to Create

### 1. Create Blog (POST)

**Endpoint**: `POST /api/blogs`

**Request Body**:
```json
{
  "slug": "top-game-companies",
  "title": "Top Game Companies",
  "description": "Short summary...",
  "category": "Games",
  "coverImage": "https://...",
  "pageContent": [
    { "type": "heading", "content": "..." },
    { "type": "paragraph", "content": "..." }
  ],
  "status": "draft"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Blog created successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "slug": "top-game-companies"
  }
}
```

---

### 2. Update Blog (PUT)

**Endpoint**: `PUT /api/blogs/:id`

**Request Body**: Same as create

**Response**:
```json
{
  "success": true,
  "message": "Blog updated successfully"
}
```

---

### 3. Get Blog for Editing (GET)

**Endpoint**: `GET /api/blogs/:id`

**Response**: Returns full blog object with pageContent

---

### 4. Delete Blog (DELETE)

**Endpoint**: `DELETE /api/blogs/:id`

---

### 5. Upload Image (POST)

**Endpoint**: `POST /api/blogs/upload`

**Request**: Form-data with image file

**Response**:
```json
{
  "success": true,
  "data": {
    "url": "https://storage.../image.png"
  }
}
```

---

## 🎯 UI Flow Example

### Creating a New Blog:

1. **Admin clicks "Create New Blog"**
   
2. **Fill Basic Information**:
   - Enter title: "Top Game Companies"
   - Auto-generates slug: "top-game-companies"
   - Enter description (150-200 chars)
   - Select category: "Games"
   - Upload cover image

3. **Build Content**:
   - Click "Add Content Block" → Select "Heading"
   - Enter: "Top Game Development Companies"
   - Click Save
   
   - Click "Add Content Block" → Select "Paragraph"
   - Enter paragraph text
   - Click Save
   
   - Click "Add Content Block" → Select "Heading"
   - Enter: "Top Companies in India"
   - Click Save
   
   - Click "Add Content Block" → Select "Subheading"
   - Enter: "Hey Buddy"
   - Click Save
   
   - Click "Add Content Block" → Select "Paragraph"
   - Enter company description
   - Click Save
   
   - Click "Add Content Block" → Select "List"
   - Add items: "Item 1", "Item 2", "Item 3"
   - Click Save

4. **Reorder Blocks** (Optional):
   - Use ↑ ↓ arrows to reorder blocks
   - Drag and drop (if implemented)

5. **Preview**:
   - Click "Preview" to see how it looks
   - Opens in new tab with frontend styling

6. **Save as Draft** or **Publish**:
   - "Save Draft" → Sets status: "draft"
   - "Publish" → Sets status: "published"

7. **Backend Saves**:
   ```javascript
   {
     slug: "top-game-companies",
     title: "Top Game Companies",
     category: "Games",
     pageContent: [ /* all blocks in order */ ],
     status: "published"
   }
   ```

---

## ✨ Important Features to Implement

### 1. Auto-generate Slug
```javascript
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// "Top Game Companies 2024" → "top-game-companies-2024"
```

### 2. Character Counter for Description
```javascript
<textarea maxLength={200}>
  {description}
</textarea>
<p>{description.length} / 200 characters</p>
```

### 3. Drag-and-Drop Reordering
Allow admins to drag blocks up/down to reorder

### 4. Live Preview
Show preview in a modal or separate tab using frontend styling

### 5. Save Draft Feature
Allow saving without publishing

### 6. Validation
- Title: Required, max 255 chars
- Slug: Required, unique, lowercase with hyphens only
- Description: Required, 150-200 chars recommended
- Category: Required, must be one of: "Games", "Development", "AI", "CGI", "AR"
- Cover Image: Required, valid URL
- Content: At least 1 block required

---

## 🚀 Table of Contents Auto-Generation

**Important**: You don't need a separate field for table of contents!

The frontend automatically generates it by filtering blocks:

```javascript
// Frontend does this automatically
const tableOfContents = pageContent
  .filter(block => block.type === "heading")
  .map((block, index) => ({
    id: `section${index + 1}`,
    title: block.content
  }));
```

**Example**:

If pageContent has:
```javascript
[
  { type: "heading", content: "Introduction" },      // ← In TOC
  { type: "paragraph", content: "..." },
  { type: "subheading", content: "Nintendo" },       // ← NOT in TOC
  { type: "paragraph", content: "..." },
  { type: "heading", content: "Conclusion" },        // ← In TOC
]
```

Table of Contents will show:
- Introduction
- Conclusion

---

## 📱 Frontend URLs

After publishing, blog will be accessible at:

```
https://yoursite.com/Pages/Blog/top-game-companies
                                 └─ slug from database
```

---

## 🎨 Example Admin Page Mockup

```
╔═══════════════════════════════════════════════════════╗
║  Create New Blog                        [Preview] [×] ║
╠═══════════════════════════════════════════════════════╣
║                                                       ║
║  Basic Information                                    ║
║  ─────────────────                                    ║
║  Title *                                              ║
║  ┌─────────────────────────────────────────────────┐ ║
║  │ Top Game Development Companies                  │ ║
║  └─────────────────────────────────────────────────┘ ║
║                                                       ║
║  Slug *                                               ║
║  ┌─────────────────────────────────────────────────┐ ║
║  │ top-game-development-companies                  │ ║
║  └─────────────────────────────────────────────────┘ ║
║                                                       ║
║  Category *            Cover Image *                  ║
║  ┌─────────────────┐   ┌───────────────────────────┐ ║
║  │ Games      ▼   │   │ [Upload Image]            │ ║
║  └─────────────────┘   └───────────────────────────┘ ║
║                                                       ║
║  Description *                                        ║
║  ┌─────────────────────────────────────────────────┐ ║
║  │ Made up your mind to invest in game...          │ ║
║  └─────────────────────────────────────────────────┘ ║
║  150 / 200 characters                                 ║
║                                                       ║
║  ─────────────────────────────────────────────────── ║
║                                                       ║
║  Content Builder                                      ║
║  ────────────────                                     ║
║  [+ Add Content Block ▼]                             ║
║                                                       ║
║  ┌─────────────────────────────────────────────────┐ ║
║  │ 📄 Heading                                      │ ║
║  │ Top Game Development Companies                  │ ║
║  │ [✏️ Edit] [🗑️ Delete] [↑] [↓]                   │ ║
║  └─────────────────────────────────────────────────┘ ║
║                                                       ║
║  ┌─────────────────────────────────────────────────┐ ║
║  │ 📝 Paragraph                                    │ ║
║  │ Made up your mind to invest in game...          │ ║
║  │ [✏️ Edit] [🗑️ Delete] [↑] [↓]                   │ ║
║  └─────────────────────────────────────────────────┘ ║
║                                                       ║
║  [+ Add Content Block ▼]                             ║
║                                                       ║
║  ─────────────────────────────────────────────────── ║
║                                                       ║
║  [Save as Draft]          [Publish]                   ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
```

---

## 📚 Tech Stack Suggestions

### Frontend (Admin Panel):
- React / Next.js
- Rich text editor: Draft.js, Slate.js, or TipTap
- Form handling: React Hook Form or Formik
- Drag-and-drop: react-beautiful-dnd or dnd-kit

### Backend:
- Node.js + Express or NestJS
- Database: MongoDB
- File upload: Multer + Azure Blob Storage
- Image optimization: Sharp

---

## ✅ Implementation Checklist

### Backend:
- [ ] Create Blog model/schema
- [ ] POST /api/blogs endpoint
- [ ] PUT /api/blogs/:id endpoint
- [ ] DELETE /api/blogs/:id endpoint
- [ ] GET /api/blogs/:id endpoint
- [ ] POST /api/blogs/upload endpoint
- [ ] Slug uniqueness validation
- [ ] Authentication middleware

### Admin Frontend:
- [ ] Blog list page
- [ ] Create blog page
- [ ] Edit blog page
- [ ] Basic info form
- [ ] Content block builder
- [ ] Add heading block UI
- [ ] Add subheading block UI
- [ ] Add paragraph block UI
- [ ] Add list block UI
- [ ] Reorder blocks feature
- [ ] Delete block feature
- [ ] Image upload
- [ ] Preview functionality
- [ ] Save draft feature
- [ ] Publish feature
- [ ] Form validation

---

## 🎯 Quick Reference

**Category Values** (exact spelling):
- Games
- Development  
- AI
- CGI
- AR

**Block Types**:
- `heading` - Main titles (in TOC)
- `subheading` - Bold text (not in TOC)
- `paragraph` - Regular text
- `list` - Bullet points

**Required Fields**:
- slug (unique)
- title
- description
- category
- coverImage
- pageContent (array, min 1 block)
- status ("draft" or "published")

---

**All done! Use this guide to build your admin CMS.** 🚀

