# Complete API Response Format & Content Structure

## 🎯 Complete API Response

### Endpoint: `GET /api/blogs/slug/{slug}?isExpand=true`

### Full Response JSON:

```json
{
  "success": true,
  "data": {
    "_id": "67890abcdef1234567890",
    "slug": "top-game-development-companies",
    "title": "Top Game Development Companies - Choose the Best One",
    "subtitle": "A comprehensive guide to choosing the best game development partner",
    "description": "Made up your mind to invest in game development? A great decision indeed. The reasons are many such as diverse monetization models, a loyal global Games community...",
    "category": "Games",
    "coverImage": "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/blog-cover.png",
    "status": "published",
    "createdAt": "2024-10-15T10:30:00.000Z",
    "updatedAt": "2024-10-15T10:30:00.000Z",
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
        "content": "The reasons are many such as diverse monetization models, and a loyal global Games community, a higher engagement rate among others."
      },
      {
        "type": "paragraph",
        "content": "This ensures that not only does your investment grow faster but it is also more stable and sustainable for the longer term."
      },
      {
        "type": "heading",
        "content": "Top 9 Game Development Companies in the World in 2024"
      },
      {
        "type": "subheading",
        "content": "Nintendo"
      },
      {
        "type": "paragraph",
        "content": "They are one of the oldest game development companies, founded way back in the 19th century i.e. 1889."
      },
      {
        "type": "subheading",
        "content": "Market Segment:"
      },
      {
        "type": "paragraph",
        "content": "Broad, with a focus on family-friendly and innovative Games experiences."
      },
      {
        "type": "subheading",
        "content": "Ubisoft"
      },
      {
        "type": "paragraph",
        "content": "Ubisoft, a French software and video game development company, was founded in 1986."
      },
      {
        "type": "heading",
        "content": "How to Choose a Game Development Company"
      },
      {
        "type": "subheading",
        "content": "Step 1. Understand your project needs"
      },
      {
        "type": "list",
        "items": [
          "Games genre",
          "Platform",
          "Target audience",
          "Core gameplay mechanics"
        ]
      },
      {
        "type": "paragraph",
        "content": "This is the most effective and fastest way to identify the right game development partner."
      },
      {
        "type": "heading",
        "content": "Conclusion"
      },
      {
        "type": "paragraph",
        "content": "Game development is one of the most lucrative spaces to explore."
      }
    ]
  }
}
```

---

## 📊 Content Block Relationship & Structure

### Visual Representation:

```
HEADING (Section 1) ← Shows in Table of Contents
├── Paragraph
├── Paragraph
├── Paragraph
│
HEADING (Section 2) ← Shows in Table of Contents
├── Subheading (Company 1)
│   ├── Paragraph
│   ├── Paragraph
│   ├── Subheading (Market Segment)
│   │   └── Paragraph
│   ├── Subheading (Audience)
│   │   └── Paragraph
│
├── Subheading (Company 2)
│   ├── Paragraph
│   ├── List
│
HEADING (Section 3) ← Shows in Table of Contents
├── Paragraph
├── Paragraph
```

---

## 🎨 Block Type Relationships

### 1. HEADING = Main Section (Level 1)

**Purpose**: Major sections of the blog  
**Shows in**: Table of Contents  
**Styling**: Large bold text (h1)

```json
{
  "type": "heading",
  "content": "Top Game Development Companies - Choose the Best One"
}
```

**Visual Output**:
```
════════════════════════════════════════
TOP GAME DEVELOPMENT COMPANIES          ← Very large, bold
════════════════════════════════════════
```

**In Admin Panel**:
- User clicks "Add Heading"
- Types: "Top Game Development Companies"
- Saves
- **Automatically added to Table of Contents**

---

### 2. SUBHEADING = Subsection (Level 2)

**Purpose**: Smaller topics within a section  
**Shows in**: NOT in Table of Contents (only in content)  
**Styling**: Medium bold text

