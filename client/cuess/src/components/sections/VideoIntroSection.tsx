"use client";

import { motion } from "framer-motion";
import Section from "../../components/Section";
import LiteYouTube from "../../components/LiteYouTube";

export default function VideoIntroSection() {
  // your link: https://youtu.be/cDTOcltnSJE?si=...
  const YT_ID = "cDTOcltnSJE";

  return (
    <Section id="video">
      <div className="mb-6">
        <h2>Discover CUESS</h2>
        <p className="lead mt-2">A quick look at our culture of building.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border bg-white p-3 md:p-4"
      >
        <LiteYouTube id={YT_ID} title="CUESS Intro" className="w-full" />
      </motion.div>
    </Section>
  );
}