import { useState } from "react";
import { Search, MapPin, Clock, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface LocationSearchProps {
  onClose: () => void;
  onSelectLocation: (location: string) => void;
}

const popularLocations = [
  { name: "مطار تونس قرطاج الدولي • Aéroport International Tunis-Carthage", type: "airport", icon: "✈️" },
  { name: "شارع الحبيب بورقيبة • Avenue Habib Bourguiba", type: "landmark", icon: "🏛️" },
  { name: "المدينة العتيقة • Médina de Tunis", type: "landmark", icon: "🕌" },
  { name: "مول تونس سيتي • Tunisia Mall", type: "mall", icon: "🛍️" },
  { name: "جامعة تونس • Université de Tunis", type: "education", icon: "🎓" },
  { name: "مستشفى شارل نيكول • Hôpital Charles Nicolle", type: "hospital", icon: "🏥" },
  { name: "محطة تونس المركزية • Gare de Tunis", type: "transport", icon: "🚂" },
  { name: "سوق الغصر • Souk El Gharsalli", type: "market", icon: "🛒" }
];

const recentSearches = [
  "منطقة الحلفاوين • Halfaouine",
  "باردو • Bardo",
  "المرسى • La Marsa",
  "قرطاج • Carthage"
];

const LocationSearch = ({ onClose, onSelectLocation }: LocationSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(popularLocations);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = popularLocations.filter(location =>
        location.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations(popularLocations);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center">
      <Card className="w-full max-w-lg mx-4 mt-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold">اختر الموقع • Choisir l'adresse</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="ابحث عن عنوان... • Rechercher une adresse..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {/* Recent Searches */}
          {!searchQuery && (
            <div className="p-4 border-b">
              <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                البحث الأخير • Recherches récentes
              </h3>
              <div className="space-y-2">
                {recentSearches.map((location, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start h-auto p-3"
                    onClick={() => onSelectLocation(location)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-sm">{location}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Popular Locations */}
          <div className="p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
              <Star className="h-4 w-4" />
              أماكن شائعة • Lieux populaires
            </h3>
            <div className="space-y-2">
              {filteredLocations.map((location, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start h-auto p-3"
                  onClick={() => onSelectLocation(location.name)}
                >
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-lg">
                      {location.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-sm">{location.name}</div>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {location.type === "airport" && "مطار • Aéroport"}
                        {location.type === "landmark" && "معلم • Monument"}
                        {location.type === "mall" && "مول • Centre commercial"}
                        {location.type === "education" && "تعليم • Éducation"}
                        {location.type === "hospital" && "مستشفى • Hôpital"}
                        {location.type === "transport" && "نقل • Transport"}
                        {location.type === "market" && "سوق • Marché"}
                      </Badge>
                    </div>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LocationSearch;