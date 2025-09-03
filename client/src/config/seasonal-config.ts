export interface SeasonalConfig {
  season: string;
  title: string;
  subtitle: string;
  message: string;
  image: string;
  imageAlt: string;
  offers: {
    primary: { text: string; value: string; color: string };
    secondary: { text: string; value: string; color: string };
  };
}

export const seasonalConfigs: Record<string, SeasonalConfig> = {
  monsoon: {
    season: "Monsoon",
    title: "Safeguard your health this monsoon and #BeatTheFever!",
    subtitle: "Get tested for monsoon ailments with Metropolis Fever Profiles",
    message: "Get tested for monsoon ailments with Metropolis Fever Profiles at home or at nearest centre. Protect your family from seasonal illnesses.",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    imageAlt: "Happy family enjoying monsoon rain with umbrella - health and wellness",
    offers: {
      primary: { text: "₹800+ only", value: "Fever Panels starting", color: "green" },
      secondary: { text: "BOOK NOW", value: "Home Collection", color: "blue" }
    }
  },
  
  winter: {
    season: "Winter",
    title: "Winter Wellness Package",
    subtitle: "Beat the winter blues with health",
    message: "Winter brings unique health challenges. Our special winter health packages focus on immunity, vitamin D levels, and seasonal affective prevention.",
    image: "https://images.unsplash.com/photo-1548777123-d6da8ad4df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    imageAlt: "Winter landscape with snow and healthcare theme",
    offers: {
      primary: { text: "30% OFF", value: "Vitamin D Tests", color: "orange" },
      secondary: { text: "FREE", value: "Immunity Panel", color: "purple" }
    }
  },
  
  summer: {
    season: "Summer",
    title: "Summer Health Shield",
    subtitle: "Stay hydrated and healthy",
    message: "Summer heat can take a toll on your body. Get comprehensive health checks focusing on hydration, heat stress, and summer-related health concerns.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    imageAlt: "Bright summer day with health and wellness theme",
    offers: {
      primary: { text: "20% OFF", value: "Hydration Panel", color: "yellow" },
      secondary: { text: "FREE", value: "Heat Stress Check", color: "red" }
    }
  },
  
  spring: {
    season: "Spring",
    title: "Spring Renewal Check",
    subtitle: "Fresh start for your health",
    message: "Spring is the perfect time for a health renewal. Our comprehensive packages help you start the year fresh with complete health assessments.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    imageAlt: "Beautiful spring flowers and fresh greenery for health renewal",
    offers: {
      primary: { text: "35% OFF", value: "Full Body Check", color: "green" },
      secondary: { text: "FREE", value: "Allergy Panel", color: "pink" }
    }
  }
};

// Current active season configuration
export const currentSeason = "monsoon"; // Change this to switch seasons

export const getCurrentSeasonalConfig = (): SeasonalConfig => {
  return seasonalConfigs[currentSeason] || seasonalConfigs.monsoon;
};