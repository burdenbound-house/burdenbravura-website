"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { motion } from "framer-motion"
import { FrameComponent } from "./frame-component"

interface Frame {
  id: number
  imageSrc: string
  alt: string
  title: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  isHovered: boolean
}

interface HoveredState {
  row: number
  col: number
}

export default function DynamicFrameLayout({ images }: { images: { src: string; alt: string; title: string }[] }) {
  // Frame assets
  const cornerAsset = "/images/frame-corner.png"
  const edgeHorizontalAsset = "/images/frame-edge-horizontal.png"
  const edgeVerticalAsset = "/images/frame-edge-vertical.png"

  // Create frames from provided images
  const initialFrames: Frame[] = images.map((image, index) => {
    // Calculate grid position based on index
    const row = Math.floor(index / 2)
    const col = index % 2

    return {
      id: index + 1,
      imageSrc: image.src,
      alt: image.alt,
      title: image.title || "",
      defaultPos: {
        x: col * 4,
        y: row * 4,
        w: 4,
        h: 4,
      },
      corner: cornerAsset,
      edgeHorizontal: edgeHorizontalAsset,
      edgeVertical: edgeVerticalAsset,
      mediaSize: 1,
      borderThickness: 8,
      borderSize: 90,
      isHovered: false,
    }
  })

  const [frames, setFrames] = useState<Frame[]>(initialFrames)
  const [showFrames, setShowFrames] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const [cleanInterface, setCleanInterface] = useState(true)
  const [hovered, setHovered] = useState<HoveredState | null>(null)
  const [gapSize, setGapSize] = useState(16)

  // Update frame property
  const updateFrameProperty = (id: number, property: keyof Frame, value: any) => {
    setFrames((prevFrames) => prevFrames.map((frame) => (frame.id === id ? { ...frame, [property]: value } : frame)))
  }

  // Calculate grid template columns and rows
  const getColSizes = () => {
    const cols = 8 // 2 frames per row, each 4 units wide
    return Array(cols).fill("1fr").join(" ")
  }

  const getRowSizes = () => {
    const maxRow = Math.max(...frames.map((f) => f.defaultPos.y + f.defaultPos.h))
    const rows = Math.ceil(maxRow / 4) * 4
    return Array(rows).fill("1fr").join(" ")
  }

  // Get transform origin based on position
  const getTransformOrigin = (x: number, y: number) => {
    const col = Math.floor(x / 4)
    const row = Math.floor(y / 4)

    if (col === 0) {
      return row === 0 ? "top left" : "bottom left"
    } else {
      return row === 0 ? "top right" : "bottom right"
    }
  }

  return (
    <div className="space-y-4 w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch id="frame-toggle" checked={showFrames} onCheckedChange={setShowFrames} />
            <label htmlFor="frame-toggle" className="text-sm text-[#E0E0E0]">
              {showFrames ? "Hide Frames" : "Show Frames"}
            </label>
          </div>
        </div>
      </div>

      <div
        className="relative w-full"
        style={{
          display: "grid",
          gridTemplateRows: getRowSizes(),
          gridTemplateColumns: getColSizes(),
          gap: `${gapSize}px`,
          transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
        }}
      >
        {frames.map((frame) => {
          const row = Math.floor(frame.defaultPos.y / 4)
          const col = Math.floor(frame.defaultPos.x / 4)
          const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

          return (
            <motion.div
              key={frame.id}
              className="relative aspect-[4/3] frame-container"
              style={{
                gridColumn: `${col * 4 + 1} / span ${frame.defaultPos.w}`,
                gridRow: `${row * 4 + 1} / span ${frame.defaultPos.h}`,
                transformOrigin,
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={() => setHovered({ row, col })}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.02 }}
            >
              <FrameComponent
                imageSrc={frame.imageSrc}
                alt={frame.alt}
                title={frame.title}
                width="100%"
                height="100%"
                className="absolute inset-0"
                corner={frame.corner}
                edgeHorizontal={frame.edgeHorizontal}
                edgeVertical={frame.edgeVertical}
                mediaSize={frame.mediaSize}
                borderThickness={frame.borderThickness}
                borderSize={frame.borderSize}
                onMediaSizeChange={(value) => updateFrameProperty(frame.id, "mediaSize", value)}
                onBorderThicknessChange={(value) => updateFrameProperty(frame.id, "borderThickness", value)}
                onBorderSizeChange={(value) => updateFrameProperty(frame.id, "borderSize", value)}
                showControls={showControls && !cleanInterface}
                label={frame.title || `Frame ${frame.id}`}
                showFrame={showFrames}
                isHovered={
                  hovered?.row === Math.floor(frame.defaultPos.y / 4) &&
                  hovered?.col === Math.floor(frame.defaultPos.x / 4)
                }
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
