# HTS Derivative Analyzer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-purple.svg)](https://vitejs.dev/)

An intelligent tool to verify HTS (Harmonized Tariff Schedule) codes against Aluminum and Steel derivative lists using Google's Gemini AI.

![HTS Analyzer Banner](https://via.placeholder.com/1200x475/4F46E5/FFFFFF?text=HTS+Derivative+Analyzer)

## Features

- 🔍 **Intelligent HTS Code Analysis**: Verify codes against comprehensive derivative lists
- 📄 **Document Processing**: Upload PDF documents or paste text content directly
- 🎯 **Manual Override System**: Add specific HTS rules to supplement document analysis
- 🌙 **Dark/Light Mode**: User-friendly interface with theme switching
- 🔐 **Admin Panel**: Secure access for managing reference data
- 📊 **Confidence Scoring**: AI-powered confidence levels for each analysis result
- 💾 **Local Storage**: Persistent data storage using IndexedDB
- 📱 **Responsive Design**: Works seamlessly across all device sizes

## Tech Stack

- **Frontend**: React 19.2.1 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS with custom dark mode
- **AI Integration**: Google Gemini AI (gemini-2.5-flash)
- **Icons**: Lucide React
- **Storage**: IndexedDB for client-side data persistence

## Prerequisites

- Node.js (v18 or higher)
- Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/hts-derivative-analyzer.git
   cd hts-derivative-analyzer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your API key:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## Usage

### Getting Started

1. **Access Admin Panel**: Click the "Admin" button in the header
2. **Set Password**: Enter the admin password (contact your system administrator)
3. **Load Reference Data**: Upload a PDF or paste text containing HTS derivative information
4. **Start Analyzing**: Switch to user mode and begin verifying HTS codes

### Admin Features

- **Document Upload**: Upload comprehensive PDF documents containing HTS derivative lists
- **Manual Entries**: Add specific HTS codes and rules directly to the database
- **Heading Scanner**: Automatically extract and list all HTS headings from uploaded documents
- **Data Management**: Clear and update reference data as needed

### User Features

- **Code Verification**: Enter HTS codes to check against loaded reference data
- **Detailed Results**: View analysis results with confidence scores and detailed reasoning
- **Search History**: Track recent HTS code checks with results
- **System Status**: Monitor reference data availability and system health

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini AI API key | Yes |

### Admin Settings

The admin password can be changed by modifying the `ADMIN_PASSWORD` constant in `src/config/constants.ts`:

```typescript
export const ADMIN_PASSWORD = 'your_secure_password';
```

## API Integration

This application uses Google's Gemini AI for intelligent HTS code analysis. The integration supports:

- **Document Analysis**: PDF and text content processing
- **Structured Responses**: JSON-formatted results with confidence scoring
- **Error Handling**: Robust error management and user feedback

## Development

### Project Structure

```
src/
├── components/           # React components
│   ├── AnalysisResultCard.tsx
│   ├── DocumentUploader.tsx
│   ├── LoadingAnalysis.tsx
│   ├── ManualEntryManager.tsx
│   ├── ReferenceInfo.tsx
│   └── Tooltip.tsx
├── services/            # Business logic and API calls
│   ├── dbService.ts     # IndexedDB operations
│   └── geminiService.ts # Gemini AI integration
├── types.ts             # TypeScript type definitions
├── App.tsx              # Main application component
└── index.tsx            # Application entry point
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for powering the intelligent analysis
- [React](https://reactjs.org/) for the robust frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling
- [Lucide](https://lucide.dev/) for the beautiful icon set

## Support

For support, please open an issue on GitHub or contact the development team.

---

**Author**: Junaid Abbasi  
**Version**: 1.0.0  
**Last Updated**: December 2025