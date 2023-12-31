import { Metadata } from "next";
import Link from "next/link";
import { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import ExternalAnchor from "../components/external-anchor";
import Project from "../components/project";
import StaticImage from "../components/static-image";
import ThemeButton from "../components/theme-button";
import postulate from "../public/postulate_ellipses.svg";
import splash from "../public/sebastian-svenson-LpbyDENbQQg-unsplash.jpg";
import taptap from "../public/taptapsplash.svg";

export const metadata: Metadata = {
  title: "Postulate",
};

function FooterIcon({
  href,
  icon,
}: {
  href: string;
  icon: ReactElement;
}): ReactElement {
  return (
    <ExternalAnchor
      href={href}
      className="p-1 hover:text-black dark:hover:text-gray-100"
    >
      {icon}
    </ExternalAnchor>
  );
}

export default function Hero(): ReactElement {
  return (
    <div className="dark:bg-gray-800">
      <div className="fixed w-full shadow bg-white bg-opacity-80 backdrop-filter backdrop-blur backdrop-saturate-125 transition-opacity duration-500 sm:opacity-0 scroll-show dark:bg-gray-800 dark:bg-opacity-80 dark:backdrop-brightness-125">
        <div className="max-w-4xl h-full mx-auto my-2 px-6 flex items-center justify-between dark:text-gray-100">
          <Link href="/">
            <span className="flex items-center">
              <StaticImage
                src={postulate}
                alt="postulate.ai logo"
                height={36}
                width={36}
              />
              <span className="font-[Oswald] text-4xl pl-2">postulate</span>
            </span>
          </Link>
          <ThemeButton />
        </div>
      </div>
      <div
        className={`h-screen w-full bg-center bg-cover bg-fixed flex justify-center items-center`}
        style={{ backgroundImage: `url(${splash.src})` }}
      >
        <span className="text-8xl font-bold text-black transition-opacity duration-500 scroll-hide font-[Oswald] select-none">
          postulate
        </span>
      </div>
      <div className="min-h-screen max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold py-4 mt-4 bg-clip-text text-transparent bg-gradient-to-br from-sky-600 to-sky-800">
          Projects
        </h2>
        <ul className="px-4 space-y-8 w-full">
          <Project
            logo={taptap}
            logoSize={128}
            logoBackground="bg-white dark:bg-slate-900"
            name="TapTap**"
            description={`TapTap** is a Sarah needs to fill this in.`}
            buttons={[
              {
                text: "TestFlight",
                href: "https://testflight.apple.com/join/ZkIL34hh",
                icon: <GrTest />,
              },
              {
                text: "Github",
                href: "https://github.com/postulate-ai/tap-tap-ios",
                icon: <FaGithub />,
              },
            ]}
          />
        </ul>
        <div className="my-8 space-y-2 w-full text-gray-600 dark:text-gray-400">
          <div className="text-md flex justify-center">
            <FooterIcon
              href="https://github.com/postulate-ai"
              icon={<FaGithub />}
            />
          </div>
          <div className="text-center text-sm">
            Hero photo by{" "}
            <ExternalAnchor
              className="hover:text-sky-400"
              href="https://unsplash.com/@sebastiansvenson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            >
              Sebastian Svenson
            </ExternalAnchor>{" "}
            on{" "}
            <ExternalAnchor
              className="hover:text-sky-400"
              href="https://unsplash.com/photos/blue-and-white-round-illustration-LpbyDENbQQg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            >
              Unsplash
            </ExternalAnchor>
          </div>
        </div>
      </div>
    </div>
  );
}
