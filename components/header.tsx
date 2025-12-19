"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

function DestinationDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition"
      >
        Destination
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-3 w-56 rounded-xl border border-border bg-background shadow-xl overflow-hidden z-50">
          {["Australia", "India", "Bangladesh", "Canada", "USA", "UK"].map((c) => (
            <Link
              key={c}
              href={`/destination/${c.toLowerCase()}`}
              className="block px-4 py-3 text-sm hover:bg-muted transition"
              onClick={() => setOpen(false)}
            >
              Destination {c}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function GalleryDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition"
      >
        Gallery
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-3 w-56 rounded-xl border border-border bg-background shadow-xl overflow-hidden z-50">
          <Link
            href="/gallery/photos"
            className="block px-4 py-3 text-sm hover:bg-muted"
            onClick={() => setOpen(false)}
          >
            Photo Gallery
          </Link>
          <Link
            href="/gallery/videos"
            className="block px-4 py-3 text-sm hover:bg-muted"
            onClick={() => setOpen(false)}
          >
            Video Gallery
          </Link>
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-l md:text-2xl font-serif font-bold">
            <Image src="/media/logo.png" alt="Jupiter Media Nepal" width={40} height={40} />
            Jupiter Media Nepal
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>

            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About Us
            </Link>

            {/* Destination Dropdown */}
            <DestinationDropdown />

            {/* Gallery Dropdown */}
            <GalleryDropdown />

            <Link href="/testimonials" className="text-muted-foreground hover:text-foreground">
              Testimonials
            </Link>

            <Link
              href="/contact"
              className="ml-4 rounded-full bg-primary px-5 py-2 text-white hover:bg-primary/90"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-muted"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}

      {menuOpen && (
        <div className="fixed inset-0 z-50 h-[100vh] bg-background flex flex-col">

          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-border">
            {/* Logo */}
            <Link href="/" className="text-xl font-serif font-bold">
              Jupiter Media
            </Link>

            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-md hover:bg-muted text-muted-foreground"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <nav className="px-6 py-8 flex-1 flex flex-col gap-6 overflow-y-auto">
            <Link className="text-lg font-medium" href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link className="text-lg font-medium" href="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>

            {/* Mobile Destination Dropdown */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                Destination
                <ChevronDown className="h-5 w-5 group-open:rotate-180 transition" />
              </summary>
              <div className="mt-3 ml-4 flex flex-col gap-3 text-muted-foreground">
                {["Australia", "UK", "USA", "Canada", "India"].map((c) => (
                  <Link
                    key={c}
                    href={`/destination/${c.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Destination {c}
                  </Link>
                ))}
              </div>
            </details>

            {/* Mobile Gallery Dropdown */}
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                Gallery
                <ChevronDown className="h-5 w-5 group-open:rotate-180 transition" />
              </summary>
              <div className="mt-3 ml-4 flex flex-col gap-3 text-muted-foreground">
                <Link href="/gallery/photos" onClick={() => setMenuOpen(false)}>Photo Gallery</Link>
                <Link href="/gallery/videos" onClick={() => setMenuOpen(false)}>Video Gallery</Link>
              </div>
            </details>

            <Link className="text-lg font-medium" href="/testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </Link>
            <Link className="text-lg font-medium" href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}


    </header>
  )
}


// {menuOpen && (
//   <div className="fixed inset-0 z-50 bg-background">
//     <div className="flex items-center justify-between px-4 h-16 border-b border-border">
//       <span className="text-lg font-serif font-bold">Menu</span>
//       <button onClick={() => setMenuOpen(false)}>
//         <X />
//       </button>
//     </div>

//     <nav className="px-6 py-8 space-y-6 text-lg font-medium">
//       <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
//       <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>

//       {/* Mobile Destination */}
//       <div>
//         <button
//           onClick={() => setOpenSub(openSub === "dest" ? null : "dest")}
//           className="flex w-full items-center justify-between"
//         >
//           Destination <ChevronDown className={`transition ${openSub === "dest" ? "rotate-180" : ""}`} />
//         </button>
//         {openSub === "dest" && (
//           <div className="mt-3 ml-4 space-y-3 text-muted-foreground">
//             {["Australia", "UK", "USA", "Canada", "India"].map((c) => (
//               <Link
//                 key={c}
//                 href={`/destination/${c.toLowerCase()}`}
//                 onClick={() => setMenuOpen(false)}
//                 className="block"
//               >
//                 Destination {c}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Mobile Gallery */}
//       <div>
//         <button
//           onClick={() => setOpenSub(openSub === "gallery" ? null : "gallery")}
//           className="flex w-full items-center justify-between"
//         >
//           Gallery <ChevronDown className={`transition ${openSub === "gallery" ? "rotate-180" : ""}`} />
//         </button>
//         {openSub === "gallery" && (
//           <div className="mt-3 ml-4 space-y-3 text-muted-foreground">
//             <Link href="/gallery/photos" onClick={() => setMenuOpen(false)}>Photos</Link>
//             <Link href="/gallery/videos" onClick={() => setMenuOpen(false)}>Videos</Link>
//           </div>
//         )}
//       </div>

//       <Link href="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>

//       <Link
//         href="/contact"
//         onClick={() => setMenuOpen(false)}
//         className="inline-block mt-6 rounded-full bg-primary px-6 py-3 text-white"
//       >
//         Contact Us
//       </Link>
//     </nav>
//   </div>
// )}