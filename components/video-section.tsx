"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasVideo, setHasVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  const handleVideoLoaded = () => {
    setHasVideo(true)
  }

  const handleVideoError = () => {
    setHasVideo(false)
  }

  return (
    <section className="py-32 md:py-40 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8">
            Welcome to Our Marketplace
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Discover amazing digital art and shop with us for premium creative assets that bring your projects to life.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="relative bg-card border border-border rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/placeholder.jpg"
                onEnded={handleVideoEnd}
                onLoadedData={handleVideoLoaded}
                onError={handleVideoError}
                muted={isMuted}
                preload="metadata"
                controls={false}
              >
                <source src="/invideo-ai-1080 Discover Artistry—Shop Inspire Design To 2025-09-14 (1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                {/* Welcome Text Overlay */}
                <div className="text-center mb-8">
                  <h4 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2 animate-pulse">
                    Welcome!
                  </h4>
                  <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-medium">
                    Shop With Us
                  </p>
                </div>
                
                <Button
                  onClick={togglePlay}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 shadow-2xl hover:scale-110 transition-transform duration-300"
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
                  ) : (
                    <Play className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 ml-1" />
                  )}
                </Button>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Button
                    onClick={toggleMute}
                    size="sm"
                    variant="secondary"
                    className="bg-black/60 hover:bg-black/80 text-white border-0 w-10 h-10 md:w-12 md:h-12"
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5 md:h-6 md:w-6" />
                    ) : (
                      <Volume2 className="h-5 w-5 md:h-6 md:w-6" />
                    )}
                  </Button>
                </div>
                
                <div className="text-white text-base md:text-lg bg-black/60 px-4 py-2 rounded-lg font-semibold">
                  10s
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-card-foreground mb-4 md:mb-6">
                You Are Welcome to Our Page - Shop With Us!
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty mb-6 md:mb-8 leading-relaxed">
                Welcome to our digital marketplace! We're thrilled to have you here. Browse our collection of premium digital art, 
                illustrations, and creative assets. Start shopping now and discover the perfect pieces for your next project.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg md:text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = '/products'}
                >
                  Start Shopping Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg md:text-xl font-semibold rounded-lg transition-all duration-300"
                  onClick={() => window.location.href = '/about'}
                >
                  Learn More About Us
                </Button>
              </div>
              
              {!hasVideo && (
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 md:p-8">
                  <h4 className="text-orange-800 font-bold mb-4 flex items-center gap-3 text-lg md:text-xl">
                    <Download className="h-5 w-5 md:h-6 md:w-6" />
                    Video Loading
                  </h4>
                  <div className="text-orange-700 text-base md:text-lg space-y-2">
                    <p><strong>Your custom Inspire Design video is loading...</strong></p>
                    <p>If you don't see the video, please check your internet connection or try refreshing the page.</p>
                    <p className="text-sm mt-3 font-medium">Video: "Discover Artistry—Shop Inspire Design"</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
