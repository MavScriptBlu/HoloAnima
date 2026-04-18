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

## 🛠️ Technical Details
HoloAnima is a high-performance React application built with:
- **AI Engine**: **Google Gemini API**, specifically utilizing the latest vision-capable models to interpret your portrait and generate stylized stickers.
- **Styling**: **Tailwind CSS** with custom glassmorphism components and holographic visual variables.
- **State Management**: **Zustand** (with Immer) for robust, type-safe global state and UI reactivity.
- **Typography**: **Outfit** for striking headers and **Inter** for clean, legible interface text.
- **Asset Handling**: **JSZip** for on-the-fly archive generation and **Lucide React** for modern iconography.

### API Architecture
1. **Generative Intelligence**
- **Google Gemini API**: Processes input images and generates the final sticker based on tailored "Holo-Prompts."
2. **Native Web APIs**
- **MediaDevices API**: Real-time, low-latency webcam streaming.
- **Canvas API**: High-speed image capture and square-crop processing.
- **Web Share API**: Native OS sharing for individual stickers.
- **Web Storage API**: Persistent local storage for user settings and sync status.

---
*Created with focus on craftsmanship and digital iridescence.*
