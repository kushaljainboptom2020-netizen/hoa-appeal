import { attributionForGuideCategory } from "@/lib/content/editorial/attribution";
import type { SampleLetter } from "./types";

const attribution = attributionForGuideCategory("appeals-letters");

function letter(
  partial: Omit<SampleLetter, "attribution">
): SampleLetter {
  return { ...partial, attribution };
}

export const EXTRA_SAMPLE_LETTERS: SampleLetter[] = [
  letter({
    slug: "sample-hoa-noise-complaint-appeal-letter",
    title: "Sample HOA Noise Complaint Appeal Letter",
    metaTitle: "Sample HOA Noise Complaint Appeal Letter",
    metaDescription:
      "A fictional HOA noise-fine appeal. Replace the dates, the rule, and the facts. It does not guarantee a result.",
    excerpt:
      "A fictional response to a noise fine that asks for the rule, the dates, and the log the association used.",
    keyword: "HOA noise complaint appeal letter",
    letter: {
      date: "September 2, 2026",
      addressee: ["Board of Directors", "North Lot Owners Association"],
      subject: "Appeal of noise fine N-19 — 8 Cedar Court",
      greeting: "Dear Board:",
      paragraphs: [
        "I appeal noise fine N-19, dated August 20, 2026, for $75. This letter is a fictional sample. Replace every name, date, and amount with your own.",
        "The notice says loud music occurred on August 18 after 10 p.m. I was not home that night. I ask for the complaint log, the rule section quoted, and any recording or witness note the association relied on.",
        "A city noise ticket, if one exists, is a different process from this fine. I am not asking the board to decide a municipal case.",
        "Please withdraw the fine if the file does not identify a rule I actually broke, or schedule the review your governing documents describe and send the decision in writing.",
        "I will bring a copy of my travel receipt for August 18 if the hearing is about that date. Do not treat this sample as proof that a board withdrew a fine.",
      ],
      signOff: "Sincerely,\nMina Alvarez\nOwner, 8 Cedar Court",
    },
  }),
  letter({
    slug: "sample-hoa-pet-fine-appeal-letter",
    title: "Sample HOA Pet Fine Appeal Letter",
    metaTitle: "Sample HOA Pet Fine Appeal Letter",
    metaDescription:
      "A fictional pet-fine appeal. It does not give advice about assistance animals and it does not guarantee a result.",
    excerpt:
      "A fictional pet-fine letter that asks for the pet rule and the photos. It tells you not to invent a disability accommodation.",
    keyword: "HOA pet fine appeal letter",
    letter: {
      date: "September 3, 2026",
      addressee: ["Fines Committee", "Harbor Walk Association"],
      subject: "Appeal of pet fine P-44 — 220 Dock Street",
      greeting: "Dear Committee:",
      paragraphs: [
        "I appeal pet fine P-44 for an unleashed dog on August 12, 2026. The names in this sample are fictional.",
        "Please send the pet rule you applied, the photo or incident note, and the fine schedule in effect that day.",
        "If the dispute is about an assistance animal, do not copy this letter. Get advice before you describe a disability or refuse an accommodation. This sample does not do either.",
        "I ask the committee to identify the section that sets the leash rule and to say whether a warning was required by the rules before a fine.",
        "Please reply in writing. This letter does not claim the fine was cancelled.",
      ],
      signOff: "Sincerely,\nParker Cole\nOwner, 220 Dock Street",
    },
  }),
  letter({
    slug: "sample-hoa-holiday-decoration-appeal-letter",
    title: "Sample HOA Holiday Decoration Appeal Letter",
    metaTitle: "Sample HOA Holiday Decoration Appeal Letter",
    metaDescription:
      "A fictional decoration-fine appeal. Replace the display dates and the rule. It does not guarantee a result.",
    excerpt:
      "A fictional letter about a decoration taken down after the date in a notice, asking which rule set the deadline.",
    keyword: "HOA decoration fine appeal letter",
    letter: {
      date: "January 8, 2026",
      addressee: ["Architectural Committee", "Elm Square Association"],
      subject: "Appeal of decoration fine D-7 — 14 Elm Square",
      greeting: "Dear Committee:",
      paragraphs: [
        "I appeal decoration fine D-7, posted January 3, 2026, for lights still on the porch. This sample is fictional.",
        "The notice did not quote the rule that sets the take-down date. I removed the lights on January 4. Photos from January 2 and January 4 are attached in a real letter; they are not attached to this sample.",
        "Please send the decoration rule and say whether it is in the declaration or in a seasonal memo. A memo is not automatically an amendment.",
        "I ask you to withdraw the fine if the only support is an uncirculated memo, or to tell me the recorded section that applies.",
        "Do not describe this sample as a waiver the committee granted.",
      ],
      signOff: "Sincerely,\nAvery Singh\nOwner, 14 Elm Square",
    },
  }),
  letter({
    slug: "sample-hoa-rental-restriction-appeal-letter",
    title: "Sample HOA Rental Restriction Appeal Letter",
    metaTitle: "Sample HOA Rental Restriction Appeal Letter",
    metaDescription:
      "A fictional rental-rule appeal. A city license is not the same as a declaration limit. No result is promised.",
    excerpt:
      "A fictional letter that asks which rental section was applied and separates a city license from the association rule.",
    keyword: "HOA rental restriction appeal letter",
    letter: {
      date: "September 9, 2026",
      addressee: ["Board of Directors", "Westfield Owners Association"],
      subject: "Appeal of rental fine R-12 — 90 Westfield Lane",
      greeting: "Dear Board:",
      paragraphs: [
        "I appeal rental fine R-12. The facts below are fictional and must be replaced.",
        "The notice says the home was listed for a stay under 30 days. Please quote the declaration section that sets the minimum lease term and send the registration rule if there is one.",
        "A city rental license, if I have one, does not by itself satisfy or violate the declaration. Please do not treat those as the same document.",
        "I ask for the hearing or written review the governing documents provide and for a written decision. I am not asking this letter to decide whether short stays are legal in every state.",
        "If the amount is large or the letter mentions a lawsuit, I should hire a lawyer. This sample is not that lawyer.",
      ],
      signOff: "Sincerely,\nNoah Bennett\nOwner, 90 Westfield Lane",
    },
  }),
  letter({
    slug: "sample-hoa-maintenance-fine-appeal-letter",
    title: "Sample HOA Maintenance Fine Appeal Letter",
    metaTitle: "Sample HOA Maintenance Fine Appeal Letter",
    metaDescription:
      "A fictional maintenance-fine appeal about a repair delay. It does not create a cure period and it does not guarantee a result.",
    excerpt:
      "A fictional letter that attaches a contractor date and asks the association to identify the maintenance standard it used.",
    keyword: "HOA maintenance fine appeal letter",
    letter: {
      date: "September 12, 2026",
      addressee: ["Compliance Committee", "Ridgeview Association"],
      subject: "Appeal of maintenance fine M-3 — 5 Ridgeview Court",
      greeting: "Dear Committee:",
      paragraphs: [
        "I appeal maintenance fine M-3 for peeling trim, dated August 28, 2026. This sample is fictional.",
        "A contractor is scheduled for September 20. I ask you to identify the maintenance section you applied and any cure language in the declaration. This letter does not invent a number of days.",
        "Photos of the trim and the contractor's written date should be exhibits in a real packet. They are described here so you know what to attach.",
        "Please hold further daily charges only if your own schedule says charges accrue daily. If it does not, say so in the decision rather than assuming a daily rate.",
        "I request a written decision. Nothing in this sample reports that a committee waived a fine.",
      ],
      signOff: "Sincerely,\nElena Vasquez\nOwner, 5 Ridgeview Court",
    },
  }),
];
