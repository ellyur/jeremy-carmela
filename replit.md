# Wedding Invitation Website

## Overview
This project is a full-stack JavaScript application designed as a responsive wedding invitation website for Andrei & Sam's wedding on September 7, 2025. It features interactive elements, multiple content sections (story, venue, RSVP, FAQ, etc.), and a modern UI, aiming to provide an elegant and engaging digital invitation experience. The business vision is to offer a sophisticated, customizable wedding invitation platform with interactive features to enhance guest engagement.

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## System Architecture
The project utilizes a full-stack JavaScript architecture.
- **Frontend**: Developed with React and TypeScript, bundled using Vite, and styled with Tailwind CSS alongside shadcn/ui components. Wouter is used for client-side routing, and TanStack Query manages server state.
- **Backend**: An Express.js server built with TypeScript handles API requests.
- **Database**: Currently uses in-memory storage (MemStorage), with potential for future migration to PostgreSQL.
- **Styling**: The design theme is a navy blue watercolor and gold aesthetic, supporting both dark and light modes.
- **Features**: Key functionalities include a responsive design, interactive hero section with an invitation opening animation, background music triggered by user interaction, an interactive quiz game for invitation reveal (with score-based design variations), and SEO optimization.
- **UI/UX**: Emphasizes elegant typography using Google Fonts (Playfair Display, Cormorant Garamond, Inter) and modern UI components from shadcn/ui. The design incorporates navy blue and gold watercolor effects, subtle gradients, and glass morphism with tinted borders.

## External Dependencies
- **Cloudinary**: Used for hosting audio files and images.
- **Google Fonts**: Integrated for enhanced typography (Playfair Display, Cormorant Garamond, Inter).
- **Vercel**: Deployment target, with specific configurations for static site generation.
- **npm packages**: Includes `wouter`, `sonner`, `nanoid`, and other standard React/Express dependencies.

## Recent Changes
- **2025-11-03**: Applied gold borders and icons throughout the website:
  - Updated Timeline section: Icon borders, icon colors, camera icon, and hashtag all use gold accent color
  - Updated Love Story section: Story card icons changed to gold
  - Updated You're Invited container: Main border, corner accents, and heart icon all use gold
  - Updated Groom/Couple/Bride polaroid containers: Top borders changed to gold
  - Updated Entourage section: Header remains blue (navy) as requested, decorative borders changed to gold
  - Updated Music Consent Popup: All borders, icons, and hover states use gold
  - All changes architect-reviewed and approved with Pass verdict
  - Color scheme now consistently uses navy blue for primary elements and gold for all borders and icons