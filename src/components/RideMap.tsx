import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Zap } from "lucide-react";

const RideMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Simulate map loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={mapRef} className="w-full h-full relative bg-gradient-to-br from-blue-50 to-green-50">
      {/* Map Loading State */}
      {!mapLoaded && (
        <div className="absolute inset-0 bg-muted/50 flex items-center justify-center">
          <Card className="p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-sm text-muted-foreground">تحميل الخريطة... • Chargement de la carte...</p>
          </Card>
        </div>
      )}

      {/* Mock Map Content */}
      <div className="absolute inset-0 opacity-80">
        {/* Tunisia cities markers */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
          <MapPin className="h-6 w-6 text-primary animate-bounce" />
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-card px-2 py-1 rounded shadow">
            تونس • Tunis
          </span>
        </div>

        <div className="absolute top-1/3 left-1/3">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-card px-2 py-1 rounded shadow">
            صفاقس • Sfax
          </span>
        </div>

        <div className="absolute top-2/5 left-2/5">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-card px-2 py-1 rounded shadow">
            سوسة • Sousse
          </span>
        </div>

        <div className="absolute top-1/2 left-2/3">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-card px-2 py-1 rounded shadow">
            المنستير • Monastir
          </span>
        </div>

        {/* Available drivers */}
        <div className="absolute top-1/3 right-1/3">
          <div className="w-3 h-3 bg-economy rounded-full animate-pulse shadow-lg"></div>
        </div>
        
        <div className="absolute bottom-1/3 left-1/4">
          <div className="w-3 h-3 bg-taxi rounded-full animate-pulse shadow-lg"></div>
        </div>

        <div className="absolute top-2/3 right-1/4">
          <div className="w-3 h-3 bg-moto rounded-full animate-pulse shadow-lg"></div>
        </div>
      </div>

      {/* Map overlay info */}
      <div className="absolute top-4 right-4">
        <Card className="p-3 bg-card/90 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-success" />
            <span>12 سائق متاح • 12 chauffeurs disponibles</span>
          </div>
        </Card>
      </div>

      {/* Map controls */}
      <div className="absolute top-20 right-4 flex flex-col gap-2">
        <Button variant="secondary" size="icon" className="bg-card shadow-lg">
          <span className="text-lg font-bold">+</span>
        </Button>
        <Button variant="secondary" size="icon" className="bg-card shadow-lg">
          <span className="text-lg font-bold">-</span>
        </Button>
      </div>
    </div>
  );
};

export default RideMap;