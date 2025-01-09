# Homemade Products Website

Welcome to the Homemade Products website project! This website showcases a variety of handcrafted, natural, and sustainable products designed to offer a personalized and wholesome experience to users. The project reflects the core values of the brand: simplicity, quality, and love.

## Key Details

- **Project Name:** Homemade Products Website
- **Slogan:** Made with Love
- **Base Location:** Switzerland
- **Branding Colors:**
  - Dark Green: `#134C28`
  - Lime Green: `#9BB536`
  - Olive Green: `#669E42`
  - White: `#FFFFFF`

## Features

- **Elegant UI:** Built using modern UI frameworks like Tailwind CSS and shadcn/ui.
- **Dynamic Content:** Uses SSR (Server-Side Rendering) for efficient and fast rendering.
- **E-Commerce Ready:** Includes pages for product listings, product details, cart, and checkout.
- **Fully Responsive:** Optimized for desktop, tablet, and mobile devices.
- **Secure Authentication:** Integrated secure login and sign-up functionality.
- **APIs:** Fetches real-time product data through APIs.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (>= 18.x)
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/homemade-products-website.git
   cd homemade-products-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add necessary environment variables. Example:
   ```env
   NEXT_PUBLIC_API_URL=your-api-url
   NEXT_PUBLIC_API_KEY=your-api-key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

### Build for Production

To create a production build:
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Folder Structure

```
.
├── app
│   ├── components    # Reusable UI components
│   ├── pages         # Page routes
│   ├── styles        # Global styles
│   ├── api           # API integrations
├── public            # Static assets
├── .env.local        # Environment variables (not included in the repository)
├── next.config.js    # Next.js configuration
└── README.md         # Project documentation
```

## License

This project is licensed under a **Proprietary License**:

All Rights Reserved

This software and all associated files are owned by Home Made Products. You are not permitted to use, copy, modify, merge, publish, distribute, sublicense, or sell copies of this software or associated files without explicit written permission from the owner.

Unauthorized use of this software is strictly prohibited and may result in legal action.


## Acknowledgments

- Designed and developed with love by [Abdul Rafay](https://github.com/Future-Rafay).
- Inspired by the dedication to quality and sustainability.

---

For more details, feel free to reach out or open an issue in the repository.
