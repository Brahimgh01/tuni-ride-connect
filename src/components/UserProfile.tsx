import { useState } from "react";
import { User, Settings, CreditCard, History, HelpCircle, LogOut, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const UserProfile = () => {
  const [showProfile, setShowProfile] = useState(false);

  const userStats = {
    name: "Ahmed Ben Salem",
    nameAr: "أحمد بن سالم",
    rating: 4.8,
    totalRides: 127,
    joinDate: "أكتوبر 2023 • Octobre 2023",
    walletBalance: "25.50 TND"
  };

  const menuItems = [
    { icon: History, label: "تاريخ الرحلات • Historique", action: () => {} },
    { icon: CreditCard, label: "الدفع والمحفظة • Paiement & Portefeuille", action: () => {} },
    { icon: Settings, label: "الإعدادات • Paramètres", action: () => {} },
    { icon: HelpCircle, label: "المساعدة • Aide", action: () => {} },
    { icon: Shield, label: "الأمان • Sécurité", action: () => {} },
  ];

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setShowProfile(true)}
        className="relative"
      >
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder-avatar.jpg" />
          <AvatarFallback className="bg-primary text-primary-foreground text-sm">
            {userStats.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </Button>

      {/* Profile Modal */}
      {showProfile && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end">
          <Card className="w-80 h-full overflow-hidden bg-card/95 backdrop-blur-sm">
            {/* Profile Header */}
            <div className="bg-gradient-to-br from-primary to-primary-glow p-6 text-primary-foreground">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">الملف الشخصي • Profil</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowProfile(false)}
                  className="text-primary-foreground hover:bg-white/20"
                >
                  ✕
                </Button>
              </div>

              <div className="flex flex-col items-center text-center">
                <Avatar className="h-20 w-20 mb-4 border-4 border-white/20">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="bg-white text-primary text-xl">
                    {userStats.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="font-bold text-lg">{userStats.name}</h3>
                <p className="text-sm opacity-90 mb-2">{userStats.nameAr}</p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>{userStats.rating}</span>
                  </div>
                  <Separator orientation="vertical" className="h-4 bg-white/30" />
                  <div>
                    {userStats.totalRides} رحلة • {userStats.totalRides} courses
                  </div>
                </div>
                
                <p className="text-xs opacity-75 mt-2">
                  عضو منذ • Membre depuis {userStats.joinDate}
                </p>
              </div>
            </div>

            {/* Wallet Balance */}
            <div className="p-4 bg-success/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">رصيد المحفظة • Solde portefeuille</p>
                  <p className="font-bold text-lg text-success">{userStats.walletBalance}</p>
                </div>
                <Button variant="outline" size="sm" className="border-success text-success hover:bg-success hover:text-success-foreground">
                  + إضافة • Ajouter
                </Button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-4">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start h-12 text-left"
                    onClick={item.action}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span className="text-sm">{item.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <LogOut className="h-5 w-5 mr-3" />
                تسجيل الخروج • Déconnexion
              </Button>
              
              <div className="mt-4 text-center">
                <Badge variant="secondary" className="text-xs">
                  RideTN v1.0 • تونس
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default UserProfile;