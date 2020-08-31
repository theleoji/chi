import Head from "next/head";
import {NextSeo as Seo} from "next-seo";

import {Layout} from "components/layout";

import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpenText} from "@fortawesome/pro-regular-svg-icons";
import {faKeybase, faTwitter} from "@fortawesome/free-brands-svg-icons";

function ContactItem({
	children,
	icon,
}: {
	children: React.ReactNode;
	icon: FontAwesomeIconProps["icon"];
}) {
	return (
		<p
			style={{
				display: "grid",
				gridTemplateColumns: `1.5em auto`,
				alignItems: "center",
			}}
		>
			<FontAwesomeIcon icon={icon} height="1em" />
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
				<ContactItem icon={faEnvelopeOpenText}>
					<a href="mailto:leo@leoji.codes">email: leo@leoji.codes</a>
				</ContactItem>
				<ContactItem icon={faKeybase}>
					<a
						href="https://keybase.io/leoji/pgp_keys.asc?fingerprint=0f55a90ac45ffca98fc4f0b3d94d635da839be2c"
						title="Open link to Keybase.io in new window"
					>
						PGP key, hosted on keybase.io
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
			</section>
		</Layout>
	);
}
