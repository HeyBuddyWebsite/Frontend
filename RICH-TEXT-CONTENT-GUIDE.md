# Rich Text Content Guide

## 🎯 Overview

The blog system now supports rich text content rendering, allowing for more engaging and dynamic blog posts. This guide explains how to structure rich text content in your blog API responses.

## 📋 Supported Content Types

### 1. Basic Content Types (Existing)

#### Heading
```json
{
  "type": "heading",
  "content": "Main Section Title"
}
```

#### Subheading
```json
{
  "type": "subheading", 
  "content": "Subsection Title"
}
```

#### Paragraph
```json
{
  "type": "paragraph",
  "content": "Regular paragraph text with **bold** and *italic* support"
}
```

#### List
```json
{
  "type": "list",
  "items": [
    "First item with **bold text**",
    "Second item with *italic text*",
    "Third item with `code snippet`"
  ]
}
```

### 2. Rich Text Content Types (New)

#### Markdown Block
```json
{
  "type": "markdown",
  "content": "# Full Markdown Support\n\nThis supports **bold**, *italic*, `code`, [links](https://example.com), and more!\n\n```javascript\nconst example = 'code block';\n```\n\n> This is a blockquote"
}
```

#### Image Block
```json
{
  "type": "image",
  "src": "https://example.com/image.jpg",
  "alt": "Image description",
  "width": 800,
  "height": 400,
  "caption": "Optional image caption"
}
```

#### Code Block
```json
{
  "type": "code",
  "content": "const example = 'code content';\nconsole.log('Hello World');",
  "language": "javascript",
  "caption": "Optional code caption"
}
```

#### Quote Block
```json
{
  "type": "quote",
  "content": "This is an inspiring quote that will be highlighted.",
  "author": "Author Name"
}
```

#### Video Block
```json
{
  "type": "video",
  "src": "https://www.youtube.com/embed/VIDEO_ID",
  "title": "Video Title",
  "caption": "Optional video caption"
}
```

#### Embed Block
```json
{
  "type": "embed",
  "html": "<iframe src='...' width='100%' height='400'></iframe>"
}
```

## 🎨 Rich Text Features

### Inline Formatting Support

All text content (paragraphs, list items, quotes) now supports:

