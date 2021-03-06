import Head from "next/head";
import {NextSeo as Seo} from "next-seo";
import execCopy from "copy-to-clipboard";

import {Layout} from "components/layout";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import {faCommentDots} from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelopeOpenText,
  faMobileAlt,
} from "@fortawesome/pro-regular-svg-icons";
import {
  faKeybase,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function ContactItem({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: FontAwesomeIconProps["icon"];
}) {
  return (
    <p style={{}}>
      <FontAwesomeIcon
        icon={icon}
        height="1em"
        width="2ch"
        style={{marginRight: "1ch"}}
      />
      {children}
    </p>
  );
}

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | Leo Ji</title>
      </Head>
      <Seo
        title="Contact | Leo Ji"
        description="Contact Leo."
        openGraph={{
          type: "website",
          url: "https://leoji.codes",
          title: "Contact | Leo Ji",
          description:
            "Phone numbers, email addresses, and other ways to contact Leo Ji.",
        }}
      />
      <h1>Contact</h1>
      <p>Do you need to talk to me?</p>
      <section className="pt-2">
        <ContactItem icon={faMobileAlt}>
          <a
            href="tel:+12029091200"
            data-nofader
            title="Call +1 (202) 909-1200"
          >
            +1 (202) 909-1200
          </a>
        </ContactItem>
        <ContactItem icon={faCommentDots}>
          <a
            href="sms:+12029091200"
            className="small"
            data-nofader
            title="Compose SMS message to +1 (202) 909-1200"
          >
            also +1 (202) 909-1200
          </a>
        </ContactItem>
        <hr />
        <ContactItem icon={faEnvelopeOpenText}>
          <a
            href="mailto:leo@leoji.codes"
            data-nofader
            title="Compose email to leo@leoji.codes"
          >
            leo@leoji.codes
          </a>
        </ContactItem>
        <ContactItem icon={faKeybase}>
          <a
            href="https://keybase.io/leoji/pgp_keys.asc?fingerprint=0f55a90ac45ffca98fc4f0b3d94d635da839be2c"
            title="Open link to Keybase.io in new window"
          >
            PGP key (hosted on keybase.io)
          </a>
        </ContactItem>
        <hr />
        <ContactItem icon={faTwitter}>
          <a
            href="https://twitter.com/theleoji"
            title="Open link to Twitter in new window"
            target="_blank"
          >
            @theleoji
          </a>
        </ContactItem>
        <ContactItem icon={faDiscord}>
          <OverlayTrigger
            overlay={
              <Tooltip id="discord-username" className="small">
                Click to copy
              </Tooltip>
            }
          >
            <a
              data-nofader
              title="Click to copy Discord username theleoji#7304"
              href=""
              onClick={event => {
                event.preventDefault();
                execCopy("theleoji#7304");
              }}
            >
              theleoji#7304
            </a>
          </OverlayTrigger>
        </ContactItem>
      </section>
    </Layout>
  );
}
