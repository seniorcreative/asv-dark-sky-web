import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-slate-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="text-white mb-4">ASV Dark Sky</h4>
            <p className="text-slate-400">
              Measuring and tracking our night skies, one observation at a time.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Location</h4>
            <div className="space-y-2 text-slate-400">
              {/* <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@darkskyapp.com.au</span>
              </div> */}
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Geelong, Australia</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Resources</h4>
            <div className="space-y-2 text-slate-400">
              <p>Coming soon</p>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white mb-4">About</h4>
            <p className="text-slate-400">
              Dark Sky is dedicated to helping astronomy enthusiasts and
              researchers understand and counter the interference of light
              pollution in their practise.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-red-900 text-center text-red-500">
          <p>ASV Dark Sky</p>
          <p className="mt-2 text-sm">darkskyapp.com.au</p>
        </div>
      </div>
    </footer>
  );
}
