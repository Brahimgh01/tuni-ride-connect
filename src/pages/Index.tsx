import { useState } from "react";
import { MapPin, Navigation, Clock, User, Menu, Search, CreditCard, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import RideMap from "@/components/RideMap";
import RideModeSelector from "@/components/RideModeSelector";
import LocationSearch from "@/components/LocationSearch";
import UserProfile from "@/components/UserProfile";

const Index = () => {
  const [selectedRideMode, setSelectedRideMode] = useState("economy");
  const [showLocationSearch, setShowLocationSearch] = useState(false);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-card border-b shadow-sm z-50 relative">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-primary">RideTN</h1>
              <span className="text-xs text-muted-foreground">تونس • Tunisie</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              <Navigation className="h-3 w-3 mr-1" />
              Live
            </Badge>
            <UserProfile />
          </div>
        </div>
      </header>

      <div className="flex-1 relative">
        {/* Map Container */}
        <div className="absolute inset-0">
          <RideMap />
        </div>

        {/* Location Search Panel */}
        <Card className="absolute top-4 left-4 right-4 z-40 shadow-elegant">
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <div className="w-0.5 h-8 bg-border my-1"></div>
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-success" />
                  <Input
                    placeholder="من أين؟ • D'où partez-vous?"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="pl-10"
                    onFocus={() => setShowLocationSearch(true)}
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary" />
                  <Input
                    placeholder="إلى أين؟ • Où allez-vous?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-10"
                    onFocus={() => setShowLocationSearch(true)}
                  />
                </div>
              </div>
            </div>

            {/* Quick locations */}
            <div className="flex gap-2 overflow-x-auto">
              {["المنزل • Maison", "العمل • Travail", "المطار • Aéroport", "المدينة • Centre-ville"].map((location) => (
                <Button
                  key={location}
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap text-xs"
                >
                  {location}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Ride Mode Selector */}
        <div className="absolute bottom-0 left-0 right-0 z-40">
          <RideModeSelector 
            selectedMode={selectedRideMode}
            onModeSelect={setSelectedRideMode}
          />
        </div>

        {/* Emergency Button */}
        <Button
          className="absolute bottom-32 right-4 z-40 bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-glow"
          size="icon"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>

        {/* My Location Button */}
        <Button
          variant="secondary"
          className="absolute bottom-32 left-4 z-40 shadow-lg bg-card"
          size="icon"
        >
          <Navigation className="h-5 w-5" />
        </Button>
      </div>

      {/* Location Search Modal */}
      {showLocationSearch && (
        <LocationSearch 
          onClose={() => setShowLocationSearch(false)}
          onSelectLocation={(location) => {
            setDestination(location);
            setShowLocationSearch(false);
          }}
        />
      )}
    </div>
  );
};

export default Index;