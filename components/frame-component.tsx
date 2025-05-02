"use client"

import { useState } from "react"
import Image from "next/image"
import { Slider } from "@/components/ui/slider"

interface FrameComponentProps {
  imageSrc: string
  alt: string
  title?: string
  width: number | string
  height: number | string
  className?: string
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  onMediaSizeChange: (value: number) => void
  onBorderThicknessChange: (value: number) => void
  onBorderSizeChange: (value: number) => void
  showControls: boolean
  label: string
  showFrame: boolean
  isHovered: boolean
}

export function FrameComponent({
  imageSrc,
  alt,
  title,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  onMediaSizeChange,
  onBorderThicknessChange,
  onBorderSizeChange,
  showControls,
  label,
  showFrame,
  isHovered,
}: FrameComponentProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <div
      className={`relative ${className} gallery-card`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
    >
      <div className="relative w-full h-full overflow-hidden bg-[#220005]">
        {/* Bottom hemisphere light effect */}
        <div className="overhead-glow" style={{ opacity: isHovered ? 1 : 0 }} />

        {/* Enhanced bottom light for dynamic frames */}
        <div className="dynamic-overhead-glow" style={{ opacity: isHovered ? 1 : 0 }} />

        {/* Image with Border (now borderless) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: "0",
            width: "100%",
            height: "100%",
            left: "0",
            top: "0",
          }}
        >
          <div
            className="w-full h-full overflow-hidden"
            style={{
              transform: `scale(${isZoomed ? mediaSize * 1.05 : mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {/* Image component */}
            <div className="relative w-full h-full">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={alt || label || "Gallery image"}
                fill
                className="object-cover image-hover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={true}
              />

              {/* Enhanced placeholder watermark */}
              <div className="placeholder-watermark"></div>
            </div>
          </div>
        </div>

        {/* Title overlay */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#220005] to-transparent z-10">
            <h3 className="text-white font-playfair text-lg">{title}</h3>
          </div>
        )}
      </div>

      {/* Controls - kept for potential future use but will never show */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-[#220005] bg-opacity-90 z-10">
          <div className="text-white font-bold mb-2">{label}</div>
          <div className="space-y-2">
            <div>
              <label htmlFor={`media-size-${label}`} className="block text-sm font-medium text-white">
                Media Size: {mediaSize.toFixed(2)}
              </label>
              <Slider
                id={`media-size-${label}`}
                min={0.5}
                max={3}
                step={0.01}
                value={[mediaSize]}
                onValueChange={(value) => onMediaSizeChange(value[0])}
              />
            </div>
            <div>
              <label htmlFor={`border-thickness-${label}`} className="block text-sm font-medium text-white">
                Border Thickness: {borderThickness}px
              </label>
              <Slider
                id={`border-thickness-${label}`}
                min={0}
                max={20}
                step={1}
                value={[borderThickness]}
                onValueChange={(value) => onBorderThicknessChange(value[0])}
              />
            </div>
            <div>
              <label htmlFor={`border-size-${label}`} className="block text-sm font-medium text-white">
                Border Size: {borderSize}%
              </label>
              <Slider
                id={`border-size-${label}`}
                min={50}
                max={100}
                step={1}
                value={[borderSize]}
                onValueChange={(value) => onBorderSizeChange(value[0])}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
