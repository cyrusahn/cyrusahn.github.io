import cloudpractitionerLogo from "../public/cloudpractitioner.png"

export interface Certification {
    title: string;
    issuer: string;
    image: string;
    link: string;
  }
  
  export const certifications: Certification[] = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      image: cloudpractitionerLogo,
      link: "https://www.credly.com/badges/306d50bd-7cc9-4255-bdb0-d88136c66dee/public_url"
    },
    // Add more certificates here in the same format
  ];
  