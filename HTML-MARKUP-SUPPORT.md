# HTML Markup Support for Blogs

## Overview
The blog system now fully supports HTML markup from the backend. Content can be sent as HTML strings or structured format, and both will render correctly with proper styling and XSS protection.

---

## ✅ Supported Formats

### 1. **Pure HTML String**
Backend can send `pageContent` as a single HTML string:
```json
{
  "pageContent": "<p>This is a paragraph with <strong>bold text</strong>.</p><ul><li>Item 1</li><li>Item 2</li></ul>"
}
```

### 2. **Structured Format (Existing)**
Backend can send `pageContent` as an array of blocks:
```json
{
  "pageContent": [
    {
      "type": "heading",
      "content": "Main Title"
    },
    {
      "type": "paragraph",
      "content": "Paragraph text"
    }
  ]
}
```

### 3. **HTML in Structured Format**
Backend can send HTML within structured blocks:
```json
{
  "pageContent": [
    {
      "type": "paragraph",
      "content": "<p>This is HTML <a href='#'>with a link</a></p>"
    },
    {
      "type": "list",
      "items": [
        "<li>Item with <strong>bold</strong> text</li>",
        "<li>Another item</li>"
      ]
    }
  ]
}
```

---

## 🔒 Security Features

### XSS Protection
- **DOMPurify** is used to sanitize all HTML content
- Only safe HTML tags are allowed
- Dangerous attributes and scripts are automatically removed
- Prevents XSS attacks while preserving formatting

### Allowed HTML Tags
- **Text**: `p`, `br`, `strong`, `em`, `u`, `b`, `i`, `span`, `div`
- **Headings**: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- **Lists**: `ul`, `ol`, `li`
- **Links**: `a` (with `href`, `target`, `rel`)
- **Code**: `code`, `pre`
- **Media**: `img` (with `src`, `alt`, `width`, `height`)
- **Other**: `blockquote`, `table`, `thead`, `tbody`, `tr`, `th`, `td`, `hr`, `section`, `article`

### Allowed Attributes
- `href`, `target`, `rel` (for links)
- `src`, `alt`, `title`, `width`, `height` (for images)
- `class`, `id` (for styling)
- `style` (for inline styles)

---

## 🎨 Styling

### Automatic Styling
All HTML content is automatically styled to match the blog design:
- **Paragraphs**: White text, light font weight, proper spacing
- **Headings**: Bold, larger sizes, proper margins
- **Lists**: Bulleted/numbered with proper indentation
- **Links**: Blue color with hover effects
- **Code**: Dark background with green text
- **Images**: Responsive, rounded corners
- **Tables**: Styled borders and spacing

### CSS Classes
HTML content is wrapped in `.blog-html-content` class with comprehensive styling for all HTML elements.

---

## 📝 Usage Examples

### Example 1: Simple HTML
```html
<p>This is a paragraph.</p>
<p>Another paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
```

### Example 2: Lists
```html
<ul>
  <li>First item</li>
  <li>Second item with <a href="https://example.com">a link</a></li>
  <li>Third item</li>
</ul>
```

### Example 3: Headings and Content
```html
<h1>Main Title</h1>
<h2>Subtitle</h2>
<p>Content goes here.</p>
```

### Example 4: Images
```html
<p>Here's an image:</p>
<img src="https://example.com/image.jpg" alt="Description" />
```

### Example 5: Code Blocks
```html
<pre><code>const example = "Hello World";</code></pre>
```

---

## 🔍 Detection Logic

The component automatically detects if content is HTML:
1. **Checks for HTML tags** using regex pattern: `/<[a-z][\s\S]*>/i`
2. **If HTML detected**: Renders using `dangerouslySetInnerHTML` with DOMPurify sanitization
3. **If not HTML**: Renders using ReactMarkdown (supports Markdown syntax)

---

## 🚀 Backend Integration

### Option 1: Send Pure HTML
```json
{
  "pageContent": "<p>Your HTML content here</p>"
}
```

### Option 2: Send Structured with HTML
```json
{
  "pageContent": [
    {
      "type": "paragraph",
      "content": "<p>HTML paragraph</p>"
    }
  ]
}
```

