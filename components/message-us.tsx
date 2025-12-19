"use client";

import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingMessageButton() {
    const [open, setOpen] = useState(false);

    const messengerLink = "https://m.me/jupitermedianepal"; // Replace with your Messenger link
    const whatsappLink = "https://wa.me/jupitermedianepal"; // Replace with your WhatsApp link

    return (
        <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end space-y-4">
            {/* Popup Links */}
            <div
                className={`flex flex-col items-end gap-3 transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
                    }`}
            >
                <a
                    href={messengerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                    <MessageCircle size={20} />
                </a>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                    <Phone size={20} />
                </a>
            </div>

            {/* Main Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex cursor-pointer items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-xl hover:scale-110 transition-transform relative"
            >
                <MessageCircle size={24} />
                {/* <span className="absolute -top-0 -left-20 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg opacity-90">
                    Message Us
                </span> */}
            </button>
        </div>
    );
}
