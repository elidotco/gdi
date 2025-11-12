export const desktopHeaderPhrase = ["Frequently asked", "questions"];
export const mobileHeaderPhrase = ["Frequently", "asked", "questions"];
export const animate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  open: (i) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData = [
  {
    question: "What services does GDI MACS provide?",
    answer:
      "GDI MACS offers comprehensive hydrological engineering, agricultural support services, construction services, general logistics, and plant & equipment management across 25+ countries in West Africa.",
  },
  {
    question: "In which countries does GDI MACS operate?",
    answer:
      "We operate across West Africa including Ghana, Liberia, Sierra Leone, Côte d'Ivoire, Guinea, Togo, Mali, Burkina Faso, Benin, and Senegal, with headquarters in Accra, Ghana.",
  },
  {
    question: "What is GDI MACS's approach to sustainability?",
    answer:
      "At the heart of GDI MACS is a strategy to deliver sustainable solutions beyond shareholder return, including global objectives around environmental responsibility, social mobility, and community impact in all our operations.",
  },
  {
    question: "How can I request equipment or services from GDI MACS?",
    answer:
      "You can contact us directly at our Ghana offices (+233 243 334 444 or +233 244 334 000) or Liberia office (+231 777 3333). Our team is available to discuss your project requirements and provide customized solutions.",
  },
  {
    question: "What makes GDI MACS different from other service providers?",
    answer:
      "With 150 years of combined experience, operations in 25+ countries, and a commitment to diversity and sustainability, GDI MACS offers a rare combination of international expertise with local knowledge across West Africa.",
  },
];
