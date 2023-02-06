import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, HatenaIcon, HatenaShareButton, LineIcon, LineShareButton, TwitterIcon, TwitterShareButton } from "next-share";

type Props = {
  text: string;
  url: string;
  iconSize?: number;
  rounded?: boolean;
};

/// シェアボタン
export default function Share({ text, url, iconSize = 32, rounded = true }: Props) {
  return (
    <ul className="list-none flex flex-row flex-wrap gap-2 justify-center items-center my-2">
      <li>
        <TwitterShareButton
          url={url}
          title={text}
        >
          <TwitterIcon size={iconSize} round={rounded} />
        </TwitterShareButton>
      </li>
      <li>
        <FacebookShareButton
          url={url}
          quote={text}
        >
          <FacebookIcon size={iconSize} round={rounded} />
        </FacebookShareButton>
      </li>
      <li>
        <HatenaShareButton
          url={url}
          title={text}
        >
          <HatenaIcon size={iconSize} round={rounded} />
        </HatenaShareButton>
      </li>
      <li>
        <LineShareButton
          url={url}
          title={text}
        >
          <LineIcon size={iconSize} round={rounded} />
        </LineShareButton>
      </li>
      <li>
        <EmailShareButton
          url={url}
          subject={text}
          body={url}
        >
          <EmailIcon size={iconSize} round={rounded} />
        </EmailShareButton>
      </li>
    </ul>
  );
}
