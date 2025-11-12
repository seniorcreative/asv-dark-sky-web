// import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    number: "01",
    title: "Open the App",
    description:
      "Launch Dark Sky on your smartphone and grant camera and location permissions.",
  },
  {
    number: "02",
    title: "Point at the Sky",
    description:
      "Aim your phone camera at a clear patch of night sky away from direct light sources, holding it level with the app's in-built sensor.",
  },
  {
    number: "03",
    title: "Capture & Analyze",
    description:
      "The app captures a 'light' frame and a 'dark' frame for comparison and calculates sky quality metrics, factoring in the phase, brightness and position of the moon",
  },
  {
    number: "04",
    title: "Track & Compare",
    description:
      "Receive a report, with a Bortle or SQM (Sky Quality Meter) score. Save your measurements, view trends in your history or on the map, and compare different locations over time.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-white-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">How Dark Sky App Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Measuring sky quality is simple with Dark Sky App. Our app can help
            find where to go to practise Astronomy, where darker skies mean less
            light pollution interference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 border-3 border-red-500/30 border-dashed flex items-center justify-center">
                    <span className="text-red-400 font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              {/* 3x3 Flexbox Grid */}
              <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
                <div className="flex-1 min-w-[calc(33.333%-1rem)] h-auto bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                  <img
                    src="./screens/IMG_9144.PNG"
                    alt="Dark Sky App Sample Screen 1 of 9 (Subject to Change)"
                  />
                </div>
                <div className="flex-1 min-w-[calc(33.333%-1rem)] h-auto bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                  <img
                    src="./screens/IMG_9148.PNG"
                    alt="Dark Sky App Sample Screen 2 of 9 (Subject to Change)"
                  />
                </div>
                <div className="flex-1 min-w-[calc(33.333%-1rem)] h-auto bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                  <img
                    src="./screens/IMG_9145.PNG"
                    alt="Dark Sky App Sample Screen 3 of 9 (Subject to Change)"
                  />
                </div>
                <div className="flex-1 min-w-[calc(33.333%-1rem)] h-auto bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                  <img
                    src="./screens/IMG_9147.PNG"
                    alt="Dark Sky App Sample Screen 4 of 9 (Subject to Change)"
                  />
                </div>
                <div className="flex-1 min-w-[calc(33.333%-1rem)] h-auto bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                  <img
                    src="./screens/IMG_9150.PNG"
                    alt="Dark Sky App Sample Screen 5 of 9 (Subject to Change)"
                  />
                </div>
                <div className="flex-1 min-w-[calc(33.333%-1rem)] h-auto bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                  <img
                    src="./screens/IMG_9151.PNG"
                    alt="Dark Sky App Sample Screen 6 of 9 (Subject to Change)"
                  />
                </div>
                <div className="flex-1 min-w-[calc(33.333%-1rem)] h-auto bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                  <img
                    src="./screens/IMG_9152.PNG"
                    alt="Dark Sky App Sample Screen 7 of 9 (Subject to Change)"
                  />
                </div>
                <div className="flex-1 min-w-[calc(33.333%-1rem)] h-auto bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                  <img
                    src="./screens/IMG_9154.PNG"
                    alt="Dark Sky App Sample Screen 8 of 9 (Subject to Change)"
                  />
                </div>
                <div className="flex-1 min-w-[calc(33.333%-1rem)] h-auto bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                  <img
                    src="./screens/IMG_9155.PNG"
                    alt="Dark Sky App Sample Screen 9 of 9 (Subject to Change)"
                  />
                </div>
              </div>
              <p className="text-slate-400 text-center">Video coming soon</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
