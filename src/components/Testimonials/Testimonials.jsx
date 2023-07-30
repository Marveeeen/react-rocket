import React from "react";
import Section from "../UI/Section";
import Testimony from "./Testimony";
import { decodeHTMLEntities } from "../../lib/decodeHTMLEntities";

const testimonials = [
  {
    author: "Wile E. Coyete, Genius",
    message:
      "Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience",
  },
  {
    author: decodeHTMLEntities("Marvin The Martian &amp; K-9"),
    message:
      "The Acme Adventurer Rocket has twarted my Illudium Q-36 Explosive Space Modulator on several occasions. This makes me very, very angry! Nevertheless, K-9 and I have awarded Acme the Martian contract for space exploration rockets base on Acme's quality and sturdy design",
  },
  {
    author: "Buzz Lightyear",
    message: decodeHTMLEntities(
      "I knew I not only wanted &#8212; I needed &#8212; Acme's Infinity Rocket for my mission in space. Acme delivered in one day! Nothing says Take me to your leader like Acme's Infinity Rocket!"
    ),
  },
];

function Testimonials() {
  return (
    <Section title="Testimonials">
      {testimonials.map((testimony) => (
        <Testimony key={testimony.author} testimony={testimony} />
      ))}
    </Section>
  );
}

export default Testimonials;