- **Bold text**: `**bold**` or `__bold__`
- *Italic text*: `*italic*` or `_italic_`
- `Code snippets`: `` `code` ``
- [Links](https://example.com): `[text](url)`

### Automatic Detection

The system automatically detects markdown-like syntax in any text content and renders it appropriately. No need to specify a special type - just include markdown syntax in your content!

## 📊 Complete Example

Here's a complete blog API response with rich text content:

```json
{
  "success": true,
  "data": {
    "_id": "67890abcdef1234567890",
    "slug": "rich-text-blog-example",
    "title": "Rich Text Blog Example",
    "description": "A comprehensive example of rich text content",
    "category": "Development",
    "coverImage": "https://example.com/cover.jpg",
    "status": "published",
    "createdAt": "2024-10-15T10:30:00.000Z",
    "updatedAt": "2024-10-15T10:30:00.000Z",
    "pageContent": [
      {
        "type": "heading",
        "content": "Introduction to Rich Text"
      },
      {
        "type": "paragraph",
        "content": "This blog demonstrates **rich text** capabilities with *various* formatting options and `code snippets`."
      },
      {
        "type": "markdown",
        "content": "## Markdown Support\n\nThis is a full markdown block with:\n\n- **Bold text**\n- *Italic text*\n- `Inline code`\n- [External links](https://example.com)\n\n```javascript\nconst example = {\n  message: 'Hello World',\n  timestamp: new Date()\n};\n```\n\n> This is a blockquote with markdown"
      },
      {
        "type": "image",
        "src": "https://example.com/demo-image.jpg",
        "alt": "Demo image",
        "width": 800,
        "height": 400,
        "caption": "This is a demo image with caption"
      },
      {
        "type": "code",
        "content": "function greetUser(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greetUser('World'));",
        "language": "javascript",
        "caption": "JavaScript greeting function"
      },
      {
        "type": "quote",
        "content": "The best way to predict the future is to create it.",
        "author": "Peter Drucker"
      },
      {
        "type": "video",
        "src": "https://www.youtube.com/embed/dQw4w9WgXcQ",
        "title": "Demo Video",
        "caption": "This is a demo video embed"
      },
      {
        "type": "list",
        "items": [
          "**Bold list item** with formatting",
          "*Italic list item* with emphasis",
          "`Code list item` with syntax highlighting",
          "[Link list item](https://example.com) with navigation"
        ]
      },
      {
        "type": "heading",
        "content": "Conclusion"
      },
      {
        "type": "paragraph",
        "content": "Rich text content makes blogs more engaging and provides better **user experience** with *dynamic* formatting and `interactive` elements."
      }
    ]
  }
}
```

## 🔧 Backend Implementation

### Database Schema

Your blog documents should include a `pageContent` array with the rich text structure:

```javascript
const blogSchema = new mongoose.Schema({
  slug: String,
  title: String,
  description: String,
  category: String,
  coverImage: String,
  status: String,
  pageContent: [{
    type: {
      type: String,
      enum: [
        'heading', 'subheading', 'paragraph', 'list',
        'markdown', 'image', 'code', 'quote', 'video', 'embed'
      ],
      required: true
    },
    content: String,        // For text-based content
    items: [String],        // For list type
    src: String,           // For image/video
    alt: String,           // For image
    width: Number,         // For image
    height: Number,       // For image
    caption: String,      // For image/code/video
    language: String,     // For code
    author: String,       // For quote
    title: String,        // For video
    html: String          // For embed
  }],
  createdAt: Date,
  updatedAt: Date
});
```

### API Response Format

Ensure your API returns the content in the expected format:

```javascript
// GET /api/blogs/slug/{slug}?isExpand=true
{
  "success": true,
  "data": {
    "_id": "...",
    "slug": "...",
    "title": "...",
    "description": "...",
    "category": "...",
    "coverImage": "...",
    "status": "published",
    "pageContent": [
      // Array of content blocks as shown above
    ],
    "createdAt": "2024-10-15T10:30:00.000Z",
    "updatedAt": "2024-10-15T10:30:00.000Z"
  }
}
```

## 🎨 Frontend Rendering

The frontend automatically handles all rich text content types:

- **Automatic Detection**: Detects markdown syntax in any text content
- **Safe Rendering**: Sanitizes HTML content to prevent XSS attacks
- **Syntax Highlighting**: Code blocks are highlighted with appropriate themes
- **Responsive Design**: Images and videos are responsive
- **Accessibility**: Proper alt text and semantic HTML

## 🚀 Migration Guide

### From Simple Content to Rich Text

1. **Existing Content**: All existing content types continue to work
2. **Gradual Migration**: Add rich text features incrementally
3. **Backward Compatibility**: Old content renders without changes

### Example Migration

**Before (Simple)**:
```json
{
  "type": "paragraph",
  "content": "This is plain text with no formatting."
}
```

**After (Rich Text)**:
```json
{
  "type": "paragraph",
  "content": "This is **rich text** with *formatting* and `code` support!"
}
```

## 🔒 Security Considerations

- **HTML Sanitization**: All HTML content is sanitized using `rehype-sanitize`
- **XSS Prevention**: Dangerous HTML tags and attributes are removed
- **Safe Links**: External links open in new tabs with `rel="noopener noreferrer"`
- **Content Validation**: Validate content structure on the backend

## 📱 Responsive Design

All rich text content is responsive:

- **Images**: Scale appropriately on all devices
- **Videos**: Maintain aspect ratio with responsive containers
- **Tables**: Horizontal scroll on mobile devices
- **Code Blocks**: Horizontal scroll for long lines

## 🎯 Best Practices

1. **Use Semantic Types**: Choose appropriate content types for your content
2. **Provide Alt Text**: Always include alt text for images
3. **Optimize Images**: Use appropriate dimensions and compression
4. **Test Content**: Preview rich text content before publishing
5. **Keep It Simple**: Don't overuse complex formatting

## 🐛 Troubleshooting

### Common Issues

1. **Content Not Rendering**: Check that the content type is supported
2. **Formatting Issues**: Ensure markdown syntax is correct
3. **Image Loading**: Verify image URLs are accessible
4. **Code Highlighting**: Check that language is specified correctly

### Debug Mode

Enable debug logging by adding `console.log` statements in the `renderBlock` function to see what content types are being processed.

## 📚 Additional Resources

- [React Markdown Documentation](https://github.com/remarkjs/react-markdown)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [Rehype Sanitize](https://github.com/rehypejs/rehype-sanitize)
- [Syntax Highlighting](https://highlightjs.org/)

---

**Ready to create rich, engaging blog content!** 🚀
