import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('https://getlaunchlist.com/s/BexQk0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
      } else {
        const data = await response.json().catch(() => ({}));
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-[#0d121b]">
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4 py-12 md:py-20 lg:py-24">
        <div className="max-w-[800px] w-full flex flex-col gap-10">
          {/* Hero */}
          <div className="flex flex-col gap-8 items-center text-center">
            <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-2">
              <span className="material-symbols-outlined !text-[18px]">rocket_launch</span>
              <span>Early Access Opening Soon</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-[#0d121b] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.033em] font-display">
                The Future of <span className="text-primary">Search Funds</span> is Here
              </h1>
              <h2 className="text-[#4c669a] text-lg md:text-xl font-normal leading-relaxed max-w-[600px] mx-auto">
                Early access to the platform.
              </h2>
            </div>
          </div>

          {/* Form card */}
          <div className="w-full max-w-[480px] mx-auto">
            <div className="bg-white p-1.5 rounded-xl shadow-lg border border-[#e7ebf3]">
              <form
                className="flex flex-col sm:flex-row gap-2"
                onSubmit={handleSubmit}
              >
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#4c669a]">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    disabled={isLoading || isSuccess}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border-none focus:ring-2 focus:ring-primary/20 text-[#0d121b] placeholder:text-[#9aa6c3] font-sans h-12 disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || isSuccess}
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap h-12 sm:w-auto w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <span>Joining...</span>
                      <span className="material-symbols-outlined !text-[18px] animate-spin">refresh</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <span>Joined!</span>
                      <span className="material-symbols-outlined !text-[18px]">check_circle</span>
                    </>
                  ) : (
                    <>
                      <span>Join Waitlist</span>
                      <span className="material-symbols-outlined !text-[18px]">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Success/Error Messages */}
            {isSuccess && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-700 text-sm font-medium">
                  Successfully joined the waitlist! We'll be in touch soon.
                </p>
              </div>
            )}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Progress */}
            <div className="mt-8 px-1">
              <div className="flex justify-between items-end mb-2">
                <p className="text-sm font-medium text-[#4c669a]">Beta Spots Filled</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-[#0d121b]">2,418</span>
                  <span className="text-xs font-medium text-[#4c669a]">/ 3,000</span>
                </div>
              </div>
              <div className="w-full bg-[#e7ebf3] rounded-full h-2.5 overflow-hidden">
                <div className="bg-primary h-full rounded-full w-[80%]" />
              </div>
            </div>

            {/* Avatars + copy */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  alt="Profile of a young woman"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM-hB0lIS97KmzaUI4XPj6x1fSVBPPHn6Nt3Y4d-EntMK2gFYQ9_E2wdocCrXY4yv30HUvO43HABpaI6oW_tlTP_UXWpZ-2fksgOJrfgNZrnUI2_7evw7XOWFQ9-qKTm319WsFRiTPD_NldWBhs85xE93EMdII338eiUDvUtc5-iszLzuPbNUbv_y-2egDrr9wSoFGEjVevKbznTXDZAniMKIuMWYW1ip8hoBLAYZawb_r6vLKQC4HmMiBNV28fcgsqzrTEyKB_fY"
                />
                <img
                  alt="Profile of a young man"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkw96TlDOPCycNUgoRzZqepkWOYaBvYxpD0PVZcyvR0nnSRgOAml7nkGXEV9ar89Xao4fEvhqR-WB9Wi-r1q0l6iS-HJEZ4jrwZaVkDmXIFSfBjfk_nLFLim8hbgbdFklcpHj0FzSapHS6rIx2N-0H7tFKCq5aOzzVOJjeIwuf8JCdIpq2eVpqT8GSZzTGfizDReSWOqHiNpGCi3O7GwprSzgXoGKXom68YITYcIbJT0lB60uioQxkBIWdba1j0X5xmzgBfq-yq-U"
                />
                <img
                  alt="Profile of a person"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsgRE4XWYqUF18CBe0SB0hvtMcKXoueEjPWXvorcP5q6uGCyjsS4kYNDt_0ABVR_ZD5iVS_itS_Gu0KJhZ4ti9FZ3WCB8551hc8mhWPe3WlMX4xhAI9sc3GCQSvKW5vanbl34okFFZAA5meotKxwwn9HqhqU7yeSZ9wrnz37yQiLR1doTtQ_zYl-Y4hMGdwQe2An7tfRRMErTOZ-jtIhH48dffxBel0EVVdMRManQxx4_sLYRU78pjXCEzW9qX2PfedKKdW7klrcM"
                />
                <div className="h-8 w-8 rounded-full ring-2 ring-white bg-[#f0f2f5] flex items-center justify-center text-xs font-bold text-[#4c669a]">
                  +2k
                </div>
              </div>
              <p className="text-[#4c669a] text-sm font-normal text-center">
                Join 2,000+ investors and searchers waiting for access.
              </p>
              <p className="text-[#4c669a]/70 text-xs font-normal text-center">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Image panel */}
        <div className="mt-20 w-full max-w-[960px] px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#e7ebf3] bg-white">
            <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent z-10 opacity-20" />
            <div
              className="bg-cover bg-center h-[300px] md:h-[400px] opacity-90"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbuBpJ34xWiNhxq65RiZzYRDHoOG3VZcMVSUxXs1Km54i9VpL9ixFwkH9Q57X4Z4JYmxT6fDvdOrLwR1b_Sbt2QO7wFqiDEz6yoXjWvawQW2P0O9FMtsO3pbqvqX2KIIpdud47SyZqQtZRna3Qex8x8Kl-SAajIte-FX70D6n-Gve7wLiME040NOGyrp_Yc2ns2HB8IfiDcxvkz4c4JVaJF0SGMqMEqkx6znkua4EALoQbp8EeCTxNnaHT2H9ZlFnK7DalYrH4Q_E')",
              }}
            />
            <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-[#e7ebf3] max-w-xs hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary">verified</span>
                <p className="font-bold text-sm text-[#0d121b]">Deal Flow Access</p>
              </div>
              <p className="text-xs text-[#4c669a]">
                Get priority insights on new acquisition targets before they hit the public market.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e7ebf3] py-8 mt-auto bg-white">
        <div className="max-w-[960px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#4c669a] text-sm">© 2026 InsideAquisition</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#4c669a] hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#4c669a] hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
