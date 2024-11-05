import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Faq() {
  return (
    <div className="max-w-[760px] m-auto">
      <h1 className="text-[32px]  font-extrabold font-manrope text-[#F9FAFB]">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full text-start">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Сургалт авснаар надад ямар ашигтай вэ?
          </AccordionTrigger>
          <AccordionContent>
            Vitae congue eu consequat ac felis placerat vestibulum lectus mauris
            ultrices. Cursus sit amet dictum sit amet justo donec enim diam
            porttitor lacus luctus accumsan tortor posuere.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Сертификат зөвхөн Монголд хүчинтэй юу?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Төлбөр байгаа юу?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Ямар ч насны хүн суралцах боломжтой юу?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Сертификат биетээр олгодог уу?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-.">
          <AccordionTrigger>
            Хэрэглэгчийн тусламж хаана хандах вэ?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
