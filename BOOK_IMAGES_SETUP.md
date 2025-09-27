# Adding Real Book Cover Images

## Instructions for Adding the Actual Book Cover Images

1. **Save the book cover images** from the attachments to `/public/books/` with these exact filenames:
   - `on-the-verge.jpg` (Featured book)
   - `the-forgotten-ways.jpg`
   - `the-forgotten-ways-handbook.jpg`
   - `the-permanent-revolution.jpg`
   - `untamed.jpg`
   - `the-shaping-of-things-to-come.jpg`
   - `right-here-right-now.jpg`
   - `rejesus.jpg`
   - `the-faith-of-leap.jpg`

2. **Update the components** to use the real images by:

### For FeaturedBook component (`/src/components/books/featured-book.tsx`):
Replace the placeholder div with:
```tsx
<Image
  src="/books/on-the-verge.jpg"
  alt="On the Verge - A Journey into the Apostolic Future of the Church"
  fill
  className="object-cover"
  priority
/>
```

### For BooksGrid component (`/src/components/books/books-grid.tsx`):
Replace the placeholder div with:
```tsx
<Image
  src={book.image}
  alt={`${book.title} - ${book.subtitle}`}
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-500"
/>
```

And add back the Image import:
```tsx
import Image from 'next/image'
```

3. **Image Optimization**:
   - Ensure images are high resolution (800x1200px minimum)
   - JPEG format for optimal performance
   - Proper 3:4 aspect ratio for book covers

Once the real images are added, the placeholders will be replaced with the actual book covers from the attachments.