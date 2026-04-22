import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ElevenClicks — Web, Mobile & AI Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050510",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background glow — top-left blue */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 560,
            height: 560,
            background:
              "radial-gradient(circle, rgba(79,142,247,0.18) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        {/* Background glow — bottom-right purple */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -120,
            width: 560,
            height: 560,
            background:
              "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Location badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 22px",
            borderRadius: 100,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.55)",
            fontSize: 18,
            marginBottom: 32,
            letterSpacing: 1,
          }}
        >
          📍  Ontario, Canada
        </div>

        {/* Logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 18,
              background: "linear-gradient(135deg, #4F8EF7 0%, #8B5CF6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
            }}
          >
            ⚡
          </div>
          <span
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: -1,
            }}
          >
            ElevenClicks
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            maxWidth: 720,
            lineHeight: 1.5,
            marginBottom: 52,
          }}
        >
          Web, Mobile &amp; AI Solutions for Canadian Businesses
        </div>

        {/* Service pills */}
        <div
          style={{
            display: "flex",
            gap: 14,
          }}
        >
          {[
            { label: "Web Development", color: "#4F8EF7" },
            { label: "Android Apps", color: "#8B5CF6" },
            { label: "AI Solutions", color: "#EC4899" },
            { label: "Maintenance", color: "#06B6D4" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                padding: "10px 24px",
                borderRadius: 100,
                background: `${s.color}18`,
                border: `1px solid ${s.color}40`,
                color: s.color,
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {s.label}
            </div>
          ))}
        </div>

        {/* Bottom URL strip */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "rgba(255,255,255,0.25)",
            fontSize: 16,
          }}
        >
          elevenclicks.com
        </div>
      </div>
    ),
    { ...size }
  );
}