```json
{
  "type": "subheading",
  "content": "Nintendo"
}
```

**Visual Output**:
```
Nintendo                                 ← Medium bold
────────────────────────────────────────
```

**In Admin Panel**:
- User clicks "Add Subheading"
- Types: "Nintendo"
- Saves
- **NOT added to Table of Contents**

---

### 3. PARAGRAPH = Regular Text

**Purpose**: Normal content text  
**Styling**: Regular paragraph

```json
{
  "type": "paragraph",
  "content": "They are one of the oldest game development companies..."
}
```

**Visual Output**:
```
They are one of the oldest game           ← Normal text
development companies, founded way back
in the 19th century...
```

---

### 4. LIST = Bullet Points

**Purpose**: List of items  
**Styling**: Bulleted list

```json
{
  "type": "list",
  "items": [
    "Games genre",
    "Platform",
    "Target audience"
  ]
}
```

**Visual Output**:
```
• Games genre                             ← Bullet points
• Platform
• Target audience
```

---

## 🏗️ Complete Content Structure Example

### Admin Creates This Structure:

```
1. Add Heading: "Introduction"
2. Add Paragraph: "Welcome to our blog..."
3. Add Paragraph: "In this article, we will..."
4. Add Heading: "Top Companies"
5. Add Subheading: "Nintendo"
6. Add Paragraph: "Nintendo is one of the oldest..."
7. Add Subheading: "Market Segment:"
8. Add Paragraph: "Broad, with focus on family..."
9. Add Subheading: "Ubisoft"
10. Add Paragraph: "Ubisoft is a French company..."
11. Add Heading: "How to Choose"
12. Add List: ["Item 1", "Item 2", "Item 3"]
13. Add Paragraph: "These are important factors..."
14. Add Heading: "Conclusion"
15. Add Paragraph: "Thank you for reading..."
```

### Saved as pageContent Array:

```json
{
  "pageContent": [
    { "type": "heading", "content": "Introduction" },
    { "type": "paragraph", "content": "Welcome to our blog..." },
    { "type": "paragraph", "content": "In this article, we will..." },
    { "type": "heading", "content": "Top Companies" },
    { "type": "subheading", "content": "Nintendo" },
    { "type": "paragraph", "content": "Nintendo is one of the oldest..." },
    { "type": "subheading", "content": "Market Segment:" },
    { "type": "paragraph", "content": "Broad, with focus on family..." },
    { "type": "subheading", "content": "Ubisoft" },
    { "type": "paragraph", "content": "Ubisoft is a French company..." },
    { "type": "heading", "content": "How to Choose" },
    { "type": "list", "items": ["Item 1", "Item 2", "Item 3"] },
    { "type": "paragraph", "content": "These are important factors..." },
    { "type": "heading", "content": "Conclusion" },
    { "type": "paragraph", "content": "Thank you for reading..." }
  ]
}
```

### Table of Contents Auto-Generated:

```json
{
  "tableOfContents": [
    { "id": "section1", "title": "Introduction" },
    { "id": "section2", "title": "Top Companies" },
    { "id": "section3", "title": "How to Choose" },
    { "id": "section4", "title": "Conclusion" }
  ]
}
```

**Notice**: Only `heading` blocks appear in TOC, not `subheading` blocks!

---

## 🎯 Key Relationships

### Heading → Section Start
- **Heading** marks the **start of a new section**
- Everything after a heading belongs to that section
- Until the next heading appears

### Example:

```
HEADING: "Top Companies"                 ← Section 2 starts
  ├─ SUBHEADING: "Nintendo"              ← Part of Section 2
  │  └─ PARAGRAPH: "..."                 ← Part of Section 2
  ├─ SUBHEADING: "Ubisoft"               ← Part of Section 2
  │  └─ PARAGRAPH: "..."                 ← Part of Section 2
  
HEADING: "Conclusion"                    ← Section 3 starts
  └─ PARAGRAPH: "..."                    ← Part of Section 3
```

