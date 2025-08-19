import Link from "next/link";
import Image from "next/image";

export function BodhaManthanResults({
  resultsUrl = "https://dbggurukulam.com/results/2025-26/bodha-manthan/First%20Term%20-%20July%202025",
}: {
  resultsUrl?: string;
}) {
  return (
    <main className="relative min-h-[70vh] flex items-center justify-center px-4 py-12">
      {/* Soft background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-orange-50 via-amber-50 to-green-50" />

      <div className="w-full max-w-2xl">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-xl">
          {/* Decorative top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-600" />

          <div className="p-8 sm:p-10 text-center">
            {/* Logo */}
            <div className="mx-auto mb-6 h-20 w-20 sm:h-24 sm:w-24 rounded-full ring-4 ring-amber-100 shadow-md flex items-center justify-center bg-white">
              <Image
                src="/DBGlogo.png"
                alt="DBG Gurukulam Logo"
                width={96}
                height={96}
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                priority
              />
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight bg-gradient-to-r from-emerald-700 to-amber-700 bg-clip-text text-transparent">
              Bodha Manthan Results
            </h1>
            <p className="mt-1 text-sm text-gray-500">Academic Year 2025–26 • First Term – July 2025</p>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              View the latest Bodha Manthan examination results for the academic year.
            </p>

            {/* Call to Action */}
            <div className="mt-8">
              <Link
                href={resultsUrl}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-medium text-white shadow-lg transition-all duration-200 bg-emerald-600 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
              >
                View Results
              </Link>
              <div className="mt-3 text-xs text-gray-500">
                You may need your Class, Roll Number and Full Name (as per records)
              </div>
              <div className="mt-3">
                <Link href="/" className="text-sm text-emerald-700 hover:text-emerald-800 underline underline-offset-2">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-6 text-center text-xs text-gray-500">DBG Gurukulam • Education with Yogic Values</div>
      </div>
    </main>
  );
}

export default BodhaManthanResults;
