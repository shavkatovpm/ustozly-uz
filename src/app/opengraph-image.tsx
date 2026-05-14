import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ustozly.uz — ustozlar va o'quv markazlari platformasi";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #18171a 0%, #26231f 55%, #3a3428 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            U
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            Ustozly.uz
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: -2.5,
              lineHeight: 1.05,
            }}
          >
            Ustoz ham, ish ham Ustozlyda!
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              opacity: 0.85,
              maxWidth: 900,
            }}
          >
            O&apos;zbekistondagi ustozlar va o&apos;quv markazlarini bog&apos;lovchi HR
            platforma
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 22,
            opacity: 0.9,
          }}
        >
          <div style={{ display: "flex" }}>1 200+ ustoz</div>
          <div style={{ display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>320+ o&apos;quv markazi</div>
          <div style={{ display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>4.8 reyting</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