---

## 🔄 Admin Panel Flow

### 1. Basic Info Form
```javascript
{
  "slug": "top-game-companies",
  "title": "Top Game Development Companies",
  "description": "A comprehensive guide...",
  "category": "Games",
  "coverImage": "https://..."
}
```

### 2. Content Builder
```
Order matters! Blocks are saved in the exact order they are added.

Block 1: Heading → "Introduction"
Block 2: Paragraph → "Welcome text..."
Block 3: Heading → "Main Content"
Block 4: Subheading → "Topic 1"
Block 5: Paragraph → "Details..."
...
```

### 3. Save to Database
```javascript
{
  slug: "top-game-companies",
  title: "Top Game Development Companies",
  description: "A comprehensive guide...",
  category: "Games",
  coverImage: "https://...",
  pageContent: [
    { type: "heading", content: "Introduction" },      // Block 1
    { type: "paragraph", content: "Welcome text..." }, // Block 2
    { type: "heading", content: "Main Content" },      // Block 3
    { type: "subheading", content: "Topic 1" },        // Block 4
    { type: "paragraph", content: "Details..." },      // Block 5
    // ... in exact order
  ],
  status: "published",
  createdAt: new Date(),
  updatedAt: new Date()
}
```

---

## 📝 Database Schema for Admin

### blogs Collection

```javascript
{
  _id: ObjectId("67890abcdef1234567890"),
  slug: String,          // URL-friendly unique identifier
  title: String,         // Blog title
  subtitle: String,      // Optional subtitle
  description: String,   // Short summary (150-200 chars)
  category: String,      // "Games", "Development", "AI", "CGI", "AR"
  coverImage: String,    // Full URL to image
  pageContent: Array,    // Array of content blocks
  status: String,        // "draft" or "published"
  createdAt: Date,
  updatedAt: Date
}
```

### pageContent Array Structure

```javascript
pageContent: [
  {
    type: "heading",      // Block type
    content: "Text"       // Block content
  },
  {
    type: "paragraph",
    content: "Text"
  },
  {
    type: "subheading",
    content: "Text"
  },
  {
    type: "list",
    items: ["item1", "item2", "item3"]  // Array for list type
  }
]
```

---

## 🎨 Frontend Rendering Logic

### How Frontend Processes the Data:

```javascript
// 1. Fetch blog
const blog = await fetch('/api/blogs/slug/top-game-companies?isExpand=true');

// 2. Extract pageContent
const content = blog.data.pageContent;

// 3. Auto-generate Table of Contents
const toc = content
  .filter(block => block.type === "heading")
  .map((block, index) => ({
    id: `section${index + 1}`,
    title: block.content
  }));
// Result: [
//   { id: "section1", title: "Introduction" },
//   { id: "section2", title: "Top Companies" },
//   { id: "section3", title: "Conclusion" }
// ]

// 4. Group content by sections
let currentSection = [];
const sections = [];

content.forEach(block => {
  if (block.type === "heading") {
    if (currentSection.length > 0) {
      sections.push(currentSection);
    }
    currentSection = [block];
  } else {
    currentSection.push(block);
  }
});

// 5. Render each section
sections.map(section => (
  <div id="section1">
    {section.map(block => renderBlock(block))}
  </div>
));

// 6. Render block based on type
function renderBlock(block) {
  switch(block.type) {
    case 'heading':
      return <h1>{block.content}</h1>;
    case 'subheading':
      return <h2>{block.content}</h2>;
    case 'paragraph':
      return <p>{block.content}</p>;
    case 'list':
      return <ul>{block.items.map(item => <li>{item}</li>)}</ul>;
  }
}
```

---

## ✅ Complete Example for Admin

### Scenario: Creating a blog about "Top Game Companies"

#### Step 1: Fill Basic Info
```
Title: Top Game Development Companies
Slug: top-game-development-companies (auto-generated)
Description: Made up your mind to invest in game development? A great decision indeed...
Category: Games
Cover Image: [upload image]
```

