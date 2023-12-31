 import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-30">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          
          <code className="font-Mono font-Bold">BATMAN</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-60 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
          >
            {'Sohail Bashir '}
            <Image
              src="/Next.js Icon.PNG"
              alt="Batman"
              className="dark"
              width={100}
              height={30}
              priority
            />
          </a>
        </div>
      </div>

<br/>
<p> BATMAN THE HERO OF DARKNESS, FAMOUS CARTOON CHARACTER AMOUNG CHILDREN</p> <br/>
      <div className="relative flex place-items-center before:absolute before:h-[200px] before:w-[280px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-4]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark"
          src="/logo.jpg"
          alt="Batman Logo"
          width={180}
          height={30}
          priority
        />
      </div> <br/>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-4xl font-semibold`}>
            BATMAN
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h2>
          <p className={`m-0 max-w-[100ch] text-sm opacity-120`}>
            <img src="/logo1.jpg"  width={180}
          height={12} />  Batman the Hero of darkness, famous cartoon character amoung children.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-10 text-4xl font-semibold`}>
            BATMAN
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h2>
          <p className={`m-0 max-w-[100ch] text-sm opacity-120`}>
            <img src="/1.webp"  width={180}
          height={12} />  Batman the Hero of darkness, famous cartoon character amoung children.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-10 text-4xl font-semibold`}>
            BATMAN
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h2>
          <p className={`m-0 max-w-[100ch] text-sm opacity-120`}>
            <img src="/Batwheels.jpg"  width={180}
          height={12} />  Batman the Hero of darkness, famous cartoon character amoung children.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-10 text-4xl font-semibold`}>
            Theme Car
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h2>
          <p className={`m-0 max-w-[100ch] text-sm opacity-120`}>
            <img src="/batman-theme-car.webp"  width={180}
          height={12} />  Batman the Hero of darkness, famous cartoon character amoung children.
          </p>
        </a>
      </div>
    </main>
  )
}
