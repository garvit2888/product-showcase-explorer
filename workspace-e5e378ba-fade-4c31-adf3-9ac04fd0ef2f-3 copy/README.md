# Product Showcase Explorer

A modern, responsive e-commerce product showcase application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Product Grid Display**: Responsive grid layout showing products with images, titles, prices, ratings, and stock information
- **Advanced Filtering**: 
  - Category-based filtering (dynamically fetched from API)
  - Real-time search functionality across product titles, descriptions, and brands
  - Multiple sorting options (price, rating, name)
- **Product Details Modal**: Detailed view with product images, descriptions, specifications, and pricing
- **Pagination**: Customizable items per page with navigation controls
- **Loading States**: Skeleton loaders during data fetching
- **Empty State**: User-friendly message when no products match filters
- **Smooth Animations**: Framer Motion animations throughout the interface
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **API Client**: Axios
- **Icons**: Lucide React
- **Data Source**: DummyJSON API

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd product-showcase-explorer
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
product-showcase-explorer/
├── /src
│   ├── /app                    # Next.js app directory
│   │   ├── page.tsx           # Main page component
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── /components            # React components
│   │   ├── /ui               # shadcn/ui components
│   │   ├── ProductCard.tsx    # Individual product card
│   │   ├── ProductGrid.tsx    # Product grid layout
│   │   ├── ProductFilters.tsx # Filter and search controls
│   │   ├── ProductModal.tsx   # Product detail modal
│   │   ├── ProductPagination.tsx # Pagination controls
│   │   └── ProductSkeleton.tsx # Loading skeleton
│   ├── /hooks                 # Custom React hooks
│   ├── /lib                   # Utility functions
│   └── /services              # API services
│       └── api.ts            # API client and types
├── /public                    # Static assets
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── render.yaml               # Render deployment configuration
└── README.md                 # This file
```

## API Integration

The application uses the [DummyJSON API](https://dummyjson.com/) to fetch product data:

- **Products**: `GET /products` - Fetch products with pagination
- **Categories**: `GET /products/categories` - Get available categories
- **Product Details**: `GET /products/{id}` - Get specific product details
- **Search**: `GET /products/search` - Search products by query

## Deployment

### Render Deployment

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up for a [Render](https://render.com/) account
3. Connect your repository to Render
4. Render will automatically detect the Next.js application and configure the deployment
5. The `render.yaml` file provides additional configuration for optimal deployment

### Render Configuration

The `render.yaml` file contains:
- **Build Command**: `npm run build` - Builds the Next.js application
- **Start Command**: `npm start` - Starts the production server
- **Environment**: Node.js with production settings
- **Health Check**: `/api/health` endpoint for monitoring
- **Auto Deploy**: Automatic deployment on code changes

### Manual Deployment Commands

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start the production server
npm start
```

## Environment Variables

This application doesn't require any environment variables for basic functionality, as it uses the public DummyJSON API. However, you can add environment variables for:

```env
# Optional: Custom API base URL
NEXT_PUBLIC_API_BASE_URL=https://dummyjson.com

# Optional: Analytics or other services
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema (if using database features)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or issues, please open an issue on the GitHub repository.

## Live Demo

Check out the live demo deployed on Render: [Your Render App URL]

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS