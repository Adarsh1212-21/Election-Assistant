export const chatData = {
  "how to vote": "To vote in India: 1) Ensure you're registered as a voter. 2) Check your polling booth via the NVSP website or Voter Helpline (1950). 3) On election day, carry your Voter ID (or any of 12 alternate IDs). 4) Visit your booth, verify your name, and cast your vote on the EVM. 5) Your finger will be marked with ink.",
  "required documents": "You can use any ONE of these IDs to vote: Voter Photo ID Card (EPIC), Aadhaar Card, Passport, Driving Licence, PAN Card, MNREGA Job Card, Passbook with photo (Bank/Post Office), Health Insurance Smart Card, Pension Document with photo, NPR Smart Card, or Official government identity card.",
  "how to register": "To register as a voter: 1) Visit voters.eci.gov.in or the Voter Helpline App. 2) Fill Form 6. 3) Attach proof of age, residence proof, and photo. 4) Submit online or at your ERO office. 5) You'll receive your EPIC card within a few weeks.",
  "polling booth": "To find your polling booth: 1) Visit electoralsearch.eci.gov.in. 2) Enter your name/EPIC number. 3) Your booth details will appear. You can also call the National Voter Helpline at 1950.",
  "evm": "EVM (Electronic Voting Machine) is used in Indian elections since 1999. It has a Control Unit (with the officer) and Balloting Unit (with the voter). Press the button next to your candidate. VVPAT shows a paper slip for 7 seconds to confirm your vote.",
  "voter id": "Your Voter ID (EPIC) can be obtained by registering online at voters.eci.gov.in or via the Voter Helpline App. You can also download a digital e-EPIC from the NVSP portal.",
  default: "I'm your Election Assistant! Ask me about: how to vote, required documents, voter registration, polling booth, EVM, voter id, or election process.",
};

export const findLocalResponse = (query) => {
  const q = query.toLowerCase();
  for (const key of Object.keys(chatData)) {
    if (key !== "default" && q.includes(key)) return chatData[key];
  }
  return chatData["default"];
};

export const quickQuestions = [
  "How to vote?",
  "Required documents?",
  "How to register?",
  "Find polling booth",
  "What is EVM?",
  "How to get Voter ID?",
];
