"use client";

interface BoxProps {
  id: number;
  title: string;
  description: string;
  color: string;
  gradient: string;
  index: number;
}

export default function Box({
  title,
  description,
  color,
  gradient,
  index,
}: BoxProps) {
  return (
    <div className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16">
      <div
        className={`w-full max-w-6xl h-64 sm:h-80 lg:h-96 rounded-3xl ${gradient} p-8 sm:p-12 lg:p-16 flex flex-col justify-center shadow-2xl transform hover:scale-105 transition-all duration-300`}
      >
        <div className="space-y-4 sm:space-y-6">
          {/* Number indicator */}
          <div className="flex items-center space-x-4">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 ${color} rounded-full flex items-center justify-center shadow-lg`}
            >
              <span className="text-white text-sm sm:text-base font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="h-px bg-white/30 flex-1"></div>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-200 flex items-center space-x-2 border border-white/20">
              <span>Explore</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
