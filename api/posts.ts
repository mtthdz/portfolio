import { PostProps } from "@/types/Props";

export const apiData: PostProps[] = [
  {
    id: '24e003de-bede-43ab-ae0d-b183ed155cd9',
    title: 'system design',
    slug: 'system-design',
    date: '10/4',
    body: '<p>My first project as rax&apos;s CTO is to build and ship the product MVP by Christmas (the current iteration is a no-code prototype to test market fit). The project is broken down into 3 tasks: assemble a team, redesign the UI and UX, and build.</p><p>I quickly onboarded a designer and front end developer and quickly got into the design process, which also bought me time to assess what tech to execute with. The front end was simple for me as a JavaScript developer: a TypeScript and React Native front end, understanding that funding (for developer salaries) is scarce in a startup, and hiring native developers always come in pairs. We&apos;d use Redux to manage global state and GraphQL to serve up the API. As for the backend, I chose Supabase.</p><p>My first introduction into Supabase was during a catchup call with a lead developer over at STRV in Prague. He mentioned his experimenting out of curiosity to it being the direct competitor to Firebase.&apos; Fast forward to assessing rax&apos;s system design, and it started crossing off a lot of boxes.</p><p>Working through the system design reminded me of a HackerNews post (or comment) about someone detailing their failed startup as a technical cofounder. THey spent their time and resources building out a pristine backend, running out of runway before even determining market fit. Their takeaway was how important speed is when executing a go to market strategy.</p><p>As I progressed through the backend design checklist, Supabase seemed to cover it all: load balancing, API gateways, CDNs, asset storage, auth, even a CMS integration with basedash. While relying on a single vendor for all of these services is a separate conversation of concern, being able to save development hours with a backend-as-a-service will let us focus on shipping speed. We probably won&apos;t stay with Supabase forever, but for now it&apos;s exactly what we need.</p>',
  },
  {
    id: '18479ba4-14b8-45b5-9fc3-9d3f05c80a36',
    title: 'hello',
    slug: 'hello',
    date: '10/3',
    body: '<p>Writing about tech has been something I&apos;ve thought about doing since the day I became a developer, as it was something that I was doing regularly in my past career in finance. And while I&apos;ve never really felt like I&apos;ve dealt with imposter syndrome that&apos;s so widely experienced in tech, I definitely felt like I didn&apos;t have much value to contibute starting out fresh.</p><p>But then I took another perspective. A past mentor of mine gave me advice that has always stuck: think about a time when you felt incredible doing something, and place yourself during that time and figure out what that was. And then simply spend your life chasing those decisions that put yourself back in that incredible feeling.</p><p>I became a developer because I love building things, solving problems, and perpetually learning. So it only makes sense to start writing to solidify these learnings, and to have a medium to look back on to see all of the growth I&apos;ve experienced.</p>',
  },
]