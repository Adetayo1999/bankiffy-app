/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { memo, useEffect, useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const SupportedCountriesMap = () => {
  const [hovered, setHovered] = useState<{
    name: string;
    supported: boolean;
  } | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mapScale, setMapScale] = useState(140);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setMapScale(120);
      } else if (width < 768) {
        setMapScale(140);
      } else if (width < 1024) {
        setMapScale(150);
      } else {
        setMapScale(160);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const supported = useMemo(
    () => ({
      names: new Set([
        "Uganda",
        "Nigeria",
        "Tanzania",
        "Ghana",
        "Kenya",
        "South Africa",
        "United Kingdom",
        "United States of America",
        "United States",
        "Canada",
      ]),
      numericIds: new Set([
        "800", // Uganda
        "566", // Nigeria
        "834", // Tanzania
        "288", // Ghana
        "404", // Kenya
        "710", // South Africa
        "826", // United Kingdom
        "840", // United States
        "124", // Canada
      ]),
    }),
    []
  );

  const isSupported = (geo: any) => {
    const props = geo?.properties || {};
    const name = props.name || props.NAME || props.ADMIN;
    const id = String(geo.id);

    return (name && supported.names.has(name)) || supported.numericIds.has(id);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      onMouseMove={handleMouseMove}
    >
      {hovered && (
        <div
          style={{
            position: "absolute",
            left: mousePos.x + 12,
            top: mousePos.y - 10,
            padding: "6px 12px",
            background: hovered.supported
              ? "linear-gradient(135deg, #3b5998 0%, #2b4478 100%)"
              : "rgba(20, 30, 50, 0.9)",
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 500,
            color: "#fff",
            pointerEvents: "none",
            zIndex: 20,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            border: hovered.supported
              ? "1px solid rgba(100, 140, 200, 0.4)"
              : "1px solid rgba(255, 255, 255, 0.1)",
            animation: "tooltipFadeIn 0.15s ease-out",
          }}
        >
          {hovered.name}
          {hovered.supported && (
            <span
              style={{
                marginLeft: 6,
                fontSize: 10,
                background: "rgba(255,255,255,0.2)",
                padding: "2px 6px",
                borderRadius: 4,
              }}
            >
              ✓ Supported
            </span>
          )}
        </div>
      )}
      <style>{`
        @keyframes tooltipFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: mapScale, center: [0, 30] }}
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          {/* land base gradient (similar vibe to your screenshot) */}
          <linearGradient
            id="landGradient"
            x1="0"
            y1="0"
            x2="1100"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#1A2437" />
            <stop offset="60%" stopColor="#111B2B" />
            <stop offset="100%" stopColor="#0E1624" />
          </linearGradient>

          {/* supported highlight */}
          <linearGradient
            id="supportedGradient"
            x1="0"
            y1="0"
            x2="1100"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#2B3B5F" />
            <stop offset="100%" stopColor="#1E2C4A" />
          </linearGradient>
        </defs>

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const supportedCountry = isSupported(geo);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const n =
                      geo.properties?.name || geo.properties?.NAME || "Unknown";
                    setHovered({ name: n, supported: supportedCountry });
                  }}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    default: {
                      fill: supportedCountry
                        ? "url(#supportedGradient)"
                        : "url(#landGradient)",
                      outline: "none",
                      stroke: "transparent",
                    },
                    hover: {
                      fill: supportedCountry ? "#38507F" : "url(#landGradient)",
                      outline: "none",
                      cursor: supportedCountry ? "pointer" : "default",
                    },
                    pressed: {
                      fill: supportedCountry ? "#2E4470" : "url(#landGradient)",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(SupportedCountriesMap);
