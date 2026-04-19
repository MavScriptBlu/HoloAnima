# HoloAnima ✨

Welcome to **HoloAnima**! This application transforms your webcam photos into unique, anthropomorphic animal stickers with a vibrant holographic aesthetic. Using the power of generative AI, HoloAnima syncs your features with your digital spirit animal, creating high-quality, iridescent digital collectibles.

## 🚀 Overview
HoloAnima is an interactive web experience that captures your portrait, analyzes your style, and reimagers you as a stylized animal character—complete with a glowing holographic foil border. Whether you choose a specific animal or let the AI decide your "Auto-Detect" match, every creation is an isolated digital sticker ready for sharing or printing.

## ✨ Features
- **Intelligent Auto-Detect**: The default mode uses AI to decide which animal character best matches your features and aesthetic.
- **Spirit Animal Styles**: Choose from a curated list of animal lenses (Fox, Wolf, Cat, Owl, Dragon, etc.) to guide the transformation.
- **Holographic Foil Aesthetic**: Every sticker features a thick, iridescent silver foil border with shifting rainbow reflections.
- **Modern Glassmorphism UI**: A sleek, futuristic interface designed with deep dark backgrounds and vibrant holographic teal/purple accents.
- **Live Camera & Zoom**: Real-time camera feed with desktop zoom buttons and mobile pinch-to-zoom support.
- **Interactive Photo Bar**: A compact, interactive bar for quick access to your latest results while you keep snapping.
- **Integrated Gallery**: View all your creations in a grid, delete unwanted ones, or inspect them in high-detail.
- **Sticker Queue & ZIP Download**: Save your favorite stickers to a queue and download them all as a single ZIP file—perfect for batch printing or sharing.
- **Cross-Platform Utility**: Optimized for a seamless experience on both phones and computers.

## 🕹️ How to Use
1.  **Initiate Sync**: Click the start screen to grant camera access and enter the sync chamber.
2.  **Choose Your Mode**: Use the horizontal lens bar to select "Auto-Detect" or pick a specific spirit animal. You can click and drag the bar on desktop or swipe on mobile.
3.  **Frame Your Shot**: Position yourself in the feed. Use the `+` and `-` zoom buttons on the right to frame your portrait from the chest up.
4.  **Snap & Sync**: Click the holographic shutter button. Your photo will be sent for "Holographic Syncing."
5.  **Collect Your Sticker**: A thumbnail will appear below. Once the sync is complete, click it to see your final holographic sticker.

### Gallery and Sticker Queue
- **View Gallery**: Toggle the "Gallery" view in the header to see your full collection.
- **Save for Sticker**: While viewing a photo, click the "Add to Queue" button (⭐) to prepare it for batch download.
- **Batch Export**: Open the "Sticker Queue" in the gallery to download all your favorites in one irradiated ZIP file.

## 🛠️ Technical Details & "Built With"
HoloAnima is a high-performance React application leveraging a modern, full-stack architecture:
- **AI Core**: **Google Gemini API** (@google/genai) for vision-based silhouette analysis and character generation.
- **Frontend Framework**: **React 18** + **Vite** for blazing fast development and builds.
- **State Management**: **Zustand** (with Immer) for robust, type-safe global state and UI reactivity.
- **Styling**: **Tailwind CSS** with specialized glassmorphism filters and holographic color variables.
- **Batch Processing**: **JSZip** for on-the-fly generation of sticker archival packs.
- **Language**: **TypeScript** for end-to-end type safety.
- **Deployment**: **Google Cloud Run** for scalable containerized hosting.
- **Typography**: **Outfit** (Display) and **Inter** (UI Sans).
- **Icons**: **Lucide React**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- A Google Gemini API Key (Get one at [Google AI Studio](https://aistudio.google.com/app/apikey))

### Installation
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/MavScriptBlu/HoloAnima.git
    cd HoloAnima
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your API key:
    ```env
    VITE_GEMINI_API_KEY=your_gemini_api_key_here
    ```
    *(Note: Refer to `.env.example` for the required format)*
4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:3000`.

## 📂 Project Structure
- `/src/components`: UI components organized by feature (Camera, Gallery, Modals).
- `/src/lib`: Core logic including state stores (Zustand), API services (Gemini), and image management.
- `/src/styles`: Global CSS and Tailwind configuration.
- `metadata.json`: Application permissions and metadata.

## 📄 License
This project is for educational and hackathon purposes. Feel free to remix and build upon it!

---
*Created for AI Hackfest 2026. Built with focus on craftsmanship and digital iridescence.*
