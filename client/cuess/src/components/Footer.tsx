import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="mt-20 border-t bg-[#0b1220] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/cuess_logo.png" alt="CUESS" width={28} height={28} className="rounded" />
              <span className="text-lg font-semibold">CUESS</span>
            </div>
            <p className="text-sm text-slate-400">
              CU Entrepreneur & Startup Society — empowering young founders at CU.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-4">
            <div>
              <h4 className="mb-2 text-sm font-black text-slate-300">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#about" className="hover:text-white">About</Link></li>
                <li><Link href="#journey" className="hover:text-white">Journey</Link></li>
                <li><Link href="#events" className="hover:text-white">Events</Link></li>
                <li><Link href="#team" className="hover:text-white">Team</Link></li>
                <li><Link href="#join" className="hover:text-white">Join</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-black text-slate-300">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:cuess.official@gmail.com" className="hover:text-white">cuess.official@gmail.com</a></li>
                <li><a href="tel:+8801558950681" className="hover:text-white">+880 1558-950681</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>

            {/* Offical newsletter subscription form */}
            {/* <div className="md:col-span-2">
              <h4 className="mb-2 text-sm font-semibold text-slate-300">Newsletter</h4>
              <form className="flex max-w-sm overflow-hidden rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/15">
                <input
                  type="email"
                  placeholder="you@university.edu"
                  className="w-full bg-transparent px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} CU Entrepreneur & Startup Society. All rights reserved.
        </div>
      </div>
    </footer>
  );
}