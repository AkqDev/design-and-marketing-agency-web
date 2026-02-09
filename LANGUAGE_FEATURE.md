# Language Switcher Feature

## Overview
Added a bilingual language switcher with English and Arabic support. The layout remains LTR (left-to-right) for both languages - only text content changes.

## Features
- 🌐 Dropdown menu with English and Arabic options
- 🎨 Catchy design with flag emojis and smooth animations
- 📱 Responsive design for both desktop and mobile
- 🔄 Instant language switching without page reload
- ✨ Framer Motion animations for smooth transitions
- 🏠 Hero section with translated heading and subtitle

## Translated Sections
1. **Navbar** - Menu items and "Book an Appointment" button
2. **Hero Section** - Main heading "Transform Your Brand Vision" and subtitle
3. **About Section** - "Meet Ayyan SignAge", subtitle, promise text, description, and button

## Files Created/Modified

### New Files:
1. `src/contexts/LanguageContext.tsx` - Language state management
2. `src/components/ui/dropdown-menu.tsx` - Shadcn-style dropdown component

### Modified Files:
1. `src/App.tsx` - Wrapped with LanguageProvider
2. `src/components/Navbar.tsx` - Added language dropdown and translations
3. `src/components/Hero.tsx` - Added hero section translations
4. `src/components/AboutSection.tsx` - Added about section translations

## Usage

### Desktop
- Click the language dropdown button in the navbar (shows current language with flag)
- Select English 🇬🇧 or Arabic 🇸🇦
- Navbar items and button text update instantly

### Mobile
- Open the mobile menu
- Two language buttons appear below menu items
- Tap to switch between English and Arabic

## Adding More Translations

Edit `src/contexts/LanguageContext.tsx` and add translations to the `translations` object:

```typescript
const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      home: "Home",
      // Add more...
    },
    hero: {
      titleLine1: "Transform Your",
      titleLine2: "Brand Vision",
      subtitle: "Your description...",
      ctaButton: "Get Free Quote",
    },
  },
  ar: {
    navbar: {
      home: "الرئيسية",
      // Add more...
    },
    hero: {
      titleLine1: "حول رؤية",
      titleLine2: "علامتك التجارية",
      subtitle: "وصفك...",
      ctaButton: "احصل على عرض مجاني",
    },
  },
};
```

## Using Translations in Components

```typescript
import { useLanguage } from "../contexts/LanguageContext";

const MyComponent = () => {
  const { t, language, setLanguage } = useLanguage();
  
  return <h1>{t.navbar.home}</h1>;
};
```

## Design Notes
- Layout stays LTR for both languages (no RTL switching)
- Only text content changes between languages
- Dropdown uses smooth animations and backdrop blur
- Active language is highlighted in red (#9D0A0A)
- Click outside to close dropdown
