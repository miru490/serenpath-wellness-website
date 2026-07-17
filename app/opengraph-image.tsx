import { ImageResponse } from "next/og";

export const alt = "SerenPath wellness website portfolio case study";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#faf7f2",
          color: "#2f2a26",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#8faf9f",
            borderRadius: "999px",
            height: "300px",
            opacity: 0.2,
            position: "absolute",
            right: "-80px",
            top: "-110px",
            width: "300px",
          }}
        />
        <div
          style={{
            border: "2px solid #e8ddd2",
            borderRadius: "40px",
            display: "flex",
            flexDirection: "column",
            padding: "64px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#8a6b52",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Self-directed portfolio case study
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Georgia, serif",
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1,
              marginTop: "30px",
            }}
          >
            SerenPath
          </div>
          <div
            style={{
              color: "#6f625a",
              display: "flex",
              fontSize: 34,
              lineHeight: 1.35,
              marginTop: "24px",
            }}
          >
            Calm wellness UX, honest trust-building, and low-pressure conversion.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
