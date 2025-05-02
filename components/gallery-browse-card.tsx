import Link from "next/link"
import { ImageIcon } from "lucide-react"

interface GalleryBrowseCardProps {
  title: string
  description: string
  href: string
}

export default function GalleryBrowseCard({ title, description, href }: GalleryBrowseCardProps) {
  return (
    <Link href={href} className="block h-full">
      <div className="gallery-browse-card h-full flex flex-col justify-between">
        <div className="flex justify-center">
          <ImageIcon className="gallery-browse-icon h-16 w-16 text-burnished-gold" />
        </div>
        <h3 className="gallery-browse-title">{title}</h3>
        <p className="gallery-browse-description">{description}</p>
      </div>
    </Link>
  )
}