#### Step 2: Add Content Blocks (in order)

**Block 1** - Add Heading:
```
Type: heading
Content: "Introduction to Game Development"
```

**Block 2** - Add Paragraph:
```
Type: paragraph
Content: "Game development is a booming industry with endless opportunities..."
```

**Block 3** - Add Paragraph:
```
Type: paragraph
Content: "In this article, we'll explore the top companies..."
```

**Block 4** - Add Heading:
```
Type: heading
Content: "Top 10 Game Companies"
```

**Block 5** - Add Subheading:
```
Type: subheading
Content: "1. Nintendo"
```

**Block 6** - Add Paragraph:
```
Type: paragraph
Content: "Nintendo is one of the oldest and most respected..."
```

**Block 7** - Add Subheading:
```
Type: subheading
Content: "Key Features:"
```

**Block 8** - Add List:
```
Type: list
Items: ["Innovation", "Family-friendly games", "Quality hardware"]
```

**Block 9** - Add Heading:
```
Type: heading
Content: "How to Choose the Right Company"
```

**Block 10** - Add Paragraph:
```
Type: paragraph
Content: "Choosing the right game development company requires..."
```

**Block 11** - Add Heading:
```
Type: heading
Content: "Conclusion"
```

**Block 12** - Add Paragraph:
```
Type: paragraph
Content: "Game development is an exciting field..."
```

#### Step 3: Save

Database saves as:
```json
{
  "_id": "...",
  "slug": "top-game-development-companies",
  "title": "Top Game Development Companies",
  "description": "Made up your mind...",
  "category": "Games",
  "coverImage": "https://...",
  "status": "published",
  "pageContent": [
    { "type": "heading", "content": "Introduction to Game Development" },
    { "type": "paragraph", "content": "Game development is a booming..." },
    { "type": "paragraph", "content": "In this article, we'll explore..." },
    { "type": "heading", "content": "Top 10 Game Companies" },
    { "type": "subheading", "content": "1. Nintendo" },
    { "type": "paragraph", "content": "Nintendo is one of the oldest..." },
    { "type": "subheading", "content": "Key Features:" },
    { "type": "list", "items": ["Innovation", "Family-friendly games", "Quality hardware"] },
    { "type": "heading", "content": "How to Choose the Right Company" },
    { "type": "paragraph", "content": "Choosing the right game development..." },
    { "type": "heading", "content": "Conclusion" },
    { "type": "paragraph", "content": "Game development is an exciting..." }
  ],
  "createdAt": "2024-10-15T10:30:00.000Z",
  "updatedAt": "2024-10-15T10:30:00.000Z"
}
```

#### Step 4: Table of Contents Auto-Generated

Frontend automatically creates:
```json
[
  { "id": "section1", "title": "Introduction to Game Development" },
  { "id": "section2", "title": "Top 10 Game Companies" },
  { "id": "section3", "title": "How to Choose the Right Company" },
  { "id": "section4", "title": "Conclusion" }
]
```

**Notice**: Only 4 TOC items (from 4 headings), even though we have 12 total blocks!

---

## 🚨 Important Rules

1. **Order Matters**: Blocks are rendered in the exact order saved
2. **Heading = New Section**: Each heading starts a new section
3. **Subheading ≠ Heading**: Subheadings don't appear in TOC
4. **No Nesting**: Blocks are flat array, not nested
5. **Type Must Match**: Use exact type names: "heading", "subheading", "paragraph", "list"

---

## 💡 Tips for Admin Panel

1. **Visual Editor**: Show blocks as cards that can be reordered
2. **Preview**: Let admin preview before publishing
3. **Auto-save**: Save drafts automatically
4. **Validation**: Ensure at least one heading exists
5. **Character Limit**: Warn if paragraph is too long

---

**Use this document to build your admin panel!** 🚀

