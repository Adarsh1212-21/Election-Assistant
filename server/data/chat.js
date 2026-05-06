const chatResponses = {
  "how to vote": {
    answer:
      "To vote in India: 1) Ensure you're registered as a voter. 2) Check your polling booth via the NVSP website or Voter Helpline (1950). 3) On election day, carry your Voter ID (or any of 12 alternate IDs). 4) Visit your booth, verify your name, and cast your vote on the EVM. 5) Your finger will be marked with ink.",
  },
  "required documents": {
    answer:
      "You can use any ONE of these IDs to vote: Voter Photo ID Card (EPIC), Aadhaar Card, Passport, Driving Licence, PAN Card, MNREGA Job Card, Smart Card issued by RGI, Passbook with photo from Bank/Post Office, Health Insurance Smart Card (ESIC), Pension Document with photo, NPR Smart Card, Official identity card issued by Central/State Government.",
  },
  "how to register": {
    answer:
      "To register as a voter: 1) Visit voters.eci.gov.in or the Voter Helpline App. 2) Fill Form 6 (for new registration). 3) Attach proof of age, proof of residence, and a passport-size photo. 4) Submit online or at your nearest Electoral Registration Office. 5) You'll receive your EPIC card within a few weeks.",
  },
  "polling booth": {
    answer:
      "To find your polling booth: 1) Visit electoralsearch.eci.gov.in. 2) Enter your name/EPIC number. 3) Your booth details will appear. You can also call the National Voter Helpline at 1950.",
  },
  "evm": {
    answer:
      "EVM stands for Electronic Voting Machine. It's a tamper-proof device used in Indian elections since 1999. It consists of: a Control Unit (with the officer) and a Balloting Unit (with the voter). You press a button next to your candidate's name and symbol. A VVPAT machine shows a paper slip for 7 seconds to confirm your vote.",
  },
  "vvpat": {
    answer:
      "VVPAT (Voter Verifiable Paper Audit Trail) is a machine attached to the EVM that prints a paper slip showing the candidate symbol, name, and serial number for 7 seconds. This lets you verify your vote was recorded correctly. The slip falls into a sealed box and is used for auditing if needed.",
  },
  "model code of conduct": {
    answer:
      "The Model Code of Conduct (MCC) is a set of guidelines issued by the Election Commission of India. It comes into effect as soon as election dates are announced. Key rules: Parties cannot use government machinery for campaigning, no hate speech or divisive statements, no bribery of voters, no defacement of public property, and a 48-hour silence period before polling.",
  },
  "voter id": {
    answer:
      "Your Voter ID (EPIC) can be obtained by: 1) Registering online at voters.eci.gov.in. 2) Downloading the Voter Helpline App. 3) Visiting your BLO (Booth Level Officer) or ERO office. You can also download a digital copy (e-EPIC) from the NVSP portal.",
  },
  default: {
    answer:
      "I'm your Election Assistant! I can help you with topics like: how to vote, required documents, voter registration, finding polling booths, EVMs, VVPAT, Model Code of Conduct, or getting your Voter ID. Please try asking about one of these topics!",
  },
};

const findResponse = (query) => {
  const q = query.toLowerCase();
  for (const key of Object.keys(chatResponses)) {
    if (key !== "default" && q.includes(key)) {
      return chatResponses[key].answer;
    }
  }
  return chatResponses["default"].answer;
};

module.exports = { findResponse };
