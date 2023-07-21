"use client"
import React from 'react'
import Parallax from './components/Home/Parallax'
import ServicesModal from './components/Home/ServicesModal'
import Gallery from './components/Home/Gallery'
import FeatureSection from './components/Home/FeatureSection'
import Team from './components/Home/Team'
export default function Home() {
  return (
    <main className="home">
      <Parallax/>
      <ServicesModal/>
      <Gallery/>
      <FeatureSection/>
      <Team/>
    </main>
  )
}