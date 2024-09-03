'use client'

import { useState, ReactNode, useEffect } from 'react'
import Image from 'next/image'

type CarouselProps = {
  images: string[]
  children?: ReactNode
}

const Carousel = ({ images, children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearTimeout(interval)
  }, [currentIndex, images.length])

  return (
    <div className="relative mb-10">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full flex-shrink-0">
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={2000}
                height={2000}
                className="h-96 w-full rounded-lg object-cover"
              />
              {children && (
                <div className="absolute inset-0 flex items-center justify-center">{children}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`mx-1 h-3 w-3 rounded-full focus:outline-none ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
