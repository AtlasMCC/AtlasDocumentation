import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Clipboard, Label, TextInput, Accordion } from "flowbite-react"


function HomepageHeader() {
  return (

<div class="scroll-smooth">
<section class="flex bg-center bg-cover bg-no-repeat bg-[url('/static/img/atlasbackground.png')] bg-gray-700 bg-blend-multiply">


  <div class="px-4 mx-auto max-w-screen-xl text-center py-0">

    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
    
    <video class="px-auto mx-auto max-w-screen border-1 border-gray-200 rounded-lg shadow py-0 lg:py-0" alt="" playsinline autoplay="autoplay" loop="loop" muted>
      <source src={require('/home.mp4').default} type="video/mp4"/>
    </video>

    <div class=" space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

      <div class="p-5">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">AtlasNation</h1>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-200">Bienvenue</p>
        <a href="#joinserver" class="group/hoveranimation no-underline hover:no-underline inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg class="transition transform group-hover/hoveranimation:translate-y-0.5 motion-[#FF0000]uce:transition-none motion-[#FF0000]uce:hover:transform-none mx-1 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>
          Commencer l'aventure
          <svg class="transition transform group-hover/hoveranimation:translate-y-0.5 motion-[#FF0000]uce:transition-none motion-[#FF0000]uce:hover:transform-none mx-1 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>

        </a>

      </div>

    </div>
  </div>
</section>
<section>
  <div class="grid grid-cols-4 gap-4">
    <a role="button" href="#" class="px-6 py-3.5 inline-flex no-underline hover:no-underline text-white hover:text-white border border-none hover:bg-[#7289d9] focus:ring-4 focus:outline-none focus:ring-[#7289d9] font-medium rounded-lg text-xl font-medium text-center dark:border-[#7289d9] dark:text-white dark:hover:text-white dark:hover:bg-[#7289d9] dark:focus:ring-[#7289d9]">
    <svg class="w-8 h-8 me-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
    </svg> Discord
    </a>
    
    <a role="button" href="#" class="px-6 py-3.5 inline-flex no-underline hover:no-underline text-white hover:text-white border border-none hover:bg-[#FF0000] focus:ring-4 focus:outline-none focus:ring-[#FF0000] font-medium rounded-lg text-xl font-medium text-center dark:border-[#FF0000] dark:text-white dark:hover:text-white dark:hover:bg-[#FF0000] dark:focus:ring-[#FF0000]">
    <svg class="w-8 h-8 me-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
    </svg>
    YouTube
    </a>

    <a role="button" href="#" class="px-6 py-3.5 inline-flex no-underline hover:no-underline text-white hover:text-white border border-none hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] focus:ring-4 focus:outline-none focus:ring-none font-medium rounded-lg text-xl font-medium text-center dark:border-none dark:text-white dark:hover:text-white dark:hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] dark:focus:ring-[#FF0000]">

    <svg class="w-8 h-8 me-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
    </svg>

    Instagram
    </a>

    <a role="button" href="#" class="px-6 py-3.5 inline-flex no-underline hover:no-underline text-white hover:text-white border border-none hover:bg-none focus:ring-4 focus:outline-none focus:ring-none font-medium rounded-lg text-xl font-medium text-center dark:border-none dark:text-white dark:hover:text-white dark:hover:bg-none dark:focus:ring-none ">
    <svg class="w-6 h-8 me-2 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
    </svg>
    TikTok
    </a>
    </div>
</section>
<section id="joinserver" class="mx-2">

  <h2 class="text-4xl font-semibold">Commencer l'aventure</h2>

  <h3 class="mb-3 mt-5 text-center text-3xl font-semibold">Adresse IP</h3>

    <div className="w-full text-center  mx-auto">
      <div className="relative inline-flex text-center px-auto">
        <TextInput id="serverIP" placeholder="" value="play.atlasnation.fr" readOnly class="text-center text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <Clipboard.WithIcon valueToCopy="play.atlasnation.fr" class="absolute right-4 top-auto h-full text-xl" />
      </div>
    </div>

  <h3 class="mb-3 mt-5 text-center text-3xl font-semibold">Version Minecraft</h3>

    <div className="w-full text-center mx-auto">
      <div className="relative inline-flex text-center px-auto">
        <TextInput id="mcVersion" placeholder="" value="Java 1.20.1" readOnly class="text-center text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
    </div>

</section>
<section class="mx-2">
  <h2 class="text-4xl font-semibold">Liens utiles</h2>
  <div class="grid grid-cols-2 gap-4 mt-5">


    <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="http://map.atlasnation.fr/">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Map dynamique</h5>
        </a>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Prenez de la hauteur, et observez le monde en temps réel, depuis le ciel !</p>
        <a href="http://map.atlasnation.fr/" class="inline-flex font-medium items-center text-blue-600 hover:underline">
            Ouvrir la dynmap
            <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
        </a>
    </div>

    <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="http://docs.atlasnation.fr/">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Documentation</h5>
        </a>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Vous retrouverez ici toutes les informations concernant le serveur, afin de profiter de la meilleure expérience possible.</p>
        <a href="http://docs.atlasnation.fr/" class="inline-flex font-medium items-center text-blue-600 hover:underline">
            Ouvrir la documentation
            <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
        </a>
    </div>

  </div>
</section>
<section class="mx-2">
  <h2 class="text-4xl font-semibold my-4">Fonctionnalités intéressantes</h2>


    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Véhicules</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Prenez place au volant des véhicules, qui permettent de vous déplacer plus vite sur le serveur.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Mariage</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Deux joueurs peuvent choisir de se marier, afin de bénficier ensemble de certains avantages. 
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>SlimeFun</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <b>SlimeFun</b> permet d'ajouter de nombreuses fonctionnalités, ainsi que des objets, ce qui débloque encore plus de possibilités dans votre survie Minecraft.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Votre XP vous permettra d'accéder à ces ajouts. Plus elle sera élevée, plus vous pourrez débloquer des compétences et des crafts.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Parmi les ajouts proposés par <b>SlimeFun</b>, les plus intéressants sont :</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>Des effets de magie</li>
            <li>Des sacs à dos</li>
            <li>Des machines électriques</li>
            <li>Des gadgets</li>
            <li>De nouvelles armes et armures</li>
            <li>De nouveux moyens pour gérer vos items</li>
            <li>Un réacteur nucléaire</li>
            <li>Et bien plus encore</li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Meubles</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Afin de décorer vos bâtiments d'une manière exceptionnelle, vous pourrez utiliser des <b>meubles 3D</b>.
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Movecraft</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            N'avez vous pas déjà rêvé de pouvoir construire des véhicules fonctionnels comme vous le souhaitez, à l'aide de blocs classiques ? <b>MoveCraft</b> est l'outil idéal pour faire de ce rêve une réalité.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>









</section>
</div>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Documentation d'AtlasMC">
      <HomepageHeader />
      <main>

      </main>
    </Layout>
  );
}