### Option 3: Mix Both
You can mix HTML strings and structured blocks in the same `pageContent` array.

---

## 📋 Table of Contents

### Auto-Generated TOC
- If `pageContent` is structured (array), TOC is auto-generated from headings
- If `pageContent` is HTML string, backend should provide `tableOfContents` array
- Backend can always provide `tableOfContents` to override auto-generation

### TOC Format
```json
{
  "tableOfContents": [
    {
      "id": "section1",
      "title": "Section Title"
    }
  ]
}
```

---

## 🎯 Supported HTML Elements

| Element | Supported | Styled |
|---------|-----------|--------|
| `<p>` | ✅ | ✅ |
| `<h1>` - `<h6>` | ✅ | ✅ |
| `<ul>`, `<ol>`, `<li>` | ✅ | ✅ |
| `<a>` | ✅ | ✅ |
| `<strong>`, `<em>` | ✅ | ✅ |
| `<code>`, `<pre>` | ✅ | ✅ |
| `<img>` | ✅ | ✅ |
| `<blockquote>` | ✅ | ✅ |
| `<table>` | ✅ | ✅ |
| `<hr>` | ✅ | ✅ |
| `<div>`, `<span>` | ✅ | ✅ |
| `<section>`, `<article>` | ✅ | ✅ |

---

## 🛠️ Implementation Details

### Files Modified
1. **`src/components/Blog/DynamicBlogContent.jsx`**
   - Added HTML detection logic
   - Added DOMPurify sanitization
   - Updated render functions to handle HTML
   - Added support for HTML strings in `pageContent`

2. **`src/components/Blog/page.css`**
   - Added comprehensive CSS styles for HTML elements
   - Styled all HTML tags to match blog design

### Dependencies Added
- `dompurify` - HTML sanitization
- `isomorphic-dompurify` - SSR-compatible DOMPurify

---

## ✅ Testing Checklist

- [x] HTML strings render correctly
- [x] Structured format still works
- [x] HTML in structured blocks works
- [x] XSS protection works (tested with script tags)
- [x] All HTML elements styled correctly
- [x] Links work and open in new tab
- [x] Images are responsive
- [x] Lists render correctly
- [x] Code blocks styled properly
- [x] Tables render with borders
- [x] Mixed content (HTML + structured) works

---

## 🎨 Styling Reference

### Colors
- **Text**: White (`#ffffff`)
- **Links**: Blue (`#60a5fa`) with hover (`#93c5fd`)
- **Code**: Green (`#4ade80`) on dark background (`#1f2937`)
- **Blockquote**: Gray (`#d1d5db`) with blue left border

### Typography
- **Base font**: 1rem (16px), light weight (300)
- **H1**: 1.875rem (30px), extra bold (800)
- **H2**: 1.5rem (24px), bold (700)
- **H3**: 1.25rem (20px), semibold (600)

### Spacing
- **Paragraphs**: 1rem bottom margin
- **Headings**: Top and bottom margins based on size
- **Lists**: 1rem bottom margin, 0.5rem item spacing

---

## 🔄 Backward Compatibility

✅ **Fully backward compatible**
- Existing structured format still works
- Existing hardcoded blogs still work
- No breaking changes
- Gradual migration path

---

## 📖 Example API Response

```json
{
  "success": true,
  "data": {
    "_id": "123",
    "slug": "example-blog",
    "title": "Example Blog Post",
    "category": "Development",
    "coverImage": "https://example.com/image.jpg",
    "pageContent": "<h1>Main Title</h1><p>This is a paragraph with <strong>bold text</strong>.</p><ul><li>Item 1</li><li>Item 2</li></ul><p>Another paragraph with a <a href='https://example.com'>link</a>.</p>",
    "tableOfContents": [
      {
        "id": "section1",
        "title": "Main Title"
      }
    ]
  }
}
```

---

## 🎉 Summary

✅ **HTML markup fully supported**  
✅ **XSS protection with DOMPurify**  
✅ **Automatic styling**  
✅ **Backward compatible**  
✅ **Multiple format support**  
✅ **Production ready**

The blog system now handles HTML content seamlessly while maintaining security and styling consistency!

