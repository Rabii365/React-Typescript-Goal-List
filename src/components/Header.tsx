import { ReactNode } from "react";

interface GoalDetails {
  image: { src: string; alt: string };
  children: ReactNode;
}

export default function Header({ image, children }: GoalDetails) {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
}
