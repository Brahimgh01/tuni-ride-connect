import { Car, Truck, Bike, Package, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RideMode {
  id: string;
  name: string;
  nameAr: string;
  icon: React.ReactNode;
  price: string;
  time: string;
  description: string;
  color: string;
}

const rideModes: RideMode[] = [
  {
    id: "taxi",
    name: "Taxi",
    nameAr: "تاكسي",
    icon: <Car className="h-5 w-5" />,
    price: "Selon compteur",
    time: "3 min",
    description: "Taxi traditionnel avec compteur",
    color: "taxi"
  },
  {
    id: "economy",
    name: "Economy",
    nameAr: "اقتصادي",
    icon: <Car className="h-5 w-5" />,
    price: "8.5 TND",
    time: "5 min",
    description: "Option abordable et fiable",
    color: "economy"
  },
  {
    id: "xl",
    name: "RideTN XL",
    nameAr: "كبير",
    icon: <Truck className="h-5 w-5" />,
    price: "12.0 TND",
    time: "7 min",
    description: "Véhicule spacieux jusqu'à 6 passagers",
    color: "xl"
  },
  {
    id: "moto",
    name: "Moto",
    nameAr: "دراجة نارية",
    icon: <Bike className="h-5 w-5" />,
    price: "4.5 TND",
    time: "2 min",
    description: "Rapide et économique",
    color: "moto"
  },
  {
    id: "delivery",
    name: "Delivery",
    nameAr: "توصيل",
    icon: <Package className="h-5 w-5" />,
    price: "6.0 TND",
    time: "15 min",
    description: "Livraison de colis et documents",
    color: "delivery"
  },
  {
    id: "shared",
    name: "Shared",
    nameAr: "مشترك",
    icon: <Users className="h-5 w-5" />,
    price: "5.5 TND",
    time: "8 min",
    description: "Partagez votre trajet",
    color: "shared"
  }
];

interface RideModeSelectorProps {
  selectedMode: string;
  onModeSelect: (mode: string) => void;
}

const RideModeSelector = ({ selectedMode, onModeSelect }: RideModeSelectorProps) => {
  return (
    <Card className="m-4 shadow-elegant bg-card/95 backdrop-blur-sm">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">اختر نوع الرحلة • Choisir le mode</h3>
          <Button variant="ghost" size="sm" className="text-primary">
            <Clock className="h-4 w-4 mr-1" />
            Programmer
          </Button>
        </div>

        {/* Ride modes grid */}
        <div className="grid grid-cols-2 gap-3">
          {rideModes.map((mode) => (
            <Button
              key={mode.id}
              variant={selectedMode === mode.id ? "default" : "outline"}
              className={`h-auto p-4 justify-start ${
                selectedMode === mode.id 
                  ? `bg-${mode.color} hover:bg-${mode.color}/90 text-white border-${mode.color}` 
                  : "bg-card hover:bg-muted/50"
              }`}
              onClick={() => onModeSelect(mode.id)}
            >
              <div className="flex items-start gap-3 w-full">
                <div className={`p-2 rounded-lg ${
                  selectedMode === mode.id 
                    ? "bg-white/20" 
                    : `bg-${mode.color}/10`
                }`}>
                  <div className={selectedMode === mode.id ? "text-white" : `text-${mode.color}`}>
                    {mode.icon}
                  </div>
                </div>
                
                <div className="flex-1 text-left">
                  <div className="font-medium text-sm">
                    {mode.nameAr} • {mode.name}
                  </div>
                  <div className="text-xs opacity-80 mt-1">
                    {mode.description}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        selectedMode === mode.id 
                          ? "bg-white/20 text-white" 
                          : ""
                      }`}
                    >
                      {mode.time}
                    </Badge>
                    <span className="font-bold text-sm">
                      {mode.price}
                    </span>
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>

        {/* Book ride button */}
        <Button 
          className="w-full mt-4 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-hover hover:to-primary shadow-glow"
          size="lg"
        >
          احجز الآن • Réserver maintenant
        </Button>
      </div>
    </Card>
  );
};

export default RideModeSelector;