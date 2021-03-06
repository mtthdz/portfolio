import { PostProps } from "@/types/Props";

export const apiData: PostProps[] = [
  {
    id: '9215b5a1-1fc9-465f-9079-6e63dd0cafbd',
    title: 'Diving into UUIDs',
    slug: 'diving-into-uuids',
    date: '10/13',
    body: '<p>When I started working with SQL databases, it quickly became apparent that it&apos;s best practice to use universally unique identifiers (UUIDs) when setting a primary key for a table row as opposed to integers (which seems to be a default for a few databases, but that&apos;s another rabbit hole to go down another time).</p><p>And then I came across a HackerNews post sharing Buildkite&apos;s release of UUID version 7. Remembering that Supabases&apos; built-in UUID generator uses version 4, I did some digging. Why are there 7 versions of a random string of characters, and what are the separate use-cases?</p><p>There&apos;s actually only 5 official versions. UUIDv1 is made up of a MAC address and timestamp, which while it can provide meaningful insight in certain contexts, creates concern for sensitive information leaks. V3 and V5 both hash a namespace using MD5 and SHA-1 algorithms (respectively) to generate their unique strings, with the main difference being in bit count. Because there are conflicting opinions about both hash algorithms&apos; effectiveness, V4 is the most widely used version due to its pure randomness.</p><p>This brings us to versions 6 and 7. UUIDv6 reuses a lot of V1&apos;s bits, but with changes to ordering in its timestamp for indexing purposes. While V6 uses 48 bits of random data, V7 follows suit but uses 74 bits making it significantly more secure. However because of timestamping, the conversation about UUIDv1 continues with potential sensitivity leaks.</p><p>In short, UUIDv7 definitely has its uses and seems like the successor to V6 (and V1 to an extent). While I&apos;ll continue to use UUIDv4 for sensitive information like user data, UUIDv7 sounds like a great alternative to optimize indexing when time is within context.</p>',
  },
  {
    id: '24e003de-bede-43ab-ae0d-b183ed155cd9',
    title: 'Designing a system with supabase',
    slug: 'designing-a-system-with-supabase',
    date: '10/5',
    body: '<p>My first project as rax&apos;s CTO is to build and ship the product MVP by Christmas (the current iteration is a no-code prototype to test market fit). The project is broken down into 3 tasks: assemble a team, redesign the UI and UX, and build.</p><p>I quickly onboarded a designer and front end developer and quickly got into the design process, which also bought me time to assess what tech to execute with. The front end was simple for me as a JavaScript developer: a TypeScript and React Native front end, understanding that funding (for developer salaries) is scarce in a startup, and hiring native developers always come in pairs. We&apos;d use Redux to manage global state and GraphQL to serve up the API. As for the backend, I chose Supabase.</p><p>My first introduction into Supabase was during a catchup call with a lead developer over at STRV in Prague. He mentioned his experimenting out of curiosity to it being the direct competitor to Firebase.&apos; Fast forward to assessing rax&apos;s system design, where it started crossing off a lot of boxes.</p><p>Working through the system design reminded me of a HackerNoon piece about someone detailing their failed startup as a technical cofounder. They spent their time and resources building out a pristine backend, running out of runway before even determining their market fit. Their takeaway was how important speed is when executing a go to market strategy.</p><p>As I progressed through the backend design checklist, Supabase seemed to cover it all: load balancing, API gateways, CDNs, asset storage, Oauth, even a CMS integration with basedash. While relying on a single vendor for all of these services is a separate conversation of concern, being able to save development hours with a backend-as-a-service will let us focus on shipping speed. We probably won&apos;t stay with Supabase forever, but for now it&apos;s exactly what we need.</p>',
  },
  {
    id: '18479ba4-14b8-45b5-9fc3-9d3f05c80a36',
    title: 'Hello',
    slug: 'hello',
    date: '10/2',
    body: '<p>Writing about tech has been something I&apos;ve thought about doing since the day I became a developer, as it was something that I was doing regularly in my past career in finance. And while I&apos;ve never really felt like I&apos;ve dealt with imposter syndrome that&apos;s so widely experienced in tech, at the time I did not feel like I had much value to contibute.</p><p>But then I took another perspective. A past mentor of mine gave me advice that has always stuck; "think about a time when you felt incredible doing something, figure out why you felt that way, and then spend your life chasing that why."</p><p>I became a developer because I love building things and learning how to solve problems. Why not share what I&apos;ve built and what I&apos;ve learned? </p>',
  },
]