import {
  Gauge,
  MapPin,
  TrendingUp,
  Camera,
  Moon,
  Database,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Camera-Based Analysis",
    comingSoon: false,
    description:
      "Use your smartphone camera to capture and analyze sky brightness and light pollution in real-time.",
  },
  {
    icon: Gauge,
    title: "Sky Quality Metrics",
    comingSoon: false,
    description:
      "Get accurate measurements of sky quality including magnitude per square arcsecond (MPSAS) readings.",
  },
  {
    icon: MapPin,
    title: "Location Tracking",
    comingSoon: false,
    description:
      "Automatically log GPS coordinates with each measurement to build a comprehensive light pollution map.",
  },
  {
    icon: TrendingUp,
    title: "Historical Data",
    comingSoon: false,
    description:
      "Track changes in sky quality over time and observe trends in your local night sky conditions.",
  },
  {
    icon: Moon,
    title: "Astronomy Planning",
    comingSoon: true,
    description:
      "Find the best locations and times for stargazing and astrophotography based on sky quality data.",
  },
  {
    icon: Database,
    title: "Research Contribution",
    comingSoon: true,
    description:
      "Contribute your measurements to global light pollution research and citizen science initiatives.",
  },
];

export function Features() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Features</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to measure, track, and understand light
            pollution in your area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-red-500/50 transition-colors"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-red-400" />
                  </div>
                  {feature.comingSoon && (
                    <h4 className="inline rounded-full px-3 py-2 text-sm bg-white text-black">
                      Coming Soon
                    </h4>
                  )}
                </div>
                <h3 className="text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
